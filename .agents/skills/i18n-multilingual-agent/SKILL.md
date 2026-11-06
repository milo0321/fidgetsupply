---
name: i18n-multilingual-agent
description: >-
  Enterprise-grade standard operating procedure, engineering architecture, and execution blueprint for implementing complete multi-language internationalization (i18n) across 10+ locales (including RTL Arabic).
  Use when localizing existing websites, building multilingual routing architectures, resolving language-switcher path bugs, translating UI components, or migrating projects to global multilingual support.
---

# Enterprise i18n Multilingual Agent (SOP & Architecture)

This document provides the definitive standard operating procedure (SOP), code patterns, and diagnostic runbook for implementing enterprise-grade internationalization (**i18n**) across websites, SSR/SSG frameworks (Astro, Next.js, Nuxt), and static landing page architectures.

---

## 1. The 8 Core Multilingual Engineering Challenges & Solutions

```
+----------------------------------------------------------------------------------------------------------+
|                                    8 CORE MULTILINGUAL ENGINEERING CHALLENGES                            |
+----+-----------------------------------------+-----------------------------------+-----------------------+
| #  | Challenge / Pitfall                     | Root Cause                        | Engineered Solution   |
+----+-----------------------------------------+-----------------------------------+-----------------------+
| 1  | Suffix-Poisoned Path Routing            | SSG passes /ru.html to split('/') | Pre-sanitize .html    |
| 2  | Un-localized Inputs & Placeholders      | Hardcoded English in search/forms | Extract to ui.ts      |
| 3  | Date & Badge Text Box Overflow          | Cyrillic/German text 40% longer   | flex-wrap & auto-width|
| 4  | Client-Side Interactive Widget Failure  | Modals lose SSR props             | data-lang on DOM root |
| 5  | CSS Layout Disruption                   | Inline styles or forced widths    | Pure semantic markup  |
| 6  | RTL Direction Flips                     | LTR margin/padding assumptions    | html[dir="rtl"] scope |
| 7  | Mixed Language & Encoding Violations    | Chinese/raw chars in source files | Dedicated i18n modules|
| 8  | SEO Hreflang Canonical Conflicts        | Self-referential loop errors      | getHreflangTags sync  |
+----+-----------------------------------------+-----------------------------------+-----------------------+
```

---

## 2. Directory & Architecture Standard

```
src/
├── i18n/
│   ├── config.ts              # SupportedLanguage type, defaultLang, metadata (dir, flag, code)
│   ├── ui.ts                  # General UI translation dictionaries (nav, search, footer, certs)
│   ├── utils.ts               # Suffix-proof getLanguageFromURL, getLocalizedPath, getHreflangTags
│   └── translations/
│       ├── whatsapp.ts        # Client-side interactive widget greetings & inquiry templates
│       └── pages/             # Deep page-level schema dictionaries
│           ├── home.ts        # Hero, metrics, feature tiers, FAQs (all 18 languages)
│           ├── about.ts       # History, timeline, leadership, values
│           ├── contact.ts     # RFQ forms, office locations, response commitments
│           └── catalog.ts     # Category filter tags, sorting badges, MOQs
├── components/
│   ├── LanguagePicker.astro   # SSR + Client dynamic language switcher dropdown
│   ├── Header.astro           # Localized topbar, main nav, search trigger, mobile drawer
│   ├── Footer.astro           # Localized sitemap links, compliance badges, copyright
│   └── WhatsAppWidget.astro   # Contextual multi-language popups & prefilled templates
└── pages/
    ├── index.astro            # Default English Home (/)
    ├── [slug].astro           # Dynamic English Hubs & Products
    └── [lang]/
        ├── index.astro        # Localized Home (/ru, /de, /es, /ar...)
        ├── [slug].astro       # Localized Hubs & Collections (/ru/custom-bags-wholesale)
        └── products/
            └── [slug].astro   # Localized Product SKU Pages (/ru/products/custom-tote-bags)
```

---

## 3. Critical Code Invariants & Implementations

### A. Suffix-Proof Path Localizer (`src/i18n/utils.ts`)

