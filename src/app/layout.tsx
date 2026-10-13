import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "./globals.css";
import { SITE } from "@/lib/site";
import { RandomElementLink } from "@/components/RandomElementLink";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: the periodic table, atom by atom`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#08162b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded bg-paper px-3 py-2 text-ground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <header className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 px-4 pt-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-sm"
            aria-label={`${SITE.name} home`}
          >
            <Mark />
            <span className="stretch-wide text-[1.05rem] font-[750] tracking-tight">
              {SITE.name}
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm whitespace-nowrap text-muted sm:gap-5">
            <Link href="/#table" className="hidden hover:text-paper sm:inline">
              Table
            </Link>
            <Link href="/#stability" className="hover:text-paper">
              Radioactivity
            </Link>
            <RandomElementLink className="hover:text-paper" />
          </nav>
        </header>
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="mx-auto mt-24 w-full max-w-[1320px] px-4 text-sm text-faint sm:px-6 lg:px-8">
          <div className="grid gap-6 border-t border-line py-10 md:grid-cols-[1fr_auto]">
            <p className="max-w-[62ch] leading-relaxed">
              Category colours are pigments and glasses made from elements: vermilion from
              mercury, cadmium orange, titanium white, verdigris from copper, Naples yellow from
              lead and antimony, cerulean from cobalt and tin, manganese violet, erbium glass and
              uranium glass. Element data from{" "}
              <a
                className="underline decoration-line-strong underline-offset-2 hover:text-paper"
                href="https://github.com/Bowserinator/Periodic-Table-JSON"
              >
                Periodic-Table-JSON
              </a>{" "}
              (CC BY-SA 3.0). Half-lives are rounded; superheavy values are approximate.
            </p>
            <p className="md:text-right">
              Built by{" "}
              <a className="text-muted hover:text-paper" href={SITE.author.url}>
                {SITE.author.name}
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

/** A tiny two-shell atom used as the logo mark. */
function Mark() {
  return (
    <svg width="26" height="26" viewBox="-13 -13 26 26" aria-hidden="true">
      <circle r="3.2" fill="var(--color-proton)" />
      <circle r="7" fill="none" stroke="var(--color-line-strong)" />
      <circle r="11.5" fill="none" stroke="var(--color-line-strong)" />
      <circle cx="7" cy="0" r="1.8" fill="var(--color-electron)" />
      <circle cx="-8.1" cy="-8.1" r="1.8" fill="var(--color-electron)" />
    </svg>
  );
}
