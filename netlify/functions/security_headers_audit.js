exports.handler = async function(event, context) {
  try {
    const origin = (process.env.URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    const routes = ['/', '/services', '/products', '/blog'];
    const must = ['content-security-policy', 'x-content-type-options', 'x-frame-options', 'referrer-policy', 'strict-transport-security'];

    const results = [];
    for (const route of routes) {
      const url = origin + route;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        const present = {};
        for (const k of must) present[k] = res.headers.has(k);
        results.push({ route, status: res.status, present });
      } catch (e) {
        results.push({ route, status: 0, error: String(e) });
      }
    }

    const payload = { origin, results, generatedAt: new Date().toISOString() };

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, payload, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    const path = 'data/security-headers.json';

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
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'zion-autobot'
      },
      body: JSON.stringify({ message: 'chore(automation): update security headers audit', content: b64, branch, sha })
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