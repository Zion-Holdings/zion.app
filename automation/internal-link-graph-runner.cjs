#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SRC_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-graph');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listSourceFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|js|jsx|mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function fileToRoute(file) {
  const rel = path.relative(path.join(ROOT, 'pages'), file).replace(/\\/g, '/');
  if (!rel || rel.startsWith('../')) return null;
  if (/^api\//i.test(rel) || /^_app\./i.test(rel) || /^_document\./i.test(rel)) return null;
  const withoutExt = rel.replace(/\.(tsx|ts|js|jsx|mdx)$/i, '');
  if (withoutExt.endsWith('/index')) return '/' + withoutExt.replace(/\/index$/, '');
  if (withoutExt === 'index') return '/';
  return '/' + withoutExt;
}

function extractHrefs(content) {
  const hrefs = new Set();
  const re = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
  let m;
  while ((m = re.exec(content))) {
    const candidate = m[1] || m[2] || m[3] || m[4] || m[5];
    if (!candidate) continue;
    if (candidate.startsWith('/')) {
      const clean = candidate.split('#')[0].replace(/\/$/, '');
      hrefs.add(clean || '/');
    }
  }
  return Array.from(hrefs);
}

(function main() {
  const files = SRC_DIRS.flatMap(listSourceFiles);
  const nodes = new Set();
  const edges = {};

  for (const file of files) {
    const route = fileToRoute(file);
    if (!route) continue;
    nodes.add(route);
    const content = fs.readFileSync(file, 'utf8');
    const links = extractHrefs(content);
    for (const href of links) {
      if (!edges[route]) edges[route] = {};
      edges[route][href] = (edges[route][href] || 0) + 1;
    }
  }

  const graph = { generatedAt: new Date().toISOString(), nodes: Array.from(nodes).sort(), edges };
  fs.writeFileSync(path.join(REPORT_DIR, 'graph.json'), JSON.stringify(graph, null, 2));

  // Compute simple popularity from in-degree
  const inDegree = {};
  for (const src of Object.keys(edges)) {
    for (const dst of Object.keys(edges[src])) {
      inDegree[dst] = (inDegree[dst] || 0) + edges[src][dst];
    }
  }
  const popularity = Object.entries(inDegree).sort((a,b) => b[1]-a[1]).slice(0, 50);
  fs.writeFileSync(path.join(REPORT_DIR, 'popularity.json'), JSON.stringify({ generatedAt: new Date().toISOString(), popularity }, null, 2));

  console.log(`Internal link graph written to ${path.relative(ROOT, REPORT_DIR)}`);
})();