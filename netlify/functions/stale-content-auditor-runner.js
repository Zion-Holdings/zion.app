const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  const logs = [];
  const dataDir = path.resolve(__dirname, '..', '..', 'data', 'reports');
  const freshnessPath = path.join(dataDir, 'content-freshness.json');
  const outPath = path.join(dataDir, 'stale-content-report.json');
  try { fs.mkdirSync(dataDir, { recursive: true }); } catch {}

  let scored = [];
  try {
    const json = JSON.parse(fs.readFileSync(freshnessPath, 'utf8'));
    scored = json.scored || [];
  } catch {
    logs.push('No content-freshness.json; invoking content-freshness-score-runner first');
    const run = spawnSync('node', [path.resolve(__dirname, 'content-freshness-score-runner.js')], { stdio: 'pipe', encoding: 'utf8' });
    logs.push(run.stdout || '');
    logs.push(run.stderr || '');
  }

  const stale = scored.filter(e => e.freshness === 'stale' || e.freshness === 'very-stale');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), total: stale.length, items: stale }, null, 2));
  logs.push(`wrote ${outPath} (${stale.length} stale files)`);

  const git = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation/advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  logs.push(git.stdout || '');
  logs.push(git.stderr || '');
  logs.push('git exit=' + (git.status || 0));

  return { statusCode: 200, body: logs.join('\n') };
};