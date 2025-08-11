#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const REPORTS_DIR = path.join(PUBLIC_DIR, 'reports');
const OUTPUT_JSON = path.join(REPORTS_DIR, 'orphan-routes.json');

const IGNORE_PAGE_DIRS = new Set(['api']);

function listFiles(dir) {
  const out = [];
  function walk(d) {
    let entries = [];
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.name.startsWith('_')) continue; // Next internals
      const abs = path.join(d, e.name);
      if (e.isDirectory()) {
        if (IGNORE_PAGE_DIRS.has(e.name)) continue;
        walk(abs);
      } else if (e.isFile()) {
        out.push(abs);
      }
    }
  }
  walk(dir);
  return out;
}

function routeFromPageFile(absPath) {
  const rel = path.relative(PAGES_DIR, absPath).replace(/\\/g, '/');
  const ext = path.extname(rel);
  if (!rel.match(/\.(tsx|jsx|js|ts|mdx|md)$/)) return null;
  const noExt = rel.slice(0, -ext.length);
  if (noExt.endsWith('/index')) return '/' + noExt.slice(0, -('/index'.length));
  if (noExt === 'index') return '/';
  if (noExt.includes('[')) return null; // ignore dynamic routes for simplicity
  return '/' + noExt;
}

function extractLinksFromFileContent(content) {
  const links = new Set();
  const hrefRe = /href\s*=\s*(["'])(.*?)\1/gi;
  let m;
  while ((m = hrefRe.exec(content))) {
    const url = m[2];
    if (typeof url === 'string' && url.startsWith('/')) {
      // ignore anchors and API
      if (url.startsWith('/api')) continue;
      links.add(url.replace(/#.*$/, ''));
    }
  }
  return Array.from(links);
}

function buildGraph(pageFiles) {
  const graph = new Map(); // route -> outLinks[]
  const fileToRoute = new Map();
  for (const f of pageFiles) {
    const route = routeFromPageFile(f);
    if (!route) continue;
    fileToRoute.set(f, route);
    graph.set(route, []);
  }
  for (const f of pageFiles) {
    const route = fileToRoute.get(f);
    if (!route) continue;
    let content = '';
    try { content = fs.readFileSync(f, 'utf8'); } catch {}
    const outLinks = extractLinksFromFileContent(content).filter(l => graph.has(l));
    graph.set(route, Array.from(new Set([...(graph.get(route) || []), ...outLinks])));
  }
  return graph;
}

function findOrphans(graph, seeds) {
  const visited = new Set();
  const queue = [...seeds.filter(s => graph.has(s))];
  while (queue.length) {
    const r = queue.shift();
    if (visited.has(r)) continue;
    visited.add(r);
    const outs = graph.get(r) || [];
    for (const n of outs) {
      if (!visited.has(n)) queue.push(n);
    }
  }
  const allRoutes = Array.from(graph.keys());
  const orphans = allRoutes.filter(r => !visited.has(r));
  return { visited: Array.from(visited).sort(), orphans: orphans.sort() };
}

function main() {
  const pageFiles = listFiles(PAGES_DIR);
  const graph = buildGraph(pageFiles);
  const seeds = ['/', '/automation', '/newsroom', '/site-health', '/main/front'];
  const { visited, orphans } = findOrphans(graph, seeds);

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const data = {
    generatedAt: new Date().toISOString(),
    totalRoutes: graph.size,
    seeds,
    reachableCount: visited.length,
    orphanCount: orphans.length,
    orphans
  };
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2));
  console.log(`Orphan routes report written to ${path.relative(ROOT, OUTPUT_JSON)} with ${orphans.length} routes.`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}