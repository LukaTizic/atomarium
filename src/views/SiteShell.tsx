import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "@/app/globals.css";
import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { RandomElementLink } from "@/components/RandomElementLink";
import { type Lang, LOCALE, localPath } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { SITE } from "@/lib/site";

export function shellMetadata(lang: Lang): Metadata {
  const t = ui(lang);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: t.meta.title, template: `%s · ${SITE.name}` },
    description: t.meta.description,
    openGraph: { siteName: SITE.name, type: "website", locale: LOCALE[lang].replace("-", "_") },
    twitter: { card: "summary_large_image" },
  };
}

export const shellViewport: Viewport = { themeColor: "#08162b" };

/** Root layout body shared by both languages: html, header, footer. */
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = ui(lang);
  return (
    <html lang={lang === "sr" ? "sr-Latn" : "en-GB"}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded bg-paper px-3 py-2 text-ground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {t.nav.skip}
        </a>
        <header className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 pt-5 sm:gap-6 sm:px-6 lg:px-8">
          <Link href={localPath(lang, "/")} className="group flex items-center gap-2.5 rounded-sm" aria-label={t.nav.home}>
            <Mark />
            <span className="stretch-wide hidden text-[1.05rem] font-[750] tracking-tight min-[400px]:inline">
              {SITE.name}
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm whitespace-nowrap text-muted sm:gap-5">
            <Link href={`${localPath(lang, "/")}#table`} className="hidden hover:text-paper md:inline">
              {t.nav.table}
            </Link>
            <Link href={`${localPath(lang, "/")}#stability`} className="hidden hover:text-paper sm:inline">
              {t.nav.radioactivity}
            </Link>
            <RandomElementLink lang={lang} label={t.nav.random} className="hover:text-paper" />
            <LanguageSwitch lang={lang} label={t.nav.switchLabel} aria={t.nav.switchAria} />
          </nav>
        </header>
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="mx-auto mt-24 w-full max-w-[1320px] px-4 text-sm text-faint sm:px-6 lg:px-8">
          <div className="grid gap-6 border-t border-line py-10 md:grid-cols-[1fr_auto]">
            <p className="max-w-[62ch] leading-relaxed">
              {t.footer.pigments} {t.footer.dataBefore}{" "}
              <a
                className="underline decoration-line-strong underline-offset-2 hover:text-paper"
                href="https://github.com/Bowserinator/Periodic-Table-JSON"
              >
                Periodic-Table-JSON
              </a>{" "}
              {t.footer.dataAfter}
            </p>
            <p className="md:text-right">
              {t.footer.builtBy}{" "}
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
