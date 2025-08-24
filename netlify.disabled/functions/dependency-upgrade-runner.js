// netlify/functions/dependency-upgrade-runner.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/deps-auto-upgrade.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(deps): auto-upgrade dependencies [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'dependency-upgrade-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};