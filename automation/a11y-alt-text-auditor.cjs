#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'a11y');
const JSON_PATH = path.join(REPORT_DIR, 'latest.json');
const HTML_PATH = path.join(REPORT_DIR, 'index.html');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listFiles(dir, exts) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFiles(full, exts));
    } else if (exts.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

function findMissingAltInSource(source) {
  const issues = [];
  // Find <img ...>
  const imgTagRegex = /<img\b[^>]*>/gi;
  const imageTagRegex = /<Image\b[^>]*>/gi;

  function analyzeTag(tag, tagName) {
    const hasAlt = /\balt\s*=/.test(tag);
    if (!hasAlt) {
      let src = '';
      const srcMatch = tag.match(/\bsrc\s*=\s*("([^"]*)"|'([^']*)'|\{([^}]*)\})/i);
      if (srcMatch) src = srcMatch[2] || srcMatch[3] || srcMatch[4] || '';
      const suggestion = suggestAltFromSrc(src);
      issues.push({ tagName, tag, src, suggestion });
    }
  }

  let m;
  while ((m = imgTagRegex.exec(source))) analyzeTag(m[0], 'img');
  while ((m = imageTagRegex.exec(source))) analyzeTag(m[0], 'Image');
  return issues;
}

function suggestAltFromSrc(src) {
  if (!src || typeof src !== 'string') return '';
  const base = src.split('?')[0].split('#')[0];
  const file = base.split('/').pop() || '';
  const name = file.replace(/\.[a-zA-Z0-9]+$/, '');
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
}

function generateHtmlReport(report) {
  const rows = report.items.map((it) => `
<tr>
  <td style="vertical-align:top"><code>${escapeHtml(it.file)}</code></td>
  <td style="vertical-align:top"><code>${escapeHtml(it.tagName)}</code></td>
  <td style="vertical-align:top"><pre style="white-space:pre-wrap;margin:0">${escapeHtml(truncate(it.tag, 300))}</pre></td>
  <td style="vertical-align:top">${escapeHtml(it.suggestion || '')}</td>
</tr>`).join('\n');

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>A11y Alt Text Auditor</title>
  <style>
    body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f172a;color:#e5e7eb;padding:24px}
    a{color:#67e8f9}
    .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;margin:0 0 16px 0}
    table{width:100%;border-collapse:collapse}
    th,td{border:1px solid rgba(255,255,255,0.12);padding:8px}
    th{background:rgba(255,255,255,0.06)}
    code,pre{color:#e5e7eb}
    .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#14b8a6;color:#042f2e;font-weight:600;font-size:12px}
  </style>
</head>
<body>
  <h1>A11y Alt Text Auditor <span class="badge">${report.totalMissing} missing</span></h1>
  <p>Scans JSX/TSX for <code>&lt;img&gt;</code> and <code>&lt;Image&gt;</code> lacking <code>alt</code>. Suggestions are heuristic based on filenames.</p>
  <div class="card">
    <div><strong>Generated:</strong> ${new Date(report.generatedAt).toLocaleString()}</div>
    <div><strong>Files scanned:</strong> ${report.filesScanned}</div>
  </div>
  <table>
    <thead><tr><th>File</th><th>Tag</th><th>Snippet</th><th>Suggested alt</th></tr></thead>
    <tbody>
      ${rows || '<tr><td colspan="4">No issues found \u2014 great job!</td></tr>'}
    </tbody>
  </table>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function truncate(s, n) {
  if (!s) return '';
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

(function main() {
  ensureDir(REPORT_DIR);
  const files = SOURCE_DIRS.flatMap((d) => listFiles(d, ['.tsx', '.jsx', '.js', '.ts']));
  const items = [];
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const issues = findMissingAltInSource(content);
      for (const issue of issues) {
        items.push({ file: path.relative(ROOT, file), ...issue });
      }
    } catch {}
  }
  const report = {
    generatedAt: new Date().toISOString(),
    filesScanned: files.length,
    totalMissing: items.length,
    items,
  };
  fs.writeFileSync(JSON_PATH, JSON.stringify(report, null, 2), 'utf8');
  fs.writeFileSync(HTML_PATH, generateHtmlReport(report), 'utf8');
  process.stdout.write(`[a11y-alt-text-auditor] Report written to ${path.relative(ROOT, HTML_PATH)}\n`);
})();