```typescript
import { defaultLang, languages, supportedLanguages, type SupportedLanguage } from './config';
import { ui } from './ui';

/**
 * Extracts language code from URL safely stripping .html / .htm / index.html
 */
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

/**
 * Builds clean localized URL for any target language
 */
export function getLocalizedPath(pathname: string, targetLang: SupportedLanguage, sourceLang?: SupportedLanguage): string {
  if (!pathname) return targetLang === defaultLang ? '/' : `/${targetLang}`;
  
  let cleanPath = pathname.split('?')[0].split('#')[0];
  cleanPath = cleanPath.replace(/(\/index)?\.(html?|php)$/i, '');
  
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }
  
  const currentLang = sourceLang || getLanguageFromURL(cleanPath);
  
  let strippedPath = cleanPath;
  if (currentLang !== defaultLang) {
    strippedPath = cleanPath.replace(new RegExp(`^\\/${currentLang}(\\/|$)`), '/');
  }
  if (!strippedPath.startsWith('/')) {
    strippedPath = '/' + strippedPath;
  }
  if (strippedPath.length > 1 && strippedPath.endsWith('/')) {
    strippedPath = strippedPath.slice(0, -1);
  }
  if (strippedPath === '' || strippedPath === '/index') {
    strippedPath = '/';
  }

  if (targetLang === defaultLang) {
    return strippedPath;
  }

  if (strippedPath === '/') {
    return `/${targetLang}`;
  }

  return `/${targetLang}${strippedPath}`;
}
```

---

### B. Client-Side Interactive Widget Pattern (`WhatsAppWidget.astro`)

```astro
---
// Server-Side: Bind language to DOM root
const currentLang = getLanguageFromURL(Astro.url.pathname);
---

<div id="interactiveWidgetWrapper" data-lang={currentLang}>
  <!-- Widget Markup -->
</div>

<script>
  import { widgetTranslations } from '../i18n/translations/widget';
  
  function initWidget() {
    const wrapper = document.getElementById('interactiveWidgetWrapper');
    if (!wrapper) return;
    
    // Read language dynamically from DOM
    const userLang = (wrapper.dataset.lang || 'en');
    const dict = widgetTranslations[userLang] || widgetTranslations.en;
    
    // Dynamically apply localized strings
    const greetingEl = document.getElementById('widgetGreeting');
    if (greetingEl) greetingEl.innerText = dict.greeting;
  }
  
  document.addEventListener('DOMContentLoaded', initWidget);
</script>
```

---

### C. Date & Badge Text Wrapping Ergonomics (CSS)

```css
/* Invariant: Allow dynamic text to wrap naturally without breaking card layout */
.date-badge,
.meta-chip,
.category-pill,
.procurement-badge {
  display: inline-flex;
  align-items: center;
  width: auto;
  min-width: auto;
  white-space: normal;
  word-break: break-word;
  line-height: 1.3;
  padding: 0.35rem 0.65rem;
}
```

---

### D. RTL (Arabic / Hebrew) Layout Isolation

```css
/* Apply layout mirror strictly inside html[dir="rtl"] */
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

html[dir="rtl"] .hero-grid {
  direction: rtl;
}

html[dir="rtl"] .chevron-icon {
  transform: scaleX(-1);
}

html[dir="rtl"] .dropdown-menu {
  left: 0;
  right: auto;
}
```

---

## 4. Step-by-Step Multilingual Implementation SOP for Any Project

1. **Step 1: Define Supported Locales in `src/i18n/config.ts`**:
   - Register ISO codes (`en`, `es`, `de`, `fr`, `it`, `pt`, `ru`, `ja`, `ko`, `ar`).
   - Define writing direction (`ltr` vs `rtl`) and native names.
2. **Step 2: Establish Utility Layer in `src/i18n/utils.ts`**:
   - Implement `getLanguageFromURL`, `getLocalizedPath`, `useTranslations`, `getHreflangTags`.
3. **Step 3: Audit & Extract UI Strings**:
   - Scan headers, footers, search boxes, forms, tooltips, and badges for hardcoded English.
   - Centralize into `src/i18n/ui.ts`.
4. **Step 4: Create Localized Page Controllers (`src/pages/[lang]/`)**:
   - Set up `getStaticPaths()` returning `nonDefaultLanguages.map(lang => ({ params: { lang } }))`.
   - Wire schema dictionaries from `src/i18n/translations/pages/`.
5. **Step 5: Bind Client-Side Interactive Widgets**:
   - Attach `data-lang={currentLang}` to root widget elements.
   - Wire dynamic translation templates for popup bubbles and forms.
6. **Step 6: Run Rule & Invariant Audit**:
   - Verify 0 duplicate prefixes (`/ru/ar.html`).
   - Verify 0 text overflows on narrow viewports (360px–480px).
   - Verify 0 compilation errors across all static routes (`npm run build`).
