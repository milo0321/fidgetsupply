#!/usr/bin/env node
/**
 * Daily GSC + GA4 Live Telemetry & Diagnostics CLI (Zero-Dependency Native Node.js)
 * Pulls live metrics from Google Search Console (sc-domain:fidgetsupply.com)
 * and Google Analytics 4 (properties/562887745).
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CREDENTIALS_PATH = process.env.GSC_CREDENTIALS_PATH || path.join(__dirname, '../scratch/gsc_credentials.json');
const GSC_SITE = 'sc-domain:fidgetsupply.com';
const GA4_PROPERTY_ID = '562887745';

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
  const jwt = `${unsigned}.${base64UrlEncode(signer.sign(creds.private_key))}`;

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

async function ga4Report(token, body) {
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

async function main() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`Credentials file not found at ${CREDENTIALS_PATH}`);
    process.exit(1);
  }
  const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const token = await getAccessToken(creds, [
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/analytics.readonly'
  ]);

  console.log('==============================================================');
  console.log('📊 FIDGETSUPPLY.COM — LIVE GSC & GA4 TELEMETRY REPORT');
  console.log('==============================================================\n');

  // 1. GSC Sitemaps
  const smRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/sitemaps`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const smData = await smRes.json();
  console.log('--- 1. GSC Sitemaps Status ---');
  for (const s of smData.sitemap || []) {
    const submitted = (s.contents || []).reduce((acc, c) => acc + Number(c.submitted || 0), 0);
    console.log(`• ${s.path} | Last Downloaded: ${s.lastDownloaded} | Errors: ${s.errors} | Submitted URLs: ${submitted}`);
  }

  // 2. GSC Search Analytics (Last 7 Days, dataState: all)
  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
  const saRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions: ['date'],
      dataState: 'all'
    })
  });
  const saData = await saRes.json();
  console.log('\n--- 2. GSC Search Analytics (By Date, dataState: all) ---');
  for (const r of saData.rows || []) {
    console.log(`• ${r.keys[0]}: Clicks=${r.clicks}, Impressions=${r.impressions}, CTR=${(r.ctr * 100).toFixed(2)}%, Pos=${r.position.toFixed(1)}`);
  }

  // 3. GA4 Daily Trend
  const byDate = await ga4Report(token, {
    dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'date' }],
    metrics: [
      { name: 'activeUsers' },
      { name: 'newUsers' },
      { name: 'sessions' },
      { name: 'engagedSessions' },
      { name: 'engagementRate' },
      { name: 'averageSessionDuration' },
      { name: 'screenPageViews' },
      { name: 'eventCount' }
    ],
    orderBys: [{ dimension: { dimensionName: 'date' } }]
  });
  console.log('\n--- 3. GA4 Daily Trend (properties/562887745) ---');
  for (const r of byDate.rows || []) {
    const d = r.dimensionValues[0].value;
    const m = r.metricValues.map((x) => x.value);
    console.log(`• ${d}: Users=${m[0]} (New=${m[1]}), Sessions=${m[2]} (Engaged=${m[3]}, Rate=${(Number(m[4]) * 100).toFixed(1)}%), AvgDur=${Number(m[5]).toFixed(1)}s, Views=${m[6]}, Events=${m[7]}`);
  }

  // 4. GA4 Events Breakdown
  const byEvent = await ga4Report(token, {
    dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }]
  });
  console.log('\n--- 4. GA4 Event Funnel ---');
  for (const r of byEvent.rows || []) {
    console.log(`• ${r.dimensionValues[0].value}: ${r.metricValues[0].value} events (${r.metricValues[1].value} users)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
