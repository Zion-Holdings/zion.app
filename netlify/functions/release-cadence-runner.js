const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}

exports.handler = async () => {
  const logs = [];
  const steps = [
    ['release:cadence', () => runNode('automation/release-cadence-recommender.cjs')],
    ['git:sync', () => runNode('automation/advanced-git-sync.cjs')],
  ];
  for (const [name, fn] of steps) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
  }
  return { statusCode: 200, body: logs.join('\n') };
};