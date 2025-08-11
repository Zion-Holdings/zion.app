#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS_DIR = path.join(ROOT, 'components');
const OUT_DIR = path.join(ROOT, 'public', 'automation');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

function listSourceFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|jsx|js)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function readFileSafe(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }

const IMPORT_RE = /\bfrom\s+['"]([^'\"]+)['"];?|\brequire\(\s*['"]([^'\"]+)['"]\s*\)/g;

function resolveImport(fromFile, spec) {
  // Only consider relative or components-rooted imports
  let candidate = null;
  if (spec.startsWith('.')) {
    candidate = path.resolve(path.dirname(fromFile), spec);
  } else if (spec.startsWith('components/')) {
    candidate = path.resolve(ROOT, spec);
  } else if (spec.startsWith('@/components/')) {
    candidate = path.resolve(ROOT, spec.replace(/^@\//, ''));
  }
  if (!candidate) return null;

  const tryPaths = [
    candidate,
    `${candidate}.tsx`, `${candidate}.ts`, `${candidate}.jsx`, `${candidate}.js`,
    path.join(candidate, 'index.tsx'), path.join(candidate, 'index.ts'), path.join(candidate, 'index.jsx'), path.join(candidate, 'index.js')
  ];
  for (const p of tryPaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  return null;
}

function toComponentId(filePath) {
  const rel = path.relative(COMPONENTS_DIR, filePath).replace(/\\/g, '/');
  return rel;
}

(function main() {
  const files = listSourceFiles(COMPONENTS_DIR);
  const nodes = [];
  const edges = [];
  const nodeIndex = new Map();

  function addNode(file) {
    if (!nodeIndex.has(file)) {
      const content = readFileSafe(file);
      const lines = content ? content.split(/\r?\n/).length : 0;
      const id = toComponentId(file);
      nodeIndex.set(file, nodes.length);
      nodes.push({ id, file: path.relative(ROOT, file), lines });
    }
    return nodeIndex.get(file);
  }

  for (const file of files) {
    const fromIdx = addNode(file);
    const content = readFileSafe(file);
    const seenTargets = new Set();
    let m;
    while ((m = IMPORT_RE.exec(content))) {
      const spec = m[1] || m[2];
      if (!spec) continue;
      const resolved = resolveImport(file, spec);
      if (!resolved) continue;
      if (!resolved.startsWith(COMPONENTS_DIR)) continue;
      if (resolved === file) continue;
      if (seenTargets.has(resolved)) continue;
      seenTargets.add(resolved);
      const toIdx = addNode(resolved);
      edges.push({ from: nodes[fromIdx].id, to: nodes[toIdx].id });
    }
  }

  ensureDir(OUT_DIR);
  const outPath = path.join(OUT_DIR, 'component-graph.json');
  const payload = { generatedAt: new Date().toISOString(), nodes, edges };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`Component graph written to ${outPath} with ${nodes.length} nodes and ${edges.length} edges.`);
})();