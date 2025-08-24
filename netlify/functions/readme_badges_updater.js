function insertOrReplace(content, markerStart, markerEnd, block) {
  const startIdx = content.indexOf(markerStart);
  const endIdx = content.indexOf(markerEnd);
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    return content.slice(0, startIdx + markerStart.length) + '\n' + block + '\n' + content.slice(endIdx);
  }
  // append if not found
  return content + `\n\n${markerStart}\n${block}\n${markerEnd}\n`;
}

exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };

    // Fetch link health to compute pass rate
    async function readJson(path) {
      const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
      });
      if (!res.ok) return null;
      try { return JSON.parse(await res.text()); } catch { return null; }
    }

    const linkHealth = await readJson('data/link-health.json');
    let passRate = 'n/a';
    if (linkHealth && Array.isArray(linkHealth.results)) {
      const total = linkHealth.results.length;
      const ok = linkHealth.results.filter(r => r.ok).length;
      passRate = total ? `${Math.round((ok/total)*100)}%` : 'n/a';
    }

    const badgeBlock = `![Deploy](https://img.shields.io/badge/deploy-automatic-success) ![Link%20Health](https://img.shields.io/badge/link%20health-${encodeURIComponent(passRate)}-blue)`;

    // Read README
    const readmePath = 'README.md';
    const resRead = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(readmePath)}?ref=${branch}`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
    });
    if (!resRead.ok) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'README.md not found' }) };
    const readme = await resRead.text();

    const markerStart = '<!-- BADGES:START -->';
    const markerEnd = '<!-- BADGES:END -->';
    const updated = insertOrReplace(readme, markerStart, markerEnd, badgeBlock);

    // Fetch existing sha for README via content API (need sha)
    const resHead = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(readmePath)}?ref=${branch}`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
    });
    const jHead = await resHead.json();
    const sha = jHead.sha;

    const b64 = Buffer.from(updated, 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(readmePath)}`, {
      method: 'PUT', headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ message: 'docs(readme): update badges', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};