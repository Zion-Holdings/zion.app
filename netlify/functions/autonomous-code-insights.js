exports.handler = async function(event, context) {
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function jsonResponse(statusCode, data) {
    return { statusCode, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
  }

  if (!githubToken) {
    return jsonResponse(400, { error: 'Missing GITHUB_TOKEN' });
  }

  const headers = {
    Authorization: `token ${githubToken}`,
    'Content-Type': 'application/json',
    'User-Agent': 'autonomous-code-insights'
  };

  async function getRepoTree() {
    const url = `https://api.github.com/repos/${githubRepo}/git/trees/${encodeURIComponent(githubBranch)}?recursive=1`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`Failed to fetch repo tree: ${res.status}`);
    return res.json();
  }

  function analyzeTree(treeJson) {
    const blobs = (treeJson.tree || []).filter((n) => n.type === 'blob');
    const totalFiles = blobs.length;
    const totalBytes = blobs.reduce((sum, b) => sum + (b.size || 0), 0);

    const byExtension = {};
    const byTopDirectory = {};
    const files = [];

    for (const b of blobs) {
      const filePath = b.path;
      const size = b.size || 0;
      const match = filePath.match(/\.([a-zA-Z0-9]+)$/);
      const ext = match ? match[1].toLowerCase() : 'noext';
      const topDir = filePath.includes('/') ? filePath.split('/')[0] : '(root)';

      byExtension[ext] = byExtension[ext] || { files: 0, bytes: 0 };
      byExtension[ext].files += 1;
      byExtension[ext].bytes += size;

      byTopDirectory[topDir] = byTopDirectory[topDir] || { files: 0, bytes: 0 };
      byTopDirectory[topDir].files += 1;
      byTopDirectory[topDir].bytes += size;

      files.push({ path: filePath, size });
    }

    files.sort((a, b) => b.size - a.size);
    const topFiles = files.slice(0, 25);

    function topEntries(obj, limit = 15, key = 'bytes') {
      return Object.entries(obj)
        .map(([name, stats]) => ({ name, ...stats }))
        .sort((a, b) => b[key] - a[key])
        .slice(0, limit);
    }

    return {
      generatedAt: new Date().toISOString(),
      repo: githubRepo,
      branch: githubBranch,
      totals: { files: totalFiles, bytes: totalBytes },
      topExtensions: topEntries(byExtension, 15, 'bytes'),
      topDirectories: topEntries(byTopDirectory, 15, 'bytes'),
      largestFiles: topFiles
    };
  }

  async function getCurrentSha(path) {
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
    if (!res.ok) return undefined;
    const json = await res.json();
    return json && json.sha ? json.sha : undefined;
  }

  async function commitJson(path, obj, message) {
    const sha = await getCurrentSha(path);
    const content = Buffer.from(JSON.stringify(obj, null, 2) + '\n').toString('base64');
    const body = { message, content, branch: githubBranch, sha };
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Commit failed: ${res.status} ${txt}`);
    }
    return res.json();
  }

  try {
    const tree = await getRepoTree();
    const insights = analyzeTree(tree);
    const outPath = 'automation/reports/code-insights.json';
    const commitMessage = `chore(automation): update code insights (${new Date().toISOString()})`;
    const result = await commitJson(outPath, insights, commitMessage);
    return jsonResponse(200, { ok: true, path: outPath, committed: true, result });
  } catch (err) {
    return jsonResponse(500, { ok: false, error: String(err) });
  }
};