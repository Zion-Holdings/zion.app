#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

function listFilesRecursive(dir) {
  const out = [];
  function walk(current) {
    for (const entry of fs.readdirSync(current)) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else out.push({ path: full, size: stat.size });
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return out;
}

function formatBytes(n) {
  const units = ['B','KB','MB','GB'];
  let u = 0; let x = n;
  while (x >= 1024 && u < units.length - 1) { x /= 1024; u++; }
  return `${x.toFixed(1)} ${units[u]}`;
}

function toHtml(summary) {
  const rows = summary.largest.map(f => `<tr><td>${f.rel}</td><td style="text-align:right">${formatBytes(f.size)}</td></tr>`).join('\n');
  const budgetRows = summary.budgetChecks.map(b => `<tr><td>${b.name}</td><td>${b.limit}</td><td>${b.value}</td><td>${b.pass ? 'PASS' : 'FAIL'}</td></tr>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Performance Budget — Zion</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell, Noto Sans, Helvetica, Arial, sans-serif; background:#0f172a; color:#e2e8f0; margin:0}
header{padding:24px 20px; border-bottom:1px solid rgba(255,255,255,.08); background:rgba(15,23,42,.6); position:sticky; top:0; backdrop-filter:saturate(150%) blur(6px)}
.container{max-width:980px; margin:0 auto; padding:20px}
h1{margin:0; font-size:22px}
.muted{color:#94a3b8}
.card{border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.04); border-radius:12px; padding:16px; margin:16px 0}
.pass{color:#22c55e}
.fail{color:#ef4444}

table{width:100%; border-collapse:collapse}
th,td{border-bottom:1px solid rgba(255,255,255,.08); padding:8px 10px; font-size:14px}
th{color:#a5b4fc; text-align:left}
</style></head>
<body>
<header><div class="container"><h1>Performance Budget — <span class="muted">auto-updated</span></h1>
<div class="muted">Last updated: ${new Date().toISOString()}</div></div></header>
<main class="container">
  <section class="card">
    <h2>Budget Checks</h2>
    <table>
      <thead><tr><th>Metric</th><th>Limit</th><th>Value</th><th>Status</th></tr></thead>
      <tbody>${budgetRows}</tbody>
    </table>
  </section>
  <section class="card">
    <h2>Largest Assets (Top ${summary.largest.length})</h2>
    <table>
      <thead><tr><th>File</th><th style="text-align:right">Size</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </section>
</main>
</body></html>`;
}

async function main() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const files = listFilesRecursive(publicDir).map(f => ({ ...f, rel: path.relative(process.cwd(), f.path) }));
  const total = files.reduce((s, f) => s + f.size, 0);
  const images = files.filter(f => /\.(png|jpe?g|gif|webp|svg)$/i.test(f.path));
  const scripts = files.filter(f => /\.(js|mjs)$/i.test(f.path));

  const budgets = [
    { name: 'Total public assets', limitBytes: 8 * 1024 * 1024 },
    { name: 'Total images', limitBytes: 5 * 1024 * 1024 },
    { name: 'Largest single image', limitBytes: 600 * 1024 },
    { name: 'Largest script', limitBytes: 500 * 1024 },
  ];

  const largestImage = images.reduce((m, f) => f.size > (m?.size || 0) ? f : m, null);
  const largestScript = scripts.reduce((m, f) => f.size > (m?.size || 0) ? f : m, null);

  const budgetChecks = [
    { name: 'Total public assets', limit: formatBytes(budgets[0].limitBytes), value: formatBytes(total), pass: total <= budgets[0].limitBytes },
    { name: 'Total images', limit: formatBytes(budgets[1].limitBytes), value: formatBytes(images.reduce((s,f)=>s+f.size,0)), pass: images.reduce((s,f)=>s+f.size,0) <= budgets[1].limitBytes },
    { name: 'Largest single image', limit: formatBytes(budgets[2].limitBytes), value: largestImage ? formatBytes(largestImage.size) : '0 B', pass: largestImage ? largestImage.size <= budgets[2].limitBytes : true },
    { name: 'Largest script', limit: formatBytes(budgets[3].limitBytes), value: largestScript ? formatBytes(largestScript.size) : '0 B', pass: largestScript ? largestScript.size <= budgets[3].limitBytes : true },
  ];

  const largest = files.sort((a,b) => b.size - a.size).slice(0, 25);

  const outDir = path.resolve(process.cwd(), 'public', 'reports', 'performance-budget');
  await fse.ensureDir(outDir);
  const summary = { generatedAt: new Date().toISOString(), budgetChecks, largest: largest.map(f => ({ rel: path.relative(process.cwd(), f.path), size: f.size })) };
  fs.writeFileSync(path.join(outDir, 'index.html'), toHtml(summary));
  fs.writeFileSync(path.join(outDir, 'data.json'), JSON.stringify(summary, null, 2));
  console.log('Performance budget report generated:', path.relative(process.cwd(), outDir));
}

main().catch(err => { console.error('performance-budget-watcher failed', err); process.exit(0); });