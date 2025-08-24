const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/7 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/llm-content-curator.cjs || true');
    run('node automation/front-index-advertiser.cjs || true');
    run('node automation/front-index-ads.cjs || true');
    run('node automation/homepage-auto-advertiser.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'autonomous-content-curator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};