const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

exports.config = { schedule: '*/20 * * * *' };

exports.handler = async () => {
  const logs = [];
  const componentsDir = path.resolve(__dirname, '..', '..', 'components');
  const outDir = path.resolve(__dirname, '..', '..', 'data', 'reports');
  const outPath = path.join(outDir, 'component-coupling-graph.json');
  fs.mkdirSync(outDir, { recursive: true });

  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) files.push(abs);
    }
  }
  try { walk(componentsDir); } catch {}

  const nodes = [];
  const edges = [];
  const idFor = new Map();
  function getId(name) {
    if (!idFor.has(name)) idFor.set(name, idFor.size);
    return idFor.get(name);
  }

  for (const abs of files) {
    const rel = path.relative(componentsDir, abs).replace(/\\/g, '/');
    const srcName = rel.split('/')[0];
    if (!srcName) continue;
    const srcId = getId(srcName);
    const content = fs.readFileSync(abs, 'utf8');
    const importMatches = Array.from(content.matchAll(/from\s+['"]([^'\"]+)['"]/g));
    for (const m of importMatches) {
      const spec = m[1];
      if (spec.startsWith('.') || spec.startsWith('/')) {
        // local import
        const target = spec.replace(/^\.\//, '').split('/')[0];
        if (target && target !== srcName) {
          const dstId = getId(target);
          edges.push({ source: srcId, target: dstId, weight: 1 });
        }
      } else if (spec.startsWith('components/')) {
        const target = spec.split('/')[1];
        if (target) {
          const dstId = getId(target);
          edges.push({ source: srcId, target: dstId, weight: 1 });
        }
      }
    }
  }

  for (const [name, id] of idFor.entries()) nodes.push({ id, name });

  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), nodes, edges }, null, 2));
  logs.push(`wrote ${outPath} (nodes=${nodes.length}, edges=${edges.length})`);

  const git = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation/advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  logs.push(git.stdout || '');
  logs.push(git.stderr || '');
  logs.push('git exit=' + (git.status || 0));

  return { statusCode: 200, body: logs.join('\n') };
};