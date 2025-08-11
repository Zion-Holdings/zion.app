const axios = require('axios');
const fs = require('fs');
const path = require('path');

(async function runSearchEnginePinger() {
  const baseUrl = process.env.URL || process.env.DEPLOY_URL || process.env.SITE_URL || '';
  const siteBase = (baseUrl && /^https?:\/\//.test(baseUrl) ? baseUrl.replace(/\/$/, '') : '') || 'https://zion.app';
  const sitemapUrl = `${siteBase}/sitemap.xml`;

  const endpoints = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
  ];

  const results = [];
  for (const url of endpoints) {
    try {
      const res = await axios.get(url, { timeout: 15000 });
      results.push({ url, status: res.status });
    } catch (e) {
      results.push({ url, status: (e && e.response && e.response.status) || 0, error: String(e.message || e) });
    }
  }

  const logsDir = path.resolve(__dirname, 'logs');
  try { fs.mkdirSync(logsDir, { recursive: true }); } catch {}
  const logPath = path.resolve(logsDir, 'search-engine-pinger.log');
  const line = `[${new Date().toISOString()}] sitemap=${sitemapUrl} results=${results.map(r => `${r.status}`).join(',')}\n`;
  fs.appendFileSync(logPath, line);
  console.log('Search engine ping complete:', { sitemapUrl, results });
})();