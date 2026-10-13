/** Renders "[Ar] 3d6 4s2" as [Ar] 3d⁶ 4s² with real superscripts. */
export function ElectronConfig({
  value,
  label,
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const parts = value.split(" ");
  return (
    <span className={className} aria-label={label ?? `Electron configuration ${value}`}>
      {parts.map((p, i) => {
        const m = p.match(/^(\d[spdf])(\d+)$/);
        return (
          <span key={i}>
            {i > 0 ? " " : ""}
            {m ? (
              <>
                {m[1]}
                <sup className="text-[0.7em]">{m[2]}</sup>
              </>
            ) : (
              p
            )}
          </span>
        );
      })}
    </span>
  );
}
