// Netlify Scheduled Function: Link & Health Scheduler
// Replaces GH Actions for link integrity, health scans, and sitemap generation.

const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */4 * * *', // every 4 hours
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

  logStep('sitemap', () => runNode('scripts/generate-sitemap.js'));
  logStep('site-health', () => runNode('automation/auto-health-monitor/index.mjs'));
  logStep('links:scan', () => runNode('automation/site-link-crawler.cjs'));
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};