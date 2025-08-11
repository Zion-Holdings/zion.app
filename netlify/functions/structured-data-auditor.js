exports.config = { schedule: '*/10 * * * *' };

exports.handler = async function () {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[structured-data-auditor] ${msg}`); }

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

  async function fetchSitemapUrls() {
    if (!baseUrl) return [];
    const res = await fetchText(`${baseUrl}/sitemap.xml`);
    if (!res.ok) return [baseUrl];
    const urls = [];
    try {
      const matches = [...res.text.matchAll(/<loc>(.*?)<\/loc>/g)];
      for (const m of matches) {
        const u = m[1].trim();
        if (u) urls.push(u);
        if (urls.length >= 50) break;
      }
    } catch {}
    return urls.length ? urls : [baseUrl];
  }

  function extractJsonLd(html) {
    const scripts = [];
    const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let m;
    while ((m = regex.exec(html)) !== null) {
      const content = m[1].trim();
      scripts.push(content);
    }
    return scripts;
  }

  async function commitFile(path, content, message) {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-structured-data-auditor'
    };
    // get sha if exists
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}
    const body = {
      message,
      content: Buffer.from(content).toString('base64'),
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
    if (!baseUrl) {
      return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No base URL' }) };
    }

    const urls = await fetchSitemapUrls();
    const results = [];
    let pagesWithJsonLd = 0;

    for (const url of urls) {
      const res = await fetchText(url);
      if (!res.ok) {
        results.push({ url, ok: false, status: res.status });
        continue;
      }
      const blocks = extractJsonLd(res.text);
      const parsed = [];
      for (const block of blocks) {
        try { parsed.push(JSON.parse(block)); } catch {
          // try array-wrapped recovery
          try { parsed.push(JSON.parse(block.replace(/\u0000/g, ''))); } catch {}
        }
      }
      if (parsed.length > 0) pagesWithJsonLd += 1;
      results.push({ url, ok: true, status: res.status, jsonLdCount: parsed.length });
    }

    const summary = {
      auditedAt: new Date().toISOString(),
      baseUrl,
      totals: {
        pages: urls.length,
        pagesWithJsonLd,
        pagesMissingJsonLd: urls.length - pagesWithJsonLd,
      },
      results,
    };

    const jsonContent = JSON.stringify(summary, null, 2);
    const mdLines = [
      `# Structured Data Report`,
      `Generated: ${summary.auditedAt}`,
      `Base URL: ${baseUrl}`,
      '',
      `- Pages: ${urls.length}`,
      `- With JSON-LD: ${pagesWithJsonLd}`,
      `- Missing JSON-LD: ${urls.length - pagesWithJsonLd}`,
      '',
      '## Pages',
      ...results.map(r => `- ${r.url} — JSON-LD blocks: ${r.jsonLdCount || 0}`)
    ];

    const jsonPath = 'automation/reports/structured-data-report.json';
    const mdPath = 'docs/structured-data-report.md';
    const msg = `chore(report): structured data audit (${new Date().toISOString()})`;

    const [jsonRes, mdRes] = await Promise.all([
      commitFile(jsonPath, jsonContent, msg),
      commitFile(mdPath, mdLines.join('\n'), msg),
    ]);

    return { statusCode: 200, body: JSON.stringify({ ok: true, jsonRes, mdRes, totals: summary.totals }) };
  } catch (e) {
    log(String(e));
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};