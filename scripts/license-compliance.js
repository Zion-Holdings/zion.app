#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT_DIR, 'public', 'reports', 'licenses');

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-automation' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function renderHTML(rows) {
  const trs = rows.map(r => `<tr><td>${r.name}</td><td>${r.version || ''}</td><td>${r.license || 'Unknown'}</td><td>${r.homepage ? `<a href="${r.homepage}" target="_blank">link</a>` : ''}</td></tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>License Compliance Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
  </style>
</head>
<body>
  <h1>License Compliance Report</h1>
  <table>
    <thead>
      <tr><th>Package</th><th>Version</th><th>License</th><th>Homepage</th></tr>
    </thead>
    <tbody>
      ${trs}
    </tbody>
  </table>
</body>
</html>`;
}

async function main() {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8'));
  const deps = Object.assign({}, pkg.dependencies || {});
  const result = [];
  for (const [name, versionRange] of Object.entries(deps)) {
    try {
      const meta = await fetchJson(`https://registry.npmjs.org/${encodeURIComponent(name)}/latest`);
      const license = meta.license || (Array.isArray(meta.licenses) ? meta.licenses.map(l => l.type).join(', ') : undefined);
      result.push({ name, version: meta.version || versionRange, license: license || 'Unknown', homepage: meta.homepage || meta.repository?.url || '' });
    } catch (e) {
      result.push({ name, version: versionRange, license: 'FetchError', homepage: '' });
    }
  }
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), rows: result }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(result));
}

if (require.main === module) {
  main().catch(err => { console.error(err); process.exitCode = 1; });
}