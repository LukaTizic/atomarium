import { ImageResponse } from "next/og";
import { categoryOf, ELEMENTS, formatMass, getElement } from "@/lib/elements";

export const alt = "Element card from Atomarium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return ELEMENTS.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getElement(slug) ?? ELEMENTS[5];
  const cat = categoryOf(e);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 90px",
          background: "#0e2442",
          color: "#eef4fa",
        }}
      >
        <div
          style={{
            width: 330,
            height: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 26,
            borderRadius: 22,
            border: `4px solid ${cat.color}`,
            background: `${cat.color}22`,
          }}
        >
          <div style={{ fontSize: 40, color: "#a3b7d3", display: "flex" }}>{e.number}</div>
          <div style={{ fontSize: 170, fontWeight: 700, color: cat.color, lineHeight: 1, display: "flex", justifyContent: "center" }}>
            {e.symbol}
          </div>
          <div style={{ fontSize: 30, color: "#a3b7d3", display: "flex", justifyContent: "center" }}>{formatMass(e)}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 30, color: cat.color, display: "flex" }}>{cat.label}</div>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1, letterSpacing: -3, display: "flex" }}>{e.name}</div>
          <div style={{ display: "flex", gap: 34, fontSize: 32, color: "#a3b7d3", marginTop: 14 }}>
            <span style={{ display: "flex" }}>{e.protons} protons</span>
            <span style={{ display: "flex" }}>{e.neutrons} neutrons</span>
            <span style={{ display: "flex" }}>{e.electrons} electrons</span>
          </div>
          <div style={{ fontSize: 26, color: "#7189ab", marginTop: 26, display: "flex" }}>Atomarium: the periodic table, atom by atom</div>
        </div>
      </div>
    ),
    size,
  );
}
