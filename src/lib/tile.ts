import type { ChemElement } from "@/lib/elements";

/** The slice of element data the interactive table needs on the client. */
export type TileElement = Pick<
  ChemElement,
  | "number"
  | "symbol"
  | "name"
  | "slug"
  | "category"
  | "categoryPredicted"
  | "x"
  | "y"
  | "group"
  | "period"
  | "melt"
  | "boil"
  | "sublimes"
  | "predicted"
  | "density"
  | "electronegativity"
  | "shells"
  | "protons"
  | "neutrons"
  | "massNumber"
  | "radioactive"
  | "year"
  | "configurationShort"
> & { massText: string; halfLifeSeconds: number | null; decayMode: string | null };

export function yearValue(year: string): number | null {
  if (/ancient|prehistory|antiquity/i.test(year)) return null;
  const m = year.match(/\d{4}/);
  return m ? Number(m[0]) : null;
}
