const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

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

  // Ensure repo info
  process.env.GIT_BRANCH = process.env.GIT_BRANCH || 'main';

  // Run deps auto-upgrade
  logStep('deps:auto-upgrade', () => runNode('automation/deps-auto-upgrade.cjs'));

  // Sync key files back to GitHub
  const filesToSync = [
    'package.json',
    'package-lock.json',
    'automation/logs/deps-auto-upgrade.json'
  ];

  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs', filesToSync));

  return { statusCode: 200, body: logs.join('\n') };
};