#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function listDirs(dir) {
  try { return fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name); } catch { return []; }
}

function fileExists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

function main() {
  const root = path.resolve(__dirname, '..');

  const reportsRoot = path.join(root, 'public', 'reports');
  const reportDirs = listDirs(reportsRoot);

  const functionsManifestPath = path.join(root, 'netlify', 'functions', 'functions-manifest.json');
  let functionsManifest = { functions: [] };
  try { functionsManifest = JSON.parse(fs.readFileSync(functionsManifestPath, 'utf8')); } catch {}

  const overview = {
    generatedAt: new Date().toISOString(),
    reports: reportDirs.map((d) => ({ name: d, url: `/reports/${d}/` })).sort((a, b) => a.name.localeCompare(b.name)),
    netlifyFunctions: functionsManifest.functions || []
  };

  const outDir = path.join(root, 'public', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const autoDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(autoDir, { recursive: true });
  fs.writeFileSync(path.join(autoDir, 'overview.json'), JSON.stringify(overview, null, 2));

  const links = overview.reports.map((r) => `<li><a href="${r.url}">${r.name}</a></li>`).join('\n');
  const funcs = overview.netlifyFunctions.map((f) => `<li><a href="/.netlify/functions/${f}">${f}</a></li>`).join('\n');
  const html = `<!doctype html>
<html lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Automation Status Dashboard — Zion</title>
<style>
  body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;background:#0b1220;color:#fff;margin:0;padding:24px}
  a{color:#7de3ff;text-decoration:none}
  a:hover{text-decoration:underline}
  .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;margin:16px 0}
</style>
<body>
  <h1>Automation Status Dashboard</h1>
  <p><a href="/.netlify/functions/automation-status-dashboard">Run Dashboard Refresh ↗</a> · <a href="/">Home</a></p>
  <div class="card">
    <h2>Reports</h2>
    <ul>${links}</ul>
  </div>
  <div class="card">
    <h2>Netlify Functions</h2>
    <ul>${funcs}</ul>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  process.stdout.write('Automation status dashboard generated.\n');
}

main();