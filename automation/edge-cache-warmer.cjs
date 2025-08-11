const axios = require('axios');
const fs = require('fs');
const path = require('path');

(async function runEdgeCacheWarmer() {
  const baseUrl = process.env.URL || process.env.DEPLOY_URL || process.env.SITE_URL || '';
  const fallbackBase = baseUrl && /^https?:\/\//.test(baseUrl) ? baseUrl.replace(/\/$/, '') : '';
  const siteBase = fallbackBase || 'https://zion.app';

  const pagesToWarm = [
    '/',
    '/main/front',
    '/automation',
    '/site-health',
    '/newsroom'
  ];

  const results = [];
  const startedAt = new Date().toISOString();

  for (const page of pagesToWarm) {
    const url = `${siteBase}${page}`;
    const started = Date.now();
    try {
      const res = await axios.get(url, { headers: { 'User-Agent': 'Zion-Edge-Cache-Warmer/1.0', 'Cache-Control': 'no-cache' }, timeout: 20000 });
      const ms = Date.now() - started;
      results.push({ url, status: res.status, ms });
    } catch (err) {
      const ms = Date.now() - started;
      results.push({ url, status: (err && err.response && err.response.status) || 0, ms, error: String(err.message || err) });
    }
  }

  const logsDir = path.resolve(__dirname, 'logs');
  const dataDir = path.resolve(__dirname, '..', 'data');
  const reportPath = path.resolve(dataDir, 'edge-cache-warm.json');
  const logPath = path.resolve(logsDir, 'edge-cache-warmer.log');

  try { fs.mkdirSync(logsDir, { recursive: true }); } catch {}
  try { fs.mkdirSync(dataDir, { recursive: true }); } catch {}

  const summary = { startedAt, siteBase, results, finishedAt: new Date().toISOString() };
  fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));

  const line = `[${new Date().toISOString()}] base=${siteBase} results=${results.map(r => `${r.status}@${r.ms}ms`).join(',')}\n`;
  fs.appendFileSync(logPath, line);

  console.log('Edge cache warm complete:', summary);
})();