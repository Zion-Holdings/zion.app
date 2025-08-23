#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');
const OUT_DIR = path.join(ROOT, 'public', 'reports', 'automation-health');
const OUT_FILE = path.join(OUT_DIR, 'index.html');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listLogs(dir) {
  try { return fs.readdirSync(dir).filter(f => f.endsWith('.log')); } catch { return []; }
}

function readTail(p, bytes = 4000) {
  try {
    const stat = fs.statSync(p);
    const size = stat.size;
    const fd = fs.openSync(p, 'r');
    const len = Math.min(bytes, size);
    const buf = Buffer.alloc(len);
    fs.readSync(fd, buf, 0, len, Math.max(0, size - len));
    fs.closeSync(fd);
    return buf.toString('utf8');
  } catch { return ''; }
}

function escape(s) { return String(s).replace(/[&<>]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch])); }

function generateHtml(items) {
  const rows = items.map(it => `
    <tr>
      <td style="padding:6px;border-bottom:1px solid rgba(255,255,255,0.1)">${escape(it.name)}</td>
      <td style="padding:6px;border-bottom:1px solid rgba(255,255,255,0.1)">${new Date(it.mtimeMs).toISOString()}</td>
      <td style="padding:6px;border-bottom:1px solid rgba(255,255,255,0.1)"><details><summary>tail</summary><pre style="white-space:pre-wrap">${escape(it.tail)}</pre></details></td>
    </tr>`).join('\n');
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Automation Health — Logs Overview</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background:#020617; color:#fff; }
    .container { max-width: 1100px; margin: 0 auto; padding: 24px; }
    a { color: #67e8f9; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Automation Health</h1>
    <p class="opacity-80">Recent automation logs aggregated. Updated ${new Date().toISOString()}.</p>
    <table style="width:100%; border-collapse:collapse; font-size:12px;">
      <thead>
        <tr>
          <th style="text-align:left;padding:6px;border-bottom:1px solid rgba(255,255,255,0.3)">Log</th>
          <th style="text-align:left;padding:6px;border-bottom:1px solid rgba(255,255,255,0.3)">Modified</th>
          <th style="text-align:left;padding:6px;border-bottom:1px solid rgba(255,255,255,0.3)">Tail</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>
</body>
</html>`;
}

(function main() {
  ensureDir(OUT_DIR);
  const logs = listLogs(LOGS_DIR);
  const items = logs.map(name => {
    const p = path.join(LOGS_DIR, name);
    const stat = fs.statSync(p);
    return { name, mtimeMs: stat.mtimeMs, tail: readTail(p) };
  }).sort((a,b) => b.mtimeMs - a.mtimeMs);
  const html = generateHtml(items);
  fs.writeFileSync(OUT_FILE, html);
  console.log('Wrote', OUT_FILE);
})();