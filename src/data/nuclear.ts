/**
 * Nuclear data used for the neutron count and the stability section.
 *
 * MASS_NUMBER: mass number of the isotope we draw — the most abundant one for
 * elements found in nature, the longest-lived one for everything else.
 *
 * HALF_LIFE: rounded half-life of that longest-lived isotope, for elements with
 * no stable isotopes. Superheavy values are approximate and still being refined.
 */

import type { Lang } from "@/i18n/config";

export type DecayMode = "alpha" | "beta" | "capture" | "fission";

export type HalfLife = {
  text: Record<Lang, string>;
  seconds: number;
  mode: DecayMode;
};

// prettier-ignore
export const MASS_NUMBER: Record<number, number> = {
  1: 1, 2: 4, 3: 7, 4: 9, 5: 11, 6: 12, 7: 14, 8: 16, 9: 19, 10: 20,
  11: 23, 12: 24, 13: 27, 14: 28, 15: 31, 16: 32, 17: 35, 18: 40, 19: 39, 20: 40,
  21: 45, 22: 48, 23: 51, 24: 52, 25: 55, 26: 56, 27: 59, 28: 58, 29: 63, 30: 64,
  31: 69, 32: 74, 33: 75, 34: 80, 35: 79, 36: 84, 37: 85, 38: 88, 39: 89, 40: 90,
  41: 93, 42: 98, 43: 98, 44: 102, 45: 103, 46: 106, 47: 107, 48: 114, 49: 115, 50: 120,
  51: 121, 52: 130, 53: 127, 54: 132, 55: 133, 56: 138, 57: 139, 58: 140, 59: 141, 60: 142,
  61: 145, 62: 152, 63: 153, 64: 158, 65: 159, 66: 164, 67: 165, 68: 166, 69: 169, 70: 174,
  71: 175, 72: 180, 73: 181, 74: 184, 75: 187, 76: 192, 77: 193, 78: 195, 79: 197, 80: 202,
  81: 205, 82: 208, 83: 209, 84: 209, 85: 210, 86: 222, 87: 223, 88: 226, 89: 227, 90: 232,
  91: 231, 92: 238, 93: 237, 94: 244, 95: 243, 96: 247, 97: 247, 98: 251, 99: 252, 100: 257,
  101: 258, 102: 259, 103: 266, 104: 267, 105: 268, 106: 269, 107: 270, 108: 269, 109: 278, 110: 281,
  111: 282, 112: 285, 113: 286, 114: 289, 115: 290, 116: 293, 117: 294, 118: 294,
};

const Y = 3.156e7; // seconds in a year
const D = 86400;

