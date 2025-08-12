const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function countFiles(dir, exts) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let count = 0;
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) count += countFiles(p, exts);
      else if (!exts || exts.some(ext => e.name.endsWith(ext))) count++;
    }
    return count;
  } catch (_) {
    return 0;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/10 * * * *',
};

exports.handler = async () => {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const now = new Date().toISOString();

  const stats = {
    generatedAt: now,
    components: countFiles(path.join(repoRoot, 'components'), ['.tsx', '.ts', '.jsx', '.js']),
    pages: countFiles(path.join(repoRoot, 'pages'), ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md']),
    docs: countFiles(path.join(repoRoot, 'docs'), ['.md', '.mdx']),
    publicAssets: countFiles(path.join(repoRoot, 'public'), undefined),
  };

  const pack = {
    meta: { generatedAt: now, repo: 'zion.app' },
    stats,
    links: [
      { title: 'Automation Hub', href: '/automation' },
      { title: 'Site Health', href: '/site-health' },
      { title: 'Newsroom', href: '/newsroom' }
    ]
  };

  const outFile = path.join(repoRoot, 'public', 'knowledge-pack.json');
  writeJson(outFile, pack);

  const sync = runNode('automation/advanced-git-sync.cjs');
  const logs = [];
  if (sync.stdout) logs.push(sync.stdout);
  if (sync.stderr) logs.push(sync.stderr);
  logs.push(`git-sync exit=${sync.status}`);

  return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ok: true, generatedAt: now, stats }) };
};