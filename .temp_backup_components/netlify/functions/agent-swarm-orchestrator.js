// netlify/functions/agent-swarm-orchestrator.js
exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const buildHook = process.env.NETLIFY_BUILD_HOOK_URL || process.env.BUILD_HOOK_URL || '';
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 15000;
  const concurrency = 12;

  function log(msg) { console.log(`[agent-swarm] ${msg}`); }

  let functionNames = [];
  try {
    const manifest = require('./functions-manifest.json');
    if (Array.isArray(manifest.functions)) functionNames = manifest.functions;
  } catch (e) {
    functionNames = [];
  }

  const preferred = [
    'front-enhancer',
    'front-index-orchestrator',
    'homepage-updater',
    'homepage_advertiser',
    'features-capabilities-benefits-advertiser',
    'hyper-front-index-accelerator',
    'continuous-orchestrator',
    'ultrafast-front-orchestrator',
    'ultrafast-orchestrator'
  ];

  const unique = new Set(preferred.concat(functionNames));
  const all = Array.from(unique).filter(name => name && name !== 'agent-swarm-orchestrator' && name !== 'trigger-all-and-commit');

  async function invoke(name) {
    if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      return { name, status: res.status, ok: res.ok };
    } catch (err) {
      clearTimeout(timeout);
      return { name, status: 0, ok: false, error: err.message };
    }
  }

  async function invokeAll(names) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < names.length) {
        const current = names[index++];
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, names.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  async function triggerBuildHook() {
    if (!buildHook) return { ok: false, status: 0, error: 'No NETLIFY_BUILD_HOOK_URL provided' };
    try {
      const res = await fetch(buildHook, { method: 'POST' });
      return { ok: res.ok, status: res.status };
    } catch (err) {
      return { ok: false, status: 0, error: err.message };
    }
  }

  async function commitStamp() {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN provided' };
    const path = 'automation/netlify-build-stamp.txt';
    const content = Buffer.from(`Agent swarm triggered at ${new Date().toISOString()}\n`).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-agent-swarm'
    };
    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}
    const body = {
      message: `chore: agent swarm heartbeat (${new Date().toISOString()})`,
      content,
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });
    const ok = putRes.ok;
    const status = putRes.status;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status, error };
  }

  try {
    const invoked = await invokeAll(all);
    let syncResult = { method: 'none' };
    if (buildHook) {
      syncResult = { method: 'build_hook', ...(await triggerBuildHook()) };
    } else if (githubToken) {
      syncResult = { method: 'github_commit', ...(await commitStamp()) };
    } else {
      syncResult = { method: 'none', ok: false, error: 'No sync method available (set NETLIFY_BUILD_HOOK_URL or GITHUB_TOKEN/GITHUB_REPO/GIT_BRANCH)' };
    }

    const okCount = invoked.filter(r => r.ok).length;
    const failCount = invoked.filter(r => !r.ok).length;
    log(`Invoked ${invoked.length} functions: ok=${okCount} failed=${failCount}`);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        totals: { attempted: all.length, ok: okCount, failed: failCount },
        syncResult,
        results: invoked
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};