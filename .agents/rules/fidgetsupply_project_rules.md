# FidgetSupply.com Project Development & Design Invariants

## 0. Brand Identity & Positioning Invariants (FIRST IRON RULE)
- **Brand Name**: **FidgetSupply.com** — Integrated Sourcing & Supply Chain Platform for China's Metal EDC Fidget & Kinetic Desk Toy Industry.
- **Export & QC Hub**: Fuzhou Industrial Zone, Fujian, China.
- **Core Business Positioning**: **Integrated Metal EDC Supply Chain & Wholesale Platform**. We consolidate **140+ Ready-to-Produce Metal Molds (`FS-001` through `FS-150`)** across precision Zamak #3 Zinc Alloy die-casting, 6063-T6 Aluminum anodizing, and 5-axis CNC 304/316 Stainless Steel, Amber PEI (Ultem 1000), and Zr702 Zirconium machining workshops.
- **Core Value Propositions**:
  1. **$0.00 Ready-Mold Tooling Fee** across all 140 production models (saving buyers $3,000–$4,500 per SKU).
  2. **Low Wholesale MOQs**: **50 pcs/SKU** for Blank Unbranded Stock (3–7 days dispatch); **100 pcs/SKU** for Custom Logo Branding (10–15 days production).
  3. **2 Factory-Recommended Metal Branding Processes (No Surface Silk-Screen / UV Ink)**: Because smooth, chemically inert metal surfaces lack ink adhesion and cause silk-screen/UV ink to peel under thumb friction, our factory recommends:
     - **50W MOPA Fiber Laser Engraving**: `+$0.15–$0.30/pc`, `$0` setup fee, MOQ 100 pcs, paid sample fee **`$50 USD`** (10–15 days).
     - **Deep Laser Engraving + Color Fill**: `+$0.35–$0.60/pc` (0.15–0.25mm recessed laser cavity filled with Pantone enamel), MOQ 100–200 pcs, paid sample fee **`$80–$150 USD`** (10–15 days).
  4. **Verified International Compliance**: US CPSC 16 CFR Part 1262 Magnet Safety Standard (<50 kG²mm² flux index / 3-layer captive retention), EU RoHS 3 (2015/863), REACH SVHC, and 14+ Adult EDC Warning Labeling.
- **Prohibited Terms & Privacy Guardrails**:
  - Never expose raw supplier names, factory addresses, phone numbers, or internal spreadsheet codes on the front-end.
  - Never use prohibited terms (`B2B`, `AQL 2.5`, `$49 Sample`, `100% discount`) in customer-facing copy. Custom logo pre-production sampling is paid (**`$50 USD`** for standard fiber laser; **`$80–$150 USD`** for deep laser + color fill) with a **10–15 day** lead time.

## 1. Catalog & Bidirectional Semantic Mesh Architecture
- **140 Leaf Product SKUs (`/products/[slug]`)**: Organized across **6 Primary Structural Categories** and **3 Cross-Category Specialty Collections** (`/collections/[slug]`).
- **30 Authoritative Skyscraper Insights (`/insights/[slug]`)**: Every primary category, specialty collection, branding process, packaging tier, material comparison, and compliance standard is anchored by a dedicated Backlinko-grade Skyscraper Guide.
- **Bidirectional Semantic Mesh (网状相互引用嵌套)**:
  1. Every Insight links to 10–30 Product SKUs (`/products/...`), 2–4 Collection Hubs (`/collections/...`), and 2–3 sibling Insights (`/insights/...`).
  2. Every Product SKU page (`/products/[slug]`) links inline inside its technical specification / editorial deep-dive section to relevant `/insights/...` guides AND renders a dedicated **Related Engineering & Sourcing Insights** card grid.
  3. Every Collection Hub page (`/collections/[slug]`) renders a dedicated **Related Engineering & Sourcing Insights** card grid.

## 2. Accordion Event Delegation Architecture
- **Single Source of Truth**: All `.accordion-header` click events are handled globally via Event Delegation in `src/layouts/Layout.astro`.
- **Avoid Listener Duplication**: Do NOT add local accordion listeners in `[slug].astro` or inline `onclick` in markdown content files.

## 3. Dark Sourcing CTA Box Multi-Element Contrast Invariant
- For `.sourcing-cta-box` and `.article-inline-cta` (dark slate background `#0f172a` → `#1e293b`):
  - Headings (`h2`, `h3`): `color: #ffffff !important;`
  - Descriptions (`p`): `color: #cbd5e1 !important;`
  - Inline Text Links (`p a`): `color: #38bdf8 !important; text-decoration: underline;`
  - Conversion Button (`a.btn`, `.btn-primary`): `background-color: #0284c7 !important; color: #ffffff !important; font-weight: 700;`

## 4. Page Settings, Image Hygiene, FAQ, Backlinko & SEO/GEO Invariants
- **Featured Image Physical Existence & Uniqueness**: Every `featuredImage` and inline figure image path MUST physically exist on disk in `public/` and have a unique file path and unique MD5 hash across the entire repository.
- **Image Specifications**: `.webp` format only, file size strictly `< 150KB`, exact `800×600` (`4:3` aspect ratio) on all 140 product `featuredImage`, 59 extra `galleryImages`, and 30 insight `featuredImage` assets, plus uncropped `4:3` (`360×270`) product panels inside composite inline figures (`800×310` for 2-up, `1170×305` for 3-up), with non-empty descriptive `alt` text.
- **FAQ Invariants (9–12 FAQs per page)**: Every Product SKU page, Collection Hub, Static Service Page, and Insight Guide MUST feature **10 FAQs** (within the 9–12 FAQ invariant) backed by Schema.org `FAQPage` JSON-LD structured data and localized across all 18 languages. Product `bodyHtml` must have 0 embedded FAQ accordions.
- **Backlinko Standards**: Insights require word count `>= 1,200` words, reading time `>= 8` min, `>= 2` data comparison tables, `>= 2` unique WebP inline figures with `<figcaption>`, `>= 4` `<h2>` headings, `.sourcing-cta-box`, and 0 banned AI clichés (`seamlessly`, `delve`, `paramount`, `crucial`, `tapestry`, `beacon`, `cutting-edge`, `game-changer`, `unwavering`).
- **SEO & GEO Standards**: Decoded `<title>` strictly `<= 60` chars and `<meta name="description">` strictly `<= 160` chars across all 187 English routes (`< 155` chars in product/insight JSON/frontmatter), `GeoDirectAnswer` executive summary block present, Triple JSON-LD Schema (`Product`/`CollectionPage`/`TechArticle` + `FAQPage` + `BreadcrumbList`), 18-language parity (`3,367` built HTML pages), zero unlocalized fallback links, and **0 stray Chinese characters (`[\u4e00-\u9fff]`) across all 3,180 non-Japanese built HTML pages**.
