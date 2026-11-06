---
name: Astro BodyHTML No Inline Styles
description: Disallow inline style attributes in JSON bodyHtml content because Astro template sanitizes them, and enforce bodyHtml structural invariants.
trigger: always_on
---
# Astro BodyHTML No Inline Styles

Never write inline `style="..."` attributes inside `bodyHtml` strings in product JSON files or content collections.

The Astro product page template (`[slug].astro`) aggressively sanitizes HTML and strips all `style="..."` attributes before rendering. 

Always define reusable CSS classes in `src/styles/legacy-content.css` or `src/styles/global.css` and use standard `class="..."` attributes.

## Invariants for Product `bodyHtml` Content:
1. **No Embedded FAQ Sections**: `bodyHtml` MUST NOT contain an FAQ accordion or `<h2>Frequently Asked Questions</h2>` block. `[slug].astro` renders the single global FAQ section at the bottom of the page.
2. **Multi-Line Spec Parameters**: In `Specifications & Custom Options` tables, multi-item custom parameters MUST use `<ul><li>...</li></ul>` multi-line lists.
3. **Preserve Internal Blog Links**: All internal guide and blog links (`<a href="/insights/...">...</a>`) MUST be preserved on dedicated lines below the parameter list.
