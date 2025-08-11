// Netlify Scheduled Function: Marketing & Features Promo
// Periodically generates or refreshes homepage promotions and deep links.

const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/15 * * * *', // every 15 minutes
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    const { status, stdout, stderr } = fn();
    logs.push(`\n=== ${name} exit=${status} ===`);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    return status;
  }

  logStep('homepage-promo:analyze', () => runNode('automation/homepage-promo-analyzer.cjs'));
  logStep('homepage-promo:factory', () => runNode('automation/homepage-promo-factory.cjs'));
  logStep('homepage-promo:apply', () => runNode('automation/homepage-promo-applier.cjs'));
  logStep('links:scan', () => runNode('automation/site-link-crawler.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};