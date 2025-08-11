const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

function listFilesRecursive(dir) {
  const files = [];
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    const stat = fs.statSync(cur);
    if (stat.isDirectory()) {
      for (const ent of fs.readdirSync(cur)) {
        if (ent.startsWith('.')) continue;
        stack.push(path.join(cur, ent));
      }
    } else {
      files.push({ path: cur, size: stat.size, mtime: stat.mtimeMs });
    }
  }
  return files;
}

function humanSize(bytes) {
  const units = ['B','KB','MB','GB'];
  let i = 0; let val = bytes;
  while (val >= 1024 && i < units.length - 1) { val /= 1024; i++; }
  return `${val.toFixed(val >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

function generateInventory(publicRoot, outDir) {
  const allFiles = listFilesRecursive(publicRoot)
    .filter(f => !/\/(?:reports)\//.test(f.path)); // ignore generated reports by default

  const items = allFiles.map(f => ({
    relPath: path.relative(publicRoot, f.path),
    size: f.size,
    sizeHuman: humanSize(f.size),
    mtime: new Date(f.mtime).toISOString()
  })).sort((a,b) => b.size - a.size);

  const totalBytes = items.reduce((acc, i) => acc + i.size, 0);

  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'assets.json'), JSON.stringify({ generatedAt: new Date().toISOString(), totalFiles: items.length, totalBytes, items }, null, 2));

  const top = items.slice(0, 200);
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Static Asset Inventory</title>
<style>
  body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#0b1220; color:#e5e7eb; margin:0; padding:2rem; }
  h1 { margin:0 0 1rem; }
  .muted { color:#9ca3af; }
  table { width: 100%; border-collapse: collapse; }
  th, td { border-bottom: 1px solid rgba(255,255,255,0.12); padding: 8px; text-align: left; }
  tr:hover { background: rgba(255,255,255,0.06); }
  a { color: #67e8f9; text-decoration: none; }
</style>
</head>
<body>
  <h1>Static Asset Inventory</h1>
  <p class="muted">Top 200 largest assets under <code>public/</code> (excluding generated reports).</p>
  <p>Total files: ${items.length} • Total size: ${humanSize(totalBytes)}</p>
  <table>
    <thead><tr><th>File</th><th>Size</th><th>Last Modified</th></tr></thead>
    <tbody>
      ${top.map(i => `<tr><td><a href="/${i.relPath}">${i.relPath}</a></td><td>${i.sizeHuman}</td><td>${i.mtime}</td></tr>`).join('')}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  console.log(`[asset-inventory] Indexed ${items.length} assets; top ${top.length} written.`);
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const publicRoot = path.join(projectRoot, 'public');
  const outDir = path.join(publicRoot, 'reports', 'assets');
  generateInventory(publicRoot, outDir);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}