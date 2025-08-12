const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/1 * * * *' };

exports.handler = async () => {
  try {
    // Fast front index improvements
    run('node automation/front-index-directory-builder.cjs || true');
    run('node automation/front-futurizer.cjs || true');
    run('node automation/front-index-auto-advertiser.cjs || true');
    // Git sync
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'hyper-front-index-accelerator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};