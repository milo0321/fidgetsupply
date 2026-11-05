---
name: b2b-product-authoring
description: Dedicated B2B product page authoring Skill for Cafe Supply Chain — covering 4-section architecture, 3-card QC Checkpoints grid (non-reuse rule), 50-60 char Meta Title standard, verification certificates, 10-15 technical FAQs, Schema Product JSON-LD, AI studio/lab image generation, and grounded copywriting for coffee beans, paper cups, PET ice cups, and kraft packaging.
---

# B2B Product Page Authoring Skill (/b2b-product-authoring)
*Powered by Cafe Supply Chain — China Coffee Industry Integrated Supply Chain Platform*

This Skill governs the creation, writing, optimization, and auditing of technical product detail pages on Cafe Supply Chain (`/products/[slug]`). It focuses on product JSON data structuring, technical spec tables, customs audit file checklists, 3-card QC checkpoint grids, SEO/GEO optimization, and visual design.

---

## 🎯 1. Core Product Philosophy & E-E-A-T Authority
1. **Integrated Supply Chain Platform**:
   - Positions **Cafe Supply Chain Co., Ltd.** (cafesupplychain.com, China) as the verified coffee industry B2B integrated export service platform and sourcing hub.
   - All product specs MUST provide exact technical, chemical, mechanical, and sensory parameters:
     - **Coffee Beans**: Yunnan Arabica SCA score ≥80, 300kg Probat roasting, Agtron roast color (±1 pt), WIPF degassing valve (O₂ <0.5%), ISO 22000 / FDA registration.
     - **Paper Cups**: Water-based aqueous coating vs PLA vs PE, EN 13430 repulpable, EU SUPD turtle-logo exempt, FSC paperboard, TOF <10 PPM PFAS-free.
     - **PET Ice Cups**: 92% optical clarity, cold-fill thermoforming, leak-proof lidding, FDA 21 CFR 177.1630.
     - **Kraft Bags**: FSC kraft paper, food-grade grease resistance, 6-color flexo printing, flat-bottom gusset.

---

## 🔍 2. SEO & GEO Dual Engine Product Specifications

### 2.1 On-Page Product SEO Layer
- **Meta Title (STRICT 50–60 Characters)**:
  - Must be strictly **50 to 60 characters** to prevent SERP truncation.
  - Structure: `[Key Feature] [Product Name] Manufacturer | Cafe Supply Chain`
  - *Example*: `Aqueous Coated Paper Coffee Cups | Cafe Supply Chain` (52 chars).
- **Controlled Commercial Keyword Density (1.5% to 3.0%)**:
  - Focus on commercial & transactional B2B keyphrases (e.g. `aqueous coated paper cup china`, `bulk roasted espresso beans supplier`, `crystal PET ice cup manufacturer`).
- **Meta Description (150–160 Characters)**:
  - High-converting B2B hook mentioning MOQ, lead time, free sample swatches, and export compliance verification.
- **Short Clean Slug**: 2 to 4 words max, hyphenated (e.g. `/products/single-wall-aqueous-paper-cups`).
- **Canonical URL**: `<link rel="canonical" href="https://cafesupplychain.com/products/slug" />`.

### 2.2 Schema.org Product Entity Mesh (JSON-LD)
Every product page MUST output dynamic JSON-LD containing:
- `BreadcrumbList`: `Home` → `Products` → `[Category]` → `[Product Name]`.
- `Product`: `name`, `description`, `image`, `sku`, `brand` (Cafe Supply Chain), `manufacturer` (Cafe Supply Chain Co., Ltd.), `offers` (`priceCurrency: "USD"`, `availability: "InStock"`), `aggregateRating`.
- `FAQPage`: **10 to 15 technical Q&A pairs** with keyword highlights.

---

## 📐 3. Masterclass 4-Section Product Detail Architecture

Every product JSON (`src/content/products/[slug].json`) and template (`src/pages/products/[slug].astro`) MUST follow this structure:

### Section 0: Inner Hero Banner & High-Intent Metric Pills
- **Breadcrumb & Category Pulse Badge**: Display category and certifications (e.g. `EN 13430 Repulpable Certified`).
- **Product Title & Short Overview**: 2-sentence value proposition under 250 characters.
- **Hero Visual Card**: High-res studio product photo with key metric pills (MOQ, Lead Time, Material/Origin, Certification).

