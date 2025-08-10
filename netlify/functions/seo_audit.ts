// Netlify Scheduled Function: SEO Metadata Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/seo_audit"

export const config = {
  path: "/.netlify/functions/seo_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services', '/talent'];

function extract(html: string, re: RegExp, group = 1): string | null {
  const m = re.exec(html);
  return m ? m[group].trim() : null;
}

function analyze(html: string) {
  const title = extract(html, /<title>([\s\S]*?)<\/title>/i);
  const metaDesc = extract(html, /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*>/i);
  const h1 = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const ogTitle = extract(html, /<meta\s+property=["']og:title["']\s+content=["']([\s\S]*?)["'][^>]*>/i);
  const ogDesc = extract(html, /<meta\s+property=["']og:description["']\s+content=["']([\s\S]*?)["'][^>]*>/i);
  const ogImage = extract(html, /<meta\s+property=["']og:image["']\s+content=["']([\s\S]*?)["'][^>]*>/i);

  const issues: string[] = [];
  if (!title) issues.push('Missing <title>');
  if (!metaDesc) issues.push('Missing meta description');
  if (metaDesc && (metaDesc.length < 50 || metaDesc.length > 160)) issues.push('Meta description length suboptimal');
  if (!h1) issues.push('Missing <h1>');
  if (!ogTitle) issues.push('Missing og:title');
  if (!ogDesc) issues.push('Missing og:description');
  if (!ogImage) issues.push('Missing og:image');

  return { title, metaDesc, h1, ogTitle, ogDesc, ogImage, issues };
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const out: any[] = [];
    for (const p of PAGES) {
      const url = `${BASE_URL}${p}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-seo-audit' } });
      const html = await res.text();
      const result = analyze(html);
      out.push({ url, ...result });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results: out }, null, 2) + '\n';
    const dest = `data/reports/seo/seo-audit-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(seo): automated SEO audit report', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit, count: out.length }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};