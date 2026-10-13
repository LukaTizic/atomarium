const ORBITALS: Record<string, number> = { s: 1, p: 3, d: 5, f: 7 };

type Subshell = { label: string; n: number; l: string; electrons: number };

function parse(config: string): Subshell[] {
  return config
    .split(/\s+/)
    .map((part) => part.match(/^(\d)([spdf])(\d+)$/))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map((m) => ({ label: `${m[1]}${m[2]}`, n: Number(m[1]), l: m[2], electrons: Number(m[3]) }));
}

/**
 * Orbital box diagram: one box per orbital, filled in order of energy.
 * Within a subshell, electrons spread out singly before pairing up (Hund's rule).
 */
export function OrbitalDiagram({ configuration }: { configuration: string }) {
  const subshells = parse(configuration);
  return (
    <ol className="flex flex-wrap gap-x-4 gap-y-5" aria-label="Orbital filling diagram">
      {subshells.map((s) => {
        const boxes = ORBITALS[s.l];
        const ups = Math.min(s.electrons, boxes);
        const downs = Math.max(0, s.electrons - boxes);
        return (
          <li key={s.label} className="flex flex-col items-start gap-1.5">
            <span className="text-sm text-muted">
              {s.label}
              <sup className="text-[0.7em]">{s.electrons}</sup>
            </span>
            <span className="flex" aria-label={`${s.electrons} electrons in ${boxes} orbitals`}>
              {Array.from({ length: boxes }, (_, i) => (
                <span
                  key={i}
                  className="-ml-px flex h-8 w-7 items-center justify-center gap-[3px] border border-line-strong first:ml-0"
                >
                  {i < ups && <Arrow dir="up" />}
                  {i < downs && <Arrow dir="down" />}
                </span>
              ))}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function Arrow({ dir }: { dir: "up" | "down" }) {
  return (
    <svg width="7" height="18" viewBox="0 0 7 18" aria-hidden="true" className={dir === "down" ? "rotate-180" : ""}>
      <path d="M3.5 17V2M0.8 5L3.5 1.6 6.2 5" stroke="var(--color-electron)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
