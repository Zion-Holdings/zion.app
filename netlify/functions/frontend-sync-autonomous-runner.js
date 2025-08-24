exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/frontend-sync-autonomous-orchestrator.cjs once 0 || true', { stdio: 'inherit', shell: true });
    execSync('node automation/advanced-git-sync.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(frontend-sync): run autonomous sync [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'frontend-sync-autonomous-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '*/5 * * * *',
};