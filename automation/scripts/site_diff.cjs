#!/usr/bin/env node
/**
 * Site diff checker: compare two URLs by content length and status.
 * Usage: node automation/scripts/site_diff.cjs <url1> <url2>
 */
const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 15000 }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function main() {
  const [a, b] = process.argv.slice(2);
  if (!a || !b) {
    console.error('Usage: site_diff.cjs <url1> <url2>');
    process.exit(1);
  }
  const [ra, rb] = await Promise.all([fetch(a), fetch(b));
  console.log('URL1', a, 'STATUS', ra.status, 'LEN', ra.body.length);
  console.log('URL2', b, 'STATUS', rb.status, 'LEN', rb.body.length);
  console.log('LEN_DIFF', Math.abs(ra.body.length - rb.body.length));
}

main().catch((e) => { console.error(e); process.exit(1); });
