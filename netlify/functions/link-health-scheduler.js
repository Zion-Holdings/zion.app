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
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  logStep('sitemap:run', () => runNode('automation/sitemap-runner.cjs'));
  logStep('links:crawl', () => runNode('automation/site-link-crawler.cjs'));
  logStep('links:fix', () => runNode('automation/site-link-fixer.cjs'));
  logStep('external-link:check', () => runNode('automation/external-link-check.cjs'));
  logStep('homepage:update', () => runNode('automation/homepage-updater.cjs'));
  logStep('homepage:advertise', () => runNode('automation/homepage-auto-advertiser.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};