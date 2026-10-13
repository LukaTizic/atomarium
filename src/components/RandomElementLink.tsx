"use client";

import { useRouter } from "next/navigation";
import { ELEMENT_SLUGS } from "@/lib/slugs";

export function RandomElementLink({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const slug = ELEMENT_SLUGS[Math.floor(Math.random() * ELEMENT_SLUGS.length)];
        router.push(`/element/${slug}`);
      }}
    >
      Random element
    </button>
  );
}
