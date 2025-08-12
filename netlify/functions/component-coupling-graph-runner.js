const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runGitSync() {
  try {
    const script = path.resolve(process.cwd(), 'automation', 'advanced-git-sync.cjs');
    const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0 };
  } catch (e) {
    return { status: 1 };
  }
}

exports.handler = async () => {
  const root = process.cwd();
  const compDir = path.join(root, 'components');
  const edges = [];
  const files = [];

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|jsx|ts|js)$/i.test(e.name)) files.push(p);
    }
  }

  walk(compDir);

  const ids = new Set();
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const imports = Array.from(src.matchAll(/from\s+['\"](\.\.\/[^'\"]+|\.\/[^'\"]+|components\/[^'\"]+)['\"]/g)).map(m => m[1]);
    const fromId = path.relative(root, file);
    ids.add(fromId);
    for (const imp of imports) {
      const toId = imp;
      ids.add(toId);
      edges.push({ from: fromId, to: toId });
    }
  }

  const nodes = Array.from(ids).map(id => ({ id }));
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'component-coupling-graph.json'), JSON.stringify({ generatedAt: new Date().toISOString(), nodes, edges }, null, 2));
  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, nodes: nodes.length, edges: edges.length }) };
};