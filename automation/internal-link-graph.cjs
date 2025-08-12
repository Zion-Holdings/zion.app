#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SRC_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'internal-link-graph');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listSourceFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/(\.tsx|\.ts|\.jsx|\.js|\.md|\.mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function toRouteFromFile(fileAbs) {
  const rel = path.relative(path.join(ROOT, 'pages'), fileAbs);
  if (!rel || rel.startsWith('..')) return null;
  const extStripped = rel.replace(/\.(tsx|ts|jsx|js)$/i, '');
  if (extStripped.endsWith('/index')) return '/' + extStripped.replace(/\/g, '/').replace(/\/index$/, '');
  if (extStripped === 'index') return '/';
  return '/' + extStripped.replace(/\\/g, '/');
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
  const files = SRC_DIRS.flatMap((d) => (fs.existsSync(d) ? listSourceFiles(d) : []));
  const routes = new Set();
  const edgesMap = new Map(); // key: from->to, value: count

  const knownRoutes = new Set();
  // derive known routes from pages dir structure
  if (fs.existsSync(path.join(ROOT, 'pages'))) {
    const pageFiles = listSourceFiles(path.join(ROOT, 'pages')).filter((f) => /(\.tsx|\.ts|\.jsx|\.js)$/i.test(f));
    for (const f of pageFiles) {
      const route = toRouteFromFile(f);
      if (route) knownRoutes.add(route.replace(/\/$/, ''));
    }
    knownRoutes.add('/');
  }

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const route = toRouteFromFile(file) || path.relative(ROOT, file).replace(/\\/g, '/');
    routes.add(route);
    const hrefs = extractSiteRelativeHrefs(content);
    for (const href of hrefs) {
      const to = href.replace(/\/$/, '');
      const key = `${route}=>${to}`;
      edgesMap.set(key, (edgesMap.get(key) || 0) + 1);
      if (knownRoutes.has(to)) routes.add(to);
    }
  }

  const nodes = Array.from(routes).sort().map((id) => ({ id }));
  const edges = Array.from(edgesMap.entries()).map(([key, count]) => {
    const [from, to] = key.split('=>');
    return { from, to, count };
  });

  const report = {
    generatedAt: new Date().toISOString(),
    totals: { nodes: nodes.length, edges: edges.length },
    nodes,
    edges
  };

  const outPath = path.join(REPORT_DIR, 'graph.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Internal Link Graph written to ${outPath}`);
})();