exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[cron-supervisor] ${msg}`); }

  async function invoke(name) {
    if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
    try {
      const res = await fetch(`${baseUrl}/.netlify/functions/${name}`);
      return { name, status: res.status, ok: res.ok };
    } catch (err) {
      log(`invoke error for ${name}: ${String(err && err.message || err)}`);
      return { name, status: 0, ok: false, error: String(err && err.message || err) };
    }
  }

  async function commit(path, content) {
    if (!githubToken) return { ok: false };
    const headers = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-cron-supervisor' };
    let sha = undefined;
    try {
      const r = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (r.ok) { const j = await r.json(); sha = j.sha; }
    } catch (err) {
      log(`get sha error: ${String(err && err.message || err)}`);
    }
    const body = { message: `chore: cron supervisor pulse (${new Date().toISOString()})`, content: Buffer.from(content).toString('base64'), branch: githubBranch, sha };
    const put = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    return { ok: put.ok, status: put.status };
  }

  try {
    const critical = [ 'ultrafast-orchestrator','fast-orchestrator','continuous-front-runner','front-maximizer','front-enhancer','homepage_advertiser' ];
    const periodic = [ 'sitemap_runner','seo-audit-runner','docs-index-runner' ];
    const results = [];

    for (const n of critical) results.push(await invoke(n));
    if (new Date().getUTCMinutes() % 10 === 0) {
      for (const n of periodic) results.push(await invoke(n));
    }

    const ok = results.filter(r => r.ok).length;
    const failed = results.length - ok;

    await commit('automation/cron-supervisor.txt', `ok=${ok} failed=${failed} at ${new Date().toISOString()}\n`);

    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ triggeredAt: new Date().toISOString(), baseUrl, results }) };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};