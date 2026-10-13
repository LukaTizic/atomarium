import Link from "next/link";
import { CATEGORY_BY_KEY } from "@/lib/chem";
import { ELEMENTS } from "@/lib/elements";

/** A small, clickable periodic table that marks where the current element sits. */
export function MiniTable({ current }: { current: number }) {
  return (
    <div
      className="grid w-full max-w-[560px] gap-[2px]"
      style={{
        gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
        gridTemplateRows: "repeat(7, auto) 6px repeat(2, auto)",
      }}
    >
      {ELEMENTS.map((e) => {
        const c = CATEGORY_BY_KEY[e.category].color;
        const isCurrent = e.number === current;
        return (
          <Link
            key={e.number}
            href={`/element/${e.slug}`}
            title={`${e.number} ${e.name}`}
            aria-label={`${e.name}${isCurrent ? " (this element)" : ""}`}
            aria-current={isCurrent ? "page" : undefined}
            className="relative aspect-square rounded-[2px] transition-transform hover:z-10 hover:scale-150"
            style={{
              gridColumn: e.x,
              gridRow: e.y,
              background: isCurrent ? c : `${c}40`,
              boxShadow: isCurrent ? `0 0 0 2px var(--color-ground), 0 0 0 3.5px ${c}` : undefined,
              zIndex: isCurrent ? 5 : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
