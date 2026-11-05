---
name: Mobile UI/UX Invariants
description: Mandatory mobile responsiveness, touch ergonomics, and contrast invariants for all pages and components.
trigger: always_on
---
# Mobile UI/UX & Responsiveness Invariants

To guarantee flawless mobile responsiveness, high-contrast readability, and frictionless touch ergonomics across all mobile devices (360px–768px viewports):

## 1. Hero Section Background & Contrast on Mobile
- **No Light-Base Horizontal Fades**: NEVER apply a 90-degree (horizontal) gradient that fades into a light background (`var(--color-bg-subtle)` / `#ffffff`) if the hero text is white (`#ffffff` / `#cbd5e1`). On mobile screens, this causes white-on-white text washout on the right half of the viewport.
- **Enforce Solid Dark Base**: Hero sections with white text MUST set `background-color: #0f172a;` (or `var(--color-primary)`).
- **Vertical Gradient Fallback**: On `@media (max-width: 991px)`, hero gradients MUST transition to vertical gradients (`linear-gradient(180deg, #0f172a 0%, #1e293b 100%)`) or radial studio spotlights with complete dark coverage across the full width.

## 2. Hero CTA Buttons Full-Width on Mobile
- **Thumb-Touch Ergonomics**: All Hero conversion buttons (`.btn-hero`, `.btn-premium-hero`, `.hero-actions .btn`) MUST expand to full width (`width: 100%; justify-content: center; text-align: center;`) on `@media (max-width: 640px)` / `@media (max-width: 768px)`.
- **Vertical Action Stacking**: If multiple hero actions exist (e.g. Primary + Secondary), stack them vertically with `flex-direction: column; width: 100%; gap: 0.75rem;`.

## 3. Top Navigation Header & Search Button
- **Compact Circular Search Trigger**: Header search triggers with wide text inputs (e.g., `width: 220px;`) MUST transform on `@media (max-width: 1024px)` into compact circular icon buttons (`width: 36px; height: 36px; border-radius: 50%; padding: 0; justify-content: center;`).
- **Logo Text Single-Line Integrity**: `.brand-logo` MUST specify `flex-shrink: 0;` with `white-space: nowrap;` and responsive font scaling (`font-size: 1.05rem;`) to guarantee logo text never wraps or squishes on narrow screens.

## 4. Outer Page Wrapper Horizontal Breathing Room
- **Mandatory Minimum Horizontal Padding**: Top-level page wrappers (such as `.contact-page-wrapper`, `.legal-wrapper`, or non-container sections) MUST maintain at least `1.25rem` (20px) horizontal padding (`padding-left: 1.25rem; padding-right: 1.25rem;`) on `@media (max-width: 640px)`.
- **Zero Edge Touching**: Section titles, subtitles, and accordion cards MUST never touch the absolute left/right screen edges.

## 5. Modern Specification & Procurement Tables
- **Responsive Header Min-Width**: In two-column parameter specification tables (`.spec-table-modern`, `.clean-editorial-content .table-narrow`), table headers (`th`) MUST scale to `width: 36%; min-width: 110px; padding: 0.85rem 0.75rem; font-size: 0.82rem;` on `@media (max-width: 640px)`.
- **Touch-Friendly Volume Tables**: Large multi-tier volume pricing tables (`.procurement-table`) MUST have touch-scrollable wrappers (`overflow-x: auto; -webkit-overflow-scrolling: touch;`) on mobile while preserving non-wrapping price values.
