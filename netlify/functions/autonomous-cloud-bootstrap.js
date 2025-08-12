const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

exports.config = { schedule: '*/10 * * * *' };

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

  // Re-generate the Netlify functions manifest to reflect schedules and files
  logStep('netlify:functions-manifest', () => runNode('scripts/generate-netlify-functions-manifest.cjs'));

  // Optional: generate sitemap as a bootstrap task
  logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs'));

  // Push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};