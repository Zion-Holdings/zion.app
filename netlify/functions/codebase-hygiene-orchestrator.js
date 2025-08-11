const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */4 * * *', // every 4 hours
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

  step('todo-scanner', () => runNode('automation/todo-scanner.cjs'));
  step('dead-code-scanner', () => runNode('automation/dead-code-scanner.cjs'));
  step('security-audit', () => runNode('automation/security-audit.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};