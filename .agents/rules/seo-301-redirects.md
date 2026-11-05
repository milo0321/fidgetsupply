---
name: Mandatory 301 Redirects for Deleted or Renamed Routes
description: Enforce 301 permanent redirects whenever a page or URL route is deleted, renamed, or consolidated.
trigger: always_on
---
# Mandatory 301 Redirects for Deleted or Renamed Routes

Whenever any page, draft, ad landing page, or product URL is deleted or renamed, you MUST configure 301 permanent redirects in:

1. **Astro Configuration (`astro.config.mjs`)**: Add the redirect mapping under the `redirects` object.

> [!IMPORTANT]
> Astro's `@astrojs/cloudflare` adapter automatically compiles all entries from `astro.config.mjs` `redirects` into `dist/client/_redirects` during `astro build`.
> **DO NOT** create or keep duplicate manual redirect lines in `public/_redirects`, as Cloudflare Workers/Pages deployment (`wrangler deploy`) strictly forbids duplicate redirect path definitions and will fail the build with code 100324.

---

## 2. Category Hub Route Protection & Mandatory 301 Mapping

Whenever a new Category Collection Hub is created and registered in `hubSlugs` within `src/pages/products/[slug].astro`:

1. **Mandatory 301 Redirect**: You MUST simultaneously add the redirect mapping in `astro.config.mjs`:
   ```javascript
   '/products/<hub-slug>': '/<hub-slug>',
   ```
2. **Rationale**: Because `products/[slug].astro` excludes Hub slugs from its static generation, external crawlers or historical links attempting to visit `/products/<hub-slug>` will hit a 404 Not Found unless this 301 mapping is explicitly defined.

---

## 3. Cloudflare Code 100324: No Trailing Slash Duplicates in `astro.config.mjs`

Cloudflare Workers/Pages strictly forbids duplicate source paths in `_redirects` and will immediately fail deployments with error `[code: 100324] Duplicate rule for path...`.

1. **Normalize Redirect Keys**: Never define a redirect source with a trailing slash (e.g., `'/product-category/wristbands/': ...`) if the non-trailing-slash key (`'/product-category/wristbands': ...`) already exists or when defining new redirects.
2. **Compiler Behavior**: Astro's Cloudflare adapter strips trailing slashes when generating `dist/client/_redirects`. Having both `'/path'` and `'/path/'` results in two identical lines:
   ```text
   /path /target 301
   /path /target 301
   ```
   which breaks Cloudflare deployment.
3. **Deterministic Enforcement**: Always run `node scripts/verify_all_rules.cjs` (Rule 18) to verify 0 duplicate or trailing-slash keys before committing.
