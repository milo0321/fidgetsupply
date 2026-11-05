# Catalog 4-Tier Hierarchy & Routing Invariants

All product and collection pages in the codebase MUST strictly follow the 4-tier catalog hierarchy and URL routing architecture:

## 1. Hierarchy & URL Structure
- **L1 (Catalog Root)**: Served at `/products/`
- **L2 / L3 / L4 (Collection Hubs)**: Served at root `/[slug]/` without `/products/` prefix (e.g. `/custom-bags-wholesale/`, `/custom-pouches-wholesale/`, `/custom-neck-gaiters-wholesale/`). Rendered via `src/pages/[slug].astro`.
- **Leaf Node SKUs (Product Pages)**: Served at `/products/[slug]/` (e.g. `/products/custom-canvas-tote-bags-wholesale/`). Rendered via `src/pages/products/[slug].astro`.

## 2. Link Navigation Rules
- Links pointing to Collection Hubs MUST use root `/[slug]/`.
- Links pointing to Leaf Node SKUs MUST use `/products/[slug]/`.

## 3. Hub Page Layout Boundaries
- Collection Hub pages (`src/pages/[slug].astro`) MUST end immediately after the 12-item FAQ section.
- DO NOT insert an extra `eb-bottom-cta-card` block between the FAQ section and the footer on Hub pages to prevent duplicate CTA stacking.

## 4. Image Invariants
- **Collection Card Images**: `.collection-img-wrap` and `.collection-img` MUST enforce `aspect-ratio: 4 / 3 !important; width: 100% !important; object-fit: cover !important;` to guarantee 100% uniform 4:3 card proportions across all grids. Never use fixed pixel heights (such as 180px).
- **Featured Images**: `featuredImage` MUST point to a high-resolution hero product photo, never to blog guide covers (`guide-*.webp`), fabric swatches, or spec diagrams.

## 5. Canonical Hero Assets & 1:1 Card Parity
- **No Detail / Closeup Featured Images**: `featuredImage` MUST point to a dedicated, high-resolution hero product photo. It MUST NEVER be set to a detail close-up (`*-detail.webp`, `*-strip.webp`, `*-closeup.webp`), fabric swatch diagram, or blog guide cover (`guide-*.webp`).
- **1:1 Card-to-Page Image Parity**: All collection grid cards (`.collection-card img`) rendered in JSON `bodyHtml` or `.astro` templates MUST use the exact same canonical hero image as the destination page's `featuredImage`. When updating a page's `featuredImage`, all parent Hub cards linking to that page MUST be synchronized simultaneously.

## 6. Standalone `.astro` Page Precedence
- Astro prioritizes explicit route files in `src/pages/[slug].astro` over dynamic `src/pages/[slug].astro`.
- When updating Hub page images, sections, or FAQs, ALWAYS verify whether a matching `.astro` file exists in `src/pages/` and apply fixes to BOTH `src/pages/[slug].astro` and `src/content/products/[slug].json`.

## 7. Canonical B2B Section Ordering & Logo Wall Placement
- All catalog pages MUST follow the canonical B2B section flow:
  Hero ➔ Trust Logos ➔ Advantage Grid ➔ Category Grid ➔ Z-Pattern Features ➔ Specifications Table ➔ Ethical Supply Chain Logo Wall ➔ Partner Advantage ➔ 10-Item FAQ.
- The **"An Ethical & Sustainable Supply Chain"** logo wall MUST be positioned immediately AFTER the Specifications Table and BEFORE The Ruixing Partner Advantage / FAQ section.

## 8. Category-Tailored Specifications Invariant
- "Specifications & Custom Options" tables MUST contain 100% domain-specific parameters.
- NEVER include tote bag materials (`Canvas`, `Jute`, `Gusset Widths`, `Piñatex®`) on non-bag pages (e.g. Drinkware, Pins, Keychains, Apparel, Pet Gear).

## 9. 10-Item FAQ Parity
- Standalone `.astro` hub pages MUST render the full 10-item B2B procurement FAQ accordion.

## 10. Strict Blog & Insight Link Domain Matching (MANDATORY)
- ALL internal blog / guide links (`<a href="/insights/guide-...">`) embedded in product HTML or `.astro` templates MUST strictly match the product's domain.
- NEVER point a Drinkware page to a Bag or Pet guide, or vice versa.
- ALWAYS verify that the target Markdown article exists in `src/content/insights/` before rendering the link.

