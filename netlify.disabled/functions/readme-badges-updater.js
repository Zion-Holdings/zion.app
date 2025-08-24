const { execSync } = require('child_process');

function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }

exports.config = { schedule: '*/30 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/readme-badges-updater.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add README.md || true');
    run('git commit -m "docs(readme): refresh badges [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'readme-badges-updater' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};