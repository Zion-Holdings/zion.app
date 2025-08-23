const { execSync } = require('child_process');

function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }

exports.config = { schedule: '*/20 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/perf-asset-watcher.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(perf): performance asset watcher report [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'perf-asset-watcher' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};