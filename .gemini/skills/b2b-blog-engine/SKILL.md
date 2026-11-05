---
name: b2b-blog-engine
description: Dedicated B2B technical blog authoring Skill for Cafe Supply Chain — integrating Backlinko's content engineering methodology, 50-60 char Meta Title standard, controlled 1.0%-2.5% keyword density, PPP intro formula, 12-25 min reading time normal distribution (peaking at 15-18 min), 3-column responsive layout, external/internal link ratios, AI image prompt diversity, and grounded copywriting for coffee sourcing, paper cups, PET ice cups, and cafe packaging topics.
---

# B2B Technical Blog Authoring Skill (/b2b-blog-engine)
*Powered by Cafe Supply Chain — China Coffee Industry Integrated Supply Chain Platform*

This Skill governs the creation, writing, optimization, and auditing of technical B2B insight guides on Cafe Supply Chain (`cafesupplychain.com`). It focuses on content authoring, authority building, SEO/GEO optimization, dynamic TOC generation, and visual design for coffee bean sourcing, paper cup coatings (aqueous vs PLA vs PE), PET ice cups, and takeaway kraft packaging domains.

---

## 🎯 1. Core Backlinko Content Engineering Methodology

### 1.1 The PPP Intro Formula (Preview, Proof, Push)
- **Preview**: Open immediately with the exact problem/mandate (e.g. EU SUPD turtle logo compliance deadline, Yunnan Arabica roasting batch consistency requirements, paper cup repulpability standards).
- **Proof**: Provide instant technical proof (EN 13430 repulpability test results, Agtron ±1 roast color consistency, ISO 22000 food safety certification, TOF <10 PPM PFAS screening for paper coatings).
- **Push**: Push the reader directly into the actionable SOP.

### 1.2 High Readability & Bucket Brigades
- **Short Paragraphs**: 2 to 3 sentences max per paragraph.
- **Scannable Subsections**: H2 or H3 heading every 200–300 words.
- **Visual Bucket Brigades**: Use callout boxes (`<div class="art-takeaways">`), styled checklists, and comparison tables to keep readers engaged.

### 1.3 Reading Time Normal Distribution Rule (12–25 Minutes)
- Calculated reading time MUST fall between **12 and 25 minutes**.
- Distribution follows a **normal curve peaking at 15–18 minutes**:
  - **~15% Short Technical SOPs**: 12–14 min read (~2,400–3,000 words)
  - **~70% Core Sourcing & Compliance Guides**: 15–18 min read (~3,200–4,200 words) ← MAJORITY
  - **~15% Deep Procurement Playbooks**: 19–25 min read (~4,400–5,500 words)
- `readTime` frontmatter field MUST be set accurately (e.g. `"16 min read"`, `"18 min read"`, `"22 min read"`).

---

## 🔍 2. SEO & GEO Dual Engine Technical Specifications

### 2.1 Backlinko On-Page SEO Layer
- **Meta Title (STRICT 50–60 Characters)**:
  - Must be strictly **50 to 60 characters** to prevent SERP truncation on desktop and mobile.
  - Front-load primary keyword within the first 3 words.
  - Include power modifiers (`SOP`, `Guide`, `2026`, `[Audit Checklist]`).
  - *Example*: `Aqueous Paper Cup Coating vs PLA: 2026 Compliance Guide` (55 chars).
- **Controlled Keyword Density (1.0% to 2.5%)**:
  - Primary keyphrase density MUST be maintained between **1.0% and 2.5%** across body content.
  - Avoid keyword stuffing. Naturally weave in 5–8 LSI synonyms, intent clusters, and technical terms.
- **Meta Description**: **150–160 characters**, high CTR B2B procurement hook.
- **Short Slug**: **3 to 5 words max**, clean, hyphenated (e.g. `/insights/eco-aqueous-coating-vs-pla-paper-cups`).
- **Canonical URL**: `<link rel="canonical" href="https://cafesupplychain.com/insights/slug" />`.

