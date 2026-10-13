import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AtomPanel } from "@/components/AtomPanel";
import { ElectronConfig } from "@/components/ElectronConfig";
import { MiniTable } from "@/components/MiniTable";
import { OrbitalDiagram } from "@/components/OrbitalDiagram";
import { StabilityChart } from "@/components/StabilityChart";
import { count, type Lang, localPath, NOUN, nf } from "@/i18n/config";
import { type UI, ui } from "@/i18n/ui";
import {
  BY_NUMBER,
  categoryOf,
  type ChemElement,
  ELEMENTS,
  formatMass,
  formatTemp,
  getElement,
  isotopeName,
  SHELL_LETTERS,
} from "@/lib/elements";
import { ORIGIN_TEXT, stabilityStory } from "@/lib/stability";
import { stabilityPoints } from "@/lib/views";

export function elementParams() {
  return ELEMENTS.map((e) => ({ slug: e.slug }));
}

export function elementMetadata(slug: string, lang: Lang): Metadata {
  const e = getElement(slug);
  if (!e) return {};
  const tx = e.text[lang];
  const first = tx.summary.split(". ")[0].replace(/\.$/, "") + ".";
  const counts = [
    count(lang, e.protons, NOUN.proton),
    count(lang, e.neutrons, NOUN.neutron),
    count(lang, e.electrons, NOUN.electron),
  ].join(", ");
  return {
    title: `${tx.name} (${e.symbol})`,
    description: `${tx.name}: ${counts}. ${first}`,
    alternates: {
      canonical: localPath(lang, `/element/${e.slug}`),
      languages: {
        en: `/element/${e.slug}`,
        sr: `/sr/element/${e.slug}`,
        "x-default": `/element/${e.slug}`,
      },
    },
  };
}

