exports.config = { schedule: '*/30 * * * *' };

exports.handler = async () => {
  const { spawnSync } = require('child_process');
  const path = require('path');

  function runNode(relPath, args = []) {
    const abs = path.resolve(__dirname, '..', '..', relPath);
    const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
  }

  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  logStep('assets:scan', () => runNode('automation/asset-size-guardian.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};