### 2.2 Link Authority Ratios (External & Internal)
- **High-Authority External Regulatory Links (≥ 3 per article)**:
  Must link directly to official government portals or statutory standards bodies relevant to coffee & packaging:
  - *EU SUPD*: [EU Single-Use Plastics Directive 2019/904](https://eur-lex.europa.eu/) (paper cup coatings, plastic classification)
  - *EU PPWR*: [EU Packaging Regulation (EU) 2025/40](https://eur-lex.europa.eu/)
  - *US FDA*: [FDA 21 CFR Food Contact Substance Notifications](https://www.fda.gov/) (paper cup coatings, food contact)
  - *ISO 22000*: [ISO 22000 Food Safety Management System](https://www.iso.org/) (coffee roasting, export compliance)
  - *ICO*: [International Coffee Organization](https://www.ico.org/) (coffee market data & trade statistics)
  - *SCA*: [Specialty Coffee Association](https://sca.coffee/) (cupping protocols, Arabica grading standards)
  - *FSC*: [Forest Stewardship Council](https://fsc.org/) (FSC-certified paperboard for paper cups)
- **Strategic Internal Product Cross-Links (≥ 3 per article)**:
  Must link to relevant Cafe Supply Chain product pages:
  - `/products/single-wall-aqueous-paper-cups`
  - `/products/crystal-pet-ice-cups`
  - `/products/single-origin-specialty-coffee-beans`
  - `/products/takeaway-kraft-paper-bags`

### 2.3 GEO (Generative Engine Optimization) Layer for AI Search
- **Direct Answer Box (`<div class="art-takeaways">`)**: Front-loaded 2-3 sentence executive summary under 300 characters, placed directly above Section 1.
- **Keyphrase Highlight Spans (`<span class="highlight-kw">`)**: Wrap all technical codes, chemical thresholds, test standards, and statutory dates in `<span class="highlight-kw">...</span>`.
- **Triple Schema.org Entity Mesh**: `TechArticle` + `FAQPage` (10-12 Q&A pairs) + `BreadcrumbList`.

---

## 📐 3. Masterclass 10-Point Article Template

```markdown
---
title: "Aqueous Paper Cup Coating vs PLA: EU SUPD Compliance Guide 2026"
pillar: "Paper Cups & Eco Packaging"
pillarId: "paper-cups-packaging"
seoKeywords: ["aqueous coated paper cups china", "PLA paper cup EU SUPD", "repulpable paper cup supplier"]
readTime: "16 min read"
publishDate: "2026-08-01"
featuredImage: "/assets/double-wall-paper-cup-hero.webp"
contentImages: [
  "/assets/paper-cup-factory-line.webp"
]
summary: "A 16-minute technical guide evaluating water-based aqueous dispersion coatings against bio-plastic PLA and traditional PE laminations. Examines EU SUPD turtle logo exemptions, EN 13430 repulpability, and PFAS-free food contact compliance."
ctaText: "Request Aqueous Paper Cup Swatch Kit"
ctaLink: "/contact?from_article=eco-aqueous-coating-vs-pla-paper-cups"
leadMagnetBadge: "2026 Aqueous Coating Technical Guide"
---

<div class="art-takeaways">
  <strong>Executive Direct Answer:</strong> Water-based aqueous dispersion coatings represent the definitive future of eco-friendly paper coffee cups. Unlike traditional PE lamination or bio-plastic PLA, aqueous coated paper cups feature zero plastic film layers, pass EN 13430 municipal paper mill repulpability benchmarks, qualify for complete EU SUPD plastic turtle logo exemption, and reduce Extended Producer Responsibility (EPR) packaging tariffs across Europe.
</div>

## 1. The Global Shift in Paper Coffee Cup Coating Technologies

[Content...]

## 2. Polymer Chemistry & Liquid Barrier Physics of Aqueous Coatings

[Content...]

## 3. Comprehensive Comparison Matrix: Aqueous vs PLA vs PE

| Performance Attribute | Water-Based Aqueous Coating | Bio-Based PLA Lamination | Traditional PE Lamination |
| :--- | :--- | :--- | :--- |
| **Separable Plastic Film Sheet** | **Zero Plastic Film Sheet** | Bio-Plastic Film Sheet | Polyethylene Film Sheet |
| ... | ... | ... | ... |

## 4. EU Single-Use Plastics Directive (SUPD) Compliance & Logo Exemption
...
```

---

## 🎨 4. AI Image Generation & B2B Industrial Realism Standard

### 4.1 B2B Industrial Realism & Authenticity Standard (STRICT REQUIREMENT)
All images generated or selected for Cafe Supply Chain MUST strictly conform to **100% Authentic Commercial Photography & Industrial Documentation**:

1. **Visual Tone & Style**:
   - **Ultra-Realistic Studio & Industrial Photography**: Must look like real 8K commercial product photography or cleanroom plant photography.
   - **STRICT PROHIBITION**:
     - ❌ NO AI text artifacts or garbled logo spellings on cups/bags/machines.
     - ❌ NO floating 3D objects, floating leaves, floating water drops, or advertising fantasy effects.
     - ❌ NO low-quality 3D CAD renders or plastic-looking renders.
     - ❌ NO distorted human hands/faces or non-standard factory attire.
2. **Color Palette & Lighting**:
   - Clean warm cream (`#fdfbf7`), natural beige stone, unbleached kraft paper, stainless steel lab surfaces, or light oak cafe counters. Softbox diffused studio lighting with natural contact shadows.
3. **Category Composition Guidelines**:
   - *Coffee Beans*: Macro shot of roasted beans with Agtron color discs, cupping bowls, 300kg drum roasters, or clean valve bags without text artifacts.
   - *Paper Cups*: Clean studio product photo showing stack of aqueous cups with liquid coffee, or high-speed cup forming mandrels & flexo printing presses.
   - *PET Ice Cups*: 92% optical clarity crystal PET/rPET cups with cold brew, showing 98mm dome lid fitment.
   - *Kraft Bags*: Flat-bottom block kraft bags with twisted paper handles on clean studio surfaces.

### 4.2 Standardized Prompting Structure
`[Authentic Subject Focus], [Real B2B Environment: Studio / Cleanroom Factory / QC Lab], [Physical Material Texture & Scale], [Soft Studio / Industrial Lighting], 8k resolution, photorealistic, documentary photography, no floating objects, no AI text artifacts, no 3d render`

### 4.3 Article Figure Architecture
1. `featuredImage` ≠ `contentImages[0]` ≠ `contentImages[1]` (strict non-redundancy).
2. **Diverse Camera Angles**: Alternate between macro close-up of paperboard fiber cross-sections, flat-lay of QC lab reports, overhead of roasting drum trier samples, and cleanroom cup forming line.
3. **Format**: WebP (`.webp`), 60KB–200KB, explicit `1200x675`.

---

## 🛡️ 5. Grounded Copywriting & De-Exaggeration Directive
- **Strict Prohibition of Superlatives**: Never write "100% compliant", "0 PPM PFAS", "world's best roaster", or "flawless".
- **Grounded Engineering Replacements**:
  - `100% compliant` → **`fully audited, regulation-ready`**
  - `0 PPM PFAS` → **`<10 PPM PFAS TOF Lab Standard`**
  - `world's best roaster` → **`300kg Probat-class commercial roasting system`**
  - `guaranteed freshness` → **`nitrogen-flushed degassing valve packaging (O₂ <0.5%)`**

---

## 📌 6. Blog Detail Page 3-Column Layout & Sticky TOC SOP

### 6.1 Layout Architecture (3 Columns)
The blog detail page (`src/pages/insights/[slug].astro`) uses a strict 3-column layout:
- **Left Column (240px)**: Sticky Table of Contents (`.art-toc`)
- **Center Column (minmax(0, 1fr))**: Main Article Content (`.art-main` / `.art-prose`)
- **Right Column (200px)**: Sticky Social Share & Sourcing Actions (`.art-social`)

### 6.2 CSS Sticky Positioning Rules (CRITICAL)
- **Global Overflow**: `html, body` MUST use `overflow-x: clip !important; overflow-y: visible !important;` (NEVER `overflow-x: hidden !important` which breaks sticky in WebKit/Blink).
- **Sticky Sidebars**: `.art-toc` and `.art-social` MUST use `position: sticky !important; top: 96px !important; align-self: start !important; z-index: 20;`.
- **TOC Styles MUST Be Global (`<style is:global>`)**:
  - Because TOC items are dynamically generated via JavaScript at runtime, Astro's scoped `<style>` hash will NOT match JS-created DOM elements.
  - All `.art-toc__link`, `.art-toc__link--active`, `.art-toc__num`, and `.art-toc__text` CSS rules MUST reside inside `<style is:global>`.
- **TOC Typography Rules**:
  - `.art-toc__link` font-size: `0.75rem !important;` (12px)
  - `.art-toc__num` font-size: `0.65rem !important;` (10.4px)
  - `.art-toc__text` line-clamp: `-webkit-line-clamp: 2;` (max 2 lines per item to keep card compact)

### 6.3 CTA Rule (STRICT EXACTLY 2 BUTTONS)
- In the article bottom CTA section (`.art-cta-card__actions`), **EXACTLY 2 CTA buttons** must be rendered:
  1. Primary CTA: Sourcing Inquiry / Sample Kit Request
  2. Secondary CTA: Contact Supply Chain Director

---

## ⚙️ 7. Content Pillar Architecture (4 Core Pillars)

| Pillar | pillarId | Target Audience | Key Topics |
|---|---|---|---|
| **Roasting & Bean Sourcing** | `coffee-beans-roasting` | Cafe chains, importers, roasteries | Yunnan Arabica, Probat 300kg, Agtron color, RoR profiling, nitrogen packaging, FDA export |
| **Paper Cups & Eco Packaging** | `paper-cups-packaging` | Cafe operators, packaging buyers | Aqueous vs PLA vs PE, EU SUPD compliance, EN 13430 repulpability, FSC paperboard, PFAS-free |
| **PET Ice Cups & Cold Beverage** | `pet-ice-cups-cold` | Bubble tea operators, QSRs | Crystal PET clarity (92%), cold-fill thermoforming, cup-lid fitment, optical inspection |
| **Kraft Bags & Accessories** | `kraft-bags-accessories` | Cafe takeaway operators | FSC kraft paper, food-grade grease resistance, 6-color flexo printing, flat-bottom gusset |

---

## ⚙️ 8. Article Data Sync & Build Verification SOP
1. **Sync Data Adapters**: Verify `src/data/articles.ts` includes the new article.
2. **Record Indexing URL**: Append `https://cafesupplychain.com/insights/<slug>` to `scratch/pending_indexing_urls.json`.
3. **Static Build Verification**: Run `ASTRO_TELEMETRY_DISABLED=1 npx astro build` and verify 0 errors.
