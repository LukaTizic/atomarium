import { elementParams } from "@/views/ElementView";
import { elementOgImage, ogSize } from "@/views/ogImage";

export const alt = "Atomarium";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return elementParams();
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return elementOgImage(slug, "en");
}
