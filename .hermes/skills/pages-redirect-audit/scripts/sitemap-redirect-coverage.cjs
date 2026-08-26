#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const REDIRECTS = path.join(process.cwd(), 'public', '_redirects');
const SITEMAP = path.join(process.cwd(), 'sitemap.xml');
if (!fs.existsSync(REDIRECTS) || !fs.existsSync(SITEMAP)) {
  console.error('MISSING_FILE');
  process.exit(1);
}

const lines = fs.readFileSync(REDIRECTS, 'utf8').split(/\r?\n/).filter(Boolean);
const sitemap = fs.readFileSync(SITEMAP, 'utf8');

let redirects = 0;
let duplicateFrom = 0;
const seen = new Map();
for (const raw of lines) {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const parts = trimmed.split(/\s+/);
  if (parts.length < 2 || parts.length > 3) continue;
  const from = parts[0];
  if (seen.has(from)) {
    duplicateFrom++;
  }
  seen.set(from, true);
  redirects++;
}

const missingInSitemap = [];
for (const from of seen.keys()) {
  if (!sitemap.includes(from)) missingInSitemap.push(from);
}

console.log(JSON.stringify({
  redirects,
  duplicateFrom,
  missingInSitemapCount: missingInSitemap.length,
  missingInSitemapFirst: missingInSitemap.slice(0, 20)
}, null, 2));
