/** Languages the site is published in. English lives at /, Serbian at /sr. */
export type Lang = "en" | "sr";

export const LANGS: Lang[] = ["en", "sr"];

export const LOCALE: Record<Lang, string> = {
  en: "en-GB",
  sr: "sr-Latn-RS",
};

/** Prefixes a site path with the language segment ("/" stays "/" in English). */
export function localPath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  return path === "/" ? "/sr" : `/sr${path}`;
}

/** Number formatting with the right decimal and thousands separators, and a real minus sign. */
export function nf(lang: Lang, n: number, opts?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(LOCALE[lang], opts).format(n).replace("-", "−");
}

/**
 * Count with the correct noun form.
 * Serbian has three forms: 1 proton, 2 protona, 5 protona (and 21 proton, 11 protona).
 */
export function count(
  lang: Lang,
  n: number,
  forms: { en: [string, string]; sr: [string, string, string] },
): string {
  const num = nf(lang, n);
  if (lang === "en") return `${num} ${n === 1 ? forms.en[0] : forms.en[1]}`;
  const mod10 = n % 10;
  const mod100 = n % 100;
  const form =
    mod10 === 1 && mod100 !== 11
      ? forms.sr[0]
      : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)
        ? forms.sr[1]
        : forms.sr[2];
  return `${num} ${form}`;
}

export const NOUN = {
  proton: { en: ["proton", "protons"], sr: ["proton", "protona", "protona"] },
  neutron: { en: ["neutron", "neutrons"], sr: ["neutron", "neutrona", "neutrona"] },
  electron: { en: ["electron", "electrons"], sr: ["elektron", "elektrona", "elektrona"] },
  shellAcc: { en: ["shell", "shells"], sr: ["ljusku", "ljuske", "ljuski"] },
} as const satisfies Record<string, { en: [string, string]; sr: [string, string, string] }>;

/** Lowercase, accent-free form used for search ("gvozdje" finds "Gvožđe"). */
export function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/đ/g, "dj")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}
