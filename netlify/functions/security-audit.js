// netlify/functions/security-audit.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/security-audit.cjs || true', { stdio: 'inherit', shell: true });
    execSync('npm audit --audit-level=high || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(security): audit artifacts [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'security-audit' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};