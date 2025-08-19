#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function isPageFile(filePath) {
  const base = path.basename(filePath);
  if (base.startsWith('_')) return false; // _app, _document, etc.
  if (base.endsWith('.d.ts')) return false;
  return /\.(tsx|jsx|ts|js)$/.test(base);
}

function filePathToRoute(pagesDir, filePath) {
  const rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(tsx|jsx|ts|js)$/i, '');
  const segments = noExt.split('/');
  const cleaned = segments
    .filter(Boolean)
    .filter((seg) => !seg.startsWith('_'))
    .map((seg) => (seg === 'index' ? '' : seg))
    .filter((seg, i, arr) => !(seg === '' && i < arr.length - 1));
  const route = '/' + cleaned.join('/');
  return route === '//' ? '/' : route;
}

function extractInternalHrefs(sourceText) {
  const hrefs = new Set();
  // Match href="/path" or href='/path' or href={`/path`} or href={"/path"}
  const regex = /href\s*=\s*(?:\{\s*`([^`#]+)`\s*\}|\{\s*"([^"]+#?)"\s*\}|\{\s*'([^'#]+)'\s*\}|"([^"#]+)"|'([^'#]+)')/g;
  let m;
  while ((m = regex.exec(sourceText))) {
    const candidate = m[1] || m[2] || m[3] || m[4] || m[5];
    if (!candidate) continue;
    if (!candidate.startsWith('/')) continue; // internal only
    if (candidate.startsWith('/api')) continue; // ignore API
    // strip query/hash
    const clean = candidate.split('#')[0].split('?')[0];
    if (clean) hrefs.add(clean);
  }
  return Array.from(hrefs);
}

function main() {
  const root = path.resolve(__dirname, '..');
  const pagesDir = path.join(root, 'pages');
  const outDir = path.join(root, 'public', 'automation');
  ensureDir(outDir);

  const pageFiles = glob.sync('**/*.{tsx,ts,jsx,js}', { cwd: pagesDir, nodir: true, absolute: true });
  const graph = { generatedAt: new Date().toISOString(), pages: [], edges: [], stats: {} };

  const routeToPage = new Map();
  for (const f of pageFiles) {
    if (!isPageFile(f)) continue;
    const route = filePathToRoute(pagesDir, f);
    routeToPage.set(route, { route, file: path.relative(root, f), outbound: [], inboundCount: 0 });
  }

  for (const [route, info] of routeToPage.entries()) {
    const src = readFileSafe(path.join(root, info.file));
    const hrefs = extractInternalHrefs(src);
    const normalized = hrefs
      .map((h) => (h.endsWith('/') && h !== '/' ? h.slice(0, -1) : h))
      .filter((h) => h in Object.fromEntries(Array.from(routeToPage.keys()).map((k) => [k, true])) || true);
    info.outbound = Array.from(new Set(normalized));
    for (const to of info.outbound) {
      graph.edges.push({ from: route, to });
    }
  }

  // Compute inbound counts
  for (const edge of graph.edges) {
    const page = routeToPage.get(edge.to);
    if (page) page.inboundCount += 1;
  }

  graph.pages = Array.from(routeToPage.values()).sort((a, b) => a.route.localeCompare(b.route));

  // Orphans: no inbound and not the root '/'
  const orphans = graph.pages
    .filter((p) => p.route !== '/' && p.inboundCount === 0)
    .map((p) => p.route)
    .sort();

  const topOutbound = graph.pages
    .map((p) => ({ route: p.route, count: p.outbound.length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  graph.stats.totalPages = graph.pages.length;
  graph.stats.totalEdges = graph.edges.length;
  graph.stats.orphanCount = orphans.length;
  graph.stats.topOutbound = topOutbound;
  graph.stats.orphans = orphans;

  const jsonPath = path.join(outDir, 'internal-link-graph.json');
  fs.writeFileSync(jsonPath, JSON.stringify(graph, null, 2));

  // Markdown summary
  const mdLines = [];
  mdLines.push('# Internal Link Graph');
  mdLines.push('');
  mdLines.push(`Generated: ${graph.generatedAt}`);
  mdLines.push('');
  mdLines.push(`- Total pages: ${graph.stats.totalPages}`);
  mdLines.push(`- Total edges: ${graph.stats.totalEdges}`);
  mdLines.push(`- Orphans: ${graph.stats.orphanCount}`);
  mdLines.push('');
  if (orphans.length) {
    mdLines.push('## Orphan Pages');
    orphans.forEach((r) => mdLines.push(`- ${r}`));
    mdLines.push('');
  }
  mdLines.push('## Top Outbound Pages');
  topOutbound.forEach((t) => mdLines.push(`- ${t.route}: ${t.count}`));
  mdLines.push('');
  mdLines.push('## Sample Edges');
  graph.edges.slice(0, 50).forEach((e) => mdLines.push(`- ${e.from} → ${e.to}`));
  const mdPath = path.join(outDir, 'internal-link-graph.md');
  fs.writeFileSync(mdPath, mdLines.join('\n'));

  console.log('Internal link graph generated:', path.relative(root, jsonPath), 'and', path.relative(root, mdPath));
}

main();