---
name: Category Hub Page Architecture
description: >-
  Standard operating procedure for creating, updating, or auditing L2/L3 category collection hub pages (e.g. /[slug]/ like /custom-bags-wholesale/ or /custom-backpacks-wholesale/). 
  Use when designing category discovery hubs, dual-dimension navigation grids (applications & engineering styles), and compliance walls.
---

# L2/L3 Category Hub Page Architecture

When tasked with creating, updating, or auditing an L2 Core Category Hub or L3 Sub-Collection Hub page, you MUST adhere to the bespoke **Category Hub Architecture**. 

Hub pages are designed for **品类发现与选型分流 (Discovery & Navigation)**. They establish direct factory manufacturing legitimacy, showcase macro category breadth, and rapidly channel overseas enterprise buyers into specific L3 Sub-Collections or L4 Leaf SKUs.

---

## 1. Strict Architectural Invariants & Prohibitions (Red Lines)

1. 🚫 **NO Single Product Spec Sheet**: NEVER render a rigid 2-column `Technical Specifications` table on L2/L3 hub pages. Because a hub covers vastly different silhouettes (e.g. tote bags vs rucksacks vs duffels), a single spec sheet creates data inaccuracies and cognitive noise.
2. 🚫 **NO Wholesale Pricing Tables**: NEVER render a single pricing matrix (`.procurement-table`) on hub pages. Merging distinct silhouettes into one price table creates data confusion. Pricing belongs exclusively on L4/L5 Leaf SKU pages.
3. 🚫 **NO Duplicate Categorization Axes**: The 4-column Collection Cards and the 4 Z-Pattern rows MUST NOT use the same categorization axis. Use **Dimension 1 (Application/Scenario)** for Cards and **Dimension 2 (Material/Engineering)** for Z-Pattern rows.
4. 🚫 **Pill Button Invariant**: Each Z-Pattern style row MUST conclude with a prominent pill button (`<a href="..." class="capability-btn">Explore [Style] <span class="btn-arrow">&rarr;</span></a>`) rather than a plain text link.
5. 🚫 **Collection Card Aspect Ratio**: Collection card images MUST use `aspect-ratio: 4 / 3 !important; width: 100% !important; object-fit: cover !important;`. Never use human model photos or single-item closeups on hubs; use 4:3 multi-product family group flat-lays or showroom displays.
6. 🚫 **No Adjacent Dark Collision**: Adjacent sections MUST alternate background colors (Zebra-Striping: `#ffffff` vs `#f8fafc`). The bottom CTA must be a floating contained card (`.eb-bottom-cta-card`).

---

## 2. The 10-Stage Standard Visual & Content Funnel

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

## 3. Stage-by-Stage Implementation Guide

### Stage 1: Grand Category Hero
- **Badge**: Factory direct certification tag (e.g. `OEM/ODM Direct Factory`, `FDA & LFGB Food-Grade Certified`, `BSCI & GRS Certified`).
- **H1 Headline**: `Wholesale Custom [Category] | Direct Factory`
- **Overview Paragraph**: 2-3 sentences covering factory production scope, certified raw materials, custom finishing options, and turnkey DDP shipping.
- **3 Glass Metric Cards**:
  - `Minimum Order`: e.g. `100 - 300 pcs`
  - `Production Time`: e.g. `15 - 25 days`
  - `Sample Time`: e.g. `3 - 5 days`
- **Hero CTA**: Primary button (`.btn-primary.btn-hero`) linking to `/contact-us?product=...`

### Stage 2: Fortune 500 Trust Logos (`<TrustLogos />`)
- Prominently displays procurement partner logos: **Audi, BMW, Mercedes-Benz, O2, Continental, ADAC, PUEBLO**.

