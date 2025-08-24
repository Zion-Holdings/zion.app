// netlify/functions/qa-knowledge-runner.js
exports.handler = async () => {
  const { execSync } = require('child_process');
  function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/qa-knowledge-generator.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "docs(qa): update knowledge base [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'qa-knowledge-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
}