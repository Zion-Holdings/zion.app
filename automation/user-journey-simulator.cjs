#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursively(dirPath, extensions) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.next') || entry.name === 'node_modules' || entry.name === '.git') continue;
      results.push(...listFilesRecursively(full, extensions));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext)) results.push(full);
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

function extractLinks(content) {
  const links = new Set();
  // Next.js Link components: <Link href="/path">
  const linkRe = /<Link\s+href={?\"([^\"]+)\"}?/g;
  let m;
  while ((m = linkRe.exec(content))) {
    const href = m[1];
    if (href.startsWith('/')) links.add(href);
  }
  // Plain anchors: <a href="/path">
  const aRe = /<a\s+[^>]*href=\"([^\"]+)\"/g;
  while ((m = aRe.exec(content))) {
    const href = m[1];
    if (href.startsWith('/')) links.add(href);
  }
  return Array.from(links);
}

function toRoute(filePath) {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  let rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  if (rel.endsWith('/index.tsx') || rel.endsWith('/index.ts')) rel = rel.replace(/\/index\.tsx?$/, '/');
  if (rel.endsWith('.tsx') || rel.endsWith('.ts') || rel.endsWith('.jsx') || rel.endsWith('.js')) rel = rel.replace(/\.(t|j)sx?$/, '');
  if (!rel.startsWith('/')) rel = '/' + rel;
  if (rel === '/_app') return '';
  return rel;
}

function main() {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) {
    console.error('pages/ directory not found');
    process.exit(0);
  }

  const files = listFilesRecursively(pagesDir, ['.tsx', '.ts', '.jsx', '.js']).filter((f) => !/\/(api|_app|_document)\./.test(f));

  const graph = {};
  for (const file of files) {
    const route = toRoute(file);
    if (!route) continue;
    const content = readFileSafe(file);
    const links = extractLinks(content);
    graph[route] = links.filter((l) => !l.startsWith('/api') && !l.startsWith('/_next'));
  }

  function simulate(start, maxSteps) {
    const pathTrail = [start];
    let current = start;
    for (let i = 0; i < maxSteps; i++) {
      const nexts = (graph[current] || []).filter((h) => h !== current);
      if (nexts.length === 0) break;
      // Prefer routes with more outgoing links for richer journeys
      nexts.sort((a, b) => (graph[b]?.length || 0) - (graph[a]?.length || 0));
      const pick = nexts[i % nexts.length];
      if (pathTrail.includes(pick)) break; // avoid loops
      pathTrail.push(pick);
      current = pick;
    }
    return pathTrail;
  }

  const starts = Array.from(new Set(['/','/main/front','/automation','/newsroom','/site-health'].filter((s) => graph[s])));
  const journeys = [];
  for (const s of starts) {
    for (let i = 0; i < 6; i++) {
      journeys.push(simulate(s, 5 + (i % 3)));
    }
  }

  const outDir = path.resolve(process.cwd(), 'data');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'journeys.json');
  const report = { generatedAt: new Date().toISOString(), starts, counts: Object.fromEntries(Object.entries(graph).map(([k,v]) => [k, v.length])), journeys };
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Wrote journeys report: ${path.relative(process.cwd(), outPath)}`);
}

if (require.main === module) {
  main();
}