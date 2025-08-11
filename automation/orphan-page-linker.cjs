#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { process.stdout.write(`[orphan-linker] ${msg}\n`); }

function readFileSafe(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } }
function writeFileSafe(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, data);
}

function listPageRoutes(pagesDir) {
  const routes = [];
  const excludeFiles = new Set([
    '_app.tsx','_app.jsx','_document.tsx','_document.jsx','_error.tsx','_error.jsx','404.tsx','500.tsx','api','\n'
  ]);
  function walk(dir, baseRoute = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) {
        if (excludeFiles.has(e.name)) continue;
        walk(path.join(dir, e.name), baseRoute + '/' + e.name);
      } else {
        const ext = path.extname(e.name);
        if (!['.tsx', '.jsx', '.js', '.mdx'].includes(ext)) continue;
        const name = path.basename(e.name, ext);
        if (excludeFiles.has(name)) continue;
        if (name.startsWith('[')) continue; // skip dynamic for simplicity
        let route = baseRoute;
        if (name !== 'index') route = baseRoute + '/' + name;
        if (!route) route = '/';
        routes.push(route);
      }
    }
  }
  walk(pagesDir, '');
  // de-dupe and sort
  return Array.from(new Set(routes)).sort((a,b) => a.localeCompare(b));
}

function extractHomeLinks(homePath) {
  const src = readFileSafe(homePath);
  const hrefRegex = /href\s*=\s*"([^"]+)"/g;
  const links = new Set();
  let m;
  while ((m = hrefRegex.exec(src)) !== null) {
    const href = m[1];
    if (!href) continue;
    if (href.startsWith('http')) continue;
    links.add(href);
  }
  return links;
}

function renderReport(orphanRoutes) {
  const list = orphanRoutes.map(r => `<li><a href="${r}">${r}</a></li>`).join('\n');
  return `<!doctype html><html><head><meta charset="utf-8"><title>Orphaned Pages Report</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;background:#0f172a;color:#e2e8f0;margin:0;padding:2rem}a{color:#67e8f9}h1{font-size:1.5rem}ul{line-height:1.8}</style></head><body><h1>Orphaned Pages Report</h1><p>Pages found under <code>/pages</code> not linked from the homepage or front hub.</p><ul>${list}</ul><p>Generated at ${new Date().toISOString()}</p></body></html>`;
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const pagesDir = path.join(root, 'pages');
  const homePath = path.join(pagesDir, 'index.tsx');
  const frontPath = path.join(pagesDir, 'main', 'front', 'index.tsx');

  if (!fs.existsSync(pagesDir)) { log('pages dir not found'); process.exit(0); }

  const routes = listPageRoutes(pagesDir);
  const homeLinks = extractHomeLinks(homePath);
  const frontLinks = extractHomeLinks(frontPath);
  const linked = new Set([...homeLinks, ...frontLinks]);

  const candidates = routes.filter(r => r !== '/' && !r.startsWith('/api'));
  const orphanRoutes = candidates.filter(r => !linked.has(r));

  // Write report
  const reportPath = path.join(root, 'public', 'reports', 'orphans', 'index.html');
  writeFileSafe(reportPath, renderReport(orphanRoutes));
  log(`wrote report ${reportPath}`);

  // Ensure homepage Explore more has a link to the report
  const startMarker = '/* AUTO-GENERATED: HOME_UPDATER_START */';
  const endMarker = '/* AUTO-GENERATED: HOME_UPDATER_END */';
  const homeSrc = readFileSafe(homePath);
  if (homeSrc.includes(startMarker) && homeSrc.includes(endMarker)) {
    const linkMarkup = '            <Link href="/reports/orphans"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Content — Orphaned Pages Report</span></a></Link>';
    if (!homeSrc.includes('/reports/orphans')) {
      const before = homeSrc.slice(0, homeSrc.indexOf(endMarker));
      const after = homeSrc.slice(homeSrc.indexOf(endMarker));
      const updated = before.trimEnd() + '\n  ' + linkMarkup + '\n' + after;
      writeFileSafe(homePath, updated);
      log('inserted link to Orphaned Pages Report on homepage');
    } else {
      log('homepage already links to Orphaned Pages Report');
    }
  }
})();