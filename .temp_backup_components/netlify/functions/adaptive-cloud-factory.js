exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/repo-complexity-report.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/adaptive-cloud-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): adaptive cloud factory cycle [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'adaptive-cloud-factory' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};