exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping issue creation' }) };
    }

    // Fetch link-health report from repo
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent('data/link-health.json')}?ref=${branch}`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
    });
    if (!res.ok) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No link-health report found' }) };
    const report = JSON.parse(await res.text());
    const failing = (report.results||[]).filter(r => !r.ok);
    if (!failing.length) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No failures' }) };

    const title = 'Link Health Failures Detected';
    const body = `Automated link health scan detected failing routes:\n\n` + failing.map(f => `- ${f.route} — status: ${f.status} ${f.error?`(${f.error})`:''}`).join('\n') + `\n\n` + `Generated at: ${report.generatedAt || new Date().toISOString()}`;

    // Search existing open issues with same title
    const resSearch = await fetch(`https://api.github.com/repos/${repo}/issues?state=open&per_page=100`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
    });
    const issues = await resSearch.json();
    const existing = Array.isArray(issues) ? issues.find(i => i.title === title) : null;

    if (existing) {
      // Update by adding a comment
      const resComment = await fetch(existing.comments_url, {
        method: 'POST',
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
      });
      const jc = await resComment.json();
      if (!resComment.ok) return { statusCode: resComment.status, body: JSON.stringify({ error: jc }) };
      return { statusCode: 200, body: JSON.stringify({ ok: true, updated: existing.number }) };
    } else {
      // Create a new issue
      const resIssue = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: 'POST',
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, labels: ['automation', 'link-health'] })
      });
      const ji = await resIssue.json();
      if (!resIssue.ok) return { statusCode: resIssue.status, body: JSON.stringify({ error: ji }) };
      return { statusCode: 200, body: JSON.stringify({ ok: true, created: ji.number }) };
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};