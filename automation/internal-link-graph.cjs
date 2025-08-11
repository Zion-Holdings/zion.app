#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT_DIR = path.join(ROOT, 'public', 'analytics');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'internal-link-graph.json');

function listFilesRecursive(dir, filterExts = ['.tsx', '.ts', '.jsx', '.js']) {
  const results = [];
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(full, filterExts));
    } else if (filterExts.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

function toRouteFromFile(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  if (!rel) return '/';
  if (rel === 'index.tsx' || rel === 'index.jsx') return '/';
  const noExt = rel.replace(/\.(tsx|ts|jsx|js)$/i, '');
  if (noExt.endsWith('/index')) return '/' + noExt.replace(/\/index$/, '');
  return '/' + noExt;
}

function extractLinks(source) {
  const links = new Set();
  // <Link href="/path"> and <Link href='/path'>
  const linkHrefRegex = /<Link\s+[^>]*?href=\{?"([^"]+)"\}?/g;
  const linkHrefRegexSingle = /<Link\s+[^>]*?href=\{?'([^']+)'\}?/g;
  const aHrefRegex = /<a\s+[^>]*?href=\"([^\"]+)\"/g;
  const aHrefRegexSingle = /<a\s+[^>]*?href=\'([^\']+)'/g;
  let m;
  while ((m = linkHrefRegex.exec(source))) links.add(m[1]);
  while ((m = linkHrefRegexSingle.exec(source))) links.add(m[1]);
  while ((m = aHrefRegex.exec(source))) links.add(m[1]);
  while ((m = aHrefRegexSingle.exec(source))) links.add(m[1]);
  // Filter only internal site links starting with /
  return Array.from(links).filter((h) => typeof h === 'string' && h.startsWith('/'));
}

function normalizeRoute(route) {
  // Remove trailing slashes, strip hash/query for target normalization
  const clean = route.replace(/[?#].*$/, '');
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1);
  return clean || '/';
}

function buildGraph() {
  const files = listFilesRecursive(PAGES_DIR, ['.tsx', '.jsx']);
  const nodes = [];
  const edges = [];
  const routeToFile = new Map();

  for (const file of files) {
    if (path.basename(file).startsWith('_')) continue; // skip _app/_document
    const route = normalizeRoute(toRouteFromFile(file));
    routeToFile.set(route, file);
    nodes.push({ id: route, file: path.relative(ROOT, file) });
  }

  for (const [route, file] of routeToFile.entries()) {
    const src = fs.readFileSync(file, 'utf8');
    const links = extractLinks(src);
    for (const href of links) {
      const target = normalizeRoute(href);
      // Only record internal routes
      if (target.startsWith('/')) {
        edges.push({ source: route, target, raw: href });
      }
    }
  }

  return { generatedAt: new Date().toISOString(), nodes, edges, stats: { nodes: nodes.length, edges: edges.length } };
}

(function main() {
  const graph = buildGraph();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(graph, null, 2));
  console.log(`Internal link graph generated: ${path.relative(ROOT, OUTPUT_FILE)} (nodes=${graph.stats.nodes}, edges=${graph.stats.edges})`);
})();