# Enterprise i18n Multilingual Architecture & Engineering Invariants

To guarantee 100% robust, glitch-free, high-converting internationalization (i18n) across all languages and viewports:

---

## 1. Zero CSS/Layout Alteration Invariant (Except RTL)
- **Unified UI/UX**: Multi-language localization MUST NEVER alter the core CSS stylesheets, container widths, grid systems, or visual aesthetics of the English baseline site.
- **RTL Isolation**: Only Right-to-Left languages (such as Arabic `ar` or Hebrew `he`) are permitted directional styling adjustments via scoped `html[dir="rtl"]` or `[dir="rtl"]` selectors.

---

## 2. URL Sanitization & Suffix-Proof Path Routing
- **Strip Static Build Suffixes Before Segment Parsing**:
  During static site generation (SSG), Astro/Vite sets `Astro.url.pathname` with suffixes (e.g. `/ru.html` or `/ru/index.html`).
  `getLanguageFromURL` and `getLocalizedPath` MUST ALWAYS sanitize paths by stripping `.html`, `.htm`, `/index.html`, and trailing slashes BEFORE splitting segments:
  ```typescript
  // Invariant Pattern
  export function getLanguageFromURL(pathname: string): SupportedLanguage {
    if (!pathname) return defaultLang;
    let clean = pathname.split('?')[0].split('#')[0];
    clean = clean.replace(/(\/index)?\.(html?|php)$/i, '');
    const segments = clean.split('/').filter(Boolean);
    const firstSegment = segments[0];
    if (firstSegment && (supportedLanguages as string[]).includes(firstSegment)) {
      return firstSegment as SupportedLanguage;
    }
    return defaultLang;
  }
  ```
- **Explicit `sourceLang` Parameter**:
  Language pickers and URL helpers must pass `currentLang` as an explicit parameter into `getLocalizedPath(currentPath, targetLang, currentLang)` to prevent ambiguous segment detection on subpages.

---

## 3. Date & Badge Text Wrapping Ergonomics
- **No Fixed Widths on Localized Labels**:
  German (`de`), Russian (`ru`), and Spanish (`es`) strings are frequently 30%–60% longer than English equivalents (e.g. `18 августа 2026 г.` vs `Aug 18, 2026`).
- **CSS Invariant**:
  Containers for dates, pills, badges, and metadata chips MUST use:
  - `min-width: auto;`
  - `white-space: normal;` (or `overflow: visible;`)
  - `flex-wrap: wrap;`
  - `line-height: 1.3;`
  Never force `white-space: nowrap;` with fixed `width` on containers holding localized dynamic text.

---

## 4. Separation of Concerns & Rule 17 Invariant
- **Zero Non-English in Baseline Templates**:
  English `.astro`, `.json`, and `.md` baseline files MUST contain 0 non-English characters.
- **Dedicated i18n Modules**:
  All non-English translation strings MUST reside strictly inside:
  - `src/i18n/ui.ts` (General UI keys)
  - `src/i18n/translations/` (Page-level schemas & contextual widgets)
  - `src/pages/[lang]/` (Localized static page controllers)

---

## 5. Client-Side Interactive Widget Localization
- **Data Attribute Passing**:
  Client-side scripts (e.g. WhatsApp popups, inquiry modals, search autofill) cannot access Astro server props directly. They MUST read `currentLang` from a DOM data attribute:
  ```html
  <div id="whatsappWidgetWrapper" data-lang={currentLang}>
  ```
- **Contextual Localized Templates**:
  All client-side greetings, inquiry placeholders, and auto-generated message bodies must be dynamically looked up from a centralized translation map (e.g. `whatsappTranslations[userLang]`).

---

## 6. Comprehensive Form & Search Input i18n
- **Every UI Element Must Localize**:
  Header search inputs, navigation placeholders, catalog filters, newsletter inputs, FAQ accordions, and footer copyright badges MUST use localized `{t('key')}` helpers rather than hardcoded English strings.
