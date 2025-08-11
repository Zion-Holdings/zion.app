const fs = require('fs');
const path = require('path');

exports.config = {
  schedule: '0 */2 * * *', // every 2 hours
};

async function ping(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    clearTimeout(timeout);
    return { ok: res.ok, status: res.status };
  } catch (e) {
    clearTimeout(timeout);
    return { ok: false, status: 0, error: String(e.message || e) };
  }
}

exports.handler = async () => {
  const base = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const sitemapUrl = `${base}/sitemap.xml`;
  const reportDir = path.resolve(__dirname, '..', '..', 'public', 'reports', 'sitemap');
  fs.mkdirSync(reportDir, { recursive: true });

  const endpoints = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  ];

  const results = [];
  for (const ep of endpoints) {
    // eslint-disable-next-line no-await-in-loop
    results.push({ endpoint: ep, ...(await ping(ep)) });
  }

  const payload = { generatedAt: new Date().toISOString(), base, sitemapUrl, results };
  fs.writeFileSync(path.join(reportDir, 'pings.json'), JSON.stringify(payload, null, 2));

  // Run git sync to persist the report
  try {
    const { spawnSync } = require('child_process');
    const abs = path.resolve(__dirname, '..', '..', 'automation', 'advanced-git-sync.cjs');
    spawnSync('node', [abs], { stdio: 'ignore' });
  } catch {}

  return { statusCode: 200, body: JSON.stringify(payload) };
};