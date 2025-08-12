const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

async function invokeFunctionsFromManifest(baseUrl, excludeNames) {
  let functionsList = [];
  try {
    const manifestPath = path.resolve(__dirname, 'functions-manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (Array.isArray(manifest.functions)) functionsList = manifest.functions;
  } catch {}

  const filtered = functionsList.filter((name) => !excludeNames.has(name));
  const concurrency = 12;

  async function invoke(name) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const url = `${baseUrl}/.netlify/functions/${name}`;
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      return { name, status: res.status, ok: res.ok };
    } catch (err) {
      clearTimeout(timeout);
      return { name, status: 0, ok: false, error: String(err && err.message ? err.message : err) };
    }
  }

  const results = [];
  let index = 0;
  async function worker() {
    while (index < filtered.length) {
      const current = filtered[index++];
      results.push(await invoke(current));
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, filtered.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

exports.config = {
  schedule: '*/2 * * * *',
};

exports.handler = async () => {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const logs = [];
  const summary = { steps: [], triggers: [] };

  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    summary.steps.push({ name, status });
    return status;
  }

  // 1) Generate/refresh functions manifest (so new agents are auto-discovered)
  logStep('netlify:manifest', () => runNode('scripts/generate-netlify-functions-manifest.cjs'));

  // 2) Home/front content refreshers to advertise new capabilities
  logStep('homepage:updater', () => runNode('automation/homepage-updater.cjs'));
  logStep('front:index:directory', () => runNode('automation/front-index-directory-builder.cjs'));

  // 3) Invoke all functions (avoid recursion with self and the all-trigger)
  const exclude = new Set(['autonomous-meta-orchestrator', 'trigger-all-and-commit']);
  let triggerResults = [];
  if (baseUrl) {
    triggerResults = await invokeFunctionsFromManifest(baseUrl, exclude);
  } else {
    logs.push('No base URL available to invoke functions');
  }
  summary.triggers = triggerResults;

  // 4) Push any changes detected from steps above
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ok: true,
      triggeredAt: new Date().toISOString(),
      baseUrl,
      totals: {
        attempted: summary.triggers.length,
        ok: summary.triggers.filter((r) => r.ok).length,
        failed: summary.triggers.filter((r) => !r.ok).length,
      },
      summary,
      logs: logs.slice(-2000),
    }),
  };
};