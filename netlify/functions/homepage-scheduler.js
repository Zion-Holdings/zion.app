const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

exports.config = {
  // Every 3 hours
  schedule: '0 */3 * * *',
};

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

  // Ensure canonical URL available to scripts
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  // Homepage improvement automations
  logStep('homepage-updater:once', () => runNode('automation/homepage-updater.cjs', ['once']));
  logStep('homepage-auto-advertiser:once', () => runNode('automation/homepage-auto-advertiser.cjs', ['once']));

  // Index docs/pages for improved internal linking
  logStep('docs-pages-indexer:once', () => runNode('automation/docs-pages-indexer.cjs', ['once']));

  return { statusCode: 200, body: logs.join('\n') };
};