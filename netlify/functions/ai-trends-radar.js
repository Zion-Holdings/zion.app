// netlify/functions/ai-trends-radar.js
exports.config = { schedule: '*/30 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node scripts/ai-trends-radar.js || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(reports): update AI trends radar [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'ai-trends-radar' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};