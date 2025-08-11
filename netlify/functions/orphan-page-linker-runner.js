exports.handler = async function() {
  const { spawnSync } = require('child_process');
  function run(cmd) { return spawnSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/orphan-page-linker.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'orphan-page-linker' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = { schedule: '13 */6 * * *' };