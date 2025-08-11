const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function listFilesRecursive(rootDir) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.name.startsWith('.')) continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else {
        results.push(full);
      }
    }
  }
  walk(rootDir);
  return results;
}

function buildDocsFreshness(workspaceRoot) {
  const docsDir = path.join(workspaceRoot, 'docs');
  const files = listFilesRecursive(docsDir).filter((f) => /\.(md|mdx|mdoc|txt)$/i.test(f));
  const now = Date.now();
  const items = files.map((f) => {
    let stat;
    try { stat = fs.statSync(f); } catch { stat = undefined; }
    const mtime = stat ? stat.mtimeMs : 0;
    const ageDays = stat ? Math.max(0, Math.round((now - mtime) / (1000 * 60 * 60 * 24))) : null;
    const size = stat ? stat.size : 0;
    const rel = path.relative(workspaceRoot, f);
    const stale = typeof ageDays === 'number' ? ageDays > 30 : true;
    const freshnessScore = typeof ageDays === 'number' ? Math.max(0, 100 - Math.min(100, ageDays)) : 0;
    return { path: rel, size, mtimeIso: stat ? new Date(mtime).toISOString() : null, ageDays, stale, freshnessScore };
  });

  items.sort((a, b) => (a.ageDays ?? 1e9) - (b.ageDays ?? 1e9));
  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: items.length,
    staleCount: items.filter(i => i.stale).length,
    freshCount: items.filter(i => !i.stale).length,
    top10MostRecent: items.slice(0, 10),
    items,
  };

  const outDir = path.join(workspaceRoot, 'public', 'automation');
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}
  const outPath = path.join(outDir, 'docs-freshness.json');
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
  return { outPath, summary };
}

exports.config = {
  schedule: '*/30 * * * *',
};

exports.handler = async function handler() {
  try {
    const workspaceRoot = path.resolve(__dirname, '..', '..');
    const { outPath, summary } = buildDocsFreshness(workspaceRoot);

    // Attempt to push any changes
    const gitRes = runNode('automation/advanced-git-sync.cjs');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, outPath: path.relative(workspaceRoot, outPath), summary, git: { exit: gitRes.status } })
    };
  } catch (e) {
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};