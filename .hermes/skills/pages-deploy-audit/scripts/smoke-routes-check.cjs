#!/usr/bin/env node
const https = require('https');

const URLS = [
  'https://ziontechgroup.com/',
  'https://ziontechgroup.com/services/',
  'https://ziontechgroup.com/tools/',
  'https://ziontechgroup.com/services/ai-agents-autonomous/',
  'https://ziontechgroup.com/services/cloud-cost-optimization-service/',
  'https://ziontechgroup.com/services/ai-data-pipeline/',
  'https://ziontechgroup.com/business-customers/',
];

function fetch(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'GET', timeout: 10000 }, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, error: null }));
    });
    req.on('error', (err) => resolve({ status: 'ERR', error: String(err) }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 'ERR', error: 'timeout' }); });
    req.end();
  });
}

(async () => {
  const results = [];
  for (const url of URLS) {
    const r = await fetch(url);
    results.push({ url, status: r.status, error: r.error });
  }
  const down = results.filter((r) => r.status !== 200);
  const payload = { down: down.length, results };
  process.stdout.write(JSON.stringify(payload, null, 2) + '\n');
  process.exit(down.length > 0 ? 1 : 0);
})();
