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

function auditContent(content) {
  const checks = {
    'og:title': /og:title/.test(content),
    'og:description': /og:description/.test(content),
    'og:image': /og:image/.test(content),
    'twitter:card': /twitter:card/.test(content),
    'twitter:image': /twitter:image/.test(content),
  };
  const present = Object.values(checks).filter(Boolean).length;
  const coverage = Math.round((present / Object.keys(checks).length) * 100);
  return { checks, coverage };
}

function generateMarkdown(rows) {
  let md = '# OpenGraph Coverage Report\n\n';
  md += `Total pages: ${rows.length}\n\n`;
  md += '| Page | Coverage | Missing |\n|---|---:|---|\n';
  for (const r of rows) {
    const missing = Object.entries(r.checks).filter(([, ok]) => !ok).map(([k]) => k).join(', ') || '—';
    md += `| ${r.route} | ${r.coverage}% | ${missing} |\n`;
  }
  return md;
}

function toRoute(pagesDir, filePath) {
  const rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  let route = rel.replace(/\.(tsx|jsx|ts|js)$/, '');
  if (route.startsWith('api/') || route.startsWith('_')) return null;
  route = route.replace(/\/index$/, '');
  route = '/' + route;
  if (route === '/index') route = '/';
  route = route.replace(/\/+/g, '/');
  return route;
}

function main() {
  const root = process.cwd();
  const pagesDir = path.join(root, 'pages');
  if (!fs.existsSync(pagesDir)) {
    console.log('No pages directory');
    return;
  }
  const files = listFilesRecursive(pagesDir, ['.tsx', '.jsx', '.ts', '.js']);
  const results = [];
  for (const f of files) {
    const route = toRoute(pagesDir, f);
    if (!route) continue;
    const content = fs.readFileSync(f, 'utf8');
    const { checks, coverage } = auditContent(content);
    results.push({ file: path.relative(root, f), route, coverage, checks });
  }
  results.sort((a, b) => a.coverage - b.coverage);

  const outDirPublic = path.join(root, 'public', 'reports');
  const outDirDocs = path.join(root, 'docs', 'reports');
  ensureDir(outDirPublic);
  ensureDir(outDirDocs);

  fs.writeFileSync(path.join(outDirPublic, 'opengraph-coverage.json'), JSON.stringify({ generatedAt: new Date().toISOString(), pages: results }, null, 2));
  fs.writeFileSync(path.join(outDirDocs, 'opengraph-coverage.md'), generateMarkdown(results), 'utf8');
  console.log('Wrote OpenGraph coverage for', results.length, 'pages');
}

if (require.main === module) {
  main();
}