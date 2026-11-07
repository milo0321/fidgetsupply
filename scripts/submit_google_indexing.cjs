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
  for (const sm of [`${BASE_URL}/sitemap-index.xml`, `${BASE_URL}/sitemap-0.xml`]) {
    const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(sm)}`;
    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok || res.status === 204) {
      console.log(`✅ Submitted sitemap (${res.status}): ${sm}`);
    } else {
      const txt = await res.text();
      console.error(`❌ Failed to submit sitemap ${sm} (${res.status}): ${txt}`);
    }
  }

  // 2. Build Priority URL Queue for Google Indexing API
  const coreUrls = [
    `${BASE_URL}/`,
    `${BASE_URL}/products`,
    `${BASE_URL}/insights`,
    `${BASE_URL}/custom-branding`,
    `${BASE_URL}/custom-packaging`,
    `${BASE_URL}/compliance-safety`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`
  ];

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
  const collectionUrls = collectionSlugs.map((s) => `${BASE_URL}/collections/${s}`);

  const insightsDir = path.join(__dirname, '../src/content/insights');
  const insightUrls = fs
    .readdirSync(insightsDir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => `${BASE_URL}/insights/${f.replace(/\.md$/, '')}`);

  const priorityProductSlugs = [
    'poker-king-magnetic-slider',
    '304ss-akq-triple-layer-24-magnet-slider',
    '10-magnet-textured-armor-slider',
    '12-constellation-zodiac-haptic-coin',
    '12-magnet-planetary-gear-linkage-spinner',
    '12-magnet-push-button-haptic-slider',
    '24-magnet-mechanical-track-slider',
    '30-magnet-dual-surface-track-slider',
    'soap-box-smooth-20-magnet-unlimited-slider',
    'minimalist-smooth-6063-aluminum-slider',
    'chocolate-grid-26-magnet-unlimited-slider',
    'bottle-opener-10-magnet-utility-slider',
    '304ss-minimalist-smooth-haptic-coin',
    'knurled-brass-stainless-desktop-gyro',
    'lake-light-sword-tuning-fork-slider',
    'compact-20-magnet-acoustic-tuning-fork-slider',
    'resonance-cnc-stainless-tuning-fork-spinner',
    'pei-ultem-amber-edc-hand-gourd',
    'cnc-gourd-twist-storage-stash-edc',
    'chime-acoustic-bell-edc-gourd',
    'carbon-fiber-brass-16-magnet-slider',
    'aluminum-brass-16-magnet-spinner-ring'
  ];
  const productUrls = priorityProductSlugs.map((s) => `${BASE_URL}/products/${s}`);

  const isRemainingProductsOnly = process.argv.includes('--remaining-products');
  const isBatch2 = process.argv.includes('--batch-2');
  let allUrls = [...coreUrls, ...collectionUrls, ...insightUrls, ...productUrls];

  if (isRemainingProductsOnly || isBatch2) {
    const prodDir = path.join(__dirname, '../src/content/products');
    const allProdSlugs = fs
      .readdirSync(prodDir)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .map((f) => f.replace(/\.json$/, ''));
    const submittedSet = new Set(priorityProductSlugs);
    const remainingSlugs = allProdSlugs.filter((s) => !submittedSet.has(s));
    const slice = isBatch2 ? remainingSlugs.slice(66) : remainingSlugs;
    allUrls = slice.map((s) => `${BASE_URL}/products/${s}`);
  }

  console.log(`\n=== 2. Submitting ${allUrls.length} URLs to Google Indexing API ===`);

  let successCount = 0;
  let errorCount = 0;

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
      console.log(`[${i + 1}/${allUrls.length}] ✅ 200 URL_UPDATED -> ${url} (${notifyTime})`);
    } else {
      errorCount++;
      const msg = data?.error?.message || JSON.stringify(data);
      console.error(`[${i + 1}/${allUrls.length}] ❌ ${res.status} -> ${url}: ${msg}`);
      if (res.status === 429) {
        console.warn('⚠️ Quota limit reached (HTTP 429). Stopping batch.');
        break;
      }
    }
  }

  console.log(`\n=== Summary: ${successCount} succeeded, ${errorCount} failed ===`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
