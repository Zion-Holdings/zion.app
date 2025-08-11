#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const REPORT_JSON_DIR = path.join(ROOT, 'data', 'reports', 'internal-links');
const REPORT_HTML_DIR = path.join(ROOT, 'public', 'reports', 'links');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'api' || entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function getRoutes(dir, base = '') {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];
  for (const e of entries) {
    if (e.name.startsWith('_')) continue; // skip Next internals
    if (e.isDirectory()) {
      if (e.name === 'api') continue;
      routes.push(...getRoutes(path.join(dir, e.name), base + '/' + e.name));
    } else if (e.isFile()) {
      if (!e.name.match(/\.(tsx|jsx|mdx|js|ts)$/)) continue;
      const name = e.name.replace(/\.(tsx|jsx|mdx|js|ts)$/, '');
      if (name === 'index') {
        routes.push(base || '/');
      } else if (!name.startsWith('[')) {
        routes.push(base + '/' + name);
      }
    }
  }
  return Array.from(new Set(routes)).sort();
}

function extractInternalLinks(text) {
  const links = new Set();
  // Match href="/path" or href={'/path'} or Link href="/path"
  const regex = /href\s*=\s*{?\s*["'`](\/[\w\-\/\.]*)(?:#[^"'`}]*)?["'`}\)]/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const url = m[1];
    if (!url) continue;
    if (url.startsWith('//')) continue; // protocol-relative external
    if (url.startsWith('/api')) continue; // ignore API routes
    if (url.startsWith('/_next')) continue; // ignore Next internals
    links.add(url.replace(/\/$/, '') || '/');
  }
  return Array.from(links);
}

function readFileSafe(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function discoverRedirectMap() {
  // Simple static discovery from next.config.js known redirects
  const configPath = path.join(ROOT, 'next.config.js');
  const map = new Map();
  const text = readFileSafe(configPath);
  // Look for patterns like { source: '/front', destination: '/', permanent: true }
  const re = /source:\s*['"]([^'"]+)['"],\s*destination:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    map.set(m[1], m[2]);
  }
  return map;
}

function renderHtmlReport(results) {
  const rows = results.map(r => `
      <tr>
        <td>${r.file.replace(ROOT + '/', '')}</td>
        <td>${r.link}</td>
        <td>${r.status}</td>
        <td>${r.suggestion || ''}</td>
      </tr>`).join('\n');
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/><title>Internal Link Report</title>
<style>
body{font-family:system-ui,Segoe UI,Roboto,Inter,sans-serif;margin:24px}
 table{border-collapse:collapse;width:100%}
 th,td{border:1px solid #ddd;padding:8px;font-size:14px}
 th{background:#f3f4f6;text-align:left}
 .ok{color:#065f46}
 .bad{color:#991b1b}
</style></head>
<body>
  <h1>Internal Link Report</h1>
  <p>Validated internal links found in pages. Broken links include a suggestion when a redirect is known.</p>
  <table>
    <thead><tr><th>File</th><th>Link</th><th>Status</th><th>Suggestion</th></tr></thead>
    <tbody>
${rows || '<tr><td colspan="4">No issues found.</td></tr>'}
    </tbody>
  </table>
</body></html>`;
}

async function main() {
  const validRoutes = new Set(getRoutes(PAGES_DIR).map(r => (r === '' ? '/' : r)));
  // Normalize: include root without trailing slash
  const normalizedRoutes = new Set(Array.from(validRoutes, r => r === '/' ? '/' : r.replace(/\/$/, '')));
  const redirectMap = discoverRedirectMap();

  const issues = [];
  const scanned = [];

  for (const file of walkFiles(PAGES_DIR)) {
    const text = readFileSafe(file);
    if (!text) continue;
    const links = extractInternalLinks(text);
    if (!links.length) continue;
    for (const link of links) {
      const normalizedLink = link === '/' ? '/' : link.replace(/\/$/, '');
      let status = 'ok';
      let suggestion = null;
      if (!normalizedRoutes.has(normalizedLink)) {
        status = 'missing';
        // try redirect map
        if (redirectMap.has(normalizedLink)) {
          suggestion = redirectMap.get(normalizedLink);
        } else if (redirectMap.has(normalizedLink.replace(/\/$/, ''))) {
          suggestion = redirectMap.get(normalizedLink.replace(/\/$/, ''));
        }
        issues.push({ file, link: normalizedLink, status, suggestion });
      }
      scanned.push({ file, link: normalizedLink, status, suggestion });
    }
  }

  ensureDir(REPORT_JSON_DIR);
  ensureDir(REPORT_HTML_DIR);

  const payload = {
    generatedAt: new Date().toISOString(),
    totalLinks: scanned.length,
    broken: issues.length,
    issues,
  };

  fs.writeFileSync(path.join(REPORT_JSON_DIR, `internal-links-${Date.now()}.json`), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(REPORT_JSON_DIR, `latest.json`), JSON.stringify(payload, null, 2));

  const html = renderHtmlReport(issues);
  fs.writeFileSync(path.join(REPORT_HTML_DIR, 'index.html'), html);

  console.log(`Internal link crawl complete. Scanned: ${scanned.length}. Broken: ${issues.length}.`);
}

main().catch((e) => { console.error(e); process.exit(1); });