import type { ChemElement } from "@/lib/elements";

/** The slice of element data the interactive table needs on the client. */
export type TileElement = Pick<
  ChemElement,
  | "number"
  | "symbol"
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
> & {
  /** Name in the page's language. */
  name: string;
  /** Display year in the page's language. */
  yearText: string;
  /** Folded names in both languages, for search. */
  search: string;
  massText: string;
  halfLifeSeconds: number | null;
  decayMode: string | null;
};

export function yearValue(year: string): number | null {
  if (/ancient|prehistory|antiquity/i.test(year)) return null;
  const m = year.match(/\d{4}/);
  return m ? Number(m[0]) : null;
}
