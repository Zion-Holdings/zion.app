const fs = require('fs');
const path = require('path');

exports.config = { schedule: '11 */6 * * *' };

exports.handler = async () => {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const outDir = path.resolve(__dirname, '..', '..', 'public', 'reports', 'metadata');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}

  const pages = ['/', '/automation', '/main/front'];
  const results = [];
  for (const p of pages) {
    const url = baseUrl ? `${baseUrl}${p}` : p;
    let status = 0;
    let t0 = Date.now();
    try {
      const res = await fetch(url, { method: 'GET' });
      status = res.status;
    } catch (e) {
      status = 0;
    }
    const t = Date.now() - t0;
    results.push({ path: p, status, ttfbMs: t });
  }

  const payload = { generatedAt: new Date().toISOString(), baseUrl, results };
  const latest = path.join(outDir, 'latest.json');
  fs.writeFileSync(latest, JSON.stringify(payload, null, 2));

  return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) };
};