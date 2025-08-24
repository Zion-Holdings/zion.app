#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'link-health');
const CSV_PATH = path.join(REPORT_DIR, 'links.csv');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return { headers: [], rows: [] };
  const headers = lines[0].split(',');
  const rows = lines.slice(1).map((line) => {
    // naive CSV split; our fields don't contain commas
    const cols = line.split(',');
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = cols[i];
    });
    return obj;
  });
  return { headers, rows };
}

function generateHtml(summary) {
  const rowsHtml = summary.records
    .slice(0, 1000)
    .map((r) => {
      const status = r.status_code == null ? '-' : r.status_code;
      const ok = r.ok ? '<span style="color:#10b981">OK</span>' : '<span style="color:#f43f5e">Broken</span>';
      const type = r.is_internal ? 'internal' : 'external';
      const esc = (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
      return `<tr><td style="padding:8px;border:1px solid #223">${status}</td><td style="padding:8px;border:1px solid #223">${ok}</td><td style="padding:8px;border:1px solid #223">${type}</td><td style="padding:8px;border:1px solid #223;max-width:520px;overflow-wrap:anywhere">${esc(r.link_url)}</td><td style="padding:8px;border:1px solid #223;max-width:420px;overflow-wrap:anywhere">${esc(r.source_url)}</td></tr>`;
    })
    .join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Link Health Report</title>
  <style>
    body{background:#0f172a;color:#e5e7eb;font-family:ui-sans-serif,system-ui,-apple-system}
    .container{max-width:1080px;margin:40px auto;padding:0 16px}
    h1{font-size:24px;margin-bottom:8px}
    p{color:#94a3b8}
    .stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:12px}
    .card{border:1px solid #223;background:#0b1220;padding:12px;border-radius:12px}
    table{width:100%;border-collapse:collapse;margin-top:16px}
    thead td{font-weight:700;background:#111827}
  </style>
</head>
<body>
  <div class="container">
    <h1>Link Health Report</h1>
    <p>Automated crawl of the live site. Generated at ${new Date().toISOString()}.</p>
    <div class="stats">
      <div class="card">Total links<br/><strong>${summary.totals.total}</strong></div>
      <div class="card">Broken<br/><strong style="color:#f43f5e">${summary.totals.broken}</strong></div>
      <div class="card">Internal broken<br/><strong style="color:#f59e0b">${summary.totals.internalBroken}</strong></div>
      <div class="card">External broken<br/><strong style="color:#f59e0b">${summary.totals.externalBroken}</strong></div>
    </div>
    <table>
      <thead><tr><td>Status</td><td>OK</td><td>Type</td><td>Link</td><td>Source</td></tr></thead>
      <tbody>
${rowsHtml}
      </tbody>
    </table>
  </div>
</body>
</html>`;
}

(function main(){
  const baseUrl = process.env.BASE_URL || process.env.NETLIFY_BASE_URL || process.env.SITE_URL || 'https://zion.app';
  ensureDir(REPORT_DIR);

  console.log(`[link-health] Crawling base URL: ${baseUrl}`);
  const pyPath = path.join(ROOT, 'crawl_links.py');
  const result = spawnSync('python3', [pyPath, baseUrl, '--max-pages', '1500', '--timeout', '15', '--output', CSV_PATH], { stdio: 'inherit' });
  if (result.error) {
    console.error('[link-health] Python execution failed:', result.error.message);
  }

  if (!fs.existsSync(CSV_PATH)) {
    console.error('[link-health] CSV not found at', CSV_PATH);
    process.exit(1);
  }

  const { rows } = readCsv(CSV_PATH);
  // Normalize boolean and numeric fields
  const records = rows.map((r) => ({
    source_url: r.source_url,
    link_url: r.link_url,
    final_url: r.final_url || null,
    status_code: r.status_code ? Number(r.status_code) : null,
    ok: String(r.ok).toLowerCase() === 'true',
    is_internal: String(r.is_internal).toLowerCase() === 'true',
    error: r.error || null,
  }));

  const broken = records.filter((r) => !r.ok);
  const internalBroken = broken.filter((r) => r.is_internal);
  const externalBroken = broken.filter((r) => !r.is_internal);

  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    totals: {
      total: records.length,
      broken: broken.length,
      internalBroken: internalBroken.length,
      externalBroken: externalBroken.length,
    },
    records,
  };

  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(summary, null, 2), 'utf8');
  fs.writeFileSync(path.join(REPORT_DIR, 'index.html'), generateHtml(summary), 'utf8');

  console.log(`[link-health] total=${summary.totals.total} broken=${summary.totals.broken} internal=${summary.totals.internalBroken} external=${summary.totals.externalBroken}`);
})();