exports.config = { schedule: '*/2 * * * *' };

exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const buildHook = process.env.NETLIFY_BUILD_HOOK_URL || process.env.BUILD_HOOK_URL || '';
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || process.env.GITHUB_REPOSITORY || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 12000;
  const concurrency = 12;

  function listFunctions() {
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) return manifest.functions;
    } catch {}
    return [];
  }

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
      return { name, status: 0, ok: false, error: err?.message || String(err) };
    }
  }

  async function invokeAll(functionNames) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < functionNames.length) {
        const current = functionNames[index++];
        if (!current || current === 'cloud-trigger-hub' || current === 'trigger-all-and-commit') continue;
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  async function commitStamp() {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN provided' };
    const path = 'automation/cloud-trigger-stamp.txt';
    const content = Buffer.from(`Triggered at ${new Date().toISOString()}\n`).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-cloud-trigger-hub'
    };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}
    const body = { message: `chore(cloud): cloud-trigger-hub run ${new Date().toISOString()}`, content, branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok;
    const status = putRes.status;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status, error };
  }

  try {
    const names = listFunctions();
    const results = await invokeAll(names);
    let buildResult = { method: 'none' };
    if (buildHook) {
      try {
        const res = await fetch(buildHook, { method: 'POST' });
        buildResult = { method: 'build_hook', ok: res.ok, status: res.status };
      } catch (err) {
        buildResult = { method: 'build_hook', ok: false, status: 0, error: err?.message || String(err) };
      }
    } else if (githubToken) {
      buildResult = { method: 'github_commit', ...(await commitStamp()) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        totals: { attempted: names.length, ok: results.filter(r => r.ok).length, failed: results.filter(r => !r.ok).length },
        results,
        buildResult
      })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};