// Netlify Scheduled Function: Canonical Tag Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/canonical_audit"

export const config = {
  path: "/.netlify/functions/canonical_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services', '/talent'];

function extractCanonical(html: string): string | null {
  const m = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i);
  return m ? m[1].trim() : null;
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const origin = new URL(BASE_URL).origin;
    const results: Array<{ url: string; canonical: string | null; ok: boolean; reason?: string }> = [];
    for (const p of PAGES) {
      const url = `${BASE_URL}${p}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-canonical-audit' } });
      const html = await res.text();
      const can = extractCanonical(html);
      const ok = !!can && can.startsWith(origin);
      const reason = ok ? undefined : (!can ? 'missing' : 'mismatch');
      results.push({ url, canonical: can, ok, reason });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/seo/canonical/canonical-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(seo): canonical tag audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};