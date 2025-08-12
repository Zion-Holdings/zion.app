exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const buildHook = process.env.NETLIFY_BUILD_HOOK_URL || process.env.BUILD_HOOK_URL || '';
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 15000;
  const maxConcurrency = 12;

  function log(msg) { console.log(`[cloud-conductor] ${msg}`); }

  // Load manifest functions
  let manifestFunctions = [];
  try {
    const manifest = require('./functions-manifest.json');
    if (Array.isArray(manifest.functions)) manifestFunctions = manifest.functions;
  } catch {
    manifestFunctions = [];
  }

  // Prioritized order for fastest site impact first
  const priority = [
    'ultrafast-orchestrator',
    'fast-orchestrator',
    'continuous-orchestrator',
    'ultrafast-front-orchestrator',
    'front-index-orchestrator',
    'front-visionary-expander',
    'home-visionary-expander',
    'front-maximizer',
    'front-enhancer',
    'frontpage-enhancer',
    'homepage_advertiser',
    'marketing-and-features-promo',
    'link-and-health-scheduler',
    'sitemap_runner',
  ];

  // Build the execution plan
  const unique = new Set();
  function pushUnique(arr, name) { if (name && !unique.has(name)) { unique.add(name); arr.push(name); } }

  const plan = [];
  // 1) Priority set
  for (const name of priority) pushUnique(plan, name);
  // 2) Add everything else from manifest
  for (const name of manifestFunctions) pushUnique(plan, name);

  // 3) Remove self and recursion hazards
  const selfName = 'autonomous-cloud-conductor';
  const forbidden = new Set([selfName, 'trigger-all-and-commit']);
  const functionNames = plan.filter(n => !forbidden.has(n));

  async function invoke(name) {
    const startedAt = Date.now();
    if (!baseUrl) return { name, status: 0, ok: false, ms: 0, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      const ms = Date.now() - startedAt;
      return { name, status: res.status, ok: res.ok, ms };
    } catch (err) {
      clearTimeout(timeout);
      const ms = Date.now() - startedAt;
      return { name, status: 0, ok: false, ms, error: err.message };
    }
  }

  async function invokeInBatches(names) {
    // Fire priority first (already ordered), then fill remaining with bounded concurrency
    const results = [];
    let index = 0;
    async function worker() {
      while (index < names.length) {
        const current = names[index++];
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(maxConcurrency, names.length) }, () => worker());
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

  async function commitFile(path, contentText, messageSuffix) {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const content = Buffer.from(contentText, 'utf8').toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-cloud-conductor'
    };
    // get existing sha
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch (e) {
      log(`fetch sha error for ${path}: ${String(e)}`);
    }
    const body = {
      message: `chore: cloud conductor ${messageSuffix} (${new Date().toISOString()})`,
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
    const startedAt = new Date();
    const results = await invokeInBatches(functionNames);
    const totals = {
      attempted: functionNames.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
      avgMs: Math.round(results.reduce((a, r) => a + r.ms, 0) / Math.max(1, results.length))
    };

    // Prepare report
    const iso = new Date().toISOString().replace(/[:]/g, '-');
    const report = {
      conductor: selfName,
      startedAt: startedAt.toISOString(),
      finishedAt: new Date().toISOString(),
      baseUrl,
      totals,
      priority,
      functionNames,
      results
    };

    // Commit latest and timestamped reports
    const latestPath = 'data/reports/cloud-conductor/latest.json';
    const datedPath = `data/reports/cloud-conductor/report-${iso}.json`;
    let commitLatest = { ok: false }, commitDated = { ok: false };
    if (githubToken) {
      commitLatest = await commitFile(latestPath, JSON.stringify(report, null, 2), 'latest report');
      commitDated = await commitFile(datedPath, JSON.stringify(report, null, 2), 'report snapshot');
    }

    // Prefer build hook; otherwise rely on commit to trigger build
    let buildResult = { method: 'none' };
    if (buildHook) {
      buildResult = { method: 'build_hook', ...(await triggerBuildHook()) };
    } else if (githubToken) {
      // Also drop a small stamp to ensure site rebuilds even if repo ignores report paths
      await commitFile('automation/cloud-conductor-stamp.txt', `Triggered at ${new Date().toISOString()}\n`, 'stamp');
      buildResult = { method: 'github_commit', ok: commitLatest.ok || commitDated.ok };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        baseUrl,
        totals,
        buildResult,
        commit: { latest: commitLatest, dated: commitDated },
        results
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};