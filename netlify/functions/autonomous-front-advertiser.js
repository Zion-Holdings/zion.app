exports.handler = async function(event, context) {
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const path = 'data/homepage-promos.json';

  function json(res, status = 200) {
    return { statusCode: status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(res, null, 2) };
  }

  if (!githubToken) {
    return json({ ok: false, error: 'Missing GITHUB_TOKEN env var for GitHub commit' }, 500);
  }

  const promos = {
    updatedAt: new Date().toISOString(),
    items: [
      { title: 'Invent New Automations', desc: 'Generates novel cloud automations on a cadence', href: '/.netlify/functions/cloud-automation-inventor' },
      { title: 'Advertise on Homepage', desc: 'Refreshes the front page promos continuously', href: '/.netlify/functions/autonomous-front-advertiser' },
      { title: 'Rapid Sync Committer', desc: 'Commits a stamp to keep the pipeline flowing', href: '/.netlify/functions/hyper-sync-committer' }
    ]
  };

  async function getCurrentSha(headers) {
    try {
      const res = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (res.ok) {
        const json = await res.json();
        return json.sha;
      }
    } catch (e) {}
    return undefined;
  }

  async function commitJson(obj) {
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-autonomous-front-advertiser'
    };
    const sha = await getCurrentSha(headers);
    const body = {
      message: `chore(homepage): refresh promos (${new Date().toISOString()})`,
      content: Buffer.from(JSON.stringify(obj, null, 2)).toString('base64'),
      branch: githubBranch,
      sha
    };
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = res.ok;
    let text = '';
    try { text = await res.text(); } catch {}
    return { ok, status: res.status, body: text };
  }

  try {
    const result = await commitJson(promos);
    return json({ ok: result.ok, status: result.status, file: path, promos, response: result.body.slice(0, 250) });
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500);
  }
};