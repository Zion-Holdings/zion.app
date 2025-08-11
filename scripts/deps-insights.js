#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'deps-insights');

async function fetchJSON(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-automation' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readDependencies() {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  return {
    ...pkg.dependencies,
    // include devDependencies but mark them
    ...Object.fromEntries(Object.entries(pkg.devDependencies || {}).map(([k, v]) => [k, v]))
  };
}

async function getLatestVersion(pkgName) {
  const meta = await fetchJSON(`https://registry.npmjs.org/${encodeURIComponent(pkgName)}`);
  const latestTag = meta['dist-tags']?.latest;
  const latest = latestTag && meta.versions ? meta.versions[latestTag] : null;
  return { latestVersion: latestTag || null, license: latest?.license || null, description: latest?.description || meta.description || null };
}

async function getDownloadCount(pkgName) {
  try {
    const data = await fetchJSON(`https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(pkgName)}`);
    return data.downloads || 0;
  } catch (e) {
    return 0;
  }
}

function renderHTML(items) {
  const rows = items.map(it => `
    <tr>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;"><a href="https://www.npmjs.com/package/${it.name}" target="_blank" rel="noopener noreferrer">${it.name}</a></td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;">${it.installed}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;">${it.latest || '-'}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;">${it.downloads.toLocaleString()}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;">${it.license || '-'}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;">${it.description ? it.description.replace(/</g, '&lt;') : ''}</td>
    </tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dependency Insights</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    table { border-collapse: collapse; width: 100%; }
    th { text-align: left; padding: 8px; border-bottom: 2px solid #ddd; }
  </style>
</head>
<body>
  <h1>Dependency Insights</h1>
  <p>Autonomously generated from package.json. Data from npm registry and downloads API.</p>
  <table>
    <thead>
      <tr>
        <th>Package</th>
        <th>Installed</th>
        <th>Latest</th>
        <th>Downloads (30d)</th>
        <th>License</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
}

async function main() {
  const deps = readDependencies();
  const names = Object.keys(deps || {}).sort((a, b) => a.localeCompare(b));
  const items = [];
  for (const name of names) {
    const installed = deps[name];
    const [latestInfo, downloads] = await Promise.all([
      getLatestVersion(name).catch(() => ({ latestVersion: null, license: null, description: null })),
      getDownloadCount(name)
    ]);
    items.push({
      name,
      installed,
      latest: latestInfo.latestVersion,
      downloads,
      license: latestInfo.license,
      description: latestInfo.description
    });
  }

  ensureDir(OUT_DIR);
  const now = new Date();
  const stamp = now.toISOString().split('T')[0];
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: now.toISOString(), items }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, `${stamp}.json`), JSON.stringify({ generatedAt: now.toISOString(), items }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(items));
}

main().catch(err => { console.error(err); process.exitCode = 1; });