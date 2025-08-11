const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function writeJson(filePath, data) { ensureDir(path.dirname(filePath)); fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); }

function writeHtml(filePath, data) {
  const rows = data.items.map(it => {
    const ageDays = Math.round((Date.now() - it.mtimeMs) / (1000*60*60*24));
    const status = ageDays > (it.type === 'docs' ? 90 : 60) ? 'stale' : 'fresh';
    return `<tr>
<td>${it.type}</td>
<td>${it.path}</td>
<td>${new Date(it.mtimeMs).toISOString()}</td>
<td>${ageDays}</td>
<td><span class="badge ${status}">${status}</span></td>
</tr>`; }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Content Freshness Report</title>
<style>
body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial; background:#0b1020; color:#e6e6f0; padding: 24px; }
.container { max-width: 1100px; margin: 0 auto; }
h1 { font-size: 24px; margin-bottom: 8px; }
p { color:#9aa3b2; }
.table { width:100%; border-collapse: collapse; margin-top: 16px; }
.table th, .table td { border: 1px solid #23304a; padding: 8px 10px; font-size: 14px; }
.table th { background:#111a2e; text-align:left; }
.badge { display:inline-block; padding:2px 8px; border-radius:999px; background:#12223e; border:1px solid #23304a; font-size:12px; text-transform: uppercase; }
.badge.stale { color:#ff453a; border-color:#4a2020; background:#2a1010; }
.badge.fresh { color:#30d158; border-color:#204a2e; background:#10281a; }
</style>
</head>
<body>
<div class="container">
  <h1>Content Freshness Report</h1>
  <p>Autonomously generated. Highlights pages or docs older than 60–90 days.</p>
  <table class="table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Path</th>
        <th>Modified</th>
        <th>Age (days)</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</div>
</body>
</html>`;
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, html);
}

function statFiles(patterns, type) {
  const items = [];
  for (const pattern of patterns) {
    const files = glob.sync(pattern, { cwd: path.resolve(__dirname, '..'), nodir: true, absolute: true, ignore: ['**/node_modules/**', '**/.next/**', '**/out/**'] });
    for (const abs of files) {
      try {
        const st = fs.statSync(abs);
        items.push({ type, path: path.relative(path.resolve(__dirname, '..'), abs), mtimeMs: st.mtimeMs });
      } catch {}
    }
  }
  return items;
}

function main() {
  const root = path.resolve(__dirname, '..');
  const items = [];
  items.push(...statFiles(['pages/**/*.{md,mdx,tsx,jsx}'], 'pages'));
  items.push(...statFiles(['docs/**/*.{md,mdx}'], 'docs'));
  items.push(...statFiles(['public/**/*.{html,json,xml,txt}'], 'public'));
  items.sort((a,b) => b.mtimeMs - a.mtimeMs);

  const data = { timestamp: Date.now(), items };
  const jsonPath = path.resolve(root, 'public', 'reports', 'content-freshness', 'latest.json');
  const htmlPath = path.resolve(root, 'public', 'reports', 'content-freshness', 'index.html');
  writeJson(jsonPath, data);
  writeHtml(htmlPath, data);
  console.log('Content freshness report written to', htmlPath);
}

main();