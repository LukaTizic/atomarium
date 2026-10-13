# Atomarium

An interactive periodic table where every one of the 118 elements opens into an animated atom: its protons, neutrons and electrons, what people use it for, and a plain-language answer to "is it radioactive, and why?".

Built with **Next.js 16** (App Router, Cache Components), **React 19**, **TypeScript** and **Tailwind CSS 4**. Every page is statically generated, so it deploys to Vercel with no server or database.

## Features

- **Interactive periodic table** with five colourings: category, state of matter (with a temperature slider from 0 to 6,000 K), electronegativity, density and year of discovery.
- **Live inspector** in the empty space at the top of the table: hover or tab to any element to see its atom spin up.
- **Search** by name, symbol or atomic number (press `/` to focus, `Enter` to open the first match).
- **Keyboard navigation**: the table is a roving-tabindex grid; arrow keys move between elements.
- **118 statically generated element pages**, each with:
  - an animated Bohr model drawn in SVG, with the nucleus packed nucleon by nucleon and electrons orbiting in their shells;
  - for radioactive elements, decay events (alpha particles, beta electrons, electron capture or fission fragments) fired at a pace that follows the element's half-life;
  - a written summary, everyday uses and a memorable fact;
  - a generated explanation of why the nucleus is stable or not, which decay it undergoes and what it turns into;
  - an orbital box diagram built from the electron configuration (following Hund's rule);
  - a neutron–proton chart showing where the element sits on the band of stability;
  - a mini table for jumping to neighbouring elements.
- **English and Serbian**: the whole site, including every element's text, is available in Serbian (Latin script) at `/sr`, with a language switch that keeps you on the same element, Serbian number formatting and plural forms, and accent-insensitive search ("gvozdje" finds Gvožđe).
- **SEO and sharing**: per-element metadata in both languages with `hreflang` links, generated Open Graph images, sitemap and robots file.
- **Accessibility**: keyboard support throughout, visible focus, `prefers-reduced-motion` respected, a data table behind every chart.

## Design notes

The ground is Prussian blue, an iron pigment, and each category colour is a pigment or glass made from an element: vermilion (mercury), cadmium orange, titanium white, verdigris (copper), Naples yellow (lead and antimony), cerulean (cobalt and tin), manganese violet, erbium glass and uranium glass. Type is Archivo, whose width axis carries the headings and the dense table labels, paired with Source Serif 4 for reading.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build (prerenders all 118 element pages)
npm start       # serve the production build
```

## Deploying

Push the repository to GitHub and import it in Vercel; no configuration is needed. Set `NEXT_PUBLIC_SITE_URL` to the final URL so the sitemap and social previews use it.

## Project structure

```
src/
  app/
    (en)/                          English routes at / and /element/[slug]
    (sr)/sr/                       Serbian routes at /sr and /sr/element/[slug]
    global-not-found.tsx           404 for unmatched URLs (each language has its own root layout)
  views/                           Page bodies shared by both languages (HomeView, ElementView, SiteShell)
  i18n/                            Language config, number/plural helpers, interface strings
  components/
    Atom.tsx                       Animated SVG Bohr model with decay bursts
    PeriodicTable.tsx              Interactive table, colour modes, search, inspector
    StabilityChart.tsx             Neutrons vs protons scatter with tooltips
    OrbitalDiagram.tsx, MiniTable.tsx, ...
  data/
    elements.json                  Numeric element data
    content.ts                     Written summaries, uses, facts, discovery (English)
    content.sr.ts                  The same, in Serbian
    nuclear.ts                     Isotopes, half-lives and decay modes
  lib/
    chem.ts                        Client-safe helpers and category palette
    elements.ts                    Merges data into one typed model
    stability.ts                   Generates the "is it radioactive?" explanation
```

## Data and credits

- Numeric element data from [Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON) by Bowserinator, licensed CC BY-SA 3.0.
- Element summaries, uses and facts are original writing for this project.
- Half-lives are rounded values for each element's longest-lived isotope; values for superheavy elements are approximate and still being refined by researchers.
- Properties of elements from fermium onwards are mostly predictions and are labelled as such.
