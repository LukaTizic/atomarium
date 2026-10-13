import type { Metadata } from "next";
import { ElementView, elementMetadata, elementParams } from "@/views/ElementView";

export function generateStaticParams() {
  return elementParams();
}

export async function generateMetadata(props: PageProps<"/element/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return elementMetadata(slug, "en");
}

export default async function Page(props: PageProps<"/element/[slug]">) {
  const { slug } = await props.params;
  return <ElementView slug={slug} lang="en" />;
}
