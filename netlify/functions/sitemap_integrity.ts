// Netlify Scheduled Function: Sitemap Integrity Validation
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/sitemap_integrity"

export const config = {
  path: "/.netlify/functions/sitemap_integrity",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';

function parseSitemap(xml: string): string[] {
  const urls: string[] = [];
  const re = /<loc>([\s\S]*?)<\/loc>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    const u = m[1].trim();
    if (u) urls.push(u);
  }
  return urls;
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const site = `${BASE_URL}/sitemap.xml`;
    const res = await fetch(site, { headers: { 'User-Agent': 'zion-app-sitemap-integrity' } });
    if (!res.ok) return { statusCode: 502, body: `Failed to fetch sitemap ${res.status}` };
    const xml = await res.text();
    const urls = parseSitemap(xml).slice(0, 200);
    const checks: Array<{ url: string; status: number; ok: boolean }> = [];
    for (const u of urls) {
      try {
        const r = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': 'zion-app-sitemap-integrity' } });
        checks.push({ url: u, status: r.status, ok: r.ok });
      } catch {
        checks.push({ url: u, status: 0, ok: false });
      }
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), total: urls.length, checks }, null, 2) + '\n';
    const dest = `data/reports/sitemap/integrity-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(sitemap): integrity validation', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit, total: urls.length }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};