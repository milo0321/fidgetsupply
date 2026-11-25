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
- **Strict Delta-Only Google Indexing API Invariant**: Run `node scripts/submit_google_indexing.cjs`:
  - **Delta-Only Mandate (`200 requests/day` hard quota)**: Every Google Indexing API (`URL_UPDATED`) submission MUST submit **ONLY newly added pages (`A`) and modified pages (`M`/`R*`)** from the latest pushed commit(s) or an explicit `--urls` / `--urls-file` list.
  - **NEVER Pad with Untouched Pages**: NEVER backfill or pad the Google Indexing API queue with untouched historical products, insights, collections, or core pages.
  - **Sitewide Edits & Long-Tail Discovery**: When modifying shared CSS, layouts, components, or all-locale i18n dictionaries, do NOT blast all routes to the Indexing API — rely on GSC Sitemap resubmission (`sitemap-index.xml` / `sitemap-0.xml`) and IndexNow (`scripts/submit_indexnow.cjs`), or explicitly pass targeted URLs with `--urls=...`.
  - **Supported CLI Modes**:
    - Default (`node scripts/submit_google_indexing.cjs`): Re-submits GSC Sitemaps (`HTTP 204`) and diffs `scratch/google_indexing_state.json`'s `lastSubmittedCommit..HEAD` (falling back to `HEAD~1..HEAD`) to push ONLY newly added/modified concrete page URLs.
    - Explicit Git Range (`node scripts/submit_google_indexing.cjs --since=<git-ref>`): Diffs `<git-ref>..HEAD` for delta URLs.
    - Explicit URL List (`--urls=u1,u2,...` or `--urls-file=<path>`): Submits exact comma-separated or file-listed new/modified URLs/paths.
    - Optional Locale Expansion (`--locales=de,fr,...`): Expands delta canonical URLs into selected localized variants (defaults to empty — EN canonicals only).
    - Safety & Control Flags: `--dry-run` (preview resolved delta URLs without hitting Google APIs or writing reports), `--skip-sitemap`, `--limit=N` (defaults to `200`).
- **`/llms.txt` Synchronization**: Whenever new Insights (`/insights/[slug]`) or Collections (`/collections/[slug]`) are added, `public/llms.txt` MUST be updated simultaneously so AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) discover the full URL index.
