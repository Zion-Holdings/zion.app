const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/30 * * * *', // every 30 minutes
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

  // Home enhancements
  logStep('homepage:auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));
  logStep('homepage:updater', () => runNode('automation/homepage-updater.cjs'));

  // Site links
  logStep('links:internal-crawl', () => runNode('automation/site-link-crawler.cjs'));
  logStep('links:internal-fix', () => runNode('automation/site-link-fixer.cjs'));

  // External links scan
  try { logStep('links:external-check', () => runNode('automation/external-link-check.cjs')); } catch { logs.push('links:external-check failed'); }

  // Artifacts
  try { logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs')); } catch { logs.push('sitemap:runner failed'); }

  // Commit and push
  logStep('git:sync', () => runNode('automation/git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};