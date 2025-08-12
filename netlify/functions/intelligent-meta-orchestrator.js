// netlify/functions/intelligent-meta-orchestrator.js
const path = require('path');

exports.handler = async function() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const requestTimeoutMs = 15000;
  const concurrency = 8;

  function pickPriority(names) {
    // Higher priority for orchestrators and front/homepage enhancers
    const priorityRules = [
      { re: /orchestrator/i, weight: 5 },
      { re: /front|homepage|home|index/i, weight: 4 },
      { re: /enhancer|advertiser|promoter|scheduler/i, weight: 3 },
      { re: /seo|a11y|security|health|sitemap|docs|topics/i, weight: 2 },
    ];
    return names
      .filter(n => n && typeof n === 'string' && n !== 'intelligent-meta-orchestrator' && n !== 'trigger-all-and-commit')
      .map(name => ({
        name,
        score: priorityRules.reduce((acc, r) => acc + (r.re.test(name) ? r.weight : 0), 0)
      }))
      .sort((a, b) => b.score - a.score)
      .map(x => x.name);
  }

  async function invoke(name) {
    if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
    const controller = new AbortController();
    const url = `${baseUrl}/.netlify/functions/${name}`;
    const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
    try {
      const res = await fetch(url, { method: 'GET', signal: controller.signal });
      clearTimeout(timeout);
      return { name, status: res.status, ok: res.ok };
    } catch (err) {
      clearTimeout(timeout);
      return { name, status: 0, ok: false, error: err.message };
    }
  }

  async function invokeSome(functionNames) {
    const results = [];
    let index = 0;
    async function worker() {
      while (index < functionNames.length) {
        const current = functionNames[index++];
        results.push(await invoke(current));
      }
    }
    const workers = Array.from({ length: Math.min(concurrency, functionNames.length) }, () => worker());
    await Promise.all(workers);
    return results;
  }

  function runGitSync() {
    try {
      const script = path.resolve(process.cwd(), 'automation', 'git-sync.cjs');
      const { spawnSync } = require('child_process');
      const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8' });
      return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
    } catch (e) {
      return { status: 1, stderr: String(e) };
    }
  }

  try {
    let functionNames = [];
    try {
      const manifest = require('./functions-manifest.json');
      if (Array.isArray(manifest.functions)) functionNames = manifest.functions;
    } catch (_) {}

    if (functionNames.length === 0) {
      return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'No functions found in manifest' }) };
    }

    const prioritized = pickPriority(functionNames);
    // Trigger top 20% first, then next 30%
    const topCount = Math.max(1, Math.floor(prioritized.length * 0.2));
    const nextCount = Math.max(0, Math.floor(prioritized.length * 0.3));
    const top = prioritized.slice(0, topCount);
    const next = prioritized.slice(topCount, topCount + nextCount);

    const resultsTop = await invokeSome(top);
    const resultsNext = await invokeSome(next);

    const git = runGitSync();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orchestrator: 'intelligent-meta-orchestrator',
        triggeredAt: new Date().toISOString(),
        totals: {
          considered: functionNames.length,
          topTriggered: resultsTop.length,
          nextTriggered: resultsNext.length,
          ok: [...resultsTop, ...resultsNext].filter(r => r.ok).length,
          failed: [...resultsTop, ...resultsNext].filter(r => !r.ok).length
        },
        gitSync: { status: git.status },
        results: { top: resultsTop, next: resultsNext }
      })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(err) }) };
  }
};