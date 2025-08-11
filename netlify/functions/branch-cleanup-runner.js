const path = require('path');
const { spawnSync } = require('child_process');

exports.config = {
  schedule: '0 3 * * *',
};

exports.handler = async () => {
  const logs = [];
  const env = process.env || {};
  const token = env.GITHUB_TOKEN || env.GH_TOKEN;
  const repo = env.GITHUB_REPOSITORY;

  if (!token || !repo) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, skipped: true, reason: 'Missing GITHUB_TOKEN and/or GITHUB_REPOSITORY env vars' }) };
  }

  const script = path.resolve(__dirname, '..', '..', 'automation', 'branch-cleanup.cjs');
  const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8', env: { ...env } });
  if (res.stdout) logs.push(res.stdout);
  if (res.stderr) logs.push(res.stderr);

  return { statusCode: 200, body: logs.join('\n') };
};