const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

exports.config = { schedule: '*/30 * * * *' };

exports.handler = async () => {
  const logs = [];
  const csvPath = path.resolve(__dirname, '..', '..', 'link_report.csv');
  const outDir = path.resolve(__dirname, '..', '..', 'data', 'reports');
  const outPath = path.join(outDir, '404-map.json');
  fs.mkdirSync(outDir, { recursive: true });

  let rows = [];
  try {
    const csv = fs.readFileSync(csvPath, 'utf8');
    rows = csv.split(/\r?\n/).slice(1).map(line => line.split(','));
  } catch {
    logs.push('link_report.csv not found or unreadable; generating empty map');
  }

  const errors = [];
  for (const cols of rows) {
    if (!cols || cols.length < 3) continue;
    const [source, url, status] = cols;
    const code = parseInt(status, 10);
    if (!isNaN(code) && code >= 400) {
      errors.push({ source, url, status: code });
    }
  }

  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), errors }, null, 2));
  logs.push(`wrote ${outPath} (${errors.length} broken links)`);

  const git = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation/advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  logs.push(git.stdout || '');
  logs.push(git.stderr || '');
  logs.push('git exit=' + (git.status || 0));

  return { statusCode: 200, body: logs.join('\n') };
};