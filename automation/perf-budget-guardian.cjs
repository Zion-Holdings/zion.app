#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursive(dir) {
  const results = [];
  (function walk(current) {
    let entries = [];
    try { entries = fs.readdirSync(current); } catch { return; }
    for (const name of entries) {
      const abs = path.join(current, name);
      let stat;
      try { stat = fs.statSync(abs); } catch { continue; }
      if (stat.isDirectory()) walk(abs);
      else results.push({ abs, rel: abs.replace(process.cwd() + path.sep, ''), size: stat.size });
    }
  })(dir);
  return results;
}

function ensureDir(p) { try { fs.mkdirSync(p, { recursive: true }); } catch {} }

function main() {
  const root = path.resolve(__dirname, '..');
  const targets = [
    path.join(root, 'out', '_next', 'static'),
    path.join(root, 'public'),
    path.join(root, 'styles'),
  ];

  const files = [];
  for (const target of targets) {
    if (fs.existsSync(target)) files.push(...listFilesRecursive(target));
  }

  files.sort((a, b) => b.size - a.size);
  const largest = files.slice(0, 40).map(f => ({ path: f.rel, size: f.size }));

  const budgets = [
    { name: 'single-asset-max', limitBytes: 300 * 1024, violatedBy: [] },
    { name: 'css-total-max', limitBytes: 400 * 1024, total: 0, violated: false },
    { name: 'js-total-max', limitBytes: 1000 * 1024, total: 0, violated: false },
  ];

  for (const f of files) {
    const lower = f.rel.toLowerCase();
    if (/\.css$/.test(lower)) budgets[1].total += f.size;
    if (/\.js$/.test(lower)) budgets[2].total += f.size;
    if (f.size > budgets[0].limitBytes) budgets[0].violatedBy.push({ path: f.rel, size: f.size });
  }
  budgets[1].violated = budgets[1].total > budgets[1].limitBytes;
  budgets[2].violated = budgets[2].total > budgets[2].limitBytes;

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      scannedFiles: files.length,
      scannedTargets: targets.filter(fs.existsSync).map(p => path.relative(root, p)),
    },
    largest,
    budgets,
    summary: {
      violations: budgets.filter(b => b.violated || (b.violatedBy && b.violatedBy.length)).length,
      cssTotalKb: +(budgets[1].total / 1024).toFixed(1),
      jsTotalKb: +(budgets[2].total / 1024).toFixed(1),
    }
  };

  const outDir = path.join(root, 'public', 'automation');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'perf-budget-report.json'), JSON.stringify(report, null, 2));

  const md = [
    '# Performance Budget Report',
    '',
    `Generated: ${report.generatedAt}`,
    '',
    `- Scanned Files: ${report.totals.scannedFiles}`,
    `- CSS Total: ${report.summary.cssTotalKb} KB (limit ${(budgets[1].limitBytes/1024).toFixed(0)} KB)`,
    `- JS Total: ${report.summary.jsTotalKb} KB (limit ${(budgets[2].limitBytes/1024).toFixed(0)} KB)`,
    `- Violations: ${report.summary.violations}`,
    '',
    '## Largest Assets',
    '',
    ...report.largest.map(f => `- ${f.path} — ${(f.size/1024).toFixed(1)} KB`),
    '',
    'Full JSON: public/automation/perf-budget-report.json'
  ].join('\n');
  ensureDir(path.join(root, 'docs'));
  fs.writeFileSync(path.join(root, 'docs', 'PERF_BUDGET.md'), md);

  console.log('Performance budget report generated.');
}

main();