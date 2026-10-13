/**
 * Nuclear data used for the neutron count and the stability section.
 *
 * MASS_NUMBER: mass number of the isotope we draw — the most abundant one for
 * elements found in nature, the longest-lived one for everything else.
 *
 * HALF_LIFE: rounded half-life of that longest-lived isotope, for elements with
 * no stable isotopes. Superheavy values are approximate and still being refined.
 */

export type DecayMode = "alpha" | "beta" | "capture" | "fission";

export type HalfLife = {
  text: string;
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
  43: { text: "about 4.2 million years", seconds: 4.2e6 * Y, mode: "beta" },
  61: { text: "about 17.7 years", seconds: 17.7 * Y, mode: "capture" },
  84: { text: "about 124 years", seconds: 124 * Y, mode: "alpha" },
  85: { text: "about 8.1 hours", seconds: 8.1 * 3600, mode: "capture" },
  86: { text: "about 3.8 days", seconds: 3.82 * D, mode: "alpha" },
  87: { text: "about 22 minutes", seconds: 22 * 60, mode: "beta" },
  88: { text: "about 1,600 years", seconds: 1600 * Y, mode: "alpha" },
  89: { text: "about 21.8 years", seconds: 21.8 * Y, mode: "beta" },
  90: { text: "about 14 billion years", seconds: 1.405e10 * Y, mode: "alpha" },
  91: { text: "about 32,800 years", seconds: 32760 * Y, mode: "alpha" },
  92: { text: "about 4.5 billion years", seconds: 4.468e9 * Y, mode: "alpha" },
  93: { text: "about 2.1 million years", seconds: 2.144e6 * Y, mode: "alpha" },
  94: { text: "about 80 million years", seconds: 8.0e7 * Y, mode: "alpha" },
  95: { text: "about 7,370 years", seconds: 7370 * Y, mode: "alpha" },
  96: { text: "about 15.6 million years", seconds: 1.56e7 * Y, mode: "alpha" },
  97: { text: "about 1,380 years", seconds: 1380 * Y, mode: "alpha" },
  98: { text: "about 900 years", seconds: 898 * Y, mode: "alpha" },
  99: { text: "about 472 days", seconds: 471.7 * D, mode: "alpha" },
  100: { text: "about 100 days", seconds: 100.5 * D, mode: "alpha" },
  101: { text: "about 51 days", seconds: 51.5 * D, mode: "alpha" },
  102: { text: "about 58 minutes", seconds: 58 * 60, mode: "alpha" },
  103: { text: "about 11 hours", seconds: 11 * 3600, mode: "fission" },
  104: { text: "roughly an hour", seconds: 4700, mode: "fission" },
  105: { text: "roughly a day", seconds: 1.0e5, mode: "fission" },
  106: { text: "roughly 10 minutes", seconds: 600, mode: "alpha" },
  107: { text: "about a minute", seconds: 60, mode: "alpha" },
  108: { text: "around 15 seconds", seconds: 16, mode: "alpha" },
  109: { text: "a few seconds", seconds: 5, mode: "alpha" },
  110: { text: "about 13 seconds", seconds: 13, mode: "fission" },
  111: { text: "under two minutes", seconds: 100, mode: "alpha" },
  112: { text: "about 30 seconds", seconds: 30, mode: "alpha" },
  113: { text: "about 10 seconds", seconds: 10, mode: "alpha" },
  114: { text: "about 2 seconds", seconds: 2, mode: "alpha" },
  115: { text: "under a second", seconds: 0.7, mode: "alpha" },
  116: { text: "about 60 milliseconds", seconds: 0.06, mode: "alpha" },
  117: { text: "about 50 milliseconds", seconds: 0.05, mode: "alpha" },
  118: { text: "under a millisecond", seconds: 0.0007, mode: "alpha" },
};

export const DECAY_COPY: Record<DecayMode, { name: string; what: string }> = {
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
};
