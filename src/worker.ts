import { onRequestPost as handleContactPost } from '../functions/api/contact.js';

export interface Env {
  ASSETS: { fetch: (req: Request | string) => Promise<Response> };
  RESEND_API_KEY?: string;
  NOTIFICATION_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    const url = new URL(request.url);

    // 1. Force www.fidgetsupply.com to non-www canonical
    if (url.hostname === 'www.fidgetsupply.com') {
      url.hostname = 'fidgetsupply.com';
      return Response.redirect(url.toString(), 301);
    }

    // 2. Normalize .html and trailing slashes: 301 permanent redirect to clean canonical URL
    let path = url.pathname;
    let needsRedirect = false;

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
        return new Response(JSON.stringify({ status: 'ok', service: 'FidgetSupply Contact API' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
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
    return env.ASSETS.fetch(request);
  },
};
