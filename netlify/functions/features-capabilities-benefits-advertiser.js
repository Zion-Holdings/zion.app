const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/2 * * * *' };

exports.handler = async () => {
  try {
    // Promote features, capabilities, and benefits on home and front pages
    run('node automation/front-index-ads.cjs || true');
    run('node automation/front-index-advertiser.cjs || true');
    run('node automation/homepage-auto-advertiser.cjs || true');
    run('node automation/homepage-updater.cjs || true');
    // Sync
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(front): advertise features, capabilities and benefits [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'features-capabilities-benefits-advertiser' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};