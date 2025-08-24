// netlify/functions/cache-warmer.js
const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve) => {
    const start = Date.now();
    https
      .get(url, (res) => {
        res.on('data', () => {});
        res.on('end', () => resolve({ url, status: res.statusCode || 0, ms: Date.now() - start }));
      })
      .on('error', () => resolve({ url, status: 0, ms: Date.now() - start }));
  });
}

function getSiteBaseUrl() {
  return process.env.SITE_BASE_URL || process.env.URL || process.env.DEPLOY_URL || 'https://zion.app';
}

exports.config = {
  schedule: '*/15 * * * *',
};

exports.handler = async () => {
  const base = getSiteBaseUrl().replace(/\/$/, '');
  const targets = [
    '/',
    '/automation',
    '/main/front',
    '/site-health',
    '/newsroom',
  ].map((p) => `${base}${p}`);

  const results = await Promise.all(targets.map(fetchUrl));
  const report = {
    ts: new Date().toISOString(),
    base,
    results,
  };

  // Persist lightweight heartbeat artifact
  const outDir = path.resolve(__dirname, '..', '..', 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  const outFile = path.join(outDir, 'cache-warmer-heartbeat.json');
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));

  // Best-effort commit in Netlify build container
  try {
    const { execSync } = require('child_process');
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit' });
    execSync('git add public/automation/cache-warmer-heartbeat.json', { stdio: 'inherit' });
    execSync('git commit -m "chore(cache): warm critical pages [skip ci]" || true', { stdio: 'inherit', shell: true });
    execSync('git push origin main || true', { stdio: 'inherit', shell: true });
  } catch {}

  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(report),
  };
};