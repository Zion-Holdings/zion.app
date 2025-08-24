exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/deps-auto-upgrade.cjs', { stdio: 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(deps): auto-upgrade dependencies [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'deps-auto-upgrade-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};