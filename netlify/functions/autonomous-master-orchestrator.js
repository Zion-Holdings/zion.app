const path = require('path');
const { execFile } = require('child_process');

function runNodeScript(relPath, args = []) {
  const cwd = path.resolve(__dirname, '..', '..');
  const abs = path.resolve(cwd, relPath);
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = execFile('node', [abs, ...args], { cwd, env: process.env }, (error, stdout, stderr) => {
      resolve({
        script: relPath,
        ok: !error,
        code: error ? error.code : 0,
        durationMs: Date.now() - startedAt,
        stdout: stdout ? stdout.toString() : '',
        stderr: stderr ? stderr.toString() : '',
      });
    });
    child.on('error', () => {});
  });
}

async function triggerAllFunctions() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  if (!baseUrl) return { ok: false, status: 0, error: 'No base URL' };
  try {
    const res = await fetch(`${baseUrl}/.netlify/functions/trigger-all-and-commit`);
    const json = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, json };
  } catch (err) {
    return { ok: false, status: 0, error: String(err) };
  }
}

exports.config = {
  schedule: '*/1 * * * *',
};

exports.handler = async () => {
  const steps = [
    'automation/front-index-auto-advertiser.cjs',
    'automation/frontpage-advertiser.cjs',
    'automation/front-index-directory-builder.cjs',
    'automation/front-futurizer.cjs',
    'automation/homepage-updater.cjs',
    // Ensure README and indices are fresh between cycles
    'scripts/generate-readme.js',
  ];

  const results = [];
  for (const step of steps) {
    try {
      results.push(await runNodeScript(step));
    } catch (err) {
      results.push({ script: step, ok: false, code: -1, durationMs: 0, stdout: '', stderr: String(err) });
    }
  }

  // Trigger all Netlify functions and then sync any changes
  const triggerAll = await triggerAllFunctions();
  let gitSync;
  try {
    gitSync = await runNodeScript('automation/advanced-git-sync.cjs');
  } catch (err) {
    gitSync = { script: 'automation/advanced-git-sync.cjs', ok: false, code: -1, durationMs: 0, stdout: '', stderr: String(err) };
  }

  const ok = [
    ...results.map(r => r.ok || /No changes needed|unchanged|updated/i.test(r.stdout)),
    triggerAll.ok,
    gitSync.ok || /No changes/i.test(gitSync.stdout || ''),
  ].every(Boolean);

  return {
    statusCode: ok ? 200 : 207,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      engine: 'autonomous-master-orchestrator',
      message: ok ? 'Master orchestrator completed' : 'Master orchestrator completed with warnings',
      results,
      triggerAll,
      gitSync,
      timestamp: new Date().toISOString(),
    }),
  };
};