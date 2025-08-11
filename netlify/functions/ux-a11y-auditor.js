const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/15 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/ux-a11y-auditor.cjs || true');
    run('node automation/git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'ux-a11y-auditor' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};