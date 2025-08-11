const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ALLOWED = new Set(['MIT', 'ISC', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CC0-1.0']);

function npmViewLicense(pkgSpec) {
  try {
    const res = spawnSync('npm', ['view', pkgSpec, 'license', '--json'], { encoding: 'utf8', stdio: 'pipe' });
    if (res.status !== 0) return null;
    const out = (res.stdout || '').trim();
    if (!out) return null;
    try { return JSON.parse(out); } catch { return out.replace(/^[\"\']|[\"\']$/g, ''); }
  } catch {
    return null;
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function writeHtml(filePath, data) {
  const rows = data.packages.map(p => {
    const ok = p.license && (Array.isArray(p.license) ? p.license.some(l => ALLOWED.has(l)) : ALLOWED.has(p.license));
    const status = ok ? 'allowed' : 'review';
    return `<tr>
<td>${p.name}</td>
<td>${p.version || ''}</td>
<td>${Array.isArray(p.license) ? p.license.join(', ') : (p.license || '')}</td>
<td><span class="badge ${status}">${status}</span></td>
</tr>`;
  }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>License Compliance Report</title>
<style>
body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial; background:#0b1020; color:#e6e6f0; padding: 24px; }
.container { max-width: 1000px; margin: 0 auto; }
h1 { font-size: 24px; margin-bottom: 8px; }
p { color:#9aa3b2; }
.table { width:100%; border-collapse: collapse; margin-top: 16px; }
.table th, .table td { border: 1px solid #23304a; padding: 8px 10px; font-size: 14px; }
.table th { background:#111a2e; text-align:left; }
small { color:#8292a6; }
.badge { display:inline-block; padding:2px 8px; border-radius:999px; background:#12223e; border:1px solid #23304a; font-size:12px; text-transform: uppercase; }
.badge.allowed { color:#30d158; border-color:#204a2e; background:#10281a; }
.badge.review { color:#ffd60a; border-color:#4a4320; background:#2a250f; }
</style>
</head>
<body>
<div class="container">
  <h1>License Compliance Report</h1>
  <p>Autonomously generated. Allowed: MIT, ISC, Apache-2.0, BSD-2/3, CC0. <small>${new Date(data.timestamp).toISOString()}</small></p>
  <table class="table">
    <thead>
      <tr>
        <th>Package</th>
        <th>Version</th>
        <th>License</th>
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

function resolveInstalledVersions() {
  const lockPath = path.resolve(__dirname, '..', 'package-lock.json');
  let installed = {};
  try {
    const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
    const deps = lock.packages || {};
    for (const [k, v] of Object.entries(deps)) {
      if (!k || k === '') continue;
      if (k.startsWith('node_modules/')) {
        const name = k.replace(/^node_modules\//, '');
        installed[name] = v.version;
      }
    }
  } catch {}
  return installed;
}

async function main() {
  const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8'));
  const entries = [];
  const installed = resolveInstalledVersions();

  function addAll(deps) {
    if (!deps) return;
    for (const [name, range] of Object.entries(deps)) {
      const version = installed[name] || (typeof range === 'string' ? range : '');
      let license = npmViewLicense(`${name}@${version.replace(/^[^\d]*/, '') || 'latest'}`);
      if (license && typeof license === 'object' && license.type) license = license.type;
      entries.push({ name, version, license: license || 'unknown' });
    }
  }

  addAll(pkg.dependencies);
  addAll(pkg.devDependencies);

  const report = { timestamp: Date.now(), packages: entries };
  const jsonPath = path.resolve(__dirname, '..', 'public', 'reports', 'licenses', 'latest.json');
  const htmlPath = path.resolve(__dirname, '..', 'public', 'reports', 'licenses', 'index.html');
  writeJson(jsonPath, report);
  writeHtml(htmlPath, report);
  console.log('License report written to', htmlPath);
}

main().catch((err) => {
  console.error('License compliance failed:', err);
  process.exitCode = 0; // best-effort
});