exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 15000;
  const concurrency = 10;

  function log(msg) { console.log(`[cron-hub] ${msg}`); }

  function minute() { return new Date().getUTCMinutes(); }

  async function listFunctions() {
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) return manifest.functions;
    } catch (err) {
      log(`manifest parse error: ${String(err && err.message || err)}`);
    }
    return [
      'ultrafast-orchestrator','ultrafast-front-orchestrator','fast-orchestrator','front-maximizer','front-enhancer','homepage_advertiser','home-visionary-expander','front-visionary-expander','front-index-orchestrator','continuous-front-runner','hyper-front-index-accelerator','sitemap_runner','seo-audit-runner','docs-index-runner','docs-search-index-runner','ai-trends-radar-runner','deps-auto-upgrade-runner','trigger-all-and-commit'
    ];
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
      log(`invoke error for ${name}: ${String(err && err.message || err)}`);
      return { name, status: 0, ok: false, error: String(err && err.message || err) };
    }
  }

  async function invokeAll(functionNames) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < functionNames.length) {
        const current = functionNames[index++];
        if (current === 'cron-hub' || current === 'cron-heartbeat' || current === 'cron-supervisor') continue;
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  function pickIntelligentSet(allNames) {
    const set = new Set();
    const fastPreferred = [
      'ultrafast-orchestrator','ultrafast-front-orchestrator','fast-orchestrator','continuous-front-runner','front-maximizer','front-index-orchestrator','front-enhancer','homepage_advertiser','home-visionary-expander','front-visionary-expander','hyper-front-index-accelerator'
    ];
    for (const n of fastPreferred) if (allNames.includes(n)) set.add(n);
    if (minute() % 5 === 0) {
      ['sitemap_runner','seo-audit-runner','docs-index-runner','docs-search-index-runner','ai-trends-radar-runner','deps-auto-upgrade-runner'].forEach(n => { if (allNames.includes(n)) set.add(n); });
      if (allNames.includes('trigger-all-and-commit')) set.add('trigger-all-and-commit');
    }
    return Array.from(set);
  }

  async function commitStamp(path, message) {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const content = Buffer.from(`${message} at ${new Date().toISOString()}\n`).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-cron-hub'
    };
    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const json = await getRes.json(); sha = json.sha; }
    } catch (err) {
      log(`get sha error: ${String(err && err.message || err)}`);
    }
    const body = { message, content, branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok; const status = putRes.status; let error;
    if (!ok) { try { error = await putRes.text(); } catch (e) { error = String(e); } }
    return { ok, status, error };
  }

  try {
    const all = await listFunctions();
    const selected = pickIntelligentSet(all);
    log(`Selected ${selected.length} functions to invoke (from ${all.length}).`);
    const invoked = await invokeAll(selected);
    const stamp = await commitStamp('automation/cron-hub-stamp.txt', 'chore: cron hub heartbeat');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        baseUrl,
        totals: {
          available: all.length,
          selected: selected.length,
          ok: invoked.filter(r => r.ok).length,
          failed: invoked.filter(r => !r.ok).length
        },
        stamp,
        results: invoked
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};