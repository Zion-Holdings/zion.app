#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function getLatestVersion(pkgName) {
  try {
    const url = `https://registry.npmjs.org/${encodeURIComponent(pkgName)}`;
    const { data } = await axios.get(url, { timeout: 15000 });
    return data && data['dist-tags'] && data['dist-tags'].latest ? data['dist-tags'].latest : null;
  } catch (err) {
    return null;
  }
}

function parseSemver(version) {
  const cleaned = (version || '').replace(/^v/, '').replace(/^~|^\^/, '');
  const [major, minor, patch] = cleaned.split('-')[0].split('.').map((n) => parseInt(n, 10) || 0);
  return { major, minor, patch };
}

function compareSemver(a, b) {
  // returns -1 if a<b, 0 if equal, 1 if a>b
  if (a.major !== b.major) return a.major < b.major ? -1 : 1;
  if (a.minor !== b.minor) return a.minor < b.minor ? -1 : 1;
  if (a.patch !== b.patch) return a.patch < b.patch ? -1 : 1;
  return 0;
}

function classifyUpdate(current, latest) {
  const a = parseSemver(current);
  const b = parseSemver(latest);
  if (!latest) return 'unknown';
  const cmp = compareSemver(a, b);
  if (cmp >= 0) return 'up-to-date';
  if (a.major !== b.major) return 'major-update';
  if (a.minor !== b.minor) return 'minor-update';
  if (a.patch !== b.patch) return 'patch-update';
  return 'unknown';
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const pkgPath = path.join(root, 'package.json');
  const outDir = path.join(root, 'public', 'reports', 'deps');
  const dataDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(dataDir, { recursive: true });

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const allDeps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  const entries = Object.entries(allDeps).sort(([a], [b]) => a.localeCompare(b));

  const results = [];
  // simple throttle
  for (const [name, current] of entries) {
    const latest = await getLatestVersion(name);
    const status = classifyUpdate(current, latest);
    results.push({ name, current, latest, status });
    // light delay to be kind to registry
    await new Promise((r) => setTimeout(r, 60));
  }

  const summary = {
    total: results.length,
    upToDate: results.filter((r) => r.status === 'up-to-date').length,
    patch: results.filter((r) => r.status === 'patch-update').length,
    minor: results.filter((r) => r.status === 'minor-update').length,
    major: results.filter((r) => r.status === 'major-update').length,
    unknown: results.filter((r) => r.status === 'unknown').length,
    generatedAt: new Date().toISOString(),
  };

  const jsonOut = { summary, packages: results };
  fs.writeFileSync(path.join(dataDir, 'dependency-health.json'), JSON.stringify(jsonOut, null, 2));

  // HTML report
  const rows = results.map((r) => {
    const badgeColor = r.status === 'up-to-date' ? '#10B981' : r.status === 'patch-update' ? '#3B82F6' : r.status === 'minor-update' ? '#F59E0B' : r.status === 'major-update' ? '#EF4444' : '#64748B';
    return `<tr>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,0.06)"><code>${r.name}</code></td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,0.06);color:#cbd5e1">${r.current}</td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,0.06);color:#cbd5e1">${r.latest || '—'}</td>
      <td style="padding:8px;border-bottom:1px solid rgba(255,255,255,0.06)"><span style="background:${badgeColor};color:white;padding:2px 8px;border-radius:9999px;font-size:12px">${r.status}</span></td>
    </tr>`;
  }).join('\n');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Dependency Health Radar</title>
<meta name="description" content="Live report of npm dependency health across this repo." />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  body { background:#020617; color:white; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
  .container { max-width: 1000px; margin: 2rem auto; padding: 0 1rem; }
  .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 16px; backdrop-filter: blur(8px); }
  h1 { font-size: 1.75rem; font-weight: 800; margin: 0; background: linear-gradient(90deg, #f0abfc, #a78bfa, #22d3ee); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  table { width: 100%; border-collapse: collapse; margin-top: 12px; }
  thead th { text-align: left; font-weight: 600; color: rgba(255,255,255,0.8); padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.12); }
  .grid { display:grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
  .pill { border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.06); border-radius: 12px; padding: 8px 10px; text-align:center; font-size: 12px; color: rgba(255,255,255,0.8); }
  a { color: #67e8f9; }
</style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>Dependency Health Radar</h1>
      <p style="color:rgba(255,255,255,0.7)">Autonomous scan comparing installed versions to latest stable on npm. Generated at ${summary.generatedAt}.</p>
      <div class="grid">
        <div class="pill">Total: <strong>${summary.total}</strong></div>
        <div class="pill">Up-to-date: <strong>${summary.upToDate}</strong></div>
        <div class="pill">Patch: <strong>${summary.patch}</strong></div>
        <div class="pill">Minor: <strong>${summary.minor}</strong></div>
        <div class="pill">Major: <strong>${summary.major}</strong></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Current</th>
            <th>Latest</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        ${rows}
        </tbody>
      </table>
      <p style="margin-top:12px;color:rgba(255,255,255,0.6)">JSON data: <a href="/data/reports/dependency-health.json">/data/reports/dependency-health.json</a></p>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  console.log('Dependency Health Radar generated');
  console.log(`Summary: up-to-date=${summary.upToDate}, patch=${summary.patch}, minor=${summary.minor}, major=${summary.major}, total=${summary.total}`);
}

main().catch((err) => {
  console.error('Dependency Health Radar failed:', err && err.message ? err.message : err);
  process.exit(1);
});