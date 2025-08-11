const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function writeFileEnsuringDir(targetPath, content) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, content, 'utf8');
}

function listSourceFiles(root, relDirs) {
  const exts = new Set(['.js', '.ts', '.tsx', '.cjs', '.mjs']);
  const ignore = new Set(['.git', 'node_modules', '.next', 'out']);
  const files = [];
  for (const rel of relDirs) {
    const dir = path.join(root, rel);
    if (!fs.existsSync(dir)) continue;
    const stack = [dir];
    while (stack.length) {
      const current = stack.pop();
      const entries = fs.readdirSync(current, { withFileTypes: true });
      for (const entry of entries) {
        if (ignore.has(entry.name)) continue;
        const full = path.join(current, entry.name);
        if (entry.isDirectory()) stack.push(full);
        else if (exts.has(path.extname(full))) files.push(full);
      }
    }
  }
  return files;
}

function parseImports(source) {
  const edges = [];
  const importRegex = /import\s+[^'"`]*from\s+['"]([^'"`]+)['"];?|import\s+['"]([^'"`]+)['"];?/g;
  const requireRegex = /require\(\s*['"]([^'"`]+)['"]\s*\)/g;
  let m;
  while ((m = importRegex.exec(source))) {
    const spec = (m[1] || m[2] || '').trim();
    if (spec) edges.push(spec);
  }
  while ((m = requireRegex.exec(source))) {
    const spec = (m[1] || '').trim();
    if (spec) edges.push(spec);
  }
  return edges;
}

function buildGraph(root, files) {
  const nodes = [];
  const edges = [];
  const idByPath = new Map();
  for (const f of files) {
    const id = path.relative(root, f);
    idByPath.set(f, id);
    nodes.push({ id, path: id });
  }
  for (const f of files) {
    const fromId = path.relative(root, f);
    let source = '';
    try { source = fs.readFileSync(f, 'utf8'); } catch {}
    const imports = parseImports(source);
    for (const spec of imports) {
      if (!spec.startsWith('.') && !spec.startsWith('/')) continue; // only local
      const candidate = path.resolve(path.dirname(f), spec);
      // try to find a matching file among known files (with extensions)
      const variants = [candidate, `${candidate}.js`, `${candidate}.ts`, `${candidate}.tsx`, `${candidate}.cjs`, `${candidate}.mjs`, path.join(candidate, 'index.js'), path.join(candidate, 'index.ts'), path.join(candidate, 'index.tsx')];
      const match = variants.find(v => idByPath.has(v));
      if (match) {
        edges.push({ from: fromId, to: path.relative(root, match) });
      }
    }
  }
  return { nodes, edges };
}

exports.config = { schedule: '*/3 * * * *' };

exports.handler = async function handler() {
  try {
    const root = path.resolve(__dirname, '..', '..');
    const files = listSourceFiles(root, ['pages', 'components', 'automation', 'netlify/functions']);
    const graph = buildGraph(root, files);
    const outPath = path.join(root, 'public', 'reports', 'architecture-graph.json');
    writeFileEnsuringDir(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), ...graph }, null, 2));

    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add public/reports/architecture-graph.json', { stdio: 'inherit', shell: true });
      execSync('git commit -m "chore(reports): update architecture graph [skip ci]" || true', { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch {}

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: '/reports/architecture-graph.json' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};