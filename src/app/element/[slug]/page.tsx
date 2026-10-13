import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AtomPanel } from "@/components/AtomPanel";
import { ElectronConfig } from "@/components/ElectronConfig";
import { MiniTable } from "@/components/MiniTable";
import { OrbitalDiagram } from "@/components/OrbitalDiagram";
import { StabilityChart } from "@/components/StabilityChart";
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

export function generateStaticParams() {
  return ELEMENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(props: PageProps<"/element/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const e = getElement(slug);
  if (!e) return {};
  const first = e.summary.split(". ")[0].replace(/\.$/, "") + ".";
  return {
    title: `${e.name} (${e.symbol})`,
    description: `${e.name}: ${e.protons} protons, ${e.neutrons} neutrons, ${e.electrons} electrons. ${first}`,
    alternates: { canonical: `/element/${e.slug}` },
  };
}

export default async function ElementPage(props: PageProps<"/element/[slug]">) {
  const { slug } = await props.params;
  const e = getElement(slug);
  if (!e) notFound();

  const cat = categoryOf(e);
  const prev = BY_NUMBER.get(e.number - 1);
  const next = BY_NUMBER.get(e.number + 1);
  const story = stabilityStory(e);

  return (
    <article className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
      <nav aria-label="Element navigation" className="mt-8 flex items-center justify-between gap-4 text-sm">
        <Link href="/#table" className="flex items-center gap-1.5 text-muted hover:text-paper">
          <Chevron dir="left" />
          Periodic table
        </Link>
        <div className="flex items-center gap-1">
          {prev && <StepLink el={prev} dir="prev" />}
          {next && <StepLink el={next} dir="next" />}
        </div>
      </nav>

      {/* Hero: the atom and its three numbers */}
      <section className="mt-6 grid items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-14">
        <div className="order-2 lg:order-1">
          <AtomPanel
            name={e.name}
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
              {cat.label}
              {e.categoryPredicted ? " (predicted)" : ""}
            </span>
            {e.radioactive && (
              <span className="flex items-center gap-2 text-decay">
                <span className="size-2.5 rounded-full bg-decay" />
                Radioactive
              </span>
            )}
          </div>

          <div className="mt-4 flex items-end gap-5">
            <Tile e={e} color={cat.color} />
            <h1 className="stretch-wide min-w-0 text-[clamp(2.6rem,6.2vw,5.4rem)] leading-[0.92] font-[800] tracking-[-0.025em] break-words">
              {e.name}
            </h1>
          </div>

          <dl className="mt-9 grid grid-cols-3 border-y border-line">
            <Count label="Protons" value={e.protons} color="var(--color-proton)" />
            <Count label="Neutrons" value={e.neutrons} color="var(--color-neutron)" />
            <Count label="Electrons" value={e.electrons} color="var(--color-electron)" />
          </dl>
          <p className="mt-3 text-sm text-faint">
            Neutrons shown for {isotopeName(e).toLowerCase()},{" "}
            {e.origin === "primordial" && !e.radioactive
              ? "its most common isotope"
              : "its longest-lived isotope"}
            . Other isotopes have more or fewer.
          </p>

          <div className="mt-6">
            <p className="text-sm text-muted">Electrons per shell</p>
            <ol className="mt-2 flex flex-wrap gap-2">
              {e.shells.map((n, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-1.5 rounded-full px-3 py-1 text-sm ring-1 ring-line"
                >
                  <span className="text-faint">{SHELL_LETTERS[i]}</span>
                  <span className="font-semibold">{n}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 max-w-[52ch] font-serif text-[1.2rem] leading-relaxed text-paper/90">
            {e.summary}
          </p>
        </div>
      </section>

      {/* Uses, fact and properties */}
      <section className="mt-24 grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 className="stretch-semi text-2xl font-[740] tracking-tight">What it&rsquo;s used for</h2>
          {e.uses.length > 0 ? (
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {e.uses.map((u) => (
                <li key={u} className="flex gap-4 py-3.5 font-serif text-[1.06rem] leading-snug">
                  <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full" style={{ background: cat.color }} />
                  {u}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 max-w-[56ch] font-serif text-[1.06rem] leading-relaxed text-muted">
              Nothing outside the laboratory. Only a handful of atoms have ever existed, each
              gone within {e.halfLife?.text ?? "moments"}. It is made to test the limits of
              the atom and the periodic table itself.
            </p>
          )}

          <h2 className="stretch-semi mt-14 text-2xl font-[740] tracking-tight">Worth knowing</h2>
          <p className="mt-4 max-w-[56ch] border-l-2 pl-5 font-serif text-[1.15rem] leading-relaxed italic" style={{ borderColor: cat.color }}>
            {e.fact}
          </p>
        </div>

        <div>
          <h2 className="stretch-semi text-2xl font-[740] tracking-tight">Properties</h2>
          <dl className="mt-5 divide-y divide-line border-y border-line text-[0.95rem]">
            <Prop term="Atomic number">{e.number}</Prop>
            <Prop term="Atomic mass">{formatMass(e)} u</Prop>
            <Prop term="Group, period, block">
              {e.group ?? "none"}, {e.period}, {e.block}-block
            </Prop>
            <Prop term="State at room temperature" predicted={e.predicted}>
              {capitalise(e.phase)}
            </Prop>
            {e.sublimes ? (
              <Prop term="Turns to gas (sublimes)">{formatTemp(e.sublimes)}</Prop>
            ) : (
              <>
                <Prop term="Melting point" predicted={e.predicted && e.melt != null}>
                  {e.meltNote ?? formatTemp(e.melt)}
                </Prop>
                <Prop term="Boiling point" predicted={e.predicted && e.boil != null}>
                  {formatTemp(e.boil)}
                </Prop>
              </>
            )}
            <Prop term="Density" predicted={e.predicted && e.densityDisplay != null}>
              {e.densityDisplay != null ? `${trim(e.densityDisplay)} ${e.densityUnit}` : null}
            </Prop>
            <Prop term="Electronegativity">{e.electronegativity?.toFixed(2) ?? null}</Prop>
            <Prop term="First ionisation energy">
              {e.ionization != null ? `${Math.round(e.ionization).toLocaleString("en-GB")} kJ/mol` : null}
            </Prop>
            <Prop term="Electron configuration">
              <ElectronConfig value={e.configurationShort} />
            </Prop>
            {e.appearance && <Prop term="Appearance">{capitalise(e.appearance)}</Prop>}
            <Prop term="Discovered">
              {e.year === "Ancient" ? (
                e.discoveredBy
              ) : (
                <>
                  {e.year}
                  <span className="block text-faint">{e.discoveredBy}</span>
                </>
              )}
            </Prop>
            <Prop term="Where it comes from">{ORIGIN_TEXT[e.origin]}</Prop>
          </dl>
        </div>
      </section>

      {/* Stability */}
      <section className="mt-24 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16" aria-labelledby="stability-heading">
        <div>
          <h2 id="stability-heading" className="stretch-semi text-2xl font-[740] tracking-tight">
            Is it radioactive?{" "}
            <span className={story.verdict === "Radioactive" ? "text-decay" : "text-electron"}>
              {story.verdict === "Radioactive" ? "Yes." : story.verdict === "Stable" ? "No." : "Barely."}
            </span>
          </h2>
          <div className="mt-5 max-w-[58ch] space-y-4 font-serif text-[1.06rem] leading-relaxed text-muted">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {story.decay && (
            <div className="mt-8 border-t border-line pt-5">
              <h3 className="font-semibold">What happens: {story.decay.name.toLowerCase()}</h3>
              <p className="mt-2 max-w-[58ch] font-serif leading-relaxed text-muted">{story.decay.what}</p>
              {story.decay.into && story.decay.intoSlug && (
                <p className="mt-3 text-sm text-muted">
                  {isotopeName(e)} becomes{" "}
                  <Link
                    href={`/element/${story.decay.intoSlug}`}
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
        <StabilityChart points={stabilityPoints()} highlight={e.number} />
      </section>

      {/* Electrons */}
      <section className="mt-24" aria-labelledby="config-heading">
        <h2 id="config-heading" className="stretch-semi text-2xl font-[740] tracking-tight">
          How its electrons are arranged
        </h2>
        <p className="mt-4 max-w-[64ch] font-serif text-[1.06rem] leading-relaxed text-muted">
          Electrons fill orbitals from the lowest energy up. Each box holds at most two, spinning
          in opposite directions, and within a subshell they spread out before they pair up.
          The full configuration is{" "}
          <ElectronConfig value={e.configuration} className="text-paper" />.
        </p>
        <div className="mt-8">
          <OrbitalDiagram configuration={e.configuration} />
        </div>
      </section>

      {/* Location */}
      <section className="mt-24 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" aria-labelledby="where-heading">
        <div>
          <h2 id="where-heading" className="stretch-semi text-2xl font-[740] tracking-tight">
            Where it sits
          </h2>
          <p className="mt-4 max-w-[52ch] font-serif text-[1.06rem] leading-relaxed text-muted">
            {placeText(e)}
          </p>
        </div>
        <MiniTable current={e.number} />
      </section>

      <nav aria-label="Previous and next element" className="mt-20 grid grid-cols-2 gap-4 border-t border-line pt-6">
        <div>{prev && <BigStep el={prev} dir="prev" />}</div>
        <div className="text-right">{next && <BigStep el={next} dir="next" />}</div>
      </nav>
    </article>
  );
}

/* ---------- pieces ---------- */

function Tile({ e, color }: { e: ChemElement; color: string }) {
  return (
    <div
      className="flex aspect-[1/1.08] w-[clamp(4.6rem,8vw,6.4rem)] shrink-0 flex-col justify-between rounded-md p-2"
      style={{ background: `${color}22`, boxShadow: `inset 0 0 0 1.5px ${color}` }}
      aria-hidden="true"
    >
      <span className="text-xs leading-none text-muted">{e.number}</span>
      <span className="stretch-semi text-center text-[clamp(1.7rem,3vw,2.5rem)] leading-none font-[760]" style={{ color }}>
        {e.symbol}
      </span>
      <span className="stretch-condensed text-center text-[0.7rem] leading-none text-muted">{formatMass(e)}</span>
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
}: {
  term: string;
  children: React.ReactNode;
  predicted?: boolean;
}) {
  const empty = children == null || children === false;
  return (
    <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 py-2.5">
      <dt className="text-muted">{term}</dt>
      <dd className={empty ? "text-faint" : ""}>
        {empty ? "Not measured" : children}
        {predicted && !empty ? <span className="ml-2 text-faint">predicted</span> : null}
      </dd>
    </div>
  );
}

function StepLink({ el, dir }: { el: ChemElement; dir: "prev" | "next" }) {
  return (
    <Link
      href={`/element/${el.slug}`}
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted ring-1 ring-line hover:text-paper hover:ring-line-strong"
      aria-label={`${dir === "prev" ? "Previous" : "Next"} element: ${el.name}`}
    >
      {dir === "prev" && <Chevron dir="left" />}
      <span className="font-semibold text-paper">{el.symbol}</span>
      <span className="hidden sm:inline">{el.name}</span>
      {dir === "next" && <Chevron dir="right" />}
    </Link>
  );
}

function BigStep({ el, dir }: { el: ChemElement; dir: "prev" | "next" }) {
  return (
    <Link href={`/element/${el.slug}`} className="group inline-block">
      <span className="block text-sm text-faint">{dir === "prev" ? "Previous" : "Next"}: {el.number}</span>
      <span className="stretch-semi block text-2xl font-[740] tracking-tight group-hover:underline group-hover:underline-offset-4">
        {el.name}
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

function trim(n: number) {
  return Number(n.toPrecision(4)).toLocaleString("en-GB", { maximumFractionDigits: 5 });
}

function placeText(e: ChemElement): string {
  const cat = categoryOf(e);
  const shells = e.shells.length;
  const outer = e.shells[e.shells.length - 1];
  if (e.category === "lanthanide" || e.category === "actinide") {
    return `${e.name} is one of the ${cat.plural.toLowerCase()}, the row usually pulled out below the main table to keep it a sensible width. Here, electrons are filling an inner f subshell, so these elements are chemically very alike. Its ${shells} shells match its period, ${e.period}.`;
  }
  const where = e.group
    ? `${e.name} sits in period ${e.period} and group ${e.group}. The group is the column it shares with elements that behave in similar ways.`
    : `${e.name} sits in period ${e.period}.`;
  const shellText =
    shells === e.period
      ? `The period tells you its electrons occupy ${shells} shell${shells > 1 ? "s" : ""}.`
      : `Its electrons occupy ${shells} shells, one fewer than its period suggests, because its outermost electrons drop into an inner d subshell instead.`;
  return `${where} ${shellText} It has ${outer} electron${outer > 1 ? "s" : ""} in its outer shell and belongs to the ${e.block}-block, named after the type of orbital its last electrons fill.`;
}
