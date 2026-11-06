---
name: Product SKU Page Tank Architecture
description: >-
  Standard operating procedure for creating, updating, or refactoring individual L3/L4 product SKU pages (under /products/[slug]/). 
  Use when building high-converting B2B leaf product pages with 10-stage golden flow, volume pricing tiers, and tailored spec sheets.
---

# Product SKU Page Tank Architecture (L3/L4 Leaf Pages)

When tasked with creating, updating, or refactoring an individual product landing page (L3/L4 Leaf SKU under `/products/[slug]/`), you MUST adhere to the high-converting **"Tank Page" Golden Procurement Flow**.

SKU pages are designed for **精准立项决策与询盘转化 (Procurement & Conversion)**. They serve overseas procurement officers, brand merchandisers, and sourcing agents who require exact technical specifications, tiered FOB pricing, compliance validation, and rapid sample turnaround.

---

## 1. The 12-Stage Golden Procurement Flow

```
Stage 1: Grand Hero Section (H1 + Overview + 3 Glass Metric Cards + CTA + Authentic Featured Photo)
   ↓
Stage 2: Fortune 500 Trust Logos (<TrustLogos />)
   ↓
Stage 3: Technical Spec Sheet (Single Authoritative Spec Table from top-level JSON "specs")
   ↓
Stage 4: Why Choose This Product (3-Card Advantage Grid .advantage-grid)
   ↓
Stage 5: Wholesale Volume Pricing & Production Tiers (Centered 960px .procurement-table with Refundable Samples)
   ↓
Stage 6: Detailed Craftsmanship & Fabrication Deep-Dive (Z-Pattern Feature Rows)
   ↓
Stage 7: Ethical & Sustainable Supply Chain (Certification Logo Wall .logo-wall)
   ↓
Stage 8: The FidgetSupply Supply Chain Advantage (3 Capability Cards: Engineering, Mill Matching, AQL 2.5)
   ↓
Stage 9: Explore Related Capabilities (Sister SKUs 3-Column Grid)
   ↓
Stage 10: Related Sourcing Guides & Industry Intelligence (<RelatedInsights />)
   ↓
Stage 11: 12-Item Sourcing FAQ Accordion
   ↓
Stage 12: Contained Floating Bottom Conversion CTA Card (<BottomCTA />)
```

---

## 2. Invariants & Detailed Stage Specifications

### Stage 1: Grand Hero Section
- **H1 Headline**: Product Title (e.g. `Custom Anti-Theft Laptop Backpacks Wholesale`).
- **Overview**: 2-3 sentences of B2B market positioning and technical material overview.
- **Glass Metric Cards (3)**:
  - `Minimum Order`: Factory realistic MOQ (e.g. `300 pcs`, `500 pcs`, `1,000 pcs`).
  - `Production Time`: Bulk turnaround (e.g. `18 - 25 days`).
  - `Sample Time`: Physical prototype turnaround (e.g. `5 - 7 days`).
- **Hero CTA**: Primary button (`.btn-hero`) linking to `/contact-us?product=...`.
- **Featured Image**: Authentic, photorealistic product photography representing the exact material and silhouette.

### Stage 2: Trust Logos (`<TrustLogos />`)
- Prominently displays procurement partner logos: **Audi, BMW, Mercedes-Benz, Continental, ADAC, Pueblo**.

### Stage 3: Technical Spec Sheet (Single Authoritative Spec Table)
- **Zero Redundancy Invariant**: Rendered directly from top-level JSON `"specs": { ... }` in the Astro template. NEVER duplicate a second static `Specifications & Custom Options` table inside `bodyHtml`.
- **Tailored Parameters**: 100% domain-specific parameters (e.g. Stainless Steel/Tritan for Drinkware; Cotton/rPET for Apparel; Enamel/Plating for Pins). Never copy generic bag parameters onto non-bag pages.

### Stage 4: Why Choose This Product
- 3-card advantage grid (`.advantage-grid`) highlighting material grade, structural reinforcement, and custom finishing capabilities.

