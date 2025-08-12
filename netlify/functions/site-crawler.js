const path = require('path');
const { spawnSync } = require('child_process');

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return run('node', [abs, ...args]);
}

exports.config = {
  schedule: '0 */4 * * *', // every 4 hours
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
  } catch {
    logs.push('Search index generation skipped');
  }

  // Commit and push
  logStep('git:sync', () => runNode('automation/git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};