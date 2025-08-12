const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

function nowMinute() {
  try { return new Date().getMinutes(); } catch { return 0; }
}

function shouldRunEvery(n) {
  return nowMinute() % n === 0;
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

  // Always: light front/home refreshers
  logStep('front-index:auto-advertise', () => runNode('automation/front-index-auto-advertiser.cjs'));
  logStep('homepage:auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));

  // Periodic: sitemap and metadata
  if (shouldRunEvery(5)) {
    logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs'));
  }
  if (shouldRunEvery(15)) {
    logStep('metadata:optimizer', () => runNode('automation/metadata-optimizer.cjs'));
  }

  // Occasional: discovery and reports
  if (shouldRunEvery(10)) {
    logStep('auto-discovery', () => runNode('automation/auto-discovery-runner.cjs'));
  }

  // UI futurizer at lower cadence to keep builds light
  if (shouldRunEvery(20)) {
    logStep('front:futurizer', () => runNode('automation/front-futurizer.cjs'));
  }

  // Push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};