### Stage 5: Wholesale Volume Pricing & Production Tiers
- **Centered Geometry**: Constrained to `max-width: 960px; width: 100%; margin: 1.5rem auto 2.5rem auto;`.
- **Table Title Invariant**: `Wholesale Volume Pricing & Production Tiers` (Never use robotic phrases like "B2B Data Matrix").
- **Subtitle Invariant**:
  `Tiered factory-direct volume pricing and production turnaround times. Sample development fees are 100% credited back against your final invoice upon bulk order confirmation.`
- **Price Figures**: Highlighted with `.tier-price` (`font-weight: 800; color: #059669; white-space: nowrap;`).
- **Sample Cell Markup (`.sample-cell`)**:
  ```html
  <td class="sample-cell">
    <span class="sample-time">5-7 Days</span>
    <span class="tier-badge">Fee Refundable</span>
  </td>
  ```
- **Differentiated Sample Refund Thresholds**:
  - *High-Tooling / High-Setup* (Pins, Smart Drinkware, Tech Backpacks, Softshell Jackets, Bio-Leathers): `Fee Refundable` on Tier 4 only ($\ge 3,000$ pcs).
  - *Mass Low-Value* (Lanyards, Wristbands, Gaiters, Basic Pouches, Dog Tags): `Fee Refundable` on Tier 4 only ($\ge 5,000$ pcs).
  - *Standard Bulk* (Canvas Totes, Stainless Tumblers, Standard Apparel, Pet Gear): `Fee Refundable` on Tier 3 & Tier 4 ($\ge 1,000$ pcs).

### Stage 6: Detailed Craftsmanship & Features (Z-Pattern)
- At least 2 to 3 rich Z-pattern feature rows (`.feature-row`, alternating `.row-reverse`) covering fabric specs, stitching standards, hardware/closures, and retail packaging. Single-feature row pages are strictly prohibited.
- DOM order MUST be `[Image, Text]`.

### Stage 7: Ethical & Sustainable Supply Chain (`.logo-wall`)
- Single-row logo wall with official links to BSCI, GOTS Organic, OEKO-TEX Standard 100, and GRS badges.

### Stage 8: The FidgetSupply Supply Chain Advantage
- 3 capability cards: Material Engineering, Specialized Mill Matching, AQL 2.5 Quality Assurance.

### Stage 9: Explore Related Capabilities (Sister SKUs)
- 3-column product cards recommending alternative materials, weights, or complementary sister SKUs.

### Stage 10: Related Sourcing Guides (`<RelatedInsights />`)
- Dynamic 3-card intelligence grid linking to scored insight articles.

### Stage 11: 12-Item Sourcing FAQ Accordion
- 12 comprehensive procurement Q&As covering MOQ, Pantone matching, AQL 2.5, DDP freight, and payment terms.

### Stage 12: Contained Floating Bottom CTA Card
- Floating card (`.eb-bottom-cta-card`) with generous outer padding, `border-radius`, and `box-shadow` over the dark footer.

---

## 3. Technical & Layout Guardrails

1. **HTML Structural Integrity**: Verify that the number of `<div ...>` tags exactly matches `</div>` in `bodyHtml`. Unclosed tags will cascade background colors and break page layout.
2. **No Inline Styles**: Never use inline `style="..."` in `bodyHtml`. Use standard CSS classes.
3. **GPU Hardware Acceleration**: Apply `transform: translateZ(0);` (or `will-change: transform;`) to elements combining `overflow: hidden`, `border-radius`, and `box-shadow` (or `backdrop-filter: blur()`).
4. **B2B Industrial MOQs**:
   - Custom Bags, Plant Leathers, Lanyards, Keychains, Pins, Pet Gear: Default MOQ $\ge 1,000$ pcs (or $300 - 500$ pcs for high-tier technical SKUs).
   - Apparel, Drinkware: Default MOQ $\ge 500$ pcs.
