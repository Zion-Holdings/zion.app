// netlify/functions/auto-scheduler.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/auto-scheduler.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'auto-scheduler' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};