#!/usr/bin/env node
/**
 * Route audit: check a list of paths for 200/404 status.
 * Usage: node automation/scripts/route_audit.cjs <baseUrl> <path1> <path2> ...
 */
const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 15000 }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, length: data.length }));
    }).on('error', reject);
  });
}

async function main() {
  const base = process.argv[2];
  if (!base) {
    console.error('Usage: route_audit.cjs <baseUrl> <path...>');
    process.exit(1);
  }
  const paths = process.argv.slice(3);
  if (!paths.length) {
    console.error('No paths provided');
    process.exit(1);
  }
  const results = await Promise.all(paths.map(p => fetch(base + p)));
  let bad = 0;
  for (let i = 0; i < paths.length; i++) {
    const r = results[i];
    const ok = r.status === 200 && r.length > 500;
    console.log((ok ? 'OK ' : 'BAD ') + paths[i] + ' ' + r.status + ' ' + r.length);
    if (!ok) bad++;
  }
  console.log('SUMMARY', 'ok=' + (paths.length - bad) + ' bad=' + bad);
  process.exit(bad ? 1 : 0);
}

main().catch(() => process.exit(1));
