const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { spawnSync } = require('child_process');

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function ensureDir(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}

function shouldSkipDir(dirName) {
  return ['node_modules','.git','.next','out','.cache','dist','.husky','.cursor','.github','netlify/plugins'].includes(dirName);
}

function isScanFile(file) {
  return /\.(js|jsx|ts|tsx|md|mdx|css|scss|json)$/i.test(file);
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const expr = /\b(TODO|FIXME|HACK|XXX|BUG|DEBT)\b/i;
  const matches = [];
  for (let i = 0; i < lines.length; i++) {
    if (expr.test(lines[i])) {
      matches.push({ line: i + 1, text: lines[i].trim().slice(0, 500) });
    }
  }
  return matches;
}

function walk(dir, base = dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.DS_Store')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (shouldSkipDir(entry.name)) continue;
      walk(full, base, acc);
    } else if (entry.isFile()) {
      if (!isScanFile(entry.name)) continue;
      const rel = path.relative(base, full);
      try {
        const found = scanFile(full);
        if (found.length) acc.push({ file: rel, findings: found });
      } catch {}
    }
  }
  return acc;
}

function renderHtml(data, repoSlug = 'Zion-Holdings/zion.app') {
  const total = data.items.reduce((sum, f) => sum + f.findings.length, 0);
  const rows = data.items.map(item => {
    const fileLink = `https://github.com/${repoSlug}/blob/main/${item.file}`;
    const lines = item.findings.slice(0, 5).map(m => `<div style="font-family:monospace;color:#ccd"><a style="color:#9ad" href="${fileLink}#L${m.line}">#${m.line}</a> ${m.text.replace(/</g,'&lt;')}</div>`).join('');
    return `<tr>
      <td style="padding:8px;border-bottom:1px solid #223;"><a style="color:#9ad" href="${fileLink}">${item.file}</a></td>
      <td style="padding:8px;border-bottom:1px solid #223;">${item.findings.length}</td>
      <td style="padding:8px;border-bottom:1px solid #223;">${lines}</td>
    </tr>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Tech Debt Dashboard</title>
<style>body{background:#0b1220;color:#fff;font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans",sans-serif;padding:24px} .muted{color:#9aa4b2}</style>
</head><body>
<h1>Tech Debt Dashboard</h1>
<p class="muted">Generated at ${new Date().toISOString()} — Total findings: ${total}</p>
<table style="border-collapse:collapse;width:100%;margin-top:16px;">
<thead><tr>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">File</th>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">Count</th>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">Samples</th>
</tr></thead>
<tbody>${rows}</tbody>
</table>
</body></html>`;
}

exports.handler = async () => {
  const root = path.resolve(__dirname, '..', '..');
  const outDir = path.join(root, 'public', 'reports', 'tech-debt');
  const jsonPath = path.join(outDir, 'latest.json');
  const htmlPath = path.join(outDir, 'index.html');

  const items = walk(root, root, []);
  items.sort((a, b) => b.findings.length - a.findings.length);
  const payload = { generatedAt: new Date().toISOString(), totalFiles: items.length, items };

  await ensureDir(outDir);
  await fsp.writeFile(jsonPath, JSON.stringify(payload, null, 2));
  await fsp.writeFile(htmlPath, renderHtml(payload), 'utf8');

  // Sync changes to repo
  const sync = run('node', [path.join(root, 'automation', 'git-sync.cjs')]);

  const body = { ok: sync.status === 0, report: { json: '/reports/tech-debt/latest.json', html: '/reports/tech-debt/' }, totalFiles: items.length };
  return { statusCode: 200, body: JSON.stringify(body) };
};