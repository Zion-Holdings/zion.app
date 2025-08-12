#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS_DIR = path.join(ROOT, 'components');
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'component-coupling');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else if (/(\.tsx|\.ts|\.jsx|\.js)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

(function main() {
  const files = listFiles(COMPONENTS_DIR);
  const nodes = new Set();
  const edges = new Map();
  for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    nodes.add(rel);
    const content = fs.readFileSync(file, 'utf8');
    const importRe = /import\s+[^;]*?from\s*['"]([^'">]+)['"];?/g;
    let m;
    while ((m = importRe.exec(content))) {
      let imp = m[1];
      if (!imp.startsWith('.')) continue;
      const resolved = path.normalize(path.join(path.dirname(rel), imp)).replace(/\\/g, '/');
      // add extensions heuristically
      const target = files.find((f) => {
        const r = path.relative(ROOT, f).replace(/\\/g, '/');
        return r === resolved || r.startsWith(resolved + '.');
      });
      if (target) {
        const toRel = path.relative(ROOT, target).replace(/\\/g, '/');
        nodes.add(toRel);
        const key = `${rel}=>${toRel}`;
        edges.set(key, (edges.get(key) || 0) + 1);
      }
    }
  }
  const graph = {
    generatedAt: new Date().toISOString(),
    nodes: Array.from(nodes).sort().map((id) => ({ id })),
    edges: Array.from(edges.entries()).map(([k, count]) => {
      const [from, to] = k.split('=>');
      return { from, to, count };
    })
  };
  const outPath = path.join(REPORT_DIR, 'graph.json');
  fs.writeFileSync(outPath, JSON.stringify(graph, null, 2));
  console.log(`Component Coupling Graph written to ${outPath}`);
})();