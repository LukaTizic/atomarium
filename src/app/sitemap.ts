import type { MetadataRoute } from "next";
import { ELEMENTS } from "@/lib/elements";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Every page exists in English (/…) and Serbian (/sr/…); list both, each pointing at the other.
  const pages = (path: string, priority: number): MetadataRoute.Sitemap => {
    const languages = {
      en: `${SITE.url}${path}`,
      sr: `${SITE.url}${path === "" ? "/sr" : `/sr${path}`}`,
    };
    return [
      { url: languages.en, priority, alternates: { languages } },
      { url: languages.sr, priority, alternates: { languages } },
    ];
  };
  return [...pages("", 1), ...ELEMENTS.flatMap((e) => pages(`/element/${e.slug}`, 0.7))];
}
