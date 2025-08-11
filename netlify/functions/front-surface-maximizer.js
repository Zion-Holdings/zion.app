const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/5 * * * *', // every 5 minutes
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // High-frequency front surface refresh
  logStep('front:index:directory', () => runNode('automation/front-index-directory-builder.cjs'));
  logStep('front:visionary:home', () => runNode('automation/home-index-visionary.cjs'));
  logStep('front:auto-advertiser', () => runNode('automation/front-index-auto-advertiser.cjs'));
  logStep('front:homepage:update', () => runNode('automation/homepage-updater.cjs'));

  // Commit and push updated front artifacts
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};