const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  // Daily at 02:00
  schedule: '0 2 * * *',
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

  // Generate sitemap, search index, and README
  logStep('sitemap:generate', () => runNode('scripts/generate-sitemap.js'));
  logStep('search-index:generate', () => runNode('scripts/generate-search-index.js'));
  logStep('readme:generate', () => runNode('scripts/generate-readme.js'));

  return { statusCode: 200, body: logs.join('\n') };
};