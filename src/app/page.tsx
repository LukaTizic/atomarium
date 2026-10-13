import Link from "next/link";
import { Atom } from "@/components/Atom";
import { PeriodicTable } from "@/components/PeriodicTable";
import { StabilityChart } from "@/components/StabilityChart";
import { DECAY_COPY, type DecayMode } from "@/data/nuclear";
import { stabilityPoints, tileData } from "@/lib/views";

export default function Home() {
  const tiles = tileData();
  const points = stabilityPoints();

  return (
    <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
      {/* Hero: the table is the hero. */}
      <section className="grid gap-5 pt-10 pb-7 sm:pt-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
        <h1 className="stretch-wide max-w-[18ch] text-[clamp(2.3rem,4.6vw,4.1rem)] leading-[0.98] font-[800] tracking-[-0.02em] text-balance">
          Every element, down to the last electron.
        </h1>
        <p className="max-w-[48ch] font-serif text-[1.1rem] leading-relaxed text-muted lg:pb-1">
          Pick any of the 118 elements to see how many protons, neutrons and electrons it has,
          what people use it for, and whether its nucleus is stable or slowly falling apart.
        </p>
      </section>

      <section aria-label="Interactive periodic table" className="scroll-mt-6">
        <PeriodicTable elements={tiles} />
      </section>

      {/* What's inside an atom */}
      <section className="mt-28 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 className="stretch-semi text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight font-[760] tracking-tight">
            What&rsquo;s inside an atom
          </h2>
          <p className="mt-4 max-w-[56ch] font-serif text-[1.08rem] leading-relaxed text-muted">
            Every atom is a tiny, dense nucleus surrounded by electrons. Three numbers tell you
            almost everything about it. This is lithium: 3 protons, 4 neutrons and 3 electrons.
          </p>
          <dl className="mt-8 grid gap-6">
            <Part color="var(--color-proton)" term="Protons" sub="decide which element it is">
              The number of protons is the atomic number. Change it and you have a different
              element: 6 is always carbon, 79 is always gold.
            </Part>
            <Part color="var(--color-neutron)" term="Neutrons" sub="hold the nucleus together">
              Neutrons add mass and help the strong nuclear force glue protons together. The
              same element can have different numbers of them; these versions are called
              isotopes.
            </Part>
            <Part color="var(--color-electron)" term="Electrons" sub="decide how it reacts">
              A neutral atom has one electron per proton, arranged in shells. The outermost
              shell decides how an element bonds, which is why elements in the same column
              behave alike.
            </Part>
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <Atom protons={3} neutrons={4} shells={[2, 1]} labels title="Lithium atom: 3 protons, 4 neutrons, 3 electrons" />
          <p className="mt-2 text-center text-sm text-faint">
            Not to scale: if the nucleus were this size, the electrons would be several
            kilometres away.
          </p>
        </div>
      </section>

      {/* Radioactivity */}
      <section id="stability" className="mt-28 scroll-mt-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <h2 className="stretch-semi text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight font-[760] tracking-tight">
              Why some atoms fall apart
            </h2>
            <div className="mt-4 max-w-[56ch] space-y-4 font-serif text-[1.08rem] leading-relaxed text-muted">
              <p>
                Protons all carry a positive charge, so they push each other away. The strong
                nuclear force pulls protons and neutrons together, but it only reaches the
                nearest neighbours.
              </p>
              <p>
                Small nuclei balance this with roughly one neutron per proton. Bigger nuclei
                need extra neutrons to space the protons out, and past lead even that stops
                working: the nucleus is too large to hold together for ever, so it eventually
                sheds particles and turns into another element. That is radioactivity.
              </p>
              <p>
                Each dot is one element, plotted by the isotope shown on its page. Hover a
                dot for details, or click it to open the element.
              </p>
            </div>
          </div>
          <StabilityChart points={points} />
        </div>

        <h3 className="mt-16 text-lg font-semibold">Four ways a nucleus can decay</h3>
        <dl className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {(Object.keys(DECAY_COPY) as DecayMode[]).map((m) => (
            <div key={m} className="border-t border-line pt-4">
              <dt className="font-semibold">{DECAY_COPY[m].name}</dt>
              <dd className="mt-1.5 max-w-[60ch] font-serif leading-relaxed text-muted">
                {DECAY_COPY[m].what}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-muted">
          See it happen on{" "}
          <Link href="/element/uranium" className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper">
            uranium
          </Link>
          ,{" "}
          <Link href="/element/francium" className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper">
            francium
          </Link>{" "}
          or{" "}
          <Link href="/element/oganesson" className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper">
            oganesson
          </Link>
          : the shorter the half-life, the more often the atom fires.
        </p>
      </section>
    </div>
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
