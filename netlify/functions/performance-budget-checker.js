exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function abs(url) {
    if (!url) return null;
    if (/^https?:\/\//i.test(url)) return url;
    if (!baseUrl) return null;
    return baseUrl + (url.startsWith('/') ? url : '/' + url);
  }

  async function headOrGetContentLength(url) {
    try {
      const headRes = await fetch(url, { method: 'HEAD' });
      const len = headRes.headers.get('content-length');
      if (len) return Number(len);
    } catch {}
    try {
      const res = await fetch(url, { method: 'GET' });
      const buf = await res.arrayBuffer();
      return buf.byteLength;
    } catch {
      return 0;
    }
  }

  async function commitJson(path, data) {
    if (!githubToken) return { ok: false, reason: 'no_token' };
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-performance-budget-checker'
    };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const j = await getRes.json();
        sha = j.sha;
      }
    } catch {}
    const body = {
      message: `chore: update performance budget report (${new Date().toISOString()})`,
      content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    return { ok: putRes.ok, status: putRes.status, error: putRes.ok ? undefined : await putRes.text() };
  }

  if (!baseUrl) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };
  }

  try {
    const htmlRes = await fetch(baseUrl);
    const html = await htmlRes.text();
    const scriptSrcs = Array.from(html.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean);
    const cssHrefs = Array.from(html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean);
    const imgSrcs = Array.from(html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]).map(abs).filter(Boolean).slice(0, 20);

    const sizes = {};
    let totalJs = 0, totalCss = 0, totalImg = 0;

    for (const u of scriptSrcs) { const s = await headOrGetContentLength(u); sizes[u] = s; totalJs += s; }
    for (const u of cssHrefs) { const s = await headOrGetContentLength(u); sizes[u] = s; totalCss += s; }
    for (const u of imgSrcs) { const s = await headOrGetContentLength(u); sizes[u] = s; totalImg += s; }

    const largestAssets = Object.entries(sizes).sort((a,b) => b[1]-a[1]).slice(0, 10).map(([url, bytes]) => ({ url, bytes }));

    const KB = 1024;
    const budgets = {
      jsTotalKb: 500,
      cssTotalKb: 200,
      imgTotalKb: 1500
    };

    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      counts: { js: scriptSrcs.length, css: cssHrefs.length, img: imgSrcs.length },
      totals: { jsBytes: totalJs, cssBytes: totalCss, imgBytes: totalImg },
      budgets,
      withinBudget: {
        js: totalJs / KB <= budgets.jsTotalKb,
        css: totalCss / KB <= budgets.cssTotalKb,
        img: totalImg / KB <= budgets.imgTotalKb
      },
      largestAssets
    };

    const commit = await commitJson('data/reports/performance-budget.json', report);
    return { statusCode: 200, body: JSON.stringify({ ok: true, report, commit }) };
  } catch (err) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(err) }) };
  }
};