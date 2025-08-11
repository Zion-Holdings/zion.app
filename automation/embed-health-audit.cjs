#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { process.stdout.write(`[embed-health] ${msg}\n`); }
function readFileSafe(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } }
function writeFileSafe(p, data) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, data); }

function listFiles(dir, exts = new Set(['.tsx','.jsx','.js','.mdx'])) {
  const files = [];
  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      const ext = path.extname(e.name);
      if (exts.has(ext)) files.push(full);
    }
  }
  walk(dir);
  return files;
}

function extractEmbeds(src) {
  const urls = new Set();
  const patterns = [
    /https?:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]+/g,
    /https?:\/\/youtu\.be\/[A-Za-z0-9_-]+/g,
    /https?:\/\/twitter\.com\/[A-Za-z0-9_]+\/status\/[0-9]+/g,
    /https?:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+/g,
    /<iframe[^>]+src=\"([^\"]+)\"/g,
  ];
  for (const p of patterns) {
    let m;
    while ((m = p.exec(src)) !== null) {
      const u = m[1] || m[0];
      if (typeof u === 'string') urls.add(u);
    }
  }
  return Array.from(urls);
}

async function probe(url, timeoutMs = 12000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'HEAD', signal: ctrl.signal });
    clearTimeout(t);
    return { url, status: res.status, ok: res.ok };
  } catch (e) {
    clearTimeout(t);
    return { url, status: 0, ok: false, error: String(e) };
  }
}

function renderReport(rows) {
  const items = rows.map(r => `<tr><td><a href="${r.url}">${r.url}</a></td><td>${r.status}</td><td>${r.ok ? 'OK' : 'FAIL'}</td><td>${r.error ? String(r.error).replace(/[<>]/g,'') : ''}</td></tr>`).join('\n');
  return `<!doctype html><html><head><meta charset="utf-8"><title>Embed Health Report</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;background:#0f172a;color:#e2e8f0;margin:0;padding:2rem}a{color:#67e8f9}h1{font-size:1.5rem}table{border-collapse:collapse;width:100%}td,th{border:1px solid #1f2937;padding:.5rem;text-align:left}thead{background:#111827}</style></head><body><h1>Embed Health Report</h1><p>External embed endpoints probed with HEAD requests to detect breakage or blocks. Generated at ${new Date().toISOString()}.</p><table><thead><tr><th>URL</th><th>Status</th><th>OK</th><th>Error</th></tr></thead><tbody>${items}</tbody></table></body></html>`;
}

(async function main(){
  const root = path.resolve(__dirname, '..');
  const pagesDir = path.join(root, 'pages');
  const files = listFiles(pagesDir);
  const urls = new Set();
  for (const f of files) {
    const src = readFileSafe(f);
    extractEmbeds(src).forEach(u => urls.add(u));
  }
  const unique = Array.from(urls).slice(0, 500); // cap
  const results = [];
  for (const u of unique) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await probe(u));
  }
  const out = renderReport(results);
  const reportPath = path.join(root, 'public', 'reports', 'embeds', 'index.html');
  writeFileSafe(reportPath, out);
  log(`wrote report ${reportPath}`);
})();