// Netlify Scheduled Function: OG Image Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/og_image_audit"

export const config = {
  path: "/.netlify/functions/og_image_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services'];

function extractOgImage(html: string): string | null {
  const m = html.match(/<meta\s+property=["']og:image["']\s+content=["']([\s\S]*?)["'][^>]*>/i);
  return m ? m[1].trim() : null;
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const results: Array<{ page: string; image?: string | null; status?: number; type?: string; ok: boolean }> = [];
    for (const p of PAGES) {
      const url = `${BASE_URL}${p}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-og-audit' } });
      const html = await res.text();
      const img = extractOgImage(html);
      if (!img) { results.push({ page: url, ok: false }); continue; }
      try {
        const r = await fetch(img, { method: 'HEAD', headers: { 'User-Agent': 'zion-app-og-audit' } });
        const type = r.headers.get('content-type') || '';
        const ok = r.ok && /image\//i.test(type);
        results.push({ page: url, image: img, status: r.status, type, ok });
      } catch {
        results.push({ page: url, image: img, ok: false });
      }
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/og/og-image-audit-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(og): og:image audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};