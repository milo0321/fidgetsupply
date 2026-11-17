const fs = require('fs');
const path = require('path');

const HOST = 'fidgetsupply.com';
const KEY = 'f4a8b9c2d1e07365a9b8c7d6e5f4a3b2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function collectBuiltUrls(dir, baseDir, urls = []) {
  if (!fs.existsSync(dir)) return urls;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectBuiltUrls(fullPath, baseDir, urls);
    } else if (entry.isFile() && entry.name === 'index.html') {
      const relDir = path.relative(baseDir, dir).replace(/\\/g, '/');
      if (relDir === '404' || relDir.endsWith('/404')) continue;
      const urlPath = relDir === '' ? '/' : `/${relDir}`;
      urls.push(`https://${HOST}${urlPath}`);
    }
  }
  return urls;
}

async function submitToEndpoint(endpointName, endpointUrl, urlList) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList
  };
  try {
    const res = await fetch(endpointUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    console.log(`[IndexNow -> ${endpointName}] HTTP ${res.status} ${res.statusText} (${urlList.length} URLs) ${text ? '- ' + text.slice(0, 120) : ''}`);
    return res.status;
  } catch (err) {
    console.error(`[IndexNow -> ${endpointName}] Error:`, err.message);
    return 500;
  }
}

async function main() {
  const distClient = path.join(__dirname, '..', 'dist', 'client');
  const distRoot = fs.existsSync(distClient) ? distClient : path.join(__dirname, '..', 'dist');
  const allUrls = collectBuiltUrls(distRoot, distRoot);
  console.log(`Collected ${allUrls.length} canonical URLs from ${distRoot}`);

  if (allUrls.length === 0) {
    console.error('No URLs found in dist/client/. Run npm run build first.');
    process.exit(1);
  }

  await submitToEndpoint('api.indexnow.org (Bing/ChatGPT/Yandex/Seznam)', 'https://api.indexnow.org/indexnow', allUrls);
  await submitToEndpoint('www.bing.com (Bing & ChatGPT Search Direct)', 'https://www.bing.com/indexnow', allUrls);
}

main();
