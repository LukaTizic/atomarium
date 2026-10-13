/**
 * Pure, data-free helpers and constants. Safe to import from client components
 * (unlike ./elements, which pulls in the full dataset and written copy).
 */

import { type Lang, nf } from "@/i18n/config";

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

type CategoryText = {
  label: string;
  plural: string;
  /** Plural in the accusative case, for "X belongs to the …" sentences. */
  pluralAcc: string;
  pigment: string;
  /** "made from …" */
  pigmentSource: string;
};

export type Category = {
  key: CategoryKey;
  color: string;
  text: Record<Lang, CategoryText>;
};

/**
 * Category colours are taken from pigments and glasses that are themselves
 * made from elements — a small nod to the subject.
 */
export const CATEGORIES: Category[] = [
  {
    key: "alkali",
    color: "#F0644B",
    text: {
      en: { label: "Alkali metal", plural: "Alkali metals", pluralAcc: "alkali metals", pigment: "Vermilion", pigmentSource: "mercury" },
      sr: { label: "Alkalni metal", plural: "Alkalni metali", pluralAcc: "alkalne metale", pigment: "Cinober", pigmentSource: "žive" },
    },
  },
  {
    key: "alkaline-earth",
    color: "#F59A3E",
    text: {
      en: { label: "Alkaline earth metal", plural: "Alkaline earth metals", pluralAcc: "alkaline earth metals", pigment: "Cadmium orange", pigmentSource: "cadmium" },
      sr: { label: "Zemnoalkalni metal", plural: "Zemnoalkalni metali", pluralAcc: "zemnoalkalne metale", pigment: "Kadmijum narandžasta", pigmentSource: "kadmijuma" },
    },
  },
  {
    key: "transition",
    color: "#D6E0EE",
    text: {
      en: { label: "Transition metal", plural: "Transition metals", pluralAcc: "transition metals", pigment: "Titanium white", pigmentSource: "titanium" },
      sr: { label: "Prelazni metal", plural: "Prelazni metali", pluralAcc: "prelazne metale", pigment: "Titan bela", pigmentSource: "titana" },
    },
  },
  {
    key: "post-transition",
    color: "#3FC1A5",
    text: {
      en: { label: "Post-transition metal", plural: "Post-transition metals", pluralAcc: "post-transition metals", pigment: "Verdigris", pigmentSource: "copper" },
      sr: { label: "Post-prelazni metal", plural: "Post-prelazni metali", pluralAcc: "post-prelazne metale", pigment: "Verdigri", pigmentSource: "bakra" },
    },
  },
  {
    key: "metalloid",
    color: "#E8C35A",
    text: {
      en: { label: "Metalloid", plural: "Metalloids", pluralAcc: "metalloids", pigment: "Naples yellow", pigmentSource: "lead and antimony" },
      sr: { label: "Metaloid", plural: "Metaloidi", pluralAcc: "metaloide", pigment: "Napuljska žuta", pigmentSource: "olova i antimona" },
    },
  },
  {
    key: "nonmetal",
    color: "#5EB6F2",
    text: {
      en: { label: "Reactive nonmetal", plural: "Reactive nonmetals", pluralAcc: "reactive nonmetals", pigment: "Cerulean", pigmentSource: "cobalt and tin" },
      sr: { label: "Reaktivni nemetal", plural: "Reaktivni nemetali", pluralAcc: "reaktivne nemetale", pigment: "Cerulean plava", pigmentSource: "kobalta i kalaja" },
    },
  },
  {
    key: "noble-gas",
    color: "#B48CF5",
    text: {
      en: { label: "Noble gas", plural: "Noble gases", pluralAcc: "noble gases", pigment: "Manganese violet", pigmentSource: "manganese" },
      sr: { label: "Plemeniti gas", plural: "Plemeniti gasovi", pluralAcc: "plemenite gasove", pigment: "Manganova ljubičasta", pigmentSource: "mangana" },
    },
  },
  {
    key: "lanthanide",
    color: "#EE88B4",
    text: {
      en: { label: "Lanthanide", plural: "Lanthanides", pluralAcc: "lanthanides", pigment: "Erbium glass", pigmentSource: "erbium" },
      sr: { label: "Lantanoid", plural: "Lantanoidi", pluralAcc: "lantanoide", pigment: "Erbijumovo staklo", pigmentSource: "erbijuma" },
    },
  },
  {
    key: "actinide",
    color: "#A9E85C",
    text: {
      en: { label: "Actinide", plural: "Actinides", pluralAcc: "actinides", pigment: "Uranium glass", pigmentSource: "uranium" },
      sr: { label: "Aktinoid", plural: "Aktinoidi", pluralAcc: "aktinoide", pigment: "Uranijumsko staklo", pigmentSource: "uranijuma" },
    },
  },
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

export function formatTemp(k: number | null, lang: Lang = "en"): string | null {
  if (k == null) return null;
  return `${nf(lang, Math.round(kelvinToC(k)))} °C`;
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
