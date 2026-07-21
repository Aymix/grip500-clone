# Page Topology — https://www.grip500.fr/

Partial-mode section-discovery pass. Page height ~6051px. Top to bottom:

| # | Section | DOM | What it contains |
|---|---------|-----|------------------|
| 1 | Header / nav | `header.main-header` | Top utility strip (AVIS CLIENTS, FAQ, PRO, CONTACT, MON COMPTE) + dark header (GRIP500 logo, nav: PNEUS, JANTES, CHAÎNES NEIGE, HUILES, BOUTIQUE, LIVRAISON ET MONTAGE, Panier (0)) |
| 2 | Hero + tyre search | `.home-banner` | "ACHETEZ VOS PNEUS MOINS CHERS" over tyre bg + vehicle-type tabs (car/moto/truck/quad/atv) + search form (DIMENSION/VÉHICULE, dropdowns, Runflat/Renforcé, RECHERCHER) |
| 3 | Reassurance row | `.home__section` | "Livraison rapide et gratuite à partir de 2 pneus…" trust icons + text |
| 4 | How it works | `.home__section` | "COMMENT ÇA MARCHE ?" — 3 steps (Meilleures offres, …) |
| 5 | Featured offers | `.container.home__section` | "ÉCONOMISER VOTRE ARGENT !" — featured tyre product cards (Kumho Ecowing…) |
| 6 | SEO text | `.bg-white` | "GRIP500: TOUS LES PNEUS À DES PRIX ULTRA-COMPÉTITIFS" paragraphs |
| 7 | Reviews slider | `.review-slider` | "Avis client — Note 4.93/5, 5531 avis" customer review cards |
| 8 | Brands grid | `.container.home__section.text-center` | "NOS MARQUES DE PNEUS" brand logos |
| 9 | Mounting service | `.bg-white` | "SERVICE DE MONTAGE — NOS PARTENAIRES MONTENT VOS PNEUS" |
| 10 | Long SEO / legal text | `.container.fs-large` | "Notre site GRIP500.FR est géré par…" long text block |
| 11 | Footer | `footer.main-footer` | Note 4.93 + GRIP500 + link columns + payment/trust |

## Mode: PARTIAL — Header / nav BUILT; sections 2–11 intentionally skipped (not selected)

Built: **Header / nav** → `src/components/Header.tsx` (utility strip + dark menu row), http://localhost:3300
- Fonts: **Saira Semi Condensed** (3 self-hosted weights) + **Roboto** (next/font). Saira metric parity 429px clone = 429px live.
- Icons: **fontello** icon font (aliased `.fa-*`) — self-hosted real `fontello.woff2`; glyphs user-o `\f2c0`, angle-down `\f107`, basket `\e801`. Sizes measured: user-o/caret 14px, basket 20px.
- Palette: orange #fe6215, dark #1e1e20, panier pill #2a2a2c (radius 20px), grey #a3a3a8 (nav), #727278 (utility).
- Logo: real `logo.png` (165×35).

Skipped (not selected): Hero+search, Reassurance row, How it works, Featured offers, SEO text, Reviews slider, Brands grid, Mounting service, Long SEO text, Footer.
