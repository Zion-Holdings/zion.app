exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[cron-heartbeat] ${msg}`); }

  async function warm(names) {
    if (!baseUrl) return [];
    const out = [];
    for (const n of names) {
      try {
        const res = await fetch(`${baseUrl}/.netlify/functions/${n}`);
        out.push({ name: n, status: res.status, ok: res.ok });
      } catch (err) {
        log(`warm error for ${n}: ${String(err && err.message || err)}`);
        out.push({ name: n, status: 0, ok: false, error: String(err && err.message || err) });
      }
    }
    return out;
  }

  async function commitStamp() {
    if (!githubToken) return { ok: false };
    const path = 'automation/cron-heartbeat.txt';
    const content = Buffer.from(`heartbeat ${new Date().toISOString()}\n`).toString('base64');
    const headers = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-cron-heartbeat' };
    let sha = undefined;
    try {
      const r = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (r.ok) { const j = await r.json(); sha = j.sha; }
    } catch (err) {
      log(`fetch sha error: ${String(err && err.message || err)}`);
    }
    const body = { message: `chore: cron heartbeat (${new Date().toISOString()})`, content, branch: githubBranch, sha };
    const put = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    return { ok: put.ok, status: put.status };
  }

  try {
    const warmed = await warm(['front-enhancer','homepage_advertiser']);
    const stamp = await commitStamp();
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ triggeredAt: new Date().toISOString(), baseUrl, warmed, stamp }) };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};