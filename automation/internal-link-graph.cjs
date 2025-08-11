#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(startDir, predicate) {
  const results = [];
  const stack = [startDir];
  while (stack.length) {
    const dir = stack.pop();
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (predicate(full)) {
        results.push(full);
      }
    }
  }
  return results;
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function isCodeFile(fp) {
  return /(\.tsx?|\.jsx?|\.mdx?)$/i.test(fp);
}

function isInternal(href) {
  if (!href) return false;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#')) return false;
  return href.startsWith('/');
}

function extractInternalHrefs(content) {
  const hrefs = new Set();
  const linkRegex = /href\s*=\s*\{?\s*["'`]([^"'`\}]+)["'`]/g; // matches href="/path" or href={'/path'}
  const nextLinkRegex = /<Link\s+href=\{?\s*["'`]([^"'`\}]+)["'`]/g;
  let m;
  while ((m = linkRegex.exec(content))) {
    if (isInternal(m[1])) hrefs.add(m[1]);
  }
  while ((m = nextLinkRegex.exec(content))) {
    if (isInternal(m[1])) hrefs.add(m[1]);
  }
  return Array.from(hrefs);
}

function normalizePath(p) {
  if (!p) return p;
  // Remove trailing index
  if (p.endsWith('/index')) p = p.slice(0, -('/index'.length));
  if (p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

(function main() {
  const repoRoot = process.cwd();
  const pagesDir = path.join(repoRoot, 'pages');
  const componentsDir = path.join(repoRoot, 'components');
  const sourceFiles = [
    ...walkDir(pagesDir, isCodeFile),
    ...walkDir(componentsDir, isCodeFile),
  ];

  const pageSet = new Set();
  for (const fp of walkDir(pagesDir, isCodeFile)) {
    const rel = '/' + path.relative(pagesDir, fp).replace(/\\/g, '/').replace(/\.(tsx|ts|jsx|js|mdx)$/i, '');
    pageSet.add(normalizePath(rel));
  }

  const outboundMap = new Map(); // file -> hrefs
  const inboundCounts = new Map(); // href -> count

  for (const filePath of sourceFiles) {
    const content = readFileSafe(filePath);
    const hrefs = extractInternalHrefs(content).map(normalizePath);
    outboundMap.set(filePath, hrefs);
    for (const href of hrefs) {
      inboundCounts.set(href, (inboundCounts.get(href) || 0) + 1);
    }
  }

  const graph = [];
  for (const [filePath, hrefs] of outboundMap.entries()) {
    for (const href of hrefs) {
      graph.push({ from: path.relative(repoRoot, filePath).replace(/\\/g, '/'), to: href });
    }
  }

  const opportunities = [];
  for (const page of Array.from(pageSet)) {
    const count = inboundCounts.get(page) || 0;
    if (count < 2) {
      opportunities.push({ page, inbound: count, suggestion: 'Add at least 2 more internal links to this page from related content.' });
    }
  }

  const outDir = path.join(repoRoot, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });

  const nowIso = new Date().toISOString();
  const payload = {
    generatedAt: nowIso,
    totals: { filesScanned: sourceFiles.length, edges: graph.length, pages: pageSet.size },
    graph,
  };

  fs.writeFileSync(path.join(outDir, 'internal-link-graph.json'), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(outDir, 'internal-link-opportunities.json'), JSON.stringify({ generatedAt: nowIso, count: opportunities.length, opportunities }, null, 2));

  console.log(`[internal-link-graph] Wrote graph with ${graph.length} edges; opportunities: ${opportunities.length}`);
})();