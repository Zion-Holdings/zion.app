const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

function logArray(logs, title, entries) {
  logs.push(`\n=== ${title} ===`);
  for (const e of entries) logs.push(e);
}

exports.config = { schedule: '*/1 * * * *' };

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

  // 1) Discover opportunities and build plans
  logStep('auto-discovery', () => runNode('automation/auto-discovery-runner.cjs'));

  // 2) Promote and curate front/home content continuously
  logStep('front-index:auto-advertiser', () => runNode('automation/front-index-auto-advertiser.cjs'));
  logStep('homepage:updater', () => runNode('automation/homepage-updater.cjs'));
  logStep('homepage:auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));

  // 3) Enhance futuristic UI surfaces
  logStep('front:futurizer', () => runNode('automation/front-futurizer.cjs'));

  // 4) Keep navigation and discovery strong
  logStep('front:directory-builder', () => runNode('automation/front-index-directory-builder.cjs'));
  logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs'));

  // 5) Repo knowledge and reports (lightweight)
  logStep('repo:radar-metrics', () => runNode('automation/repo-radar-metrics.cjs'));

  // 6) Push any changes immediately
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  logArray(logs, 'summary', [
    'meta-orchestrator completed core steps',
    'changes (if any) have been committed and pushed',
  ]);

  return { statusCode: 200, body: logs.join('\n') };
};