const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SITE = process.env.SITE_URL || 'https://ziontechgroup.com';
const ROUTES = [
  '/',
  '/about/',
  '/services/',
  '/solutions/',
  '/tools/',
  '/blog/',
  '/contact/',
  '/careers/',
  '/pricing/',
  '/partners/',
  '/faq/',
  '/search/',
  '/tools/env-converter/',
];

function urlToOptions(url) {
  const parsed = new URL(url);
  return {
    hostname: parsed.hostname,
    path: parsed.pathname + parsed.search,
    protocol: parsed.protocol,
    method: 'GET',
    timeout: 15000,
  };
}

function requestStatus(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.request(urlToOptions(url), (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', (err) => resolve({ url, status: null, error: err.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: null, error: 'timeout' });
    });
    req.end();
  });
}

async function main() {
  const results = [];
  for (const route of ROUTES) {
    const url = SITE.replace(/\/$/, '') + route;
    results.push(await requestStatus(url));
  }

  const broken = results.filter((r) => !r.status || r.status >= 500 || r.status === 503);
  const out = {
    site: SITE,
    checked: results.length,
    broken: broken.length,
    brokenRoutes: broken.map((r) => ({ route: r.url, status: r.status, error: r.error })),
    okRoutes: results.filter((r) => r.status && r.status < 500 && r.status !== 503).length,
    timestamp: new Date().toISOString(),
  };

  const reportDir = path.join(process.cwd(), 'automation', 'reports');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, 'smoke-routes-latest.json');
  fs.writeFileSync(reportPath, JSON.stringify(out, null, 2));

  console.log(JSON.stringify(out, null, 2));
  if (broken.length) process.exitCode = 1;
}

main();
