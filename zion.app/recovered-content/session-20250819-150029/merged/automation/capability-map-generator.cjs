#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function listFilesRecursive(rootDir) {
  const results = [];
  const stack = [rootDir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) stack.push(full);
      else results.push(full);
    }
  }
  return results;
}

function extractName(filePath) {
  const base = path.basename(filePath);
  return base.replace(/\.(cjs|mjs|js|ts)x?$/, '');
}

function buildCapabilityMap(workspaceRoot) {
  const automationsDir = path.join(workspaceRoot, 'automation');
  const functionsDir = path.join(workspaceRoot, 'netlify', 'functions');

  const automationFiles = fs.existsSync(automationsDir)
    ? listFilesRecursive(automationsDir).filter((f) => /\.(cjs|js|mjs)$/i.test(f) && !/\/logs\//.test(f))
    : [];

  const functionFiles = fs.existsSync(functionsDir)
    ? listFilesRecursive(functionsDir).filter((f) => /\.(js)$/i.test(f))
    : [];

  const functionsManifest = readJson(path.join(functionsDir, 'functions-manifest.json'), { functions: [] });

  const automationEntries = automationFiles.map((f) => ({
    type: 'automation-script',
    path: path.relative(workspaceRoot, f),
    name: extractName(f)
  }));

  const functionEntries = functionFiles
    .filter((f) => !/functions-manifest\.json$/.test(f))
    .map((f) => ({
      type: 'netlify-function',
      path: path.relative(workspaceRoot, f),
      name: extractName(f)
    }));

  const functionNames = Array.isArray(functionsManifest.functions) ? functionsManifest.functions : [];

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      automationScripts: automationEntries.length,
      netlifyFunctions: functionEntries.length,
      manifestFunctions: functionNames.length
    },
    manifestFunctions: functionNames,
    entries: [...automationEntries, ...functionEntries].sort((a, b) => a.name.localeCompare(b.name))
  };

  return summary;
}

function renderHtml(summary) {
  const rows = summary.entries.map((e) => {
    const isFunc = e.type === 'netlify-function';
    const link = isFunc ? `/.netlify/functions/${e.name}` : `https://github.com/Zion-Holdings/zion.app/blob/main/${e.path}`;
    const icon = isFunc ? '⚙️' : '📜';
    return `
      <tr>
        <td>${icon}</td>
        <td><code>${e.name}</code></td>
        <td>${e.type}</td>
        <td><a href="${link}">${isFunc ? 'run ↗' : 'view ↗'}</a></td>
      </tr>`;
  }).join('\n');

  return `<!doctype html>
<html lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Capability Map — Zion</title>
<style>
  body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;background:#0b1220;color:#fff;margin:0;padding:24px}
  h1,h2{margin:0 0 12px}
  .muted{color:#9ab}
  .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;margin:16px 0}
  table{width:100%;border-collapse:collapse;font-size:14px}
  th,td{border-bottom:1px solid rgba(255,255,255,0.08);padding:8px;text-align:left}
  a{color:#7de3ff;text-decoration:none}
  a:hover{text-decoration:underline}
  code{background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:6px}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
  .pill{display:inline-block;background:rgba(125,227,255,0.14);color:#c7f1ff;border:1px solid rgba(125,227,255,0.5);padding:4px 8px;border-radius:999px;font-size:12px;margin-right:6px}
</style>
<body>
  <h1>Capability Map</h1>
  <div class="muted">Live inventory of automations and cloud functions</div>

  <div class="grid">
    <div class="card">
      <h2>Totals</h2>
      <div><span class="pill">Automation Scripts: ${summary.totals.automationScripts}</span></div>
      <div><span class="pill">Netlify Functions: ${summary.totals.netlifyFunctions}</span></div>
      <div><span class="pill">Manifest: ${summary.totals.manifestFunctions}</span></div>
    </div>
    <div class="card">
      <h2>Quick Links</h2>
      <div><a href="/.netlify/functions/capability-map-runner">Run Capability Map ↗</a></div>
      <div><a href="/">Home</a> · <a href="/automation">Automation Hub</a></div>
    </div>
  </div>

  <div class="card">
    <h2>Entries</h2>
    <table>
      <thead><tr><th></th><th>Name</th><th>Type</th><th>Link</th></tr></thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>
</body>
</html>`;
}

(function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const outDir = path.join(workspaceRoot, 'public', 'reports', 'capability-map');
  ensureDir(outDir);

  const summary = buildCapabilityMap(workspaceRoot);
  fs.writeFileSync(path.join(workspaceRoot, 'public', 'automation', 'capability-map.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(outDir, 'index.html'), renderHtml(summary));

  process.stdout.write('Capability map generated.\n');
})();