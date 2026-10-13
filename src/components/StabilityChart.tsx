"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type StabilityPoint = {
  number: number;
  symbol: string;
  name: string;
  slug: string;
  protons: number;
  neutrons: number;
  massNumber: number;
  radioactive: boolean;
  halfLife: string | null;
};

// Validated (dark surface #08162b): stable vs radioactive, plus fill/ring as secondary encoding.
const STABLE = "#4A9BDB";
const RADIOACTIVE = "#70A836";
const SURFACE = "#08162b";

const W = 760;
const H = 470;
const M = { top: 20, right: 24, bottom: 46, left: 52 };
const X_MAX = 120;
const Y_MAX = 190;

const sx = (z: number) => M.left + (z / X_MAX) * (W - M.left - M.right);
const sy = (n: number) => H - M.bottom - (n / Y_MAX) * (H - M.top - M.bottom);

const DIRECT_LABELS = new Set([26, 82, 92, 118]);

export function StabilityChart({
  points,
  highlight,
}: {
  points: StabilityPoint[];
  highlight?: number;
}) {
  const router = useRouter();
  const [hover, setHover] = useState<StabilityPoint | null>(null);
  const focus = hover;

  const xTicks = [0, 20, 40, 60, 80, 100, 120];
  const yTicks = [0, 40, 80, 120, 160];

  return (
    <figure className="w-full">
      <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
        <span className="flex items-center gap-2">
          <svg width="12" height="12" aria-hidden="true">
            <circle cx="6" cy="6" r="5" fill={STABLE} />
          </svg>
          Has a stable isotope
        </span>
        <span className="flex items-center gap-2">
          <svg width="12" height="12" aria-hidden="true">
            <circle cx="6" cy="6" r="4.2" fill={`${RADIOACTIVE}55`} stroke={RADIOACTIVE} strokeWidth="2" />
          </svg>
          Every isotope is radioactive
        </span>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full overflow-visible"
          role="img"
          aria-label="Scatter chart of neutrons against protons for each element. Light elements sit on the equal line; heavier ones need extra neutrons, and everything past lead is radioactive."
          onMouseLeave={() => setHover(null)}
        >
          {/* Radioactive-only region beyond bismuth */}
          <rect
            x={sx(83.5)}
            y={M.top}
            width={sx(X_MAX) - sx(83.5)}
            height={H - M.top - M.bottom}
            fill={RADIOACTIVE}
            opacity={0.07}
          />
          <text x={sx(85)} y={sy(0) - 30} fontSize={12} fill="var(--color-muted)">
            <tspan x={sx(85)}>Past lead and bismuth,</tspan>
            <tspan x={sx(85)} dy={15}>no nucleus is stable</tspan>
          </text>

          {/* Grid + axes */}
          {yTicks.map((t) => (
            <g key={`y${t}`}>
              <line x1={M.left} x2={W - M.right} y1={sy(t)} y2={sy(t)} stroke="rgb(190 215 245 / 0.1)" />
              <text x={M.left - 10} y={sy(t)} fontSize={12} textAnchor="end" dominantBaseline="central" fill="var(--color-faint)">
                {t}
              </text>
            </g>
          ))}
          {xTicks.map((t) => (
            <text key={`x${t}`} x={sx(t)} y={H - M.bottom + 20} fontSize={12} textAnchor="middle" fill="var(--color-faint)">
              {t}
            </text>
          ))}
          <line x1={M.left} x2={W - M.right} y1={sy(0)} y2={sy(0)} stroke="rgb(190 215 245 / 0.28)" />
          <text x={(M.left + W - M.right) / 2} y={H - 6} fontSize={13} textAnchor="middle" fill="var(--color-muted)">
            Protons
          </text>
          <text
            transform={`translate(14 ${(M.top + H - M.bottom) / 2}) rotate(-90)`}
            fontSize={13}
            textAnchor="middle"
            fill="var(--color-muted)"
          >
            Neutrons
          </text>

          {/* Equal protons and neutrons */}
          <line x1={sx(0)} y1={sy(0)} x2={sx(X_MAX)} y2={sy(X_MAX)} stroke="rgb(190 215 245 / 0.35)" strokeWidth={1} />
          <text
            transform={`translate(${sx(96)} ${sy(96) + 18}) rotate(${(Math.atan2(sy(120) - sy(0), sx(120) - sx(0)) * 180) / Math.PI})`}
            fontSize={12}
            fill="var(--color-muted)"
            textAnchor="middle"
          >
            Equal protons and neutrons
          </text>

          {/* Points */}
          {points.map((p) => {
            const isFocus = focus?.number === p.number || highlight === p.number;
            const r = isFocus ? 7.5 : 4.5;
            return (
              <g key={p.number}>
                {highlight === p.number && (
                  <circle cx={sx(p.protons)} cy={sy(p.neutrons)} r={13} fill="none" stroke="var(--color-paper)" strokeWidth={1.5} />
                )}
                {p.radioactive ? (
                  <circle cx={sx(p.protons)} cy={sy(p.neutrons)} r={r} fill={`${RADIOACTIVE}55`} stroke={RADIOACTIVE} strokeWidth={2} />
                ) : (
                  <circle cx={sx(p.protons)} cy={sy(p.neutrons)} r={r + 1.5} fill={STABLE} stroke={SURFACE} strokeWidth={1.5} />
                )}
              </g>
            );
          })}

          {/* Selective direct labels */}
          {points
            .filter((p) => DIRECT_LABELS.has(p.number) || p.number === highlight)
            .map((p) => (
              <text
                key={`l${p.number}`}
                x={sx(p.protons) + (p.number > 100 ? 4 : 12)}
                y={sy(p.neutrons) + (p.number > 100 ? -14 : 18)}
                fontSize={12}
                fontWeight={p.number === highlight ? 700 : 500}
                textAnchor={p.number > 100 ? "end" : "start"}
                fill={p.number === highlight ? "var(--color-paper)" : "var(--color-muted)"}
              >
                {p.name}-{p.massNumber}
              </text>
            ))}

          {/* Hit targets, larger than the marks */}
          {points.map((p) => (
            <circle
              key={`hit${p.number}`}
              cx={sx(p.protons)}
              cy={sy(p.neutrons)}
              r={9}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHover(p)}
              onClick={() => router.push(`/element/${p.slug}`)}
            />
          ))}
        </svg>

        {focus && (
          <div
            className="pointer-events-none absolute z-10 w-56 rounded-md bg-ground-deep/95 p-3 text-sm shadow-lg ring-1 ring-line-strong"
            style={{
              left: `${(sx(focus.protons) / W) * 100}%`,
              top: `${(sy(focus.neutrons) / H) * 100}%`,
              transform: `translate(${focus.protons > 70 ? "calc(-100% - 14px)" : "14px"}, -50%)`,
            }}
          >
            <p className="font-semibold text-paper">
              {focus.name}-{focus.massNumber}
            </p>
            <p className="text-muted">
              {focus.protons} protons, {focus.neutrons} neutrons
            </p>
            <p className="text-muted">
              {(focus.neutrons / focus.protons).toFixed(2)} neutrons per proton
            </p>
            <p className="mt-1 text-faint">
              {focus.radioactive ? `Radioactive, half-life ${focus.halfLife}` : "Stable"}
            </p>
          </div>
        )}
      </div>

      <details className="mt-4 text-sm text-muted">
        <summary className="cursor-pointer text-faint hover:text-paper">View the data as a table</summary>
        <div className="mt-3 max-h-72 overflow-auto rounded ring-1 ring-line">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-ground-deep text-faint">
              <tr>
                <th className="px-3 py-2 font-medium">Isotope</th>
                <th className="px-3 py-2 font-medium">Protons</th>
                <th className="px-3 py-2 font-medium">Neutrons</th>
                <th className="px-3 py-2 font-medium">Stability</th>
              </tr>
            </thead>
            <tbody>
              {points.map((p) => (
                <tr key={p.number} className="border-t border-line">
                  <td className="px-3 py-1.5">
                    <Link href={`/element/${p.slug}`} className="hover:text-paper">
                      {p.name}-{p.massNumber}
                    </Link>
                  </td>
                  <td className="px-3 py-1.5">{p.protons}</td>
                  <td className="px-3 py-1.5">{p.neutrons}</td>
                  <td className="px-3 py-1.5">{p.radioactive ? `Half-life ${p.halfLife}` : "Stable"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
