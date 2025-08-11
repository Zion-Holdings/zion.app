const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8', env: process.env });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.handler = async () => {
  const logs = [];
  function step(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status === 0;
  }

  // Ensure canonical URL available if referenced by scripts
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || (process.env.SITE_URL || process.env.URL || '');

  step('front:futurize', () => runNode('automation/front-futurizer.cjs'));
  step('front:auto-advertiser', () => runNode('automation/front-index-auto-advertiser.cjs'));
  step('home:visionary', () => runNode('automation/home-index-visionary.cjs'));
  step('homepage:update', () => runNode('automation/homepage-updater.cjs'));
  step('front:directory', () => runNode('automation/front-index-directory-builder.cjs'));

  // Commit and push any changes
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: logs.join('\n')
  };
};