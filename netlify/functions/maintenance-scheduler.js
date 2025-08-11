const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/30 * * * *', // every 30 minutes
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

  // SaaS services
  logStep('saas-services:once', () => runNode('automation/saas-services-orchestrator.cjs', ['once']));

  // Feature marketing
  logStep('feature-marketing:once', () => runNode('automation/feature-marketing-orchestrator.cjs', ['once']));

  // Homepage promo
  logStep('homepage-promo:once', () => runNode('automation/homepage-promo-orchestrator.cjs', ['once']));

  // Site links and promo
  logStep('site-link:once', () => runNode('automation/site-link-orchestrator.cjs', ['once']));
  logStep('site-promo:once', () => runNode('automation/site-promo-orchestrator.cjs', ['once']));

  return { statusCode: 200, body: logs.join('\n') };
};


