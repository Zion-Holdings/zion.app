exports.config = { schedule: '*/15 * * * *' };

exports.handler = async function () {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[content-freshness] ${msg}`); }

  async function fetchText(url) {
    try {
      const r = await fetch(url, { redirect: 'follow' });
      if (!r.ok) return { ok: false, status: r.status, text: '' };
      const text = await r.text();
      return { ok: true, status: r.status, text };
    } catch (e) {
      return { ok: false, status: 0, text: '', error: String(e) };
    }
  }

  function parseSitemap(xml) {
    const entries = [];
    const locs = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
    for (const m of locs) {
      const block = m[1];
      const loc = (block.match(/<loc>(.*?)<\/loc>/) || [])[1];
      const lastmod = (block.match(/<lastmod>(.*?)<\/lastmod>/) || [])[1];
      if (loc) entries.push({ loc: loc.trim(), lastmod: lastmod ? lastmod.trim() : null });
      if (entries.length >= 1000) break;
    }
    return entries;
  }

  async function commitFile(path, content, message) {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-content-freshness'
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
    const site = await fetchText(`${baseUrl}/sitemap.xml`);
    if (!site.ok) return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No sitemap', status: site.status }) };
    const items = parseSitemap(site.text);
    const now = Date.now();
    const analyzed = items.map((it) => {
      let daysOld = null;
      if (it.lastmod) {
        const t = Date.parse(it.lastmod);
        if (!Number.isNaN(t)) daysOld = Math.round((now - t) / (1000 * 60 * 60 * 24));
      }
      return { url: it.loc, lastmod: it.lastmod, daysOld };
    });
    analyzed.sort((a, b) => (b.daysOld || 0) - (a.daysOld || 0));

    const summary = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      totals: { pages: analyzed.length, withoutLastmod: analyzed.filter(x => x.lastmod == null).length },
      topStale: analyzed.slice(0, 50),
    };

    const jsonPath = 'automation/reports/content-freshness.json';
    const mdPath = 'docs/content-freshness.md';
    const jsonContent = JSON.stringify({ ...summary, all: analyzed }, null, 2);
    const mdLines = [
      `# Content Freshness Report`,
      `Generated: ${summary.generatedAt}`,
      `Base URL: ${baseUrl}`,
      '',
      `Pages: ${summary.totals.pages}`,
      `Without <lastmod>: ${summary.totals.withoutLastmod}`,
      '',
      '## Top 50 Stale Pages',
      ...summary.topStale.map(r => `- ${r.url} — ${r.daysOld == null ? 'unknown age' : r.daysOld + ' days old'}`)
    ];
    const msg = `chore(report): content freshness (${new Date().toISOString()})`;
    const [jsonRes, mdRes] = await Promise.all([
      commitFile(jsonPath, jsonContent, msg),
      commitFile(mdPath, mdLines.join('\n'), msg),
    ]);

    return { statusCode: 200, body: JSON.stringify({ ok: true, totals: summary.totals, jsonRes, mdRes }) };
  } catch (e) {
    log(String(e));
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};