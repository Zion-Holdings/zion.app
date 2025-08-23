#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllFiles(full, exts));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

function deriveRouteFromPageFile(filePath, pagesRoot) {
  const rel = path.relative(pagesRoot, filePath).replace(/\\/g, '/');
  if (!rel) return null;
  if (rel.startsWith('api/')) return null;
  // Remove extension
  const noExt = rel.replace(/\.(tsx|jsx|ts|js)$/, '');
  // Index handling
  const route = noExt.endsWith('/index') ? noExt.slice(0, -('/index'.length)) : noExt;
  return '/' + route.replace(/^\/+/, '');
}

function extractInternalHrefs(source) {
  const hrefs = new Set();
  // Link href="/path"
  const linkRe = /href\s*=\s*"(\/[^"#?\s]+)"/g;
  let m;
  while ((m = linkRe.exec(source))) {
    hrefs.add(m[1]);
  }
  // Also capture <Link href='/path'> single quotes
  const linkReSingle = /href\s*=\s*'(\/[^'#?\s]+)'/g;
  while ((m = linkReSingle.exec(source))) {
    hrefs.add(m[1]);
  }
  return Array.from(hrefs);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function main() {
  const workspace = path.resolve(__dirname, '..');
  const pagesRoot = path.join(workspace, 'pages');
  if (!fs.existsSync(pagesRoot)) {
    console.error('pages directory not found');
    process.exit(0);
  }

  const pageFiles = getAllFiles(pagesRoot, ['.tsx', '.jsx']).filter((f) => !/\b_\w+\.(tsx|jsx)$/.test(path.basename(f)));
  const nodes = new Set();
  const edges = [];

  for (const file of pageFiles) {
    const src = fs.readFileSync(file, 'utf8');
    const from = deriveRouteFromPageFile(file, pagesRoot);
    if (!from) continue;
    nodes.add(from);
    const hrefs = extractInternalHrefs(src);
    hrefs.forEach((to) => {
      if (to.startsWith('/') && !to.startsWith('/api')) {
        nodes.add(to);
        edges.push({ from, to });
      }
    });
  }

  const graph = {
    generatedAt: new Date().toISOString(),
    nodes: Array.from(nodes).sort(),
    edges,
    stats: {
      numNodes: nodes.size,
      numEdges: edges.length,
      avgOutDegree: nodes.size ? +(edges.length / nodes.size).toFixed(2) : 0
    }
  };

  const dataDir = path.join(workspace, 'data', 'reports');
  const publicDir = path.join(workspace, 'public', 'automation');
  ensureDir(dataDir);
  ensureDir(publicDir);

  fs.writeFileSync(path.join(dataDir, 'internal-link-graph.json'), JSON.stringify(graph, null, 2));
  fs.writeFileSync(path.join(publicDir, 'internal-link-graph.json'), JSON.stringify(graph, null, 2));

  console.log(`Internal link graph generated: ${graph.stats.numNodes} nodes, ${graph.stats.numEdges} edges.`);
}

main();