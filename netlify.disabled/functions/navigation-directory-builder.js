const { execSync } = require('child_process');

function run(cmd) { execSync(cmd, { stdio: 'inherit', shell: true }); }

exports.config = { schedule: '*/15 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/navigation-directory-builder.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add pages/directory.tsx || true');
    run('git commit -m "feat(front): auto-generate directory page [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'navigation-directory-builder' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};