export function ElementView({ slug, lang }: { slug: string; lang: Lang }) {
  const e = getElement(slug);
  if (!e) notFound();

  const t = ui(lang);
  const tx = e.text[lang];
  const cat = categoryOf(e);
  const ct = cat.text[lang];
  const prev = BY_NUMBER.get(e.number - 1);
  const next = BY_NUMBER.get(e.number + 1);
  const story = stabilityStory(e, lang);
  const iso = isotopeName(e, lang);
  const counts = [
    count(lang, e.protons, NOUN.proton),
    count(lang, e.neutrons, NOUN.neutron),
    count(lang, e.electrons, NOUN.electron),
  ].join(", ");

  return (
    <article className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
      <nav aria-label={t.element.navAria} className="mt-8 flex items-center justify-between gap-4 text-sm">
        <Link href={`${localPath(lang, "/")}#table`} className="flex items-center gap-1.5 text-muted hover:text-paper">
          <Chevron dir="left" />
          {t.element.back}
        </Link>
        <div className="flex items-center gap-1">
          {prev && <StepLink el={prev} dir="prev" lang={lang} t={t} />}
          {next && <StepLink el={next} dir="next" lang={lang} t={t} />}
        </div>
      </nav>

      {/* Hero: the atom and its three numbers */}
      <section className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-14">
        <div className="order-2 lg:order-1">
          <AtomPanel
            lang={lang}
            title={`${tx.name}: ${counts}`}
            protons={e.protons}
            neutrons={e.neutrons}
            shells={e.shells}
            accent={cat.color}
            decay={e.halfLife ? { mode: e.halfLife.mode, seconds: e.halfLife.seconds } : null}
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="flex items-center gap-2 text-muted">
              <span className="size-2.5 rounded-full" style={{ background: cat.color }} />
              {ct.label}
              {e.categoryPredicted ? ` (${t.element.predicted})` : ""}
            </span>
            {e.radioactive && (
              <span className="flex items-center gap-2 text-decay">
                <span className="size-2.5 rounded-full bg-decay" />
                {t.element.radioactive}
              </span>
            )}
          </div>

          <div className="@container mt-4">
            <div className="flex items-end gap-5">
              <Tile e={e} color={cat.color} lang={lang} />
              <h1
                className="element-title stretch-wide min-w-0 leading-[0.92] font-[800] tracking-[-0.025em] break-words"
                style={{ ["--chars" as string]: tx.name.length }}
              >
                {tx.name}
              </h1>
            </div>
          </div>

          <dl className="mt-9 grid grid-cols-3 border-y border-line">
            <Count label={t.element.protons} value={e.protons} color="var(--color-proton)" />
            <Count label={t.element.neutrons} value={e.neutrons} color="var(--color-neutron)" />
            <Count label={t.element.electrons} value={e.electrons} color="var(--color-electron)" />
          </dl>
          <p className="mt-3 text-sm text-faint">
            {t.element.neutronNote(iso.toLowerCase(), e.origin === "primordial" && !e.radioactive)}
          </p>

          <div className="mt-6">
            <p className="text-sm text-muted">{t.element.perShell}</p>
            <ol className="mt-2 flex flex-wrap gap-2">
              {e.shells.map((n, i) => (
                <li key={i} className="flex items-baseline gap-1.5 rounded-full px-3 py-1 text-sm ring-1 ring-line">
                  <span className="text-faint">{SHELL_LETTERS[i]}</span>
                  <span className="font-semibold">{n}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 max-w-[52ch] font-serif text-[1.2rem] leading-relaxed text-paper/90">{tx.summary}</p>
        </div>
      </section>

      {/* Uses, fact and properties */}
      <section className="mt-24 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 className="stretch-semi text-2xl font-[740] tracking-tight">{t.element.usesTitle}</h2>
          {tx.uses.length > 0 ? (
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {tx.uses.map((u) => (
                <li key={u} className="flex gap-4 py-3.5 font-serif text-[1.06rem] leading-snug">
                  <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full" style={{ background: cat.color }} />
                  {u}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 max-w-[56ch] font-serif text-[1.06rem] leading-relaxed text-muted">
              {t.element.noUses(e.halfLife?.text[lang] ?? "")}
            </p>
          )}

          <h2 className="stretch-semi mt-14 text-2xl font-[740] tracking-tight">{t.element.factTitle}</h2>
          <p
            className="mt-4 max-w-[56ch] border-l-2 pl-5 font-serif text-[1.15rem] leading-relaxed italic"
            style={{ borderColor: cat.color }}
          >
            {tx.fact}
          </p>
        </div>

        <div>
          <h2 className="stretch-semi text-2xl font-[740] tracking-tight">{t.element.propsTitle}</h2>
          <Properties e={e} lang={lang} t={t} />
        </div>
      </section>

      {/* Stability */}
      <section
        className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16"
        aria-labelledby="stability-heading"
      >
        <div>
          <h2 id="stability-heading" className="stretch-semi text-2xl font-[740] tracking-tight">
            {t.element.stabilityQ}{" "}
            <span className={story.verdict === "radioactive" ? "text-decay" : "text-electron"}>
              {t.element.verdict[story.verdict]}
            </span>
          </h2>
          <div className="mt-5 max-w-[58ch] space-y-4 font-serif text-[1.06rem] leading-relaxed text-muted">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {story.decay && (
            <div className="mt-8 border-t border-line pt-5">
              <h3 className="font-semibold">{t.element.whatHappens(story.decay.name)}</h3>
              <p className="mt-2 max-w-[58ch] font-serif leading-relaxed text-muted">{story.decay.what}</p>
              {story.decay.into && story.decay.intoSlug && (
                <p className="mt-3 text-sm text-muted">
                  {iso} {t.element.becomes}{" "}
                  <Link
                    href={localPath(lang, `/element/${story.decay.intoSlug}`)}
                    className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper"
                  >
                    {story.decay.into}
                  </Link>
                  .
                </p>
              )}
            </div>
          )}
        </div>
        <StabilityChart points={stabilityPoints(lang)} highlight={e.number} lang={lang} />
      </section>

      {/* Electrons */}
      <section className="mt-24" aria-labelledby="config-heading">
        <h2 id="config-heading" className="stretch-semi text-2xl font-[740] tracking-tight">
          {t.element.configTitle}
        </h2>
        <p className="mt-4 max-w-[64ch] font-serif text-[1.06rem] leading-relaxed text-muted">
          {t.element.configIntro}{" "}
          <ElectronConfig value={e.configuration} label={t.element.configAria(e.configuration)} className="text-paper" />.
        </p>
        <div className="mt-8">
          <OrbitalDiagram configuration={e.configuration} label={t.element.orbitalAria} boxLabel={t.element.orbitalBox} />
        </div>
      </section>

      {/* Location */}
      <section
        className="mt-24 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        aria-labelledby="where-heading"
      >
        <div>
          <h2 id="where-heading" className="stretch-semi text-2xl font-[740] tracking-tight">
            {t.element.whereTitle}
          </h2>
          <p className="mt-4 max-w-[52ch] font-serif text-[1.06rem] leading-relaxed text-muted">{placeText(e, lang)}</p>
        </div>
        <MiniTable current={e.number} lang={lang} />
      </section>

      <nav aria-label={t.element.prevNextAria} className="mt-20 grid grid-cols-2 gap-4 border-t border-line pt-6">
        <div className="@container min-w-0">{prev && <BigStep el={prev} dir="prev" lang={lang} t={t} />}</div>
        <div className="@container min-w-0 text-right">
          {next && <BigStep el={next} dir="next" lang={lang} t={t} />}
        </div>
      </nav>
    </article>
  );
}

/* ---------- pieces ---------- */

function Properties({ e, lang, t }: { e: ChemElement; lang: Lang; t: UI }) {
  const p = t.element.props;
  const tx = e.text[lang];
  return (
    <dl className="mt-5 divide-y divide-line border-y border-line text-[0.95rem]">
      <Prop term={p.number} t={t}>
        {e.number}
      </Prop>
      <Prop term={p.mass} t={t}>
        {formatMass(e, lang)} u
      </Prop>
      <Prop term={p.place} t={t}>
        {e.group ?? p.none}, {e.period}, {p.block(e.block)}
      </Prop>
      <Prop term={p.state} predicted={e.predicted} t={t}>
        {t.element.phases[e.phase]}
      </Prop>
      {e.sublimes ? (
        <Prop term={p.sublimes} t={t}>
          {formatTemp(e.sublimes, lang)}
        </Prop>
      ) : (
        <>
          <Prop term={p.melt} predicted={e.predicted && e.melt != null} t={t}>
            {tx.meltNote ?? formatTemp(e.melt, lang)}
          </Prop>
          <Prop term={p.boil} predicted={e.predicted && e.boil != null} t={t}>
            {formatTemp(e.boil, lang)}
          </Prop>
        </>
      )}
      <Prop term={p.density} predicted={e.predicted && e.densityDisplay != null} t={t}>
        {e.densityDisplay != null
          ? `${nf(lang, Number(e.densityDisplay.toPrecision(4)), { maximumFractionDigits: 5 })} ${e.densityUnit}`
          : null}
      </Prop>
      <Prop term={p.en} t={t}>
        {e.electronegativity != null
          ? nf(lang, e.electronegativity, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          : null}
      </Prop>
      <Prop term={p.ionisation} t={t}>
        {e.ionization != null ? `${nf(lang, Math.round(e.ionization))} kJ/mol` : null}
      </Prop>
      <Prop term={p.config} t={t}>
        <ElectronConfig value={e.configurationShort} label={t.element.configAria(e.configurationShort)} />
      </Prop>
      {tx.appearance && (
        <Prop term={p.appearance} t={t}>
          {capitalise(tx.appearance)}
        </Prop>
      )}
      <Prop term={p.discovered} t={t}>
        {e.year === "Ancient" ? (
          tx.discoveredBy
        ) : (
          <>
            {tx.year}
            <span className="block text-faint">{tx.discoveredBy}</span>
          </>
        )}
      </Prop>
      <Prop term={p.origin} t={t}>
        {ORIGIN_TEXT[lang][e.origin]}
      </Prop>
    </dl>
  );
}

function Tile({ e, color, lang }: { e: ChemElement; color: string; lang: Lang }) {
  return (
    <div
      className="flex aspect-[1/1.08] w-[clamp(4.6rem,8vw,6.4rem)] shrink-0 flex-col justify-between rounded-md p-2"
      style={{ background: `${color}22`, boxShadow: `inset 0 0 0 1.5px ${color}` }}
      aria-hidden="true"
    >
      <span className="text-xs leading-none text-muted">{e.number}</span>
      <span
        className="stretch-semi text-center text-[clamp(1.7rem,3vw,2.5rem)] leading-none font-[760]"
        style={{ color }}
      >
        {e.symbol}
      </span>
      <span className="stretch-condensed text-center text-[0.7rem] leading-none text-muted">{formatMass(e, lang)}</span>
    </div>
  );
}

function Count({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="border-line py-4 pr-3 not-first:border-l not-first:pl-4">
      <dt className="flex items-center gap-2 text-sm text-muted">
        <span className="size-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />
        {label}
      </dt>
      <dd className="stretch-semi mt-1 text-[clamp(2rem,4vw,3.2rem)] leading-none font-[700]">{value}</dd>
    </div>
  );
}

function Prop({
  term,
  children,
  predicted,
  t,
}: {
  term: string;
  children: React.ReactNode;
  predicted?: boolean;
  t: UI;
}) {
  const empty = children == null || children === false;
  return (
    <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 py-2.5">
      <dt className="text-muted">{term}</dt>
      <dd className={empty ? "text-faint" : ""}>
        {empty ? t.element.props.notMeasured : children}
        {predicted && !empty ? <span className="ml-2 text-faint">{t.element.predicted}</span> : null}
      </dd>
    </div>
  );
}

function StepLink({ el, dir, lang, t }: { el: ChemElement; dir: "prev" | "next"; lang: Lang; t: UI }) {
  const name = el.text[lang].name;
  return (
    <Link
      href={localPath(lang, `/element/${el.slug}`)}
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted ring-1 ring-line hover:text-paper hover:ring-line-strong"
      aria-label={dir === "prev" ? t.element.prevAria(name) : t.element.nextAria(name)}
    >
      {dir === "prev" && <Chevron dir="left" />}
      <span className="font-semibold text-paper">{el.symbol}</span>
      <span className="hidden sm:inline">{name}</span>
      {dir === "next" && <Chevron dir="right" />}
    </Link>
  );
}

function BigStep({ el, dir, lang, t }: { el: ChemElement; dir: "prev" | "next"; lang: Lang; t: UI }) {
  return (
    <Link href={localPath(lang, `/element/${el.slug}`)} className="group inline-block max-w-full">
      <span className="block text-sm text-faint">
        {dir === "prev" ? t.element.prev(el.number) : t.element.next(el.number)}
      </span>
      <span
        className="step-name stretch-semi block font-[740] tracking-tight group-hover:underline group-hover:underline-offset-4"
        style={{ ["--chars" as string]: el.text[lang].name.length }}
      >
        {el.text[lang].name}
      </span>
    </Link>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d={dir === "left" ? "M8.5 3 4.5 7l4 4" : "M5.5 3l4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function capitalise(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function placeText(e: ChemElement, lang: Lang): string {
  const ct = categoryOf(e).text[lang];
  const name = e.text[lang].name;
  const shells = e.shells.length;
  const outer = e.shells[e.shells.length - 1];
  const sr = lang === "sr";

  if (e.category === "lanthanide" || e.category === "actinide") {
    return sr
      ? `${name} spada u ${ct.pluralAcc}, red koji se obično izdvaja ispod glavne tabele da bi ona ostala razumne širine. Kod ovih elemenata elektroni popunjavaju unutrašnju f podljusku, pa su hemijski veoma slični. Broj ljuski (${shells}) odgovara periodi (${e.period}).`
      : `${name} is one of the ${ct.pluralAcc}, the row usually pulled out below the main table to keep it a sensible width. Here, electrons are filling an inner f subshell, so these elements are chemically very alike. Its ${shells} shells match its period, ${e.period}.`;
  }

  const where = e.group
    ? sr
      ? `${name} se nalazi u ${e.period}. periodi i ${e.group}. grupi. Grupa je kolona koju deli sa elementima koji se ponašaju slično.`
      : `${name} sits in period ${e.period} and group ${e.group}. The group is the column it shares with elements that behave in similar ways.`
    : sr
      ? `${name} se nalazi u ${e.period}. periodi.`
      : `${name} sits in period ${e.period}.`;

  const shellText =
    shells === e.period
      ? sr
        ? `Perioda govori da elektroni zauzimaju ${count(lang, shells, NOUN.shellAcc)}.`
        : `The period tells you its electrons occupy ${count(lang, shells, NOUN.shellAcc)}.`
      : sr
        ? `Elektroni zauzimaju ${count(lang, shells, NOUN.shellAcc)}, jednu manje nego što perioda nagoveštava, jer spoljašnji elektroni prelaze u unutrašnju d podljusku.`
        : `Its electrons occupy ${count(lang, shells, NOUN.shellAcc)}, one fewer than its period suggests, because its outermost electrons drop into an inner d subshell instead.`;

  const outerText = sr
    ? `U spoljašnjoj ljusci ima ${count(lang, outer, NOUN.electron)} i pripada ${e.block}-bloku, nazvanom po vrsti orbitale koju popunjavaju njegovi poslednji elektroni.`
    : `It has ${count(lang, outer, NOUN.electron)} in its outer shell and belongs to the ${e.block}-block, named after the type of orbital its last electrons fill.`;

  return `${where} ${shellText} ${outerText}`;
}
