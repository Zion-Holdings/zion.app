// netlify/functions/ux-drift-detector.js
exports.config = { schedule: '*/15 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/ux-drift-detector.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(ux): update UX drift report [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'ux-drift-detector' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};