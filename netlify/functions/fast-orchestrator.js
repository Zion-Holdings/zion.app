const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/1 * * * *',
};

exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  };

  step('front-index:auto-advertiser', () => runNode('automation/front-index-auto-advertiser.cjs'));
  step('front:futurizer', () => runNode('automation/front-futurizer.cjs'));
  step('homepage:auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));
  step('homepage:updater', () => runNode('automation/homepage-updater.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};