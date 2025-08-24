const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8', env: process.env });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function hit(url) {
  try {
    const res = await fetch(url);
    return `${url} -> ${res.status}`;
  } catch (e) {
    return `${url} -> error: ${e.message}`;
  }
}

exports.handler = async () => {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const logs = [];

  if (baseUrl) {
    logs.push('Refreshing AI trends radar...');
    logs.push(await hit(`${baseUrl}/.netlify/functions/ai-trends-radar-runner`));
  }

  function step(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status === 0;
  }

  step('front:auto-advertiser', () => runNode('automation/front-index-auto-advertiser.cjs'));
  step('home:visionary', () => runNode('automation/home-index-visionary.cjs'));
  step('homepage:update', () => runNode('automation/homepage-updater.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'Content-Type': 'text/plain' }, body: logs.join('\n') };
};