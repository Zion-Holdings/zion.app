// netlify/functions/homepage_advertiser.js
exports.handler = async () => {
  const { execSync } = require('child_process');
  function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/homepage-auto-advertiser.cjs || true');
    run('node automation/front-index-advertiser.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(home): homepage advertiser updates [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'homepage_advertiser' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
}