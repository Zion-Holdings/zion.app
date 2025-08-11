const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '29 */6 * * *' };

exports.handler = async () => {
  try {
    run('node automation/component-coupling-graph.cjs');
    run('node automation/advanced-git-sync.cjs');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'component-coupling-graph-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};