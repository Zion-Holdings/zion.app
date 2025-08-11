const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/5 * * * *', // every 5 minutes
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

  logStep('links:crawl', () => run('automation/site-link-crawler.cjs'));
  logStep('links:external-check', () => run('automation/external-link-check.cjs'));
  logStep('images:optimize', () => run('automation/image-optimizer.cjs'));
  logStep('images:broken-scan', () => run('automation/broken-image-scanner.cjs'));
  logStep('sitemap:update', () => run('automation/sitemap-runner.cjs'));
  logStep('homepage:update', () => run('automation/homepage-updater.cjs'));

  logStep('git:sync', () => run('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'Content-Type': 'text/plain' }, body: logs.join('\n') };
};