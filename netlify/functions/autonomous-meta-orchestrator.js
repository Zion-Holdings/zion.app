exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 15000;
  const maxToTrigger = 18;
  const concurrency = 8;

  function log(msg) { console.log(`[autonomous-meta] ${msg}`); }

  let allFunctions = [];
  try {
    const manifest = require('./functions-manifest.json');
    if (Array.isArray(manifest.functions)) allFunctions = manifest.functions;
  } catch (manifestError) {
    log(`Failed to load manifest: ${String(manifestError)}`);
    allFunctions = [];
  }

  const exclude = new Set([
    'autonomous-meta-orchestrator',
    'trigger-all-and-commit'
  ]);

  function isPriority(name) {
    const keywords = ['orchestrator', 'enhancer', 'promoter', 'advertiser', 'runner', 'maximizer'];
    const focus = ['front', 'home', 'index', 'readme'];
    const low = ['schedule', 'scheduler'];
    const hasKeyword = keywords.some(k => name.includes(k));
    const hasFocus = focus.some(f => name.includes(f));
    const isLow = low.some(l => name.includes(l));
    return hasKeyword && hasFocus && !isLow;
  }

  const prioritized = allFunctions
    .filter(name => !exclude.has(name))
    .filter(name => isPriority(name))
    .slice(0, maxToTrigger);

  async function invoke(name) {
    if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      return { name, status: res.status, ok: res.ok };
    } catch (invokeErr) {
      clearTimeout(timeout);
      return { name, status: 0, ok: false, error: String(invokeErr && invokeErr.message ? invokeErr.message : invokeErr) };
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

  async function commitHeartbeat() {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN provided' };
    const path = 'automation/meta-heartbeat.json';
    const payload = { triggeredAt: new Date().toISOString(), triggered: prioritized };
    const content = Buffer.from(JSON.stringify(payload, null, 2)).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'autonomous-meta-orchestrator'
    };
    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch (shaErr) {
      log(`Could not fetch existing heartbeat sha: ${String(shaErr)}`);
    }
    const body = {
      message: `chore(automation): autonomous meta heartbeat (${new Date().toISOString()}) [skip ci]`,
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
      try { error = await putRes.text(); } catch (textErr) { error = String(textErr); }
    }
    return { ok, status, error };
  }

  try {
    const results = await invokeAll(prioritized);
    const heartbeat = await commitHeartbeat();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ok: true,
        baseUrl,
        totals: { attempted: prioritized.length, ok: results.filter(r => r.ok).length, failed: results.filter(r => !r.ok).length },
        results,
        heartbeat
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};