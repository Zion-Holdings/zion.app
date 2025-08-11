const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8', env: { ...process.env } });
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

  // Ensure repository env for the cleanup script
  if (!process.env.GITHUB_REPOSITORY) {
    process.env.GITHUB_REPOSITORY = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  }

  logStep('branch-cleanup:run', () => runNode('automation/branch-cleanup.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};