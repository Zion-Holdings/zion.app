#!/usr/bin/env node
const https = require('https');
const http = require('http');

const routes = [
  '/',
  '/healthz',
  '/tools/health-check',
  '/status/service-health',
  '/sitemap.xml',
];

const base = process.env.SITE_URL || 'https://ziontechgroup.com';

function check(path) {
  return new Promise((resolve) => {
    const lib = base.startsWith('https') ? https : http;
    const url = `${base}${path}`;
    const req = lib.get(url, { headers: { 'User-Agent': 'ZionHealthCheck/1.0' } }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location;
        const nextUrl = loc.startsWith('http') ? loc : `${base}${loc}`;
        const nextLib = nextUrl.startsWith('https') ? https : http;
        const nextReq = nextLib.get(nextUrl, { headers: { 'User-Agent': 'ZionHealthCheck/1.0' } }, (nextRes) => {
          nextRes.resume();
          resolve({ path, status: nextRes.statusCode, redirected: true });
        });
        nextReq.on('error', (err) => resolve({ path, status: null, error: err.message }));
        nextReq.setTimeout(20000, () => { nextReq.destroy(); resolve({ path, status: null, error: 'timeout' }); });
        return;
      }
      res.resume();
      resolve({ path, status: res.statusCode });
    });
    req.on('error', (err) => resolve({ path, status: null, error: err.message }));
    req.setTimeout(20000, () => { req.destroy(); resolve({ path, status: null, error: 'timeout' }); });
  });
}

(async () => {
  const results = await Promise.all(routes.map(check));
  let ok = 0, fail = 0;
  for (const r of results) {
    const isOk = r.status && r.status >= 200 && r.status < 400;
    if (isOk) ok += 1; else fail += 1;
    const redir = r.redirected ? ' (redirected)' : '';
    console.log(`${r.path} -> ${r.status ?? 'ERROR'}${redir} ${r.error ? '(' + r.error + ')' : ''}`);
  }
  console.log(`SUMMARY routes=${results.length} ok=${ok} fail=${fail}`);
  if (fail > 0) process.exitCode = 1;
})();
