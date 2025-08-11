#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walk(dir, ignoreDirs = new Set()) {
  const entries = [];
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    const rel = abs.replace(process.cwd() + path.sep, '');
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      if (ignoreDirs.has(name)) continue;
      entries.push({ type: 'dir', name, abs, rel, children: walk(abs, ignoreDirs) });
    } else {
      entries.push({ type: 'file', name, abs, rel, size: stat.size });
    }
  }
  return entries;
}

function flattenFiles(tree, files = []) {
  for (const node of tree) {
    if (node.type === 'file') files.push(node);
    else flattenFiles(node.children, files);
  }
  return files;
}

function summarizeByExtension(files) {
  const map = {};
  for (const f of files) {
    const ext = path.extname(f.name) || 'noext';
    map[ext] = (map[ext] || 0) + 1;
  }
  return Object.entries(map)
    .map(([ext, count]) => ({ ext, count }))
    .sort((a, b) => b.count - a.count);
}

function detectPagesRoutes(files) {
  const routes = [];
  for (const f of files) {
    if (!f.rel.startsWith('pages' + path.sep)) continue;
    if (!f.name.endsWith('.tsx') && !f.name.endsWith('.ts') && !f.name.endsWith('.jsx') && !f.name.endsWith('.js')) continue;
    let route = f.rel.replace(/^pages\//, '/').replace(/index\.(tsx|ts|jsx|js)$/i, '');
    route = route.replace(/\.(tsx|ts|jsx|js)$/i, '');
    route = route.replace(/\\/g, '/');
    if (!route.startsWith('/')) route = '/' + route;
    if (route.endsWith('/index')) route = route.slice(0, -('/index'.length));
    if (route === '') route = '/';
    routes.push({ route: route || '/', file: f.rel });
  }
  return routes.sort((a, b) => a.route.localeCompare(b.route));
}

function topLargest(files, limit = 20) {
  return files
    .slice()
    .sort((a, b) => b.size - a.size)
    .slice(0, limit)
    .map(f => ({ path: f.rel, size: f.size }));
}

function ensureDir(p) {
  try { fs.mkdirSync(p, { recursive: true }); } catch {}
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const ignore = new Set(['.git', 'node_modules', '.next', 'out', 'dist', '.cursor']);
  const tree = walk(workspaceRoot, ignore);
  const files = flattenFiles(tree, []);

  const byExt = summarizeByExtension(files);
  const routes = detectPagesRoutes(files);
  const largest = topLargest(files, 25);

  const components = files.filter(f => f.rel.startsWith('components' + path.sep) && /\.(tsx|jsx)$/.test(f.name));
  const automations = files.filter(f => f.rel.startsWith('automation' + path.sep) && /\.(cjs|js|mjs)$/.test(f.name));

  const result = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalFiles: files.length,
      totalDirectories: tree.length,
      uniqueExtensions: byExt.length,
      pagesCount: routes.length,
      componentsCount: components.length,
      automationsCount: automations.length,
    },
    byExtension: byExt,
    routes,
    components: components.map(c => c.rel).sort(),
    automations: automations.map(a => a.rel).sort(),
    largestFiles: largest,
  };

  const outDir = path.join(workspaceRoot, 'public', 'automation');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'semantic-code-map.json'), JSON.stringify(result, null, 2));

  // Optional developer-facing doc for quick view
  const docsDir = path.join(workspaceRoot, 'docs');
  ensureDir(docsDir);
  const md = [
    '# Semantic Code Map',
    '',
    `Generated: ${result.generatedAt}`,
    '',
    '## Summary',
    '',
    `- Total files: ${result.summary.totalFiles}`,
    `- Pages: ${result.summary.pagesCount}`,
    `- Components: ${result.summary.componentsCount}`,
    `- Automations: ${result.summary.automationsCount}`,
    '',
    '## Routes',
    '',
    ...result.routes.slice(0, 50).map(r => `- ${r.route}  (${r.file})`),
    '',
    '## Largest Files',
    '',
    ...result.largestFiles.map(f => `- ${f.path} — ${(f.size/1024).toFixed(1)} KB`),
    '',
    'Full JSON: public/automation/semantic-code-map.json'
  ].join('\n');
  fs.writeFileSync(path.join(docsDir, 'CODE_MAP.md'), md);

  console.log('Semantic code map generated.');
}

main();