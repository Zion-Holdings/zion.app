#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllFiles(full, exts));
    } else if (exts.some((e) => entry.name.toLowerCase().endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

function deriveRouteFromPageFile(filePath, pagesRoot) {
  const rel = path.relative(pagesRoot, filePath).replace(/\\/g, '/');
  if (rel.startsWith('api/')) return null;
  const noExt = rel.replace(/\.(tsx|jsx|ts|js)$/, '');
  const route = noExt.endsWith('/index') ? noExt.slice(0, -('/index'.length)) : noExt;
  return '/' + route.replace(/^\/+/, '');
}

function guessTitleFromSource(source) {
  const m = source.match(/<title>([^<]+)<\/title>/i);
  if (m) return m[1].trim();
  const h1 = source.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1) return h1[1].trim();
  return null;
}

function main() {
  const workspace = path.resolve(__dirname, '..');
  const pagesRoot = path.join(workspace, 'pages');
  const publicRoot = path.join(workspace, 'public');

  const pageFiles = getAllFiles(pagesRoot, ['.tsx', '.jsx']);
  const pages = [];
  for (const file of pageFiles) {
    const route = deriveRouteFromPageFile(file, pagesRoot);
    if (!route) continue;
    const src = fs.readFileSync(file, 'utf8');
    const title = guessTitleFromSource(src) || route;
    pages.push({ route, title });
  }

  const reportFiles = getAllFiles(path.join(publicRoot, 'reports'), ['.html', '.json']);
  const reports = reportFiles.map((abs) => ({
    path: '/' + path.relative(publicRoot, abs).replace(/\\/g, '/'),
    title: path.basename(abs)
  }));

  const registry = {
    generatedAt: new Date().toISOString(),
    pages: pages.sort((a, b) => a.route.localeCompare(b.route)),
    reports: reports.sort((a, b) => a.path.localeCompare(b.path))
  };

  const outDir = path.join(publicRoot, 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'content-registry.json'), JSON.stringify(registry, null, 2));

  console.log(`Content registry built: ${registry.pages.length} pages, ${registry.reports.length} reports.`);
}

main();