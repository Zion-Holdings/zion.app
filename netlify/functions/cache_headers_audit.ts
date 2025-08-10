// Netlify Scheduled Function: Cache Headers Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/cache_headers_audit"

export const config = {
  path: "/.netlify/functions/cache_headers_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PATHS = ['/', '/blog', '/products', '/services', '/favicon.ico', '/site.webmanifest'];

function stamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const results: any[] = [];
    for (const p of PATHS) {
      const url = `${BASE}${p}`;
      try {
        const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'zion-app-cache-audit' } });
        results.push({
          url,
          status: res.status,
          cacheControl: res.headers.get('cache-control'),
          etag: res.headers.get('etag'),
          lastModified: res.headers.get('last-modified'),
          contentType: res.headers.get('content-type'),
        });
      } catch {
        results.push({ url, status: 0 });
      }
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/cache/cache-headers-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(cache): cache headers audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};