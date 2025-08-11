const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function formatBytes(bytes) {
  const units = ['B','KB','MB','GB'];
  let size = bytes; let i = 0;
  while (size >= 1024 && i < units.length - 1) { size /= 1024; i++; }
  return `${size.toFixed(size >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const publicDir = path.join(root, 'public');
  if (!fs.existsSync(publicDir)) {
    console.log('No public/ directory, skipping');
    return;
  }

  const files = walk(publicDir);
  const byExt = new Map();
  const top = [];
  for (const f of files) {
    const stat = fs.statSync(f);
    const size = stat.size;
    const ext = path.extname(f).toLowerCase() || 'noext';
    const arr = byExt.get(ext) || [];
    arr.push({ file: f, size });
    byExt.set(ext, arr);
    top.push({ file: f, size });
  }
  top.sort((a,b) => b.size - a.size);

  const summary = [];
  let total = 0;
  for (const [ext, arr] of byExt.entries()) {
    const bytes = arr.reduce((a,b) => a + b.size, 0);
    total += bytes;
    summary.push({ ext, count: arr.length, bytes });
  }
  summary.sort((a,b) => b.bytes - a.bytes);

  const now = new Date().toISOString();
  const reportsDir = path.join(root, 'public', 'reports', 'assets');
  fs.mkdirSync(reportsDir, { recursive: true });
  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Asset Size Report</title>
  <style>
    body{font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin:24px}
    table{border-collapse:collapse; width:100%}
    th,td{border:1px solid #e4e4e7; padding:8px; text-align:left}
    th{background:#fafafa}
    code{background:#f4f4f5; padding:2px 6px; border-radius:6px}
    .muted{color:#71717a}
  </style>
</head>
<body>
  <h1>Asset Size Report</h1>
  <p class="muted">Generated: ${now}</p>
  <p>Total assets: ${files.length}. Total size: ${formatBytes(total)}.</p>
  <h2>By Type</h2>
  <table>
    <thead><tr><th>Type</th><th>Files</th><th>Total</th></tr></thead>
    <tbody>
      ${summary.map(s => `<tr><td>${s.ext || '(none)'}</td><td>${s.count}</td><td>${formatBytes(s.bytes)}</td></tr>`).join('\n')}
    </tbody>
  </table>
  <h2>Largest Files</h2>
  <table>
    <thead><tr><th>File</th><th>Size</th></tr></thead>
    <tbody>
      ${top.slice(0, 50).map(t => `<tr><td><code>${path.relative(root, t.file)}</code></td><td>${formatBytes(t.size)}</td></tr>`).join('\n')}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(reportsDir, 'index.html'), html);

  const md = [
    '# Asset Size Report',
    '',
    `Generated: ${now}`,
    '',
    `Total assets: ${files.length}. Total size: ${formatBytes(total)}.`,
    '',
    '## By Type',
    '',
    ...summary.map(s => `- ${s.ext || '(none)'} — ${s.count} files — ${formatBytes(s.bytes)}`),
    '',
    '## Largest Files',
    '',
    ...top.slice(0, 100).map(t => `- ${path.relative(root, t.file)} — ${formatBytes(t.size)}`),
    ''
  ].join('\n');
  fs.writeFileSync(path.join(docsDir, 'ASSET_SIZE_REPORT.md'), md);

  console.log(`Asset size report generated. files=${files.length} total=${formatBytes(total)}`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}