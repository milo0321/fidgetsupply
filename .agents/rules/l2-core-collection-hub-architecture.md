# L2 Core Collection Hub Architecture & Content Specification

> **Scope**: Applied to all top-level Core Category Hub pages (L2) such as `/custom-bags-wholesale/`, `/custom-drinkware-wholesale/`, `/custom-apparel-wearables-wholesale/`, `/custom-corporate-pins-wholesale/`, and `/custom-pet-products-wholesale/`.

---

## 1. Role & Strategic Positioning of L2 Pages
- **Target Audience**: Enterprise Procurement Directors, Global Sourcing Managers, and Brand Agency Merchandisers.
- **Core Mission**: Establish factory manufacturing legitimacy, showcase the macro category breadth, and rapidly channel buyers into specific L3 Sub-Collections or L4 Leaf SKUs via the **Orthogonal Dual-Dimension System**.
- **Page Persona**: High-authority B2B direct-factory catalog portal.

---

## 2. Strict Architectural Invariants & Prohibitions (Red Lines)
1. 🚫 **NO Single Product Spec Sheet**: NEVER render a rigid 2-column `Technical Specifications` table on L2 pages. Because L2 covers vastly different silhouettes (e.g. tote bags vs rucksacks), a single spec table creates data inaccuracies and cognitive noise.
2. 🚫 **NO Wholesale Pricing Tables**: NEVER render a `.procurement-table` on L2 pages. Pricing belongs exclusively to L4/L5 Leaf SKU pages where dimensions, materials, and tiers are fixed.
3. 🚫 **NO Placeholders or Aspect Distortion**: All collection card images must use exact `180px` fixed height with `object-fit: cover`.
4. 🚫 **NO Adjacent Section Color Collisions**: Always maintain strict zebra-striping between sections (e.g. white `#ffffff` vs light slate `#f8fafc`).

---

## 3. The 10-Stage Standard Visual & Content Funnel

```
Stage 1: Grand Category Hero (H1 + 3 Glass Metric Cards + CTA + Gallery)
   ↓
Stage 2: Fortune 500 Trust Logos (<TrustLogos />)
   ↓
Stage 3: Why Choose Ruixing [Category] (3-Card Advantage Grid)
   ↓
Stage 4: [Dimension 1] Sourcing Scenario Collections Grid (4-Column Cards)
   ↓
Stage 5: [Dimension 2] Technical Fabrication & Styles Portfolio (4 Z-Pattern Rows with .capability-btn)
   ↓
Stage 6: Ethical & Sustainable Supply Chain Certification Wall (.logo-wall)
   ↓
Stage 7: The Ruixing Partner Advantage (3 Capability Cards)
   ↓
Stage 8: Related Sourcing Guides & Industry Intelligence (<RelatedInsights />)
   ↓
Stage 9: 10-Item Sourcing FAQ Accordion
   ↓
Stage 10: Contained Floating Bottom Conversion CTA Card (<BottomCTA />)
```

---

## 4. Stage-by-Stage Content & UI Detailed Standards

### Stage 1: Grand Category Hero
- **Badge**: Factory direct certification tag (e.g. `FDA & LFGB Food-Grade Certified`, `OEM/ODM Direct Factory`, `BSCI & GRS Certified`).
- **H1 Headline**: `Wholesale Custom [Category] | Direct Factory`
- **Overview Paragraph**: 2-3 sentences covering factory production scope, certified raw materials, custom finishing options, and turnkey DDP shipping.
- **3 Glass Metric Cards**:
  - `Minimum Order`: e.g. `100 - 300 pcs`
  - `Production Time`: e.g. `15 - 25 days`
  - `Sample Time`: e.g. `3 - 5 days`
- **Hero CTA**: Primary button (`.btn-primary.btn-premium-hero`) linking to `/contact-us?product=...`
- **Featured Image**: Authentic wide-angle catalog showcase photography.

### Stage 2: Fortune 500 Trust Logos (`<TrustLogos />`)
- Prominently displays procurement partner logos: **Audi, BMW, Mercedes-Benz, O2, Continental, ADAC, PUEBLO**.

### Stage 3: Why Choose Ruixing [Category] (3-Card Grid)
- **Container**: `<section class="section section-light">`
- **Grid**: `.features-3col-grid` or `.advantage-grid` (3 equal-width cards with white card background, subtle border, and soft hover lift).
- **Standard Pillars**:
  1. *Certified Materials & Safety*: Highlighting BSCI, FDA/LFGB, GRS, Prop 65, and REACH compliance.
  2. *Precision Brand Customization*: Highlighting Pantone color matching, 360° laser engraving, full sublimation, or 3D molds.
  3. *Turnkey B2B Supply Chain*: Direct factory pricing, AQL 2.5 inspection, 3-5 day sample turnaround, and DDP door delivery.

### Stage 4: Dimension 1 — Scenario Collections Grid (4-Column Cards)
- **Container**: `<section class="section">` (White background)
- **Header**: `Explore Custom [Category] Lines / Categories`
- **Grid**: `.collections-grid.collections-grid-4` (CSS Grid `repeat(4, 1fr)` on desktop, responsive to 2 columns on tablet and 1 on mobile).
- **Card Elements**:
  - Image Wrapper: Exactly `180px` height with `overflow: hidden; border-radius: 8px 8px 0 0;`
  - Title `<h3>`: Specific sub-category or campaign application.
  - Description `<p>`: 2 lines explaining fabric/form factor.
  - Action Link (`.view-link`): `View [Category] →`

