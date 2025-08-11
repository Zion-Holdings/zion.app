const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '7 */12 * * *' };

exports.handler = async () => {
  try {
    run('node automation/content-freshness-scanner.cjs');
    run('node automation/advanced-git-sync.cjs');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'content-freshness-score-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};