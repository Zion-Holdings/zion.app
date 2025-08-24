function extractLinks(html, origin) {
  const links = [];
  const regex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    if (!href) continue;
    if (href.startsWith('http')) {
      if (href.startsWith(origin)) {
        const path = href.substring(origin.length) || '/';
        if (path.startsWith('/')) links.push(path.split('#')[0]);
      }
    } else if (href.startsWith('/')) {
      links.push(href.split('#')[0]);
    }
  }
  return Array.from(new Set(links)).sort();
}

exports.handler = async function(event, context) {
  try {
    const origin = process.env.URL || process.env.SITE_URL || 'https://example.com';
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    const seeds = ['/', '/blog', '/automation/innovations'];
    const pages = {};

    for (const path of seeds) {
      const url = origin.replace(/\/$/, '') + path;
      try {
        const res = await fetch(url);
        const html = await res.text();
        pages[path] = {
          status: res.status,
          links: extractLinks(html, origin)
        };
      } catch (e) {
        pages[path] = { status: 0, error: String(e), links: [] };
      }
    }

    const index = {
      generatedAt: new Date().toISOString(),
      origin,
      seeds,
      pages
    };

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, index, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    const path = 'data/site-index.json';

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

    const b64 = Buffer.from(JSON.stringify(index, null, 2), 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'zion-autobot'
      },
      body: JSON.stringify({
        message: 'chore(automation): update site index',
        content: b64,
        branch,
        sha
      })
    });

    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) {
      return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, path, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};