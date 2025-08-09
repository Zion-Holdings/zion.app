const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */6 * * *', // every 6 hours
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

  // Ensure canonical URL available to scripts
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  // LinkedIn (standard)
  logStep('linkedin:analyze', () => runNode('automation/linkedin-marketing-analyzer.cjs'));
  logStep('linkedin:factory', () => runNode('automation/linkedin-marketing-factory.cjs'));
  logStep('linkedin:post-once', () => runNode('automation/linkedin-marketing-orchestrator.cjs', ['once']));

  // LinkedIn Pro
  logStep('linkedin-pro:once', () => runNode('automation/linkedin-pro-orchestrator.cjs', ['once']));

  // Instagram
  logStep('instagram:analyze', () => runNode('automation/instagram-marketing-analyzer.cjs'));
  logStep('instagram:factory', () => runNode('automation/instagram-marketing-factory.cjs'));
  logStep('instagram:post-once', () => runNode('automation/instagram-marketing-orchestrator.cjs', ['once']));

  return { statusCode: 200, body: logs.join('\n') };
};


