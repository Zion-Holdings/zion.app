exports.handler = async function(event, context) {
  const buildHook = process.env.NETLIFY_BUILD_HOOK_URL || process.env.BUILD_HOOK_URL || '';
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[fast-sync] ${msg}`); }

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
    const path = 'automation/fast-sync-stamp.txt';
    const content = Buffer.from(`Fast sync at ${new Date().toISOString()}\n`).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'repo-fast-sync'
    };
    // Get current SHA if exists
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const json = await getRes.json(); sha = json.sha; }
    } catch {}
    const body = { message: `chore: fast repo sync (${new Date().toISOString()})`, content, branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok; const status = putRes.status; let error;
    if (!ok) { try { error = await putRes.text(); } catch (e) { error = String(e); } }
    return { ok, status, error };
  }

  try {
    const commit = await commitStamp();
    const build = await triggerBuildHook();
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ triggeredAt: new Date().toISOString(), commit, build }) };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};