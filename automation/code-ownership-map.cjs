const { execSync } = require('child_process');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

function getLogSince(days = 90) {
  const since = `${days} days ago`;
  const cmd = `git log --since="${since}" --pretty=format:%an --name-only`;
  const out = execSync(cmd, { encoding: 'utf8' });
  return out.split('\n');
}

(function run() {
  let lines = [];
  try {
    lines = getLogSince(120);
  } catch (e) {
    console.error('Failed to read git log', e);
    process.exit(0);
  }

  const ownership = {};
  let currentAuthor = null;
  for (const line of lines) {
    if (!line.trim()) continue;
    if (!line.includes('/')) {
      // likely author line
      currentAuthor = line.trim();
      ownership[currentAuthor] = ownership[currentAuthor] || { total: 0, files: {} };
    } else {
      const file = line.trim();
      if (file.startsWith('node_modules/') || file.startsWith('out/') || file.startsWith('.next/') || file.startsWith('public/')) continue;
      if (!currentAuthor) continue;
      const files = ownership[currentAuthor].files;
      files[file] = (files[file] || 0) + 1;
      ownership[currentAuthor].total += 1;
    }
  }

  function aggregateByTopLevelDir() {
    const dirMap = {};
    for (const [author, data] of Object.entries(ownership)) {
      for (const file of Object.keys(data.files)) {
        const top = file.split('/')[0];
        dirMap[top] = dirMap[top] || {};
        dirMap[top][author] = (dirMap[top][author] || 0) + data.files[file];
      }
    }
    const topDirs = {};
    for (const [dir, authors] of Object.entries(dirMap)) {
      const entries = Object.entries(authors).sort((a, b) => b[1] - a[1]).slice(0, 5);
      topDirs[dir] = entries.map(([author, count]) => ({ author, count }));
    }
    return topDirs;
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    authors: Object.keys(ownership).length,
    totalTouches: Object.values(ownership).reduce((acc, v) => acc + v.total, 0),
    topLevelOwners: aggregateByTopLevelDir()
  };

  const outDir = path.resolve(__dirname, '..', 'public', 'reports', 'ownership');
  fse.mkdirpSync(outDir);
  fs.writeFileSync(path.join(outDir, 'map.json'), JSON.stringify({ summary, ownership }, null, 2));

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Code Ownership Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: ui-sans-serif, system-ui; background: #0b1220; color: #e6f0ff; padding: 24px; }
    h2 { margin-top: 24px; }
    table { border-collapse: collapse; }
    td, th { border: 1px solid #1f2a44; padding: 6px 8px; }
  </style>
</head>
<body>
  <h1>Code Ownership Map</h1>
  <p>Top contributors per top-level directory (last 120 days).</p>
  ${Object.entries(summary.topLevelOwners).map(([dir, arr]) => `
    <h2>${dir}</h2>
    <table>
      <thead><tr><th>Author</th><th>Touches</th></tr></thead>
      <tbody>
        ${arr.map((a) => `<tr><td>${a.author}</td><td>${a.count}</td></tr>`).join('')}
      </tbody>
    </table>
  `).join('')}
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html);

  console.log('[ownership] Wrote ownership map and HTML.');
})();