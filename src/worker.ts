import { onRequestPost as handleContactPost } from '../functions/api/contact.js';

export interface Env {
  ASSETS: { fetch: (req: Request | string) => Promise<Response> };
  RESEND_API_KEY?: string;
  NOTIFICATION_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
  TURNSTILE_SECRET?: string;
  PUBLIC_TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SITE_KEY?: string;
}

const UNDER_CONSTRUCTION_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Website Under Construction | System Maintenance</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at 50% 25%, #1e293b 0%, #0f172a 75%);
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 1.5rem;
    }
    .card {
      max-width: 520px;
      width: 100%;
      background: rgba(30, 41, 59, 0.72);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 1.25rem;
      padding: 2.75rem 2.25rem;
      text-align: center;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(12px);
    }
    .icon-wrap {
      width: 64px;
      height: 64px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #38bdf8;
    }
    .badge {
      display: inline-block;
      padding: 0.3rem 0.85rem;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.12);
      color: #38bdf8;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.65rem;
      font-weight: 800;
      margin-bottom: 0.75rem;
      color: #ffffff;
      letter-spacing: -0.02em;
    }
    .sub-zh {
      font-size: 1.05rem;
      font-weight: 600;
      color: #e2e8f0;
      margin-bottom: 1.1rem;
    }
    p {
      font-size: 0.94rem;
      line-height: 1.7;
      color: #94a3b8;
      margin-bottom: 0.75rem;
    }
    .progress-bar {
      height: 6px;
      width: 100%;
      background: rgba(15, 23, 42, 0.8);
      border-radius: 999px;
      overflow: hidden;
      margin: 1.75rem 0 1rem;
    }
    .progress-fill {
      width: 68%;
      height: 100%;
      background: linear-gradient(90deg, #0284c7, #38bdf8);
      border-radius: 999px;
    }
    .status-note {
      font-size: 0.78rem;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon-wrap">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </div>
    <span class="badge">System Upgrade in Progress</span>
    <h1>Website Under Construction</h1>
    <div class="sub-zh">&#x7F51;&#x7AD9;&#x6B63;&#x5728;&#x5EFA;&#x8BBE;&#x4E0E;&#x7CFB;&#x7EDF;&#x5347;&#x7EA7;&#x4E2D;</div>
    <p>We are currently upgrading our portal architecture and product database. The website will be back online shortly.</p>
    <p>&#x5F53;&#x524D;&#x7AD9;&#x70B9;&#x6B63;&#x5728;&#x8FDB;&#x884C;&#x7CFB;&#x7EDF;&#x67B6;&#x6784;&#x7EF4;&#x62A4;&#x4E0E;&#x5185;&#x5BB9;&#x5EFA;&#x8BBE;&#xFF0C;&#x6682;&#x65F6;&#x65E0;&#x6CD5;&#x8BBF;&#x95EE;&#xFF0C;&#x656C;&#x8BF7;&#x8C05;&#x89E3;&#x3002;</p>
    <div class="progress-bar"><div class="progress-fill"></div></div>
    <div class="status-note">Status: Scheduled Maintenance · Please check back later</div>
  </div>
</body>
</html>`;

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    // 0. Serve friendly "Website Under Construction" page for Mainland China (CN) IPs or /under-construction route
    const country = ((request as any).cf?.country || request.headers.get('CF-IPCountry') || '').toUpperCase();
    const isVerifiedBot = Boolean((request as any).cf?.botManagement?.verifiedBot);
    const cookieHeader = request.headers.get('Cookie') || '';
    const hasUnlockCookie = cookieHeader.includes('fs_preview_unlock=1');

    if (url.searchParams.get('preview_unlock') === 'fs2026') {
      url.searchParams.delete('preview_unlock');
      return new Response(null, {
        status: 302,
        headers: {
          Location: url.pathname || '/',
          'Set-Cookie': 'fs_preview_unlock=1; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax',
        },
      });
    }

    if (url.pathname === '/under-construction' || (country === 'CN' && !isVerifiedBot && !hasUnlockCookie)) {
      return new Response(UNDER_CONSTRUCTION_HTML, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      });
    }

    // 1. Force HTTP to HTTPS and www.fidgetsupply.com to non-www canonical
    let hostOrProtoChanged = false;
    if (url.protocol === 'http:' && (url.hostname === 'fidgetsupply.com' || url.hostname === 'www.fidgetsupply.com')) {
      url.protocol = 'https:';
      hostOrProtoChanged = true;
    }
    if (url.hostname === 'www.fidgetsupply.com') {
      url.hostname = 'fidgetsupply.com';
      hostOrProtoChanged = true;
    }

    // 2. Normalize multiple slashes, .html, and trailing slashes: 301 permanent redirect to clean canonical URL
    let path = url.pathname;
    let needsRedirect = hostOrProtoChanged;

    if (path.includes('//')) {
      path = path.replace(/\/+/g, '/');
      needsRedirect = true;
    }

    if (path !== '/' && path.endsWith('/')) {
      path = path.replace(/\/+$/, '');
      needsRedirect = true;
    }

    if (path.endsWith('.html')) {
      path = path.replace(/\.html$/, '');
      if (path.endsWith('/index')) {
        path = path.slice(0, -6) || '/';
      }
      needsRedirect = true;
    }

    // 3. Legacy Shopify / BigCartel / bare /collections route 301 redirects
    const lowerPath = path.toLowerCase();
    if (lowerPath === '/checkout' || lowerPath.startsWith('/checkout/') || lowerPath === '/cart' || lowerPath.startsWith('/cart/')) {
      url.pathname = '/contact';
      url.search = '';
      return Response.redirect(url.toString(), 301);
    }
    if (
      lowerPath === '/collections' ||
      lowerPath === '/collections/all' ||
      lowerPath === '/catalog' ||
      lowerPath === '/product' ||
      lowerPath.startsWith('/product/')
    ) {
      url.pathname = '/products';
      url.search = '';
      return Response.redirect(url.toString(), 301);
    }
    const langCollectionsMatch = lowerPath.match(/^\/(de|fr|nl|es|it|pt|sv|da|no|fi|pl|cs|ru|ja|ko|id|ar)\/collections(?:\/all)?$/);
    if (langCollectionsMatch) {
      url.pathname = `/${langCollectionsMatch[1]}/products`;
      url.search = '';
      return Response.redirect(url.toString(), 301);
    }
    if (lowerPath === '/account' || lowerPath.startsWith('/account/') || lowerPath === '/password' || lowerPath === '/orders' || lowerPath === '/admin') {
      url.pathname = '/';
      url.search = '';
      return Response.redirect(url.toString(), 301);
    }

    if (needsRedirect) {
      url.pathname = path;
      return Response.redirect(url.toString(), 301);
    }

    const pathname = url.pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        },
      });
    }

    // Route: /api/contact
    if (pathname === '/api/contact') {
      if (request.method === 'POST') {
        return handleContactPost({ request, env, ctx });
      }
      if (request.method === 'GET') {
        return new Response(
          JSON.stringify({
            status: 'ok',
            service: 'FidgetSupply Contact API',
            turnstileSiteKey: env.PUBLIC_TURNSTILE_SITE_KEY || env.TURNSTILE_SITE_KEY || '0x4AAAAAAF1GTaPVmYSNUcHS'
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          }
        );
      }
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // For non-GET/HEAD methods on static paths, return 405 JSON instead of asset crash
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response(JSON.stringify({ error: 'Endpoint not found or method not allowed' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Pass-through to Cloudflare Static Assets (pre-rendered HTML pages + static files)
    const assetResponse = await env.ASSETS.fetch(request);
    const headers = new Headers(assetResponse.headers);
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    return new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });
  },
};
