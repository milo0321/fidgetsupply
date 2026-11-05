---
name: Astro/Vite HMR Troubleshooting
description: Protocol for recovering from silent HMR crashes in Astro/Vite dev servers.
---
# Astro/Vite HMR Troubleshooting

If the source code is verified to be 100% syntactically correct and the Astro build (`npx astro build`) succeeds, but the local dev server (e.g. `http://localhost:4323`) still serves broken UI or stale CSS:

1. Assume the Vite HMR (Hot Module Replacement) watcher crashed silently from a previous fatal syntax error.
2. Do NOT chase phantom bugs in correct code or continually rewrite the CSS.
3. Immediately restart the dev server: `kill -9` the process and run `npm run dev` again.

## Cloudflare Adapter & Vite `deps_ssr` Missing File Error

If restarting or clearing `.vite` produces:
> `The file does not exist at ".../node_modules/.vite/deps_ssr/route-cache-*.js" which is in the optimize deps directory.`

1. In `astro.config.mjs`, add the Cloudflare adapter and noop image services to `vite.optimizeDeps.exclude`:
   ```javascript
   vite: {
     optimizeDeps: {
       exclude: ['@astrojs/cloudflare', 'astro/assets/services/noop']
     }
   }
   ```
2. Remove `.vite` and `.astro` caches and restart: `rm -rf node_modules/.vite .astro dist && npm run dev`
