#!/usr/bin/env node
/**
 * scripts/crawl-live-links.cjs - sample-based live link checker
 * Usage: node scripts/crawl-live-links.cjs [baseUrl] [sampleSize]
 * Default: https://ziontechgroup.com 250
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const BASE = process.argv[2] || 'https://ziontechgroup.com';
const SAMPLE = parseInt(process.argv[3] || '250', 10);

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function curlStatus(url) {
  return new Promise(resolve => {
    const child = spawn('curl', ['-s', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '15', url]);
    let out = '';
    child.stdout.on('data', d => out += d.toString());
    child.on('close', () => resolve(out.trim()));
  });
}

async function main() {
  const reportPath = path.join(process.cwd(), 'artifacts', 'crawl-report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });

  const seeds = [
    '/','/services/','/blog/','/case-studies/','/about/','/contact/','/pricing/',
    '/services/ai-customer-support-pro/','/services/cloud-cost-optimization-platform/',
    '/services/siem-security-platform/','/services/managed-it/',
    '/blog/5-proven-ai-automation-strategies-for-enterprise-workflow-optimization/'
  ];

  const results = [];
  let failed = 0;
  let healthy = 0;

  for (let i = 0; i < Math.min(seeds.length, SAMPLE); i++) {
    const url = BASE + seeds[i];
    const code = await curlStatus(url);
    const ok = code === '200';
    results.push({ url, code, ok });
    if (ok) healthy++; else failed++;
    console.log(`${ok ? '✓' : '✗'} ${url} -> ${code}`);
    await sleep(200);
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    base: BASE,
    checked: results.length,
    healthy,
    failed,
    results: results.slice(0, 50)
  };

  fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));
  console.log(`\nCrawl complete: ${healthy} healthy, ${failed} failed`);
  console.log(`Report: ${reportPath}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
