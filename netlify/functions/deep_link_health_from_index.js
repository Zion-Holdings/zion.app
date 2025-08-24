exports.handler = async function(event, context) {
  try {
    const origin = (process.env.URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    // Fetch site index from repo
    const resIdx = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent('data/site-index.json')}?ref=${branch}`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
    });
    if (!resIdx.ok) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No site index found' }) };
    const index = JSON.parse(await resIdx.text());

    const paths = new Set(['/']);
    for (const page of Object.keys(index.pages||{})) {
      paths.add(page);
      for (const ln of (index.pages[page].links||[])) paths.add(ln);
    }

    // Limit to avoid very long runs
    const LIMIT = parseInt(process.env.DEEP_LINK_LIMIT || '200', 10);
    const toCheck = Array.from(paths).filter(p => p.startsWith('/')).slice(0, LIMIT);

    const results = [];
    for (const p of toCheck) {
      const url = origin + p;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        results.push({ path: p, status: res.status, ok: res.ok });
      } catch (e) {
        results.push({ path: p, status: 0, ok: false, error: String(e) });
      }
    }

    const failing = results.filter(r => !r.ok);
    const payload = { origin, generatedAt: new Date().toISOString(), checked: toCheck.length, failures: failing.length, results };

    // Commit report
    const path = 'data/deep-link-health.json';

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
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json' },
      body: JSON.stringify({ message: 'chore(automation): update deep link health report', content: b64, branch, sha })
    });
    const jsonCommit = await resCommit.json();
    if (!resCommit.ok) return { statusCode: resCommit.status, body: JSON.stringify({ error: jsonCommit }) };

    // Optionally open/update an issue on high failure ratio
    const threshold = parseFloat(process.env.DEEP_LINK_FAIL_THRESHOLD || '0.05');
    if (toCheck.length > 0 && (failing.length / toCheck.length) >= threshold) {
      const title = `Deep Link Health Failures — ${failing.length}/${toCheck.length}`;
      const body = failing.slice(0, 50).map(f => `- ${f.path} — ${f.status}`).join('\n') + (failing.length > 50 ? `\n...and more` : '');

      // Search for existing issue
      const resIssues = await fetch(`https://api.github.com/repos/${repo}/issues?state=open&per_page=100`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      const issues = await resIssues.json();
      const existing = Array.isArray(issues) ? issues.find(i => i.title.startsWith('Deep Link Health Failures')) : null;

      if (existing) {
        await fetch(existing.comments_url, {
          method: 'POST',
          headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' },
          body: JSON.stringify({ body })
        });
      } else {
        await fetch(`https://api.github.com/repos/${repo}/issues`, {
          method: 'POST',
          headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, body, labels: ['automation', 'link-health'] })
        });
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: path, commit: jsonCommit.commit && jsonCommit.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};