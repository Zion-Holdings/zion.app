const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  // Twice daily
  schedule: '0 */12 * * *',
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

  // Drive layout/visual evolution
  logStep('design:cycle', () => runNode('automation/launch-design-improvement-automation.js', ['cycle']));
  logStep('design:visual', () => runNode('automation/launch-design-improvement-automation.js', ['visual-design']));

  // Orchestrated design improvements
  logStep('design:orchestrator', () => runNode('automation/design-orchestrator.cjs'));
  logStep('ui-evolution:factory', () => runNode('automation/ui-evolution-launcher.js', ['factory']));

  return { statusCode: 200, body: logs.join('\n') };
};