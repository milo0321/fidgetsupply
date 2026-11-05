# Mandatory SEO Image Alt Text Invariant

All images (`<img>` tags and Markdown `![]()`) across all `.astro` templates, product JSON `bodyHtml` strings, and blog markdown articles MUST strictly define non-empty, keyword-rich, and descriptive `alt` attributes.

## Invariants:
1. **Never Omit `alt`**: Every `<img>` tag MUST contain an `alt="..."` attribute or JSX prop `alt={...}`.
2. **Never Use Empty or Generic `alt` Text**: `alt=""`, `alt="image"`, `alt="photo"`, `alt="product"`, `alt="logo"` are strictly prohibited.
3. **Keyword-Rich & Descriptive**:
   - For **Collection Cards**: `alt="[Product/Category Title] Wholesale"` (e.g. `alt="Custom Plush Pet Squeaker Toys Wholesale"`).
   - For **Z-Pattern Feature Images**: Describe the specific material, craftsmanship, or manufacturing process (e.g. `alt="Custom plush pet squeaker toy showing soft velboa fabric and embroidered facial features."`).
   - For **Hero Images**: `alt="Custom [Product Title] Wholesale Sourcing"` (e.g. `alt="Custom Natural Cotton Rope Dog Toys Wholesale"`).
