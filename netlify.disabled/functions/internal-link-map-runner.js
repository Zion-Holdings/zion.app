const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8', shell: false });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/30 * * * *',
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

  // Generate sitemap for crawling
  logStep('sitemap:generate', () => runNode('scripts/generate-sitemap.js'));

  // Build search index if available
  try {
    logStep('search:index', () => runNode('scripts/generate-search-index.js'));
  } catch (error) {
    logs.push(`Search index generation skipped: ${String(error)}`);
  }

  // Commit and push
  logStep('git:sync', () => runNode('automation/git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};