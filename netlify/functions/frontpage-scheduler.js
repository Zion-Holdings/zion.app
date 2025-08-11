const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
};

exports.handler = async () => {
  const logs = [];
  const steps = [
    ['frontpage-advertiser', () => runNode('automation/frontpage-advertiser.cjs')],
    ['homepage-updater', () => runNode('automation/homepage-updater.cjs')],
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