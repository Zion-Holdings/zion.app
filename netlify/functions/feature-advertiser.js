const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '17 */8 * * *', // every 8 hours offset
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

  // Generate feature marketing content
  logStep('feature-marketing:analyze', () => runNode('automation/feature-marketing-analyzer.cjs'));
  logStep('feature-marketing:factory', () => runNode('automation/feature-marketing-factory.cjs'));

  // Apply homepage promo and links
  logStep('homepage-promo:apply', () => runNode('automation/homepage-promo-applier.cjs'));

  // Push changes if any
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};