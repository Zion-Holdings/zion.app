#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function computeMetrics(source) {
  const lines = source.split('\n').length;
  // Brace depth estimate
  let depth = 0, maxDepth = 0;
  for (const ch of source) {
    if (ch === '{') { depth++; if (depth > maxDepth) maxDepth = depth; }
    else if (ch === '}') { depth = Math.max(0, depth - 1); }
  }
  const patterns = [/\bif\b/g, /\belse if\b/g, /\bswitch\b/g, /\bcase\b/g, /\bfor\b/g, /\bwhile\b/g, /\bcatch\b/g, /\?\s*[^:]/g];
  let cyclomaticApprox = 1;
  for (const re of patterns) {
    const m = source.match(re);
    if (m) cyclomaticApprox += m.length;
  }
  const warnings = [];
  if (lines > 400) warnings.push('long-file');
  if (maxDepth > 6) warnings.push('deep-nesting');
  if (cyclomaticApprox > 30) warnings.push('high-complexity');
  return { lines, maxDepth, cyclomaticApprox, warnings };
}

function main() {
  const roots = ['pages', 'components'];
  const files = roots.flatMap((root) => glob.sync(`${root}/**/*.{js,jsx,ts,tsx}`, { nodir: true }));
  const results = files.map((f) => {
    const src = readFileSafe(f);
    const m = computeMetrics(src);
    return { file: f, ...m };
  });

  const topByComplexity = [...results].sort((a, b) => b.cyclomaticApprox - a.cyclomaticApprox).slice(0, 50);
  const topByLength = [...results].sort((a, b) => b.lines - a.lines).slice(0, 50);

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: { filesAnalyzed: results.length },
    topByComplexity,
    topByLength,
    warnings: results.filter(r => r.warnings.length > 0),
  };

  const outDir = path.resolve('public/reports/complexity');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2));

  const docsDir = path.resolve('docs/reports');
  fs.mkdirSync(docsDir, { recursive: true });
  const md = [
    '# Complexity Report',
    '',
    `Generated: ${summary.generatedAt}`,
    '',
    '## Top by Complexity',
    '',
    '| File | Lines | Depth | Complexity |',
    '| --- | ---: | ---: | ---: |',
    ...topByComplexity.map(r => `| ${r.file} | ${r.lines} | ${r.maxDepth} | ${r.cyclomaticApprox} |`),
    '',
    '## Top by Length',
    '',
    '| File | Lines | Depth | Complexity |',
    '| --- | ---: | ---: | ---: |',
    ...topByLength.map(r => `| ${r.file} | ${r.lines} | ${r.maxDepth} | ${r.cyclomaticApprox} |`),
  ].join('\n');
  fs.writeFileSync(path.join(docsDir, 'complexity.md'), md, 'utf8');

  console.log('Complexity report generated.');
}

main();