---
name: UI Contrast Verification
description: Enforce text readability when background colors change, table row hover states, and CTA button styling.
trigger: always_on
---
# UI Contrast Verification

Whenever modifying the background color of a container or section, you MUST explicitly verify that the foreground text colors still maintain high contrast. 

If a container defaults to a dark background, ensure text is `#ffffff` or similar. If the dark background is removed or changed, immediately update the text color to a dark value to prevent invisible text.

## 2. Table Header Hover State Invariant
- **No Header Hover Washout**: Table headers (`<thead><th>`) with dark backgrounds (`#0f172a`) MUST NOT change background color to light gray on table row hover.
- **Scope Row Hover to Body**: Always write table row hover styles targeting table body rows only:
  ```css
  /* Correct */
  .comparison-table tbody tr:hover td { background-color: #f1f5f9; }
  
  /* Incorrect - washes out thead th */
  .comparison-table tr:hover { background-color: #f1f5f9; }
  ```

## 3. Article Link vs CTA Button Isolation & Sourcing Box Contrast
- **Exclude Button Classes from Article Link Styles**: Editorial link styling in article bodies (`.article-body a`) MUST exclude button classes using `:not()` pseudo-classes to avoid overriding white CTA button text with brand green:
  ```css
  .article-body a:not(.btn):not(.btn-hero):not(.btn-primary):not(.cta-btn):not(.cta-button) {
    color: var(--color-brand);
    text-decoration: underline;
  }
  ```
- **Complete Multi-Element Contrast Stack for Dark Sourcing Boxes**:
  For `.sourcing-cta-box` and `.article-inline-cta` (dark slate background `#0f172a` → `#1e293b`):
  1. **Headings (`h2`, `h3`)**: MUST enforce `color: #ffffff !important;` (prevents inheriting `.article-body h3` dark navy).
  2. **Descriptions (`p`)**: MUST enforce `color: #cbd5e1 !important;` (prevents inheriting `.article-body p` dark charcoal).
  3. **Inline Text Links (`p a`)**: MUST enforce `color: #38bdf8 !important; text-decoration: underline;` (hover `#7dd3fc !important;`).
  4. **Primary CTA Button (`a.btn`, `.btn-primary`)**: MUST enforce `background-color: #0284c7 !important; color: #ffffff !important; font-weight: 700;` (hover `background-color: #0369a1 !important; color: #ffffff !important;`). This guarantees a minimum 4.8:1 contrast ratio against the dark background.
