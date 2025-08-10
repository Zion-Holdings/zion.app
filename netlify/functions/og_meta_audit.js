function extractMeta(html, name) {
  const regex = new RegExp(`<meta[^>]+property=["']${name}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i');
  const m = html.match(regex);
  return m ? m[1] : null;
}

function extractNameMeta(html, name) {
  const regex = new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i');
  const m = html.match(regex);
  return m ? m[1] : null;
}

exports.handler = async function(event, context) {
  try {
    const origin = (process.env.URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    const routes = ['/', '/services', '/products', '/blog', '/automation/innovations'];

    const results = [];
    for (const route of routes) {
      const url = origin + route;
      try {
        const res = await fetch(url);
        const html = await res.text();
        const ogTitle = extractMeta(html, 'og:title');
        const ogDesc = extractMeta(html, 'og:description');
        const ogImage = extractMeta(html, 'og:image');
        const twCard = extractNameMeta(html, 'twitter:card');
        results.push({ route, ok: true, ogTitle: !!ogTitle, ogDesc: !!ogDesc, ogImage: !!ogImage, twitterCard: !!twCard });
      } catch (e) {
        results.push({ route, ok: false, error: String(e) });
      }
    }

    const payload = { origin, generatedAt: new Date().toISOString(), results };

    if (!token) return { statusCode: 200, body: JSON.stringify({ ok: true, payload, note: 'No GITHUB_TOKEN set, skipping commit' }) };

    const path = 'data/og-meta.json';

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

    const b64 = Buffer.from(JSON.stringify(payload, null, 2), 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json', 'User-Agent': 'zion-autobot' },
      body: JSON.stringify({ message: 'chore(automation): update OG/Twitter meta audit', content: b64, branch, sha })
    });

    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};