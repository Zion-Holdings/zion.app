#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  const site = process.env.SITE_URL || process.env.VERCEL_URL || process.env.DEPLOY_URL || '';
  const logsDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logsDir);
  if (!site) {
    await fs.writeJson(path.join(logsDir, 'pagespeed-status.json'), { ranAt: new Date().toISOString(), error: 'SITE_URL not set' }, { spaces: 2 });
    console.log('Pagespeed Autopilot skipped (no SITE_URL)');
    return;
  }
  const encoded = encodeURIComponent(site.startsWith('http') ? site : `https://${site}`);
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encoded}&category=PERFORMANCE`;
  const data = await fetchJson(api);
  const score = data?.lighthouseResult?.categories?.performance?.score ?? null;
  const audits = data?.lighthouseResult?.audits || {};
  const fcp = audits['first-contentful-paint']?.displayValue;
  const lcp = audits['largest-contentful-paint']?.displayValue;
  const tbt = audits['total-blocking-time']?.displayValue;

  await fs.writeJson(path.join(logsDir, 'pagespeed-status.json'), {
    ranAt: new Date().toISOString(),
    site: site,
    score,
    metrics: { fcp, lcp, tbt },
  }, { spaces: 2 });
  console.log('Pagespeed Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });