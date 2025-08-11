#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function safeReadJson(absolutePath, fallback) {
  try {
    const raw = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function ensureDir(absolutePath) {
  try { fs.mkdirSync(absolutePath, { recursive: true }); } catch {}
}

function parseCsvLines(csvText) {
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return { header: [], rows: [] };
  const header = lines[0].split(',');
  const rows = lines.slice(1).map((line) => line.split(','));
  return { header, rows };
}

function analyzeLinks(workspaceRoot) {
  const reportPath = path.join(workspaceRoot, 'link_report.csv');
  let summary = {
    totalLinks: 0,
    okCount: 0,
    failCount: 0,
    internalCount: 0,
    internalFailCount: 0,
    byStatus: {},
  };
  try {
    const csv = fs.readFileSync(reportPath, 'utf8');
    const { header, rows } = parseCsvLines(csv);
    const colIndex = Object.fromEntries(header.map((h, i) => [h, i]));
    for (const r of rows) {
      if (r.length < header.length) continue;
      summary.totalLinks += 1;
      const ok = String(r[colIndex['ok']]).toLowerCase() === 'true';
      const status = r[colIndex['status_code']];
      const isInternal = String(r[colIndex['is_internal']]).toLowerCase() === 'true';
      if (ok) summary.okCount += 1; else summary.failCount += 1;
      if (isInternal) {
        summary.internalCount += 1;
        if (!ok) summary.internalFailCount += 1;
      }
      const key = String(status || '0');
      summary.byStatus[key] = (summary.byStatus[key] || 0) + 1;
    }
  } catch {}
  return summary;
}

function countAutomationScripts(workspaceRoot) {
  const dir = path.join(workspaceRoot, 'automation');
  try {
    const files = fs.readdirSync(dir);
    return files.filter((f) => f.endsWith('.cjs')).length;
  } catch {
    return 0;
  }
}

function listNetlifyFunctions(workspaceRoot) {
  const manifestPath = path.join(workspaceRoot, 'netlify', 'functions', 'functions-manifest.json');
  const manifest = safeReadJson(manifestPath, { functions: [] });
  const names = Array.isArray(manifest.functions) ? manifest.functions.slice().sort() : [];
  return { count: names.length, names };
}

function buildHtml(insights) {
  const { links, automations, functions } = insights;
  const okRate = links.totalLinks ? Math.round((links.okCount / links.totalLinks) * 100) : 0;
  return [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '  <meta charset="UTF-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '  <title>Automation Insights</title>',
    '  <style>body{font-family:system-ui,Segoe UI,Roboto,Inter,sans-serif;margin:24px} h1{margin-bottom:8px} p{color:#444} code{background:#f4f4f4;padding:.1rem .25rem;border-radius:4px} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px} .card{border:1px solid #eee;border-radius:10px;padding:12px}</style>',
    '</head>',
    '<body>',
    '  <h1>Automation Insights</h1>',
    '  <p>Autonomously generated. Coverage, health, and activity signals across the automation surface.</p>',
    '  <div class="grid">',
    `    <div class="card"><strong>Total Links</strong><div>${links.totalLinks}</div></div>`,
    `    <div class="card"><strong>OK</strong><div>${links.okCount}</div></div>`,
    `    <div class="card"><strong>Failures</strong><div>${links.failCount}</div></div>`,
    `    <div class="card"><strong>OK Rate</strong><div>${okRate}%</div></div>`,
    `    <div class="card"><strong>Internal Links</strong><div>${links.internalCount}</div></div>`,
    `    <div class="card"><strong>Internal Failures</strong><div>${links.internalFailCount}</div></div>`,
    `    <div class="card"><strong>Automation Scripts</strong><div>${automations.count}</div></div>`,
    `    <div class="card"><strong>Netlify Functions</strong><div>${functions.count}</div></div>`,
    '  </div>',
    '  <h2>Status Codes</h2>',
    '  <ul>',
    ...Object.entries(links.byStatus).sort((a,b)=>Number(b[0])-Number(a[0])).map(([k,v])=>`    <li><code>${k}</code>: ${v}</li>`),
    '  </ul>',
    '  <h2>Functions</h2>',
    '  <ul>',
    ...functions.names.slice(0,200).map((n)=>`    <li>${n}</li>`),
    '  </ul>',
    '  <p><small>Generated at '+new Date().toISOString()+'</small></p>',
    '</body>',
    '</html>'
  ].join('\n');
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const outDir = path.join(root, 'public', 'reports', 'automation-insights');
  const jsonDir = path.join(root, 'public', 'automation');
  ensureDir(outDir);
  ensureDir(jsonDir);

  const links = analyzeLinks(root);
  const automations = { count: countAutomationScripts(root) };
  const functions = listNetlifyFunctions(root);

  const insights = { links, automations, functions };
  const html = buildHtml(insights);
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  fs.writeFileSync(path.join(jsonDir, 'insights.json'), JSON.stringify(insights, null, 2));
  console.log('Automation Insights written to', outDir, 'and insights.json');
})();