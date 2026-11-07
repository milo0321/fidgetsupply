# Synchronous Full-Locale Multilingual Update Invariant (18 Languages)

Whenever ANY page, article, collection hub, product SKU, or core widget is created, updated, or refactored, you MUST simultaneously synchronize and update ALL **18 supported language locales** (`en`, `de`, `fr`, `nl`, `es`, `it`, `pt`, `sv`, `da`, `no`, `fi`, `pl`, `cs`, `ru`, `ja`, `ko`, `id`, `ar`).

---

## 1. Zero Locale Drift, Complete Parity & Zero Stray Chinese Invariant

1. **Simultaneous 18-Locale Synchronization**:
   - Never update an English page or component in isolation while leaving non-English versions stale.
   - If a page's content, technical specifications, volume pricing tiers, custom branding policy (`50W Fiber Laser` & `Deep Laser + Color Fill`), FAQ accordion, or Hero copy changes in English, the corresponding localized translation dictionaries in `src/i18n/ui.ts`, `src/i18n/pageContentLocalization.ts`, `src/i18n/productLocalization.ts`, and `src/i18n/insightAndCollectionLocalization.ts` MUST be updated across all 18 languages in the same commit.

2. **Zero Stray Chinese Characters (`[\u4e00-\u9fff]`) in Non-JA Locales**:
   - **NEVER** leave Chinese parenthetical notes (e.g., `(附着力不足)`, `(金属表面光滑、惰性大)`) in English source strings (`src/i18n/ui.ts`, `src/i18n/pageContentLocalization.ts`, `src/i18n/productLocalization.ts`, `src/content/insights/*.md`), because fallback/shared dictionary generators will propagate those Chinese characters into all 17 non-Japanese locales.
   - All 3,180 non-Japanese built HTML pages (`!relFile.startsWith('/ja/')`) MUST have `0` Chinese characters (verified deterministically by Rule 10 of `scripts/verify_all_rules.cjs`).

2. **New Page Creation Protocol**:
   - Whenever creating a new page (e.g. `src/pages/[slug].astro`, `src/content/insights/[slug].md`, or `src/content/products/[slug].json`), you MUST:
     1. Register the route in dynamic multilingual routers (`src/pages/[lang]/[slug].astro` and `src/pages/[lang]/products/[slug].astro`).
     2. Provide complete, native translation schemas across all 10 supported languages (`en`, `es`, `de`, `fr`, `it`, `pt`, `ru`, `ja`, `ko`, `ar`).
     3. Ensure the language picker (`LanguagePicker.astro`) and hreflang generators (`getHreflangTags`) cleanly link all 10 alternates.

---

## 2. Structural & Semantic Symmetry

Across all 10 language editions of any page, the following elements MUST remain 1:1 symmetrical:

- **Section Hierarchy & Grid Layouts**: Same number of feature cards, Z-pattern rows, and benefit grids.
- **Pricing & Volume Tiers**: Identical quantity tiers (e.g., 500, 1,000, 3,000, 5,000, 10,000 pcs) and pricing values.
- **FAQ Schema Completeness**: Identical question-and-answer count with full Schema.org `FAQPage` JSON-LD compatibility.
- **Visual Image Assets**: Symmetrical image paths, aspect ratios (4:3 for cards), and localized `alt` descriptions.
- **CTA Destination Links**: Symmetrical target paths routed cleanly through `getLocalizedPath(targetPath, lang)`.

---

## 3. Mandatory Build Verification Checklist

Before reporting completion or committing changes:

1. **Verify Static Compilation**:
   Run `npm run build` and confirm that all 10 language HTML files are successfully compiled into `dist/client/`:
   - `dist/client/<slug>.html` (English baseline)
   - `dist/client/es/<slug>.html` (Spanish)
   - `dist/client/de/<slug>.html` (German)
   - `dist/client/fr/<slug>.html` (French)
   - `dist/client/it/<slug>.html` (Italian)
   - `dist/client/pt/<slug>.html` (Portuguese)
   - `dist/client/ru/<slug>.html` (Russian)
   - `dist/client/ja/<slug>.html` (Japanese)
   - `dist/client/ko/<slug>.html` (Korean)
   - `dist/client/ar/<slug>.html` (Arabic - RTL)

2. **Verify Zero Missing Keys & Suffix-Proof Paths**:
   Ensure zero fallback crashes, zero missing translation key warnings, and zero `.html` double-suffix path corruptions (e.g. `/ru/ar.html`).
