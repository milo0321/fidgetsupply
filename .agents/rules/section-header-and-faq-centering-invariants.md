# Section Header Spacing & FAQ Centering Invariants

To guarantee editorial breathing room, visual hierarchy, and polished B2B presentation across all Hub and Leaf pages:

## 1. Section Header & Subtitle Breathing Room
- **Mandatory Bottom Margin**: Every `.section-header` (containing `h2.section-title` and `p.section-subtitle` / `p.section-intro`) MUST enforce a bottom margin of at least `3.5rem` (56px) (`margin-bottom: 3.5rem;`) before the underlying grid (`.collections-grid`, `.feature-row`, `.advantage-grid`, `.spec-grid-layout`).
- **Centered Text Structure**: Centered section headers (`.section-header.text-center`) MUST use:
  ```css
  .section-header.text-center {
    text-align: center;
    max-width: 850px;
    margin: 0 auto 3.5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ```
- **Subtitle Max-Width & Spacing**: `.section-subtitle` / `.section-intro` MUST specify `max-width: 700px; margin: 0 auto; line-height: 1.65; color: #64748b; font-size: 1.05rem;` to prevent overly wide, unreadable single-line paragraphs.

## 2. FAQ Section Header & Badge Centering
- **Centered FAQ Badge & Heading**: In all Hub, Leaf, and Landing pages, the FAQ section title and eyebrow/badge (`.faq-badge`, `.b2b-badge`, `span.eb-eyebrow`) MUST be horizontally centered with:
  ```css
  .faq-badge, .b2b-badge {
    display: inline-block;
    padding: 0.35rem 1rem;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-radius: 9999px;
    margin: 0 auto 0.75rem auto;
    text-align: center;
    background: #e0f2fe;
    color: #0284c7;
  }
  ```
- **Zero Left-Aligned FAQ Badges**: Never render an FAQ badge with `display: block; margin-bottom: 0.5rem;` without centering margin or in a left-aligned container.

## 3. Collection Card Footer Flex Distribution
- **Full Width & Space-Between**: All collection cards displaying MOQ and Explore/View links MUST use `.collection-card-footer` with:
  ```css
  .collection-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding-top: 1.25rem;
    border-top: 1px solid #f1f5f9;
    gap: 1rem;
  }
  ```
- **Non-Collapsing Action Links**: `.collection-moq` MUST have `white-space: nowrap; flex-shrink: 0;` and `.view-link` MUST specify `margin-top: 0 !important; white-space: nowrap;` to eliminate any crowding or overlap.
