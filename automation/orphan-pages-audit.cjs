#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUT_DIR = path.join(ROOT, 'public', 'automation');
const OUT_PATH = path.join(OUT_DIR, 'orphan-pages-report.json');

function listPageFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'api') continue;
      out.push(...listPageFiles(full));
    } else if (/\.(tsx|jsx)$/i.test(e.name)) {
      out.push(full);
    }
  }
  return out;
}

function routeFromFile(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(tsx|jsx)$/i, '');
  if (noExt === 'index') return '/';
  const parts = noExt.split('/');
  if (parts[0].startsWith('_')) return null;
  if (parts[0] === 'api') return null;
  if (parts[parts.length - 1] === 'index') parts.pop();
  const route = '/' + parts.join('/').replace(/\[.*?\]/g, ':param');
  return route || '/';
}

function extractInternalLinks(content) {
  const links = new Set();
  // <Link href="/path"> and <a href="/path">
  const hrefRegex = /(?:<Link\s+[^>]*?href=|<a\s+[^>]*?href=)["']([^"']+)["']/g;
  let m;
  while ((m = hrefRegex.exec(content))) {
    const href = m[1];
    if (!href) continue;
    if (!href.startsWith('/')) continue;
    if (href.startsWith('/.netlify/functions')) continue;
    if (href.startsWith('/api/')) continue;
    // strip hash and query
    const clean = href.split('#')[0].split('?')[0];
    links.add(clean);
  }
  return Array.from(links);
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = listPageFiles(PAGES_DIR);
  const routes = [];
  const fileByRoute = new Map();
  for (const f of files) {
    const route = routeFromFile(f);
    if (!route) continue;
    routes.push(route);
    fileByRoute.set(route, f);
  }

  const inboundCounts = new Map(routes.map(r => [r, 0]));
  const edges = [];

  for (const f of files) {
    const route = routeFromFile(f);
    if (!route) continue;
    const content = fs.readFileSync(f, 'utf8');
    const links = extractInternalLinks(content);
    for (const l of links) {
      if (!inboundCounts.has(l)) continue; // maybe external or not a page
      inboundCounts.set(l, inboundCounts.get(l) + 1);
      edges.push({ from: route, to: l });
    }
  }

  const orphans = routes.filter(r => inboundCounts.get(r) === 0 && r !== '/');
  const report = {
    generatedAt: new Date().toISOString(),
    summary: { pages: routes.length, edges: edges.length, orphans: orphans.length },
    orphans: orphans.map(r => ({ route: r, file: path.relative(ROOT, fileByRoute.get(r)) })),
    samples: edges.slice(0, 20),
  };
  fs.writeFileSync(OUT_PATH, JSON.stringify(report, null, 2));
  console.log('Wrote', path.relative(ROOT, OUT_PATH));
}

try { main(); } catch (e) { console.error(e); process.exitCode = 1; }