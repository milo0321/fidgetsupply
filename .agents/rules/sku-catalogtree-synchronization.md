# Mandatory Synchronous CatalogTree Update on New SKU Creation (新增 SKU 必须同步更新 catalogTree 铁律)

Whenever a new leaf product SKU (`src/content/products/<slug>.json`) is created or added to the website, it MUST be synchronously registered in the 4-tier interactive catalog tree across all entry points:

## 1. Required Registration Touchpoints

Every new SKU requires synchronous registration in four distinct files:

1. **English Master Catalog Tree (`src/pages/products/index.astro`)**:
   - Locate the matching L2 category and L3 sub-branch inside `catalogTree`.
   - Add the SKU object into the `skus: [...]` array:
     ```javascript
     { 
       name: 'Custom Product Name Wholesale', 
       slug: '/products/custom-product-slug-wholesale', 
       moq: '500 Pcs', 
       material: 'Exact Specification Material', 
       tag: 'unique-tag' 
     }
     ```
2. **Multilingual Catalog Tree (`src/pages/[lang]/products/index.astro`)**:
   - Add the matching SKU object using `getLocalizedPath`:
     ```javascript
     { 
       name: 'Custom Product Name Wholesale', 
       slug: getLocalizedPath('/products/custom-product-slug-wholesale', lang), 
       moq: '500 Pcs', 
       material: 'Exact Specification Material', 
       tag: 'unique-tag' 
     }
     ```
3. **i18n SKU Translation Dictionary (`src/i18n/translations/catalogTree.ts`)**:
   - Register the SKU name in `catalogTreeSkus` across all 9 supported non-default languages (`de`, `fr`, `es`, `pt`, `ja`, `ko`, `it`, `ar`, `ru`):
     ```typescript
     "Custom Product Name Wholesale": {
       "de": "...",
       "fr": "...",
       "es": "...",
       "pt": "...",
       "ja": "...",
       "ko": "...",
       "it": "...",
       "ar": "...",
       "ru": "..."
     }
     ```
4. **Parent Category Hub Page (`src/pages/<hub-slug>.astro`)**:
   - Add the product card with 4:3 image, custom spec bullet points, and MOQ badge to the corresponding L2/L3 category collection hub page.

---

## 2. 100% SKU Parity Invariant

- **Zero Missing SKUs**: The total count of leaf product SKUs registered in `src/pages/products/index.astro` MUST equal the total count of non-hub JSON leaf product files in `src/content/products/*.json`.
- **Searchability Guarantee**: Every leaf product must be searchable via the `/products` search input (`#treeSearchInput`) and discoverable via category filter chips.

---

## 3. Deterministic Enforcement

This invariant is deterministically audited by Rule 19 in `scripts/verify_all_rules.cjs`.
Any git commit or deployment with an unregistered SKU will immediately fail the build.
