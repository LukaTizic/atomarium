import { DECAY_COPY } from "@/data/nuclear";
import { count, type Lang, NOUN, nf } from "@/i18n/config";
import { BY_NUMBER, type ChemElement, isotopeName } from "@/lib/elements";

export type StabilityStory = {
  verdict: "stable" | "barely" | "radioactive";
  paragraphs: string[];
  decay: { name: string; what: string; into: string | null; intoSlug: string | null } | null;
};

/**
 * Plain-language explanation of why this element's nucleus is (or isn't) stable,
 * generated from its proton and neutron counts and half-life.
 */
export function stabilityStory(e: ChemElement, lang: Lang): StabilityStory {
  const t = e.text[lang];
  const iso = isotopeName(e, lang);
  // Element names are common nouns: lowercase them mid-sentence ("the longest-lived, uranium-238, …").
  const isoMid = iso.toLowerCase();
  const ratio = nf(lang, e.neutrons / e.protons, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const p = count(lang, e.protons, NOUN.proton);
  const n = count(lang, e.neutrons, NOUN.neutron);
  const sr = lang === "sr";
  const paragraphs: string[] = [];

  if (e.number === 83) {
    paragraphs.push(
      sr
        ? `${iso} ima ${p} i ${n}. Decenijama se smatralo najtežim stabilnim jezgrom, sve dok 2003. eksperimenti nisu zabeležili njegov alfa raspad.`
        : `${iso} has ${p} and ${n}. For decades it was counted as the heaviest stable nucleus, until 2003, when experiments caught it decaying by alpha emission.`,
      sr
        ? "Njegovo vreme poluraspada je oko 20 milijardi milijardi godina, više od milijardu puta duže od starosti svemira. Za sve praktične potrebe, bizmut je stabilan."
        : "Its half-life is about 20 billion billion years, more than a billion times the age of the universe. For every practical purpose, bismuth is stable.",
    );
    return { verdict: "barely", paragraphs, decay: null };
  }

  if (!e.radioactive) {
    const context =
      e.protons <= 20
        ? sr
          ? "Laka jezgra su najstabilnija sa otprilike jednim neutronom po protonu, a ovo je upravo u toj zoni."
          : "Light nuclei are happiest with about one neutron per proton, and this one sits right in that zone."
        : sr
          ? "Težim jezgrima treba više neutrona da bi protoni bili razmaknuti, a ovaj odnos je unutar uske zone u kojoj jaka nuklearna sila nadvladava električno odbijanje protona."
          : "Heavier nuclei need extra neutrons to keep their protons spaced apart, and this ratio falls inside the narrow band where the strong nuclear force wins over the protons' electric repulsion.";
    paragraphs.push(
      sr
        ? `${iso} ima ${p} i ${n}, odnosno ${ratio} neutrona na svaki proton. ${context}`
        : `${iso} has ${p} and ${n}, or ${ratio} neutrons for every proton. ${context}`,
      sr ? "Samo od sebe, ovo jezgro se nikada neće raspasti." : "Left alone, its nucleus will never break apart.",
    );
    if (t.note) paragraphs.push(t.note);
    return { verdict: "stable", paragraphs, decay: null };
  }

  const hl = e.halfLife!;
  const hlText = hl.text[lang];
  const z = e.protons;
  const zp = count(lang, z, NOUN.proton);

  if (z === 43 || z === 61) {
    paragraphs.push(
      sr
        ? `${t.name} je iznenađenje. Sa samo ${zp}, daleko je lakši od svih ostalih elemenata bez stabilnog izotopa. Zbog načina na koji se protoni i neutroni uparuju, za bilo koji broj neutrona uvek postoji susedno jezgro iste mase koje je stabilnije, pa se svaki izotop pre ili kasnije raspadne u njega.`
        : `${t.name} is a surprise. With only ${zp} it is far lighter than every other element without a stable isotope. Quirks of how protons and neutrons pair up mean that, whatever its neutron count, there is always a neighbouring nucleus of the same mass that is more stable, so every isotope eventually decays into one.`,
      sr
        ? `Njegov najdugovečniji izotop, ${isoMid}, ima vreme poluraspada od ${hlText}.`
        : `Its longest-lived isotope, ${isoMid}, has a half-life of ${hlText}.`,
    );
  } else if (z <= 94) {
    paragraphs.push(
      sr
        ? `Sa ${zp} koji se međusobno odbijaju, ovo jezgro je preveliko da bi ga jaka nuklearna sila, koja deluje samo na kratkim rastojanjima, zauvek držala na okupu. Svi izotopi ovog elementa su radioaktivni; najdugovečniji, ${isoMid}, ima vreme poluraspada od ${hlText}.`
        : `With ${zp} all pushing against each other, this nucleus is too large for the short-range strong force to hold together for ever. Every isotope of ${t.name.toLowerCase()} is radioactive; the longest-lived, ${isoMid}, has a half-life of ${hlText}.`,
    );
    if (z === 90 || z === 92) {
      paragraphs.push(
        sr
          ? "To je dovoljno sporo da je veliki deo zaliha sa kojima je Zemlja nastala još uvek tu, polako se raspadajući u stenama, i dovoljno brzo da održava unutrašnjost planete toplom."
          : "That is slow enough that much of the supply Earth formed with is still here, decaying very slowly in rocks, and quick enough to keep the planet's interior warm.",
      );
    } else if (z === 93 || z === 94) {
      paragraphs.push(
        sr
          ? "U prirodi se javlja samo u tragovima. Gotovo sva količina koja postoji proizvedena je u nuklearnim reaktorima."
          : "Only traces occur in nature. Almost all of it is made in nuclear reactors.",
      );
    } else {
      paragraphs.push(
        sr
          ? "Sve što ga je bilo kada je Zemlja nastala odavno je nestalo. Ono što danas nalazimo stalno se obnavlja dok se uranijum i torijum raspadaju kroz lanac kraće živećih elemenata."
          : "Any that existed when Earth formed is long gone. What we find today is constantly replenished as uranium and thorium decay through a chain of shorter-lived elements.",
      );
    }
  } else if (z <= 103) {
    paragraphs.push(
      sr
        ? `Sa ${zp}, ovo jezgro je mnogo preveliko da bi bilo stabilno. Ne postoji u prirodi i proizvodi se u nuklearnim reaktorima ili akceleratorima čestica. Njegov najdugovečniji izotop, ${isoMid}, ima vreme poluraspada od ${hlText}.`
        : `With ${zp}, this nucleus is far too large to be stable. It does not occur in nature and is made in nuclear reactors or particle accelerators. Its longest-lived isotope, ${isoMid}, has a half-life of ${hlText}.`,
    );
  } else {
    paragraphs.push(
      sr
        ? `Superteška jezgra poput ovog prave se po nekoliko atoma, ispaljivanjem jednog jezgra u drugo u akceleratoru čestica. Najdugovečniji poznati izotop, ${isoMid}, u proseku traje ${hlText} pre nego što se raspadne, pa ga naučnici prepoznaju po lancu raspada koji ostavlja za sobom.`
        : `Superheavy nuclei like this are made a few atoms at a time by firing one nucleus into another in a particle accelerator. The longest-lived known isotope, ${isoMid}, lasts ${hlText} on average before it decays, so scientists detect it by the chain of decays it leaves behind.`,
    );
  }
  paragraphs.push(
    sr
      ? "Vreme poluraspada je vreme za koje se raspadne polovina atoma u uzorku."
      : "A half-life is the time it takes for half of the atoms in a sample to decay.",
  );

  const d = DECAY_COPY[lang][hl.mode];
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
    verdict: "radioactive",
    paragraphs,
    decay: {
      name: d.name,
      what: d.what,
      into: daughter && intoA ? `${daughter.text[lang].name}-${intoA}`.toLowerCase() : null,
      intoSlug: daughter?.slug ?? null,
    },
  };
}

export const ORIGIN_TEXT: Record<Lang, Record<"primordial" | "decay" | "synthetic", string>> = {
  en: {
    primordial: "In nature, since Earth formed",
    decay: "Only traces in nature, from the decay of heavier elements",
    synthetic: "Made by people in reactors or particle accelerators",
  },
  sr: {
    primordial: "U prirodi, od nastanka Zemlje",
    decay: "U prirodi samo u tragovima, iz raspada težih elemenata",
    synthetic: "Proizvode ga ljudi u reaktorima ili akceleratorima čestica",
  },
};
