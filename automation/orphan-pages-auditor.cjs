const fs = require('fs');
const path = require('path');
const glob = require('glob');

function isPageFile(filePath) {
  const base = path.basename(filePath);
  if (base.startsWith('_')) return false;
  if (filePath.includes('/api/')) return false;
  return /\.(js|jsx|ts|tsx)$/.test(base);
}

function routeFromPageFile(root, filePath) {
  const rel = path.relative(path.join(root, 'pages'), filePath).replace(/\\/g, '/');
  if (!isPageFile(filePath)) return null;
  // Strip extension
  const noExt = rel.replace(/\.(js|jsx|ts|tsx)$/i, '');
  // Index handling
  if (noExt.endsWith('/index')) return '/' + noExt.replace(/\/index$/, '');
  if (noExt === 'index') return '/';
  // Exclude dynamic routes conservatively
  if (noExt.includes('[')) return null;
  return '/' + noExt.replace(/^\//, '');
}

function extractInternalLinks(src) {
  const links = new Set();
  const hrefRegex = /\b(?:href|Link\s+href)\s*=\s*("([^"]+)"|'([^']+)'|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/gim;
  let match;
  while ((match = hrefRegex.exec(src))) {
    const candidate = match[2] || match[3] || match[4] || match[5] || '';
    if (candidate.startsWith('/')) {
      // Normalize remove trailing slash except root
      const norm = candidate.length > 1 ? candidate.replace(/\/$/, '') : candidate;
      links.add(norm);
    }
  }
  return Array.from(links);
}

function buildGraph(root) {
  const pageFiles = glob.sync('pages/**/*.{js,jsx,ts,tsx}', { cwd: root, nodir: true, ignore: ['**/node_modules/**', '**/.next/**', '**/out/**'] })
    .map(f => path.resolve(root, f))
    .filter(isPageFile);

  const routes = [];
  const fileByRoute = new Map();
  for (const file of pageFiles) {
    const route = routeFromPageFile(root, file);
    if (route) {
      routes.push(route);
      fileByRoute.set(route, file);
    }
  }

  const outgoing = new Map();
  const incoming = new Map(routes.map(r => [r, new Set()]));

  for (const route of routes) {
    const file = fileByRoute.get(route);
    const src = fs.readFileSync(file, 'utf8');
    const links = extractInternalLinks(src);

    const normalizedLinks = links.map(l => (l.length > 1 ? l.replace(/\/$/, '') : l));
    outgoing.set(route, new Set());
    for (const target of normalizedLinks) {
      outgoing.get(route).add(target);
      if (!incoming.has(target)) incoming.set(target, new Set());
      incoming.get(target).add(route);
    }
  }

  return { routes, fileByRoute, outgoing, incoming };
}

function generateReports(root, graph) {
  const reportsDir = path.join(root, 'public', 'reports', 'orphans');
  fs.mkdirSync(reportsDir, { recursive: true });
  const docsDir = path.join(root, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });

  const allRoutes = Array.from(new Set(graph.routes.map(r => (r.length > 1 ? r.replace(/\/$/, '') : r)))).sort();
  const orphanRoutes = allRoutes.filter(r => r !== '/' && (!graph.incoming.has(r) || graph.incoming.get(r).size === 0));

  const now = new Date().toISOString();

  // HTML report
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Orphan Pages Report</title>
  <style>
    body{font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin:24px;}
    code{background:#f4f4f5; padding:2px 6px; border-radius:6px}
    table{border-collapse:collapse; width:100%;}
    th,td{border:1px solid #e4e4e7; padding:8px; text-align:left}
    th{background:#fafafa}
    .muted{color:#71717a}
  </style>
</head>
<body>
  <h1>Orphan Pages Report</h1>
  <p class="muted">Generated: ${now}</p>
  <p>Total routes: ${allRoutes.length}. Orphans: ${orphanRoutes.length}.</p>
  <table>
    <thead><tr><th>Route</th><th>File</th><th>Inbound Links</th></tr></thead>
    <tbody>
      ${orphanRoutes.map(r => `<tr><td><code>${r}</code></td><td><code>${path.relative(root, graph.fileByRoute.get(r) || '')}</code></td><td>0</td></tr>`).join('\n')}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(reportsDir, 'index.html'), html);

  // Markdown report
  const mdLines = [];
  mdLines.push('# Orphan Pages Report');
  mdLines.push('');
  mdLines.push(`Generated: ${now}`);
  mdLines.push('');
  mdLines.push(`Total routes: ${allRoutes.length}. Orphans: ${orphanRoutes.length}.`);
  mdLines.push('');
  for (const r of orphanRoutes) {
    mdLines.push(`- ${r} — ${path.relative(root, graph.fileByRoute.get(r) || '')}`);
  }
  fs.writeFileSync(path.join(docsDir, 'ORPHAN_PAGES.md'), mdLines.join('\n'));

  return { totalRoutes: allRoutes.length, orphanRoutes: orphanRoutes.length };
}

function main() {
  const root = path.resolve(__dirname, '..');
  const graph = buildGraph(root);
  const stats = generateReports(root, graph);
  console.log(`Orphan pages report generated. routes=${stats.totalRoutes} orphans=${stats.orphanRoutes}`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}