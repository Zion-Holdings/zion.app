const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

exports.config = {
  // Run every minute for fastest propagation
  schedule: '*/1 * * * *',
};

exports.handler = async function handler() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const requestTimeoutMs = 15000;
  const concurrency = 10;

  function log(msg) { console.log(`[accelerated-sync] ${msg}`); }

  // Discover functions
  let manifestFunctions = [];
  try {
    const manifest = require('./functions-manifest.json');
    if (Array.isArray(manifest.functions)) manifestFunctions = manifest.functions;
  } catch (_) {
    manifestFunctions = [];
  }

  // Prioritize high-impact front/homepage automations first
  const priority = [
    'ultrafast-front-orchestrator',
    'fast-orchestrator',
    'front-maximizer',
    'front-enhancer',
    'front-index-orchestrator',
    'front-index-futurizer',
    'homepage_advertiser',
    'homepage-updater',
    'homepage-enhancer',
    'marketing-and-features-promo',
    'features-capabilities-benefits-advertiser',
    'fast-front-promoter',
    'hyper-front-index-accelerator',
    'continuous-front-runner',
    'continuous-orchestrator',
  ];

  const fallback = manifestFunctions.filter(Boolean);
  const unique = (arr) => Array.from(new Set(arr));
  const all = unique([...priority, ...fallback])
    .filter((n) => !!n)
    .filter((n) => n !== 'accelerated-sync-orchestrator' && n !== 'trigger-all-and-commit');

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

  async function invokeAll(functionNames) {
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

  function writeArtifacts(results, invoked) {
    const logsDir = path.join(process.cwd(), 'automation', 'logs');
    fs.mkdirSync(logsDir, { recursive: true });
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const latestPath = path.join(logsDir, 'latest-accelerated-sync.json');
    const datedPath = path.join(logsDir, `accelerated-sync-${ts}.json`);
    const summary = {
      triggeredAt: new Date().toISOString(),
      baseUrl,
      totals: {
        attempted: invoked.length,
        ok: results.filter(r => r.ok).length,
        failed: results.filter(r => !r.ok).length,
      },
      results,
    };
    fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
    fs.writeFileSync(datedPath, JSON.stringify(summary, null, 2));

    const stampPath = path.join(process.cwd(), 'automation', 'netlify-build-stamp.txt');
    fs.writeFileSync(stampPath, `Accelerated sync at ${new Date().toISOString()}\n`);
    return [latestPath, datedPath, stampPath];
  }

  function gitCommitAndPush(filesToAdd) {
    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      const items = filesToAdd.map((f) => `'${path.relative(process.cwd(), f)}'`).join(' ');
      execSync(`git add ${items}`, { stdio: 'inherit', shell: true });
      const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
      if (!status) return { committed: false, pushed: false };
      const msg = `chore(cron): accelerated sync orchestrator [skip ci] (${new Date().toISOString()})`;
      execSync(`git commit -m "${msg}"`, { stdio: 'inherit', shell: true });
      const branch = process.env.GIT_BRANCH || execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
      execSync(`git push origin ${branch}`, { stdio: 'inherit', shell: true });
      return { committed: true, pushed: true, branch };
    } catch (err) {
      log(`git error: ${String(err.message || err)}`);
      return { committed: false, pushed: false, error: String(err.message || err) };
    }
  }

  try {
    const targets = all;
    if (targets.length === 0) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, message: 'No functions discovered' }) };
    }

    log(`Invoking ${targets.length} functions...`);
    const results = await invokeAll(targets);
    const files = writeArtifacts(results, targets);
    const git = gitCommitAndPush(files);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ok: true,
        triggeredAt: new Date().toISOString(),
        totals: {
          attempted: targets.length,
          ok: results.filter(r => r.ok).length,
          failed: results.filter(r => !r.ok).length,
        },
        git,
      }),
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: String(err) }) };
  }
}