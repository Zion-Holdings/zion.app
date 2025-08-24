const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
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

  process.env.STALE_THRESHOLD_DAYS = process.env.STALE_THRESHOLD_DAYS || '30';
  logStep('audit:stale-content', () => runNode('automation/stale-content-auditor.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs', ['public/automation/stale-content.json']))

  return { statusCode: 200, body: logs.join('\n') };
};
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
