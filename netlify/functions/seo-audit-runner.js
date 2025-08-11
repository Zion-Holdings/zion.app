const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '0 */2 * * *' };

exports.handler = async () => {
  try {
    run('node scripts/seo-audit.js || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'seo-audit-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};