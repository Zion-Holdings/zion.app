/* Autonomous Knowledge Graph
   Builds a simple topic graph from the site structure and filenames.
*/

const fs = require('fs-extra');
const path = require('path');

function tokenize(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean);
}

function collectPages() {
  const root = path.join(process.cwd(), 'pages');
  const nodes = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (name === 'api') continue;
        walk(full);
      } else if (/\.(tsx|mdx|md|ts|js|jsx)$/.test(name)) {
        const rel = path.relative(root, full);
        if (rel.startsWith('_')) continue;
        const tokens = tokenize(rel);
        nodes.push({ id: rel, tokens });
      }
    }
  }
  if (fs.existsSync(root)) walk(root);
  return nodes;
}

function buildGraph(nodes) {
  const edges = [];
  // simple co-occurrence: edge between files sharing >=2 tokens
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const setA = new Set(a.tokens);
      const shared = b.tokens.filter((t) => setA.has(t));
      if (shared.length >= 2) {
        edges.push({ source: a.id, target: b.id, weight: shared.length, terms: shared.slice(0, 5) });
      }
    }
  }
  // topic frequencies
  const termFreq = {};
  for (const n of nodes) for (const t of n.tokens) termFreq[t] = (termFreq[t] || 0) + 1;
  const topTerms = Object.entries(termFreq).sort((a, b) => b[1] - a[1]).slice(0, 50).map(([term, count]) => ({ term, count }));
  return { nodes, edges, topTerms };
}

async function run() {
  const nodes = collectPages();
  const graph = buildGraph(nodes);
  const outDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(outDir);
  await fs.writeJson(path.join(outDir, 'knowledge-graph.json'), { generatedAt: new Date().toISOString(), ...graph }, { spaces: 2 });
  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  await fs.appendFile(path.join(logDir, 'knowledge-graph.log'), `[${new Date().toISOString()}] nodes=${nodes.length} edges=${graph.edges.length}\n`);
  console.log('Knowledge Graph generated');
}

run().catch((e) => {
  console.error('Knowledge Graph failed:', e);
  process.exitCode = 1;
});