exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  async function commitJson(path, data) {
    if (!githubToken) return { ok: false, reason: 'no_token' };
    const headers = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-redirect-404-suggester' };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const j = await getRes.json(); sha = j.sha; }
    } catch {}
    const body = { message: `chore: update 404 redirect suggestions (${new Date().toISOString()})`, content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'), branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    return { ok: putRes.ok, status: putRes.status, error: putRes.ok ? undefined : await putRes.text() };
  }

  if (!baseUrl) return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };

  async function fetchSitemap() {
    const url = baseUrl + '/sitemap.xml';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch sitemap: ' + res.status);
    const xml = await res.text();
    const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/gi)).map(m => m[1]);
    return urls.slice(0, 100);
  }

  async function checkUrl(u) {
    try {
      const res = await fetch(u, { method: 'HEAD' });
      return { url: u, status: res.status };
    } catch (e) { return { url: u, status: 0, error: String(e) }; }
  }

  try {
    const urls = await fetchSitemap();
    const results = [];
    for (const u of urls) results.push(await checkUrl(u));
    const broken = results.filter(r => r.status === 404);

    const suggestions = broken.map(b => ({ from: new URL(b.url).pathname, to: '/', note: 'Auto-suggested fallback to home' }));
    const report = { generatedAt: new Date().toISOString(), baseUrl, checked: results.length, broken: broken.length, suggestions, sample: results.slice(0, 10) };
    const commit = await commitJson('data/reports/redirect-suggestions.json', report);
    return { statusCode: 200, body: JSON.stringify({ ok: true, report, commit }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};