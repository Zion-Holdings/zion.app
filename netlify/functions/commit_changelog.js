exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };

    const sinceDays = parseInt(process.env.CHANGELOG_DAYS || '1', 10);
    const since = new Date(Date.now() - sinceDays*24*60*60*1000).toISOString();

    const resCommits = await fetch(`https://api.github.com/repos/${repo}/commits?sha=${branch}&since=${encodeURIComponent(since)}&per_page=100`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
    });
    const commits = await resCommits.json();

    const date = new Date().toISOString().slice(0,10);
    let md = `# Changelog — ${date}\n\n`;
    for (const c of (Array.isArray(commits)?commits:[])) {
      const msg = c.commit?.message?.split('\n')[0] || 'Update';
      md += `- ${msg} (${c.sha.substring(0,7)}) — ${c.commit?.author?.name} at ${c.commit?.author?.date}\n`;
    }

    const path = `data/changelogs/${date}.md`;

    // Fetch existing sha
    let sha = undefined;
    {
      const check = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      if (check.ok) {
        const json = await check.json();
        sha = json.sha;
      }
    }

    const b64 = Buffer.from(md, 'utf8').toString('base64');
    const resPut = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ message: `chore(changelog): ${date}`, content: b64, branch, sha })
    });
    const jsonPut = await resPut.json();
    if (!resPut.ok) return { statusCode: resPut.status, body: JSON.stringify({ error: jsonPut }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, path, commit: jsonPut.commit && jsonPut.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};