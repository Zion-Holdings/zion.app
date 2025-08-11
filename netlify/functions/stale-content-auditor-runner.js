const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function daysAgoToMs(days) {
  return days * 24 * 60 * 60 * 1000;
}

function listFilesRecursive(dir, exts) {
  const results = [];
  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else {
        if (!exts || exts.includes(path.extname(e.name))) results.push(full);
      }
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return results;
}

function relativeFromRoot(p) {
  return path.relative(path.resolve(__dirname, '..', '..'), p);
}

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  const root = path.resolve(__dirname, '..', '..');
  const now = Date.now();
  const thresholdDays = parseInt(process.env.STALE_DAYS || '90', 10);
  const thresholdMs = daysAgoToMs(thresholdDays);
  const targets = [
    path.join(root, 'pages'),
    path.join(root, 'components'),
    path.join(root, 'docs')
  ];
  const considerExts = new Set(['.tsx', '.ts', '.js', '.jsx', '.md', '.mdx']);

  const entries = [];
  for (const dir of targets) {
    const files = listFilesRecursive(dir, null);
    for (const f of files) {
      const ext = path.extname(f);
      if (!considerExts.has(ext)) continue;
      try {
        const st = fs.statSync(f);
        const ageMs = now - st.mtimeMs;
        const isStale = ageMs >= thresholdMs;
        entries.push({
          path: relativeFromRoot(f),
          size: st.size,
          mtime: new Date(st.mtimeMs).toISOString(),
          ageDays: Math.floor(ageMs / (24*60*60*1000)),
          stale: isStale
        });
      } catch {}
    }
  }

  entries.sort((a,b) => b.ageDays - a.ageDays);
  const staleOnly = entries.filter(e => e.stale);

  const outDir = path.join(root, 'public', 'reports', 'content');
  fs.mkdirSync(outDir, { recursive: true });
  const jsonPath = path.join(outDir, 'stale-content.json');
  const mdPath = path.join(outDir, 'stale-content.md');

  fs.writeFileSync(jsonPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    thresholdDays,
    totals: { scanned: entries.length, stale: staleOnly.length },
    items: entries
  }, null, 2));

  const topList = staleOnly.slice(0, 100).map(e => `- ${e.path} — ${e.ageDays}d (mt:${e.mtime})`).join('\n');
  const md = `# Stale Content Report\n\nGenerated: ${new Date().toISOString()}\n\nThreshold: ${thresholdDays} days\n\nScanned: ${entries.length}\nStale: ${staleOnly.length}\n\n## Top Stale Files\n\n${topList || 'None'}\n`;
  fs.writeFileSync(mdPath, md);

  // Try to sync via advanced git sync
  const sync = runNode('automation/advanced-git-sync.cjs');
  const logs = [];
  if (sync.stdout) logs.push(sync.stdout);
  if (sync.stderr) logs.push(sync.stderr);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true, generated: { json: relativeFromRoot(jsonPath), md: relativeFromRoot(mdPath) }, totals: { scanned: entries.length, stale: staleOnly.length } })
  };
};