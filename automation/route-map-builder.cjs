const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function listFilesRecursive(dirPath, exts) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(full, exts));
    } else if (exts.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

function fileStats(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return { bytes: Buffer.byteLength(content, 'utf8'), lines: content.split('\n').length };
}

function toRoute(pagesDir, filePath) {
  const rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  // remove extension
  let route = rel.replace(/\.(tsx|jsx|ts|js)$/, '');
  // ignore api and special files
  if (route.startsWith('api/') || route.startsWith('_')) return null;
  // remove trailing index
  route = route.replace(/\/index$/, '');
  route = '/' + route;
  if (route === '/index') route = '/';
  // collapse multiple slashes
  route = route.replace(/\/+/g, '/');
  return route;
}

function generateMarkdown(rows) {
  let md = '# Route Map\n\n';
  md += `Total routes: ${rows.length}\n\n`;
  md += '| Route | Depth | Lines | Bytes |\n|---|---:|---:|---:|\n';
  for (const r of rows) {
    md += `| ${r.route} | ${r.depth} | ${r.lines} | ${r.bytes} |\n`;
  }
  return md;
}

function main() {
  const root = process.cwd();
  const pagesDir = path.join(root, 'pages');
  if (!fs.existsSync(pagesDir)) {
    console.log('No pages directory found');
    return;
  }
  const files = listFilesRecursive(pagesDir, ['.tsx', '.jsx', '.ts', '.js']);
  const entries = [];
  for (const f of files) {
    const route = toRoute(pagesDir, f);
    if (!route) continue;
    const { bytes, lines } = fileStats(f);
    const depth = route === '/' ? 0 : route.split('/').filter(Boolean).length;
    entries.push({ route, file: path.relative(root, f), depth, bytes, lines });
  }
  entries.sort((a, b) => (a.depth - b.depth) || a.route.localeCompare(b.route));

  const outDirPublic = path.join(root, 'public', 'reports');
  const outDirDocs = path.join(root, 'docs', 'reports');
  ensureDir(outDirPublic);
  ensureDir(outDirDocs);

  fs.writeFileSync(path.join(outDirPublic, 'route-map.json'), JSON.stringify({ generatedAt: new Date().toISOString(), routes: entries }, null, 2));
  fs.writeFileSync(path.join(outDirDocs, 'route-map.md'), generateMarkdown(entries), 'utf8');
  console.log('Wrote route map for', entries.length, 'routes');
}

if (require.main === module) {
  main();
}