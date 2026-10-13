"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { DecayMode } from "@/data/nuclear";
import { SHELL_LETTERS } from "@/lib/chem";

type Decay = { mode: DecayMode; seconds: number };

type AtomProps = {
  protons: number;
  neutrons: number;
  shells: number[];
  decay?: Decay | null;
  /** Show shell letters and electron counts. */
  labels?: boolean;
  /** Freeze all motion. */
  paused?: boolean;
  /** Slower, calmer orbits for small previews. */
  compact?: boolean;
  className?: string;
  title?: string;
};

const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const OUTER = 282;

type Burst = { id: number; angle: number; mode: DecayMode };

/**
 * Bohr-style atom drawn in SVG.
 * The nucleus is packed with a sunflower (phyllotaxis) spiral, so it reads as a
 * dense ball at any size; electrons sit evenly on rings that turn at different speeds.
 * Radioactive atoms fire a decay particle every few seconds, paced by half-life.
 */
export function Atom({
  protons,
  neutrons,
  shells,
  decay,
  labels = false,
  paused = false,
  compact = false,
  className,
  title,
}: AtomProps) {
  const uid = useId().replace(/:/g, "");
  const A = protons + neutrons;
  const R = 13 + 62 * Math.sqrt((A - 1) / 293);

  const nucleons = useMemo(() => {
    const c = R / Math.sqrt(Math.max(A, 1));
    const rn = A === 1 ? R * 0.9 : c * 0.98;
    // Exactly `protons` protons, shuffled with a seeded generator so the mix looks
    // natural but stays identical between server and client renders.
    const kinds = Array.from({ length: A }, (_, i) => i < protons);
    const rand = mulberry32(A * 1000 + protons);
    for (let i = kinds.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [kinds[i], kinds[j]] = [kinds[j], kinds[i]];
    }
    const pts = Array.from({ length: A }, (_, i) => {
      const r = A === 1 ? 0 : c * Math.sqrt(i + 0.5);
      const t = i * GOLDEN;
      return { x: r * Math.cos(t), y: r * Math.sin(t), isProton: kinds[i] };
    });
    // Draw from the outside in so the centre sits on top: reads as a dome.
    return { rn, pts: pts.reverse() };
  }, [A, R, protons]);

  const rings = useMemo(() => {
    const n = shells.length;
    const inner = R + 36;
    // Few shells sit closer in; many shells spread out to the edge.
    const outer = Math.min(OUTER, inner + 60 + 48 * n);
    return shells.map((count, k) => {
      const r = n === 1 ? Math.min(inner + 72, OUTER) : inner + (k * (outer - inner)) / (n - 1);
      const er = Math.min(6.5, Math.max(3.2, ((2 * Math.PI * r) / count) * 0.26));
      const phase = k * 0.7;
      const electrons = Array.from({ length: count }, (_, j) => {
        const t = phase + (j / count) * Math.PI * 2;
        return { x: r * Math.cos(t), y: r * Math.sin(t) };
      });
      const base = compact ? 26 : 14;
      return { r, er, count, electrons, duration: base + k * (compact ? 9 : 6.5) };
    });
  }, [shells, R, compact]);

  /* ---- decay bursts ---- */
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [reduced, setReduced] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const still = paused || reduced;

  useEffect(() => {
    if (!decay || still) return;
    // Shorter half-life → more frequent bursts. Real rates would be invisible or glacial.
    const t = Math.min(1, Math.max(0, (Math.log10(decay.seconds) + 4) / 22));
    const interval = (compact ? 1.6 : 1.1) * 1000 + t * 6000;
    const fire = () => {
      const id = ++idRef.current;
      setBursts((b) => [...b.slice(-3), { id, angle: Math.random() * 360, mode: decay.mode }]);
      window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1700);
    };
    const first = window.setTimeout(fire, 700);
    const timer = window.setInterval(fire, interval);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
    };
  }, [decay, still, compact]);

  const pId = `p-${uid}`;
  const nId = `n-${uid}`;
  const glowId = `g-${uid}`;
  const haloId = `h-${uid}`;

  return (
    <svg
      viewBox="-300 -300 600 600"
      className={`atom ${className ?? ""}`}
      data-paused={still ? "true" : "false"}
      role="img"
      aria-label={
        title ??
        `Atom with ${protons} protons, ${neutrons} neutrons and ${protons} electrons in ${shells.length} shells`
      }
    >
      <defs>
        <radialGradient id={pId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffc2b2" />
          <stop offset="45%" stopColor="#f0644b" />
          <stop offset="100%" stopColor="#a8301e" />
        </radialGradient>
        <radialGradient id={nId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f4f8fd" />
          <stop offset="50%" stopColor="#a9bad3" />
          <stop offset="100%" stopColor="#5d6f8c" />
        </radialGradient>
        <radialGradient id={glowId}>
          <stop offset="0%" stopColor="#7fd4ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7fd4ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={haloId}>
          <stop offset="55%" stopColor="#f0644b" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#f0644b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Rings */}
      {rings.map((ring, k) => (
        <circle
          key={`ring-${k}`}
          r={ring.r}
          fill="none"
          stroke="rgb(190 215 245 / 0.2)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {/* Nucleus */}
      <circle r={R * 1.9} fill={`url(#${haloId})`} />
      <g className="atom-nucleus">
        {nucleons.pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={nucleons.rn}
            fill={`url(#${p.isProton ? pId : nId})`}
            stroke="rgb(5 15 32 / 0.55)"
            strokeWidth={Math.min(0.8, nucleons.rn * 0.12)}
          />
        ))}
      </g>

      {/* Decay bursts */}
      {bursts.map((b) => (
        <DecayBurst key={b.id} burst={b} R={R} innerRing={rings[0]?.r ?? R + 40} rn={nucleons.rn} pId={pId} nId={nId} />
      ))}

      {/* Electrons */}
      {rings.map((ring, k) => (
        <g
          key={`shell-${k}`}
          className="atom-shell"
          style={{ ["--orbit-duration" as string]: `${ring.duration}s` }}
        >
          {ring.electrons.map((e, j) => (
            <g key={j} transform={`translate(${e.x} ${e.y})`}>
              <circle r={ring.er * 2.6} fill={`url(#${glowId})`} />
              <circle r={ring.er} fill="#7fd4ff" />
              <circle r={ring.er * 0.42} cx={-ring.er * 0.25} cy={-ring.er * 0.25} fill="#e9f8ff" />
            </g>
          ))}
        </g>
      ))}

      {/* Shell labels */}
      {labels &&
        rings.map((ring, k) => (
          <g key={`label-${k}`} transform={`translate(0 ${-ring.r})`}>
            <rect
              x={-22}
              y={-9}
              width={44}
              height={18}
              rx={9}
              fill="#08162b"
              stroke="rgb(190 215 245 / 0.3)"
              vectorEffect="non-scaling-stroke"
            />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={11}
              fill="#eef4fa"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
            >
              {SHELL_LETTERS[k]} {ring.count}
            </text>
          </g>
        ))}
    </svg>
  );
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function DecayBurst({
  burst,
  R,
  innerRing,
  rn,
  pId,
  nId,
}: {
  burst: Burst;
  R: number;
  innerRing: number;
  rn: number;
  pId: string;
  nId: string;
}) {
  const s = Math.max(4.5, Math.min(rn, 7));
  const flash = <circle className="decay-flash" r={R + 12} fill="#a9e85c" opacity={0} style={{ mixBlendMode: "screen" }} />;

  if (burst.mode === "alpha") {
    return (
      <g>
        {flash}
        <g transform={`rotate(${burst.angle})`}>
          <g className="decay-out" style={{ ["--distance" as string]: "330px" }}>
            <circle cx={-s * 0.7} cy={-s * 0.7} r={s} fill={`url(#${pId})`} />
            <circle cx={s * 0.7} cy={-s * 0.7} r={s} fill={`url(#${nId})`} />
            <circle cx={-s * 0.7} cy={s * 0.7} r={s} fill={`url(#${nId})`} />
            <circle cx={s * 0.7} cy={s * 0.7} r={s} fill={`url(#${pId})`} />
            <circle r={s * 3.2} fill="none" stroke="#a9e85c" strokeOpacity={0.6} strokeWidth={1.2} />
          </g>
        </g>
      </g>
    );
  }

  if (burst.mode === "beta") {
    return (
      <g>
        {flash}
        <g transform={`rotate(${burst.angle})`}>
          <g
            className="decay-out"
            style={{ ["--distance" as string]: "360px", ["--speed" as string]: "900ms" }}
          >
            <line x1={-30} x2={0} y1={0} y2={0} stroke="#a9e85c" strokeWidth={2} strokeLinecap="round" opacity={0.7} />
            <circle r={4.5} fill="#a9e85c" />
          </g>
        </g>
      </g>
    );
  }

  if (burst.mode === "capture") {
    return (
      <g>
        <g transform={`rotate(${burst.angle})`}>
          <g className="decay-in" style={{ ["--distance" as string]: `${innerRing}px` }}>
            <circle r={6} fill="#a9e85c" />
          </g>
        </g>
        <circle className="decay-flash" r={R + 12} fill="#a9e85c" opacity={0} style={{ animationDelay: "800ms" }} />
      </g>
    );
  }

  // Spontaneous fission: two large fragments fly apart.
  const f = R * 0.5;
  return (
    <g>
      {flash}
      {[0, 180].map((offset) => (
        <g key={offset} transform={`rotate(${burst.angle + offset})`}>
          <g className="decay-out" style={{ ["--distance" as string]: "320px", ["--speed" as string]: "1600ms" }}>
            <circle r={f} fill={`url(#${pId})`} opacity={0.9} />
            <circle r={f * 0.62} cx={f * 0.25} cy={-f * 0.2} fill={`url(#${nId})`} opacity={0.85} />
          </g>
        </g>
      ))}
    </g>
  );
}
