#!/usr/bin/env node
/* eslint-disable no-console */
const https = require('https');
const fs = require('fs-extra');
const path = require('path');

function ping(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => resolve(res.statusCode || 0)).on('error', () => resolve(0));
  });
}

async function main() {
  const site = process.env.SITE_URL || '';
  const logsDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logsDir);
  if (!site) {
    await fs.writeJson(path.join(logsDir, 'sitemap-submit-status.json'), { ranAt: new Date().toISOString(), error: 'SITE_URL not set' }, { spaces: 2 });
    console.log('Sitemap Submit Autopilot skipped (no SITE_URL)');
    return;
  }
  const sitemapUrl = `${site.replace(/\/$/, '')}/sitemap.xml`;
  const google = await ping(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
  const bing = await ping(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
  await fs.writeJson(path.join(logsDir, 'sitemap-submit-status.json'), { ranAt: new Date().toISOString(), sitemapUrl, google, bing }, { spaces: 2 });
  console.log('Sitemap Submit Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });