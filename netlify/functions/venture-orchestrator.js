const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/30 * * * *', // every 30 minutes
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

  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  step('venture:orchestrator', () => runNode('automation/venture-orchestrator.cjs', ['continuous']));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};