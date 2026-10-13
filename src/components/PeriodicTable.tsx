"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Atom } from "@/components/Atom";
import { ElectronConfig } from "@/components/ElectronConfig";
import {
  CATEGORIES,
  CATEGORY_BY_KEY,
  type CategoryKey,
  formatTemp,
  kelvinToC,
  phaseAt,
} from "@/lib/chem";
import { type TileElement, yearValue } from "@/lib/tile";
import type { DecayMode } from "@/data/nuclear";

type Mode = "category" | "state" | "electronegativity" | "density" | "year";

const MODES: { key: Mode; label: string }[] = [
  { key: "category", label: "Category" },
  { key: "state", label: "State of matter" },
  { key: "electronegativity", label: "Electronegativity" },
  { key: "density", label: "Density" },
  { key: "year", label: "Year discovered" },
];

const STATE_COLOR = { solid: "#D6E0EE", liquid: "#5EB6F2", gas: "#B48CF5" } as const;
const STATE_LABEL = { solid: "Solid", liquid: "Liquid", gas: "Gas", unknown: "Unknown" } as const;

/** Cyanotype ramp: deep blue through cyan to paper white. */
const RAMP = ["#173a66", "#1f5f96", "#3a9ad0", "#8ed6f5", "#eef8ff"];

function ramp(t: number): string {
  const x = Math.min(1, Math.max(0, t)) * (RAMP.length - 1);
  const i = Math.min(RAMP.length - 2, Math.floor(x));
  const f = x - i;
  const a = hex(RAMP[i]);
  const b = hex(RAMP[i + 1]);
  const c = a.map((v, k) => Math.round(v + (b[k] - v) * f));
  return `rgb(${c[0]} ${c[1]} ${c[2]})`;
}
function hex(h: string): number[] {
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
}

const ROOM = 293;

