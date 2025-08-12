const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function invokeFunction(name, baseUrl, timeoutMs = 12000) {
  if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
  const controller = new AbortController();
  const url = `${baseUrl}/.netlify/functions/${name}`;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    clearTimeout(timeout);
    return { name, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timeout);
    return { name, status: 0, ok: false, error: String(err?.message || err) };
  }
}

exports.config = {
  schedule: '*/1 * * * *',
};

exports.handler = async () => {
  const logs = [];
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');

  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // 1) Run ultra-fast local enhancements first
  step('front-index:auto-advertise', 'automation/front-index-auto-advertiser.cjs');
  step('front:futurizer', 'automation/front-futurizer.cjs');
  step('homepage:updater', 'automation/homepage-updater.cjs');
  step('homepage:auto-advertiser', 'automation/homepage-auto-advertiser.cjs');

  // 2) Intelligently trigger a curated set of fast cloud functions
  const curated = [
    'front-visionary-expander',
    'home-visionary-expander',
    'front-maximizer',
    'continuous-orchestrator',
    'ultrafast-front-orchestrator',
    'features-capabilities-benefits-advertiser',
    'hyper-front-index-accelerator',
    'docs-search-index-runner',
    'readme-advertiser'
  ];
  const concurrency = 8;
  const results = [];
  let idx = 0;
  async function worker() {
    while (idx < curated.length) {
      const current = curated[idx++];
      if (current === 'autonomous-meta-orchestrator') continue;
      results.push(await invokeFunction(current, baseUrl));
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, curated.length) }, () => worker()));
  logs.push(`triggered=${JSON.stringify(results)}`);

  // 3) Git sync to push visible changes fast
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};