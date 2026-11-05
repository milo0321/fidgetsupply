# B2B Product Schema & GEO (Generative Engine Optimization) Rules

Never use consumer B2C retail Product schemas (e.g., single item retail price `$19.99`, retail sizing) for factory wholesale product pages.

All product pages must present direct factory B2B wholesale structured data to search engines and AI crawlers (Perplexity, ChatGPT Search, Gemini, SearchGPT).

## Invariants:
1. **B2B Wholesale Schema Attributes**:
   - `audience`: MUST specify `BusinessAudience` (`Corporate Procurement Officers & Distributors`).
   - `offers`: MUST use `AggregateOffer` to present wholesale price range tiers rather than single retail prices.
   - `additionalProperty`: MUST include structured B2B supply chain parameters (`MOQ`, `Sample Lead Time`, `Production Lead Time`, `AQL 2.5 Quality Inspection Standard`, `amfori BSCI Audited`, `GOTS Organic Cotton`, `GRS Recycled rPET`, `OEKO-TEX Standard 100`, `Turnkey DDP Freight Delivery`).
2. **`FAQPage` Schema Invariant**:
   - Embed `FAQPage` JSON-LD schema on product pages containing structured procurement Q&A pairs (MOQ, sample times, AQL 2.5 standards, eco-certifications).
3. **`llms.txt` Standard**:
   - Always maintain `public/llms.txt` and `public/llms-full.txt` (following the universal llmstxt.org standard) to outline factory entity knowledge, catalog links, and certification guides for AI search engines.
   - Keep `sitemap-index.xml` and `sitemap-0.xml` updated and synced in `public/`.
4. **Multi-Image Array for Google SERP 3-Image Carousel**:
   - All Category Hubs (`[slug].astro`) and Leaf Products (`products/[slug].astro`) MUST populate the Schema.org `image: [...]` array with multiple high-resolution product cutouts extracted from `bodyHtml` alongside `featuredImage`. This ensures Google Vision AI recognizes distinct product variants and renders multi-image rich snippet carousels in search results.

