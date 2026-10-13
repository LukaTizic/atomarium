import type { StabilityPoint } from "@/components/StabilityChart";
import { fold, type Lang } from "@/i18n/config";
import { ELEMENTS, formatMass } from "@/lib/elements";
import type { TileElement } from "@/lib/tile";

/** Server-side: trims each element down to what the table needs on the client. */
export function tileData(lang: Lang): TileElement[] {
  return ELEMENTS.map((e) => ({
    number: e.number,
    symbol: e.symbol,
    name: e.text[lang].name,
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
    yearText: e.text[lang].year,
    search: fold(`${e.text.en.name} ${e.text.sr.name}`),
    configurationShort: e.configurationShort,
    massText: formatMass(e, lang),
    halfLifeSeconds: e.halfLife?.seconds ?? null,
    decayMode: e.halfLife?.mode ?? null,
  }));
}

export function stabilityPoints(lang: Lang): StabilityPoint[] {
  return ELEMENTS.map((e) => ({
    number: e.number,
    symbol: e.symbol,
    name: e.text[lang].name,
    slug: e.slug,
    protons: e.protons,
    neutrons: e.neutrons,
    massNumber: e.massNumber,
    radioactive: e.radioactive,
    halfLife: e.halfLife?.text[lang] ?? null,
  }));
}
