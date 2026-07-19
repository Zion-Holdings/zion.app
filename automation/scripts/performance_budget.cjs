#!/usr/bin/env node
/**
 * Performance budget checker: verify page load metrics against thresholds.
 * Usage: node automation/scripts/performance_budget.cjs [url]
 */
const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    https.get(url, { timeout: 15000 }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data, time: Date.now() - start }));
    }).on('error', reject);
  });
}

async function main() {
  const url = process.argv[2] || 'https://ziontechgroup.com';
  const { status, body, time } = await fetch(url);
  console.log('URL', url);
  console.log('STATUS', status);
  console.log('LOAD_TIME_MS', time);
  console.log('SIZE_BYTES', body.length);
  console.log('BUDGET', status === 200 && time < 3000 && body.length < 500000 ? 'OK' : 'REVIEW');
}

main().catch((e) => { console.error(e); process.exit(1); });
