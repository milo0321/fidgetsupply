# Ruixing Gifts Project Development & Design Invariants

## 0. Brand Identity & Positioning Invariants (FIRST IRON RULE)
- **English Brand Name**: Ruixing Gifts / Ruixing Global Sourcing Partner
- **Chinese Brand Name**: **瑞兴** (Ruixing, NEVER 瑞星).
- **Core Business Positioning**: **Global Sourcing Partner / B2B Supply Chain Partner**. We are an expert supply chain partner backed by a 50+ audited mill network, independent on-site AQL 2.5 QA inspection, cross-category consolidation, and turnkey DDP logistics.
- **Strictly Prohibited Self-Identity**: NEVER describe Ruixing Gifts as a standalone "Direct Factory", "Direct Manufacturer", or use "Direct Factory Manufacturing" as our primary identity/hero headline. Our authentic strength is our **Supply Chain Network, Quality Control Ecosystem, and Cross-Category Consolidation**.
- **Core Value Proposition**: 50+ Audited Partner Mills, Independent AQL 2.5 Quality Assurance, Turnkey DDP Logistics, and Verified Eco-Certifications (BSCI, GOTS, OEKO-TEX, GRS).

## 1. FAQ Answer Highlight Design Rule
- **No Background Boxes**: `strong`, `b`, and `.faq-highlight` inside `.accordion-content` must NOT have background color badges or borders (`background: transparent !important; border: none !important;`).
- **Text Color & Weight**: Must be vibrant bold emerald text (`color: var(--color-brand, #047857) !important; font-weight: 700;`).
- **Hyperlinks**: Links inside FAQ answers inherit `#047857` with underlines (`text-decoration: underline !important;`).

## 2. Accordion Event Delegation Architecture
- **Single Source of Truth**: All `.accordion-header` click events are handled globally via Event Delegation in `src/layouts/Layout.astro`.
- **Avoid Listener Duplication**: Do NOT add local accordion listeners in `[slug].astro` or inline `onclick` in markdown content files, as dual listeners cause double-toggling state cancellation.
- **CSS Overrides**: Do not add scoped `background-color` or `color: #fff` on `.accordion-content strong` inside Astro `<style>` blocks in page templates.

## 3. Vite Dev Cache Recovery
- When Vite dependency cache mismatches occur after static builds (`npx astro build`), execute:
  1. `lsof -ti:4323 | xargs kill -9 2>/dev/null || true`
  2. `rm -rf node_modules/.vite`
  3. `ASTRO_TELEMETRY_DISABLED=1 npx astro dev --port 4323 --host 0.0.0.0 --force`

## 4. B2B & Developer Jargon Elimination Invariant
- **No Developer/Inventory Codes on UI**: Never use "SKU", "Leaf Product", "Tank Page", or "L3/L4" on any customer-facing button, heading, badge, or link.
- **Buyer-Centric Action Copy**: Always use natural, action-oriented English verbs: `Explore [Product Name] →`, `Explore Specific Product Collections`, `View Specifications →`.

## 5. Dark Sourcing CTA Box Multi-Element Contrast Invariant
- For `.sourcing-cta-box` and `.article-inline-cta` (dark slate background `#0f172a` → `#1e293b`):
  - Headings (`h2`, `h3`): `color: #ffffff !important;`
  - Descriptions (`p`): `color: #cbd5e1 !important;`
  - Inline Text Links (`p a`): `color: #38bdf8 !important; text-decoration: underline;`
  - Conversion Button (`a.btn`, `.btn-primary`): `background-color: #0284c7 !important; color: #ffffff !important; font-weight: 700;`

## 6. Page Settings, Image Hygiene, FAQ, Backlinko & SEO/GEO Invariants
- **Featured Image Physical Existence & Uniqueness**: Every `featuredImage` path MUST physically exist on disk in `public/` and be unique to its product or article.
- **Image Specifications**: WebP format only, file size strictly < 150KB, 4:3 aspect ratio where required, non-empty descriptive alt text.
- **FAQ Invariants**: Insights must feature exactly 7-item FAQ schema; product `bodyHtml` must have 0 embedded FAQ accordions.
- **Backlinko Standards**: Insights require reading time ≥ 8m, ≥ 2 data comparison tables, ≥ 2 WebP images, zero AI clichés.
- **SEO & GEO Standards**: Meta title < 60 chars, meta description < 155 chars, `.geo-direct-answer` block present, 100% English content, zero duplicate/trailing-slash redirects.


