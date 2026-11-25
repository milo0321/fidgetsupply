#!/usr/bin/env node
/**
 * Closed-Loop Google Indexing API & Sitemap Submission Script (Zero-Dependency Native Node.js)
 * Submits sitemaps to GSC and publishes URL_UPDATED notifications to Google Indexing API.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CREDENTIALS_PATH = process.env.GSC_CREDENTIALS_PATH || path.join(__dirname, '../scratch/gsc_credentials.json');
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

function parseLimitArg(defaultLimit = 190) {
  const arg = process.argv.find((a) => a.startsWith('--limit='));
  if (!arg) return defaultLimit;
  const val = Number.parseInt(arg.split('=')[1], 10);
  return Number.isFinite(val) && val > 0 ? val : defaultLimit;
}

async function main() {
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
  console.log('=== 1. Re-Submitting Sitemaps to Google Search Console ===');
  const sitemapUrls = await discoverSitemaps();
  const sitemapResults = [];
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

  // 2. Build Priority URL Queue for Google Indexing API
  const tier1CommercialUrls = [
    `${BASE_URL}/promotional-fidget-toys`,
    `${BASE_URL}/private-label-oem`,
    `${BASE_URL}/bulk-adult-office-fidgets`,
    `${BASE_URL}/landed-cost-calculator`
  ];

  const newGuideSlugs = [
    'umburry-haptic-coin-vs-factory-oem-magnetic-clicker-coins',
    'magnus-aura-sand-style-vs-ready-mold-stainless-titanium-fidget-sliders',
    'magnetic-pill-capsule-fidget-sliders-wholesale-sourcing-guide',
    'promotional-branded-fidget-toys-trade-show-swag-buyer-guide',
    'bulk-fidget-toys-for-adults-office-wellness-wholesale-guide',
    'stainless-steel-vs-brass-heavy-metal-fidget-spinners-wholesale'
  ];
  const tier2NewGuideUrls = newGuideSlugs.map((s) => `${BASE_URL}/insights/${s}`);

  const collectionSlugs = [
    'magnetic-fidget-sliders',
    'mechanical-edc-fidgets',
    'metal-fidget-spinners-gyros',
    'edc-gourds-hand-pieces',
    'haptic-fidget-coins',
    'magnetic-fidget-rings',
    'custom-logo-metal-fidgets',
    'tuning-fork-fidget-sliders',
    'cnc-stainless-steel-pei-edc'
  ];

  const tier3UpdatedUrls = [
    `${BASE_URL}`,
    `${BASE_URL}/nl`,
    `${BASE_URL}/products`,
    `${BASE_URL}/insights`,
    `${BASE_URL}/custom-branding`,
    `${BASE_URL}/custom-packaging`,
    `${BASE_URL}/compliance-safety`,
    `${BASE_URL}/corporate-gifts`,
    `${BASE_URL}/wholesale-catalog`,
    `${BASE_URL}/sample-kit`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/no/insights/custom-eva-zipper-cases-tin-boxes-metal-fidget-packaging-guide`,
    ...collectionSlugs.map((s) => `${BASE_URL}/collections/${s}`)
  ];

  const topLocales = ['de', 'fr', 'nl', 'es', 'it', 'sv', 'no', 'fi', 'ja', 'ko'];
  const newCommercialPaths = [
    '/promotional-fidget-toys',
    '/private-label-oem',
    '/bulk-adult-office-fidgets',
    '/landed-cost-calculator'
  ];
  const tier4LocalizedUrls = [
    ...newCommercialPaths.flatMap((p) => topLocales.map((l) => `${BASE_URL}/${l}${p}`)),
    ...newGuideSlugs.flatMap((s) => topLocales.map((l) => `${BASE_URL}/${l}/insights/${s}`))
  ];

  const prodDir = path.join(__dirname, '../src/content/products');
  const allProdObjects = fs
    .readdirSync(prodDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(prodDir, f), 'utf8')))
    .sort((a, b) => a.rowId - b.rowId);

  const referencedSkuSet = new Set([
    'FS-013', 'FS-041', 'FS-075', 'FS-086', 'FS-144', 'FS-108',
    'FS-012', 'FS-019', 'FS-096', 'FS-099', 'FS-009', 'FS-059',
    'FS-006', 'FS-026', 'FS-125', 'FS-047', 'FS-135', 'FS-064',
    'FS-063', 'FS-072', 'FS-082', 'FS-142'
  ]);
  const referencedProds = allProdObjects.filter(
    (p) => p.sku && referencedSkuSet.has(String(p.sku).toUpperCase())
  );
  const flagshipProds = allProdObjects
    .filter((p) => (p.logoReady || p.tuningFork || p.cncExotic) && !(p.sku && referencedSkuSet.has(String(p.sku).toUpperCase())))
    .slice(0, 40);
  const priorityProductSlugs = [...referencedProds, ...flagshipProds].map((p) => p.slug);
  const productUrls = priorityProductSlugs.map((s) => `${BASE_URL}/products/${s}`);

  const insightsDir = path.join(__dirname, '../src/content/insights');
  const insightUrls = fs
    .readdirSync(insightsDir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => `${BASE_URL}/insights/${f.replace(/\.md$/, '')}`);

  const isRemainingProductsOnly = process.argv.includes('--remaining-products');
  const isBatch2 = process.argv.includes('--batch-2');

  let allUrls;
  if (isRemainingProductsOnly || isBatch2) {
    const allProdSlugs = allProdObjects.map((p) => p.slug);
    const submittedSet = new Set(priorityProductSlugs);
    const remainingSlugs = allProdSlugs.filter((s) => !submittedSet.has(s));
    const slice = isBatch2 ? remainingSlugs.slice(66) : remainingSlugs;
    allUrls = Array.from(new Set(slice.map((s) => `${BASE_URL}/products/${s}`)));
  } else {
    const combined = [
      ...tier1CommercialUrls,
      ...tier2NewGuideUrls,
      ...tier3UpdatedUrls,
      ...tier4LocalizedUrls,
      ...productUrls,
      ...insightUrls
    ];
    const limit = parseLimitArg(190);
    allUrls = Array.from(new Set(combined)).slice(0, limit);
  }

  const urlToTier = new Map();
  const assignTier = (urls, tierName) => {
    for (const u of urls) {
      if (!urlToTier.has(u)) urlToTier.set(u, tierName);
    }
  };
  assignTier(tier1CommercialUrls, 'tier1_new_commercial');
  assignTier(tier2NewGuideUrls, 'tier2_new_guides');
  assignTier(tier3UpdatedUrls, 'tier3_updated_core_collections');
  assignTier(tier4LocalizedUrls, 'tier4_new_pages_localized');
  assignTier([...productUrls, ...insightUrls], 'tier5_featured_products_and_insights');

  const tierSummary = {};
  for (const u of allUrls) {
    const tier = urlToTier.get(u) || 'other';
    tierSummary[tier] = (tierSummary[tier] || 0) + 1;
  }

  console.log(`\n=== 2. Submitting ${allUrls.length} URLs to Google Indexing API ===`);

  let successCount = 0;
  let errorCount = 0;
  let quotaHit = false;
  const results = [];

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
      results.push({ url, tier: urlToTier.get(url) || 'other', status: res.status, notifyTime });
      console.log(`[${i + 1}/${allUrls.length}] ✅ 200 URL_UPDATED -> ${url} (${notifyTime})`);
    } else {
      errorCount++;
      const msg = data?.error?.message || JSON.stringify(data);
      results.push({ url, tier: urlToTier.get(url) || 'other', status: res.status, error: msg });
      console.error(`[${i + 1}/${allUrls.length}] ❌ ${res.status} -> ${url}: ${msg}`);
      if (res.status === 429) {
        quotaHit = true;
        console.warn('⚠️ Quota limit reached (HTTP 429). Stopping batch.');
        break;
      }
    }
  }

  const reportPath = path.join(__dirname, '../scratch/google_indexing_submit_report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  const report = {
    timestamp: new Date().toISOString(),
    siteUrl: SITE_URL,
    sitemaps: sitemapResults,
    totalQueued: allUrls.length,
    successCount,
    errorCount,
    quotaHit,
    tierSummary,
    results
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n=== Summary: ${successCount} succeeded, ${errorCount} failed (report saved to scratch/google_indexing_submit_report.json) ===`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
