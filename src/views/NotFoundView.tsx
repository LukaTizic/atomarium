import Link from "next/link";
import { type Lang, localPath } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export function NotFoundView({ lang }: { lang: Lang }) {
  const t = ui(lang).notFound;
  return (
    <div className="mx-auto w-full max-w-[1320px] px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm text-faint">{t.eyebrow}</p>
      <h1 className="stretch-wide mt-3 max-w-[20ch] text-[clamp(2.2rem,5vw,4rem)] leading-[1] font-[800] tracking-tight">
        {t.title}
      </h1>
      <p className="mt-5 max-w-[52ch] font-serif text-lg leading-relaxed text-muted">{t.body}</p>
      <Link
        href={`${localPath(lang, "/")}#table`}
        className="mt-8 inline-block rounded-full bg-paper px-5 py-2.5 font-semibold text-ground hover:bg-white"
      >
        {t.cta}
      </Link>
    </div>
  );
}
