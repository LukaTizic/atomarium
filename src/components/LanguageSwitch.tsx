"use client";

import { usePathname } from "next/navigation";
import type { Lang } from "@/i18n/config";

/** Links to the same page in the other language: /element/iron <-> /sr/element/iron. */
export function LanguageSwitch({ lang, label, aria }: { lang: Lang; label: string; aria: string }) {
  const pathname = usePathname() ?? "/";
  const target =
    lang === "en"
      ? pathname === "/"
        ? "/sr"
        : `/sr${pathname}`
      : pathname.replace(/^\/sr(?=\/|$)/, "") || "/";

  return (
    <a
      href={target}
      hrefLang={lang === "en" ? "sr" : "en"}
      lang={lang === "en" ? "sr" : "en"}
      aria-label={aria}
      className="rounded-full px-3 py-1 text-paper ring-1 ring-line hover:ring-line-strong"
    >
      {label}
    </a>
  );
}
