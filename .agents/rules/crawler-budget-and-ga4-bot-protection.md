# Crawler Budget, Search/AI Bot Access, Form Integrity & GA4 Headless Bot Protection Invariants

To prevent combinatorial parameterized URL crawl explosions (e.g., 8,000+ `/[lang]/contact-us?product=...` URLs across 18 languages) and eliminate 0-second headless browser bot bounce pollution in Google Analytics 4 (GA4) **while guaranteeing 100% unobstructed access for legitimate Search & AI crawlers (`Googlebot`, `Bingbot`, `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) AND 100% frictionless B2B inquiry form submission (`/api/contact`)**, the codebase MUST enforce the following invariants at all times.

---

## 1. `robots.txt` RFC 9309 Inheritance & Search/AI Crawler Whitelisting

According to **RFC 9309 (Robots Exclusion Protocol)**, when a crawler matches a specific `User-agent:` group, it **completely ignores the global `User-agent: *` block**.

### Mandatory Invariants for `public/robots.txt`:
1. **Explicitly Welcome Legitimate Search & AI Crawlers on All Canonical Pages**:
   - `Googlebot`, `Bingbot`, `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, and `Amazonbot` MUST be granted full access to all canonical content:
     ```text
     Allow: /
     Allow: /llms.txt
     Allow: /llms-full.txt
     Allow: /contact-us$
     Allow: /*/contact-us$
     ```
2. **Block Only Redundant Query-Parameterized URLs Across All `User-agent` Blocks**:
   - Every `User-agent:` block MUST include the parameterized `Disallow` rules alongside `Allow: /` so crawlers do not waste crawl budget on 8,000+ pre-filled form query strings:
     ```text
     Disallow: /search?
     Disallow: /contact-us?*
     Disallow: /*/contact-us?*
     Disallow: /*?product=*
     Disallow: /*?subject=*
     Disallow: /*?category=*
     Disallow: /*?source=*
     Disallow: /*?utm_*
     Disallow: /*.html$
     ```
   - Never leave blank lines inside a single `User-agent:` record block.

---

## 2. Never Dynamically Mutate `<meta name="robots">` to `noindex` on Canonicalized Pages

1. **Preserve `index, follow` + Clean Canonical Consolidation**:
   - `src/layouts/Layout.astro` automatically strips query parameters (`?product=`, `?utm_`, etc.) via `toCleanCanonical()` and outputs `<link rel="canonical" href={cleanCanonical} />`.
   - **NEVER** use client-side JavaScript to rewrite `<meta name="robots">` to `noindex` when query parameters are present. When `Googlebot` renders a parameterized URL, seeing `noindex` alongside a `<link rel="canonical">` pointing to the clean page can cause Google Search Console to drop or flag the canonical page as *"Excluded by 'noindex' tag"*.
   - Always rely on `<link rel="canonical" href={cleanCanonical} />` + `robots.txt` parameter `Disallow` rules.

---

## 3. GA4 Headless Browser & Stealth Scraper Guard (`src/layouts/Layout.astro`)

On pages with background security challenges (such as Cloudflare Turnstile on `/contact-us`), headless Chrome scrapers waiting for `networkidle` are held open past the 5-second deferred script timer, causing `gtag.js` to fire false `page_view` hits with `0.0s` engagement duration and `100%` bounce rate.

### Mandatory Invariants for `src/layouts/Layout.astro`:
1. **Analytics-Only Bot Guard (Zero DOM, SEO, or Form Impact)**:
   - Before loading `googletagmanager.com/gtag/js`, detect automated crawlers and headless browsers (`navigator.webdriver === true`, explicit crawler User-Agent tokens such as `HeadlessChrome|GPTBot|ClaudeBot|Bytespider|AhrefsBot|SemrushBot`, or unencrypted `http:` scraper requests).
   - **Never use overly broad substrings** like bare `/Bot/i` without explicit bot names, as real mobile devices (e.g., `Cubot` phones) could match.
   - When `isBot` is true, define a safe no-op `window.gtag = function(){};` and return early so **only GA4 telemetry is skipped**, while the HTML DOM, content, Schema.org JSON-LD, and `ContactForm.astro` submission logic remain 100% intact.
2. **Human-Interaction Gating on `/contact-us` Routes**:
   - On `/contact-us` and `/[lang]/contact-us` (`isContactRoute`), `loadGtagScript()` MUST only fire upon a genuine human interaction event (`touchstart`, `scroll`, `pointerdown`, `mousemove`, `keydown`, `click`, `focusin`) and MUST NOT fire on the passive 5-second `setTimeout` timer alone.
   - This guarantees that even stealth headless Chrome scrapers (`webdriver: false`) sitting idle on `/[lang]/contact-us?product=...` never trigger false GA4 pageviews, while 100% of real buyers moving their mouse, scrolling, touching, or focusing a form input immediately load GA4 and record `generate_lead` conversions.

---

## 4. 100% Unobstructed Inquiry Form Pre-fill & Zero-False-Positive Anti-Spam Shield (`ContactForm.astro` & `/api/contact`)

1. **Zero Interference with `?product=` / `?category=` Pre-fill**:
   - `rel="nofollow"` on `<a href="/contact-us?product=..." rel="nofollow">` and `Disallow: /contact-us?*` in `robots.txt` apply ONLY to search/AI crawlers. Web browsers navigating via user clicks pass `?product=...` normally to `ContactForm.astro`, which pre-fills `productName` and `selectedProduct` without any restriction.
2. **Decoupled Form Submission Pipeline**:
   - Form submission in `src/components/ContactForm.astro` (`XMLHttpRequest` POST to `/api/contact`) and server-side email dispatch in `src/pages/api/contact.ts` MUST NEVER depend on `gtag.js` being loaded or active. `window.gtag` calls must always be guarded by `if (typeof window.gtag === 'function')`.
3. **Zero-False-Positive Anti-Spam Shield in `src/pages/api/contact.ts` (Silent Drop)**:
   - **Iron Rule**: NEVER block or false-positive a genuine B2B customer inquiry (even if they use browser autofill, refresh the page and submit via `restoreDraft()` in <1s, or have a cached tab). Only silent-drop 100% deterministic bot signatures:
     - **Layer A (Autofill-Safe Honeypot `rx_bot_trap_hp9`)**: Hidden input MUST use a non-semantic name (`rx_bot_trap_hp9`) with `autocomplete="new-password" data-lpignore="true" data-1p-ignore="true"` so Chrome/Safari/1Password autofill never touches it, and only triggers when `!hasTurnstileToken && !fileAttachment`.
     - **Layer B (Direct Raw HTTP POST Bypass Check)**: Only triggers when **ALL 5** browser telemetry signals are simultaneously missing (`!pageUrl.startsWith('http') && screenResolution === 'N/A' && timeOnPageSeconds === 'N/A' && !clientLocalTime && !rxJsProof && !fileAttachment`).
     - **Layer C (XRumer / GSA Identical Bot Token)**: Only triggers when `fullName === companyName === effectiveProduct` (all 3 identical) OR `fullName` matches XRumer `word_randomCase` (`/^[a-zA-Z0-9]+_[a-zA-Z0-9]{3,}$/`) with `fullName === effectiveProduct`.
     - **Layer D (BBCode & Gambling Payload Filter)**: Rejects explicit `[url=...]`, `[/url]`, `<a href=`, and Russian/English casino/freebet spam keywords.
   - All blocked spam submissions return HTTP 200 `{ success: true, emailDispatched: false }` without calling the Resend API.

---

## 5. Mandatory `rel="nofollow"` Only on Parameterized & Editorial `/contact-us` Links

1. **Keep Primary Navigation Clean**:
   - Clean `/contact-us` and `/[lang]/contact-us` links in `Header.astro`, `Footer.astro`, and Sitemaps (`sitemap-0.xml`) MUST remain **dofollow** (`index, follow`) so Google and AI engines index the company's official contact desk, email, WhatsApp, address, and FAQ schema.
2. **100% `rel="nofollow"` on Parameterized & Blog Body Contact Links**:
   - Every parameterized `<a href="...contact-us?...">` link across `src/` and every `/contact-us` link inside `src/content/insights/*.md` MUST include `rel="nofollow"`.

---

## 6. Deterministic Verification (`Rule 21`)

Always run `node scripts/verify_all_rules.cjs` before committing. `auditRule21()` deterministically verifies `public/robots.txt`, `src/layouts/Layout.astro`, and all `/contact-us` links across `src/` to guarantee zero regression.
