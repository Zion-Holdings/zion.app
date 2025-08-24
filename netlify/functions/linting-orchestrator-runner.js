exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/lint-automation-manager.cjs check || true', { stdio: 'inherit', shell: true });
    execSync('node automation/lint-error-fixer.cjs all || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(lint): apply automated lint fixes [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'linting-orchestrator-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '*/15 * * * *',
};