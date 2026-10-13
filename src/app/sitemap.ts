import type { MetadataRoute } from "next";
import { ELEMENTS } from "@/lib/elements";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1 },
    ...ELEMENTS.map((e) => ({ url: `${SITE.url}/element/${e.slug}`, priority: 0.7 })),
  ];
}
