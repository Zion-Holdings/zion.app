// Netlify Scheduled Function: Sitemap Refresh
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/sitemap_refresh"

export const config = {
  path: "/.netlify/functions/sitemap_refresh",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const MAX_PAGES = Number(process.env.SITEMAP_MAX_PAGES || 200);

function normalize(u: string) {
  try {
    const url = new URL(u, BASE_URL);
    url.hash = '';
    if (url.pathname.endsWith('/') && url.pathname !== '/') url.pathname = url.pathname.slice(0, -1);
    return url.toString();
  } catch { return ''; }
}

function extractLinks(html: string, current: string): string[] {
  const links = new Set<string>();
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const abs = normalize(new URL(m[1], current).toString());
    if (abs && abs.startsWith(new URL(BASE_URL).origin)) links.add(abs);
  }
  return Array.from(links);
}

function xmlEscape(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function stamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth()+1)}-${p(d.getUTCDate())}`;
}

export const handler: Handler = async () => {
  try {
    const origin = new URL(BASE_URL).origin;
    const toVisit: string[] = [origin + '/'];
    const visited = new Set<string>();

    while (toVisit.length && visited.size < MAX_PAGES) {
      const url = toVisit.shift()!;
      if (visited.has(url)) continue;
      visited.add(url);
      let html = '';
      try {
        const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-sitemap' } });
        if (!res.ok) continue;
        html = await res.text();
      } catch { continue; }
      for (const l of extractLinks(html, url)) {
        if (!visited.has(l)) toVisit.push(l);
      }
    }

    const urls = Array.from(visited).filter(u => u.startsWith(origin));
    urls.sort();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${xmlEscape(u)}</loc><lastmod>${stamp()}</lastmod></url>`).join('\n')}\n</urlset>\n`;

    const commit = await commitToRepo({ path: 'public/sitemap.xml', content: xml, message: 'chore(sitemap): automated sitemap refresh', branch: 'main' });

    return { statusCode: 200, body: JSON.stringify({ ok: true, count: urls.length, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};