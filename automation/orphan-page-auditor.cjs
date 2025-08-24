#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'orphans');

function toRouteFromPageFile(filePath) {
  const rel = path.relative(PAGES_DIR, filePath);
  if (rel.startsWith('api' + path.sep)) return null;
  if (rel.startsWith('_')) return null;
  if (/^_app\.(t|j)sx?$/.test(rel)) return null;
  const noExt = rel.replace(/\.(tsx?|jsx?)$/, '');
  let route = '/' + noExt.replace(/index$/, '').replace(/\\/g, '/').replace(/\/$/, '');
  if (route === '') route = '/';
  return route.replace(/\/index$/, '/');
}

function extractInternalLinksFromContent(content) {
  const links = new Set();
  const regex = /(?:<Link\s+href=|<a\s+[^>]*href=)["']([^"']+)["']/g;
  let m;
  while ((m = regex.exec(content))) {
    const href = m[1];
    if (!href) continue;
    if (!href.startsWith('/')) continue; // only internal
    if (href.startsWith('/.netlify/functions')) continue; // ignore function endpoints
    // strip hash and query
    const clean = href.split('#')[0].split('?')[0] || '/';
    links.add(clean);
  }
  return Array.from(links);
}

function readFile(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function htmlEscape(s) {
  return s.replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]));
}

function generateHtml(orphanRoutes, allRoutes, inboundMap) {
  const ts = new Date().toISOString();
  const rows = orphanRoutes.map((r) => `<tr><td><a href="${r}">${htmlEscape(r)}</a></td><td>${inboundMap.get(r) || 0}</td></tr>`).join('\n');
  return `<!doctype html>
<html lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Orphan Pages Report</title>
<style>body{font-family:ui-sans-serif,system-ui;background:#0b1020;color:#e5e7eb;padding:2rem} a{color:#67e8f9} table{border-collapse:collapse;width:100%;background:#0f172a;border:1px solid #334155} th,td{border:1px solid #334155;padding:.5rem;text-align:left} th{background:#111827}</style>
<h1>Orphan Pages Report</h1>
<p>Generated at ${ts}. Total pages: ${allRoutes.length}. Orphans: ${orphanRoutes.length}.</p>
<table>
<thead><tr><th>Route</th><th>Inbound Links</th></tr></thead>
<tbody>
${rows || '<tr><td colspan="2">No orphans detected 🎉</td></tr>'}
</tbody>
</table>
</html>`;
}

(async function main() {
  const files = glob.sync('**/*.{tsx,ts,jsx,js}', { cwd: PAGES_DIR, absolute: true, dot: false });
  const routeSet = new Set();
  const inboundMap = new Map();

  for (const file of files) {
    const route = toRouteFromPageFile(file);
    if (!route) continue;
    routeSet.add(route);
    if (!inboundMap.has(route)) inboundMap.set(route, 0);
  }

  // Collect internal links from all source files (pages + components)
  const sourceFiles = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')]
    .flatMap((dir) => glob.sync('**/*.{tsx,ts,jsx,js}', { cwd: dir, absolute: true }))
    .filter(Boolean);

  for (const src of sourceFiles) {
    const content = readFile(src);
    const links = extractInternalLinksFromContent(content);
    for (const l of links) {
      if (!inboundMap.has(l)) inboundMap.set(l, 0);
      inboundMap.set(l, (inboundMap.get(l) || 0) + 1);
    }
  }

  // An orphan is a known page route with zero inbound links from other files
  const allRoutes = Array.from(routeSet).sort();
  const orphanRoutes = allRoutes.filter((r) => {
    if (r === '/') return false;
    return (inboundMap.get(r) || 0) === 0;
  });

  ensureDir(REPORT_DIR);
  const jsonPath = path.join(REPORT_DIR, 'latest.json');
  const htmlPath = path.join(REPORT_DIR, 'index.html');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), total: allRoutes.length, orphans: orphanRoutes }, null, 2));
  fs.writeFileSync(htmlPath, generateHtml(orphanRoutes, allRoutes, inboundMap));

  console.log(`Orphan report saved to ${htmlPath}`);
})();