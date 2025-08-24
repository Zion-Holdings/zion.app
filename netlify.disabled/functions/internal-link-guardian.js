const { execSync } = require('child_process');

function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }

exports.config = { schedule: '*/10 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/internal-link-guardian.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(links): internal link guardian report [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'internal-link-guardian' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};