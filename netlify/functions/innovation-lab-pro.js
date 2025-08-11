const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/10 * * * *' };

exports.handler = async () => {
  try {
    // Leverage existing innovation orchestrator
    run('node automation/innovation-orchestrator.cjs || true');
    run('node automation/git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'innovation-lab-pro' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};