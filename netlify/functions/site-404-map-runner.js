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
  const csvPath = path.join(root, 'link_report.csv');
  const rows = [];
  if (fs.existsSync(csvPath)) {
    const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/).slice(1);
    for (const line of lines) {
      if (!line.trim()) continue;
      const [source_url, link_url, final_url, status_code, ok, is_internal, error] = line.split(',');
      if (status_code === '404') rows.push({ source: source_url, target: final_url || link_url, error: error || 'Not Found' });
    }
  }
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'site-404-map.json'), JSON.stringify({ generatedAt: new Date().toISOString(), totals: rows.length, items: rows }, null, 2));
  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, git }) };
};