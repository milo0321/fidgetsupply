# B2B Pricing Table Layout & Zero-Scrollbar Invariants

All product procurement tables (`.procurement-table` inside `.procurement-table-wrapper`) MUST strictly adhere to the following layout, typography, and responsive invariants to prevent horizontal scrollbars on desktop viewports:

## 1. Zero Horizontal Scrollbars on Desktop
- On viewports $\ge 641\text{px}$, the table MUST fit 100% within its container (`max-width: 960px`) without generating any horizontal scrollbar (`overflow-x: hidden`).
- Horizontal scrolling (`overflow-x: auto; -webkit-overflow-scrolling: touch;`) is strictly isolated to ultra-compact mobile viewports ($\le 640\text{px}$).
- Never set fixed `min-width` (e.g. `min-width: 620px` or `min-width: 800px`) that forces horizontal overflow inside standard page containers.

## 2. Typography & Text Wrapping Invariants
- **Table Headers (`<th>`)**: MUST use `white-space: normal; line-height: 1.35;` to allow multi-line wrapping of specification names without expanding column width.
- **Header Naming Convention**: MUST use compact, standardized labels:
  `Quantity Tier` | `FOB (Spec 1)` | `FOB (Spec 2)` | `Sample Time` | `Mass Production`
- **Pricing Cells (`.tier-price`)**: MUST enforce `white-space: nowrap; font-variant-numeric: tabular-nums;` and ALWAYS start with `$`.
- **Sample Fee Badges (`.tier-badge`)**: MUST enforce `white-space: nowrap;` with distinct green styling.

## 3. Cell Padding & Table Layout
- Tables MUST use `table-layout: auto; width: 100%; border-collapse: separate;`.
- Padding MUST NOT exceed `0.85rem 0.85rem` per cell to preserve high-density data scannability.

## 4. Table Class Separation (2-Column Spec vs Multi-Column Grid)
- **2-Column Specification Tables**: Use `.spec-table-modern` or `.table-narrow` strictly for two-column key-value parameters (`<tr><th>Parameter</th><td>Value</td></tr>`).
- **3+ Column Tables**: Multi-column comparison or pricing matrices MUST use `.procurement-table` or `.comparison-table` and MUST be wrapped inside `<div class="procurement-table-wrapper">` with `overflow-x: auto; -webkit-overflow-scrolling: touch;`.
- **Never Mix Classes**: NEVER apply `.spec-table-modern` to a multi-column table, as its `32%` column width / `180px` min-width rules will blowout the viewport width.

## 5. List Typography Isolation (Unordered vs Ordered)
- **Unordered Arrow Lists**: Custom bullet arrows (`content: '→'`) MUST strictly target `ul > li::before`.
- **Ordered Numeric Lists**: `<ol>` lists must preserve native numeric counters (`list-style: decimal; padding-left: 2rem;`) with `ol > li::before { content: none !important; }` to prevent duplicate numbering overlap.
