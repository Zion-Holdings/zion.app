const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function listFiles(dir, exts = [/\.(md|mdx|tsx|ts|jsx|js)$/i]) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, exts));
    else if (exts.some((re) => re.test(entry.name))) out.push(full);
  }
  return out;
}

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

exports.handler = async () => {
  const rootDir = path.resolve(__dirname, '..', '..');
  const targets = ['pages', 'components', 'docs'].map((d) => path.join(rootDir, d));
  const files = targets.flatMap((d) => listFiles(d));

  const now = Date.now();
  const entries = files.map((f) => {
    const st = fs.statSync(f);
    const ageDays = Math.round((now - st.mtimeMs) / (1000 * 60 * 60 * 24));
    return { file: path.relative(rootDir, f), mtime: st.mtime.toISOString?.() || new Date(st.mtimeMs).toISOString(), ageDays };
  }).sort((a,b) => b.ageDays - a.ageDays);

  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: entries.length,
    staleThresholdDays: 60,
    staleFiles: entries.filter(e => e.ageDays >= 60).slice(0, 300),
    newestFiles: entries.slice(-50).reverse()
  };

  const reportDir = path.join(rootDir, 'public', 'reports', 'content-freshness');
  ensureDir(reportDir);
  fs.writeFileSync(path.join(reportDir, 'latest.json'), JSON.stringify(summary, null, 2));
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(reportDir, `content-freshness-${ts}.json`), JSON.stringify(summary, null, 2));

  const renderRows = (arr) => arr.slice(0, 200).map((x) => (
    '<tr>' +
      '<td>' + String(x.ageDays) + '</td>' +
      '<td><code>' + escapeHtml(x.file) + '</code></td>' +
      '<td>' + escapeHtml(x.mtime) + '</td>' +
    '</tr>'
  )).join('');

  const staleTable = '<table><tr><th>Age (days)</th><th>File</th><th>Updated</th></tr>' + renderRows(summary.staleFiles) + '</table>';
  const newestTable = '<table><tr><th>Age (days)</th><th>File</th><th>Updated</th></tr>' + renderRows(summary.newestFiles) + '</table>';

  const htmlIndex = [
    '<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>',
    '<title>Content Freshness</title>',
    '<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;background:#0b1220;color:#fff;padding:24px}a{color:#67e8f9}code,pre{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:12px;display:block;white-space:pre-wrap}h1{margin:0 0 12px;font-size:24px}h2{margin:24px 0 8px;font-size:18px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #1f2937;padding:8px}</style></head><body>',
    '<h1>Content Freshness</h1>',
    '<p>Latest JSON: <a href="./latest.json">latest.json</a></p>',
    '<div>Total files: ' + String(summary.totalFiles) + '</div>',
    '<div>Stale threshold: ' + String(summary.staleThresholdDays) + ' days</div>',
    '<div>Stale count: ' + String(summary.staleFiles.length) + '</div>',
    '<h2>Most Stale (&gt;= 60d)</h2>',
    staleTable,
    '<h2>Newest Files</h2>',
    newestTable,
    '</body></html>'
  ].join('');
  fs.writeFileSync(path.join(reportDir, 'index.html'), htmlIndex);

  // git sync
  spawnSync('node', [path.join(rootDir, 'automation', 'advanced-git-sync.cjs')], { stdio: 'inherit' });

  return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'content-freshness-runner', files: entries.length }) };
};