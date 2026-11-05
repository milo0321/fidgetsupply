# Global Product Count & Catalog Tree Synchronization Invariant

Whenever one or more new Product SKUs (`src/content/products/*.json`) or Category Collection Hubs (`/[slug]`) are added, renamed, or removed, you MUST synchronously update **all product count displays, catalog trees, navigation menus, and category hub grids** across the entire website before committing.

---

## 1. `/products` Interactive Catalog Tree (`src/pages/products/index.astro` & `src/pages/[lang]/products/index.astro`)
1. **Register Every New Leaf SKU**: Add the new SKU (`{ name, slug, moq, material, tag }`) under its appropriate L2 category and L3 branch in `catalogTree` in **both**:
   - `src/pages/products/index.astro`
   - `src/pages/[lang]/products/index.astro` (wrapped with `getLocalizedPath('/products/<slug>', lang)`)
2. **Maintain Parity**: The total SKU count (`totalSKUs`) and every L2/L3 branch count in `src/pages/products/index.astro` and `src/pages/[lang]/products/index.astro` MUST be 100% identical.
3. **Multilingual Dictionary Registration (`src/i18n/translations/catalogTree.ts`)**:
   - Any new L2 title MUST be added to `catalogTreeL2` across all 17 non-English languages.
   - Any new L3 branch title (`l3Title`) MUST be added to `catalogTreeL3` across all 17 non-English languages.
   - Any new SKU name or slug MUST be added to `catalogTreeSkus` / `productNounsExtra` / `productNounsNordicId` across all 17 non-English languages, with unique localized titles verified by `scripts/audit_duplicate_titles.mjs`.

---

## 2. Navigation Mega Menu, Search Modal & Footer (`src/components/Header.astro`, `src/components/Footer.astro`, `src/i18n/ui.ts`)
1. **`src/components/Header.astro`**:
   - If a new Category Hub is created, add its slug to `hubSlugs`.
   - Ensure `totalLeafSkus` baseline matches `totalSKUs` on `/products` (`Math.max(searchableProducts.filter(p => !p.isHub).length, <totalSKUs>)`).
   - Ensure both `<input id="searchInputField" placeholder={dynamicSearchPlaceholder} />` and `<p class="search-hint">{dynamicSearchPlaceholder}</p>` use `dynamicSearchPlaceholder`.
   - When adding a prominent new Category Hub to the Mega Menu (`column1`, `column2`, `column3`), maintain a balanced multi-column layout (e.g., 5×3 = 15 items) and add a corresponding quick-search chip in `searchQuickChips`.
2. **`src/components/Footer.astro`**:
   - If a major new Category Hub is added to the Mega Menu, also add its localized link to the Footer category columns.
3. **`src/i18n/ui.ts` (All 18 Languages)**:
   - Update the product count number (`<totalSKUs>+`) across all 18 languages in:
     - `nav.productCount` (e.g., `'Explore 217+ Custom Products'`)
     - `nav.searchPlaceholder` (e.g., `'Search 217+ custom products...'`)
     - `search.placeholder` (e.g., `'Search 217+ products (e.g. canvas tote, enamel pin, bamboo mug, MOQ)...'`)

---

## 3. Master Catalog & Page Metadata (`src/pages/catalog.astro`, `src/i18n/translations/pages/catalog.ts`, `src/i18n/translations/pages/coreMeta.ts`, `src/i18n/translations/pages/productsTree.ts`)
1. **`src/pages/catalog.astro` & `src/pages/[lang]/catalog.astro`**:
   - If a new Category Hub is created, add its slug to `hubSlugs`.
   - Update the meta description count (`<totalSKUs>+ product lines`) in `src/pages/catalog.astro`.
2. **`src/i18n/translations/pages/catalog.ts`**:
   - Update `hero.title` (`Explore <totalSKUs>+ Custom Manufacturing Lines`) across all 18 languages.
3. **`src/i18n/translations/pages/coreMeta.ts`**:
   - Update `catalog.<lang>.title` and `catalog.<lang>.description` (`<totalSKUs>+`) across all 18 languages.
   - Whenever new Insights articles (`src/content/insights/*.md`) are added, also update the Insights article count (`<totalInsights>+`) in `src/pages/insights/index.astro`, `src/i18n/translations/pages/insightsIndex.ts`, and `src/i18n/translations/pages/coreMeta.ts` (`insights.<lang>.description`).
4. **`src/i18n/translations/pages/productsTree.ts`**:
   - Ensure any hardcoded count in `searchPlaceholder` (such as `ru`) matches `<totalSKUs>+`.

---

## 4. Category Hub Pages & Industry Solutions (`src/pages/*.astro`, `src/content/products/*.json`, `src/pages/industry-solutions.astro`)
1. **Parent L2 & Target L3 Category Hub JSONs (`src/content/products/<hub-slug>.json`)**:
   - Add a `.collection-card` for the new SKU inside the Hub's `.collections-grid` (using the SKU's `featuredImage` and zero inline `style=` attributes).
   - Update the section heading `<h2>Explore ... (N Lines)</h2>` so `N` equals the exact count of `.collection-card` items and matches the L3 branch count on `/products`.
2. **Static Astro Category Hub Pages (`src/pages/<hub-slug>.astro`)**:
   - If the Hub also has a static `.astro` page (e.g., `custom-keychains-wholesale.astro`, `custom-corporate-pins-wholesale.astro`, `custom-neoprene-products-wholesale.astro`, `custom-pet-products-wholesale.astro`, `custom-apparel-wearables-wholesale.astro`), add the new SKU to `linkedSkus` / `collections` and update all `(N Lines)` / `N Product Lines` badges and headings on both the L3 Hub and its parent L2 Hub.
3. **Industry Solutions (`/industry-solutions`)**:
   - If the new SKU belongs to a featured spotlight on `src/pages/industry-solutions.astro` (and `src/i18n/translations/pages/solutions.ts`), update the spotlight badge (`N Product Lines`) accordingly.

---

## 5. Deterministic Verification
Always run:
```bash
node scripts/verify_all_rules.cjs
```
Confirm that **Rule 19 (CatalogTree SKU & Product Count Synchronization)** and all **20/20** rules pass with zero errors before committing.
