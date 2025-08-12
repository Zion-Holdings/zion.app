const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

exports.config = {
  schedule: '*/1 * * * *',
};

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

  // Prioritized rapid tasks
  step('front-index:auto-advertise', 'automation/front-index-auto-advertiser.cjs');
  step('front:futurizer', 'automation/front-futurizer.cjs');
  step('homepage:updater', 'automation/homepage-updater.cjs');
  step('homepage:auto-advertiser', 'automation/homepage-auto-advertiser.cjs');
  step('sitemap:runner', 'automation/sitemap-runner.cjs');
  step('metadata:optimizer', 'automation/metadata-optimizer.cjs');

  // Sync any changes
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};