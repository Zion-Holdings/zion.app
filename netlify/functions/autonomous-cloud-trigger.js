const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

async function invokeFunction(baseUrl, name, timeoutMs = 15000) {
  const controller = new AbortController();
  const url = `${baseUrl}/.netlify/functions/${name}`;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    clearTimeout(timeout);
    return { name, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timeout);
    return { name, status: 0, ok: false, error: String(err && err.message ? err.message : err) };
  }
}

async function invokeAll(baseUrl, names, concurrency = 8) {
  const results = [];
  let index = 0;
  async function worker() {
    while (index < names.length) {
      const current = names[index++];
      results.push(await invokeFunction(baseUrl, current));
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, names.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

exports.config = {
  schedule: '*/2 * * * *',
};

exports.handler = async () => {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  if (!baseUrl) {
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: false, error: 'No base URL in env', triggeredAt: new Date().toISOString() }) };
  }

  // Curated, high-signal functions to trigger frequently (avoid recursion/heavy jobs)
  const prioritized = [
    'front-enhancer',
    'front-index-futurizer',
    'front-maximizer',
    'continuous-front-runner',
    'continuous-orchestrator',
    'fast-front-promoter',
    'frontpage-enhancer',
    'homepage-updater',
    'homepage_advertiser',
    'features-capabilities-benefits-advertiser',
    'hyper-front-index-accelerator',
    'readme-advertiser',
    'docs-index-runner',
    'ai-changelog-runner',
    'repo-knowledge-graph-runner',
    'topics-map-runner',
    'topic-cluster-builder-runner',
    'auto-discovery-runner',
  ];

  const start = Date.now();
  const results = await invokeAll(baseUrl, prioritized);

  // Sync any changes back to the repo
  const syncResult = runNode('automation/advanced-git-sync.cjs');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      triggeredAt: new Date().toISOString(),
      durationMs: Date.now() - start,
      totals: {
        attempted: prioritized.length,
        ok: results.filter(r => r.ok).length,
        failed: results.filter(r => !r.ok).length,
      },
      results,
      sync: {
        exit: syncResult.status,
        stdout: syncResult.stdout?.slice(-4000) || '',
        stderr: syncResult.stderr?.slice(-4000) || '',
      },
    })
  };
};