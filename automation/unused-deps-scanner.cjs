#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'deps');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function renderHTML(result) {
  const unusedDeps = result.dependencies || [];
  const unusedDevDeps = result.devDependencies || [];
  const missing = Object.entries(result.missing || {});
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Dependencies Audit</title>
<style>
  body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
  h2 { margin-top: 24px; }
  code { background: #f3f4f6; padding: 2px 4px; border-radius: 4px; }
  ul { line-height: 1.7; }
  li { margin: 6px 0; }
</style>
</head>
<body>
  <h1>Dependencies Audit</h1>
  <p>Autonomously generated. Unused and missing dependencies are listed below.</p>

  <h2>Unused Dependencies (${unusedDeps.length})</h2>
  <ul>
    ${unusedDeps.map(d => `<li><code>${d}</code></li>`).join('\n') || '<li>None</li>'}
  </ul>

  <h2>Unused DevDependencies (${unusedDevDeps.length})</h2>
  <ul>
    ${unusedDevDeps.map(d => `<li><code>${d}</code></li>`).join('\n') || '<li>None</li>'}
  </ul>

  <h2>Missing Imports (${missing.length})</h2>
  <ul>
    ${missing.map(([pkg, files]) => `<li><code>${pkg}</code> — used in: ${files.map(f => `<code>${f}</code>`).join(', ')}</li>`).join('\n') || '<li>None</li>'}
  </ul>
</body>
</html>`;
}

async function tryDepcheck(cwd) {
  try {
    const depcheck = require('depcheck');
    return await depcheck(cwd, {
      ignoreDirs: ['.git', 'node_modules', 'out', '.next', 'public'],
      specials: [
        depcheck.special.eslint,
        depcheck.special.babel,
        depcheck.special.typescript,
        depcheck.special.webpack,
      ],
    });
  } catch (_) {
    return null;
  }
}

function walkFiles(root, predicate) {
  const results = [];
  const skip = new Set(['.git', 'node_modules', 'out', '.next', 'public', 'automation/logs']);
  function recur(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (skip.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        recur(full);
      } else if (entry.isFile() && predicate(full)) {
        results.push(full);
      }
    }
  }
  recur(root);
  return results;
}

function detectUsedPackages(root) {
  const exts = new Set(['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']);
  const files = walkFiles(root, (f) => exts.has(path.extname(f)));
  const importRegexes = [
    /import\s+[^'"`]+\s+from\s+['"]([^'"`]+)['"]/g,
    /import\s*\(\s*['"]([^'"`]+)['"]\s*\)/g,
    /require\(\s*['"]([^'"`]+)['"]\s*\)/g,
  ];
  const used = new Set();
  for (const file of files) {
    let src = '';
    try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }
    for (const rx of importRegexes) {
      let m;
      while ((m = rx.exec(src)) !== null) {
        const spec = m[1];
        if (!spec || spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('node:')) continue;
        const pkg = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];
        used.add(pkg);
      }
    }
  }
  return used;
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const pkgJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const deps = Object.keys(pkgJson.dependencies || {});
  const devDeps = Object.keys(pkgJson.devDependencies || {});

  let result = await tryDepcheck(root);
  if (!result) {
    const used = detectUsedPackages(root);
    const allDeclared = new Set([...deps, ...devDeps]);
    const unusedDependencies = deps.filter((d) => !used.has(d));
    const unusedDevDependencies = devDeps.filter((d) => !used.has(d));
    const missing = {};
    for (const u of used) {
      if (!allDeclared.has(u)) {
        missing[u] = ['<static-scan>'];
      }
    }
    result = {
      dependencies: unusedDependencies,
      devDependencies: unusedDevDependencies,
      missing,
    };
  }

  ensureDir(OUT_DIR);
  const payload = { generatedAt: new Date().toISOString(), ...result };
  fs.writeFileSync(path.join(OUT_DIR, 'unused.json'), JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(result));
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});