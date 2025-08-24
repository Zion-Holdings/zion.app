// netlify/functions/seo-schema-runner.js
exports.handler = async () => {
  const { execSync } = require('child_process');
  function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/seo-schema-generator.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(seo): update JSON-LD schema [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'seo-schema-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
}