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

async function fetchPackageInfo(name, versionRange) {
  const cleaned = String(versionRange || '').replace(/^\^|~|>=?|<=?|=|\s/g, '');
  const byRangeUrl = cleaned ? `https://registry.npmjs.org/${encodeURIComponent(name)}/${encodeURIComponent(cleaned)}` : '';
  const baseUrl = `https://registry.npmjs.org/${encodeURIComponent(name)}`;
  try {
    if (byRangeUrl) {
      const res = await fetch(byRangeUrl);
      if (res.ok) return await res.json();
    }
  } catch {}
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) throw new Error(`registry fetch failed: ${res.status}`);
    const data = await res.json();
    const latest = data && data['dist-tags'] && data['dist-tags'].latest;
    if (latest && data.versions && data.versions[latest]) return data.versions[latest];
    return data;
  } catch (e) {
    return { name, version: versionRange || 'unknown', license: 'unknown', error: String(e) };
  }
}

function classifyLicense(license) {
  const val = (license && (license.type || license)) || '';
  const s = String(val).toUpperCase();
  const permissive = ['MIT','BSD','BSD-2-CLAUSE','BSD-3-CLAUSE','ISC','APACHE-2.0','CC0-1.0'];
  if (permissive.includes(s)) return { level: 'ok', label: val };
  if (/APACHE/.test(s)) return { level: 'ok', label: val };
  if (/GPL|AGPL|LGPL/.test(s)) return { level: 'warn', label: val };
  if (!s || s === 'UNKNOWN') return { level: 'warn', label: 'unknown' };
  return { level: 'review', label: val };
}

function renderHtml(results) {
  const rows = results.map(r => {
    const cls = r.classification.level === 'ok' ? 'text-emerald-400' : (r.classification.level === 'warn' ? 'text-amber-400' : 'text-rose-400');
    return `<tr>
      <td style="padding:8px;border-bottom:1px solid #223;">${r.name}</td>
      <td style="padding:8px;border-bottom:1px solid #223;">${r.versionWanted || ''}</td>
      <td style="padding:8px;border-bottom:1px solid #223;">${r.version || ''}</td>
      <td style="padding:8px;border-bottom:1px solid #223;" class="${cls}">${r.classification.label}</td>
    </tr>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Dependency Licenses Audit</title>
<style>body{background:#0b1220;color:#fff;font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans",sans-serif;padding:24px} .muted{color:#9aa4b2}</style>
</head><body>
<h1>Dependency Licenses Audit</h1>
<p class="muted">Generated at ${new Date().toISOString()}</p>
<table style="border-collapse:collapse;width:100%;margin-top:16px;">
<thead><tr>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">Package</th>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">Wanted</th>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">Resolved</th>
<th style="text-align:left;padding:8px;border-bottom:2px solid #334">License</th>
</tr></thead>
<tbody>${rows}</tbody>
</table>
</body></html>`;
}

exports.handler = async () => {
  const root = path.resolve(__dirname, '..', '..');
  const pkgPath = path.join(root, 'package.json');
  const outDir = path.join(root, 'public', 'reports', 'licenses');
  const jsonPath = path.join(outDir, 'latest.json');
  const htmlPath = path.join(outDir, 'index.html');

  let pkg;
  try {
    pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  } catch (e) {
    return { statusCode: 500, body: `Failed to read package.json: ${e}` };
  }

  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  const names = Object.keys(deps).sort();
  const results = [];

  for (const name of names) {
    try {
      const info = await fetchPackageInfo(name, deps[name]);
      const license = info.license || (info.licenses && info.licenses[0] && info.licenses[0].type) || 'unknown';
      const entry = {
        name,
        versionWanted: deps[name],
        version: info.version || 'unknown',
        license: license || 'unknown',
      };
      entry.classification = classifyLicense(entry.license);
      results.push(entry);
    } catch (e) {
      results.push({ name, versionWanted: deps[name], version: 'unknown', license: 'unknown', classification: { level: 'warn', label: 'unknown' }, error: String(e) });
    }
  }

  await ensureDir(outDir);
  await fsp.writeFile(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), total: results.length, packages: results }, null, 2));
  await fsp.writeFile(htmlPath, renderHtml(results), 'utf8');

  // Sync changes to repo
  const sync = run('node', [path.join(root, 'automation', 'git-sync.cjs')]);

  const body = {
    generatedAt: new Date().toISOString(),
    total: results.length,
    ok: sync.status === 0,
    report: {
      json: '/reports/licenses/latest.json',
      html: '/reports/licenses/',
    },
  };

  return { statusCode: 200, body: JSON.stringify(body) };
};