// netlify/functions/autonomous-innovation-studio.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/autonomous-innovation-studio.cjs', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'autonomous-innovation-studio' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};