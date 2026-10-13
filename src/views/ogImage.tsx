import { ImageResponse } from "next/og";
import { count, type Lang, NOUN } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { categoryOf, ELEMENTS, formatMass, getElement } from "@/lib/elements";

export const ogSize = { width: 1200, height: 630 };

/** Social preview card for an element page. */
export function elementOgImage(slug: string, lang: Lang) {
  const e = getElement(slug) ?? ELEMENTS[5];
  const cat = categoryOf(e);
  const name = e.text[lang].name;

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
          background: "#08162b",
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
          <div
            style={{ fontSize: 170, fontWeight: 700, color: cat.color, lineHeight: 1, display: "flex", justifyContent: "center" }}
          >
            {e.symbol}
          </div>
          <div style={{ fontSize: 30, color: "#a3b7d3", display: "flex", justifyContent: "center" }}>
            {formatMass(e, lang)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 30, color: cat.color, display: "flex" }}>{cat.text[lang].label}</div>
          <div style={{ fontSize: name.length > 11 ? 84 : 104, fontWeight: 700, lineHeight: 1, letterSpacing: -3, display: "flex" }}>
            {name}
          </div>
          <div style={{ display: "flex", gap: 34, fontSize: 32, color: "#a3b7d3", marginTop: 14 }}>
            <span style={{ display: "flex" }}>{count(lang, e.protons, NOUN.proton)}</span>
            <span style={{ display: "flex" }}>{count(lang, e.neutrons, NOUN.neutron)}</span>
            <span style={{ display: "flex" }}>{count(lang, e.electrons, NOUN.electron)}</span>
          </div>
          <div style={{ fontSize: 26, color: "#7189ab", marginTop: 26, display: "flex" }}>{ui(lang).meta.ogTagline}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
