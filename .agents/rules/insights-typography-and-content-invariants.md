# Insights Typography & Content Invariants (Backlinko Editorial Standard)

To maintain international publication-grade ergonomics (Backlinko / Stripe / GitHub Blog / Harvard Business Review standard) across all B2B insights guides, procurement playbooks, and sourcing articles:

## 1. 3-Column Publication Layout Architecture (Mode A Standard)
- **Container Max-Width**: Total layout grid container MUST be set to `max-width: 1320px;` with `gap: 3.5rem;` (56px) and centered margins (`margin: 0 auto;`).
- **Left Sidebar (TOC)**: Width `240px`. Sticky table-of-contents links MUST be compact: `font-size: 0.8125rem` (13px), `line-height: 1.4`, with sub-headings at `0.75rem` (12px). Title `sidebar-title` at `0.75rem` with `letter-spacing: 0.1em`.
- **Center Main Column**: Pure text elements constrained to `max-width: 720px; margin-left: auto; margin-right: auto;` for optimal 60-80 character line-length eye-tracking.
- **Right Sidebar (Social Share)**: Compact utility rail width `64px`. Circular share buttons MUST be `38px × 38px` (icon size `0.875rem`), subtle, and non-intrusive.

## 2. Backlinko Readability & Visual Ergonomics Invariants
- **1-to-3 Sentence Paragraph Rule**: NEVER write unbroken walls of text. Every paragraph MUST be concise (1 to 3 sentences maximum, 25–50 words) with comfortable vertical breathing space (`margin-bottom: 1.3rem;`).
- **Visual Anchors Every 150–200 Words**: Every major section MUST include visual anchors (multi-column comparison tables, structured bullet lists with bold lead-ins, high-contrast callout boxes, or workflow steps).
- **Bold Lead-in List Format**: Unordered list items (`<ul><li>`) MUST begin with bold conceptual headers (`<strong>Key Concept:</strong> Description...`) for rapid scanning.
- **Article Body Typography**: Body paragraphs (`.article-body p`, `.trend-content p`) MUST be set to `1.05rem` (16.8px) with `line-height: 1.8`. Never set body paragraphs to oversized values like `1.25rem` (20px), which cause visual fatigue.
- **Intro Lead Paragraph**: Set `.intro-lead` / `.intro-text p` to `1.125rem` (18px) with `line-height: 1.75`.
- **Headings Hierarchy**: `h2` at `1.85rem` with `margin-top: 3.5rem; margin-bottom: 1.5rem;`; `h3` at `1.35rem` with `margin-top: 2.25rem; margin-bottom: 1rem;`.

## 3. Hero & Featured Image Invariants
- **Independent High-Res Featured Image**: The `featuredImage` MUST be rendered as an independent `<img>` component at the very top of the article body. NEVER place the featured image as a low-opacity background behind the Hero title text.
  - *Rationale*: Preserves fine hardware/fabric texture details for B2B procurement decision-makers, guarantees 15.8:1 WCAG AAA text contrast in the Hero, and maximizes Google Images / Google Discover indexing.
- **No Duplicate H2 Page Title in Body**: The article body must never render a duplicate `<h2 class="page-title-h2">` duplicating the Hero `<h1>` title.

## 4. Reading Time Engine & Normal Distribution
- **Authentic Dynamic Reading Time Formula**: Dynamic reading time is calculated as:
  $$\text{Reading Time} = \max\left(8, \left\lceil \frac{\text{Word Count}}{175} + (\text{Tables} \times 1.0) + (\text{FAQs} \times 0.4) \right\rceil\right)$$
- **Strict Site-Wide Floor**: NO blog post or guide may fall below **8 minutes**. The entire blog library MUST follow a normal distribution centered around **10–14 minutes** (ranging from 8 to 21 minutes).

## 5. High-Contrast Sourcing CTA Box & FAQPage Schema
- **Multi-Element High Contrast Stack**: Dark sourcing boxes (`.sourcing-cta-box`, background `#0f172a` &rarr; `#1e293b`) MUST enforce white headings (`#ffffff !important`), silver text (`#cbd5e1 !important`), sky blue links (`#38bdf8 !important`), and solid primary buttons (`#0284c7 !important`, text `#ffffff !important`).
- **7-Item Technical FAQ Accordion**: Every B2B guide MUST include a 7-item accordion addressing MOQ, sampling time, compliance (EN 71, FDA, GRS), packaging, and logistics, fully backed by Schema.org `FAQPage` JSON-LD structured data.

## 6. Markdown Cleanliness & Guardrails
- **No URL-Encoded Body Content**: Never commit Markdown files with raw `%20%20%3Cdiv...` strings. All content must be fully decoded UTF-8 Markdown/HTML.
- **No Redundant Outer Wrappers**: Do NOT include `<div class="page-container"><div class="container"><article>` wrappers inside Markdown content; the `[slug].astro` template provides the 3-column publication grid.
- **No Banned AI Buzzwords**: Never use "paramount", "delve", "crucial", "testament", "tapestry", "beacon", "cutting-edge", "game-changer", "unwavering", "seamlessly".

## 7. Tandem Modification Invariant for Blog Timestamps (博客修改时间原子同动原则)
- **Strictly Coupled to Actual Revisions (修改时间必须跟着博客调整一起同步调整)**: 
  - `updatedDate` **只能且必须**在某篇博客发生实际内容、元数据或结构调整时，跟随这次调整**同步原子性修改**为当天日期（`YYYY-MM-DD`）。
  - **严禁对未变动博客批量或无脑修改时间**：如果某篇博客在当前任务中未做任何实质性修改，绝不能单独去变更或添加其 `updatedDate`。
- **Mandatory for Modified Historical Posts (历史博客修改必更新时间)**: Whenever an existing blog whose `publishDate` is earlier than the current date is genuinely edited or calibrated (e.g. CTR snippet upgrades, content expansion, internal link updates), you MUST synchronously update `updatedDate: "YYYY-MM-DD"` to the current date in the frontmatter within the very same commit.
- **Search Engine Discovery Rationale**: Search engines (Googlebot, Bingbot) and AI crawlers evaluate `dateModified` in the Schema.org `BlogPosting` JSON-LD graph. If an article with an older `publishDate` is modified without updating `updatedDate`, Googlebot assumes the page is unchanged and skips re-crawling, rendering optimizations invisible in search results.
- **Automated Front-End Rendering**: The Astro template automatically converts `updatedDate` into visual `Updated: YYYY-MM-DD` badges and emits ISO 8601 `dateModified` in the Schema.org metadata.
