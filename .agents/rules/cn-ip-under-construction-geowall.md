# Mainland China (`CN`) IP Friendly "Under Construction" Geo-Wall Invariants

To protect product designs and catalog intelligence from domestic competitors in Mainland China while presenting a polite, non-confrontational experience and preserving 100% global SEO/GEO search indexing:

---

## 1. Friendly "Website Under Construction" Response (Never Harsh `403 Blocked`)
- **Edge Interception (`src/worker.ts`)**: When Cloudflare detects a visitor from Mainland China (`request.cf.country === 'CN'`, excluding Hong Kong `HK`, Macau `MO`, and Taiwan `TW`), the Worker MUST NOT return a harsh `403 Forbidden / Access Denied / Blocked` error message.
- **Friendly Maintenance Page**: Serve the bilingual **"Website Under Construction / 网站正在建设与系统升级中"** HTML page directly from `src/worker.ts`:
  - HTTP Status: `200 OK` (with `X-Robots-Tag: noindex, nofollow` and `Cache-Control: no-store, no-cache, must-revalidate`).
  - Direct Preview Route: Visiting `/under-construction` renders the exact same friendly maintenance page from any IP for design inspection.

---

## 2. Global Search Engine & AI Crawler Whitelist
- **Zero SEO/GEO Impact**: The Worker MUST always allow verified search engine and AI crawlers to bypass the geo-wall (`isSearchOrAiBot` regex matching `googlebot`, `bingbot`, `yandex`, `duckduckbot`, `baiduspider`, `slurp`, `applebot`, `gptbot`, `chatgpt-user`, `oai-searchbot`, `claudebot`, `anthropic-ai`, `perplexitybot`, `google-extended`, `ahrefsbot`, `semrushbot`, `mj12bot`, `dotbot`, `facebookexternalhit`, `linkedinbot`, `twitterbot`, `whatsapp`, `telegrambot`, `discordbot`).

---

## 3. Owner Preview Unlock & Re-Lock Backdoor
- **Unlock (`?preview_unlock=fs2026`)**: Appending `?preview_unlock=fs2026` to any URL sets a 30-day `HttpOnly; Secure; SameSite=Lax` cookie (`fs_preview_unlock=1`) and redirects to the clean URL so the site owner/developer can browse the full website even when on a Mainland China network.
- **Re-Lock (`?preview_lock=1`)**: Appending `?preview_lock=1` clears the `fs_preview_unlock` cookie (`Max-Age=0`) and redirects to `/under-construction` to test the blocked state.
