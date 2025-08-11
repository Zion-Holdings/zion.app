const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '17 */2 * * *', // every 2 hours offset
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Regenerate sitemap
  logStep('sitemap:generate', () => runNode('scripts/generate-sitemap.js'));

  // Ping search engines
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://ziontechgroup.com').replace(/\/$/, '');
  try {
    const sitemapUrl = `${baseUrl}/sitemap.xml`;
    const pingUrls = [
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    ];
    for (const pingUrl of pingUrls) {
      await fetch(pingUrl);
      logs.push(`Pinged: ${pingUrl}`);
    }
  } catch (e) {
    logs.push(`Ping error: ${String(e)}`);
  }

  // Attempt to push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};