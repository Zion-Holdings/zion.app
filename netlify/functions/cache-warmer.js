exports.handler = async function(event, context) {
  const path = require('path');
  const fs = require('fs');
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const timeoutMs = 15000;
  const concurrency = 12;

  function log(msg) { console.log(`[cache-warmer] ${msg}`); }

  const ROOT = path.join(__dirname, '..', '..');

  function readContentRegistry() {
    try {
      const regPath = path.join(ROOT, 'public', 'automation', 'content-registry.json');
      const json = JSON.parse(fs.readFileSync(regPath, 'utf8'));
      const routes = Array.isArray(json.pages) ? json.pages.map(p => p.route).filter(Boolean) : [];
      return routes;
    } catch (e) {
      log(`No content registry or failed to read: ${e.message}`);
      return ['/','/automation','/main/front','/reports/seo','/reports/ai-trends','/newsroom'];
    }
  }

  function getFunctionNames() {
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) return manifest.functions.filter(n => n !== 'cache-warmer');
    } catch (e) {}
    // Fallback to a small curated list
    return [
      'front-enhancer',
      'frontpage-enhancer',
      'homepage_advertiser',
      'cloud_orchestrator',
      'readme-advertiser',
      'features-capabilities-benefits-advertiser'
    ];
  }

  async function fetchWithTimeout(url) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    const startedAt = Date.now();
    try {
      const res = await fetch(url, { signal: controller.signal });
      const ms = Date.now() - startedAt;
      clearTimeout(id);
      return { url, ok: res.ok, status: res.status, ms };
    } catch (e) {
      const ms = Date.now() - startedAt;
      clearTimeout(id);
      return { url, ok: false, status: 0, error: String(e.message || e), ms };
    }
  }

  async function warmUrls(urls) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < urls.length) {
        const u = urls[index++];
        results.push(await fetchWithTimeout(u));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, urls.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  async function commitFile(repoPath, contentObj, messageSuffix = '') {
    if (!githubToken) return { ok: false, status: 0, error: 'No GITHUB_TOKEN provided' };
    const content = Buffer.from(JSON.stringify(contentObj, null, 2) + '\n').toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-cache-warmer'
    };
    // get sha if exists
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(repoPath)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}
    const body = {
      message: `chore(cache): warmup report ${messageSuffix} (${new Date().toISOString()})`,
      content,
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(repoPath)}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });
    const ok = putRes.ok;
    const status = putRes.status;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status, error };
  }

  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const routes = readContentRegistry();

    const pageUrls = baseUrl ? routes.map(r => `${baseUrl}${r}`) : [];
    const functionNames = getFunctionNames();
    const functionUrls = baseUrl ? functionNames.map(n => `${baseUrl}/.netlify/functions/${n}`) : [];

    const warmedPages = baseUrl ? await warmUrls(pageUrls) : [];
    const warmedFunctions = baseUrl ? await warmUrls(functionUrls) : [];

    const summary = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      counts: {
        pages: warmedPages.length,
        functions: warmedFunctions.length
      },
      ok: warmedPages.filter(x => x.ok).length + warmedFunctions.filter(x => x.ok).length,
      failed: warmedPages.filter(x => !x.ok).length + warmedFunctions.filter(x => !x.ok).length,
      pages: warmedPages,
      functions: warmedFunctions
    };

    // Commit reports if possible
    const dirLatest = 'data/reports/cache-warm/latest.json';
    const dirHistory = `data/reports/cache-warm/cache-warm-${timestamp}.json`;
    let commitLatest = { ok: false }, commitHistory = { ok: false };
    if (githubToken) {
      commitHistory = await commitFile(dirHistory, summary, '[history]');
      commitLatest = await commitFile(dirLatest, summary, '[latest]');
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, summary, commitLatest, commitHistory })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(err) }) };
  }
};