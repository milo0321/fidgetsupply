# Backlinko-Grade Editorial & Content Engineering Invariants

All B2B insights guides, sourcing playbooks, and industry articles under `/insights/[slug]/` (`src/content/insights/*.md`) MUST strictly adhere to the **Backlinko Editorial Architecture** (the global gold standard for high-ranking, high-engagement B2B content).

---

## 1. Information Architecture & "Definitive Skyscraper" Standard
- **Definitive Masterclass Scope**: Every article must serve as the single most comprehensive, authoritative guide on the internet for its topic (covering material polymers, engineering specs, factory manufacturing stages, quality control AQL standards, volume pricing matrices, and global logistics).
- **Substantial Publication Depth**: Minimum target length of **1,000 to 1,800+ words** of crisp, engineering-backed prose.
- **Reading Time Invariant**: Every post MUST achieve a calculated reading time $\ge 8$ minutes, conforming to a site-wide normal distribution centered around **10 to 14 minutes** (ranging from 8 to 21 minutes).
  $$\text{Reading Time} = \max\left(8, \left\lceil \frac{\text{Word Count}}{175} + (\text{Tables} \times 1.0) + (\text{FAQs} \times 0.4) \right\rceil\right)$$

---

## 2. Visual Ergonomics & The 1–3 Sentence Rule
- **1-to-3 Sentence Paragraph Rule**: NEVER write long, unbroken walls of text. Every paragraph MUST be strictly **1 to 3 sentences** (25–50 words max) with comfortable vertical breathing space (`margin-bottom: 1.3rem;`).
- **Bucket Brigades (Rhythm Transitions)**: Use short transitional phrases (*"Here is the key distinction:", "Why does this matter?", "The takeaway is simple:"*) to maintain reading momentum and drive down bounce rates.
- **Bold Lead-in List Invariant**: Unordered list items (`<ul><li>`) MUST begin with bold conceptual headers (`<strong>Key Concept:</strong> Description...`) for rapid scannability.
- **Mandatory Visual Figures & Technical Captions ($\ge 2$ Inline Images)**: Every article MUST incorporate at least **2 to 4 high-resolution, context-specific WebP images** formatted with `<figure class="article-figure"><img ... loading="lazy" /><figcaption>Figure X: Technical caption...</figcaption></figure>`. Every image MUST include descriptive, keyword-rich `alt` attributes and strictly adhere to Rule 13 (Zero Duplicate Images per Page).
- **Visual Anchors Every 150–200 Words**: Punctuate prose every 150–200 words with a table, callout box, figure image, workflow step, or badge list.

---

## 3. Multi-Dimensional Specification & Volume Pricing Tables
Every technical guide MUST contain at least 2 to 4 responsive tables:
1. **Material / Tech Specification Matrix**: Comparing raw material properties, GSM density, hydrostatic head, tensile strength, and certifications (EN 71, FDA, GRS, OEKO-TEX).
2. **B2B Tiered Volume Pricing Table**: Displaying realistic unit price tiers from factory MOQ (e.g. 500 pcs) up to 20,000+ pcs, alongside turnaround lead times.

---

## 4. High-Contrast Sourcing CTA Box & FAQPage Schema
- **Multi-Element High Contrast Stack**: Dark sourcing boxes (`.sourcing-cta-box`, background `#0f172a` → `#1e293b`) MUST enforce:
  1. `h3`: `#ffffff !important;`
  2. `p`: `#cbd5e1 !important;`
  3. `p a`: `#38bdf8 !important; text-decoration: underline;`
  4. `.btn-primary`: `background-color: #0284c7 !important; color: #ffffff !important; font-weight: 700;`
- **10-Item Technical FAQ Accordion (9–12 FAQs Invariant)**: Every B2B guide MUST include a 7-item accordion addressing MOQ, sampling time, compliance (EN 71, FDA, GRS), packaging, and logistics, fully backed by Schema.org `FAQPage` JSON-LD structured data.

---

## 5. Banned AI Buzzwords & Strict Quality Assurance
Never include robotic AI clichés:
- Banned terms: `"paramount"`, `"delve"`, `"crucial"`, `"testament"`, `"tapestry"`, `"beacon"`, `"cutting-edge"`, `"game-changer"`, `"unwavering"`, `"seamlessly"`, `"dive into"`, `"labyrinth"`, `"in today's fast-paced"`.
- Must pass `node scripts/verify_all_rules.cjs` (Rule 16: Backlinko Editorial Invariants) on every commit.

---

## 6. Mandatory Article Publication & Update Date Invariant (修改时间原子同动原则)
Whenever any insights guide or blog article is newly created or updated:
1. **New Articles**: MUST specify `publishDate: "YYYY-MM-DD"` matching the current calendar date of creation.
2. **Updated Articles (Tandem Modification)**: 
   - `updatedDate` MUST strictly follow actual content or metadata revisions. Only when an existing article is genuinely modified, its `updatedDate: "YYYY-MM-DD"` MUST be updated to the current date in the exact same commit.
   - **DO NOT** mass update or touch `updatedDate` on blogs that have not been modified.
3. **SEO Freshness & Schema Reflection**: The template automatically synchronizes `dateModified` in Schema.org `BlogPosting` JSON-LD and renders the "Updated: YYYY-MM-DD" indicator in the article header to ensure Googlebot and AI search crawlers promptly detect the revision and re-index the content.
