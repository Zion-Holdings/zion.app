#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
        });
      })
      .on('error', reject);
  });
}

function normalizeVersion(v) {
  if (!v) return '0.0.0';
  const cleaned = String(v).trim().replace(/^[^0-9]*/, '');
  const match = cleaned.match(/\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?/);
  return match ? match[0] : cleaned;
}

function compareSemver(a, b) {
  const pa = normalizeVersion(a).split(/[.-]/).map((x) => (isNaN(Number(x)) ? x : Number(x)));
  const pb = normalizeVersion(b).split(/[.-]/).map((x) => (isNaN(Number(x)) ? x : Number(x)));
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const xa = pa[i] ?? 0;
    const xb = pb[i] ?? 0;
    if (typeof xa === 'number' && typeof xb === 'number') {
      if (xa !== xb) return xa - xb;
    } else {
      const sa = String(xa);
      const sb = String(xb);
      if (sa !== sb) return sa < sb ? -1 : 1;
    }
  }
  return 0;
}

function htmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const pkgPath = path.join(root, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

  const results = [];
  for (const [name, current] of Object.entries(deps)) {
    try {
      const meta = await fetchJson(`https://registry.npmjs.org/${encodeURIComponent(name)}`);
      const latest = meta['dist-tags']?.latest || null;
      const cmp = latest ? compareSemver(current, latest) : 0;
      const outdated = latest ? cmp < 0 : false;
      results.push({ name, current, latest, outdated });
    } catch (e) {
      results.push({ name, current, latest: null, outdated: false, error: String(e.message || e) });
    }
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    total: results.length,
    outdated: results.filter((r) => r.outdated).length,
    upToDate: results.filter((r) => !r.outdated && !r.error).length,
    errors: results.filter((r) => !!r.error).length,
    results: results.sort((a, b) => a.name.localeCompare(b.name))
  };

  const outDir = path.join(root, 'public', 'reports', 'dependency-freshness');
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.join(root, 'public', 'automation'), { recursive: true });
  fs.writeFileSync(path.join(root, 'public', 'automation', 'dependency-freshness.json'), JSON.stringify(summary, null, 2));

  const rows = summary.results.map((r) => {
    const status = r.error ? 'error' : r.outdated ? 'outdated' : 'ok';
    const color = r.error ? '#f87171' : r.outdated ? '#fbbf24' : '#34d399';
    return `<tr>
      <td><code>${htmlEscape(r.name)}</code></td>
      <td>${htmlEscape(r.current)}</td>
      <td>${htmlEscape(r.latest || '-')}</td>
      <td style="color:${color}">${status}</td>
      <td>${r.error ? htmlEscape(r.error) : ''}</td>
    </tr>`;
  }).join('\n');

  const html = `<!doctype html>
<html lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Dependency Freshness — Zion</title>
<style>
  body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;background:#0b1220;color:#fff;margin:0;padding:24px}
  a{color:#7de3ff;text-decoration:none}
  a:hover{text-decoration:underline}
  code{background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:6px}
  .pill{display:inline-block;background:rgba(125,227,255,0.14);color:#c7f1ff;border:1px solid rgba(125,227,255,0.5);padding:4px 8px;border-radius:999px;font-size:12px;margin-right:6px}
  table{width:100%;border-collapse:collapse;font-size:14px;margin-top:12px}
  th,td{border-bottom:1px solid rgba(255,255,255,0.08);padding:8px;text-align:left}
</style>
<body>
  <h1>Dependency Freshness</h1>
  <div>
    <span class="pill">Total: ${summary.total}</span>
    <span class="pill">Outdated: ${summary.outdated}</span>
    <span class="pill">Up-to-date: ${summary.upToDate}</span>
    <span class="pill">Errors: ${summary.errors}</span>
  </div>
  <p>
    <a href="/.netlify/functions/dependency-freshness-radar">Run Freshness Radar ↗</a> · <a href="/">Home</a> · <a href="/automation">Automation Hub</a>
  </p>
  <table>
    <thead><tr><th>Package</th><th>Current</th><th>Latest</th><th>Status</th><th>Note</th></tr></thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  process.stdout.write('Dependency freshness report generated.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});