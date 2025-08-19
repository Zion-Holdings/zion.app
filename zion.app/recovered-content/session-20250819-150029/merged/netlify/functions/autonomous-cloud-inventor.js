exports.config = {
  schedule: '*/2 * * * *',
};

exports.handler = async () => {
  const path = require('path');
  const { spawnSync } = require('child_process');

  function runNode(relPath, args = []) {
    const abs = path.resolve(__dirname, '..', '..', relPath);
    const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
  }

  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Lightweight continuous innovation loop
  logStep('auto-discovery:runner', () => runNode('automation/auto-discovery-runner.cjs'));
  logStep('cloud:orchestrator', () => runNode('automation/cloud-autonomous-orchestrator.cjs'));

  // Front and Home refreshers
  logStep('front-index:auto-advertise', () => runNode('automation/front-index-auto-advertiser.cjs'));
  logStep('home:visionary', () => runNode('automation/home-index-visionary.cjs'));
  logStep('homepage:updater', () => runNode('automation/homepage-updater.cjs'));

  // Keep sitemap and docs fresh (best effort)
  try { logStep('docs:indexer', () => runNode('automation/docs-pages-indexer.cjs')); } catch {}
  try { logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs')); } catch {}

  // Push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};