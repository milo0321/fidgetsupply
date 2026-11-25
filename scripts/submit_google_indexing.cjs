#!/usr/bin/env node
/**
 * Delta-Only Google Indexing API & Sitemap Submission Script (Zero-Dependency Native Node.js)
 * Strictly submits ONLY newly added and modified page URLs (from git diff or explicit --urls / --urls-file).
 * Never pads the 200/day Google Indexing API quota with untouched historical pages.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const CREDENTIALS_PATH = process.env.GSC_CREDENTIALS_PATH || path.join(ROOT_DIR, 'scratch/gsc_credentials.json');
const STATE_PATH = path.join(ROOT_DIR, 'scratch/google_indexing_state.json');
const REPORT_PATH = path.join(ROOT_DIR, 'scratch/google_indexing_submit_report.json');
const SITE_URL = 'sc-domain:fidgetsupply.com';
const BASE_URL = 'https://fidgetsupply.com';

function base64UrlEncode(input) {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input, 'utf8');
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken(creds, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: creds.client_email,
    scope: scopes.join(' '),
    aud: creds.token_uri || 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };
  const unsigned = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(payload))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsigned);
  const signature = signer.sign(creds.private_key);
  const jwt = `${unsigned}.${base64UrlEncode(signature)}`;

  const res = await fetch(creds.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Failed to obtain access token: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function discoverSitemaps() {
  const sitemaps = new Set([`${BASE_URL}/sitemap-index.xml`]);
  try {
    const res = await fetch(`${BASE_URL}/sitemap-index.xml`);
    if (res.ok) {
      const xml = await res.text();
      const matches = [...xml.matchAll(/<loc>\s*(https?:\/\/[^<\s]+)\s*<\/loc>/gi)];
      for (const m of matches) {
        if (m[1]) sitemaps.add(m[1].trim());
      }
    }
  } catch {
    // Fallback below if fetch fails
  }
  if (sitemaps.size === 1) {
    sitemaps.add(`${BASE_URL}/sitemap-0.xml`);
  }
  return Array.from(sitemaps);
}

function getArgValue(prefix) {
  const arg = process.argv.find((a) => a.startsWith(`${prefix}=`));
  return arg ? arg.slice(prefix.length + 1).trim() : null;
}

function parseLimitArg(defaultLimit = 200) {
  const raw = getArgValue('--limit');
  if (!raw) return defaultLimit;
  const val = Number.parseInt(raw, 10);
  return Number.isFinite(val) && val > 0 ? val : defaultLimit;
}

function normalizeUrl(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed.replace(/\/+$/, '');
  }
  const cleanPath = trimmed.replace(/^\/+/, '').replace(/\/+$/, '');
  return cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
}

function runGit(args) {
  return execFileSync('git', args, { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
}

function isValidGitRev(rev) {
  if (!rev) return false;
  try {
    execFileSync('git', ['rev-parse', '--verify', `${rev}^{commit}`], { cwd: ROOT_DIR, stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function resolveDefaultSinceRef() {
  if (fs.existsSync(STATE_PATH)) {
    try {
      const state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
      if (state.lastSubmittedCommit && isValidGitRev(state.lastSubmittedCommit)) {
        return state.lastSubmittedCommit;
      }
    } catch {
      // Ignore corrupt state file and fall back
    }
  }
  return isValidGitRev('HEAD~1') ? 'HEAD~1' : 'HEAD';
}

function resolveGitDiffUrls(sinceRef) {
  const diffOutput = runGit(['diff', '--name-status', '-z', `${sinceRef}..HEAD`]);
  const tokens = diffOutput.split('\0').filter((t) => t.length > 0);
  const deltaUrls = [];
  const sharedChanges = [];

  for (let i = 0; i < tokens.length; ) {
    const status = tokens[i++];
    if (!status) break;

    let filePath = '';
    if (status.startsWith('R') || status.startsWith('C')) {
      i++; // skip old path
      filePath = tokens[i++] || '';
    } else {
      filePath = tokens[i++] || '';
    }

    if (!filePath || status.startsWith('D')) continue;

    // Concrete insights markdown -> /insights/<slug>
    const insightMatch = filePath.match(/^src\/content\/insights\/([^/]+)\.md$/);
    if (insightMatch) {
      deltaUrls.push(`${BASE_URL}/insights/${insightMatch[1]}`);
      continue;
    }

    // Concrete product JSON -> /products/<slug>
    const productMatch = filePath.match(/^src\/content\/products\/([^/]+)\.json$/);
    if (productMatch) {
      const fullProdPath = path.join(ROOT_DIR, filePath);
      let slug = productMatch[1];
      if (fs.existsSync(fullProdPath)) {
        try {
          const data = JSON.parse(fs.readFileSync(fullProdPath, 'utf8'));
          if (data && data.slug) slug = String(data.slug).trim();
        } catch {
          // Fall back to filename
        }
      }
      deltaUrls.push(`${BASE_URL}/products/${slug}`);
      continue;
    }

    // Root index page -> https://fidgetsupply.com
    if (filePath === 'src/pages/index.astro') {
      deltaUrls.push(BASE_URL);
      continue;
    }

    // Static concrete Astro pages -> /<dir> or /<name> (skipping dynamic [param] and api/)
    if (filePath.startsWith('src/pages/') && filePath.endsWith('.astro')) {
      const rel = filePath.slice('src/pages/'.length);
      if (rel.includes('[') || rel.includes(']') || rel.startsWith('api/') || rel === '404.astro') {
        if (rel.includes('[') || rel.includes(']')) {
          sharedChanges.push(filePath);
        }
        continue;
      }
      if (rel.endsWith('/index.astro')) {
        const dirRoute = rel.slice(0, -'/index.astro'.length);
        deltaUrls.push(dirRoute ? `${BASE_URL}/${dirRoute}` : BASE_URL);
      } else {
        const pageRoute = rel.slice(0, -'.astro'.length);
        deltaUrls.push(`${BASE_URL}/${pageRoute}`);
      }
      continue;
    }

    // Track shared/template files without auto-expanding across all 3,900+ routes
    if (
      filePath.startsWith('src/components/') ||
      filePath.startsWith('src/layouts/') ||
      filePath.startsWith('src/styles/') ||
      filePath.startsWith('src/i18n/')
    ) {
      sharedChanges.push(filePath);
    }
  }

  return {
    deltaUrls: Array.from(new Set(deltaUrls)),
    sharedChanges: Array.from(new Set(sharedChanges))
  };
}

function expandLocales(urls, locales) {
  if (!locales.length) return urls;
  const expanded = [...urls];
  for (const rawUrl of urls) {
    let pathname = '/';
    try {
      pathname = new URL(rawUrl).pathname;
    } catch {
      continue;
    }
    for (const loc of locales) {
      const cleanLoc = loc.trim().toLowerCase();
      if (!cleanLoc || cleanLoc === 'en') continue;
      if (pathname === `/${cleanLoc}` || pathname.startsWith(`/${cleanLoc}/`)) continue;
      expanded.push(`${BASE_URL}/${cleanLoc}${pathname === '/' ? '' : pathname}`);
    }
  }
  return Array.from(new Set(expanded));
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const skipSitemap = process.argv.includes('--skip-sitemap');
  const explicitUrlsArg = getArgValue('--urls');
  const urlsFileArg = getArgValue('--urls-file');
  const sinceArg = getArgValue('--since');
  const localesArg = getArgValue('--locales');
  const locales = localesArg ? localesArg.split(',').map((l) => l.trim()).filter(Boolean) : [];
  const limit = parseLimitArg(200);

  let mode = 'git-diff';
  let sinceRef = null;
  let sharedChanges = [];
  let candidateUrls = [];

  if (explicitUrlsArg || urlsFileArg) {
    mode = 'explicit';
    const rawItems = [];
    if (explicitUrlsArg) {
      rawItems.push(...explicitUrlsArg.split(','));
    }
    if (urlsFileArg) {
      const resolvedFile = path.isAbsolute(urlsFileArg) ? urlsFileArg : path.join(ROOT_DIR, urlsFileArg);
      if (!fs.existsSync(resolvedFile)) {
        console.error(`URLs file not found: ${resolvedFile}`);
        process.exit(1);
      }
      const lines = fs.readFileSync(resolvedFile, 'utf8').split(/\r?\n/);
      for (const line of lines) {
        const clean = line.trim();
        if (clean && !clean.startsWith('#')) rawItems.push(clean);
      }
    }
    candidateUrls = Array.from(new Set(rawItems.map(normalizeUrl).filter(Boolean)));
  } else {
    sinceRef = sinceArg || resolveDefaultSinceRef();
    if (!isValidGitRev(sinceRef)) {
      console.error(`Invalid git revision for --since: ${sinceRef}`);
      process.exit(1);
    }
    const diffRes = resolveGitDiffUrls(sinceRef);
    candidateUrls = diffRes.deltaUrls;
    sharedChanges = diffRes.sharedChanges;
  }

  const allUrls = expandLocales(candidateUrls, locales).slice(0, limit);

  if (dryRun) {
    console.log(`=== Dry Run: Delta-Only Google Indexing Queue (${mode}${sinceRef ? `, since ${sinceRef}..HEAD` : ''}) ===`);
    console.log(`Resolved ${allUrls.length} newly added / modified URL(s) (limit=${limit}):`);
    for (let i = 0; i < allUrls.length; i++) {
      console.log(`  [${i + 1}] ${allUrls[i]}`);
    }
    if (sharedChanges.length > 0) {
      console.log(`\nShared/template files modified (${sharedChanges.length}, NOT auto-expanded across all routes):`);
      for (const f of sharedChanges) {
        console.log(`  - ${f}`);
      }
      console.log('Hint: Rely on GSC Sitemap + IndexNow for sitewide updates, or pass --urls=... to target specific localized/collection URLs.');
    }
    return;
  }

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`Credentials file not found at ${CREDENTIALS_PATH}`);
    process.exit(1);
  }

  const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const token = await getAccessToken(creds, [
    'https://www.googleapis.com/auth/indexing',
    'https://www.googleapis.com/auth/webmasters'
  ]);

  // 1. Re-submit Sitemaps to GSC
  const sitemapResults = [];
  if (!skipSitemap) {
    console.log('=== 1. Re-Submitting Sitemaps to Google Search Console ===');
    const sitemapUrls = await discoverSitemaps();
    for (const sm of sitemapUrls) {
      const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(sm)}`;
      const res = await fetch(endpoint, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok || res.status === 204) {
        console.log(`✅ Submitted sitemap (${res.status}): ${sm}`);
        sitemapResults.push({ sitemap: sm, status: res.status, ok: true });
      } else {
        const txt = await res.text();
        console.error(`❌ Failed to submit sitemap ${sm} (${res.status}): ${txt}`);
        sitemapResults.push({ sitemap: sm, status: res.status, ok: false, error: txt });
      }
    }
  }

  // 2. Submit ONLY newly added / modified URLs to Google Indexing API
  console.log(`\n=== 2. Submitting ${allUrls.length} Delta URL(s) to Google Indexing API (${mode}${sinceRef ? `: ${sinceRef}..HEAD` : ''}) ===`);
  if (sharedChanges.length > 0) {
    console.log(`Note: ${sharedChanges.length} shared/template file(s) changed; skipped auto-expansion to protect daily quota.`);
  }

  let successCount = 0;
  let errorCount = 0;
  let quotaHit = false;
  const results = [];

  if (allUrls.length === 0) {
    console.log('No newly added or modified page URLs detected — 0 Indexing API requests sent.');
  } else {
    for (let i = 0; i < allUrls.length; i++) {
      const url = allUrls[i];
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url,
          type: 'URL_UPDATED'
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        successCount++;
        const notifyTime = data?.urlNotificationMetadata?.latestUpdate?.notifyTime || 'OK';
        results.push({ url, status: res.status, notifyTime });
        console.log(`[${i + 1}/${allUrls.length}] ✅ 200 URL_UPDATED -> ${url} (${notifyTime})`);
      } else {
        errorCount++;
        const msg = data?.error?.message || JSON.stringify(data);
        results.push({ url, status: res.status, error: msg });
        console.error(`[${i + 1}/${allUrls.length}] ❌ ${res.status} -> ${url}: ${msg}`);
        if (res.status === 429) {
          quotaHit = true;
          console.warn('⚠️ Quota limit reached (HTTP 429). Stopping batch.');
          break;
        }
      }
    }
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  const report = {
    timestamp: new Date().toISOString(),
    siteUrl: SITE_URL,
    mode,
    sinceRef,
    sitemaps: sitemapResults,
    totalQueued: allUrls.length,
    successCount,
    errorCount,
    quotaHit,
    sharedChanges,
    results
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  if (errorCount === 0 && !quotaHit && allUrls.length > 0) {
    const currentHead = runGit(['rev-parse', 'HEAD']);
    const state = {
      lastSubmittedCommit: currentHead,
      lastSubmittedAt: new Date().toISOString(),
      lastSubmittedCount: successCount
    };
    fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  }

  console.log(`\n=== Summary: ${successCount} succeeded, ${errorCount} failed (report saved to scratch/google_indexing_submit_report.json) ===`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
