// Netlify Scheduled Function: Accessibility Audit (PSI Accessibility score)
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/a11y_audit"

export const config = {
  path: "/.netlify/functions/a11y_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PSI_KEY = process.env.PAGESPEED_API_KEY || '';
const PAGES = ['/', '/blog', '/products', '/services', '/talent'];

async function runPsi(url: string) {
  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.set('category', 'ACCESSIBILITY');
  endpoint.searchParams.set('strategy', 'mobile');
  if (PSI_KEY) endpoint.searchParams.set('key', PSI_KEY);
  const res = await fetch(endpoint.toString(), { headers: { 'User-Agent': 'zion-app-a11y-audit' } });
  return res.json();
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
      const r = await runPsi(url);
      const score = r?.lighthouseResult?.categories?.accessibility?.score ?? null;
      results.push({ url, accessibility: score, raw: r });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/a11y/a11y-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(a11y): automated accessibility audit (PSI)', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};