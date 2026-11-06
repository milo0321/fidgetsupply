# Pricing Margin & Table-to-Metadata Consistency Invariants (Rule 22)

To protect B2B gross margins, eliminate unprofitable micro-orders, and prevent deceptive "bait-and-switch" price inversions between search snippets/GEO summaries and actual procurement tables:

## 1. Factory Markup & Gross Profit Margin Floor
- **Mandatory 45%–60% Gross Margin (`2.0x–2.5x` Factory Cost)**: Never publish raw supplier ex-factory prices directly on the website. All published USD Reference FOB prices MUST incorporate:
  1. Custom branding setup & unit imprint cost (silkscreen, laser engraving, in-mold decal, or embroidery)
  2. Individual protective or retail gift-box packaging
  3. Domestic QC inspection (AQL 2.5) & FOB port handling fees
  4. A minimum **45%–60% gross profit margin** (`RMB Ex-Factory ÷ 7.10 × 2.0 to 2.5`)
- **Absolute Unit Price Floor**: No product on the website may advertise a unit price below **`$0.12/pc`** (reserved strictly for `2,000+ pcs` Tyvek® event armbands) or **`$0.25/pc`** for general promotional items. Ultra-low clickbait prices (`$0.019`, `$0.02`, `$0.04`, `$0.06`, `$0.09`) are strictly prohibited.

## 2. Zero Metadata-to-Table Price Inversion Invariant
- **Single Source of Truth (`.procurement-table`)**: For every product in `src/content/products/*.json` and every standalone category hub in `src/pages/*.astro` that contains a `.procurement-table`, the lowest tier price in the table (`Col 1, Tier 4`) is the authoritative minimum unit price (`table_min`).
- **No Lower Price Anywhere on the Page**: Every dollar figure (`$X.XX`) appearing in:
  - `metaTitle`
  - `metaDescription`
  - `overview`
  - `.geo-direct-answer` / `GeoDirectAnswer`
  - `specs` and `faqs`
  - `bodyHtml`
  MUST be **greater than or equal to `table_min`** (`price >= table_min`).
- **Simultaneous Synchronization**: Whenever `.procurement-table` prices are adjusted, you MUST simultaneously synchronize `metaTitle`, `metaDescription`, `overview`, `.geo-direct-answer`, `faqs`, and any corresponding `src/pages/*.astro` Hub page or Insights guide table.
