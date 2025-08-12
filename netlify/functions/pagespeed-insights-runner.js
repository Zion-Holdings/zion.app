const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runGitSync() {
  const abs = path.resolve(__dirname, '..', '..', 'automation', 'advanced-git-sync.cjs');
  const res = spawnSync('node', [abs], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.handler = async () => {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const apiKey = process.env.PAGESPEED_API_KEY || '';
  const url = `${baseUrl || 'https://ziontechgroup.com'}`;
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}${apiKey ? `&key=${apiKey}` : ''}`;

  const logs = [];
  try {
    const res = await fetch(endpoint);
    const json = await res.json();
    const outDir = path.resolve(__dirname, '..', '..', 'public', 'reports', 'pagespeed');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify({ generatedAt: new Date().toISOString(), url, data: json }, null, 2));
    logs.push('PageSpeed report written.');
  } catch (e) {
    logs.push('Error fetching PageSpeed: ' + String(e));
  }

  const sync = runGitSync();
  if (sync.stdout) logs.push(sync.stdout);
  if (sync.stderr) logs.push(sync.stderr);

  return { statusCode: 200, body: logs.join('\n') };
};