exports.handler = async function(event, context) {
  try {
    const origin = process.env.URL || process.env.SITE_URL || 'https://example.com';
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    const routes = [
      '/', '/services', '/products', '/talent', '/blog', '/automation', '/about', '/contact',
      '/iot-platforms', '/blockchain-solutions'
    ];

    const results = [];
    for (const route of routes) {
      const url = origin.replace(/\/$/, '') + route;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        results.push({ route, status: res.status, ok: res.ok });
      } catch (e) {
        results.push({ route, status: 0, ok: false, error: String(e) });
      }
    }

    // Commit report to repo
    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, results, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    const path = 'data/link-health.json';
    const content = JSON.stringify({
      generatedAt: new Date().toISOString(),
      origin,
      results
    }, null, 2);

    // Need existing SHA if file exists
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

    const b64 = Buffer.from(content, 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'zion-autobot'
      },
      body: JSON.stringify({
        message: 'chore(automation): update link health report',
        content: b64,
        branch,
        sha
      })
    });

    const commitJson = await resCommit.json();
    if (!resCommit.ok) {
      return { statusCode: resCommit.status, body: JSON.stringify({ error: commitJson }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, results, commit: commitJson.commit && commitJson.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};