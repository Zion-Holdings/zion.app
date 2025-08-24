#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const TARGET_DIRS = ['pages', 'docs', 'components'].map((d) => path.join(ROOT, d));
const REPORT_JSON_DIR = path.join(ROOT, 'data', 'reports', 'staleness');
const REPORT_HTML_DIR = path.join(ROOT, 'public', 'reports', 'staleness');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_JSON_DIR);
ensureDir(REPORT_HTML_DIR);

const EXT_RE = /\.(md|mdx|tsx|ts|jsx|js)$/i;

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else if (EXT_RE.test(entry.name)) out.push(full);
  }
  return out;
}

function gitLastCommitUnixTs(file) {
  try {
    const out = execSync(`git log -1 --format=%ct -- ${JSON.stringify(path.relative(ROOT, file))}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], shell: true }).trim();
    const ts = parseInt(out, 10);
    if (!isNaN(ts) && ts > 0) return ts * 1000; // ms
  } catch (e) {
    // ignore
  }
  try {
    return fs.statSync(file).mtimeMs;
  } catch (e) {
    return Date.now();
  }
}

(function main() {
  const files = TARGET_DIRS.flatMap(listFiles);
  const now = Date.now();
  const DAY_MS = 24 * 60 * 60 * 1000;
  const thresholds = { warnDays: 60, staleDays: 120, criticalDays: 240 };

  const entries = files.map((file) => {
    const tsMs = gitLastCommitUnixTs(file);
    const ageDays = Math.round((now - tsMs) / DAY_MS);
    return { file: path.relative(ROOT, file), lastModifiedMs: tsMs, ageDays };
  }).sort((a, b) => b.ageDays - a.ageDays);

  const summary = {
    totalFiles: entries.length,
    overWarn: entries.filter((e) => e.ageDays >= thresholds.warnDays).length,
    overStale: entries.filter((e) => e.ageDays >= thresholds.staleDays).length,
    overCritical: entries.filter((e) => e.ageDays >= thresholds.criticalDays).length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    thresholds,
    summary,
    items: entries,
  };

  fs.writeFileSync(path.join(REPORT_JSON_DIR, 'latest.json'), JSON.stringify(report, null, 2));

  function renderRow(e) {
    return `<tr><td>${e.file}</td><td>${e.ageDays} days</td></tr>`;
  }

  const rows = entries.slice(0, 300).map(renderRow).join('\n');
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Staleness Auditor</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>Content Staleness Auditor</h1>
  <p>Autonomously generated at ${report.generatedAt}. Thresholds: warn ≥ ${thresholds.warnDays}d, stale ≥ ${thresholds.staleDays}d, critical ≥ ${thresholds.criticalDays}d.</p>
  <p>Total files: ${summary.totalFiles}. Over warn: ${summary.overWarn}. Over stale: ${summary.overStale}. Over critical: ${summary.overCritical}.</p>
  <table>
    <thead><tr><th>File</th><th>Age</th></tr></thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(REPORT_HTML_DIR, 'index.html'), html);

  console.log(`Staleness audit: ${summary.overStale} stale, ${summary.overCritical} critical out of ${summary.totalFiles} files.`);
})();