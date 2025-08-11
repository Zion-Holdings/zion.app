exports.handler = async function(event, context) {
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const path = 'data/automations/innovations.json';

  function json(res, status = 200) {
    return { statusCode: status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(res, null, 2) };
  }

  if (!githubToken) {
    return json({ ok: false, error: 'Missing GITHUB_TOKEN env var for GitHub commit' }, 500);
  }

  const innovation = {
    generatedAt: new Date().toISOString(),
    id: Math.random().toString(36).slice(2, 10),
    automations: [
      {
        key: 'cloud-automation-inventor',
        title: 'Cloud Automation Inventor',
        desc: 'Continuously drafts and proposes new useful cloud automations with safe guardrails.',
        href: '/.netlify/functions/cloud-automation-inventor'
      },
      {
        key: 'autonomous-front-advertiser',
        title: 'Autonomous Front Advertiser',
        desc: 'Curates homepage promos and deep links to live cloud functions.',
        href: '/.netlify/functions/autonomous-front-advertiser'
      }
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
      'User-Agent': 'netlify-cloud-automation-inventor'
    };
    const sha = await getCurrentSha(headers);
    const body = {
      message: `chore(automation): update innovations (${new Date().toISOString()})`,
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
    const result = await commitJson(innovation);
    return json({ ok: result.ok, status: result.status, file: path, innovation, response: result.body.slice(0, 250) });
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500);
  }
};