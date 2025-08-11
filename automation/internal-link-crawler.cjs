#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const WORKSPACE = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(WORKSPACE, 'pages');
const REPORT_DIR = path.join(WORKSPACE, 'data', 'reports', 'internal-links');

function* walkFiles(startDir, exts = ['.tsx', '.jsx', '.ts', '.js']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'api' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function extractInternalLinks(text) {
  const links = new Set();
  const patterns = [
    /<Link\s+href\s*=\s*{?\s*["'`]\/(?!\/|#)([^"'`\s}]+)["'`]/g,
    /<a\s+[^>]*href\s*=\s*{?\s*["'`]\/(?!\/|#)([^"'`\s}]+)["'`]/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text)) !== null) {
      let href = '/' + m[1].replace(/#.*/, '').replace(/\/$/, '');
      if (href === '//') href = '/';
      // skip obvious asset files under public (html, json, xml, images, etc.)
      if (/\.(html|json|xml|png|jpg|jpeg|gif|svg|webp|ico|txt)(\?|#|$)/i.test(href)) continue;
      links.add(href);
    }
  }
  return Array.from(links);
}

const fileExistsCaseInsensitive = (p) => {
  try { fs.accessSync(p, fs.constants.F_OK); return true; } catch { return false; }
};

const possiblePageFiles = (route) => {
  if (route === '/') return [path.join(PAGES_DIR, 'index.tsx'), path.join(PAGES_DIR, 'index.jsx'), path.join(PAGES_DIR, 'index.ts'), path.join(PAGES_DIR, 'index.js')];
  const parts = route.split('/').filter(Boolean);
  const base = path.join(PAGES_DIR, ...parts);
  return [
    base + '.tsx',
    base + '.jsx',
    base + '.ts',
    base + '.js',
    path.join(base, 'index.tsx'),
    path.join(base, 'index.jsx'),
    path.join(base, 'index.ts'),
    path.join(base, 'index.js'),
  ];
};

function routeExists(route) {
  for (const candidate of possiblePageFiles(route)) {
    if (fileExistsCaseInsensitive(candidate)) return true;
  }
  return false;
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function main() {
  const found = new Set();
  const byFile = {};
  for (const file of walkFiles(PAGES_DIR)) {
    let text = '';
    try { text = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const links = extractInternalLinks(text);
    byFile[file.replace(WORKSPACE + path.sep, '')] = links;
    for (const l of links) found.add(l);
  }

  const allRoutes = Array.from(found).sort();
  const missing = allRoutes.filter((r) => !routeExists(r));

  ensureDir(REPORT_DIR);
  const payload = { generatedAt: new Date().toISOString(), total: allRoutes.length, missingCount: missing.length, routes: allRoutes, missing, byFile };
  const outFile = path.join(REPORT_DIR, `internal-links-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(payload, null, 2));
  console.log(`Internal link scan complete. Routes: ${allRoutes.length}. Missing: ${missing.length}. Report: ${outFile}`);
}

main();