import { ELEMENTS, formatMass } from "@/lib/elements";
import type { TileElement } from "@/lib/tile";
import type { StabilityPoint } from "@/components/StabilityChart";

/** Server-side: trims each element down to what the table needs on the client. */
export function tileData(): TileElement[] {
  return ELEMENTS.map((e) => ({
    number: e.number,
    symbol: e.symbol,
    name: e.name,
    slug: e.slug,
    category: e.category,
    categoryPredicted: e.categoryPredicted,
    x: e.x,
    y: e.y,
    group: e.group,
    period: e.period,
    melt: e.melt,
    boil: e.boil,
    sublimes: e.sublimes,
    predicted: e.predicted,
    density: e.density,
    electronegativity: e.electronegativity,
    shells: e.shells,
    protons: e.protons,
    neutrons: e.neutrons,
    massNumber: e.massNumber,
    radioactive: e.radioactive,
    year: e.year,
    configurationShort: e.configurationShort,
    massText: formatMass(e),
    halfLifeSeconds: e.halfLife?.seconds ?? null,
    decayMode: e.halfLife?.mode ?? null,
  }));
}

export function stabilityPoints(): StabilityPoint[] {
  return ELEMENTS.map((e) => ({
    number: e.number,
    symbol: e.symbol,
    name: e.name,
    slug: e.slug,
    protons: e.protons,
    neutrons: e.neutrons,
    massNumber: e.massNumber,
    radioactive: e.radioactive,
    halfLife: e.halfLife?.text ?? null,
  }));
}
