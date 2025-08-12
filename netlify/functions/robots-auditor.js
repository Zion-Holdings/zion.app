const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '15 */6 * * *' };

exports.handler = async () => {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const robotsPath = path.join(repoRoot, 'public', 'robots.txt');
  let exists = false;
  let hasSitemap = false;
  try {
    const content = fs.readFileSync(robotsPath, 'utf8');
    exists = true;
    hasSitemap = /sitemap\s*:/i.test(content);
  } catch { /* ignore */ }

  const report = { generatedAt: new Date().toISOString(), exists, hasSitemap };
  const outDir = path.join(repoRoot, 'public', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'robots-audit.json'), JSON.stringify(report, null, 2));

  runNode('automation/advanced-git-sync.cjs');
  return { statusCode: 200, body: JSON.stringify(report) };
};