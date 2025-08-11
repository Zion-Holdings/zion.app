exports.handler = async function(event, context) {
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const githubToken = process.env.GITHUB_TOKEN || '';
  const maxFilesToAnalyze = 200;

  function log(message) { console.log(`[content-freshness] ${message}`); }

  async function githubJson(url) {
    const headers = { 'User-Agent': 'netlify-function', 'Accept': 'application/vnd.github+json' };
    if (githubToken) headers.Authorization = `token ${githubToken}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
    return res.json();
  }

  function daysBetween(a, b) {
    const ms = Math.abs(new Date(a).getTime() - new Date(b).getTime());
    return Math.round(ms / (1000 * 60 * 60 * 24));
  }

  async function listRepoTree() {
    const url = `https://api.github.com/repos/${githubRepo}/git/trees/${encodeURIComponent(githubBranch)}?recursive=1`;
    const data = await githubJson(url);
    return (data.tree || []).filter(t => t.type === 'blob').map(t => t.path);
  }

  async function lastCommitDateForPath(path) {
    const url = `https://api.github.com/repos/${githubRepo}/commits?path=${encodeURIComponent(path)}&sha=${encodeURIComponent(githubBranch)}&per_page=1`;
    try {
      const data = await githubJson(url);
      const commit = Array.isArray(data) && data.length > 0 ? data[0] : null;
      return commit ? commit.commit.committer.date : null;
    } catch (e) {
      return null;
    }
  }

  async function commitJson(path, obj, message) {
    if (!githubToken) {
      return { ok: false, reason: 'No GITHUB_TOKEN provided; skipping commit', path };
    }
    const content = Buffer.from(JSON.stringify(obj, null, 2)).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-function'
    };
    // Get current sha if exists
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}
    const body = { message, content, branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status: putRes.status, error, path };
  }

  try {
    const allPaths = await listRepoTree();
    const includeExt = new Set(['.tsx','.ts','.jsx','.js','.md','.mdx']);
    const includeDirs = ['pages/','docs/','components/'];

    const candidatePaths = allPaths.filter(p => includeDirs.some(d => p.startsWith(d)) && includeExt.has(p.slice(p.lastIndexOf('.'))));
    const limited = candidatePaths.slice(0, maxFilesToAnalyze);

    const nowIso = new Date().toISOString();
    const results = [];
    for (const filePath of limited) {
      // eslint-disable-next-line no-await-in-loop
      const lastDate = await lastCommitDateForPath(filePath);
      const ageDays = lastDate ? daysBetween(nowIso, lastDate) : null;
      results.push({ path: filePath, lastModified: lastDate, ageDays });
    }

    results.sort((a, b) => (b.ageDays || 0) - (a.ageDays || 0));
    const topStale = results.filter(r => typeof r.ageDays === 'number').slice(0, 50);

    const report = {
      generatedAt: nowIso,
      repo: githubRepo,
      branch: githubBranch,
      analyzedFiles: limited.length,
      totalCandidates: candidatePaths.length,
      topStale,
    };

    const commitPath = 'public/automation/content-freshness.json';
    const commitRes = await commitJson(commitPath, report, `report: content freshness (${nowIso})`);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, commit: commitRes, reportSummary: { analyzedFiles: report.analyzedFiles, topStaleCount: report.topStale.length } })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};