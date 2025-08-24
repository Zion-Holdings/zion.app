#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP = path.join(PUBLIC_DIR, 'sitemap.xml');

function parseUrlsFromSitemap(xml) {
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map(m => m[1]).filter(Boolean);
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return { url, ok: res.ok, status: res.status };
  } catch (e) {
    return { url, ok: false, status: 0 };
  }
}

async function main() {
  if (!fs.existsSync(SITEMAP)) {
    console.error('sitemap.xml not found, run npm run sitemap first');
    process.exit(1);
  }
  const xml = fs.readFileSync(SITEMAP, 'utf8');
  const urls = parseUrlsFromSitemap(xml);

  const toCheck = urls.slice(0, 50);
  const results = await Promise.all(toCheck.map(checkUrl));

  const summary = {
    checkedAt: new Date().toISOString(),
    totalChecked: results.length,
    ok: results.filter(r => r.ok).length,
    failed: results.filter(r => !r.ok).length,
    results,
  };

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, 'link-health.json'), JSON.stringify(summary, null, 2) + '\n');
  console.log(`Link health report written with ${results.length} checks.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});