exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/ai-changelog-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "docs(changelog): refresh AI changelog [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'ai-changelog-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  // Run every 3 hours
  schedule: '0 */3 * * *',
};