exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/autonomous-meta-orchestrator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/autonomous-meta-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(meta): refresh autonomous meta [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'meta-orchestrator-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '0 * * * *',
};