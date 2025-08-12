const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

exports.config = { schedule: '*/30 * * * *' };

function getGitLastCommitIso(filePath) {
  const res = spawnSync('git', ['log', '-1', '--format=%cI', '--', filePath], { encoding: 'utf8' });
  if (res.status === 0) return res.stdout.trim();
  return null;
}

exports.handler = async () => {
  const logs = [];
  const pagesDir = path.resolve(__dirname, '..', '..', 'pages');
  const outDir = path.resolve(__dirname, '..', '..', 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'content-freshness.json');

  const entries = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      else if (/\.(tsx|md|mdx)$/.test(entry.name)) {
        const rel = path.relative(process.cwd(), abs);
        const iso = getGitLastCommitIso(rel);
        entries.push({ file: rel, lastCommitIso: iso });
      }
    }
  }
  walk(pagesDir);

  const now = Date.now();
  const scored = entries.map(e => {
    const ts = e.lastCommitIso ? Date.parse(e.lastCommitIso) : 0;
    const days = ts ? Math.round((now - ts) / (1000*60*60*24)) : null;
    let freshness = 'unknown';
    if (days != null) {
      if (days <= 7) freshness = 'fresh';
      else if (days <= 30) freshness = 'recent';
      else if (days <= 90) freshness = 'stale';
      else freshness = 'very-stale';
    }
    return { ...e, ageDays: days, freshness };
  });

  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), scored }, null, 2));
  logs.push(`wrote ${outPath} (${scored.length} files)`);

  const git = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation/advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  logs.push(git.stdout || '');
  logs.push(git.stderr || '');
  logs.push('git exit=' + (git.status || 0));

  return { statusCode: 200, body: logs.join('\n') };
};