## 11. Hub vs. Product SKU Routing Isolation & No Inverted Redirects (MANDATORY)
- **Root-Level Hub Placement**: All Category Collection Hub pages (L2/L3) MUST live strictly at the root path `/[slug]/` (e.g. `/custom-bags-wholesale/`, `/custom-cooler-bags-wholesale/`, `/custom-neoprene-products-wholesale/`).
- **Leaf-Level SKU Placement**: All individual product SKU pages (L3/L4) MUST live strictly under `/products/[slug]/` (e.g. `/products/custom-insulated-cooler-bags-wholesale/`).
- **No Inverted Redirects**: All legacy `/products/[hub]` paths MUST permanently 301 redirect to `/[hub]/`. NEVER configure inverted redirects from `/[hub]` to `/products/[hub]`.
- **Product Generator Isolation**: `src/pages/products/[slug].astro` MUST explicitly filter out all `hubSlugs` in `getStaticPaths` to prevent generating redundant single-product templates for Hub pages.
- **Master Catalog Tree (`products/index.astro`) Invariants**: L3 Hubs must strictly serve as branch headers (`l3Slug: '/[hub]/'`), and only genuine individual SKUs can be listed inside `skus: [...]`. Never list the Hub itself as an SKU.

## 12. Orthogonal Dual-Dimension Hub Architecture (双维度正交选型体系)
- **Eliminate Content Redundancy**: Category Hub pages MUST NOT repeat the same categorization axis across both the Collections Grid and the Z-Pattern Style rows.
- **Dimension 1 (4-Column Grid)**: Categorized strictly by **Procurement Application & Corporate Campaign Scenario** (e.g., Office & Commute, Events & Giveaways, Hospitality & Outdoor, Retail & Gifting) with 1-to-1 matching links to genuine single SKU pages.
- **Dimension 2 (4-Row Z-Pattern)**: Deep-dive categorized strictly by **Material Science & Structural Fabrication Tiers** (e.g., 600D Poly & rPET, 3mm SBR Neoprene, DuPont™ Tyvek®, Hands-Free Backpack).
- **High-Converting Style CTA Buttons**: Each Z-Pattern style row MUST conclude with a prominent `.capability-btn` pill button (`background: var(--color-primary)`, white text, `border-radius: 9999px`, `align-self: flex-start; width: fit-content;`, hover green elevation, and animated arrow `<span class="btn-arrow">&rarr;</span>`).
- **No Pricing Tables on Hubs**: Category Hub pages MUST NEVER contain a single pricing matrix table (`.procurement-table`). Pricing tables are exclusive to single SKU leaf pages.

## 13. Collection Hub vs. Leaf SKU Photography Standards
- **L3 / L4 Collection Hub Featured Images (`featuredImage`)**: MUST use Multi-Product Family Group Flat-Lays / Studio Showroom Displays (4:3 aspect ratio). NEVER use human model photos or single-item closeups.
- **Leaf SKU Product Pages (`/products/[slug]/`)**: MUST use Single-Product Hero Photography (4:3 aspect ratio) focusing strictly on that specific SKU's silhouette and craft details.
- **Visual Differentiation Across Sibling SKUs**: Sibling product lines within the same collection (e.g., Baseball Cap, Snapback, Trucker Hat, Beanie, Bucket Hat) MUST display visually distinct product photos highlighting differences in silhouette, fabric texture, crown structure, and hardware. Never repeat identical or near-identical mockups.

## 14. Leaf Page Content Depth & Z-Pattern Invariants
- All leaf SKU pages MUST feature at least 2 to 3 alternating Z-pattern feature rows (`.feature-row`, alternating `.row-reverse`).
- Single-feature row pages are strictly prohibited. Every product page must thoroughly explore fabric specs, craftsmanship/stitching, and retail/distributor packaging.

## 15. Mandatory Synchronous CatalogTree Update on New SKU Creation (新增 SKU 同步更新 catalogTree 铁律)
Whenever a new leaf product SKU (`src/content/products/<slug>.json`) is added to the repository:
1. **Sync to `src/pages/products/index.astro`**: Register in `catalogTree` under the matching L3 branch with `name`, `slug`, `moq`, `material`, and `tag`.
2. **Sync to `src/pages/[lang]/products/index.astro`**: Register in `catalogTree` using `getLocalizedPath('/products/<slug>', lang)`.
3. **Sync to `src/i18n/translations/catalogTree.ts`**: Register SKU translations in `catalogTreeSkus` across all 9 non-default languages.
4. **Sync to Category Hub**: Add product card to parent `src/pages/<hub-slug>.astro`.
5. **100% SKU Parity**: Total SKUs in `products/index.astro` MUST strictly match total non-hub leaf products in `src/content/products/`. Enforced deterministically by Rule 19 in `scripts/verify_all_rules.cjs`.

