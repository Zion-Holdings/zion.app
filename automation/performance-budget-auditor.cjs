#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function getStatsForFiles(patterns) {
  const files = patterns.flatMap((p) => glob.sync(p, { nodir: true }));
  const results = [];
  for (const file of files) {
    try {
      const abs = path.resolve(file);
      const content = readFileSafe(abs);
      const lines = content.split(/\r?\n/).length;
      const bytes = fs.statSync(abs).size;
      results.push({ file: file.replace(/^\.\//, ''), lines, bytes });
    } catch (_) {}
  }
  return results;
}

function sortDescBy(field) {
  return (a, b) => (b[field] || 0) - (a[field] || 0);
}

function toKb(bytes) { return Math.round(bytes / 102.4) / 10; }

function generateMarkdown(summary) {
  const lines = [];
  lines.push('# Performance Budget Report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Budgets');
  lines.push(`- Page max: ${summary.budgets.page.maxKb} KB`);
  lines.push(`- Component max: ${summary.budgets.component.maxKb} KB`);
  lines.push('');
  lines.push('## Top Pages by size');
  lines.push('| File | Size (KB) | Lines | Status |');
  lines.push('|---|---:|---:|---|');
  for (const p of summary.topPages) {
    const kb = toKb(p.bytes);
    const status = kb > summary.budgets.page.maxKb ? 'Over' : 'OK';
    lines.push(`| ${p.file} | ${kb} | ${p.lines} | ${status} |`);
  }
  lines.push('');
  lines.push('## Top Components by size');
  lines.push('| File | Size (KB) | Lines | Status |');
  lines.push('|---|---:|---:|---|');
  for (const c of summary.topComponents) {
    const kb = toKb(c.bytes);
    const status = kb > summary.budgets.component.maxKb ? 'Over' : 'OK';
    lines.push(`| ${c.file} | ${kb} | ${c.lines} | ${status} |`);
  }
  lines.push('');
  if (summary.violations.length) {
    lines.push('## Violations');
    lines.push('| Type | File | Size (KB) | Limit (KB) |');
    lines.push('|---|---|---:|---:|');
    for (const v of summary.violations) {
      lines.push(`| ${v.type} | ${v.file} | ${v.sizeKb} | ${v.limitKb} |`);
    }
  } else {
    lines.push('## Violations');
    lines.push('None');
  }
  lines.push('');
  return lines.join('\n');
}

(function main() {
  const pagePatterns = ['pages/**/*.{js,jsx,ts,tsx}'];
  const componentPatterns = ['components/**/*.{js,jsx,ts,tsx}'];

  const pages = getStatsForFiles(pagePatterns);
  const components = getStatsForFiles(componentPatterns);

  const budgets = {
    page: { maxKb: 60 },
    component: { maxKb: 40 },
  };

  const topPages = [...pages].sort(sortDescBy('bytes')).slice(0, 20);
  const topComponents = [...components].sort(sortDescBy('bytes')).slice(0, 20);

  const violations = [];
  for (const p of pages) {
    const kb = toKb(p.bytes);
    if (kb > budgets.page.maxKb) violations.push({ type: 'page', file: p.file, sizeKb: kb, limitKb: budgets.page.maxKb });
  }
  for (const c of components) {
    const kb = toKb(c.bytes);
    if (kb > budgets.component.maxKb) violations.push({ type: 'component', file: c.file, sizeKb: kb, limitKb: budgets.component.maxKb });
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    budgets,
    totals: {
      pages: pages.length,
      components: components.length,
    },
    topPages,
    topComponents,
    violations,
  };

  // Write artifacts
  ensureDir(path.resolve('public/reports'));
  ensureDir(path.resolve('docs/reports'));

  fs.writeFileSync(path.resolve('public/reports/performance-budget.json'), JSON.stringify({ summary, pages, components }, null, 2));
  fs.writeFileSync(path.resolve('public/reports/perf-budget-summary.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.resolve('docs/reports/performance-budget.md'), generateMarkdown(summary));

  console.log('Performance budget artifacts written to public/reports and docs/reports');
})();