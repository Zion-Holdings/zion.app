#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', '.next', 'dist', 'build', 'out', '.husky', '.github'].includes(entry.name)) continue;
      walk(full, fileList);
    } else {
      const ext = path.extname(entry.name);
      if (['.js', '.cjs', '.mjs', '.ts', '.tsx'].includes(ext)) {
        fileList.push(full);
      }
    }
  }
  return fileList;
}

function extractImports(content) {
  const imports = [];
  const importRegex = /import\s+[^'"\n]+['"]([^'"]+)['"];?|require\(\s*['"]([^'"]+)['"]\s*\)/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const mod = match[1] || match[2];
    if (mod) imports.push(mod);
  }
  return imports;
}

function classifyModule(mod) {
  if (mod.startsWith('.') || mod.startsWith('/')) return 'local';
  return 'external';
}

function toNodeId(p) {
  return p.replace(process.cwd() + path.sep, '');
}

function buildGraph(files) {
  const nodes = {};
  const edges = [];
  for (const f of files) {
    const rel = toNodeId(f);
    nodes[rel] = nodes[rel] || { id: rel, type: 'file' };
    const content = fs.readFileSync(f, 'utf8');
    const imports = extractImports(content);
    for (const mod of imports) {
      const kind = classifyModule(mod);
      const target = kind === 'local' ? toNodeId(path.normalize(path.join(path.dirname(f), mod))) : mod;
      if (kind === 'local') {
        nodes[target] = nodes[target] || { id: target, type: 'file' };
      } else {
        nodes[target] = nodes[target] || { id: target, type: 'package' };
      }
      edges.push({ from: rel, to: target, kind });
    }
  }
  return { nodes: Object.values(nodes), edges };
}

(function main() {
  try {
    const root = process.cwd();
    const files = walk(root);
    const graph = buildGraph(files);
    const outDir = path.join(root, 'data', 'reports');
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'repo-knowledge-graph.json');
    fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), ...graph }, null, 2));
    console.log(`Knowledge graph written to ${outPath}`);
  } catch (e) {
    console.error('repo-knowledge-graph failed:', e.message);
    process.exit(0);
  }
})();