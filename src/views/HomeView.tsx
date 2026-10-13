import type { Metadata } from "next";
import Link from "next/link";
import { Atom } from "@/components/Atom";
import { PeriodicTable } from "@/components/PeriodicTable";
import { StabilityChart } from "@/components/StabilityChart";
import { DECAY_COPY, type DecayMode } from "@/data/nuclear";
import { type Lang, localPath } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { stabilityPoints, tileData } from "@/lib/views";

export function homeMetadata(lang: Lang): Metadata {
  return {
    alternates: {
      canonical: localPath(lang, "/"),
      languages: { en: "/", sr: "/sr", "x-default": "/" },
    },
  };
}

export function HomeView({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const tiles = tileData(lang);
  const points = stabilityPoints(lang);
  const decay = DECAY_COPY[lang];

  return (
    <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
      {/* Hero: the table is the hero. */}
      <section className="grid grid-cols-1 gap-5 pt-10 pb-7 sm:pt-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
        <h1 className="stretch-wide max-w-[18ch] text-[clamp(2.3rem,4.6vw,4.1rem)] leading-[0.98] font-[800] tracking-[-0.02em] text-balance">
          {t.home.h1}
        </h1>
        <p className="max-w-[48ch] font-serif text-[1.1rem] leading-relaxed text-muted lg:pb-1">
          {t.home.intro}
        </p>
      </section>

      <section aria-label={t.home.tableLabel} className="scroll-mt-6">
        <PeriodicTable elements={tiles} lang={lang} />
      </section>

      {/* What's inside an atom */}
      <section className="mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 className="stretch-semi text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight font-[760] tracking-tight">
            {t.home.insideTitle}
          </h2>
          <p className="mt-4 max-w-[56ch] font-serif text-[1.08rem] leading-relaxed text-muted">
            {t.home.insideIntro}
          </p>
          <dl className="mt-8 grid gap-6">
            {t.home.parts.map((part, i) => (
              <Part
                key={part.term}
                color={["var(--color-proton)", "var(--color-neutron)", "var(--color-electron)"][i]}
                term={part.term}
                sub={part.sub}
              >
                {part.body}
              </Part>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <Atom protons={3} neutrons={4} shells={[2, 1]} labels title={t.home.lithiumTitle} />
          <p className="mt-2 text-center text-sm text-faint">{t.home.notToScale}</p>
        </div>
      </section>

      {/* Radioactivity */}
      <section id="stability" className="mt-28 scroll-mt-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <h2 className="stretch-semi text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight font-[760] tracking-tight">
              {t.home.whyTitle}
            </h2>
            <div className="mt-4 max-w-[56ch] space-y-4 font-serif text-[1.08rem] leading-relaxed text-muted">
              {t.home.why.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <StabilityChart points={points} lang={lang} />
        </div>

        <h3 className="mt-16 text-lg font-semibold">{t.home.decayTitle}</h3>
        <dl className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {(Object.keys(decay) as DecayMode[]).map((m) => (
            <div key={m} className="border-t border-line pt-4">
              <dt className="font-semibold">{decay[m].name}</dt>
              <dd className="mt-1.5 max-w-[60ch] font-serif leading-relaxed text-muted">{decay[m].what}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-muted">
          {t.home.seeItBefore} <InlineLink href={localPath(lang, "/element/uranium")}>{t.home.seeItLinks[0]}</InlineLink>,{" "}
          <InlineLink href={localPath(lang, "/element/francium")}>{t.home.seeItLinks[1]}</InlineLink> {t.home.seeItOr}{" "}
          <InlineLink href={localPath(lang, "/element/oganesson")}>{t.home.seeItLinks[2]}</InlineLink>
          {t.home.seeItAfter}
        </p>
      </section>
    </div>
  );
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper">
      {children}
    </Link>
  );
}

function Part({
  color,
  term,
  sub,
  children,
}: {
  color: string;
  term: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[14px_1fr] gap-x-4">
      <span className="mt-1.5 size-3.5 rounded-full" style={{ background: color }} aria-hidden="true" />
      <div>
        <dt className="font-semibold">
          {term} <span className="font-normal text-faint">{sub}</span>
        </dt>
        <dd className="mt-1 max-w-[52ch] font-serif leading-relaxed text-muted">{children}</dd>
      </div>
    </div>
  );
}
