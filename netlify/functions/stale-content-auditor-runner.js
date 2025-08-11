const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '17 */6 * * *',
};

exports.handler = async () => {
  const logs = [];
  function log(line) { logs.push(line); }

  // Simple stale detector: lists files not modified in > 90 days
  const cutoffDays = Number(process.env.STALE_CUTOFF_DAYS || 90);
  const cutoffMs = cutoffDays * 24 * 60 * 60 * 1000;
  const now = Date.now();

  function listFiles(dir, acc = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.git')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) listFiles(full, acc);
      else acc.push(full);
    }
    return acc;
  }

  const roots = ['pages', 'components', 'docs'];
  const files = roots.flatMap((r) => (fs.existsSync(path.resolve(__dirname, '..', '..', r)) ? listFiles(path.resolve(__dirname, '..', '..', r)) : []));
  const stale = [];
  for (const f of files) {
    try {
      const stat = fs.statSync(f);
      const ageMs = now - stat.mtimeMs;
      if (ageMs > cutoffMs) stale.push({ path: f.replace(path.resolve(__dirname, '..', '..') + '/', ''), daysOld: Math.floor(ageMs / (24*60*60*1000)) });
    } catch {}
  }

  const reportDir = path.resolve(__dirname, '..', '..', 'public', 'automation');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, 'stale-content-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), cutoffDays, total: stale.length, stale }, null, 2));
  log(`Saved report to ${reportPath}`);

  // Optional: also run existing scanners
  runNode('automation/todo-scanner.cjs');

  // Commit and push via advanced git sync
  runNode('automation/advanced-git-sync.cjs');

  return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true, total: stale.length }) };
};