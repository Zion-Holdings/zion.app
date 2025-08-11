const fs = require('fs');
const path = require('path');
const https = require('https');
const axios = require('axios');

async function readSitemapUrls() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  let xml = '';
  try {
    xml = fs.readFileSync(sitemapPath, 'utf8');
  } catch (e) {
    return [];
  }
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = urlRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function fetchUrl(url) {
  const start = Date.now();
  try {
    const res = await axios.get(url, {
      timeout: 15000,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      headers: { 'User-Agent': 'ZionCacheWarmer/1.0 (+https://zion.app)' },
      validateStatus: () => true,
    });
    return {
      url,
      status: res.status,
      durationMs: Date.now() - start,
      ok: res.status >= 200 && res.status < 400,
    };
  } catch (e) {
    return { url, status: 0, durationMs: Date.now() - start, ok: false, error: String(e.message || e) };
  }
}

async function warmCache() {
  const urls = await readSitemapUrls();
  if (!urls.length) return { ok: false, reason: 'no_sitemap' };

  const preferred = [
    'https://zion.app/',
    'https://zion.app/automation',
    'https://zion.app/main/front',
    'https://zion.app/newsroom',
  ];

  const unique = Array.from(new Set([...preferred, ...urls])).slice(0, 40);
  const results = [];

  const concurrency = 6;
  let index = 0;
  async function runBatch() {
    const batch = unique.slice(index, index + concurrency);
    index += concurrency;
    const out = await Promise.all(batch.map(fetchUrl));
    results.push(...out);
  }
  while (index < unique.length) {
    // eslint-disable-next-line no-await-in-loop
    await runBatch();
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    total: results.length,
    ok: results.filter(r => r.ok).length,
    failed: results.filter(r => !r.ok).length,
    p50Ms: percentile(results.map(r => r.durationMs), 50),
    p95Ms: percentile(results.map(r => r.durationMs), 95),
    results,
  };

  const reportsDir = path.join(__dirname, '..', 'public', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'cache-warm-log.json'), JSON.stringify(summary, null, 2));

  return { ok: true, summary };
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.floor((p / 100) * (sorted.length - 1));
  return sorted[idx];
}

if (require.main === module) {
  warmCache().then((res) => {
    console.log(JSON.stringify(res, null, 2));
  });
}

module.exports = { warmCache };