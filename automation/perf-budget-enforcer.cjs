#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function listFilesRecursive(dir, exts) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFilesRecursive(fullPath, exts));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) files.push(fullPath);
    }
  }
  return files;
}

function human(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let u = 0;
  while (size >= 1024 && u < units.length - 1) {
    size /= 1024;
    u += 1;
  }
  return `${size.toFixed(1)} ${units[u]}`;
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(workspaceRoot, 'public');
  const reportDir = path.join(publicDir, 'reports', 'perf');
  ensureDir(reportDir);

  const imageExts = ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg'];
  const images = fs.existsSync(publicDir) ? listFilesRecursive(publicDir, imageExts) : [];

  const budgets = {
    imageWarnBytes: 512 * 1024, // 512KB
    imageFailBytes: 1024 * 1024, // 1MB
  };

  const results = [];
  let warnings = 0;
  let failures = 0;

  for (const imgPath of images) {
    try {
      const stats = fs.statSync(imgPath);
      const bytes = stats.size;
      const status = bytes > budgets.imageFailBytes ? 'fail' : bytes > budgets.imageWarnBytes ? 'warn' : 'ok';
      if (status === 'warn') warnings += 1;
      if (status === 'fail') failures += 1;
      results.push({
        type: 'image',
        path: imgPath.replace(workspaceRoot + path.sep, ''),
        bytes,
        size: human(bytes),
        status,
      });
    } catch (e) {
      // skip file errors
    }
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      images: images.length,
      warnings,
      failures,
    },
    budgets,
  };

  const latest = { summary, results };
  const latestPath = path.join(reportDir, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(latest, null, 2));

  const indexHtml = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Performance Budget Report</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial; background:#0f172a; color:#e2e8f0; padding:24px; }
    .card { background: rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; margin-bottom: 16px; }
    .ok { color:#10b981 }
    .warn { color:#f59e0b }
    .fail { color:#ef4444 }
    code { background: rgba(255,255,255,0.06); padding:2px 6px; border-radius:6px; }
    table { width:100%; border-collapse: collapse; }
    th, td { text-align:left; padding:8px; border-bottom:1px solid rgba(255,255,255,0.08); }
  </style>
</head>
<body>
  <h1>Performance Budget Report</h1>
  <div class="card">
    <div>Generated: <code>${summary.generatedAt}</code></div>
    <div>Images scanned: <strong>${summary.totals.images}</strong> • Warnings: <span class="warn">${warnings}</span> • Failures: <span class="fail">${failures}</span></div>
    <div>Budgets: warn &gt; ${human(budgets.imageWarnBytes)}, fail &gt; ${human(budgets.imageFailBytes)}</div>
    <div><a href="./latest.json" style="color:#67e8f9">View JSON</a></div>
  </div>
  <div class="card">
    <table>
      <thead>
        <tr><th>Asset</th><th>Size</th><th>Status</th></tr>
      </thead>
      <tbody>
        ${results
          .sort((a,b)=>b.bytes-a.bytes)
          .map(r=>`<tr><td><code>${r.path}</code></td><td>${r.size}</td><td class="${r.status}">${r.status.toUpperCase()}</td></tr>`)
          .join('')}
      </tbody>
    </table>
  </div>
</body>
</html>`;
  fs.writeFileSync(path.join(reportDir, 'index.html'), indexHtml);

  console.log(`Performance budget report written to ${path.relative(workspaceRoot, reportDir)}`);
}

main();