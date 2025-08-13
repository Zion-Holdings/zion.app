exports.handler = async function() {
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const path = 'public/_headers';

  const desired = [
    '/*',
    '  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
    '  X-Content-Type-Options: nosniff',
    '  X-Frame-Options: SAMEORIGIN',
    '  Referrer-Policy: strict-origin-when-cross-origin',
    '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
    '  Content-Security-Policy: upgrade-insecure-requests',
    '  Cache-Control: public, max-age=0, must-revalidate, no-transform',
    '',
    '/_next/static/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '',
    '/og/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    ''
  ].join('\n');

  function normalize(s) {
    return (s || '').replace(/\r\n/g, '\n').trim();
  }

  async function getCurrent() {
    if (!githubToken) return { exists: false };
    const headers = { Authorization: `token ${githubToken}`, 'User-Agent': 'headers-enforcer' };
    const url = `https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`;
    const res = await fetch(url, { headers });
    if (!res.ok) return { exists: false, status: res.status };
    const json = await res.json();
    const content = Buffer.from(json.content || '', 'base64').toString('utf8');
    return { exists: true, sha: json.sha, content };
  }

  async function commitUpdate(sha) {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN' };
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'headers-enforcer'
    };
    const body = {
      message: `chore(headers): enforce global headers (${new Date().toISOString()})`,
      content: Buffer.from(desired, 'utf8').toString('base64'),
      branch: githubBranch,
      sha
    };
    const url = `https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`;
    const putRes = await fetch(url, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok;
    const status = putRes.status;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status, error };
  }

  try {
    const current = await getCurrent();
    const currentNorm = normalize(current.content);
    const desiredNorm = normalize(desired);
    let updated = false;
    let commitResult = null;
    if (!current.exists || currentNorm !== desiredNorm) {
      commitResult = await commitUpdate(current.sha);
      updated = !!commitResult.ok;
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        updated,
        commitResult,
        ensured: true,
        length: desired.length
      })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};


