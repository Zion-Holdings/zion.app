function extractExternalLinks(html, origin) {
  const set = new Set();
  const regex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let m;
  const originHost = new URL(origin).host;
  while ((m = regex.exec(html)) !== null) {
    const href = m[1];
    if (!href) continue;
    try {
      const u = new URL(href, origin);
      if (u.host !== originHost && (u.protocol === 'http:' || u.protocol === 'https:')) {
        set.add(u.toString());
      }
    } catch {}
  }
  return Array.from(set);
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

    // Seed routes to fetch for external links
    const routes = ['/', '/blog', '/services'];
    const links = new Set();
    for (const route of routes) {
      try {
        const res = await fetch(origin + route);
        const html = await res.text();
        for (const l of extractExternalLinks(html, origin)) links.add(l);
      } catch {}
    }

    const LIMIT = parseInt(process.env.EXTERNAL_LINK_LIMIT || '100', 10);
    const toCheck = Array.from(links).slice(0, LIMIT);

    const results = [];
    for (const url of toCheck) {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        results.push({ url, status: res.status, ok: res.ok });
      } catch (e) {
        results.push({ url, status: 0, ok: false, error: String(e) });
      }
    }

    const failing = results.filter(r => !r.ok);
    const payload = { origin, generatedAt: new Date().toISOString(), checked: toCheck.length, failures: failing.length, results };

    const path = 'data/external-link-health.json';

    // Fetch existing sha
    let sha = undefined;
    {
      const check = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      if (check.ok) { const json = await check.json(); sha = json.sha; }
    }

    const b64 = Buffer.from(JSON.stringify(payload, null, 2), 'utf8').toString('base64');
    const resCommit = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT', headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ message: 'chore(automation): update external link health report', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    // Optionally raise an issue
    const threshold = parseFloat(process.env.EXTERNAL_LINK_FAIL_THRESHOLD || '0.1');
    if (toCheck.length > 0 && (failing.length / toCheck.length) >= threshold) {
      const title = `External Link Failures — ${failing.length}/${toCheck.length}`;
      const body = failing.slice(0, 50).map(f => `- ${f.url} — ${f.status}`).join('\n') + (failing.length > 50 ? `\n...and more` : '');
      const resIssues = await fetch(`https://api.github.com/repos/${repo}/issues?state=open&per_page=100`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      const issues = await resIssues.json();
      const existing = Array.isArray(issues) ? issues.find(i => i.title.startsWith('External Link Failures')) : null;
      if (existing) {
        await fetch(existing.comments_url, { method: 'POST', headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' }, body: JSON.stringify({ body }) });
      } else {
        await fetch(`https://api.github.com/repos/${repo}/issues`, { method: 'POST', headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' }, body: JSON.stringify({ title, body, labels: ['automation', 'external-links'] }) });
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: path, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};