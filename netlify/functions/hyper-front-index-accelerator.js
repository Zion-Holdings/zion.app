const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/1 * * * *' };

exports.handler = async () => {
  const { execSync } = require('child_process');
  function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/front-index-ads.cjs || true');
    run('node automation/front-index-advertiser.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(front): hyper accelerator refreshed auto‑promos [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'hyper-front-index-accelerator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};