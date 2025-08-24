const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function listFilesRecursive(rootDir) {
  const results = [];
  const stack = [rootDir];
  while (stack.length > 0) {
    const current = stack.pop();
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      const entries = fs.readdirSync(current);
      for (const entry of entries) {
        if (entry === '.DS_Store' || entry.startsWith('.')) continue;
        stack.push(path.join(current, entry));
      }
    } else {
      results.push(current);
    }
  }
  return results;
}

function toRouteFromPageFile(filePath, pagesRoot) {
  const rel = path.relative(pagesRoot, filePath);
  if (rel.startsWith('_') || rel.includes('/_')) return null; // skip Next special files
  const ext = path.extname(rel);
  if (!['.js', '.jsx', '.ts', '.tsx', '.mdx'].includes(ext)) return null;
  const noExt = rel.slice(0, -ext.length);
  if (noExt.endsWith('/_middleware') || noExt.endsWith('/_app') || noExt.endsWith('/_document')) return null;
  // remove trailing /index
  const cleaned = noExt.replace(/index$/i, '');
  let route = '/' + cleaned.replace(/\\/g, '/');
  route = route.replace(/\/+$/, '/');
  if (route === '//') route = '/';
  // convert dynamic segments [id] -> :id
  route = route.replace(/\[(\.\.\.)?([^\]]+)\]/g, (_, rest, name) => rest ? `:${name}+` : `:${name}`);
  return route;
}

function generateRoutes(pagesRoot) {
  const files = listFilesRecursive(pagesRoot);
  const set = new Set();
  for (const file of files) {
    const route = toRouteFromPageFile(file, pagesRoot);
    if (route) set.add(route);
  }
  const routes = Array.from(set).sort((a, b) => a.localeCompare(b));
  return routes;
}

function listPublicReports(publicRoot) {
  const reportsRoot = path.join(publicRoot, 'reports');
  if (!fs.existsSync(reportsRoot)) return [];
  const entries = fs.readdirSync(reportsRoot, { withFileTypes: true });
  const items = [];
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const dir = ent.name;
    const indexHtml = path.join(reportsRoot, dir, 'index.html');
    items.push({
      name: dir,
      path: `/reports/${dir}${fs.existsSync(indexHtml) ? '' : '/'}`,
      hasIndex: fs.existsSync(indexHtml)
    });
  }
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

function writeJson(targetPath, data) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
}

function writeHtml(targetPath, { routes, reports }) {
  ensureDir(path.dirname(targetPath));
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Route Map</title>
<style>
  body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#0b1220; color:#e5e7eb; margin:0; padding:2rem; }
  h1 { margin:0 0 1rem; }
  section { margin: 2rem 0; }
  .card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 1rem; margin: 0.5rem 0; }
  a { color: #67e8f9; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 0.75rem; }
  .muted { color: #9ca3af; font-size: 0.9rem; }
</style>
</head>
<body>
  <h1>Route Map</h1>
  <p class="muted">Auto-generated list of Next.js routes and available public reports.</p>
  <section>
    <h2>Routes (${routes.length})</h2>
    <div class="grid">
      ${routes.map(r => `<div class="card"><a href="${r}">${r}</a></div>`).join('')}
    </div>
  </section>
  <section>
    <h2>Reports (${reports.length})</h2>
    <div class="grid">
      ${reports.map(rep => `<div class="card"><a href="${rep.hasIndex ? rep.path : rep.path + 'index.html'}">/reports/${rep.name}</a></div>`).join('')}
    </div>
  </section>
</body>
</html>`;
  fs.writeFileSync(targetPath, html, 'utf8');
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const pagesRoot = path.join(projectRoot, 'pages');
  const publicRoot = path.join(projectRoot, 'public');

  const routes = generateRoutes(pagesRoot);
  const reports = listPublicReports(publicRoot);

  const outDir = path.join(publicRoot, 'reports', 'routes');
  writeJson(path.join(outDir, 'routes.json'), { routes, reports, generatedAt: new Date().toISOString() });
  writeHtml(path.join(outDir, 'index.html'), { routes, reports });

  console.log(`[routes-map-generator] Generated ${routes.length} routes and ${reports.length} report entries.`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}