exports.handler = async function(event, context) {
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  if (!githubToken) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'GITHUB_TOKEN required for freshness scan' }) };
  }

  const headers = {
    Authorization: `token ${githubToken}`,
    'Content-Type': 'application/json',
    'User-Agent': 'netlify-content-freshness-runner'
  };

  async function lastCommitDateForPath(path) {
    try {
      const res = await fetch(`https://api.github.com/repos/${githubRepo}/commits?path=${encodeURIComponent(path)}&sha=${encodeURIComponent(githubBranch)}&per_page=1`, { headers });
      if (!res.ok) return null;
      const arr = await res.json();
      if (!Array.isArray(arr) || arr.length === 0) return null;
      return arr[0]?.commit?.committer?.date || arr[0]?.commit?.author?.date || null;
    } catch { return null; }
  }

  async function commitJson(path, data) {
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const j = await getRes.json(); sha = j.sha; }
    } catch {}
    const body = {
      message: `chore: update content freshness report (${new Date().toISOString()})`,
      content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    return { ok: putRes.ok, status: putRes.status, error: putRes.ok ? undefined : await putRes.text() };
  }

  const paths = [ 'README.md', 'pages/index.tsx', 'pages/main/front/index.tsx', 'docs', 'public', 'automation' ];
  const results = [];
  for (const p of paths) {
    const date = await lastCommitDateForPath(p);
    results.push({ path: p, lastCommitAt: date });
  }

  const now = Date.now();
  const withStaleness = results.map(r => {
    const t = r.lastCommitAt ? Date.parse(r.lastCommitAt) : null;
    const days = t ? Math.round((now - t) / (1000 * 60 * 60 * 24)) : null;
    return { ...r, daysSinceChange: days, stale: typeof days === 'number' ? days > 60 : true };
  });

  const summary = {
    scanned: paths.length,
    stale: withStaleness.filter(r => r.stale).length,
    generatedAt: new Date().toISOString()
  };

  const report = { summary, entries: withStaleness };
  const commit = await commitJson('data/reports/content-freshness.json', report);
  return { statusCode: 200, body: JSON.stringify({ ok: true, report, commit }) };
};