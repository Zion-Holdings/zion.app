#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }
function read(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }

(function main() {
  const patterns = ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'];
  const files = patterns.flatMap((p) => glob.sync(p, { nodir: true }))
    .map((f) => f.replace(/^\.\//, ''));

  const idRegex = /id\s*=\s*(?:"([^"]+)"|\{\s*['"]([^'"]+)['"]\s*\})/g;
  const hrefRegex = /href\s*=\s*(?:"([^"]+)"|\{\s*['"]([^'"]+)['"]\s*\})/g;

  const globalIds = new Set();
  const anchors = [];

  for (const file of files) {
    const content = read(file);
    let m;
    while ((m = idRegex.exec(content)) !== null) {
      const val = m[1] || m[2];
      if (val) globalIds.add(val);
    }
    while ((m = hrefRegex.exec(content)) !== null) {
      const val = (m[1] || m[2] || '').trim();
      if (!val) continue;
      if (val.includes('#')) anchors.push({ file, href: val });
    }
  }

  const missing = [];
  for (const a of anchors) {
    const hash = a.href.split('#')[1] || '';
    if (!hash) continue;
    if (!globalIds.has(hash)) missing.push({ file: a.file, href: a.href, missingId: hash });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      files: files.length,
      ids: globalIds.size,
      anchors: anchors.length,
      missing: missing.length,
    },
    missing,
  };

  ensureDir(path.resolve('public/reports'));
  ensureDir(path.resolve('docs/reports'));
  fs.writeFileSync(path.resolve('public/reports/internal-anchors-report.json'), JSON.stringify(report, null, 2));

  const md = [
    '# Internal Anchors Report',
    '',
    `Generated: ${report.generatedAt}`,
    '',
    `- Files scanned: ${report.totals.files}`,
    `- Distinct ids: ${report.totals.ids}`,
    `- Anchor hrefs: ${report.totals.anchors}`,
    `- Missing anchors: ${report.totals.missing}`,
    '',
    report.missing.length ? '## Missing' : '## Missing\nNone',
    ...report.missing.map((m) => `- ${m.file} → ${m.href} (missing id: ${m.missingId})`),
    '',
  ].join('\n');
  fs.writeFileSync(path.resolve('docs/reports/internal-anchors.md'), md);

  console.log('Anchor report written to public/reports and docs/reports');
})();