const { execSync } = require('child_process');

function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }

exports.config = { schedule: '*/7 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/auto-discovery-runner.cjs || true');
    run('node automation/front-index-directory-builder.cjs || true');
    run('node automation/front-index-ads.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'auto-discovery-lab' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};