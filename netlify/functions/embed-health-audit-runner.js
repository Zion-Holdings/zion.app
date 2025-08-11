exports.handler = async function() {
  const { spawnSync } = require('child_process');
  function run(cmd) { return spawnSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/embed-health-audit.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'embed-health-audit' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = { schedule: '17 */6 * * *' };