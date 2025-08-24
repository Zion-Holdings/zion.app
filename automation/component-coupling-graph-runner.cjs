#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

function parseImports(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const matches = src.matchAll(/import\s+[^'";]+from\s+['\"]([^'\"]+)['\"]/g);
  const deps = [];
  for (const m of matches) deps.push(m[1]);
  return deps;
}

const files = glob.sync('{components,pages}/**/*.{ts,tsx}', { nodir: true });
const graph = {};
for (const f of files) {
  graph[f] = parseImports(f);
}

writeFile(path.resolve(process.cwd(), 'data/component-coupling-graph.json'), JSON.stringify({ generatedAt: new Date().toISOString(), graph }, null, 2));
console.log('Component coupling graph written to data/component-coupling-graph.json');