const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/5 * * * *',
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

  // Front index and homepage content refreshers
  logStep('front-index:auto-advertise', () => runNode('automation/front-index-auto-advertiser.cjs'));
  logStep('homepage:updater', () => runNode('automation/homepage-updater.cjs'));
  logStep('homepage:auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));
  // Futuristic UI enhancer for front systems
  logStep('front:futurizer', () => runNode('automation/front-futurizer.cjs'));
  // Keep sitemap fresh
  logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs'));

  // Push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};