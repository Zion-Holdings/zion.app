exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[content-gap] ${msg}`); }

  async function fetchText(url, timeoutMs = 15000) {
    if (!url) return '';
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(t);
      if (!res.ok) return '';
      return await res.text();
    } catch (e) {
      clearTimeout(t);
      return '';
    }
  }

  function extractUrlsFromSitemap(xml) {
    const urls = [];
    if (!xml) return urls;
    const re = /<loc>([^<]+)<\/loc>/g;
    let m;
    while ((m = re.exec(xml)) !== null) urls.push(m[1]);
    return Array.from(new Set(urls)).sort();
  }

  function detectMissingCanonicalPages(urls) {
    const present = new Set(urls.map(u => new URL(u).pathname.replace(/\/$/, '')));
    const candidates = [
      '/', '/pricing', '/docs', '/docs/getting-started', '/blog', '/changelog', '/roadmap', '/about', '/careers', '/contact', '/privacy', '/terms', '/status', '/api', '/developers'
    ];
    const missing = candidates.filter(p => !present.has(p));
    return { present: Array.from(present).sort(), missing };
  }

  function buildMarkdownReport(baseUrl, summary) {
    const ts = new Date().toISOString();
    const lines = [];
    lines.push(`# Content Gap Analysis`);
    lines.push('');
    lines.push(`Generated at: ${ts}`);
    lines.push(`Base URL: ${baseUrl || '(unknown)'}`);
    lines.push('');
    lines.push('## Missing High-Value Pages');
    if (summary.missing.length === 0) {
      lines.push('- None — all canonical pages detected.');
    } else {
      for (const p of summary.missing) lines.push(`- ${p}`);
    }
    lines.push('');
    lines.push('## Present Paths Sample');
    for (const p of summary.present.slice(0, 50)) lines.push(`- ${p}`);
    return lines.join('\n');
  }

  async function githubUpsert(path, contentStr, message) {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN' };
    const content = Buffer.from(contentStr).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-function-content-gap'
    };
    // read sha if exists
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}

    const body = {
      message: message || `chore: update content gap report (${new Date().toISOString()})`,
      content,
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok;
    const status = putRes.status;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status, error };
  }

  try {
    const sitemapXml = await fetchText(baseUrl ? `${baseUrl}/sitemap.xml` : '');
    const urls = extractUrlsFromSitemap(sitemapXml);
    const summary = detectMissingCanonicalPages(urls);

    const json = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      totalUrls: urls.length,
      present: summary.present,
      missing: summary.missing
    };

    const md = buildMarkdownReport(baseUrl, summary);

    let commitResults = {};
    if (githubToken) {
      const jsonPath = 'public/reports/content-gap-analysis.json';
      const mdPath = 'public/reports/content-gap-analysis.md';
      const [r1, r2] = await Promise.all([
        githubUpsert(jsonPath, JSON.stringify(json, null, 2), 'chore: update content gap analysis (json)'),
        githubUpsert(mdPath, md, 'chore: update content gap analysis (md)')
      ]);
      commitResults = { json: r1, markdown: r2 };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ok: true,
        baseUrl,
        totals: { urls: urls.length },
        missing: summary.missing,
        committed: Boolean(githubToken),
        commitResults
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};