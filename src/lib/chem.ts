/**
 * Pure, data-free helpers and constants. Safe to import from client components
 * (unlike ./elements, which pulls in the full dataset and written copy).
 */

export type CategoryKey =
  | "alkali"
  | "alkaline-earth"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

export type Category = {
  key: CategoryKey;
  label: string;
  plural: string;
  color: string;
  pigment: string;
  pigmentSource: string;
};

/**
 * Category colours are taken from pigments and glasses that are themselves
 * made from elements — a small nod to the subject.
 */
export const CATEGORIES: Category[] = [
  { key: "alkali", label: "Alkali metal", plural: "Alkali metals", color: "#F0644B", pigment: "Vermilion", pigmentSource: "mercury" },
  { key: "alkaline-earth", label: "Alkaline earth metal", plural: "Alkaline earth metals", color: "#F59A3E", pigment: "Cadmium orange", pigmentSource: "cadmium" },
  { key: "transition", label: "Transition metal", plural: "Transition metals", color: "#D6E0EE", pigment: "Titanium white", pigmentSource: "titanium" },
  { key: "post-transition", label: "Post-transition metal", plural: "Post-transition metals", color: "#3FC1A5", pigment: "Verdigris", pigmentSource: "copper" },
  { key: "metalloid", label: "Metalloid", plural: "Metalloids", color: "#E8C35A", pigment: "Naples yellow", pigmentSource: "lead and antimony" },
  { key: "nonmetal", label: "Reactive nonmetal", plural: "Reactive nonmetals", color: "#5EB6F2", pigment: "Cerulean", pigmentSource: "cobalt and tin" },
  { key: "noble-gas", label: "Noble gas", plural: "Noble gases", color: "#B48CF5", pigment: "Manganese violet", pigmentSource: "manganese" },
  { key: "lanthanide", label: "Lanthanide", plural: "Lanthanides", color: "#EE88B4", pigment: "Erbium glass", pigmentSource: "erbium" },
  { key: "actinide", label: "Actinide", plural: "Actinides", color: "#A9E85C", pigment: "Uranium glass", pigmentSource: "uranium" },
];

export const CATEGORY_BY_KEY = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c]),
) as Record<CategoryKey, Category>;

export type Phase = "solid" | "liquid" | "gas";
export type Origin = "primordial" | "decay" | "synthetic";

export const SHELL_LETTERS = ["K", "L", "M", "N", "O", "P", "Q"];

export function kelvinToC(k: number): number {
  return k - 273.15;
}

export function formatTemp(k: number | null): string | null {
  if (k == null) return null;
  const c = Math.round(kelvinToC(k));
  return `${c.toLocaleString("en-GB").replace("-", "\u2212")} °C`;
}

type PhaseInput = {
  predicted: boolean;
  sublimes: number | null;
  melt: number | null;
  boil: number | null;
};

export function phaseAt(e: PhaseInput, kelvin: number): Phase | "unknown" {
  if (e.predicted) return "unknown";
  if (e.sublimes) return kelvin < e.sublimes ? "solid" : "gas";
  if (e.melt != null && kelvin < e.melt) return "solid";
  if (e.boil != null && kelvin >= e.boil) return "gas";
  if (e.melt == null && e.boil == null) return "unknown";
  return "liquid";
}
