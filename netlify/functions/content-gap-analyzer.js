exports.handler = async function() {
  const { spawnSync } = require('child_process');
  function run(cmd) {
    const res = spawnSync(cmd, { stdio: 'inherit', shell: true });
    return res.status || 0;
  }
  try {
    run('node automation/content-gap-analyzer.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'content-gap-analyzer' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};