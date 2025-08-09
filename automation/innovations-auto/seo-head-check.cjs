#!/usr/bin/env node
/*
  SEO Head Check
  - Scans pages/*.tsx for Head usage and title/description presence
  - Outputs data/reports/seo-head.json
*/
const fs = require('fs');
const path = require('path');

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const hasHead = /from 'next\/head'/.test(src) || /<Head[ >]/.test(src);
  const hasTitle = /<title>[^<]+<\/title>/.test(src);
  const hasMetaDesc = /<meta[^>]+name=["']description["'][^>]+>/.test(src);
  return { hasHead, hasTitle, hasMetaDesc };
}

function main(cwd = process.cwd()) {
  const dir = path.join(cwd, 'pages');
  const report = [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.tsx'));
  for (const f of files) {
    if (['_app.tsx', '_document.tsx'].includes(f)) continue;
    const res = analyzeFile(path.join(dir, f));
    report.push({ page: `/${f.replace(/\.tsx$/i, '')}`, ...res });
  }
  const out = path.join(cwd, 'data', 'reports', 'seo-head.json');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`SEO: Wrote ${out} with ${report.length} entries.`);
}

if (require.main === module) main();

module.exports = { main };