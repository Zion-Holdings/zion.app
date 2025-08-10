async function runPsi(url, strategy = 'mobile', key) {
  const base = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  const u = new URL(base);
  u.searchParams.set('url', url);
  u.searchParams.set('strategy', strategy);
  if (key) u.searchParams.set('key', key);
  const res = await fetch(u.toString());
  if (!res.ok) throw new Error(`PSI ${strategy} failed ${res.status}`);
  return res.json();
}

exports.handler = async function(event, context) {
  try {
    const origin = (process.env.URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';
    const psiKey = process.env.PSI_API_KEY; // optional

    const routes = ['/', '/services', '/products', '/blog'];

    const results = [];
    for (const route of routes) {
      const url = origin + route;
      try {
        const mobile = await runPsi(url, 'mobile', psiKey);
        const score = mobile.lighthouseResult?.categories?.performance?.score ?? null;
        results.push({ route, strategy: 'mobile', score, fetchedAt: new Date().toISOString() });
      } catch (e) {
        results.push({ route, strategy: 'mobile', error: String(e) });
      }
    }

    const payload = { origin, results, generatedAt: new Date().toISOString() };

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, payload, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    const path = 'data/pagespeed.json';

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
      body: JSON.stringify({ message: 'chore(automation): update pagespeed audit', content: b64, branch, sha })
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