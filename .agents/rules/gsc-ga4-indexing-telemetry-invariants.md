# GSC, GA4 & Google Indexing API Closed-Loop Telemetry Invariants

To guarantee 100% live data accuracy, full-funnel conversion attribution, and rapid Google indexing across all 187 canonical routes (3,366+ localized URLs):

---

## 1. Live Telemetry Credentials & Property Identifiers
- **Service Account Credentials File**: `scratch/gsc_credentials.json` (git-ignored, never commit to repository).
- **Service Account Email**: `gsc-analytics-bot@ruixinggifts.iam.gserviceaccount.com` (Google Cloud Project: `ruixinggifts`, Project Number: `723363372568`).
- **Google Search Console Property**: `sc-domain:fidgetsupply.com`
- **Google Analytics 4 Property**: `properties/562887745` (`FidgetSupply.com`, Measurement ID: `G-HHP8CN1M58`, GTM Container: `GTM-TH9NHVJ4`).
- **100% Real Live Data Mandate**: Never fabricate, estimate, or simulate GSC or GA4 metrics. Always run `node scripts/run_daily_seo_ga4_report.cjs` to fetch live API numbers.

---

## 2. GA4 Full-Funnel Event Delegation Invariants (`src/layouts/Layout.astro`)
In addition to the primary macro-conversion `generate_lead` fired on `/contact` form submission, `src/layouts/Layout.astro` MUST maintain global click event delegation pushing 5 micro-conversion events to `window.gtag`:
1. `whatsapp_click`: Fires on `a[href*="wa.me"]`, `.wa-float-btn`, `.wa-send-btn`, `.wa-quick-chip`.
2. `rfq_cta_click`: Fires on any `a[href*="/contact"]` CTA button (`cta_text`, `source_page`).
3. `customization_select`: Fires when selecting `#custom-radio-group .radio-card` on product pages (`custom_mode`).
4. `material_variant_select`: Fires when switching `.variant-btn` on multi-material product pages (`variant_sku`).
5. `faq_expand`: Fires when opening `.accordion-header` FAQ items (`question_text`).

---

## 3. Closed-Loop Google Indexing & Sitemap Automation Scripts
- **Daily Telemetry Report**: Run `node scripts/run_daily_seo_ga4_report.cjs` (zero external npm dependencies; uses native Node `crypto` + `fetch`) to inspect GSC Sitemaps, GSC Search Analytics (`dataState: "all"`), GA4 daily user/session trends, and GA4 event funnels.
- **Google Indexing API & Sitemap Push**: Run `node scripts/submit_google_indexing.cjs`:
  - Default (`node scripts/submit_google_indexing.cjs`): Re-submits `sitemap-index.xml` and `sitemap-0.xml` to GSC (`HTTP 204`) and pushes the 69 highest-priority URLs (8 static hubs + 9 collections + 30 insights + 22 flagship/unindexed products) to `https://indexing.googleapis.com/v3/urlNotifications:publish`.
  - Remaining Products Batch 1 (`node scripts/submit_google_indexing.cjs --remaining-products`): Pushes the remaining product SKU URLs up to the 200-request/day Google Indexing API quota (includes an automatic `HTTP 429` circuit breaker).
  - Remaining Products Batch 2 (`node scripts/submit_google_indexing.cjs --batch-2`): Pushes the final slice of product SKU URLs from index 66 onward on the next day's quota window.
- **`/llms.txt` Synchronization**: Whenever new Insights (`/insights/[slug]`) or Collections (`/collections/[slug]`) are added, `public/llms.txt` MUST be updated simultaneously so AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) discover the full URL index.
