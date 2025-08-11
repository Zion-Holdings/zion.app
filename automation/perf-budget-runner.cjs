#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toBytesString(bytes) {
  const units = ['B','KB','MB','GB'];
  let s = bytes; let i = 0;
  while (s >= 1024 && i < units.length - 1) { s/=1024; i++; }
  return `${s.toFixed(1)} ${units[i]}`;
}

function collectAssets() {
  // Consider typical web assets under public/
  const exts = ['png','jpg','jpeg','webp','gif','svg','js','css','woff','woff2'];
  const patterns = exts.map(e => `public/**/*.${e}`);
  const files = patterns.flatMap(p => glob.sync(p, { nodir: true }));
  return Array.from(new Set(files));
}

function generateReport(assets) {
  const rows = assets.map(a => {
    const stat = fs.statSync(a);
    const size = stat.size;
    return { file: a, size };
  }).sort((a,b)=>b.size - a.size);

  const total = rows.reduce((s,r)=>s+r.size,0);
  const large = rows.filter(r => r.size >= 300*1024);
  const tooLarge = rows.filter(r => (
    (r.file.endsWith('.js') && r.size > 500*1024) ||
    (/(png|jpg|jpeg|webp|gif)$/i.test(r.file) && r.size > 400*1024)
  ));

  const topRows = rows.slice(0, 50).map(r => `<tr><td>${r.file}</td><td>${toBytesString(r.size)}</td></tr>`).join('\n');
  const largeRows = large.map(r => `<li>${r.file} — ${toBytesString(r.size)}</li>`).join('\n');
  const tooLargeRows = tooLarge.map(r => `<li>${r.file} — ${toBytesString(r.size)}</li>`).join('\n');

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Performance Budget Report</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:#0b1220;color:#e5e7eb;padding:24px}
    h1{font-size:20px;margin:0 0 8px}
    .summary{opacity:.8;margin-bottom:16px}
    section{margin:16px 0}
    table{width:100%;border-collapse:collapse;background:#0f172a;border:1px solid #334155}
    th,td{padding:8px;border-top:1px solid #334155;vertical-align:top}
    th{text-align:left;background:#111827}
  </style>
</head>
<body>
  <h1>Performance Budget Report</h1>
  <div class="summary">Assets scanned: ${rows.length} • Total: ${toBytesString(total)} • Over 300KB: ${large.length} • Over thresholds: ${tooLarge.length}</div>
  <section>
    <h2>Exceeding thresholds</h2>
    <ul>${tooLargeRows || '<li>No assets exceed thresholds.</li>'}</ul>
  </section>
  <section>
    <h2>Large assets (>= 300KB)</h2>
    <ul>${largeRows || '<li>No large assets detected.</li>'}</ul>
  </section>
  <section>
    <h2>Top 50 largest assets</h2>
    <table>
      <thead><tr><th>File</th><th>Size</th></tr></thead>
      <tbody>${topRows}</tbody>
    </table>
  </section>
</body>
</html>`;
}

(function main(){
  const assets = collectAssets();
  const html = generateReport(assets);
  const outDir = path.join(process.cwd(), 'public', 'reports', 'perf');
  ensureDir(outDir);
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log(`Wrote Performance report to ${outFile}`);
})();