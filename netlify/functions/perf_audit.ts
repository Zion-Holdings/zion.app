// Netlify Scheduled Function: Performance Audit (PageSpeed Insights)
// Schedule via netlify.toml -> [[scheduled]] path = "/.netlify/functions/perf_audit"

export const config = {
  path: "/.netlify/functions/perf_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PSI_KEY = process.env.PAGESPEED_API_KEY || '';

const PAGES = ['/', '/blog', '/products', '/services/ai-development-chat', '/talent'];

async function runPsi(url: string) {
  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', url);
  endpoint.searchParams.set('category', 'PERFORMANCE');
  endpoint.searchParams.set('strategy', 'mobile');
  if (PSI_KEY) endpoint.searchParams.set('key', PSI_KEY);

  const res = await fetch(endpoint.toString(), { headers: { 'User-Agent': 'zion-app-automation' } });
  const json = await res.json();
  return json;
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
      const perf = r?.lighthouseResult?.categories?.performance?.score ?? null;
      results.push({ url, performance: perf, raw: r });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/performance/psi/psi-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(perf): PSI audit (scheduled)', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};