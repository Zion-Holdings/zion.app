function pickRandom(arr, n) {
  const copy = [...arr];
  const sel = [];
  while (sel.length < n && copy.length) {
    const idx = Math.floor(Math.random() * copy.length);
    sel.push(copy.splice(idx, 1)[0]);
  }
  return sel;
}

exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    const candidates = [
      { title: 'Cybersecurity Trends', href: '/blog/cybersecurity-trends-for-2024-and-beyond-chat' },
      { title: 'Cloud‑Native Architecture', href: '/blog/cloud-native-architecture-best-practices-chat' },
      { title: 'ML in Enterprise', href: '/blog/machine-learning-applications-in-enterprise-software-chat' },
      { title: 'DevOps Automation', href: '/blog/devops-automation-strategies-for-modern-teams-chat' },
      { title: 'Edge Computing', href: '/blog/the-rise-of-edge-computing-in-iot-applications-chat' }
    ];

    const promos = pickRandom(candidates, 3);
    const payload = { generatedAt: new Date().toISOString(), promos };

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, promos, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    const path = 'data/homepage-promos.json';

    // Fetch existing sha if present
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
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'zion-autobot'
      },
      body: JSON.stringify({
        message: 'chore(automation): rotate homepage promos',
        content: b64,
        branch,
        sha
      })
    });

    const json = await res.json();
    if (!res.ok) {
      return { statusCode: res.status, body: JSON.stringify({ error: json }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, promos, commit: json.commit && json.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};