# L3 Sub-Collection Hub Architecture & Content Specification

> **Scope**: Applied to all Sub-Category and Silhouette Hub pages (L3) such as `/custom-backpacks-wholesale/`, `/custom-tote-bags-wholesale/`, `/custom-cooler-bags-wholesale/`, `/custom-stainless-steel-bottles-wholesale/`, `/custom-coffee-mugs-wholesale/`, `/custom-performance-outerwear-wholesale/`, `/custom-headwear-neckwear-wholesale/`, etc.

---

## 1. Role & Strategic Mission of L3 Pages
- **Position in Hierarchy**: `L1 (Catalog)` $\rightarrow$ `L2 (Macro Core Collection)` $\rightarrow$ **`L3 (Sub-Collection / Silhouette Hub)`** $\rightarrow$ `L4/L5 (Leaf SKU)`.
- **Target Buyer**: Procurement Managers and Brand Merchandisers who have settled on a specific silhouette (e.g. "I want custom backpacks") and need to compare exact structural styles, materials, and price/volume trade-offs before locking in a single SKU.
- **Core Mission**:
  1. **Horizontal Style Comparison**: Provide an authoritative breakdown of the 4 major styles within that silhouette.
  2. **Option A Execution**: Strictly omit standalone mock spec tables and pricing tables. Embed technical parameters (denier, capacity, thermal ratings, closures) directly inside the 4 Z-Pattern style rows.
  3. **High-Converting Funnel Channeling**: Guide the buyer directly into the specific L4 Leaf SKU page via dedicated `.capability-btn` pill buttons.

---

## 2. Strict Architectural Invariants & Prohibitions (Red Lines)
1. 🚫 **NO Standalone Technical Spec Sheet Table**: L3 MUST NOT render a top-level 2-column spec table. Specifications must be organically embedded within the 4 Z-Pattern Style Rows.
2. 🚫 **NO Wholesale Pricing Matrix**: L3 MUST NOT render a `.procurement-table`. Pricing belongs exclusively on L4/L5 Leaf SKU pages where dimensions, materials, and volume tiers are concrete.
3. 🚫 **NO Placeholders or Aspect Distortion**: All collection card images must use exact `180px` fixed height with `object-fit: cover`.
4. 🚫 **All Style Rows MUST Have Pill CTA Buttons**: Every Z-Pattern row must end with a `.capability-btn` pill button (`Explore [Style] →` or `View Custom [Style] →`) linking directly to the corresponding `/products/[slug]/` page.

---

## 3. The 10-Stage Standard Visual & Content Funnel

```
Stage 1: Silhouette-Focused Grand Hero (H1 + 3 Glass Metric Cards + CTA + Gallery)
   ↓
Stage 2: Fortune 500 Trust Logos (<TrustLogos />)
   ↓
Stage 3: Why Choose Wholesale Custom [Silhouette] from Ruixing? (3-Card Advantage Grid)
   ↓
Stage 4: [Dimension 1] Silhouette Sub-Type & Application Cards (4-Column Grid)
   ↓
Stage 5: [Dimension 2] Technical Fabrication & 4 Styles Breakdown (Z-Pattern with .capability-btn)
   ↓
Stage 6: Ethical & Sustainable Supply Chain Certification Wall (.logo-wall)
   ↓
Stage 7: The Ruixing Partner Advantage (3 Capability Cards)
   ↓
Stage 8: Related Sourcing Guides & Industry Intelligence (<RelatedInsights />)
   ↓
Stage 9: 10-Item Silhouette Procurement FAQ Accordion
   ↓
Stage 10: Contained Floating Bottom Conversion CTA Card (<BottomCTA />)
```

---

## 4. Stage-by-Stage Content & UI Detailed Standards

### Stage 1: Silhouette-Focused Hero
- **Badge**: Silhouette-specific factory qualification (e.g. `100% Water-Resistant & Ergonomic`, `Double-Wall Vacuum 24h Cold`, `OEM/ODM Direct Factory`).
- **H1 Headline**: `Wholesale Custom [Silhouette Name] & [Variants] | Direct Factory`
- **Overview Paragraph**: 2-3 sentences covering factory production tolerances, raw material sourcing, structural reinforcement, and global DDP delivery.
- **3 Glass Metric Cards**:
  - `Minimum Order`: e.g. `200 - 300 pcs`
  - `Production Time`: e.g. `15 - 22 days`
  - `Sample Time`: e.g. `5 - 7 days`
- **Hero CTA**: Primary button (`.btn-primary.btn-premium-hero`) linking to `/contact-us?product=...`
- **Featured Image**: Wide-angle product photo showing the silhouette range.

### Stage 2: Fortune 500 Trust Logos (`<TrustLogos />`)
- Prominently displays procurement partner logos: **Audi, BMW, Mercedes-Benz, O2, Continental, ADAC, PUEBLO**.

### Stage 3: Why Choose Wholesale Custom [Silhouette] (3-Card Grid)
- **Container**: `<section class="section section-light">`
- **Grid**: `.features-3col-grid` or `.advantage-grid` (3 equal-width cards with white card background, subtle border, and soft hover lift).
- **Pillars**:
  1. *Certified Materials & Safety*: Highlighting BSCI, FDA/LFGB, GRS, Prop 65, and REACH compliance.
  2. *Precision Brand Customization*: Highlighting Pantone color matching, 360° laser engraving, full sublimation, or 3D molds.
  3. *Turnkey B2B Supply Chain*: Direct factory pricing, AQL 2.5 inspection, 3-5 day sample turnaround, and DDP door delivery.

