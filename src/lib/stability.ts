import { DECAY_COPY } from "@/data/nuclear";
import { BY_NUMBER, type ChemElement, isotopeName } from "@/lib/elements";

export type StabilityStory = {
  verdict: "Stable" | "Effectively stable" | "Radioactive";
  paragraphs: string[];
  decay: { name: string; what: string; into: string | null; intoSlug: string | null } | null;
};

/**
 * Plain-language explanation of why this element's nucleus is (or isn't) stable,
 * generated from its proton and neutron counts and half-life.
 */
export function stabilityStory(e: ChemElement): StabilityStory {
  const iso = isotopeName(e);
  const ratio = (e.neutrons / e.protons).toFixed(2);
  const paragraphs: string[] = [];

  if (e.number === 83) {
    paragraphs.push(
      `${iso} has ${e.protons} protons and ${e.neutrons} neutrons. For decades it was counted as the heaviest stable nucleus, until 2003, when experiments caught it decaying by alpha emission.`,
      "Its half-life is about 20 billion billion years, more than a billion times the age of the universe. For every practical purpose, bismuth is stable.",
    );
    return { verdict: "Effectively stable", paragraphs, decay: null };
  }

  if (!e.radioactive) {
    const context =
      e.protons <= 20
        ? "Light nuclei are happiest with about one neutron per proton, and this one sits right in that zone."
        : "Heavier nuclei need extra neutrons to keep their protons spaced apart, and this ratio falls inside the narrow band where the strong nuclear force wins over the protons' electric repulsion.";
    paragraphs.push(
      `${iso} has ${e.protons} protons and ${e.neutrons} neutrons, or ${ratio} neutrons for every proton. ${context}`,
      "Left alone, its nucleus will never break apart.",
    );
    if (e.note) paragraphs.push(e.note);
    return { verdict: "Stable", paragraphs, decay: null };
  }

  const hl = e.halfLife!;
  const z = e.protons;

  if (z === 43 || z === 61) {
    paragraphs.push(
      `${e.name} is a surprise. With only ${z} protons it is far lighter than every other element without a stable isotope. Quirks of how protons and neutrons pair up mean that, whatever its neutron count, there is always a neighbouring nucleus of the same mass that is more stable, so every isotope eventually decays into one.`,
      `Its longest-lived isotope, ${iso}, has a half-life of ${hl.text}.`,
    );
  } else if (z <= 94) {
    paragraphs.push(
      `With ${z} protons all pushing against each other, this nucleus is too large for the short-range strong force to hold together for ever. Every isotope of ${e.name.toLowerCase()} is radioactive; the longest-lived, ${iso}, has a half-life of ${hl.text}.`,
    );
    if (z === 90 || z === 92) {
      paragraphs.push(
        "That is slow enough that much of the supply Earth formed with is still here, decaying very slowly in rocks, and quick enough to keep the planet's interior warm.",
      );
    } else if (z === 93 || z === 94) {
      paragraphs.push("Only traces occur in nature. Almost all of it is made in nuclear reactors.");
    } else {
      paragraphs.push(
        "Any that existed when Earth formed is long gone. What we find today is constantly replenished as uranium and thorium decay through a chain of shorter-lived elements.",
      );
    }
  } else if (z <= 103) {
    paragraphs.push(
      `With ${z} protons, this nucleus is far too large to be stable. It does not occur in nature and is made in nuclear reactors or particle accelerators. Its longest-lived isotope, ${iso}, has a half-life of ${hl.text}.`,
    );
  } else {
    paragraphs.push(
      `Superheavy nuclei like this are made a few atoms at a time by firing one nucleus into another in a particle accelerator. The longest-lived known isotope, ${iso}, lasts ${hl.text} on average before it decays, so scientists detect it by the chain of decays it leaves behind.`,
    );
  }
  paragraphs.push("A half-life is the time it takes for half of the atoms in a sample to decay.");

  const d = DECAY_COPY[hl.mode];
  let intoZ: number | null = null;
  let intoA: number | null = null;
  if (hl.mode === "alpha") {
    intoZ = z - 2;
    intoA = e.massNumber - 4;
  } else if (hl.mode === "beta") {
    intoZ = z + 1;
    intoA = e.massNumber;
  } else if (hl.mode === "capture") {
    intoZ = z - 1;
    intoA = e.massNumber;
  }
  const daughter = intoZ ? BY_NUMBER.get(intoZ) : undefined;

  return {
    verdict: "Radioactive",
    paragraphs,
    decay: {
      name: d.name,
      what: d.what,
      into: daughter && intoA ? `${daughter.name}-${intoA}` : null,
      intoSlug: daughter?.slug ?? null,
    },
  };
}

export const ORIGIN_TEXT = {
  primordial: "In nature, since Earth formed",
  decay: "Only traces in nature, from the decay of heavier elements",
  synthetic: "Made by people in reactors or particle accelerators",
} as const;
