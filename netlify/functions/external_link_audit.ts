// Netlify Scheduled Function: External Link Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/external_link_audit"

export const config = {
  path: "/.netlify/functions/external_link_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services'];

function extractLinks(html: string, base: string): string[] {
  const host = new URL(BASE_URL).host;
  const out = new Set<string>();
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    try {
      const u = new URL(m[1], base);
      if (u.host !== host) out.add(u.toString());
    } catch {}
  }
  return Array.from(out);
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const findings: Array<{ url: string; target: string; status: number; ok: boolean }> = [];
    for (const p of PAGES) {
      const pageUrl = `${BASE_URL}${p}`;
      const res = await fetch(pageUrl, { headers: { 'User-Agent': 'zion-app-extlink-audit' } });
      const html = await res.text();
      const links = extractLinks(html, pageUrl).slice(0, 200);
      for (const link of links) {
        try {
          const r = await fetch(link, { method: 'HEAD', redirect: 'follow', headers: { 'User-Agent': 'zion-app-extlink-audit' } });
          findings.push({ url: pageUrl, target: link, status: r.status, ok: r.ok });
        } catch {
          findings.push({ url: pageUrl, target: link, status: 0, ok: false });
        }
      }
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), findings }, null, 2) + '\n';
    const dest = `data/reports/link-audit/external-links-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(link): external link audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: findings.length, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};