### Stage 4: Dimension 1 — Silhouette Sub-Type Cards (4-Column Cards)
- **Container**: `<section class="section">` (White background)
- **Header**: `Explore Custom [Silhouette] Lines / Categories`
- **Grid**: `.collections-grid.collections-grid-4` (CSS Grid `repeat(4, 1fr)` on desktop, responsive to 2 columns on tablet and 1 on mobile).
- **Card Elements**:
  - Image Wrapper: Exactly `180px` height with `overflow: hidden; border-radius: 8px 8px 0 0;`
  - Title `<h3>`: Specific sub-type or application name.
  - Description `<p>`: 2 lines explaining fabric/form factor.
  - Action Link (`.view-link`): `View [Style] →` (linking to L4 Leaf SKU).

### Stage 5: Dimension 2 — The 4 Z-Pattern Style Rows (Complete Technical Fabrication Breakdown)
- **Container**: `<section class="section section-light">`
- **Header**: `Our Complete [Silhouette] Product Styles / Portfolio`
- **Structure**: 4 alternating rows using `.capability-row` with CSS flexbox.
  - **DOM Invariant**: Every row has `[Image, Text]` in the DOM. Even rows receive class `.row-reverse` in CSS to ensure accessible, clean layout flipping.
  - **Text Column**:
    - `.subtitle`: `STYLE 1 • [MATERIAL / CRAFT]`
    - `<h3>`: Title of the specific style silhouette.
    - `<p>`: Engineering rationale (thermal insulation, denier density, yarn count, or enamel polishing).
    - `<ul class="capability-list">`: 3 bullet points with custom cyan/emerald SVG checkmark icons containing exact parameters (capacity, fabric GSM/Denier, hardware, closures).
    - **Pill Button (`.capability-btn`)**: Dedicated high-contrast button linking directly to the L4 Leaf SKU page: `Explore [Style] →`.

### Stage 6: Ethical & Sustainable Supply Chain (`.logo-wall`)
- Single-row logo wall with official linked SVG/WebP badges for:
  - **amfori BSCI** (`https://www.amfori.org/content/amfori-bsci`)
  - **GOTS Organic** (`https://global-standard.org/`)
  - **OEKO-TEX Standard 100** (`https://www.oeko-tex.com/en/`)
  - **Global Recycled Standard GRS** (`https://textileexchange.org/global-recycled-standard/`)

### Stage 7: The Ruixing Partner Advantage
- 3 service capability cards: Unbiased Material Engineering, Specialized Mill Matching, On-Site Quality Assurance (AQL 2.5).

### Stage 8: Related Sourcing Guides & Intelligence (`<RelatedInsights />`)
- Dynamic 3-card intelligence grid linking to high-authority procurement guides from `src/content/insights/`.

### Stage 9: 10-Item Sourcing FAQ Accordion
- Answers to high-frequency B2B procurement questions (MOQ splits, Pantone matching, sample fee credit policy `Fee Refundable`, DDP customs tariffs, vector file formats).

### Stage 10: Contained Floating Bottom Conversion CTA Card (`<BottomCTA />`)
- Card-contained conversion box with high contrast against the dark global footer.

---

## 5. Summary Comparison Matrix: L2 vs L3 vs L4

| Feature | L2 Core Collection | L3 Sub-Collection | L4/L5 Leaf SKU |
| :--- | :--- | :--- | :--- |
| **URL Structure** | `/[category]-wholesale/` | `/[sub-category]-wholesale/` | `/products/[product-slug]/` |
| **Scope** | Macro Category (e.g. All Bags) | Silhouette (e.g. Backpacks) | Single Concrete SKU (e.g. Anti-Theft Backpack) |
| **Technical Spec Sheet** | ❌ None (Option A) | ❌ None; **Embedded in 4 Z-Pattern Rows** (Option A) | ✅ **100% Mandatory Sticky Spec Table** |
| **Volume Pricing Table** | ❌ None | ❌ None | ✅ **Centered 960px 4-Tier Pricing Table** |
| **Z-Pattern Action** | `.capability-btn` $\rightarrow$ L3 / L4 | `.capability-btn` $\rightarrow$ L4 Leaf SKU | 3-Card Detailed Craftsmanship Breakdown |

---

## 6. Balanced Category Hub Screen Hierarchy & Google SERP Multi-Image Optimization

To balance instant buyer conversion (clean visual UI) and comprehensive search authority (deep technical SEO):

### Screen 1 (Hero Viewport)
- Primary high-resolution collection hero image, key MOQ/lead-time metrics, and direct quotation CTA.

### Screen 2 (Immediate Below Hero / TrustLogos)
- **4-Column Visual Product Card Grid (`.collections-grid-4`)**:
  - Displays all core product silhouettes side-by-side in a single horizontal viewport row.
  - Every card features a pure white-background/clean studio cutout image (`aspect-ratio: 4 / 3`), category badge, key parameters (`MOQ 300 · From $0.95`), and direct subpage link (`Explore →`).
  - Guarantees top-2-viewport image proximity to trigger Google SERP 3-image carousel rich snippets.

### Screen 3 (Commercial Decision Funnel)
- Consolidated Wholesale Volume Pricing Table (`.procurement-table`) with authentic unit economics.

### Screen 4 (Technical SEO & Material Deep-Dive)
- Structured 3-column engineering cards detailing fabric GSM, weave density, lamination, tensile pull tests, and Pantone matching to maintain 1,500+ words of rich EEAT text.

### Screen 5 (Audited Supplier Network)
- 4-Column Factory Workshop & AQL 2.5 QC Grid (`.factory-grid`).

### Screen 6 (Long-Tail FAQ Library)
- 12 Comprehensive B2B Sourcing FAQ Accordions.

