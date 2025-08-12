// netlify/functions/autonomous-cloud-brain.js
// An intelligent, ultra-fast orchestrator that selectively triggers key automations
// and ensures repository sync via build hook or GitHub API, fully cloud-native.

const fs = require('fs');

const DEFAULT_TIMEOUT_MS = 15000;
const MAX_CONCURRENCY = 12;

function getBaseUrl() {
  const raw = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '';
  return (raw || '').replace(/\/$/, '');
}

function getBuildHook() {
  return process.env.NETLIFY_BUILD_HOOK_URL || process.env.BUILD_HOOK_URL || '';
}

function getGitHubConfig() {
  return {
    token: process.env.GITHUB_TOKEN || '',
    repo: process.env.GITHUB_REPO || 'Zion-Holdings/zion.app',
    branch: process.env.GIT_BRANCH || 'main'
  };
}

function log(message) {
  console.log(`[autonomous-cloud-brain] ${message}`);
}

function loadFunctionsList() {
  // Prefer manifest; fall back to directory listing
  try {
    const manifestPath = require.resolve('./functions-manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (manifest && Array.isArray(manifest.functions)) return manifest.functions;
  } catch (err) {
    log(`manifest load failed: ${String(err && err.message || err)}`);
  }
  try {
    const dir = __dirname;
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.js'))
      .map((f) => f.replace(/\.js$/, ''))
      .filter((n) => !n.startsWith('_'));
  } catch {
    return [];
  }
}

function selectPriorityFunctions(all) {
  const exclude = new Set(['trigger-all-and-commit', 'autonomous-cloud-brain']);
  const wantFirst = [
    // Front and homepage
    'front-enhancer',
    'frontpage-enhancer',
    'homepage-updater',
    'home-visionary-expander',
    'front-visionary-expander',
    'front-index-orchestrator',
    'fast-front-promoter',
    'front-maximizer',

    // Health and discovery
    'sitemap_runner',
    'link-and-health-scheduler',

    // Intelligence
    'ai-changelog-runner',
    'docs-index-runner',
    'repo-knowledge-graph-runner'
  ];

  const exist = new Set(all);
  const prioritized = wantFirst.filter((n) => exist.has(n) && !exclude.has(n));
  // Add a few more lightweight helpers if available
  const optional = ['ultrafast-orchestrator', 'continuous-orchestrator', 'ultrafast-front-orchestrator'];
  for (const name of optional) {
    if (exist.has(name) && !exclude.has(name)) prioritized.push(name);
  }
  // De-duplicate
  return Array.from(new Set(prioritized));
}

async function invokeFunction(baseUrl, name, timeoutMs = DEFAULT_TIMEOUT_MS) {
  if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
  const controller = new AbortController();
  const url = `${baseUrl}/.netlify/functions/${name}`;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'GET', signal: controller.signal });
    clearTimeout(timeout);
    return { name, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timeout);
    return { name, status: 0, ok: false, error: String(err && err.message || err) };
  }
}

async function invokeMany(baseUrl, names, concurrency = MAX_CONCURRENCY) {
  const results = [];
  let index = 0;
  async function worker() {
    while (index < names.length) {
      const current = names[index++];
      results.push(await invokeFunction(baseUrl, current));
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, names.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function triggerBuildHook(url) {
  if (!url) return { ok: false, status: 0, error: 'No build hook URL' };
  try {
    const res = await fetch(url, { method: 'POST' });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, status: 0, error: String(err && err.message || err) };
  }
}

async function commitStampViaGitHub({ token, repo, branch }) {
  if (!token) return { ok: false, error: 'No GITHUB_TOKEN provided' };
  const path = 'automation/netlify-build-stamp.txt';
  const content = Buffer.from(`Autonomous Cloud Brain: ${new Date().toISOString()}\n`).toString('base64');
  const headers = {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json',
    'User-Agent': 'autonomous-cloud-brain'
  };
  // Get current SHA if exists
  let sha = undefined;
  try {
    const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`, { headers });
    if (getRes.ok) {
      const json = await getRes.json();
      sha = json.sha;
    }
  } catch (err) {
    log(`github get content failed: ${String(err && err.message || err)}`);
  }
  const body = {
    message: `chore: autonomous brain heartbeat (${new Date().toISOString()})`,
    content,
    branch,
    sha
  };
  const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}`, {
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

exports.handler = async function() {
  const baseUrl = getBaseUrl();
  const buildHook = getBuildHook();
  const gh = getGitHubConfig();

  log(`baseUrl=${baseUrl || 'n/a'}`);

  const allFunctions = loadFunctionsList();
  const selected = selectPriorityFunctions(allFunctions);
  log(`selected=${selected.join(', ')}`);

  try {
    const results = await invokeMany(baseUrl, selected);

    // Sync the repository quickly via build hook; if not available, commit stamp via GitHub
    let syncResult = { method: 'none' };
    if (buildHook) {
      syncResult = { method: 'build_hook', ...(await triggerBuildHook(buildHook)) };
    } else if (gh.token) {
      syncResult = { method: 'github_commit', ...(await commitStampViaGitHub(gh)) };
    } else {
      syncResult = { method: 'none', ok: false, error: 'No NETLIFY_BUILD_HOOK_URL or GITHUB_TOKEN' };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ok: true,
        triggeredAt: new Date().toISOString(),
        totals: {
          attempted: selected.length,
          ok: results.filter((r) => r.ok).length,
          failed: results.filter((r) => !r.ok).length
        },
        syncResult,
        results
      })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: false, error: String(err) }) };
  }
};