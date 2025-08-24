async function readJson(repo, path, ref, token) {
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${ref}`, {
    headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
  });
  if (!res.ok) return null;
  try { return JSON.parse(await res.text()); } catch { return null; }
}

exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };

    const files = [
      'data/link-health.json',
      'data/deep-link-health.json',
      'data/external-link-health.json',
      'data/homepage-promos.json',
      'data/pagespeed.json',
      'data/seo-audit.json',
      'data/security-headers.json',
      'data/osv-audit.json'
    ];

    const summary = { generatedAt: new Date().toISOString(), sections: {} };
    for (const f of files) {
      summary.sections[f] = await readJson(repo, f, branch, token);
    }

    const path = 'data/automation-summary.json';

    // Fetch existing sha
    let sha = undefined;
    {
      const check = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      if (check.ok) { const json = await check.json(); sha = json.sha; }
    }

    const b64 = Buffer.from(JSON.stringify(summary, null, 2), 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT', headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ message: 'chore(automation): update automation summary', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};