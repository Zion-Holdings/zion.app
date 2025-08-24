exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping' }) };
    }

    // List tree and get blog files
    const resTree = await fetch(`https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
    });
    const tree = await resTree.json();
    const blogFiles = tree.tree.filter(t => t.type === 'blob' && t.path.startsWith('pages/blog/') && t.path.endsWith('.tsx'));

    const staleDays = parseInt(process.env.STALE_DAYS || '365', 10);
    const cutoff = Date.now() - staleDays * 24 * 60 * 60 * 1000;

    const stale = [];
    for (const f of blogFiles) {
      // Fetch file to parse Head title and created date (fallback to git date)
      const resMeta = await fetch(`https://api.github.com/repos/${repo}/commits?path=${encodeURIComponent(f.path)}&sha=${branch}&per_page=1`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      const commits = await resMeta.json();
      const lastCommit = Array.isArray(commits) && commits[0];
      const date = lastCommit?.commit?.author?.date ? new Date(lastCommit.commit.author.date).getTime() : 0;
      if (date && date < cutoff) {
        stale.push({ path: f.path, lastUpdated: lastCommit.commit.author.date });
      }
    }

    if (!stale.length) return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No stale posts' }) };

    const title = `Stale Content — ${stale.length} blog posts older than ${staleDays} days`;
    const body = stale.map(s => `- ${s.path} — last updated ${s.lastUpdated}`).join('\n');

    // Search existing open issues with similar title prefix
    const resIssues = await fetch(`https://api.github.com/repos/${repo}/issues?state=open&per_page=100`, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
    });
    const issues = await resIssues.json();
    const existing = Array.isArray(issues) ? issues.find(i => i.title.startsWith('Stale Content —')) : null;

    if (existing) {
      const resComment = await fetch(existing.comments_url, {
        method: 'POST',
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
      });
      const jc = await resComment.json();
      if (!resComment.ok) return { statusCode: resComment.status, body: JSON.stringify({ error: jc }) };
      return { statusCode: 200, body: JSON.stringify({ ok: true, updated: existing.number, stale: stale.length }) };
    } else {
      const resNew = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: 'POST',
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, labels: ['automation', 'content'] })
      });
      const jn = await resNew.json();
      if (!resNew.ok) return { statusCode: resNew.status, body: JSON.stringify({ error: jn }) };
      return { statusCode: 200, body: JSON.stringify({ ok: true, created: jn.number, stale: stale.length }) };
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};