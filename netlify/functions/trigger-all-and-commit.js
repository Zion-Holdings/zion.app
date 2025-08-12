exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const buildHook = process.env.NETLIFY_BUILD_HOOK_URL || process.env.BUILD_HOOK_URL || '';
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 15000;
  const concurrency = 10;

  function log(msg) { console.log(`[trigger-all] ${msg}`); }

  let functionNames = [];
  try {
    const manifest = require('./functions-manifest.json');
    if (Array.isArray(manifest.functions)) functionNames = manifest.functions;
  } catch (error) {
    functionNames = [];
    log(`manifest load failed: ${String(error)}`);
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
      return { name, status: 0, ok: false, error: err.message };
    }
  }

  async function invokeAll(functionNames) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < functionNames.length) {
        const current = functionNames[index++];
        if (current === 'trigger-all-and-commit') continue; // avoid recursion
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
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
    const content = Buffer.from(`Triggered at ${new Date().toISOString()}\n`).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-trigger-function'
    };
    // Get current SHA if exists
    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {
      log('No existing build stamp found; creating new file');
    }
    const body = {
      message: `chore: trigger netlify build via function (${new Date().toISOString()})`,
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
    const invoked = await invokeAll(functionNames);
    let buildResult = { method: 'none' };
    if (buildHook) {
      buildResult = { method: 'build_hook', ...(await triggerBuildHook()) };
    } else if (githubToken) {
      buildResult = { method: 'github_commit', ...(await commitStamp()) };
    } else {
      buildResult = { method: 'none', ok: false, error: 'No build method available (set NETLIFY_BUILD_HOOK_URL or GITHUB_TOKEN/GITHUB_REPO/GIT_BRANCH)' };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        baseUrl,
        totals: {
          attempted: functionNames.length,
          ok: invoked.filter(r => r.ok).length,
          failed: invoked.filter(r => !r.ok).length
        },
        buildResult,
        results: invoked
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};