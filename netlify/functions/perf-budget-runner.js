const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/20 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/perf-budget-runner.cjs || true');
    run('node automation/git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'perf-budget-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};