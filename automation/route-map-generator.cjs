const fs = require('fs');
const path = require('path');

function walkPages(dirPath) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkPages(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function toRoute(root, filePath) {
  const rel = filePath.replace(root + path.sep, '');
  if (rel.startsWith('_')) return null;
  if (/^_app\.|^_document\.|^_error\./.test(path.basename(rel))) return null;
  if (rel.startsWith('api' + path.sep)) return null;
  const noExt = rel.replace(/\.(tsx|ts|jsx|js|mdx?|html?)$/, '');
  let route = '/' + noExt.replace(/index$/, '').replace(/\\/g, '/').replace(/\$/g, '');
  route = route.replace(/\/+$/g, '');
  if (route === '') route = '/';
  return route;
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const pagesDir = path.resolve(repoRoot, 'pages');
  const outDir = path.resolve(repoRoot, 'public', 'automation');
  const outFile = path.join(outDir, 'routes.json');

  if (!fs.existsSync(pagesDir)) {
    process.stdout.write('No pages directory found. Skipping.\n');
    return;
  }

  const files = walkPages(pagesDir);
  const routes = [];
  for (const file of files) {
    const route = toRoute(pagesDir, file);
    if (!route) continue;
    routes.push({ route, file: path.relative(repoRoot, file) });
  }

  routes.sort((a, b) => a.route.localeCompare(b.route));

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), count: routes.length, routes }, null, 2) + '\n');
  process.stdout.write(`Wrote ${routes.length} routes to ${path.relative(repoRoot, outFile)}\n`);
}

if (require.main === module) {
  main();
}