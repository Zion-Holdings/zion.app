exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 8000;
  const concurrency = Number(process.env.HEALTH_MONITOR_CONCURRENCY || 10);

  function loadManifestFunctions() {
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) return manifest.functions;
    } catch (e) {}
    return [];
  }

  function log(msg) { console.log(`[fn-health] ${msg}`); }

  async function ping(name) {
    if (!baseUrl) return { name, status: 0, ok: false, ms: 0, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const start = Date.now();
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'HEAD', signal: controller.signal });
      clearTimeout(timeout);
      return { name, status: res.status, ok: res.ok, ms: Date.now() - start };
    } catch (err) {
      clearTimeout(timeout);
      return { name, status: 0, ok: false, ms: Date.now() - start, error: err.message };
    }
  }

  async function pingAll(functionNames) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < functionNames.length) {
        const current = functionNames[index++];
        if (!current) continue;
        results.push(await ping(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  async function commitReport(report) {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN provided' };
    const path = 'public/reports/function-health.json';
    const contentString = JSON.stringify(report, null, 2) + '\n';
    const content = Buffer.from(contentString).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-function-health-monitor'
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
      message: `chore: update function health report (${new Date().toISOString()})`,
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
    const functions = loadManifestFunctions().filter((n) => n && n !== 'function-health-monitor');
    const checkedAt = new Date().toISOString();
    const results = await pingAll(functions);
    const summary = {
      checkedAt,
      totals: {
        total: functions.length,
        ok: results.filter(r => r.ok).length,
        failed: results.filter(r => !r.ok).length,
        medianMs: (() => {
          const arr = results.map(r => r.ms).filter(Boolean).sort((a,b)=>a-b);
          if (!arr.length) return 0;
          const mid = Math.floor(arr.length/2);
          return arr.length % 2 ? arr[mid] : Math.round((arr[mid-1]+arr[mid])/2);
        })()
      }
    };
    const report = { summary, results };
    const commitResult = await commitReport(report);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ report, commitResult }) };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};