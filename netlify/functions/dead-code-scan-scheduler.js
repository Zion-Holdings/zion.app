// netlify/functions/dead-code-scan-scheduler.js
exports.config = { schedule: '0 4 * * 1' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/dead-code-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(health): dead code scan report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'dead-code-scan-scheduler' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};