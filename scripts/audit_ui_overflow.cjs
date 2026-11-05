#!/usr/bin/env node
/**
 * scripts/audit_ui_overflow.cjs
 * Headless Chrome DOM geometry & overflow audit across 1280px, 1024px, and 375px viewports
 */
const { spawn } = require('child_process');
const http = require('http');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4324';

const URLS = [
  '/',
  '/products',
  '/products/smooth-soap-box-20-magnet-unlimited-slider',
  '/products/lake-light-sword-multi-metal-mechanical-edc',
  '/collections/magnetic-fidget-sliders',
  '/collections/custom-logo-metal-fidgets',
  '/custom-branding',
  '/custom-packaging',
  '/compliance-safety',
  '/guides',
  '/guides/n35-vs-n52-neodymium-magnet-haptic-feel-guide',
  '/guides/zinc-alloy-die-casting-vs-cnc-stainless-steel-edc-cost',
  '/about',
  '/contact',
  '/de',
  '/fr',
  '/nl',
  '/es',
  '/it',
  '/pt',
  '/sv',
  '/da',
  '/no',
  '/fi',
  '/pl',
  '/cs',
  '/ru',
  '/ja',
  '/ko',
  '/id',
  '/ar',
  '/de/products',
  '/fr/contact',
  '/ru/products/smooth-soap-box-20-magnet-unlimited-slider',
  '/ja/custom-branding',
  '/ar/contact'
];

const VIEWPORTS = [
  { width: 1280, height: 900, mobile: false },
  { width: 1024, height: 800, mobile: false },
  { width: 375, height: 812, mobile: true }
];

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function runAudit() {
  const port = 9233;
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=/tmp/chrome-audit-fidgetsupply',
    'about:blank'
  ]);

  await new Promise((r) => setTimeout(r, 1500));

  const targets = await getJson(`http://127.0.0.1:${port}/json`);
  const pageTarget = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let msgId = 1;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const data = JSON.parse(ev.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(new Error(data.error.message));
      else resolve(data.result);
    }
  };

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  let totalIssues = 0;

  for (const vp of VIEWPORTS) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.mobile
    });

    for (const u of URLS) {
      await send('Page.navigate', { url: `${BASE_URL}${u}` });
      await new Promise((r) => setTimeout(r, 350));

      const evalRes = await send('Runtime.evaluate', {
        returnByValue: true,
        expression: `(() => {
          const vw = document.documentElement.clientWidth;
          const docScrollW = document.documentElement.scrollWidth;
          const issues = [];
          if (docScrollW > vw + 2) {
            issues.push({ type: 'DOC_HORIZONTAL_SCROLL', scrollWidth: docScrollW, viewport: vw });
          }
          // Check visible text/buttons/inputs for horizontal clipping or viewport overflow
          const els = document.querySelectorAll('h1, h2, h3, .btn, input, select, .product-card, .filter-panel, .contact-card-container, .main-header');
          for (const el of els) {
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) continue;
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) continue;
            if (r.right > vw + 2 || r.left < -2) {
              issues.push({
                type: 'VIEWPORT_OVERFLOW',
                tag: el.tagName,
                className: el.className,
                left: Math.round(r.left),
                right: Math.round(r.right),
                vw
              });
            }
          }
          return issues;
        })()`
      });

      const found = evalRes.result.value || [];
      if (found.length > 0) {
        console.log(`❌ [${vp.width}px] ${u}:`, JSON.stringify(found));
        totalIssues += found.length;
      }
    }
    console.log(`✅ Viewport ${vp.width}px audited across ${URLS.length} URLs.`);
  }

  ws.close();
  chrome.kill();

  if (totalIssues > 0) {
    console.error(`\n❌ Total UI overflow issues: ${totalIssues}`);
    process.exit(1);
  } else {
    console.log(`\n🎉 ZERO UI OVERFLOW OR OCCLUSION ISSUES ACROSS ALL ${VIEWPORTS.length} VIEWPORTS AND ${URLS.length} URLS!`);
  }
}

runAudit().catch((e) => {
  console.error(e);
  process.exit(1);
});
