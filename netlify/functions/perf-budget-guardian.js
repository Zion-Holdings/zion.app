const { execSync } = require('child_process');

exports.config = { schedule: '*/15 * * * *' };

exports.handler = async function() {
  try {
    execSync('node automation/perf-budget-guardian.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): update performance budget report [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'perf-budget-guardian' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};