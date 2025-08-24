const cheerio = require('cheerio');

exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const githubToken = process.env.GITHUB_TOKEN || '';

  const maxPages = 60;

  function log(message) { console.log(`[internal-link-graph] ${message}`); }

  async function commitJson(path, obj, message) {
    if (!githubToken) return { ok: false, reason: 'No GITHUB_TOKEN provided; skipping commit', path };
    const content = Buffer.from(JSON.stringify(obj, null, 2)).toString('base64');
    const headers = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-function' };
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) { const json = await getRes.json(); sha = json.sha; }
    } catch {}
    const body = { message, content, branch: githubBranch, sha };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok;
    let error; if (!ok) { try { error = await putRes.text(); } catch (e) { error = String(e); } }
    return { ok, status: putRes.status, error, path };
  }

  function normalizeUrl(href) {
    try {
      const u = new URL(href, baseUrl);
      return u.origin + u.pathname.replace(/\/$/, '');
    } catch { return null; }
  }

  async function fetchHtml(url) {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`Fetch ${url} -> ${res.status}`);
    return res.text();
  }

  function extractInternalLinks(html) {
    const $ = cheerio.load(html);
    const hrefs = new Set();
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      const abs = normalizeUrl(href);
      if (abs && abs.startsWith(baseUrl)) hrefs.add(abs);
    });
    return Array.from(hrefs);
  }

  try {
    if (!baseUrl) return { statusCode: 400, body: JSON.stringify({ error: 'Base URL not detected' }) };

    const start = baseUrl;
    const queue = [start];
    const visited = new Set();
    const edges = [];

    while (queue.length && visited.size < maxPages) {
      const current = queue.shift();
      if (!current || visited.has(current)) continue;
      visited.add(current);
      // eslint-disable-next-line no-await-in-loop
      let html; try { html = await fetchHtml(current); } catch { continue; }
      const links = extractInternalLinks(html);
      for (const l of links) {
        edges.push([current, l]);
        if (!visited.has(l) && queue.length + visited.size < maxPages) queue.push(l);
      }
    }

    const nodes = Array.from(visited);
    const graph = { generatedAt: new Date().toISOString(), nodes, edges };

    const commitRes = await commitJson('public/automation/internal-link-graph.json', graph, `report: internal link graph (${graph.generatedAt})`);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true, nodes: nodes.length, edges: edges.length, commit: commitRes }) };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};