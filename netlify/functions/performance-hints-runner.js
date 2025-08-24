exports.config = { schedule: '*/15 * * * *' };

exports.handler = async function () {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function absolute(u) { if (!u) return null; if (u.startsWith('http')) return u; if (!baseUrl) return null; return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`; }

  async function head(url) {
    try {
      const r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      const len = r.headers.get('content-length');
      return { ok: r.ok, status: r.status, size: len ? parseInt(len, 10) : null };
    } catch (e) {
      return { ok: false, status: 0, error: String(e) };
    }
  }

  async function commitFile(path, content, message) {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const headers = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-performance-hints' };
    let sha;
    try { const r = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers }); if (r.ok) { const j = await r.json(); sha = j.sha; } } catch {}
    const body = { message, content: Buffer.from(content).toString('base64'), branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok; const status = putRes.status; let error; if (!ok) { try { error = await putRes.text(); } catch (e) { error = String(e); } }
    return { ok, status, error };
  }

  try {
    if (!baseUrl) return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };
    const res = await fetch(baseUrl);
    if (!res.ok) return { statusCode: 200, body: JSON.stringify({ ok: false, error: `Fetch ${res.status}` }) };
    const html = await res.text();

    const imgSrcs = Array.from(new Set([...(html.matchAll(/<img[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean)));
    const scriptSrcs = Array.from(new Set([...(html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi))].map(m => absolute(m[1])).filter(Boolean)));

    const checks = [];
    for (const src of [...imgSrcs, ...scriptSrcs].slice(0, 60)) {
      const r = await head(src);
      checks.push({ url: src, size: r.size, status: r.status });
    }

    const large = checks.filter(c => typeof c.size === 'number' && c.size > 200 * 1024).sort((a,b) => (b.size||0)-(a.size||0));
    const summary = { baseUrl, generatedAt: new Date().toISOString(), totals: { assetsChecked: checks.length, large: large.length }, large: large.slice(0, 50) };

    const jsonPath = 'automation/reports/performance-hints.json';
    const mdPath = 'docs/performance-hints.md';
    const jsonContent = JSON.stringify({ ...summary, all: checks }, null, 2);
    const mdLines = [
      '# Performance Hints',
      `Generated: ${summary.generatedAt}`,
      `Base URL: ${baseUrl}`,
      '',
      `Assets checked: ${summary.totals.assetsChecked}`,
      `Large assets (>200KB): ${summary.totals.large}`,
      '',
      '## Large Assets',
      ...summary.large.map(r => `- ${r.url} — ${(r.size/1024).toFixed(0)} KB`)
    ];
    const msg = `chore(report): performance hints (${new Date().toISOString()})`;
    const [jsonRes, mdRes] = await Promise.all([
      commitFile(jsonPath, jsonContent, msg),
      commitFile(mdPath, mdLines.join('\n'), msg),
    ]);

    return { statusCode: 200, body: JSON.stringify({ ok: true, totals: summary.totals, jsonRes, mdRes }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};