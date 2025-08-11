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

  // Keep landing pages fresh
  logStep('homepage-updater', () => runNode('automation/homepage-updater.cjs'));
  logStep('homepage-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));
  logStep('front-page-updater', () => runNode('automation/front-page-updater.cjs'));

  // Optionally touch search index/sitemap
  logStep('search:index', () => runNode('scripts/generate-search-index.js'));
  logStep('sitemap', () => runNode('scripts/generate-sitemap.js'));

  return { statusCode: 200, body: logs.join('\n') };
};