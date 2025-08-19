const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '0 */12 * * *' };

exports.handler = async () => {
  try {
    run('node automation/deps-auto-upgrade.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'dependency-upgrade-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};