exports.config = { schedule: '*/1 * * * *' };

exports.handler = async function () {
  const path = require('path');
  const fs = require('fs');
  const fetchFn = (typeof fetch !== 'undefined') ? fetch : (url, opts) => import('node-fetch').then(m => m.default(url, opts));

  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';
  const requestTimeoutMs = 12000;
  const maxConcurrent = 8;
  const nowIso = new Date().toISOString();

  function log(msg) { console.log(`[meta-orchestrator] ${msg}`); }

  function listFunctionNames() {
    const names = new Set();
    // 1) Try manifest
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) manifest.functions.forEach(n => names.add(n));
    } catch (e) {
      log('manifest not available or invalid, falling back to dir scan');
    }
    // 2) Fallback: scan directory
    try {
      const dir = __dirname;
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isFile()) continue;
        const ext = path.extname(entry.name);
        if (!['.js', '.ts', '.mjs', '.cjs'].includes(ext)) continue;
        const base = path.basename(entry.name, ext);
        names.add(base);
      }
    } catch (e) {
      log(`dir scan failed: ${String(e)}`);
    }
    // Exclusions to avoid recursion or heavy jobs every minute
    ['autonomous-meta-orchestrator', 'trigger-all-and-commit'].forEach(n => names.delete(n));
    return Array.from(names);
  }

  function prioritize(names) {
    const critical = new Set([
      'front-index-orchestrator',
      'front-enhancer',
      'homepage-updater',
      'homepage_advertiser',
      'features-capabilities-benefits-advertiser',
      'hyper-front-index-accelerator',
      'continuous-front-runner',
      'fast-front-promoter',
      'ultrafast-front-orchestrator',
      'continuous-orchestrator'
    ]);
    const preferred = names.filter(n => critical.has(n));
    const remaining = names.filter(n => !critical.has(n));
    // Interleave a few non-critical to keep broader coverage
    const mixed = [];
    let i = 0, j = 0;
    while (i < preferred.length || j < remaining.length) {
      if (i < preferred.length) mixed.push(preferred[i++]);
      if (i % 2 === 0 && j < remaining.length) mixed.push(remaining[j++]);
      if (mixed.length >= 20) break; // bound per-minute work
    }
    return mixed.length ? mixed : names.slice(0, Math.min(20, names.length));
  }

  async function invoke(name) {
    if (!baseUrl) return { name, ok: false, status: 0, error: 'no-base-url' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const t = setTimeout(() => controller.abort(), requestTimeoutMs);
    const startedAt = Date.now();
    try {
      const res = await fetchFn(url, { method: 'GET', signal: controller.signal });
      clearTimeout(t);
      const durationMs = Date.now() - startedAt;
      return { name, ok: res.ok, status: res.status, durationMs };
    } catch (e) {
      clearTimeout(t);
      const durationMs = Date.now() - startedAt;
      return { name, ok: false, status: 0, error: String(e), durationMs };
    }
  }

  async function runConcurrent(names, limit) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < names.length) {
        const current = names[index++];
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(limit, names.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  async function commitStatusArtifact(results) {
    if (!githubToken) return { ok: false, error: 'no-github-token' };
    const contentJson = {
      generatedAt: nowIso,
      totals: {
        attempted: results.length,
        ok: results.filter(r => r.ok).length,
        failed: results.filter(r => !r.ok).length
      },
      results
    };
    const content = Buffer.from(JSON.stringify(contentJson, null, 2)).toString('base64');
    const pathRel = 'automation/autonomous-meta-orchestrator.json';
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-meta-orchestrator'
    };
    // fetch current sha if exists
    let sha;
    try {
      const getRes = await fetchFn(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(pathRel)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const j = await getRes.json();
        sha = j.sha;
      }
    } catch {}
    const body = {
      message: `chore(meta): autonomous meta orchestrator run (${nowIso})`,
      content,
      branch: githubBranch,
      sha
    };
    const putRes = await fetchFn(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(pathRel)}`, {
      method: 'PUT', headers, body: JSON.stringify(body)
    });
    return { ok: putRes.ok, status: putRes.status, error: putRes.ok ? undefined : (await putRes.text().catch(() => '')) };
  }

  const all = listFunctionNames();
  const plan = prioritize(all);
  const results = await runConcurrent(plan, maxConcurrent);
  const commitResult = await commitStatusArtifact(results);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      runAt: nowIso,
      baseUrl,
      planned: plan,
      totals: {
        attempted: plan.length,
        ok: results.filter(r => r.ok).length,
        failed: results.filter(r => !r.ok).length
      },
      commitResult
    })
  };
};