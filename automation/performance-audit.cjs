#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'performance');

function getBaseUrl() {
  const url = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  return url || '';
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'zion.app-automation' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(new Error(`Invalid JSON from ${url}: ${e.message}`));
        }
      });
    });
    req.on('error', (err) => reject(err));
    req.setTimeout(15000, () => { req.destroy(new Error('timeout')); });
  });
}

function scoreOf(json, category) {
  try {
    const cat = json.lighthouseResult.categories[category];
    return typeof cat.score === 'number' ? Math.round(cat.score * 100) : null;
  } catch (_) {
    return null;
  }
}

function renderHTML(results) {
  const rows = results.map(r => `
    <tr>
      <td><a href="${r.page}" target="_blank" rel="noopener">${r.page}</a></td>
      <td>${r.strategy}</td>
      <td>${r.performance ?? ''}</td>
      <td>${r.accessibility ?? ''}</td>
      <td>${r.seo ?? ''}</td>
      <td>${r.bestPractices ?? ''}</td>
    </tr>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Performance Audit</title>
<style>
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #e5e7eb; padding: 8px; font-size: 14px; }
  th { background: #f3f4f6; text-align: left; }
</style>
</head>
<body>
  <h1>Performance Audit</h1>
  <p>Autonomously generated via Google PageSpeed Insights. Strategies: mobile and desktop.</p>
  <table>
    <thead>
      <tr><th>Page</th><th>Strategy</th><th>Performance</th><th>Accessibility</th><th>SEO</th><th>Best Practices</th></tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
}

async function main() {
  const base = getBaseUrl();
  if (!base) {
    console.log('No base URL available; skipping performance audit');
    return;
  }
  const key = process.env.GOOGLE_API_KEY || '';
  const pages = ['/', '/main/front', '/newsroom', '/site-health'];
  const strategies = ['mobile', 'desktop'];

  const results = [];
  for (const page of pages) {
    for (const strategy of strategies) {
      const fullUrl = encodeURIComponent(`${base}${page}`);
      const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${fullUrl}&strategy=${strategy}${key ? `&key=${key}` : ''}`;
      try {
        const json = await fetchJson(api);
        results.push({
          page: `${base}${page}`,
          strategy,
          performance: scoreOf(json, 'performance'),
          accessibility: scoreOf(json, 'accessibility'),
          seo: scoreOf(json, 'seo'),
          bestPractices: scoreOf(json, 'best-practices'),
        });
      } catch (e) {
        results.push({ page: `${base}${page}`, strategy, error: String(e.message || e) });
      }
    }
  }

  ensureDir(OUT_DIR);
  const payload = { generatedAt: new Date().toISOString(), base, results };
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(results));
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});