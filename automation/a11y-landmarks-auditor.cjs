#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function read(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }
function write(file, content) { ensureDir(path.dirname(file)); fs.writeFileSync(file, content); }

function analyze(content) {
  const hasMain = /<main\b|role\s*=\s*"main"/i.test(content);
  const hasNav = /<nav\b|role\s*=\s*"navigation"/i.test(content);
  const hasHeader = /<header\b|role\s*=\s*"banner"/i.test(content);
  const hasFooter = /<footer\b|role\s*=\s*"contentinfo"/i.test(content);
  return { hasMain, hasNav, hasHeader, hasFooter };
}

function generateHtml(rows) {
  const tr = rows.map(r => {
    const missing = [];
    if (!r.hasMain) missing.push('main');
    if (!r.hasNav) missing.push('nav');
    if (!r.hasHeader) missing.push('header');
    if (!r.hasFooter) missing.push('footer');
    const badge = missing.length ? `<span class="badge danger">${missing.length} missing</span>` : `<span class="badge ok">OK</span>`;
    return `<tr>
      <td>${r.relPath}</td>
      <td>${r.hasMain ? '✔' : '✖'}</td>
      <td>${r.hasNav ? '✔' : '✖'}</td>
      <td>${r.hasHeader ? '✔' : '✖'}</td>
      <td>${r.hasFooter ? '✔' : '✖'}</td>
      <td>${missing.length ? missing.join(', ') : '—'} ${badge}</td>
    </tr>`;
  }).join('\n');

  const totalMissing = rows.reduce((a,b)=>a + (b.hasMain?0:1) + (b.hasNav?0:1) + (b.hasHeader?0:1) + (b.hasFooter?0:1), 0);

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>A11y Landmarks Auditor</title>
  <style>
    body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f172a;color:#e5e7eb;padding:24px}
    a{color:#67e8f9}
    .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#0ea5e9;color:white;font-size:12px;margin-left:8px}
    .badge.ok{background:#10b981}
    .badge.danger{background:#ef4444}
    table{width:100%;border-collapse:collapse;margin-top:12px}
    th,td{border:1px solid #1f2937;padding:8px;text-align:left}
    th{background:#0b1220}
  </style>
</head>
<body>
  <h1>A11y Landmarks Auditor <span class="badge">${totalMissing} missing total</span></h1>
  <p>Checks for presence of semantic landmarks: <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, and <code>&lt;footer&gt;</code> (or equivalent ARIA roles).</p>
  <table>
    <thead>
      <tr><th>File</th><th>main</th><th>nav</th><th>header</th><th>footer</th><th>Notes</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
}

(function main(){
  const roots = [path.join(process.cwd(),'pages'), path.join(process.cwd(),'public')];
  const files = roots.flatMap(root => glob.sync('**/*.{html,htm,tsx,jsx}', { cwd: root, absolute: true, dot: false, nodir: true }));
  const rows = [];
  for (const file of files) {
    const content = read(file);
    if (!content) continue;
    const res = analyze(content);
    const rel = file.replace(process.cwd() + path.sep, '');
    rows.push({ relPath: rel, ...res });
  }
  const html = generateHtml(rows);
  const out = path.join(process.cwd(), 'public', 'reports', 'a11y-landmarks', 'index.html');
  write(out, html);
  console.log(`[a11y-landmarks-auditor] wrote ${out}`);
})();