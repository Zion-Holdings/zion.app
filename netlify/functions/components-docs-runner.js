exports.handler = async function() {
  const { execSync } = require('child_process');
  function run(cmd){ execSync(cmd, { stdio: 'inherit', shell: true }); }
  try {
    run('node automation/components-docs-generator.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'components-docs-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};