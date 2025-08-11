const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/20 * * * *',
};

exports.handler = async () => {
  const chunks = [];
  function step(name, rel, args = []) {
    chunks.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) chunks.push(stdout);
    if (stderr) chunks.push(stderr);
    chunks.push(`exit=${status}`);
    return status;
  }

  step('link-sentinel-aggregate', 'automation/link-sentinel-aggregator.cjs');
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: chunks.join('\n') };
};