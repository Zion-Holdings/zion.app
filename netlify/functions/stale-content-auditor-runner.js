const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  const logs = [];
<<<<<<< HEAD
  function step(name, fn) {
=======
  function logStep(name, fn) {
>>>>>>> origin/automation/deploy-autonomous-cloud-automations
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

<<<<<<< HEAD
  step('stale:scan', () => runNode('automation/stale-content-auditor.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
=======
  logStep('stale-content:audit', () => runNode('automation/stale-content-auditor.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));
>>>>>>> origin/automation/deploy-autonomous-cloud-automations

  return { statusCode: 200, body: logs.join('\n') };
};