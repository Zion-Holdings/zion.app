const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '13 */6 * * *',
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    const { status, stdout, stderr } = fn();
    logs.push(`\n=== ${name} (exit=${status}) ===`);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    return status;
  }

  logStep('complexity:report', () => runNode('automation/complexity-report.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};