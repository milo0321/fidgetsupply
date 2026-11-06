# Multilingual B2B SEO Checklist & Invariants Rule

Whenever creating, refactoring, localizing, or modifying any page (Category Hub, Leaf Product SKU, Insights/Blog Article, Solution Page, or Static Landing Page), you MUST strictly follow and verify every item in this 7-Pillar SEO Checklist.

---

## 1. Title Tag Invariants (<title>)
1. **Length Constraints**: 50–65 characters (max 600px pixel width in Google SERP). Titles must not truncate awkwardly.
2. **100% Localization Purity (Zero Franken-Titles)**:
   - In non-English locales (de, fr, es, pt, ar, ja, ko, it, ru), titles MUST be 100% translated into natural, fluent target language copy.
   - NEVER mix English keywords into Asian/European sentences (e.g. '徹底解説ガイド： Lanyard 金具パーツ' is strictly FORBIDDEN; use 'ネックストラップ金具パーツ・留め具の種類と選び方徹底ガイド').
   - NEVER leave English placeholder titles untranslated (e.g. 'Sourcing with Purpose' in Japanese or German is strictly FORBIDDEN).
   - NEVER output fallback language tags like (JA), (KO), (AR), (DE), (FR) in titles.
3. **Domain Uniqueness**: Every single URL must possess a unique <title>. Similar SKUs or related collections must specify distinct differentiation descriptors (e.g., 'DuPont Tyvek Shopping Tote' vs 'Tyvek Promotional Storage Bag').
4. **Brand Consistency**: Enforce standard suffix format: '| FidgetSupply.com' (or '| FidgetSupply' for tight character limits).

---

## 2. Meta Description Invariants (<meta name="description">)
1. **Length Constraints**: 120–160 characters. Must provide a compelling summary that encourages organic click-through rate (CTR).
2. **Zero Empty Descriptions**: Every page MUST have a populated, non-empty <meta name="description">.
3. **100% Native Copy**: Meta descriptions must be naturally translated and culturally appropriate for the target locale.
4. **Zero Duplicates**: Every page must have a distinct meta description tailored to its exact SKU/topic, including specific MOQs, material parameters, and factory direct capabilities.
5. **Commercial B2B Signals**: Include commercial intent triggers such as factory wholesale prices, low MOQ, custom OEM/ODM capabilities, and ISO/BSCI/OEKO-TEX certifications.

---

## 3. Heading Hierarchy & Structure (<h1> to <h3>)
1. **Single H1 Invariant**: Exactly ONE <h1> per page.
2. **Commercial Intent Match**: The <h1> must contain the primary search term and reflect the core topic of the page.
3. **Semantic Nesting**: All sub-sections must use <h2>, and nested subsections must use <h3>. Never skip heading levels (e.g. going directly from <h1> to <h3>).
4. **Editorial Clarity**: Avoid robotic AI buzzwords or meaningless keyword stuffing in headings.

---

## 4. Canonical & Hreflang Configuration
1. **Self-Referencing Canonical**: Every page must include <link rel="canonical" href="https://fidgetsupply.com/..."> matching the canonical URL without unnecessary query parameters or trailing slash discrepancies.
2. **Complete 10-Locale Hreflang Matrix**: Every indexable page must output alternate hreflang tags for all 10 supported locales:
   - en, de, fr, es, pt, ar, ja, ko, it, ru, plus x-default (pointing to the English route).
3. **Bidirectional Consistency**: If page A links to page B in hreflang, page B must link back to page A with the corresponding hreflang code.

---

## 5. URL Routing & 301 Permanent Redirects
1. **Strict 4-Tier Hierarchy**:
   - L1 Root: / and /[lang]/
   - L2/L3 Category Hubs: /[hub-slug]/ and /[lang]/[hub-slug]/ (e.g. /collections/magnetic-fidget-sliders)
   - L3/L4 Leaf Product SKUs: /products/[sku-slug]/ and /[lang]/products/[sku-slug]/
   - Sourcing Insights / Guides: /insights/[slug]/ and /[lang]/insights/[slug]/
2. **Mandatory Category Hub 301 Redirects**:
   - Because Category Hubs live at root level /[hub-slug], you MUST configure 301 redirects in astro.config.mjs for /products/[hub-slug] -> /[hub-slug] across all 18 languages.
3. **Zero Broken Internal Links (404s)**:
   - All internal links in markdown content, navigation menus, related product cards, and footer grids MUST target verified, active URLs.
   - If an old article or SKU is deleted or renamed, its 301 redirect must be registered in astro.config.mjs.

---

## 6. Image SEO & Performance Invariants
1. **Mandatory Alt Text**: 100% of <img> tags must contain non-empty, contextually relevant, descriptive alt attributes.
2. **Next-Gen WebP Format**: All image assets must be compressed .webp format under 150KB.
3. **Dimensions & CLS**: Explicit width and height attributes must be defined to prevent layout shift.
4. **Lazy vs Eager Loading**:
   - Hero images above the fold: loading="eager" and fetchpriority="high".
   - All gallery, card, and body images: loading="lazy" with decoding="async".

---

## 7. Structured Data (Schema.org JSON-LD)
1. **Product SKU Pages**: Valid Product + AggregateOffer schema with name, image, description, sku, brand, offers (with lowPrice, highPrice, priceCurrency: "USD", priceSpecification).
2. **Insights & Guides**: Valid Article schema with headline, image, datePublished, author, publisher, plus FAQPage schema for the 7-item interactive accordion and BreadcrumbList.
3. **Category Hubs**: Valid CollectionPage + ItemList schema pointing to child leaf products.
