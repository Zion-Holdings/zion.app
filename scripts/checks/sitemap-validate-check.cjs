// scripts/checks/sitemap-validate-check.cjs
// Validates sitemap artifacts after build when present, without failing every local run.
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const repo = process.cwd();
const candidates = [
  path.join(repo, 'public/sitemap.xml'),
  path.join(repo, 'public/sitemap.xml.gz'),
  path.join(repo, 'out/sitemap.xml'),
  path.join(repo, 'out/sitemap.xml.gz'),
  path.join(repo, 'dist/sitemap.xml'),
  path.join(repo, 'dist/sitemap.xml.gz'),
];

const existing = candidates.filter((filePath) => fs.existsSync(filePath));

if (existing.length === 0) {
  console.log('sitemap validate pending_run=none');
  process.exit(0);
}

let sitemapContent = '';

for (const filePath of existing) {
  const buf = fs.readFileSync(filePath);
  const unzipped = filePath.endsWith('.gz') ? zlib.gunzipSync(buf) : buf;
  sitemapContent += unzipped.toString('utf8');
}

if (!/<urlset[\s>]/.test(sitemapContent) && !/<sitemapindex[\s>]/.test(sitemapContent)) {
  console.error('sitemap validate failed: missing urlset/sitemapindex');
  process.exit(1);
}

console.log(`sitemap validate ok files=${existing.length}`);
