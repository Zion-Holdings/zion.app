const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function listFilesRecursive(dir, filterFn) {
  const out = [];
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFilesRecursive(abs, filterFn));
    } else if (!filterFn || filterFn(abs)) {
      out.push(abs);
    }
  }
  return out;
}

function toRouteFromPagesFile(pagesRoot, absFile) {
  const rel = path.relative(pagesRoot, absFile).replace(/\\/g, '/');
  const noExt = rel.replace(/\.(tsx|ts|jsx|js)$/, '');
  if (noExt.startsWith('api/')) return null; // ignore API routes for this map
  if (noExt.startsWith('_')) return null;
  const segments = noExt.split('/').filter(Boolean);
  if (segments[segments.length - 1] === 'index') segments.pop();
  const routeSegments = segments.map(seg => {
    // [slug] -> :slug, [...slug] -> :slug+, [[...slug]] -> :slug*
    if (/^\[\[\.\.\.(.+)\]\]$/.test(seg)) return ':' + RegExp.$1 + '*';
    if (/^\[\.\.\.(.+)\]$/.test(seg)) return ':' + RegExp.$1 + '+';
    if (/^\[(.+)\]$/.test(seg)) return ':' + RegExp.$1;
    return seg;
  });
  return '/' + routeSegments.join('/');
}

function htmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  const root = path.resolve(__dirname, '..', '..');
  const pagesRoot = path.join(root, 'pages');
  const files = listFilesRecursive(pagesRoot, (f) => /\.(tsx|ts|jsx|js)$/.test(f));

  const routes = [];
  for (const abs of files) {
    const route = toRouteFromPagesFile(pagesRoot, abs);
    if (!route) continue;
    routes.push({ route, file: path.relative(root, abs).replace(/\\/g, '/') });
  }

  // unique & sort
  const seen = new Set();
  const uniq = [];
  for (const r of routes) {
    if (seen.has(r.route)) continue;
    seen.add(r.route);
    uniq.push(r);
  }
  uniq.sort((a, b) => a.route.localeCompare(b.route));

  const outDir = path.join(root, 'public', 'reports', 'routes');
  fs.mkdirSync(outDir, { recursive: true });

  const json = {
    generatedAt: new Date().toISOString(),
    total: uniq.length,
    routes: uniq,
  };
  fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(json, null, 2));

  const rows = uniq.map(r => `<tr><td><code>${htmlEscape(r.route)}</code></td><td><code>${htmlEscape(r.file)}</code></td></tr>`).join('\n');
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Routes Map</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#0b1220; color:#fff; }
    .container { max-width: 960px; margin: 2rem auto; padding: 0 1rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .meta { color: #9ca3af; font-size: 0.85rem; margin-bottom: 1rem; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0.5rem; text-align: left; font-size: 0.9rem; }
    code { color: #7dd3fc; }
    a { color: #93c5fd; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Routes Map</h1>
    <div class="meta">Generated: ${new Date().toISOString()} — Total: ${uniq.length}</div>
    <div class="meta"><a href="./index.json">Download JSON</a></div>
    <table>
      <thead><tr><th>Route</th><th>Source file</th></tr></thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html);

  // Commit and push via existing sync helper
  runNode('automation/advanced-git-sync.cjs');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true, total: uniq.length, output: 'public/reports/routes/index.{json,html}' })
  };
};