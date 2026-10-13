import raw from "@/data/elements.json";
import { COPY } from "@/data/content";
import { HALF_LIFE, MASS_NUMBER, type HalfLife } from "@/data/nuclear";
import {
  CATEGORY_BY_KEY,
  type Category,
  type CategoryKey,
  type Origin,
  type Phase,
} from "@/lib/chem";

export * from "@/lib/chem";

export type ChemElement = {
  number: number;
  symbol: string;
  name: string;
  slug: string;
  mass: number;
  category: CategoryKey;
  categoryPredicted: boolean;
  group: number | null;
  period: number;
  block: string;
  x: number;
  y: number;
  phase: Phase;
  predicted: boolean;
  melt: number | null;
  /** Shown instead of a melting point when the element won't freeze at normal pressure. */
  meltNote: string | null;
  boil: number | null;
  sublimes: number | null;
  density: number | null; // always g/cm³
  densityUnit: "g/cm³" | "g/L";
  densityDisplay: number | null;
  electronegativity: number | null;
  ionization: number | null;
  electronAffinity: number | null;
  shells: number[];
  configuration: string;
  configurationShort: string;
  appearance: string | null;
  massNumber: number;
  protons: number;
  neutrons: number;
  electrons: number;
  radioactive: boolean;
  halfLife: HalfLife | null;
  origin: Origin;
  year: string;
  discoveredBy: string;
  summary: string;
  uses: string[];
  fact: string;
  note: string | null;
};

type Raw = (typeof raw)[number];

const NAME_FIX: Record<string, string> = { Cesium: "Caesium" };

/** Elements that sublime at 1 atm instead of melting (kelvin). */
const SUBLIMES: Record<string, number> = { C: 3915, As: 887 };
/** Corrections to boiling points missing from the source data (kelvin). */
const BOIL_FIX: Record<string, number> = { P: 553.7 };

const SYNTHETIC_FROM = 95;
// Only traces occur naturally, formed by the decay or fission of heavier elements.
const DECAY_ORIGIN = new Set([43, 61, 84, 85, 86, 87, 88, 89, 91, 93, 94]);

function normaliseCategory(c: string): { key: CategoryKey; predicted: boolean } {
  const predicted = c.startsWith("unknown");
  if (c.includes("alkaline earth")) return { key: "alkaline-earth", predicted };
  if (c.includes("alkali")) return { key: "alkali", predicted };
  if (c.includes("post-transition")) return { key: "post-transition", predicted };
  if (c.includes("transition")) return { key: "transition", predicted };
  if (c.includes("metalloid")) return { key: "metalloid", predicted };
  if (c.includes("noble")) return { key: "noble-gas", predicted };
  if (c.includes("lanthanide")) return { key: "lanthanide", predicted };
  if (c.includes("actinide")) return { key: "actinide", predicted };
  return { key: "nonmetal", predicted };
}

function shortConfig(s: string): string {
  // Source data has the odd missing space and a leading "*" for predicted values.
  return s
    .replace(/^\*/, "")
    .replace(/([spdf])(\d+)(?=\d[spdf])/g, "$1$2 ")
    .replace(/\s+/g, " ")
    .trim();
}

function build(e: Raw): ChemElement {
  const z = e.number;
  const name = NAME_FIX[e.name] ?? e.name;
  const copy = COPY[e.symbol];
  if (!copy) throw new Error(`Missing copy for ${e.symbol}`);
  const cat = normaliseCategory(e.category);
  const massNumber = MASS_NUMBER[z];
  const halfLife = HALF_LIFE[z] ?? null;
  const isGasUnit = e.density_unit === "g/L";
  const predicted = z >= 100;
  const sublimes = SUBLIMES[e.symbol] ?? null;

  return {
    number: z,
    symbol: e.symbol,
    name,
    slug: name.toLowerCase(),
    mass: e.atomic_mass,
    category: cat.key,
    categoryPredicted: cat.predicted,
    group: e.group ?? null,
    period: e.period,
    block: e.block,
    x: e.xpos,
    y: e.ypos,
    phase: (e.phase?.toLowerCase() ?? "solid") as Phase,
    predicted,
    melt: sublimes || e.symbol === "He" ? null : (e.melt ?? null),
    meltNote: e.symbol === "He" ? "Never freezes at normal pressure" : null,
    boil: sublimes ? null : (BOIL_FIX[e.symbol] ?? e.boil ?? null),
    sublimes,
    density: e.density == null ? null : isGasUnit ? e.density / 1000 : e.density,
    densityUnit: isGasUnit ? "g/L" : "g/cm³",
    densityDisplay: e.density ?? null,
    electronegativity: e.electronegativity_pauling ?? null,
    ionization: e.ionization_energy ?? null,
    electronAffinity: e.electron_affinity ?? null,
    shells: e.shells,
    configuration: e.electron_configuration,
    configurationShort: shortConfig(e.electron_configuration_semantic),
    appearance: e.appearance ?? null,
    massNumber,
    protons: z,
    neutrons: massNumber - z,
    electrons: z,
    radioactive: halfLife !== null,
    halfLife,
    origin: z >= SYNTHETIC_FROM ? "synthetic" : DECAY_ORIGIN.has(z) ? "decay" : "primordial",
    year: copy.year,
    discoveredBy: copy.by,
    summary: copy.summary,
    uses: copy.uses,
    fact: copy.fact,
    note: copy.note ?? null,
  };
}

export const ELEMENTS: ChemElement[] = (raw as Raw[]).map(build);

export const BY_SLUG = new Map(ELEMENTS.map((e) => [e.slug, e]));
export const BY_NUMBER = new Map(ELEMENTS.map((e) => [e.number, e]));

/** Spellings people commonly type, mapped to the IUPAC name used for slugs. */
export const ALIASES: Record<string, string> = {
  aluminum: "aluminium",
  cesium: "caesium",
  sulphur: "sulfur",
};

export function getElement(slug: string): ChemElement | undefined {
  const s = slug.toLowerCase();
  return BY_SLUG.get(ALIASES[s] ?? s);
}

export function categoryOf(e: ChemElement): Category {
  return CATEGORY_BY_KEY[e.category];
}

/* ---------- element-specific formatting ---------- */

export function formatMass(e: ChemElement): string {
  // Elements without stable isotopes are conventionally shown as [mass number],
  // except thorium, protactinium and uranium, which have standard atomic weights.
  if (e.radioactive && e.number !== 90 && e.number !== 91 && e.number !== 92) {
    return `[${e.massNumber}]`;
  }
  const digits = e.mass >= 100 ? 2 : 3;
  return Number(e.mass.toFixed(digits)).toString();
}

export function isotopeName(e: ChemElement): string {
  return `${e.name}-${e.massNumber}`;
}
