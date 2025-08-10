// Netlify Scheduled Function: Structured Data (JSON-LD) Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/structured_data_audit"

export const config = {
  path: "/.netlify/functions/structured_data_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services'];

function extractJsonLd(html: string): any[] {
  const blocks: any[] = [];
  const re = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    try {
      const json = JSON.parse(m[1]);
      if (Array.isArray(json)) blocks.push(...json);
      else blocks.push(json);
    } catch {}
  }
  return blocks;
}

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
      const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-structured-audit' } });
      const html = await res.text();
      const blocks = extractJsonLd(html);
      const types = blocks.map((b) => b['@type']).filter(Boolean);
      results.push({ url, count: blocks.length, types });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/seo/structured-data/structured-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(seo): structured data audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};