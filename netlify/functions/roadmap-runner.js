const { execSync } = require('child_process');

exports.config = {
  schedule: '*/10 * * * *',
};

exports.handler = async () => {
  try {
    execSync('node automation/roadmap-orchestrator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/advanced-git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'roadmap-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};