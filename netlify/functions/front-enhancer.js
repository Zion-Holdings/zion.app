const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/10 * * * *', // every 10 minutes
};

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

  // Update the front page auto-generated section
  logStep('front-index:advertise', () => runNode('automation/front-index-advertiser.cjs'));

  // Attempt to sync changes back to main (best-effort)
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};