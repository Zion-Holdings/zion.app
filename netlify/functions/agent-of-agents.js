const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function getBaseUrl() {
  const base = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  return base || '';
}

async function invokeFunction(baseUrl, name, timeoutMs = 15000) {
  const controller = new AbortController();
  const url = `${baseUrl}/.netlify/functions/${name}`;
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    clearTimeout(t);
    return { name, ok: res.ok, status: res.status };
  } catch (e) {
    clearTimeout(t);
    return { name, ok: false, status: 0, error: String(e.message || e) };
  }
}

async function runInBatches(baseUrl, names, batchSize = 6) {
  const results = [];
  let index = 0;
  async function worker() {
    while (index < names.length) {
      const current = names[index++];
      if (current === 'agent-of-agents') continue;
      results.push(await invokeFunction(baseUrl, current));
    }
  }
  const workers = Array.from({ length: Math.min(batchSize, names.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/1 * * * *',
};

exports.handler = async () => {
  const baseUrl = getBaseUrl();
  const logs = [];

  let manifestFunctions = [];
  try {
    const manifest = require('./functions-manifest.json');
    if (Array.isArray(manifest.functions)) manifestFunctions = manifest.functions;
  } catch (_) {}

  // Prioritize ultra-fast/critical functions first
  const priority = [
    'fast-orchestrator',
    'continuous-front-runner',
    'ultrafast-front-orchestrator',
    'front-maximizer',
    'front-ads-promoter',
    'front-index-futurizer',
    'homepage-updater',
    'homepage_advertiser'
  ];

  const set = new Set(manifestFunctions);
  const prioritized = priority.filter(n => set.has(n));
  const remaining = manifestFunctions.filter(n => !prioritized.includes(n));
  const ordered = [...prioritized, ...remaining].filter(n => n !== 'trigger-all-and-commit');

  if (!baseUrl) logs.push('No base URL available; skipping HTTP invocations');
  else logs.push(`Base URL: ${baseUrl}`);

  if (baseUrl && ordered.length) {
    logs.push(`Invoking ${ordered.length} functions (batched)...`);
    const results = await runInBatches(baseUrl, ordered, 8);
    const okCount = results.filter(r => r.ok).length;
    const failCount = results.length - okCount;
    logs.push(`Invoked: ${results.length}; ok=${okCount}; failed=${failCount}`);
  }

  // Best-effort repo sync
  try {
    const sync = runNode('automation/advanced-git-sync.cjs');
    logs.push(sync.stdout || '');
    if (sync.stderr) logs.push(sync.stderr);
    logs.push(`git-sync exit=${sync.status}`);
  } catch (e) {
    logs.push(`git-sync error: ${String(e.message || e)}`);
  }

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};