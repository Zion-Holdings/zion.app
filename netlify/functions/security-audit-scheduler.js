// netlify/functions/security-audit-scheduler.js
exports.config = { schedule: '30 3 * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/security-audit.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(security): update audit report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'security-audit-scheduler' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};