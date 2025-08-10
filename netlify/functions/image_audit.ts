// Netlify Scheduled Function: Image Best Practices Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/image_audit"

export const config = {
  path: "/.netlify/functions/image_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products'];
const MAX_IMAGES = Number(process.env.IMAGE_AUDIT_MAX_IMAGES || 100);

function extractImages(html: string, base: string): string[] {
  const urls = new Set<string>();
  const reImg = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const reSrcset = /<img[^>]+srcset=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = reImg.exec(html))) {
    try { urls.add(new URL(m[1], base).toString()); } catch {}
  }
  while ((m = reSrcset.exec(html))) {
    const parts = m[1].split(',').map(s => s.trim().split(' ')[0]).filter(Boolean);
    for (const p of parts) { try { urls.add(new URL(p, base).toString()); } catch {} }
  }
  return Array.from(urls);
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const origin = new URL(BASE_URL).origin;
    const findings: Array<{ url: string; size: number; type: string; ok: boolean; reason?: string }> = [];
    for (const p of PAGES) {
      const pageUrl = `${BASE_URL}${p}`;
      const res = await fetch(pageUrl, { headers: { 'User-Agent': 'zion-app-image-audit' } });
      const html = await res.text();
      const imgs = extractImages(html, pageUrl).slice(0, MAX_IMAGES);
      for (const img of imgs) {
        try {
          const r = await fetch(img, { method: 'HEAD', headers: { 'User-Agent': 'zion-app-image-audit' } });
          const type = r.headers.get('content-type') || '';
          const size = Number(r.headers.get('content-length') || '0');
          const isOptim = /(image\/avif|image\/webp)/i.test(type);
          const ok = isOptim && size <= 1024 * 1024; // <=1MB
          const reason = ok ? undefined : `type:${type} size:${size}`;
          findings.push({ url: img, size, type, ok, reason });
        } catch {
          findings.push({ url: img, size: 0, type: 'unknown', ok: false, reason: 'fetch_failed' });
        }
      }
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), origin, findings }, null, 2) + '\n';
    const dest = `data/reports/image-audit/image-audit-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(image): automated image audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit, checked: findings.length }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};