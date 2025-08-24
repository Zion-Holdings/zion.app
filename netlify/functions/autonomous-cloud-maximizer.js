const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '*/2 * * * *' };

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Innovation
  step('ai-trends-radar', 'scripts/ai-trends-radar.js');
  step('llm-content-curator', 'automation/llm-content-curator.cjs');
  step('newsroom-generator', 'automation/newsroom-generator.cjs');

  // Content/UX
  step('og-image-generator', 'automation/og-image-generator.cjs');
  step('homepage-updater', 'automation/homepage-updater.cjs');
  step('front-index-advertiser', 'automation/front-index-advertiser.cjs');

  // Integrity
  step('external-link-check', 'automation/external-link-check.cjs');

  // Sync
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};