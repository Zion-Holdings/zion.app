// netlify/functions/newsroom-auto-publisher.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/newsroom-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(newsroom): refresh newsroom content [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'newsroom-auto-publisher' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};