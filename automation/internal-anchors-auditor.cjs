#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function read(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }
function write(file, content) { ensureDir(path.dirname(file)); fs.writeFileSync(file, content); }

function findAnchorsAndIds(content) {
  const anchors = [];
  const ids = new Set();
  // href="#id" or href="/path#id"
  const hrefRe = /href\s*=\s*"([^"]*#[^"]+)"/g;
  let m;
  while ((m = hrefRe.exec(content))) { anchors.push(m[1]); }
  // id="..."
  const idRe = /id\s*=\s*"([^"]+)"/g;
  while ((m = idRe.exec(content))) { ids.add(m[1]); }
  return { anchors, ids };
}

function generateHtmlReport(results) {
  const rows = results.map(r => {
    const missingRows = r.missing.length
      ? r.missing.map(x => `<li><code>${x}</code></li>`).join('')
      : '<li><em>No missing anchors found</em></li>';
    const unknownRows = r.unknown.length
      ? r.unknown.map(x => `<li><code>${x}</code></li>`).join('')
      : '';
    return `
      <section class="card">
        <h2>${r.relPath}</h2>
        <div class="muted">Anchors: ${r.anchors.length} • IDs: ${r.ids.size}</div>
        <div>
          <strong>Missing (no matching id in same file)</strong>
          <ul>${missingRows}</ul>
          ${unknownRows ? `<div class="muted">External page anchors (not validated):</div><ul>${unknownRows}</ul>` : ''}
        </div>
      </section>
    `;
  }).join('\n');

  const totalMissing = results.reduce((a,b)=>a + b.missing.length, 0);

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Internal Anchors Auditor</title>
  <style>
    body{font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f172a;color:#e5e7eb;padding:24px}
    a{color:#67e8f9}
    .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#0ea5e9;color:white;font-size:12px;margin-left:8px}
    .muted{color:#9ca3af;font-size:12px;margin:4px 0 10px}
    .card{background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px;margin:12px 0}
    ul{margin:8px 0 0 16px}
    code{background:#0b1220;padding:1px 4px;border-radius:4px}
  </style>
</head>
<body>
  <h1>Internal Anchors Auditor <span class="badge">${totalMissing} missing</span></h1>
  <p>Scans HTML/TSX/MD for internal anchor links with missing matching <code>id</code> within the same file.</p>
  ${rows}
</body>
</html>`;
}

(function main(){
  const roots = [
    path.join(process.cwd(), 'pages'),
    path.join(process.cwd(), 'public'),
  ];
  const files = roots.flatMap(root => glob.sync('**/*.{html,htm,tsx,jsx,md,mdx}', { cwd: root, absolute: true, dot: false, nodir: true }));
  const results = [];
  for (const file of files) {
    const content = read(file);
    if (!content) continue;
    const { anchors, ids } = findAnchorsAndIds(content);
    if (anchors.length === 0) continue;
    const rel = file.replace(process.cwd() + path.sep, '');

    const missing = [];
    const unknown = [];
    for (const href of anchors) {
      const p = href.split('#');
      const id = p[p.length - 1];
      if (href.startsWith('#')) {
        if (!ids.has(id)) missing.push(href);
      } else if (href.includes('#')) {
        // different file; we do not resolve cross-file in this auditor
        unknown.push(href);
      }
    }
    results.push({ relPath: rel, anchors, ids, missing, unknown });
  }

  const html = generateHtmlReport(results);
  write(path.join(process.cwd(), 'public', 'reports', 'anchors', 'index.html'), html);
  console.log(`[internal-anchors-auditor] scanned ${results.length} files`);
})();