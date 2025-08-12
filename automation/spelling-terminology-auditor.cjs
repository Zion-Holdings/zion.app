#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components'), path.join(ROOT, 'docs')];
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'spelling');
const JSON_PATH = path.join(REPORT_DIR, 'latest.json');
const HTML_PATH = path.join(REPORT_DIR, 'index.html');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFiles(dir, exts) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listFiles(full, exts));
    else if (exts.includes(path.extname(entry.name))) results.push(full);
  }
  return results;
}

// Curated terminology corrections and common typos
const CORRECTIONS = [
  { pattern: /\bGithub\b/g, suggestion: 'GitHub', category: 'Brand casing' },
  { pattern: /\bJavascript\b/g, suggestion: 'JavaScript', category: 'Brand casing' },
  { pattern: /\bNodeJS\b/g, suggestion: 'Node.js', category: 'Brand casing' },
  { pattern: /\bNextJS\b/g, suggestion: 'Next.js', category: 'Brand casing' },
  { pattern: /\bReactJS\b/g, suggestion: 'React', category: 'Brand casing' },
  { pattern: /\bTailwindcss\b/g, suggestion: 'Tailwind CSS', category: 'Brand casing' },
  { pattern: /\bTypescript\b/g, suggestion: 'TypeScript', category: 'Brand casing' },
  { pattern: /\bNetlify\s+functions\b/g, suggestion: 'Netlify Functions', category: 'Brand casing' },
  { pattern: /\bOpen source\b/g, suggestion: 'open source', category: 'Style' },
  { pattern: /\bE-mail\b/g, suggestion: 'email', category: 'Style' },
  { pattern: /\bteh\b/g, suggestion: 'the', category: 'Common typo' },
  { pattern: /\brecieve\b/g, suggestion: 'receive', category: 'Common typo' },
  { pattern: /\boccured\b/g, suggestion: 'occurred', category: 'Common typo' },
  { pattern: /\bseperate\b/g, suggestion: 'separate', category: 'Common typo' },
  { pattern: /\bdefinately\b/g, suggestion: 'definitely', category: 'Common typo' },
  { pattern: /\bacommodate\b/g, suggestion: 'accommodate', category: 'Common typo' },
];

function toPlainText(content) {
  // Remove simple JSX/HTML and markdown syntax for better matching
  return String(content)
    .replace(/<[^>]+>/g, ' ')
    .replace(/`{1,3}[^`]*`{1,3}/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[#*_>\-]+/g, ' ');
}

function findIssuesInFile(filePath) {
  let src = '';
  try { src = fs.readFileSync(filePath, 'utf8'); } catch { return []; }
  const text = toPlainText(src);
  const issues = [];
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const rule of CORRECTIONS) {
      let m;
      const regex = new RegExp(rule.pattern); // clone
      while ((m = regex.exec(line)) !== null) {
        const found = m[0];
        if (!found) break;
        issues.push({
          file: path.relative(ROOT, filePath),
          line: i + 1,
          from: found,
          to: rule.suggestion,
          category: rule.category,
          context: line.trim().slice(0, 300)
        });
      }
    }
  }
  return issues;
}

function generateHtml(report) {
  const rows = report.items.map((it) => `
<tr>
  <td><code>${escapeHtml(it.file)}:${it.line}</code></td>
  <td>${escapeHtml(it.category)}</td>
  <td><code>${escapeHtml(it.from)}</code></td>
  <td><code>${escapeHtml(it.to)}</code></td>
  <td><pre style="white-space:pre-wrap;margin:0">${escapeHtml(it.context)}</pre></td>
</tr>`).join('\n');

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Spelling & Terminology Auditor</title>
  <style>
    body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f172a;color:#e5e7eb;padding:24px}
    a{color:#67e8f9}
    .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;margin:0 0 16px 0}
    table{width:100%;border-collapse:collapse}
    th,td{border:1px solid rgba(255,255,255,0.12);padding:8px;vertical-align:top}
    th{background:rgba(255,255,255,0.06)}
    code,pre{color:#e5e7eb}
    .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#14b8a6;color:#042f2e;font-weight:600;font-size:12px}
  </style>
</head>
<body>
  <h1>Spelling & Terminology Auditor <span class="badge">${report.items.length} issues</span></h1>
  <p>Finds style and brand inconsistencies and common misspellings across pages, components, and docs.</p>
  <div class="card">
    <div><strong>Generated:</strong> ${new Date(report.generatedAt).toLocaleString()}</div>
    <div><strong>Files scanned:</strong> ${report.filesScanned}</div>
  </div>
  <table>
    <thead><tr><th>File:Line</th><th>Category</th><th>Found</th><th>Suggestion</th><th>Context</th></tr></thead>
    <tbody>
      ${rows || '<tr><td colspan="5">No issues found — great consistency!</td></tr>'}
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

(function main() {
  ensureDir(REPORT_DIR);
  const files = SOURCE_DIRS.flatMap((d) => listFiles(d, ['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx']));
  const items = [];
  for (const file of files) {
    try { items.push(...findIssuesInFile(file)); } catch {}
  }
  const report = { generatedAt: new Date().toISOString(), filesScanned: files.length, items };
  fs.writeFileSync(JSON_PATH, JSON.stringify(report, null, 2), 'utf8');
  fs.writeFileSync(HTML_PATH, generateHtml(report), 'utf8');
  process.stdout.write(`[spelling-terminology] Report written to ${path.relative(ROOT, HTML_PATH)}\n`);
})();