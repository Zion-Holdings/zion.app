exports.handler = async function() {
  const { spawnSync } = require('child_process');
  const fs = require('fs');
  const path = require('path');

  function run(cmd, opts = {}) {
    const res = spawnSync(cmd, { stdio: 'pipe', shell: true, encoding: 'utf8', ...opts });
    return { code: res.status || 0, out: res.stdout || '', err: res.stderr || '' };
  }

  function decideTargets(changed) {
    const names = new Set();
    if (/pages\//.test(changed) || /components\//.test(changed)) {
      names.add('front-enhancer');
      names.add('front-index-orchestrator');
      names.add('front-maximizer');
    }
    if (/automation\//.test(changed)) {
      names.add('continuous-orchestrator');
      names.add('ultrafast-orchestrator');
    }
    if (/public\//.test(changed) || /styles\//.test(changed)) {
      names.add('image-optimizer-runner');
      names.add('og-image-update-runner');
    }
    if (/docs\//.test(changed)) {
      names.add('docs-index-runner');
      names.add('docs-search-index-runner');
      names.add('readme-advertiser');
    }
    if (/netlify\//.test(changed)) {
      names.add('trigger-all-and-commit');
    }
    names.add('knowledge-pack-runner');
    return Array.from(names);
  }

  try {
    const diff = run('git fetch --all --prune && git diff --name-only origin/main...HEAD || git diff --name-only');
    const changedFiles = diff.out.trim();
    const targets = decideTargets(changedFiles);

    const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');

    async function invoke(name) {
      if (!baseUrl) return { name, status: 0, ok: false, error: 'No base URL' };
      const controller = new AbortController();
      const url = `${baseUrl}/.netlify/functions/${name}`;
      const timeout = setTimeout(() => controller.abort(), 12000);
      try {
        const res = await fetch(url, { method: 'GET', signal: controller.signal });
        clearTimeout(timeout);
        return { name, status: res.status, ok: res.ok };
      } catch (err) {
        clearTimeout(timeout);
        return { name, status: 0, ok: false, error: err.message };
      }
    }

    const results = [];
    for (const t of targets) {
      // eslint-disable-next-line no-await-in-loop
      results.push(await invoke(t));
    }

    run('node automation/advanced-git-sync.cjs');

    const artifactDir = path.resolve(__dirname, '..', '..', 'public', 'automation');
    fs.mkdirSync(artifactDir, { recursive: true });
    const outPath = path.join(artifactDir, 'adaptive-orchestrator-last.json');
    fs.writeFileSync(outPath, JSON.stringify({
      generatedAt: new Date().toISOString(),
      baseUrl,
      changedFiles: changedFiles.split('\n').filter(Boolean),
      targets,
      results
    }, null, 2));

    return { statusCode: 200, body: JSON.stringify({ ok: true, targets, results }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};