#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function fetchUrl(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    try {
      const lib = url.startsWith('https') ? https : http;
      const req = lib.get(url, { timeout: timeoutMs }, (res) => {
        res.on('data', () => {});
        res.on('end', () => resolve({ ok: res.statusCode && res.statusCode < 500, status: res.statusCode }));
      });
      req.on('error', () => resolve({ ok: false, status: 0 }));
      req.on('timeout', () => { req.destroy(); resolve({ ok: false, status: 0 }); });
    } catch {
      resolve({ ok: false, status: 0 });
    }
  });
}

async function main() {
  const root = process.cwd();
  const reportDir = path.join(root, 'data', 'reports');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const base = process.env.SELF_BASE_URL || 'http://localhost:3000';
  const targets = [
    '/',
    '/academy',
    '/api/metrics/live',
    '/api/academy/analytics'
  ];

  const results = [];
  for (const t of targets) {
    const url = base + t;
    const r = await fetchUrl(url);
    results.push({ url, ok: r.ok, status: r.status });
  }

  const report = { runAt: new Date().toISOString(), base, results };
  fs.writeFileSync(path.join(reportDir, 'uptime.json'), JSON.stringify(report, null, 2));
  console.log('Uptime report updated.');
}

main().catch((e) => { console.error(e); process.exitCode = 1; });