#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function extractTitle(content) {
  const m1 = content.match(/^\s*export\s+const\s+metadata\s*=\s*\{[\s\S]*?title:\s*['"]([^'"]+)['"]/m);
  if (m1) return m1[1];
  const m2 = content.match(/<title>([^<]+)<\/title>/i);
  if (m2) return m2[1];
  const m3 = content.match(/^\s*#\s+(.+)/m);
  if (m3) return m3[1];
  return '';
}

function extractSummary(content) {
  const text = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{\{[^}]+\}\}/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.slice(0, 280);
}

function toRoute(root, file) {
  const rel = path.relative(root, file);
  let route = '/' + rel.replace(/index\.(jsx?|tsx?|mdx?|md)$/, '').replace(/\.(jsx?|tsx?|mdx?|md)$/, '');
  route = route.replace(/\\/g, '/');
  route = route.replace(/\[(.+?)\]/g, ':$1');
  if (route.endsWith('/')) route = route.slice(0, -1);
  if (route === '') route = '/';
  return route;
}

function main() {
  const pagesRoot = path.join(process.cwd(), 'pages');
  const docsRoot = path.join(process.cwd(), 'docs');
  const files = [];
  if (fs.existsSync(pagesRoot)) files.push(...glob.sync('**/*.{js,jsx,ts,tsx,md,mdx}', { cwd: pagesRoot, nodir: true }).map((f) => path.join(pagesRoot, f)));
  if (fs.existsSync(docsRoot)) files.push(...glob.sync('**/*.{md,mdx}', { cwd: docsRoot, nodir: true }).map((f) => path.join(docsRoot, f)));

  const entries = files.map((file) => {
    const content = readFileSafe(file);
    return {
      route: toRoute(pagesRoot, file),
      file: path.relative(process.cwd(), file),
      title: extractTitle(content) || path.basename(file).replace(/\.(jsx?|tsx?|mdx?|md)$/, ''),
      summary: extractSummary(content)
    };
  });

  const outDir = path.join(process.cwd(), 'public', 'search');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'index.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), entries }, null, 2));
  console.log(`Search index generated: ${outPath} (${entries.length} entries)`);
}

if (require.main === module) {
  main();
}