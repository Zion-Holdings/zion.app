exports.config = {
  schedule: '*/1 * * * *'
};

exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const timeoutMs = 15000;

  function log(msg) { console.log(`[meta-orchestrator] ${msg}`); }

  const targets = [
    'front-enhancer',
    'homepage_advertiser',
    'front-maximizer',
    'continuous-front-runner',
    'features-capabilities-benefits-advertiser',
    'hyper-front-index-accelerator',
    'readme-advertiser'
  ];

  async function invokeFunction(name) {
    if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(t);
      return { name, status: res.status, ok: res.ok };
    } catch (err) {
      clearTimeout(t);
      return { name, status: 0, ok: false, error: String(err && err.message || err) };
    }
  }

  async function commitStamp() {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const path = 'automation/netlify-build-stamp.txt';
    const content = Buffer.from(`Meta orchestrator triggered at ${new Date().toISOString()}\n`).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-meta-orchestrator'
    };
    // Get current SHA if exists
    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch { /* ignore fetch errors when checking SHA */ }
    const body = {
      message: `chore: meta orchestrator stamp (${new Date().toISOString()})`,
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
    log(`baseUrl=${baseUrl}`);
    const results = await Promise.all(targets.map(invokeFunction));
    const stamp = await commitStamp();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        triggeredAt: new Date().toISOString(),
        baseUrl,
        totals: {
          attempted: targets.length,
          ok: results.filter(r => r.ok).length,
          failed: results.filter(r => !r.ok).length
        },
        results,
        stamp
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};