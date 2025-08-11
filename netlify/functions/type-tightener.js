// netlify/functions/type-tightener.js
exports.config = { schedule: '*/30 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/type-tightener.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(types): update type tightener report [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'type-tightener' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};