// Netlify Scheduled Function: Security Headers Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/security_headers_audit"

export const config = {
  path: "/.netlify/functions/security_headers_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services', '/talent'];
const HEADERS = ['content-security-policy', 'x-frame-options', 'x-content-type-options', 'referrer-policy', 'permissions-policy'];

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const results: any[] = [];
    for (const p of PAGES) {
      const url = `${BASE_URL}${p}`;
      const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'zion-app-security-audit' } });
      const h: Record<string, string | null> = {};
      for (const k of HEADERS) {
        h[k] = res.headers.get(k) || null;
      }
      results.push({ url, headers: h });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/security/security-headers-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(security): automated security headers audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};