### Stage 5: Dimension 2 — Technical Fabrication & Styles Portfolio (4 Z-Pattern Rows)
- **Container**: `<section class="section section-light">`
- **Header**: `Our Complete [Category] Product Styles / Portfolio`
- **Structure**: 4 alternating rows using `.capability-row` with CSS flexbox.
  - **DOM Invariant**: Every row has `[Image, Text]` in the DOM. Even rows receive class `.row-reverse` in CSS to ensure accessible, clean layout flipping.
  - **Text Column**:
    - `.subtitle`: `STYLE 1 • [MATERIAL / CRAFT]`
    - `<h3>`: Title of the specific fabrication silhouette.
    - `<p>`: Engineering rationale (thermal insulation, denier density, yarn count, or enamel polishing).
    - `<ul class="capability-list">`: 3 bullet points with custom cyan/emerald SVG checkmark icons.
    - **Pill Button (`.capability-btn`)**: Dedicated high-contrast button linking directly to the L3 or L4 page: `Explore [Style] →`.

### Stage 6: Ethical & Sustainable Supply Chain (`.logo-wall`)
- **Container**: `<section class="section">`
- **Header**: `An Ethical & Sustainable Supply Chain`
- **Grid**: `.logo-wall` single-row flex containing official linked SVG/WebP badges for:
  - **amfori BSCI** (`https://www.amfori.org/content/amfori-bsci`)
  - **GOTS Organic** (`https://global-standard.org/`)
  - **OEKO-TEX Standard 100** (`https://www.oeko-tex.com/en/`)
  - **Global Recycled Standard GRS** (`https://textileexchange.org/global-recycled-standard/`)

### Stage 7: The Ruixing Partner Advantage
- **Container**: `<section class="section section-light">`
- **Cards (3)**:
  1. *Unbiased Material Engineering*: Lab stress-testing tensile strength, seam integrity, and colorfastness.
  2. *Specialized Mill Matching*: Matching large volume runs and low-MOQ corporate batches with dedicated audited lines.
  3. *On-Site Quality Assurance*: Rigorous AQL 2.5 defect inspections prior to packaging and customs release.

### Stage 8: Related Sourcing Guides & Intelligence (`<RelatedInsights />`)
- Dynamic 3-card intelligence grid linking to high-authority procurement guides from `src/content/insights/`.

### Stage 9: 10-Item Sourcing FAQ Accordion
- **Container**: `<section class="section section-light faq-section">`
- **Content**: 10 comprehensive Q&As covering MOQ tier splits, Pantone formulation, physical sampling credit policies (`Fee Refundable`), international compliance certifications, and payment terms.

### Stage 10: Contained Floating Bottom CTA Card (`<BottomCTA />`)
- **Component**: Contained card with rounded corners, subtle border, deep blue/emerald brand gradient, and high contrast against the dark global footer.

---

## 5. Technical Data Contract (JSON & Astro)

### JSON File Invariants (`src/content/products/[slug].json`)
```json
{
  "id": "custom-category-wholesale",
  "slug": "custom-category-wholesale",
  "title": "Wholesale Custom Category | Direct Factory",
  "category": "Custom Category Wholesale",
  "badge": "OEM/ODM Direct Factory",
  "moq": "200 pcs",
  "leadTime": "15 - 25 days",
  "sampleTime": "3 - 5 days",
  "material": "Certified Raw Material Breakdown",
  "featuredImage": "/wp-content/uploads/2025/09/category-hero.webp",
  "metaTitle": "Wholesale Custom Category | Ruixing Gifts China Factory",
  "metaDescription": "Direct factory custom category wholesale...",
  "overview": "Comprehensive 2-sentence macro category overview...",
  "bodyHtml": "<div class=\"page-container\">...10-stage HTML...</div>"
}
```
*Note: The `"specs"` property is strictly omitted or empty in L2/L3 JSON files.*

---

## 6. Mandatory Full-Site L2 Category Integration Checklist

Whenever a new L2 Core Category Hub (or L3 sub-hub) is created or renamed, you MUST update all 6 global touchpoints in the same changeset:

1. **Header Navigation & Search (`src/components/Header.astro`)**:
   - Add category link to Mega Menu columns.
   - Add new hub slug(s) to `hubSlugs` array for the Quick Search Modal routing.
2. **Footer Matrix (`src/components/Footer.astro`)**:
   - Add the hub link under the corresponding category column in the main footer.
3. **RFQ Sourcing Form (`src/components/ContactForm.astro`)**:
   - Add the product category option to the `#productCategory` `<select>` dropdown.
4. **Master Catalog Index (`src/pages/products/index.astro`)**:
   - Integrate L2 hub, L3 branches, and all L4 SKUs into `catalogTree`.
   - Add corresponding category filter tab button to `#quickFilterChips`.
5. **Industry Solutions (`src/pages/industry-solutions.astro`)**:
   - Link relevant products within vertical industry solution cards (e.g. Automotive, FMCG, Gaming/Entertainment).
6. **Technical Sourcing Guides (`src/content/insights/`)**:
   - Ensure related guides cross-link to the new L2 and L3 hubs.
