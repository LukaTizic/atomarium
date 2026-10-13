"use client";

import { useState } from "react";
import { Atom } from "@/components/Atom";
import type { DecayMode } from "@/data/nuclear";

export function AtomPanel({
  name,
  protons,
  neutrons,
  shells,
  decay,
  accent,
}: {
  name: string;
  protons: number;
  neutrons: number;
  shells: number[];
  decay: { mode: DecayMode; seconds: number } | null;
  accent: string;
}) {
  const [paused, setPaused] = useState(false);
  const [labels, setLabels] = useState(true);

  return (
    <figure className="relative">
      <div
        className="pointer-events-none absolute inset-[6%] -z-10 rounded-full opacity-60 blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}22 0%, transparent 65%)` }}
        aria-hidden="true"
      />
      <Atom
        protons={protons}
        neutrons={neutrons}
        shells={shells}
        decay={decay}
        labels={labels}
        paused={paused}
        className="h-auto w-full"
        title={`Bohr model of a ${name.toLowerCase()} atom: ${protons} protons and ${neutrons} neutrons in the nucleus, ${protons} electrons in ${shells.length} shells`}
      />
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-faint">
        <span className="max-w-[46ch]">
          {decay
            ? "Green flashes are decays. Their pace follows the half-life, sped up so you can see it."
            : "Bohr model: real electrons form fuzzy clouds rather than neat rings."}
        </span>
        <span className="flex gap-2">
          <button
            type="button"
            onClick={() => setLabels((v) => !v)}
            aria-pressed={labels}
            className="rounded-full px-3 py-1 text-muted ring-1 ring-line hover:text-paper hover:ring-line-strong"
          >
            {labels ? "Hide shell labels" : "Show shell labels"}
          </button>
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="rounded-full px-3 py-1 text-muted ring-1 ring-line hover:text-paper hover:ring-line-strong"
          >
            {paused ? "Play" : "Pause"}
          </button>
        </span>
      </figcaption>
    </figure>
  );
}
