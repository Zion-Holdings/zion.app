#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'internal-links');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function listPageFiles(dir) {
  const out = [];
  const ignore = new Set(['.next','node_modules','api']);
  (function walk(d){
    let items = [];
    try { items = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const it of items) {
      const full = path.join(d, it.name);
      if (it.isDirectory()) {
        if (!ignore.has(it.name) && !it.name.startsWith('_') && !it.name.startsWith('.')) walk(full);
      } else if (it.isFile()) {
        if (/\.(tsx|jsx|mdx|js|ts)$/.test(it.name) && !it.name.startsWith('_')) out.push(full);
      }
    }
  })(dir);
  return out;
}

function getRoutesFromPages(dir, base = '') {
  let routes = [];
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }
  for (const e of entries) {
    if (e.name.startsWith('_')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'api') continue;
      routes = routes.concat(getRoutesFromPages(full, base + '/' + e.name));
    } else if (e.isFile()) {
      if (!e.name.match(/\.(tsx|jsx|mdx|js|ts)$/)) continue;
      const name = e.name.replace(/\.(tsx|jsx|mdx|js|ts)$/, '');
      if (name === 'index') routes.push(base || '/');
      else if (!name.startsWith('[')) routes.push(base + '/' + name);
    }
  }
  return Array.from(new Set(routes)).sort();
}

function extractInternalLinks(src) {
  const links = new Set();
  // href="/path" and href='/path' and href={"/path"}
  const re1 = /href\s*=\s*(?:\{\s*)?["'](\/[^"'#? ]*)["']/g;
  let m;
  while ((m = re1.exec(src))) {
    links.add(m[1]);
  }
  // Next.js <Link href="/path">
  const re2 = /<Link\s+[^>]*href\s*=\s*(?:\{\s*)?["'](\/[^"'#? ]*)["']/g;
  while ((m = re2.exec(src))) {
    links.add(m[1]);
  }
  // Markdown [text](/path)
  const re3 = /\[[^\]]+\]\((\/[^(\)\s#?]+)\)/g;
  while ((m = re3.exec(src))) {
    links.add(m[1]);
  }
  return Array.from(links);
}

function normalizePath(p) {
  if (!p.startsWith('/')) return p;
  // remove trailing slash except root
  if (p.length > 1 && p.endsWith('/')) return p.slice(0, -1);
  return p;
}

function publicAssetExists(p) {
  // direct match in public (e.g., /reports/ai-trends/index.html)
  const clean = p.replace(/^\//, '');
  const direct = path.join(PUBLIC_DIR, clean);
  if (fs.existsSync(direct)) return true;
  // folder index.html
  const idx = path.join(PUBLIC_DIR, clean, 'index.html');
  if (fs.existsSync(idx)) return true;
  return false;
}

async function main() {
  ensureDir(REPORT_DIR);
  if (!fs.existsSync(PAGES_DIR)) {
    console.error('pages/ directory not found.');
    process.exit(1);
  }

  const routes = new Set(getRoutesFromPages(PAGES_DIR).map(normalizePath));
  const files = listPageFiles(PAGES_DIR);

  const graph = {}; // route/file -> outgoing links
  const missing = []; // { sourceFile, href }

  for (const file of files) {
    let src = '';
    try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const links = extractInternalLinks(src).map(normalizePath);
    graph[file.replace(ROOT + path.sep, '')] = links;
    for (const href of links) {
      // Treat Netlify Functions as valid endpoints in production
      if (href.startsWith('/.netlify/functions/')) continue;
      const inRoutes = routes.has(href);
      const inPublic = publicAssetExists(href);
      if (!inRoutes && !inPublic) {
        missing.push({ sourceFile: file.replace(ROOT + path.sep, ''), href });
      }
    }
  }

  const summary = {
    timestamp: new Date().toISOString(),
    totalFilesScanned: files.length,
    totalRoutes: routes.size,
    missingLinks: missing.length,
    routes: Array.from(routes),
    missing,
  };

  const latestPath = path.join(REPORT_DIR, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  const datedPath = path.join(REPORT_DIR, `internal-links-${Date.now()}.json`);
  fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));

  console.log(`Internal link crawl complete. Files: ${files.length}. Missing: ${missing.length}. Report: ${latestPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });