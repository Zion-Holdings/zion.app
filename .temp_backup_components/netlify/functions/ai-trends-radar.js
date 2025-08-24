// netlify/functions/ai-trends-radar.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node scripts/ai-trends-radar.js || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'ai-trends-radar' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};