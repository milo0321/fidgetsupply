# Catalog Hierarchy & Page Architecture Standards

## 0. 4-Tier Catalog Taxonomy & Page Roles
1. **L1: Homepage & Root Catalog** (`/`, `/products/`): Global brand positioning, featured collections, cross-category discovery.
2. **L2: Core Collection (Macro Category Hub, e.g. `/custom-bags-wholesale/`)**:
   - **Role**: High-level category discovery and factory qualification.
   - **Spec Policy (Option A)**: Strictly NO single Technical Spec Sheet and NO pricing table.
   - **Information Flow**: Hero → TrustLogos → Why Choose Us (3 cards) → Dimension 1 (4-column collection cards) → Dimension 2 (4 Z-pattern style rows with `.capability-btn`) → Logo Wall → Related Insights → FAQ → CTA.
3. **L3: Sub-Collection (Sub-Category / Silhouette Hub, e.g. `/custom-backpacks-wholesale/`)**:
   - **Role**: Mid-level horizontal comparison across silhouette styles and materials.
   - **Spec Policy (Option A)**: Strictly NO single Technical Spec Sheet and NO pricing table. Specs and parameters are organically embedded inside the 4 Z-Pattern style rows, guiding the buyer directly into specific L4 Leaf SKUs via `.capability-btn`.
4. **L4/L5: Leaf Product SKU (Single Product Landing Page, e.g. `/products/[slug]/`)**:
   - **Role**: Final procurement decision, compliance audit, RFQ, physical sample request, and bulk purchase.
   - **Spec Policy**: Strictly REQUIRES the single authoritative 2-column Technical Spec Sheet and the centered 960px 4-Tier Wholesale Volume Pricing table (`.procurement-table`) with `.sample-cell` (`Fee Refundable`).

## 1. The 12-Stage Golden Procurement Flow (L4/L5 Leaf SKUs)
1. **Grand Hero Section**:
   - `H1`: Product title (e.g., `Custom Anti-Theft Laptop Backpacks Wholesale`).
   - `Overview`: Clear high-level positioning and applications.
   - `Glass Cards (3)`: Realistic Factory MOQ (e.g., `300 pcs`), Bulk Lead Time (`18-22 days`), Sample Time (`5-7 days`).
   - `CTA Button`: Primary button linking to `/contact-us?product=...`.
   - `Featured Gallery Image`: Authentic, photorealistic product photography of the exact material and silhouette.
2. **Trust Logos (`<TrustLogos />`)**:
   - Fortune 500 procurement client logo wall (Audi, BMW, Mercedes-Benz, Continental, ADAC, Pueblo).
3. **Technical Spec Sheet (Single Authoritative Spec Table)**:
   - Left Sticky Column: Category Overview, Title, Description, and "Request Spec Sheet →" CTA.
   - Right Card Column: 2-column key-value parameters rendered directly from top-level JSON `"specs": { ... }`.
   - **Zero Redundancy Rule**: NEVER duplicate a second static `Specifications & Custom Options` table in `bodyHtml`.
4. **Why Choose This Product (Core Value Proposition)**:
   - 3-card advantage grid with `.advantage-grid` highlighting material grade, structural reinforcement, and custom branding options.
