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

function collect(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...collect(p));
    else if (/\.(tsx|jsx|md|mdx|ts|js)$/i.test(e.name)) files.push(p);
  }
  return files;
}

exports.handler = async () => {
  const root = process.cwd();
  const thresholdDays = parseInt(process.env.STALE_DAYS || '90', 10);
  const now = Date.now();
  const targets = [path.join(root, 'pages'), path.join(root, 'components')];
  const stale = [];
  for (const dir of targets) {
    for (const file of collect(dir)) {
      const stat = fs.statSync(file);
      const ageDays = (now - stat.mtimeMs) / (1000 * 60 * 60 * 24);
      if (ageDays > thresholdDays) stale.push({ file: path.relative(root, file), ageDays: Number(ageDays.toFixed(1)) });
    }
  }
  stale.sort((a, b) => b.ageDays - a.ageDays);
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'stale-content.json'), JSON.stringify({ generatedAt: new Date().toISOString(), thresholdDays, items: stale }, null, 2));
  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, total: stale.length, git }) };
};