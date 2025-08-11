// netlify/functions/cloud_orchestrator.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/automation-guardian-10min.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'cloud_orchestrator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '*/20 * * * *',
};