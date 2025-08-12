exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 12000;
  const priority = [
    'front-enhancer',
    'front-index-orchestrator',
    'front-maximizer',
    'continuous-front-runner',
    'fast-front-promoter',
    'frontpage-enhancer',
    'homepage_advertiser',
    'fast-orchestrator',
    'continuous-orchestrator',
    'ultrafast-orchestrator',
    'cloud_orchestrator',
    'marketing-and-features-promo',
    'readme-advertiser',
    'docs-index-runner',
    'sitemap_runner'
  ];
  const exclude = new Set(['autonomous-cloud-brain', 'trigger-all-and-commit']);
  const concurrency = Number(process.env.CLOUD_BRAIN_CONCURRENCY || 8);

  function log(msg) { console.log(`[cloud-brain] ${msg}`); }

  function loadManifestFunctions() {
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) return manifest.functions;
    } catch (e) {}
    return [];
  }

  function buildRunList() {
    const fromManifest = loadManifestFunctions();
    const base = Array.from(new Set([...priority, ...fromManifest]));
    return base.filter((n) => !exclude.has(n));
  }

  async function invoke(name) {
    if (!baseUrl) return { name, status: 0, ok: false, ms: 0, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const start = Date.now();
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      const ms = Date.now() - start;
      return { name, status: res.status, ok: res.ok, ms };
    } catch (err) {
      clearTimeout(timeout);
      const ms = Date.now() - start;
      return { name, status: 0, ok: false, ms, error: err.message };
    }
  }

  async function invokeAll(functionNames) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < functionNames.length) {
        const current = functionNames[index++];
        if (!current || exclude.has(current)) continue;
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  async function commitStamp(summary) {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN provided' };
    const path = 'automation/cloud-brain-stamp.txt';
    const contentString = `${JSON.stringify(summary)}\n`;
    const content = Buffer.from(contentString).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-autonomous-cloud-brain'
    };
    // Get current SHA if exists
    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}
    const body = {
      message: `chore: cloud brain heartbeat (${new Date().toISOString()})`,
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
    const functions = buildRunList();
    const startAt = new Date().toISOString();
    const invoked = await invokeAll(functions);

    const totals = {
      attempted: functions.length,
      ok: invoked.filter(r => r.ok).length,
      failed: invoked.filter(r => !r.ok).length,
      medianMs: (() => {
        const arr = invoked.map(r => r.ms).filter(Boolean).sort((a,b)=>a-b);
        if (!arr.length) return 0;
        const mid = Math.floor(arr.length/2);
        return arr.length % 2 ? arr[mid] : Math.round((arr[mid-1]+arr[mid])/2);
      })()
    };

    const heartbeat = { startAt, endAt: new Date().toISOString(), baseUrl, totals };
    const commitResult = await commitStamp(heartbeat);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ heartbeat, results: invoked, commitResult })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};