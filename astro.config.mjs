import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const BUILD_NOW_ISO = new Date().toISOString();

function loadGitMtimeMap() {
  const map = new Map();
  try {
    const out = execSync('git log --format="COMMIT:%cI" --name-only', {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024
    });
    let currentDate = '';
    for (const rawLine of out.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith('COMMIT:')) {
        currentDate = line.slice(7).trim();
      } else if (currentDate && !map.has(line)) {
        map.set(line, currentDate);
      }
    }
  } catch {
    // Fallback to fs.statSync when git history is unavailable
  }
  return map;
}

const gitMtimeMap = loadGitMtimeMap();

function getFileMod(relPath) {
  const norm = relPath.replace(/\\/g, '/');
  if (gitMtimeMap.has(norm)) {
    return new Date(gitMtimeMap.get(norm)).toISOString();
  }
  const abs = path.join(ROOT, norm);
  if (fs.existsSync(abs)) {
    return fs.statSync(abs).mtime.toISOString();
  }
  return null;
}

function maxIso(...dates) {
  let bestMs = 0;
  let bestIso = BUILD_NOW_ISO;
  for (const d of dates) {
    if (!d) continue;
    const ms = Date.parse(d);
    if (!Number.isNaN(ms) && ms > bestMs) {
      bestMs = ms;
      bestIso = new Date(ms).toISOString();
    }
  }
  return bestMs > 0 ? bestIso : BUILD_NOW_ISO;
}

const prodLastMod = new Map();
const prodDir = path.join(ROOT, 'src/content/products');
if (fs.existsSync(prodDir)) {
  for (const f of fs.readdirSync(prodDir)) {
    if (!f.endsWith('.json')) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(prodDir, f), 'utf8'));
      if (data?.slug) {
        prodLastMod.set(data.slug, getFileMod(`src/content/products/${f}`) || BUILD_NOW_ISO);
      }
    } catch {}
  }
}

const insightLastMod = new Map();
let latestInsightMod = null;
const insightDir = path.join(ROOT, 'src/content/insights');
if (fs.existsSync(insightDir)) {
  for (const f of fs.readdirSync(insightDir)) {
    if (!f.endsWith('.md')) continue;
    const slug = f.replace(/\.md$/, '');
    const mod = getFileMod(`src/content/insights/${f}`) || BUILD_NOW_ISO;
    insightLastMod.set(slug, mod);
    latestInsightMod = latestInsightMod ? maxIso(latestInsightMod, mod) : mod;
  }
}

const LOCALE_PREFIX_RE = /^\/(de|fr|sv|da|no|fi|cs|es|it|nl|pl|pt|ru|ja|ko|id|ar)(?=\/|$)/;

function routeLastMod(urlStr) {
  let pathname = '/';
  try {
    pathname = new URL(urlStr).pathname || '/';
  } catch {}
  const cleanPath = (pathname.replace(LOCALE_PREFIX_RE, '') || '/').replace(/\/+$/, '') || '/';
  if (cleanPath === '/') {
    return getFileMod('src/pages/index.astro') || BUILD_NOW_ISO;
  }
  if (cleanPath === '/products') {
    return getFileMod('src/pages/products/index.astro') || BUILD_NOW_ISO;
  }
  if (cleanPath.startsWith('/products/')) {
    const slug = cleanPath.slice('/products/'.length);
    return prodLastMod.get(slug) || getFileMod('src/pages/products/[slug].astro') || BUILD_NOW_ISO;
  }
  if (cleanPath === '/insights') {
    return maxIso(getFileMod('src/pages/insights/index.astro'), latestInsightMod);
  }
  if (cleanPath.startsWith('/insights/')) {
    const slug = cleanPath.slice('/insights/'.length);
    return insightLastMod.get(slug) || getFileMod('src/pages/insights/[slug].astro') || BUILD_NOW_ISO;
  }
  if (cleanPath.startsWith('/collections/')) {
    return maxIso(getFileMod('src/data/collections.ts'), getFileMod('src/pages/collections/[slug].astro'));
  }
  return (
    getFileMod(`src/pages${cleanPath}/index.astro`) ||
    getFileMod(`src/pages${cleanPath}.astro`) ||
    BUILD_NOW_ISO
  );
}

export default defineConfig({
  site: 'https://fidgetsupply.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'sv', 'da', 'no', 'fi', 'cs', 'es', 'it', 'nl', 'pl', 'pt', 'ru', 'ja', 'ko', 'id', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
      serialize(item) {
        if (item.url.endsWith('/')) {
          item.url = item.url.replace(/\/+$/, '');
        }
        const url = item.url;
        item.lastmod = routeLastMod(url);
        if (url === 'https://fidgetsupply.com' || /^https:\/\/fidgetsupply\.com\/[a-z]{2}$/.test(url)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('/collections/') || url.endsWith('/products') || url.endsWith('/insights')) {
          item.priority = 0.95;
          item.changefreq = 'weekly';
        } else if (url.includes('/products/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        }
        return item;
      }
    })
  ]
});
