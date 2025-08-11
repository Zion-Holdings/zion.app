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
    'User-Agent': 'autonomous-roadmap-synthesizer'
  };

  async function fetchIssues() {
    const url = `https://api.github.com/repos/${githubRepo}/issues?state=open&labels=${encodeURIComponent('enhancement,roadmap')}&per_page=50`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`Failed to fetch issues: ${res.status}`);
    return res.json();
  }

  function buildRoadmap(issues) {
    const sections = { Now: [], Next: [], Later: [], Uncategorized: [] };
    for (const is of issues) {
      const title = is.title || 'Untitled';
      const number = is.number;
      const labels = (is.labels || []).map(l => (typeof l === 'string' ? l : l.name));
      const url = is.html_url;
      const bucket = labels.find(l => /now/i.test(l)) ? 'Now' : labels.find(l => /next/i.test(l)) ? 'Next' : labels.find(l => /later|backlog/i.test(l)) ? 'Later' : 'Uncategorized';
      sections[bucket].push({ title, number, url, labels });
    }

    let md = `# Autonomous Roadmap\n\nGenerated at ${new Date().toISOString()} from open issues labeled enhancement/roadmap.\n\n`;
    for (const key of ['Now','Next','Later','Uncategorized']) {
      const items = sections[key];
      if (!items || items.length === 0) continue;
      md += `## ${key} (${items.length})\n`;
      for (const it of items) {
        md += `- ${it.title} (#${it.number}) — ${it.labels.join(', ')} — ${it.url}\n`;
      }
      md += `\n`;
    }
    if (md.trim().length === 0) md = '# Autonomous Roadmap\n\nNo relevant issues found.';
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
    const issues = await fetchIssues();
    const md = buildRoadmap(issues || []);
    const outPath = 'docs/roadmap.md';
    const commitMessage = `docs(roadmap): update roadmap (${new Date().toISOString()})`;
    const result = await commitText(outPath, md, commitMessage);
    return jsonResponse(200, { ok: true, path: outPath, committed: true, result });
  } catch (err) {
    return jsonResponse(500, { ok: false, error: String(err) });
  }
};