### Stage 3: Why Choose Ruixing [Category] (3-Card Grid)
- **Container**: `<section class="section section-light">`
- **Grid**: `.features-3col-grid` or `.advantage-grid` (3 equal-width cards with white background, subtle border, and soft hover lift).
  1. *Certified Materials & Safety*: Highlighting BSCI, FDA/LFGB, GRS, Prop 65, and REACH compliance.
  2. *Precision Brand Customization*: Highlighting Pantone color matching, 360° laser engraving, full sublimation, or 3D molds.
  3. *Turnkey B2B Supply Chain*: Direct factory pricing, AQL 2.5 inspection, 3-5 day sample turnaround, and DDP door delivery.

### Stage 4: Dimension 1 — Scenario Collections Grid (4-Column Cards)
- **Container**: `<section class="section">` (White background)
- **Header**: `Explore Custom [Category] Lines / Categories`
- **Grid**: `.collections-grid.collections-grid-4` (4 columns on desktop, 2 on tablet, 1 on mobile).
- **Card Content**: Uniform 4:3 image, Title `<h3>` (Scenario/Application), Description `<p>`, and `.view-link` (`View [Category] →`).

### Stage 5: Dimension 2 — Technical Fabrication & Styles Portfolio (4 Z-Pattern Rows)
- **Container**: `<section class="section section-light">`
- **Header**: `Our Complete [Category] Product Styles / Portfolio`
- **Structure**: 4 alternating rows using `.capability-row` with CSS flexbox.
  - **DOM Invariant**: Every row has `[Image, Text]` in the DOM. Even rows receive class `.row-reverse` in CSS.
  - **Text Column**:
    - `.subtitle`: `STYLE 1 • [MATERIAL / CRAFT]`
    - `<h3>`: Title of specific fabrication silhouette.
    - `<p>`: Engineering rationale (thermal insulation, denier density, yarn count, or enamel polishing).
    - `<ul class="capability-list">`: 3 bullet points with custom SVG checkmark icons.
    - **Pill Button (`.capability-btn`)**: Dedicated high-contrast button linking directly to the L3 sub-hub or L4 leaf SKU page.

### Stage 6: Ethical & Sustainable Supply Chain (`.logo-wall`)
- Single-row flex containing official linked badges for: **amfori BSCI**, **GOTS Organic**, **OEKO-TEX Standard 100**, **Global Recycled Standard GRS**.

### Stage 7: The Ruixing Partner Advantage (3 Capability Cards)
- 3 service cards: *Unbiased Material Engineering*, *Specialized Mill Matching*, *On-Site Quality Assurance (AQL 2.5)*.

### Stage 8: Related Sourcing Guides & Intelligence (`<RelatedInsights />`)
- Dynamic 3-card intelligence grid linking to high-authority procurement guides from `src/content/insights/`.

### Stage 9: 10-Item Sourcing FAQ Accordion
- 10 comprehensive Q&As covering MOQ tier splits, Pantone formulation, physical sampling credit policies (`Fee Refundable`), compliance certifications, and freight terms.

### Stage 10: Contained Floating Bottom CTA Card
- Contained card with rounded corners, subtle border, deep brand gradient, floating with high contrast above the dark global footer.

---

## 4. Mandatory Full-Site L2/L3 Integration Checklist

Whenever a new Category Hub is created or renamed, you MUST update all 6 global touchpoints:
1. **Header Navigation & Search (`src/components/Header.astro`)**: Add category link to Mega Menu columns and add slug to `hubSlugs` array.
2. **Footer Matrix (`src/components/Footer.astro`)**: Add hub link under corresponding category column.
3. **RFQ Sourcing Form (`src/components/ContactForm.astro`)**: Add category option to `#productCategory` `<select>`.
4. **Master Catalog Index (`src/pages/products/index.astro`)**: Integrate hub and branches into `catalogTree` and `#quickFilterChips`.
5. **Industry Solutions (`src/pages/industry-solutions.astro`)**: Link relevant hub inside vertical industry solution cards.
6. **Technical Sourcing Guides (`src/content/insights/`)**: Ensure related guides cross-link to the new hub.