export function PeriodicTable({ elements }: { elements: TileElement[] }) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("category");
  const [kelvin, setKelvin] = useState(ROOM);
  const [query, setQuery] = useState("");
  const [legendFocus, setLegendFocus] = useState<CategoryKey | null>(null);
  const [legendPinned, setLegendPinned] = useState<CategoryKey | null>(null);
  const [active, setActive] = useState<number>(6); // carbon
  const [focusIndex, setFocusIndex] = useState(0);
  const tileRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const byPos = useMemo(() => {
    const m = new Map<string, number>();
    elements.forEach((e, i) => m.set(`${e.x},${e.y}`, i));
    return m;
  }, [elements]);

  /* ---- search ---- */
  const q = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!q) return null;
    const hits = elements.filter(
      (e) =>
        e.symbol.toLowerCase() === q ||
        e.name.toLowerCase().includes(q) ||
        String(e.number) === q ||
        (q === "aluminum" && e.symbol === "Al") ||
        (q === "cesium" && e.symbol === "Cs") ||
        (q === "sulphur" && e.symbol === "S"),
    );
    // Exact symbol or number matches first.
    hits.sort((a, b) => score(b, q) - score(a, q));
    return hits;
  }, [elements, q]);
  const matchSet = useMemo(() => (matches ? new Set(matches.map((m) => m.number)) : null), [matches]);

  const highlight = legendPinned ?? legendFocus;

  const isDimmed = (e: TileElement) => {
    if (matchSet) return !matchSet.has(e.number);
    if (highlight) return e.category !== highlight;
    return false;
  };

  /* ---- keyboard ---- */
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "/" && document.activeElement?.tagName !== "INPUT") {
        ev.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const moveFocus = useCallback(
    (from: number, dx: number, dy: number) => {
      const e = elements[from];
      let x = e.x;
      let y = e.y;
      for (let step = 0; step < 20; step++) {
        x += dx;
        y += dy;
        if (y === 8) y += dy; // gap row between the main table and the f-block
        if (x < 1 || x > 18 || y < 1 || y > 10) return;
        const hit = byPos.get(`${x},${y}`);
        if (hit !== undefined) {
          setFocusIndex(hit);
          tileRefs.current[hit]?.focus();
          return;
        }
        if (dy !== 0) continue; // vertical moves skip gaps in the same column
      }
    },
    [byPos, elements],
  );

  const onTileKey = (ev: React.KeyboardEvent, i: number) => {
    const map: Record<string, [number, number]> = {
      ArrowRight: [1, 0],
      ArrowLeft: [-1, 0],
      ArrowDown: [0, 1],
      ArrowUp: [0, -1],
    };
    const d = map[ev.key];
    if (d) {
      ev.preventDefault();
      moveFocus(i, d[0], d[1]);
    }
  };

  /* ---- values per mode ---- */
  const scales = useMemo(() => {
    const en = elements.map((e) => e.electronegativity).filter((v): v is number => v != null);
    const dens = elements.map((e) => e.density).filter((v): v is number => v != null && v > 0);
    return {
      enMin: Math.min(...en),
      enMax: Math.max(...en),
      dLogMin: Math.log10(Math.min(...dens)),
      dLogMax: Math.log10(Math.max(...dens)),
    };
  }, [elements]);

  const tileStyle = (e: TileElement) => {
    if (mode === "category") {
      const c = CATEGORY_BY_KEY[e.category].color;
      return {
        bg: `${c}1f`,
        border: `${c}66`,
        symbol: c,
        text: "var(--color-muted)",
        dashed: e.categoryPredicted,
        value: e.name,
      };
    }
    if (mode === "state") {
      const p = phaseAt(e, kelvin);
      if (p === "unknown")
        return { bg: "transparent", border: "rgb(190 215 245 / 0.22)", symbol: "var(--color-faint)", text: "var(--color-faint)", dashed: true, value: "Unknown" };
      const c = STATE_COLOR[p];
      return { bg: `${c}26`, border: `${c}80`, symbol: c, text: "var(--color-muted)", dashed: false, value: STATE_LABEL[p] };
    }
    let t: number | null = null;
    let value = "No data";
    if (mode === "electronegativity" && e.electronegativity != null) {
      t = (e.electronegativity - scales.enMin) / (scales.enMax - scales.enMin);
      value = e.electronegativity.toFixed(2);
    }
    if (mode === "density" && e.density != null && !e.predicted) {
      t = (Math.log10(e.density) - scales.dLogMin) / (scales.dLogMax - scales.dLogMin);
      value = e.density < 0.01 ? e.density.toExponential(1) : e.density < 10 ? e.density.toFixed(2) : e.density.toFixed(1);
    }
    if (mode === "year") {
      const y = yearValue(e.year);
      if (y == null) {
        t = 0;
        value = "Ancient";
      } else {
        t = 0.08 + 0.92 * ((y - 1600) / (2010 - 1600));
        value = e.year;
      }
    }
    if (t == null)
      return { bg: "transparent", border: "rgb(190 215 245 / 0.18)", symbol: "var(--color-faint)", text: "var(--color-faint)", dashed: true, value };
    const c = ramp(t);
    const dark = t > 0.6;
    return {
      bg: c,
      border: c,
      symbol: dark ? "#08162b" : "#eef4fa",
      text: dark ? "rgb(8 22 43 / 0.8)" : "rgb(238 244 250 / 0.75)",
      dashed: false,
      value,
    };
  };

  const activeEl = elements.find((e) => e.number === active) ?? elements[0];

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 border-y border-line py-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="radiogroup" aria-label="Colour the table by" className="flex flex-wrap gap-1.5">
          {MODES.map((m) => (
            <button
              key={m.key}
              type="button"
              role="radio"
              aria-checked={mode === m.key}
              onClick={() => setMode(m.key)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                mode === m.key
                  ? "bg-paper font-semibold text-ground"
                  : "text-muted ring-1 ring-line hover:text-paper hover:ring-line-strong"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Find an element by name, symbol or number</span>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
            onKeyDown={(ev) => {
              if (ev.key === "Enter" && matches?.[0]) router.push(`/element/${matches[0].slug}`);
              if (ev.key === "Escape") setQuery("");
            }}
            placeholder="Search by name, symbol or number"
            className="w-full rounded-full bg-ground-deep py-2 pr-10 pl-4 text-sm text-paper placeholder:text-faint ring-1 ring-line outline-none focus:ring-2 focus:ring-electron"
          />
          <kbd className="pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 rounded border border-line px-1.5 text-xs text-faint lg:block">
            /
          </kbd>
        </label>
      </div>

      <div aria-live="polite" className="sr-only">
        {matches ? `${matches.length} matching elements` : ""}
      </div>

      {/* Mode-specific key */}
      <div className="flex min-h-14 flex-wrap items-center gap-x-3 gap-y-1 py-3 text-sm">
        {mode === "category" &&
          CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              aria-pressed={legendPinned === c.key}
              title={`Colour: ${c.pigment}, made from ${c.pigmentSource}`}
              onMouseEnter={() => setLegendFocus(c.key)}
              onMouseLeave={() => setLegendFocus(null)}
              onFocus={() => setLegendFocus(c.key)}
              onBlur={() => setLegendFocus(null)}
              onClick={() => setLegendPinned((p) => (p === c.key ? null : c.key))}
              className={`flex items-center gap-2 rounded-full py-1 pr-2 pl-1 transition-opacity ${
                highlight && highlight !== c.key ? "opacity-45" : ""
              } ${legendPinned === c.key ? "ring-1 ring-line-strong" : ""}`}
            >
              <span className="size-3 rounded-full" style={{ background: c.color }} />
              <span className="text-muted">{c.plural}</span>
            </button>
          ))}
        {mode === "state" && (
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-4">
              {(["solid", "liquid", "gas"] as const).map((p) => (
                <span key={p} className="flex items-center gap-2 text-muted">
                  <span className="size-3 rounded-full" style={{ background: STATE_COLOR[p] }} />
                  {STATE_LABEL[p]}
                </span>
              ))}
            </div>
            <div className="flex flex-1 items-center gap-3">
              <input
                type="range"
                min={0}
                max={6000}
                step={1}
                value={kelvin}
                onChange={(ev) => setKelvin(Number(ev.target.value))}
                aria-label="Temperature in kelvin"
                aria-valuetext={`${Math.round(kelvinToC(kelvin))} degrees Celsius`}
                className="temp-range min-w-0 flex-1"
              />
              <output className="w-36 shrink-0 text-right">
                <span className="font-semibold text-paper">{formatTemp(kelvin)}</span>{" "}
                <span className="text-faint">{kelvin.toLocaleString("en-GB")} K</span>
              </output>
              <button
                type="button"
                onClick={() => setKelvin(ROOM)}
                className="shrink-0 rounded-full px-3 py-1 text-muted ring-1 ring-line hover:text-paper"
              >
                Room temperature
              </button>
            </div>
          </div>
        )}
        {(mode === "electronegativity" || mode === "density" || mode === "year") && (
          <RampKey mode={mode} scales={scales} />
        )}
      </div>

      {/* Table */}
      <div className="table-scroller -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" id="table">
        <div
          className="grid min-w-[780px] gap-[3px] lg:min-w-0"
          style={{
            gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
            gridTemplateRows: "repeat(7, auto) 14px repeat(2, auto)",
          }}
          role="grid"
          aria-label="Periodic table of the elements"
        >
          <Inspector el={activeEl} mode={mode} kelvin={kelvin} styleFor={tileStyle} />

          {/* f-block markers in the main body */}
          <FBlockMarker x={3} y={6} range="57–71" category="lanthanide" onHover={setLegendFocus} />
          <FBlockMarker x={3} y={7} range="89–103" category="actinide" onHover={setLegendFocus} />

          {elements.map((e, i) => {
            const s = tileStyle(e);
            const dim = isDimmed(e);
            return (
              <Link
                key={e.number}
                ref={(el) => {
                  tileRefs.current[i] = el;
                }}
                href={`/element/${e.slug}`}
                role="gridcell"
                tabIndex={i === focusIndex ? 0 : -1}
                aria-label={`${e.name}, ${e.symbol}, atomic number ${e.number}${mode === "category" ? "" : `, ${s.value}`}`}
                onMouseEnter={() => setActive(e.number)}
                onFocus={() => {
                  setActive(e.number);
                  setFocusIndex(i);
                }}
                onKeyDown={(ev) => onTileKey(ev, i)}
                className="tile-enter group relative flex aspect-[1/1.04] flex-col justify-between rounded-[5px] p-[5px] outline-offset-1 transition-[opacity,background-color,transform] duration-200 hover:z-10 hover:scale-[1.12] focus-visible:z-10 focus-visible:scale-[1.12]"
                style={{
                  gridColumn: e.x,
                  gridRow: e.y,
                  background: s.bg,
                  boxShadow: `inset 0 0 0 1px ${s.border}`,
                  opacity: dim ? 0.16 : 1,
                  ["--i" as string]: e.number,
                  ...(s.dashed
                    ? { boxShadow: "none", outline: `1px dashed ${s.border}`, outlineOffset: "-1px" }
                    : {}),
                }}
              >
                <span className="text-2xs leading-none font-medium" style={{ color: s.text }}>
                  {e.number}
                </span>
                <span
                  className="stretch-semi text-center text-[clamp(0.95rem,1.55vw,1.4rem)] leading-none font-[720]"
                  style={{ color: s.symbol }}
                >
                  {e.symbol}
                </span>
                <span
                  className="stretch-condensed truncate text-center text-[0.62rem] leading-none"
                  style={{ color: s.text }}
                >
                  {s.value}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <p className="mt-3 text-sm text-faint">
        <span className="lg:hidden">Swipe sideways to see the whole table, and tap an element to open it.</span>
        <span className="hidden lg:inline">
          Use the arrow keys to move around the table, and press Enter to open an element.
        </span>
      </p>
    </div>
  );
}

function score(e: TileElement, q: string): number {
  if (e.symbol.toLowerCase() === q || String(e.number) === q) return 3;
  if (e.name.toLowerCase().startsWith(q)) return 2;
  return 1;
}

function FBlockMarker({
  x,
  y,
  range,
  category,
  onHover,
}: {
  x: number;
  y: number;
  range: string;
  category: CategoryKey;
  onHover: (c: CategoryKey | null) => void;
}) {
  const c = CATEGORY_BY_KEY[category].color;
  return (
    <div
      className="flex flex-col items-center justify-center rounded-[5px] text-center"
      style={{ gridColumn: x, gridRow: y, outline: `1px dashed ${c}80`, outlineOffset: "-1px" }}
      onMouseEnter={() => onHover(category)}
      onMouseLeave={() => onHover(null)}
      aria-hidden="true"
    >
      <span className="stretch-condensed text-[0.7rem] font-semibold" style={{ color: c }}>
        {range}
      </span>
    </div>
  );
}

type TileStyle = { value: string; symbol: string };

function Inspector({
  el,
  mode,
  kelvin,
  styleFor,
}: {
  el: TileElement;
  mode: Mode;
  kelvin: number;
  styleFor: (e: TileElement) => TileStyle;
}) {
  const cat = CATEGORY_BY_KEY[el.category];
  const value = styleFor(el).value;
  const modeLabel: Record<Mode, string> = {
    category: cat.label,
    state: `${STATE_LABEL[phaseAt(el, kelvin)]} at ${formatTemp(kelvin)}`,
    electronegativity: `Electronegativity ${value}`,
    density: value === "No data" ? "Density not measured" : `Density ${value} g/cm³`,
    year: value === "Ancient" ? "Known since ancient times" : `Discovered ${value}`,
  };

  return (
    <div
      className="flex items-stretch gap-5 pr-2"
      style={{ gridColumn: "3 / span 10", gridRow: "1 / span 3" }}
      aria-live="polite"
    >
      <div className="relative aspect-square h-full shrink-0">
        <Atom
          key={el.number}
          protons={el.protons}
          neutrons={el.neutrons}
          shells={el.shells}
          compact
          decay={
            el.halfLifeSeconds != null && el.decayMode
              ? { seconds: el.halfLifeSeconds, mode: el.decayMode as DecayMode }
              : null
          }
          className="h-full w-full"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-1.5 py-1">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-faint">{el.number}</span>
          <span className="text-sm" style={{ color: mode === "category" ? cat.color : "var(--color-muted)" }}>
            {modeLabel[mode]}
          </span>
        </div>
        <Link
          href={`/element/${el.slug}`}
          className="stretch-wide block truncate text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.05] font-[780] tracking-tight hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          {el.name}
        </Link>
        <p className="text-sm text-muted">
          {el.protons} protons, {el.neutrons} neutrons, {el.protons} electrons
        </p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-faint">
          <span>Atomic mass {el.massText}</span>
          <ElectronConfig value={el.configurationShort} />
          {el.radioactive ? <span className="text-decay">Radioactive</span> : null}
        </p>
      </div>
    </div>
  );
}

function RampKey({
  mode,
  scales,
}: {
  mode: "electronegativity" | "density" | "year";
  scales: { enMin: number; enMax: number; dLogMin: number; dLogMax: number };
}) {
  const ends = {
    electronegativity: [scales.enMin.toFixed(2), scales.enMax.toFixed(2)],
    density: [`${Math.pow(10, scales.dLogMin).toExponential(0)} g/cm³`, `${Math.pow(10, scales.dLogMax).toFixed(1)} g/cm³`],
    year: ["Ancient", "2010"],
  }[mode];
  const caption = {
    electronegativity: "How strongly an atom pulls shared electrons towards itself (Pauling scale).",
    density: "Mass per volume at room conditions, on a log scale. Gases are at the far left.",
    year: "When each element was first identified. Dashed tiles have no reliable value.",
  }[mode];
  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
      <div className="flex items-center gap-3">
        <span className="text-faint">{ends[0]}</span>
        <span
          className="h-2.5 w-40 rounded-full"
          style={{ background: `linear-gradient(90deg, ${RAMP.join(",")})` }}
        />
        <span className="text-faint">{ends[1]}</span>
      </div>
      <span className="text-muted">{caption}</span>
    </div>
  );
}
