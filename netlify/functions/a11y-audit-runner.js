const { execSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
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

  process.env.CANONICAL_URL = process.env.CANONICAL_URL || process.env.SITE_URL || process.env.URL || 'https://ziontechgroup.com';

  // If there are any local link fixers, run them (optional best-effort)
  try {
    logStep('links:fixer', () => runNode('automation/site-link-fixer.cjs'));
  } catch (error) {
    logs.push(`No site-link-fixer found or failed gracefully: ${String(error)}`);
  }

  // Commit and push any changes
  logStep('git:sync', () => runNode('automation/git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};