### Section 1: 9-Row Technical Specification Matrix Table
MUST contain a responsive 9-row engineering specification table tailored to the product line:
- **For Coffee Beans**: Bean Variety/Origin, Roast Profile, Agtron Color Score, Degassing Valve Type, Shelf Life (O₂ <0.5%), Packaging Format, Food Safety Certifications, Lead Time, MOQ.
- **For Paper Cups**: Coating Technology, EU SUPD Status, Repulpability Standard, Paperboard GSM & Source, Temperature Limit, PFAS Status, Printing Options, Lead Time, MOQ.
- **For PET Ice Cups**: Material Grade, Optical Clarity (%), Temperature Range, Rim Diameter & Fitment, Lid Compatibility, Recyclability Code (#1 PET), Quality Inspection, Lead Time, MOQ.

### Section 2: Customs Compliance Audit File & Industry Applications
- **Compliance Dossier Checklist (6–7 Certificates)**:
  - EU Declaration of Conformity (DoC) / SUPD Exemption
  - EN 13430 / PTS Repulpability Certificate
  - ISO 22000 Food Safety & HACCP Certification
  - FDA Facility Registration & 21 CFR Food Contact
  - FSC Chain of Custody (CoC) Certificate
  - SGS TOF <10 PPM PFAS-Free Test Report
- **Target Industry Applications (5 Application Boxes)**:
  - Enterprise Cafe Chains, Specialty Roasteries, QSR / Fast Food, Bubble Tea & Cold Beverage, Hotel & Catering.

### Section 3: Visual Gallery & Quality Control Checkpoints Grid (Golden 3 Cards)
- **Grid Layout**: Strictly **3 cards per row** (`display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;`).
- **Strict Checkpoint Rules**:
  - `galleryImages` MUST contain **EXACTLY 3 distinct images**.
  - **DO NOT reuse the product's own Featured Hero image (`image`)** inside `galleryImages`.
  - **DO NOT reuse Checkpoint images from other products**, UNLESS those products share the EXACT same manufacturing line, factory cleanroom, or testing laboratory process (e.g. paper cup forming mandrel shared between single wall and double wall paper cups). In all other cases, dedicated bespoke images MUST be generated.

### Section 4: Technical Product FAQs (STRICT 10 to 15 Q&As)
- **STRICT REQUIREMENT**: Every product JSON file MUST contain **EXACTLY 10 to 15 technical B2B Q&As** answering technical procurement, custom sizing, printing tolerances, MOQ tier discounts, food contact certifications, and export logistics.

---

## 🎨 4. Product Image Generation & B2B Visual Style SOP

### 4.1 B2B Image Visual Style Standards (CRITICAL)
All product images generated for Cafe Supply Chain MUST strictly conform to the **B2B Commercial Authenticity & Industrial Quality System**:

1. **Visual Tone & Style**:
   - **Ultra-Realistic Commercial Photography**: 8K studio product photography or cleanroom factory floor photography.
   - **PROHIBITED**: NO 3D cartoon renders, NO low-poly vector graphics, NO cheap oversaturated stock photos, NO AI text gibberish on products, NO distorted hands/faces.
2. **Color Palette & Studio Lighting**:
   - Backgrounds: Clean warm cream (`#fdfbf7`), natural beige stone, unbleached kraft paper, stainless steel lab surfaces, or light oak cafe counters.
   - Lighting: Soft diffused studio softbox lighting with natural, soft contact shadows.
3. **Product Composition SOP**:
   - *Hero Image*: Clean studio product photo with sharp depth of field, clear material texture, and professional B2B presentation.
   - *Gallery Checkpoints*: QC testing setup (e.g. Agtron roast color disc, EN 13430 repulpability beaker, TOF PFAS contact angle meter, handle tensile strength tester).

### 4.2 On-Demand Generation Mandate (`generate_image`)
- **Hero Image Requirement**: Invoke `generate_image` tool to create a bespoke 8K studio hero photo (`image`) for EVERY product SKU. No placeholders or generic fallback images.
- **Prompt Standard**:
  `[Subject Focus], [Specific B2B Setting / Lab / Studio], [Material & Technical Details], [Lighting & Color Palette], 8k resolution, photorealistic, sharp focus, professional commercial product photography`
- **Checkpoint Gallery Images Requirement**: Invoke `generate_image` to create bespoke factory cleanroom, QC inspection, and laboratory testing images for `galleryImages`.
- **Image Conversion**: Scale images to `1200x675`, convert to WebP (`.webp`) format, and save in `public/assets/`.

---

## 🛡️ 5. Grounded Copywriting & De-Exaggeration Directive
- **Strict Prohibition of Superlatives**: Never write "100% compliant", "0 PPM PFAS", "100% customs clearance pass rate", "flawless", or "world's best".
- **Grounded Engineering Replacements**:
  - `100% compliant` → **`fully audited, regulation-ready`**
  - `0 PPM PFAS` → **`<10 PPM PFAS TOF Lab Standard`**
  - `world's best coffee` → **`SCA 80+ scored specialty Yunnan Arabica`**

---

## ⚙️ 6. Product Data Sync & Build Verification SOP
1. Sync product JSON files in `src/content/products/` and `src/data/products.ts`.
2. Append canonical URL (`https://cafesupplychain.com/products/<slug>`) to `scratch/pending_indexing_urls.json`.
3. Run `ASTRO_TELEMETRY_DISABLED=1 npx astro build` and verify 0 errors.
