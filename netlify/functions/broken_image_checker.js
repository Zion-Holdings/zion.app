function extractImages(html, origin) {
  const imgs = [];
  const regex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const src = m[1];
    if (!src) continue;
    if (src.startsWith('http')) {
      if (src.startsWith(origin)) imgs.push(src);
    } else if (src.startsWith('/')) {
      imgs.push(origin.replace(/\/$/, '') + src);
    }
  }
  return Array.from(new Set(imgs));
}

exports.handler = async function(event, context) {
  try {
    const origin = (process.env.URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    const routes = ['/', '/services', '/products', '/blog'];

    const images = new Set();
    for (const route of routes) {
      try {
        const res = await fetch(origin + route);
        const html = await res.text();
        for (const img of extractImages(html, origin)) images.add(img);
      } catch {}
    }

    const results = [];
    for (const url of images) {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        results.push({ url, status: res.status, ok: res.ok });
      } catch (e) {
        results.push({ url, status: 0, ok: false, error: String(e) });
      }
    }

    const payload = { origin, generatedAt: new Date().toISOString(), results };

    if (!token) return { statusCode: 200, body: JSON.stringify({ ok: true, payload, note: 'No GITHUB_TOKEN set, skipping commit' }) };

    const path = 'data/broken-images.json';

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
      body: JSON.stringify({ message: 'chore(automation): update broken image report', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};