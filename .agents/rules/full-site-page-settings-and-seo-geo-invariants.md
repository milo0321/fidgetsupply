# Full-Site Page Settings, Image, FAQ, Backlinko & SEO/GEO Invariants

This rule defines the mandatory standards for all product pages (`src/content/products/*.json`), category hubs (`src/pages/*.astro`), and insights/blog articles (`src/content/insights/*.md`).

---

## 1. Featured Image Uniqueness & Physical File Existence
- **Physical File Existence**: Every `featuredImage` declared in product JSONs or insight frontmatter MUST physically exist on disk under `public/` (e.g. `public/images/products/...` or `public/wp-content/uploads/...`). Missing files or broken paths are strictly forbidden.
- **Uniqueness Invariant**: Every leaf product SKU and every insight article MUST have a unique `featuredImage`. No two distinct leaf products or articles may share the exact same featured image URL.

---

## 2. Image Specifications & Asset Hygiene
- **WebP Format Mandate**: 100% of image assets MUST be in modern `.webp` format. Uncompressed `.jpg`, `.jpeg`, or raw `.png` files are strictly prohibited in production content.
- **Strict File Size Ceiling**: Every deployed image MUST be under **150 KB** (target: 40 KB – 120 KB).
- **Aspect Ratio Standards**:
  - Hero & Collection Cards: Strictly **4:3** aspect ratio (e.g., 1200x900).
  - Editorial & Blog Inline Figures: **4:3** or **16:9** aspect ratio.
- **Non-Empty Descriptive Alt Text**: 100% of `<img>` tags and markdown image embeds MUST have non-empty, keyword-rich, and contextual `alt` descriptions.

---

## 3. FAQ Specifications (Insights vs. Products)
- **Insight Articles (10-Item FAQ Schema (9–12 FAQs Invariant))**:
  - Every insight article MUST include an accordion FAQ section with **10 items (within the 9–12 FAQs invariant)** addressing B2B procurement concerns (MOQ, sample turnaround, mass production lead time, compliance/testing, material science, packaging, and logistics).
  - Must be backed by Schema.org `FAQPage` JSON-LD structured data.
- **Product Pages (Zero FAQ in `bodyHtml`)**:
  - Product `bodyHtml` strings MUST NOT contain embedded FAQ accordions or `<h2>Frequently Asked Questions</h2>` blocks.
  - The Astro product page template (`[slug].astro`) renders the single global FAQ section at the bottom of the page. Local FAQ accordions in `bodyHtml` cause duplicate rendering and state conflicts.

---

## 4. Backlinko-Grade Editorial Standards (Rule 16)
- **Reading Time Invariant**: Every insight article MUST achieve a calculated reading time $\ge 8$ minutes (word count $\ge 1,200$ words).
- **Data Comparison Tables**: Every technical guide MUST contain at least **2 responsive tables** (e.g., material comparison matrix, production/pricing tier matrix).
- **Inline Visual Figures**: Every article MUST include at least **2 high-resolution WebP images** (<150 KB) with technical `<figcaption>` captions.
- **Zero AI Clichés**: Zero robotic AI buzzwords (`"paramount"`, `"delve"`, `"crucial"`, `"tapestry"`, `"beacon"`, `"cutting-edge"`, `"game-changer"`, `"unwavering"`, `"seamlessly"`).

---

## 5. SEO & GEO Search Invariants
- **Meta Title Length**: `metaTitle` MUST be strictly **under 60 characters** (e.g. 50–59 chars) to prevent mobile SERP truncation (`...`).
- **Meta Description Length**: `metaDescription` MUST be strictly **under 155 characters** (e.g. 130–154 chars) with explicit procurement hooks.
- **GEO Direct Answer Block**: Every insight guide and category hub MUST feature a designated `.geo-direct-answer` block containing a concise 3-4 sentence factual summary optimized for Google SGE, Perplexity, and LLM generative search citations.
- **100% English Content (Rule 17)**: English content source files (`src/content/`, `src/pages/`, `src/layouts/`) MUST be 100% in English with zero Chinese characters.
- **301 Redirect Integrity (Rule 18)**: Redirect sources in `astro.config.mjs` MUST NOT have trailing slashes or duplicate paths to avoid Cloudflare code 100324 build failures.