export const HALF_LIFE: Record<number, HalfLife> = {
  43: { text: { en: "about 4.2 million years", sr: "oko 4,2 miliona godina" }, seconds: 4.2e6 * Y, mode: "beta" },
  61: { text: { en: "about 17.7 years", sr: "oko 17,7 godina" }, seconds: 17.7 * Y, mode: "capture" },
  84: { text: { en: "about 124 years", sr: "oko 124 godine" }, seconds: 124 * Y, mode: "alpha" },
  85: { text: { en: "about 8.1 hours", sr: "oko 8,1 sata" }, seconds: 8.1 * 3600, mode: "capture" },
  86: { text: { en: "about 3.8 days", sr: "oko 3,8 dana" }, seconds: 3.82 * D, mode: "alpha" },
  87: { text: { en: "about 22 minutes", sr: "oko 22 minuta" }, seconds: 22 * 60, mode: "beta" },
  88: { text: { en: "about 1,600 years", sr: "oko 1.600 godina" }, seconds: 1600 * Y, mode: "alpha" },
  89: { text: { en: "about 21.8 years", sr: "oko 21,8 godina" }, seconds: 21.8 * Y, mode: "beta" },
  90: { text: { en: "about 14 billion years", sr: "oko 14 milijardi godina" }, seconds: 1.405e10 * Y, mode: "alpha" },
  91: { text: { en: "about 32,800 years", sr: "oko 32.800 godina" }, seconds: 32760 * Y, mode: "alpha" },
  92: { text: { en: "about 4.5 billion years", sr: "oko 4,5 milijardi godina" }, seconds: 4.468e9 * Y, mode: "alpha" },
  93: { text: { en: "about 2.1 million years", sr: "oko 2,1 miliona godina" }, seconds: 2.144e6 * Y, mode: "alpha" },
  94: { text: { en: "about 80 million years", sr: "oko 80 miliona godina" }, seconds: 8.0e7 * Y, mode: "alpha" },
  95: { text: { en: "about 7,370 years", sr: "oko 7.370 godina" }, seconds: 7370 * Y, mode: "alpha" },
  96: { text: { en: "about 15.6 million years", sr: "oko 15,6 miliona godina" }, seconds: 1.56e7 * Y, mode: "alpha" },
  97: { text: { en: "about 1,380 years", sr: "oko 1.380 godina" }, seconds: 1380 * Y, mode: "alpha" },
  98: { text: { en: "about 900 years", sr: "oko 900 godina" }, seconds: 898 * Y, mode: "alpha" },
  99: { text: { en: "about 472 days", sr: "oko 472 dana" }, seconds: 471.7 * D, mode: "alpha" },
  100: { text: { en: "about 100 days", sr: "oko 100 dana" }, seconds: 100.5 * D, mode: "alpha" },
  101: { text: { en: "about 51 days", sr: "oko 51 dan" }, seconds: 51.5 * D, mode: "alpha" },
  102: { text: { en: "about 58 minutes", sr: "oko 58 minuta" }, seconds: 58 * 60, mode: "alpha" },
  103: { text: { en: "about 11 hours", sr: "oko 11 sati" }, seconds: 11 * 3600, mode: "fission" },
  104: { text: { en: "roughly an hour", sr: "otprilike sat vremena" }, seconds: 4700, mode: "fission" },
  105: { text: { en: "roughly a day", sr: "otprilike jedan dan" }, seconds: 1.0e5, mode: "fission" },
  106: { text: { en: "roughly 10 minutes", sr: "otprilike 10 minuta" }, seconds: 600, mode: "alpha" },
  107: { text: { en: "about a minute", sr: "oko jedan minut" }, seconds: 60, mode: "alpha" },
  108: { text: { en: "around 15 seconds", sr: "oko 15 sekundi" }, seconds: 16, mode: "alpha" },
  109: { text: { en: "a few seconds", sr: "nekoliko sekundi" }, seconds: 5, mode: "alpha" },
  110: { text: { en: "about 13 seconds", sr: "oko 13 sekundi" }, seconds: 13, mode: "fission" },
  111: { text: { en: "under two minutes", sr: "manje od dva minuta" }, seconds: 100, mode: "alpha" },
  112: { text: { en: "about 30 seconds", sr: "oko 30 sekundi" }, seconds: 30, mode: "alpha" },
  113: { text: { en: "about 10 seconds", sr: "oko 10 sekundi" }, seconds: 10, mode: "alpha" },
  114: { text: { en: "about 2 seconds", sr: "oko 2 sekunde" }, seconds: 2, mode: "alpha" },
  115: { text: { en: "under a second", sr: "manje od sekunde" }, seconds: 0.7, mode: "alpha" },
  116: { text: { en: "about 60 milliseconds", sr: "oko 60 milisekundi" }, seconds: 0.06, mode: "alpha" },
  117: { text: { en: "about 50 milliseconds", sr: "oko 50 milisekundi" }, seconds: 0.05, mode: "alpha" },
  118: { text: { en: "under a millisecond", sr: "manje od milisekunde" }, seconds: 0.0007, mode: "alpha" },
};

export const DECAY_COPY: Record<Lang, Record<DecayMode, { name: string; what: string }>> = {
  en: {
    alpha: {
      name: "Alpha decay",
      what: "The nucleus throws out an alpha particle: a tight bundle of 2 protons and 2 neutrons (a helium nucleus). It becomes the element two places to the left.",
    },
    beta: {
      name: "Beta decay",
      what: "A neutron inside the nucleus turns into a proton and fires out a fast electron. The atom becomes the next element along.",
    },
    capture: {
      name: "Electron capture",
      what: "A proton pulls in one of the atom's own inner electrons and turns into a neutron. The atom becomes the element one place to the left.",
    },
    fission: {
      name: "Spontaneous fission",
      what: "The nucleus is so overloaded that it simply splits into two smaller nuclei, releasing a burst of energy and a few loose neutrons.",
    },
  },
  sr: {
    alpha: {
      name: "Alfa raspad",
      what: "Jezgro izbacuje alfa česticu: zbijen paket od 2 protona i 2 neutrona (jezgro helijuma). Atom postaje element koji se nalazi dva mesta levo.",
    },
    beta: {
      name: "Beta raspad",
      what: "Neutron u jezgru pretvara se u proton i izbacuje brzi elektron. Atom postaje sledeći element u nizu.",
    },
    capture: {
      name: "Elektronski zahvat",
      what: "Proton privlači jedan od unutrašnjih elektrona samog atoma i pretvara se u neutron. Atom postaje element jedno mesto levo.",
    },
    fission: {
      name: "Spontana fisija",
      what: "Jezgro je toliko preopterećeno da se jednostavno raspolovi na dva manja jezgra, oslobađajući nalet energije i nekoliko slobodnih neutrona.",
    },
  },
};
