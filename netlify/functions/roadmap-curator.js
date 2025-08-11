// netlify/functions/roadmap-curator.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/roadmap-curator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): roadmap curated [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true, task: 'roadmap-curator' }) };
  } catch (e) {
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};