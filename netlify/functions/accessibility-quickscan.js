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
      'User-Agent': 'netlify-a11y-quickscan'
    };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const j = await getRes.json(); sha = j.sha; }
    } catch {}
    const body = {
      message: `chore: update a11y quickscan report (${new Date().toISOString()})`,
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

    const issues = [];
    if (!/<html[^>]*\slang=/i.test(html)) issues.push({ code: 'html.lang.missing', message: 'Missing lang attribute on html element' });
    if (!/<title>[^<]+<\/title>/i.test(html)) issues.push({ code: 'head.title.missing', message: 'Missing <title>' });

    const imgs = Array.from(html.matchAll(/<img\b[^>]*>/gi)).map(m => m[0]);
    for (const tag of imgs) {
      if (!/\salt=/.test(tag)) issues.push({ code: 'img.alt.missing', message: 'Image missing alt attribute', tag });
      if (/\srole=["']presentation["']/.test(tag) && /\salt=/.test(tag)) issues.push({ code: 'img.alt.redundant', message: 'Decorative image should not have alt', tag });
    }

    const h1s = Array.from(html.matchAll(/<h1\b[^>]*>/gi));
    if (h1s.length === 0) issues.push({ code: 'h1.missing', message: 'Missing H1' });
    if (h1s.length > 1) issues.push({ code: 'h1.multiple', message: 'Multiple H1 elements' });

    const buttons = Array.from(html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi));
    buttons.forEach(([, text]) => { if (!text || !text.trim()) issues.push({ code: 'button.text.empty', message: 'Button has no accessible text' }); });

    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      counts: { images: imgs.length, buttons: buttons.length },
      issues,
      summary: { total: issues.length, severity: issues.length > 10 ? 'high' : issues.length > 0 ? 'medium' : 'none' }
    };

    const commit = await commitJson('data/reports/a11y-quickscan.json', report);
    return { statusCode: 200, body: JSON.stringify({ ok: true, report, commit }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};