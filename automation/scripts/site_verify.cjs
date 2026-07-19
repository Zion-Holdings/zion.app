#!/usr/bin/env node
/**
 * Verify core ziontechgroup.com pages and surface failures.
 * Usage: node automation/scripts/site_verify.cjs
 */
const https = require('https');

function check(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 15000 }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ url, status: res.statusCode, length: data.length }));
    }).on('error', (e) => reject({ url, error: e.message }));
  });
}

async function main() {
  const urls = [
    'https://ziontechgroup.com/',
    'https://ziontechgroup.com/services/',
    'https://ziontechgroup.com/products/',
    'https://ziontechgroup.com/contact/',
    'https://ziontechgroup.com/case-studies/',
    'https://ziontechgroup.com/industries/',
    'https://ziontechgroup.com/tools/',
    'https://ziontechgroup.com/automation/'
  ];
  const results = await Promise.all(urls.map(check));
  let bad = 0;
  for (const r of results) {
    const ok = r.status === 200 && r.length > 500;
    console.log((ok ? 'OK ' : 'BAD ') + r.url + ' ' + r.status + ' ' + r.length);
    if (!ok) bad++;
  }
  console.log('SUMMARY', 'ok=' + (results.length - bad) + ' bad=' + bad);
  process.exit(bad ? 1 : 0);
}

main().catch(() => process.exit(1));
