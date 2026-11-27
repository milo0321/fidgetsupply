#!/usr/bin/env node
/**
 * scripts/heal_gsc_unindexed.cjs
 * Smart GSC Index Healer:
 * 1. Uses URL Inspection API (2,000/day read quota) to check which priority URLs are NOT yet indexed (verdict !== 'PASS').
 * 2. Spends 100% of the precious 200/day Google Indexing API write quota EXCLUSIVELY on unindexed URLs!
 * 3. Resubmits sitemap-index.xml to GSC Sitemaps API.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const sa = JSON.parse(fs.readFileSync(path.join(ROOT, 'scratch/gsc_credentials.json'), 'utf8'));

async function getToken() {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const claim = Buffer.from(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    })
  ).toString('base64url');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${claim}`);
  const signature = sign.sign(sa.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${header}.${claim}.${signature}`
  });
  return (await res.json()).access_token;
}

async function inspectUrl(token, inspectionUrl) {
  const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inspectionUrl, siteUrl: 'sc-domain:fidgetsupply.com', languageCode: 'en-US' })
  });
  const data = await res.json();
  const idx = data.inspectionResult?.indexStatusResult || {};
  return {
    url: inspectionUrl,
    verdict: idx.verdict || 'UNKNOWN',
    state: idx.coverageState || 'UNKNOWN',
    crawl: idx.lastCrawlTime || 'none'
  };
}

async function main() {
  const token = await getToken();
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  // 1. Resubmit canonical Sitemap index only
  for (const sm of ['https://fidgetsupply.com/sitemap-index.xml']) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Afidgetsupply.com/sitemaps/${encodeURIComponent(sm)}`, {
      method: 'PUT',
      headers
    });
    console.log(`[Sitemap Resubmit] ${sm} -> HTTP ${r.status}`);
  }

  // 2. Build priority URL queue (All 140 EN Products + All 44 EN Guides + All 9 EN Collections + 18 Homepages)
  const prodSlugs = fs
    .readdirSync(path.join(ROOT, 'src/content/products'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'src/content/products', f), 'utf8')).slug);
  const guideSlugs = fs
    .readdirSync(path.join(ROOT, 'src/content/insights'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));

  const priorityUrls = [
    ...guideSlugs.map((s) => `https://fidgetsupply.com/insights/${s}`),
    ...prodSlugs.map((s) => `https://fidgetsupply.com/products/${s}`)
  ];

  console.log(`Inspecting ${priorityUrls.length} core English Guide & Product URLs via GSC URL Inspection API...`);
  const unindexed = [];
  const summary = {};

  for (let i = 0; i < priorityUrls.length; i += 8) {
    const batch = priorityUrls.slice(i, i + 8);
    const results = await Promise.all(batch.map((u) => inspectUrl(token, u)));
    for (const r of results) {
      summary[r.state] = (summary[r.state] || 0) + 1;
      if (r.verdict !== 'PASS') {
        unindexed.push(r);
      }
    }
  }

  console.log('\n=== CORE ENGLISH 184 URLS (44 GUIDES + 140 PRODUCTS) COVERAGE SUMMARY ===');
  console.log(summary);
  console.log(`Total Unindexed Core English URLs: ${unindexed.length} / ${priorityUrls.length}`);

  fs.writeFileSync(path.join(ROOT, 'scratch/unindexed_priority_urls.json'), JSON.stringify({ summary, unindexed }, null, 2));

  // 3. Submit unindexed URLs to Google Indexing API until daily quota is reached
  let submittedOk = 0;
  for (const item of unindexed) {
    const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers,
      body: JSON.stringify({ url: item.url, type: 'URL_UPDATED' })
    });
    if (res.status === 200) {
      submittedOk++;
      console.log(`✅ [Healed -> Indexing API] ${item.url} (was: ${item.state})`);
    } else {
      console.log(`⏸️ [Indexing API Quota Reached at ${submittedOk} URLs] Next batch ready after 16:00 GMT+8 reset.`);
      break;
    }
  }
}

main().catch(console.error);
