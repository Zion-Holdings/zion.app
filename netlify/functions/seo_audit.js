function analyzeTsx(content) {
  const hasHead = /<Head[\s>]/.test(content);
  const hasTitle = /<title>[^<]+<\/title>/.test(content);
  const hasMetaDesc = /<meta[^>]+name=["']description["'][^>]*>/i.test(content);
  return { hasHead, hasTitle, hasMetaDesc };
}

async function getRepoTree(repo, ref, token) {
  const res = await fetch(`https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`, {
    headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
  });
  if (!res.ok) throw new Error(`tree fetch failed: ${res.status}`);
  return res.json();
}

async function getFileContent(repo, path, ref, token) {
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${ref}`, {
    headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
  });
  if (!res.ok) throw new Error(`content fetch failed: ${res.status}`);
  return res.text();
}

exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, cannot audit via GitHub API' }) };
    }

    const tree = await getRepoTree(repo, branch, token);
    const pageFiles = tree.tree.filter(t => t.type === 'blob' && t.path.startsWith('pages/') && t.path.endsWith('.tsx'));

    const report = [];
    for (const file of pageFiles) {
      try {
        const content = await getFileContent(repo, file.path, branch, token);
        const a = analyzeTsx(content);
        report.push({ path: file.path, ...a });
      } catch (e) {
        report.push({ path: file.path, error: String(e) });
      }
    }

    const summary = {
      generatedAt: new Date().toISOString(),
      totals: {
        pages: report.length,
        withHead: report.filter(r => r.hasHead).length,
        withTitle: report.filter(r => r.hasTitle).length,
        withMetaDesc: report.filter(r => r.hasMetaDesc).length,
      },
      issues: report.filter(r => !(r.hasHead && r.hasTitle && r.hasMetaDesc))
    };

    const path = 'data/seo-audit.json';
    const b64 = Buffer.from(JSON.stringify(summary, null, 2), 'utf8').toString('base64');

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

    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'zion-autobot'
      },
      body: JSON.stringify({ message: 'chore(automation): update seo audit', content: b64, branch, sha })
    });

    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) {
      return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};