const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '*/1 * * * *' };

exports.handler = async () => {
  const { status, stdout, stderr } = runNode('automation/advanced-git-sync.cjs');
  const body = ['=== git:sync ===', stdout || '', stderr || '', `exit=${status}`].join('\n');
  return { statusCode: 200, body };
};