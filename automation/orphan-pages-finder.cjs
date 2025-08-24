const fs = require('fs');
const path = require('path');

function listRoutes(pagesDir) {
  const routes = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
        const rel = path.relative(pagesDir, full).replace(/\\/g, '/');
        let route = '/' + rel.replace(/index\.(tsx|jsx|ts|js)$/, '').replace(/\.(tsx|jsx|ts|js)$/, '');
        route = route.replace(/\/index$/, '/');
        route = route.replace(/\/\/+/, '/');
        routes.push(route);
      }
    }
  }
  walk(pagesDir);
  return Array.from(new Set(routes));
}

function extractLinksFromSource(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const links = new Set();
  const linkHrefRegex = /href=\{?\"([^\"]+)\"\}?/g;
  let m;
  while ((m = linkHrefRegex.exec(src)) !== null) {
    const href = m[1];
    if (!href) continue;
    if (href.startsWith('/')) links.add(href.split('#')[0]);
  }
  return Array.from(links);
}

function buildLinkGraph(pagesDir) {
  const routes = listRoutes(pagesDir);
  const inbounds = new Map(routes.map(r => [r, new Set()]));

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
        const fromRouteRel = path.relative(pagesDir, full).replace(/\\/g, '/');
        let fromRoute = '/' + fromRouteRel.replace(/index\.(tsx|jsx|ts|js)$/, '').replace(/\.(tsx|jsx|ts|js)$/, '');
        fromRoute = fromRoute.replace(/\/index$/, '/');
        fromRoute = fromRoute.replace(/\/\/+/, '/');
        const links = extractLinksFromSource(full);
        for (const to of links) {
          if (inbounds.has(to)) inbounds.get(to).add(fromRoute);
        }
      }
    }
  }
  walk(pagesDir);

  const graph = {};
  for (const [route, set] of inbounds.entries()) {
    graph[route] = Array.from(set);
  }
  return graph;
}

function main() {
  const pagesDir = path.resolve(__dirname, '..', 'pages');
  const graph = buildLinkGraph(pagesDir);
  const routes = Object.keys(graph);
  const orphans = routes.filter(r => graph[r].length === 0 && r !== '/');

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: { routes: routes.length, orphans: orphans.length },
    orphans,
    inbounds: graph
  };

  const outDir = path.resolve(__dirname, '..', 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'orphan-pages-report.json');
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`orphan pages report written: ${path.relative(process.cwd(), outFile)}`);
}

if (require.main === module) {
  try { main(); } catch (e) { console.error(e); process.exit(1); }
}