function rssTemplate(items) {
  const now = new Date().toUTCString();
  const entries = items.map(i => `    <item>\n      <title><![CDATA[${i.title}]]></title>\n      <link>${i.link}</link>\n      <pubDate>${i.date}</pubDate>\n      <guid>${i.link}</guid>\n      <description><![CDATA[${i.description||''}]]></description>\n    </item>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Zion Blog</title>\n    <link>${items[0]?.site || ''}</link>\n    <description>Latest posts from Zion</description>\n    <lastBuildDate>${now}</lastBuildDate>\n${entries}\n  </channel>\n</rss>\n`;
}

function extractTitle(content) {
  const m = content.match(/<title>([^<]+)<\/title>/);
  return m ? m[1] : 'Untitled';
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

    // List blog TSX files
    const resTree = await fetch(`https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
    });
    const tree = await resTree.json();
    const blogFiles = tree.tree.filter(t => t.type === 'blob' && t.path.startsWith('pages/blog/') && t.path.endsWith('.tsx'));

    const items = [];
    for (const f of blogFiles) {
      const resContent = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(f.path)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
      });
      if (!resContent.ok) continue;
      const content = await resContent.text();
      const title = extractTitle(content);

      // Last commit date as pubDate
      const resCommits = await fetch(`https://api.github.com/repos/${repo}/commits?path=${encodeURIComponent(f.path)}&sha=${branch}&per_page=1`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      const commits = await resCommits.json();
      const last = Array.isArray(commits) && commits[0]?.commit?.author?.date;
      const date = new Date(last || Date.now()).toUTCString();

      const slug = f.path.replace(/^pages/, '').replace(/\.tsx$/, '');
      items.push({
        site: origin,
        title,
        link: origin + slug,
        date,
        description: ''
      });
    }

    items.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const xml = rssTemplate(items);
    const b64 = Buffer.from(xml, 'utf8').toString('base64');

    // Commit to public/feed.xml
    const path = 'public/feed.xml';

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
      body: JSON.stringify({ message: 'chore(automation): update RSS feed', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, updated: path, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};