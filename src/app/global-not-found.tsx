import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found · Atomarium",
};

/** 404 for addresses that match no route in either language. */
export default function GlobalNotFound() {
  return (
    <html lang="en-GB">
      <body className="min-h-dvh">
        <div className="mx-auto w-full max-w-[1320px] px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-sm text-faint">Page not found · Stranica nije pronađena</p>
          <h1 className="stretch-wide mt-3 max-w-[20ch] text-[clamp(2.2rem,5vw,4rem)] leading-[1] font-[800] tracking-tight">
            That element hasn&rsquo;t been discovered yet.
          </h1>
          <p className="mt-5 max-w-[52ch] font-serif text-lg leading-relaxed text-muted">
            There are 118 known elements, and this address doesn&rsquo;t match any of them.
          </p>
          <p className="mt-8 flex gap-3">
            <Link href="/#table" className="rounded-full bg-paper px-5 py-2.5 font-semibold text-ground hover:bg-white">
              Open the periodic table
            </Link>
            <Link href="/sr#table" lang="sr" className="rounded-full px-5 py-2.5 text-paper ring-1 ring-line hover:ring-line-strong">
              Periodni sistem na srpskom
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
