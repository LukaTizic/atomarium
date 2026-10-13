"use client";

import { useRouter } from "next/navigation";
import { type Lang, localPath } from "@/i18n/config";
import { ELEMENT_SLUGS } from "@/lib/slugs";

export function RandomElementLink({
  lang,
  label,
  className,
}: {
  lang: Lang;
  label: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const slug = ELEMENT_SLUGS[Math.floor(Math.random() * ELEMENT_SLUGS.length)];
        router.push(localPath(lang, `/element/${slug}`));
      }}
    >
      {label}
    </button>
  );
}
