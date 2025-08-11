const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/30 * * * *' };

exports.handler = async () => {
  try {
    run('node scripts/ai-trends-radar.js || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'ai-trends-radar-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};