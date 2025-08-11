#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walk(dir, filterExts = new Set(['.tsx', '.jsx', '.mdx', '.md', '.js', '.ts'])) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'api') continue; // ignore API routes
      out.push(...walk(abs, filterExts));
    } else {
      const ext = path.extname(e.name);
      if (filterExts.has(ext)) out.push(abs);
    }
  }
  return out;
}

function deriveRouteFromPagePath(absFile) {
  const pagesRoot = path.resolve(process.cwd(), 'pages');
  const rel = path.relative(pagesRoot, absFile);
  let route = '/' + rel.replace(/\\/g, '/');
  route = route.replace(/\.(tsx|jsx|mdx|md|js|ts)$/i, '');
  route = route.replace(/\/index$/i, '');
  // special: root index
  if (route === '/index') route = '/';
  return route;
}

function extractLinksFromSource(src) {
  const links = new Set();
  // <Link href="/path">
  for (const m of src.matchAll(/<Link[^>]*?href\s*=\s*"([^"]+)"/g)) {
    if (m[1]?.startsWith('/')) links.add(m[1]);
  }
  // <Link href='/path'>
  for (const m of src.matchAll(/<Link[^>]*?href\s*=\s*'([^']+)'/g)) {
    if (m[1]?.startsWith('/')) links.add(m[1]);
  }
  // <Link href={'/path'}>
  for (const m of src.matchAll(/<Link[^>]*?href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g)) {
    if (m[1]?.startsWith('/')) links.add(m[1]);
  }
  // <a href="/path">
  for (const m of src.matchAll(/<a[^>]*?href\s*=\s*"([^"]+)"/g)) {
    if (m[1]?.startsWith('/')) links.add(m[1]);
  }
  // <a href='/path'>
  for (const m of src.matchAll(/<a[^>]*?href\s*=\s*'([^']+)'/g)) {
    if (m[1]?.startsWith('/')) links.add(m[1]);
  }
  // href={'/path'}
  for (const m of src.matchAll(/href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g)) {
    if (m[1]?.startsWith('/')) links.add(m[1]);
  }
  return Array.from(links);
}

function buildGraph() {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  const files = walk(pagesDir);
  const edges = {};
  const nodes = new Set();

  for (const file of files) {
    const route = deriveRouteFromPagePath(file);
    nodes.add(route);
    let src = '';
    try { src = fs.readFileSync(file, 'utf8'); } catch {}
    const targets = extractLinksFromSource(src);
    for (const t of targets) {
      nodes.add(t);
      const key = `${route} -> ${t}`;
      edges[key] = (edges[key] || 0) + 1;
    }
  }

  const edgeList = Object.entries(edges).map(([k, count]) => {
    const [from, to] = k.split(' -> ');
    return { from, to, count };
  });

  const out = {
    generatedAt: new Date().toISOString(),
    totals: { nodes: nodes.size, edges: edgeList.length },
    nodes: Array.from(nodes).sort(),
    edges: edgeList.sort((a, b) => b.count - a.count),
  };

  const outDir = path.resolve(process.cwd(), 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'internal-link-graph.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  return outPath;
}

(function main() {
  const outPath = buildGraph();
  process.stdout.write(`Wrote internal link graph: ${outPath}\n`);
})();