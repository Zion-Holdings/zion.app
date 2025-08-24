exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  async function commitJson(path, data) {
    if (!githubToken) return { ok: false, reason: 'no_token' };
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-og-preview-validator'
    };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const j = await getRes.json(); sha = j.sha; }
    } catch {}
    const body = {
      message: `chore: update OG preview validation report (${new Date().toISOString()})`,
      content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    return { ok: putRes.ok, status: putRes.status, error: putRes.ok ? undefined : await putRes.text() };
  }

  if (!baseUrl) return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };

  try {
    const res = await fetch(baseUrl);
    const html = await res.text();

    function meta(name) {
      const m = new RegExp(`<meta[^>]+property=["']${name}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i').exec(html)
             || new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i').exec(html);
      return m ? m[1] : null;
    }

    const fields = {
      'og:title': meta('og:title'),
      'og:description': meta('og:description'),
      'og:image': meta('og:image'),
      'twitter:card': meta('twitter:card')
    };

    let imageStatus = null;
    if (fields['og:image']) {
      const imgUrl = /^https?:\/\//i.test(fields['og:image']) ? fields['og:image'] : baseUrl + (fields['og:image'].startsWith('/') ? fields['og:image'] : '/' + fields['og:image']);
      try {
        const head = await fetch(imgUrl, { method: 'HEAD' });
        imageStatus = { ok: head.ok, status: head.status, contentType: head.headers.get('content-type') };
      } catch (e) {
        imageStatus = { ok: false, error: String(e) };
      }
    }

    const issues = [];
    if (!fields['og:title']) issues.push({ code: 'og:title.missing' });
    if (!fields['og:description']) issues.push({ code: 'og:description.missing' });
    if (!fields['og:image']) issues.push({ code: 'og:image.missing' });
    if (imageStatus && !imageStatus.ok) issues.push({ code: 'og:image.unreachable', detail: imageStatus });

    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      fields,
      imageStatus,
      issues
    };

    const commit = await commitJson('data/reports/og-preview.json', report);
    return { statusCode: 200, body: JSON.stringify({ ok: true, report, commit }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};