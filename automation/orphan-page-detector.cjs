#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const SRC_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_JSON_DIR = path.join(ROOT, 'data', 'reports', 'orphans');
const REPORT_HTML_DIR = path.join(ROOT, 'public', 'reports', 'orphans');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_JSON_DIR);
ensureDir(REPORT_HTML_DIR);

function isSpecial(name) { return name.startsWith('_') || name.startsWith('['); }

function collectRoutes() {
  const routes = new Set();
  function walk(dir, routePrefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // if directory has index.* treat as routePrefix
    const hasIndex = entries.some((e) => e.isFile() && /^(index)\.(tsx|jsx|ts|js)$/i.test(e.name));
    if (hasIndex && routePrefix) {
      routes.add(routePrefix);
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (isSpecial(entry.name)) continue;
        const nextPrefix = path.posix.join(routePrefix || '/', entry.name).replace(/\\/g, '/');
        walk(full, nextPrefix);
      } else if (entry.isFile()) {
        if (!/\.(tsx|jsx|ts|js)$/i.test(entry.name)) continue;
        const base = entry.name.replace(/\.(tsx|jsx|ts|js)$/i, '');
        if (isSpecial(base)) continue;
        if (base === 'index') continue; // handled above
        const route = path.posix.join(routePrefix || '/', base).replace(/\\/g, '/');
        routes.add(route);
      }
    }
  }
  walk(PAGES_DIR, '');
  // root index exists implicitly at '/'
  routes.add('/');
  return routes;
}

function listSourceFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|js|jsx|mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function extractSiteRelativeHrefs(content) {
  const hrefs = new Set();
  const re = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
  let m;
  while ((m = re.exec(content))) {
    const candidate = m[1] || m[2] || m[3] || m[4] || m[5];
    if (!candidate) continue;
    if (candidate.startsWith('/')) hrefs.add(candidate.replace(/\/$/, ''));
  }
  return Array.from(hrefs);
}

(function main() {
  const knownRoutes = collectRoutes();
  const files = SRC_DIRS.flatMap((d) => (fs.existsSync(d) ? listSourceFiles(d) : []));

  const referenced = new Set();
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const href of extractSiteRelativeHrefs(content)) {
      const normalized = href.replace(/\/$/, '');
      referenced.add(normalized);
    }
  }

  // Orphans = routes never referenced anywhere else
  const orphans = Array.from(knownRoutes)
    .filter((r) => r && r !== '/')
    .filter((r) => !referenced.has(r))
    .sort();

  const nowIso = new Date().toISOString();
  const jsonReport = { generatedAt: nowIso, totalRoutes: knownRoutes.size, referenced: Array.from(referenced).sort(), orphans };
  const jsonPath = path.join(REPORT_JSON_DIR, 'latest.json');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));

  const rows = orphans.map((r) => `<li><code>${r}</code></li>`).join('\n');
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Orphan Page Detector</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Orphan Page Detector</h1>
  <p>Autonomously generated at ${nowIso}. Orphan pages are routes that no other page links to.</p>
  <p>Total routes: ${knownRoutes.size}. Orphans: ${orphans.length}.</p>
  <ol>
    ${rows}
  </ol>
</body>
</html>`;
  fs.writeFileSync(path.join(REPORT_HTML_DIR, 'index.html'), html);

  console.log(`Orphan Page Detector: found ${orphans.length} orphan routes.`);
})();