5. **Wholesale Volume Pricing & Production Tiers**:
   - Centered 960px card table (`<table class="procurement-table">`) inside `bodyHtml`.
   - Table Title: `Wholesale Volume Pricing & Production Tiers`
   - Subtitle: `Tiered factory-direct volume pricing and production turnaround times. Sample development fees are 100% credited back against your final invoice upon bulk order confirmation.`
   - 4 quantity tiers with realistic FOB prices highlighted with `.tier-price` (`font-weight: 800; color: #059669; white-space: nowrap;`).
   - Sample Lead Time cell (`.sample-cell`):
     - Top: `.sample-time` (e.g. `5-7 Days` in `font-weight: 600; color: #334155;`).
     - Bottom: `.tier-badge` (`Fee Refundable` in compact emerald badge, `white-space: nowrap;`).
   - **Differentiated Refund Thresholds**:
     - *High-Tooling / High-Setup* (Pins, Smart Drinkware, Tech Backpacks, Softshell Jackets, Bio-Leathers): Tier 4 only ($\ge 3,000$ pcs).
     - *Mass Low-Value* (Lanyards, Wristbands, Gaiters, Basic Pouches, Dog Tags): Tier 4 only ($\ge 5,000$ pcs).
     - *Standard Bulk* (Canvas Totes, Stainless Tumblers, Standard Apparel, Pet Gear): Tier 3 & Tier 4 ($\ge 1,000$ pcs).
6. **Detailed Craftsmanship & Fabrication Deep-Dive**:
   - 3-card feature grid or Z-Pattern detailing stitching, lining, zippers, hardware, and Pantone color matching.
7. **Ethical & Sustainable Supply Chain (Certification Logo Wall)**:
   - Single-row logo wall (`.logo-wall`) with official links (BSCI, GOTS, OEKO-TEX, GRS).
8. **The Ruixing Partner Advantage**:
   - 3 service capability cards: Unbiased Material Engineering, Specialized Mill Matching, On-Site Quality Assurance (AQL 2.5).
9. **Explore Related Capabilities (Sister SKUs)**:
   - 3-column product cards (`.grid-3`) recommending alternative materials, weights, or complementary sister SKUs.
10. **Related Sourcing Guides & Industry Intelligence (`<RelatedInsights />`)**:
    - 3-column article cards dynamically scored and matched by tags/keywords from the 87 insights in `src/content/insights/`.
11. **12-Item Sourcing FAQ Accordion**:
    - Global procurement logic resolving MOQ, Pantone matching, AQL 2.5 QA, DDP freight, and payment terms.
12. **Bottom Conversion CTA**:
    - Contained floating card with high contrast over the dark footer.

## 2. Typography & Table Sizing Standards
- Table Headers (`th`): `font-size: 0.85rem; font-weight: 700; text-transform: uppercase; padding: 1.15rem 1.25rem;`
- Table Body Cells (`td`): `font-size: 0.92rem; line-height: 1.4; color: #334155; padding: 1.1rem 1.25rem; vertical-align: middle;`
- Price Figures (`.tier-price`): `font-size: 1.12rem; font-weight: 800; color: #059669; white-space: nowrap;`
- Sample Cell (`.sample-cell`): `display: inline-flex; flex-direction: column; align-items: flex-start; gap: 0.35rem;`
- Tier Badge (`.tier-badge`): `padding: 0.15rem 0.55rem; font-size: 0.7rem; font-weight: 700; border-radius: 4px; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; white-space: nowrap;`
- Spec Sheet Keys (`.spec-row-key`): `font-size: 0.95rem; font-weight: 700;`
- Spec Sheet Values (`.spec-row-val`): `font-size: 0.95rem; color: #475569;`

## 3. Brand Name Invariant
- Chinese brand name is **瑞兴** (Ruixing Gifts), never 瑞星.

## 4. Mandatory Synchronous CatalogTree Registration Invariant
- Every newly created or modified leaf product SKU (`src/content/products/<slug>.json`) MUST be synchronously registered in:
  1. `src/pages/products/index.astro` under its corresponding `catalogTree` L3 branch.
  2. `src/pages/[lang]/products/index.astro` under its corresponding `catalogTree` L3 branch.
  3. `src/i18n/translations/catalogTree.ts` in `catalogTreeSkus` for all 9 non-default languages.
  4. Parent category collection hub page (`src/pages/<hub-slug>.astro`).
- Total SKU count in `catalogTree` MUST equal total non-hub leaf JSON files in `src/content/products/` (100% parity). Enforced by Rule 19 in `scripts/verify_all_rules.cjs`.

