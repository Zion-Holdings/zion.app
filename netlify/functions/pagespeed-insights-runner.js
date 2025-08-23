const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8', env: process.env });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = { schedule: '11 */6 * * *' };

exports.handler = async () => {
  const logs = [];
  const logStep = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  };

  process.env.SITE_BASE_URL = process.env.SITE_BASE_URL || process.env.URL || process.env.NETLIFY_BASE_URL || '';
  logStep('pagespeed:report', () => runNode('automation/pagespeed-insights-runner.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
