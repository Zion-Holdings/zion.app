#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(rootDir) {
  const files = [];
  const stack = [rootDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        if (e.name === 'api') continue; // skip API routes
        stack.push(full);
      } else if (/\.(tsx|ts|jsx|js)$/i.test(e.name)) {
        files.push(full);
      }
    }
  }
  return files;
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function deriveRoute(pagesRoot, filePath) {
  const rel = path.relative(pagesRoot, filePath).replace(/\\/g, '/');
  let route = '/' + rel.replace(/\.(tsx|ts|jsx|js)$/i, '');
  route = route.replace(/index$/i, '');
  route = route.replace(/\[(.*?)\]/g, ':$1');
  route = route.replace(/\/+/, '/');
  if (route === '/') return '/';
  return route.replace(/\/$/, '');
}

function stripJsxAndImports(src) {
  let s = src;
  s = s.replace(/<[^>]+>/g, ' '); // strip JSX tags
  s = s.replace(/import\s+[^;]+;?/g, ' ');
  s = s.replace(/export\s+[^;]+;?/g, ' ');
  s = s.replace(/\{[^}]*\}/g, ' ');
  s = s.replace(/\s+/g, ' ');
  return s.trim();
}

(function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const pagesDir = path.join(workspaceRoot, 'pages');
  const outJson = path.join(workspaceRoot, 'public', 'automation', 'content-gaps.json');
  const outMd = path.join(workspaceRoot, 'docs', 'reports', 'content-gaps.md');

  let files = [];
  try { files = walkDir(pagesDir); } catch { files = []; }

  const results = [];

  for (const f of files) {
    const src = readFileSafe(f);
    if (!src) continue;
    const route = deriveRoute(pagesDir, f);
    const flat = stripJsxAndImports(src);
    const words = flat ? flat.split(/\s+/).filter(Boolean).length : 0;
    const hasHead = /from\s+['\"]next\/head['\"]/i.test(src) || /<Head>/i.test(src);
    const hasMetaDesc = /<meta[^>]+name=["']description["'][^>]*>/i.test(src);

    const suggestions = [];
    if (!hasHead || !hasMetaDesc) suggestions.push('Add <Head> with meta description');
    if (words < 120) suggestions.push('Low content density — consider adding more helpful copy');

    results.push({ route, file: path.relative(workspaceRoot, f), words, hasMetaDescription: !!hasMetaDesc, suggestions });
  }

  results.sort((a, b) => a.route.localeCompare(b.route));

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.mkdirSync(path.dirname(outMd), { recursive: true });

  const json = { generatedAt: new Date().toISOString(), totalPages: results.length, pages: results };
  fs.writeFileSync(outJson, JSON.stringify(json, null, 2));

  const mdLines = [];
  mdLines.push('# Content Gaps Report');
  mdLines.push('');
  mdLines.push(`Generated at: ${json.generatedAt}`);
  mdLines.push('');
  mdLines.push(`Total pages scanned: ${json.totalPages}`);
  mdLines.push('');
  mdLines.push('| Route | Words | Meta Description | Suggestions |');
  mdLines.push('| --- | ---:| :---: | --- |');
  json.pages.slice(0, 1000).forEach((p) => {
    mdLines.push(`| ${p.route} | ${p.words} | ${p.hasMetaDescription ? 'Yes' : 'No'} | ${p.suggestions.join('; ')} |`);
  });
  fs.writeFileSync(outMd, mdLines.join('\n'));

  console.log(`Wrote ${outJson} and ${outMd}`);
})();