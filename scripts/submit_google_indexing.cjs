#!/usr/bin/env node
/**
 * Closed-Loop Google Indexing API & Sitemap Submission Script
 * Submits sitemaps to GSC and publishes URL_UPDATED notifications to Google Indexing API.
 */
const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const CREDENTIALS_PATH = process.env.GSC_CREDENTIALS_PATH || path.join(__dirname, '../scratch/gsc_credentials.json');
const SITE_URL = 'sc-domain:fidgetsupply.com';
const BASE_URL = 'https://fidgetsupply.com';

async function main() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`Credentials file not found at ${CREDENTIALS_PATH}`);
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: [
      'https://www.googleapis.com/auth/indexing',
      'https://www.googleapis.com/auth/webmasters'
    ]
  });

  const authClient = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

  // 1. Re-submit Sitemaps to GSC
  console.log('=== 1. Re-Submitting Sitemaps to Google Search Console ===');
  for (const sm of [`${BASE_URL}/sitemap-index.xml`, `${BASE_URL}/sitemap-0.xml`]) {
    try {
      await searchconsole.sitemaps.submit({
        siteUrl: SITE_URL,
        feedpath: sm
      });
      console.log(`✅ Submitted sitemap: ${sm}`);
    } catch (err) {
      console.error(`❌ Failed to submit sitemap ${sm}:`, err.message);
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
    // Crawled - currently not indexed (updated meta & internal mesh)
    'poker-king-magnetic-slider',
    '304ss-akq-triple-layer-24-magnet-slider',
    // Unindexed / Flagship SKUs from GSC inspection & top conversion hubs
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

  const allUrls = [...coreUrls, ...collectionUrls, ...insightUrls, ...productUrls];
  console.log(`\n=== 2. Submitting ${allUrls.length} Priority URLs to Google Indexing API ===`);

  let successCount = 0;
  let errorCount = 0;
  const results = [];

  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    try {
      const res = await authClient.request({
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        data: {
          url,
          type: 'URL_UPDATED'
        }
      });
      successCount++;
      const notifyTime = res.data?.urlNotificationMetadata?.latestUpdate?.notifyTime || 'OK';
      console.log(`[${i + 1}/${allUrls.length}] ✅ 200 URL_UPDATED -> ${url} (${notifyTime})`);
      results.push({ url, status: 200, notifyTime });
    } catch (err) {
      errorCount++;
      const status = err.response?.status || 'ERR';
      const msg = err.response?.data?.error?.message || err.message;
      console.error(`[${i + 1}/${allUrls.length}] ❌ ${status} -> ${url}: ${msg}`);
      results.push({ url, status, error: msg });
      if (status === 429) {
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
