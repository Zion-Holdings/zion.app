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
    'User-Agent': 'autonomous-commit-digest'
  };

  async function fetchCommits() {
    const url = `https://api.github.com/repos/${githubRepo}/commits?sha=${encodeURIComponent(githubBranch)}&per_page=50`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`Failed to fetch commits: ${res.status}`);
    return res.json();
  }

  function classify(message) {
    const m = message.trim();
    const match = m.match(/^(feat|fix|chore|docs|refactor|perf|test|build|ci|style|revert)(\(|:)/i);
    return match ? match[1].toLowerCase() : 'other';
  }

  function buildDigest(commits) {
    const groups = {};
    for (const c of commits) {
      const msg = (c.commit && c.commit.message) || '';
      const firstLine = msg.split('\n')[0];
      const type = classify(firstLine);
      groups[type] = groups[type] || [];
      groups[type].push({ sha: c.sha, message: firstLine, author: c.commit.author.name, date: c.commit.author.date });
    }

    const order = ['feat','fix','perf','refactor','docs','test','build','ci','style','chore','revert','other'];
    let md = `# Commit Digest\n\nGenerated at ${new Date().toISOString()} for ${githubRepo}@${githubBranch}.\n\n`;
    for (const key of order) {
      const items = groups[key] || [];
      if (items.length === 0) continue;
      md += `## ${key.toUpperCase()} (${items.length})\n`;
      for (const it of items.slice(0, 50)) {
        const short = it.sha.substring(0, 7);
        md += `- ${it.message} (${short}) — ${it.author}, ${new Date(it.date).toLocaleString()}\n`;
      }
      md += `\n`;
    }
    return md;
  }

  async function getCurrentSha(path) {
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
    if (!res.ok) return undefined;
    const json = await res.json();
    return json && json.sha ? json.sha : undefined;
  }

  async function commitText(path, text, message) {
    const sha = await getCurrentSha(path);
    const content = Buffer.from(text).toString('base64');
    const body = { message, content, branch: githubBranch, sha };
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Commit failed: ${res.status} ${txt}`);
    }
    return res.json();
  }

  try {
    const commits = await fetchCommits();
    const digest = buildDigest(commits || []);
    const outPath = 'docs/commit-digest.md';
    const commitMessage = `docs: update commit digest (${new Date().toISOString()})`;
    const result = await commitText(outPath, digest, commitMessage);
    return jsonResponse(200, { ok: true, path: outPath, committed: true, result });
  } catch (err) {
    return jsonResponse(500, { ok: false, error: String(err) });
  }
};