exports.config = { schedule: '*/20 * * * *' };

exports.handler = async function () {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function keyify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 60) || 'text';
  }

  async function commitFile(path, content, message) {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-i18n-seed-runner'
    };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const json = await getRes.json(); sha = json.sha; }
    } catch {}
    const body = { message, content: Buffer.from(content).toString('base64'), branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok; const status = putRes.status; let error;
    if (!ok) { try { error = await putRes.text(); } catch (e) { error = String(e); } }
    return { ok, status, error };
  }

  try {
    if (!baseUrl) return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };
    const res = await fetch(baseUrl);
    if (!res.ok) return { statusCode: 200, body: JSON.stringify({ ok: false, error: `Fetch ${res.status}` }) };
    const html = await res.text();

    // naive extraction of visible strings inside common tags
    const tagRegex = /<(h1|h2|h3|p|a|button)[^>]*>([\s\S]*?)<\/\1>/gi;
    const raw = [];
    let m;
    while ((m = tagRegex.exec(html)) !== null) {
      let text = m[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (text && text.length >= 3 && text.length <= 140) raw.push(text);
    }
    const unique = Array.from(new Set(raw)).slice(0, 200);
    const entries = {};
    for (const t of unique) {
      const k = keyify(t);
      if (!entries[k]) entries[k] = t;
    }

    const content = JSON.stringify({ locale: 'en', generatedAt: new Date().toISOString(), entries }, null, 2);
    const path = 'data/i18n-seed.json';
    const msg = `chore(i18n): update i18n seed from homepage (${new Date().toISOString()})`;
    const resCommit = await commitFile(path, content, msg);
    return { statusCode: 200, body: JSON.stringify({ ok: true, total: Object.keys(entries).length, commit: resCommit }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};