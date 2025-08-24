function buildSitemapXml(origin, paths){
  const urls = paths.map(p => `  <url><loc>${origin.replace(/\/$/, '')}${p}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

exports.handler = async function(event, context) {
  try {
    const origin = (process.env.URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    // Fetch site index
    const resIdx = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent('data/site-index.json')}?ref=${branch}`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
    });
    if (!resIdx.ok) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No site index found' }) };
    const index = JSON.parse(await resIdx.text());

    const pathsSet = new Set(['/']);
    for (const page of Object.keys(index.pages||{})) {
      pathsSet.add(page);
      for (const ln of (index.pages[page].links||[])) pathsSet.add(ln);
    }
    const paths = Array.from(pathsSet).filter(p => p.startsWith('/')).sort();

    const xml = buildSitemapXml(origin, paths);
    const b64 = Buffer.from(xml, 'utf8').toString('base64');

    // Commit to repo under public/sitemap.xml
    const path = 'public/sitemap.xml';

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
      headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json', 'User-Agent': 'zion-autobot' },
      body: JSON.stringify({ message: 'chore(automation): update sitemap.xml from site index', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, updated: path, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};