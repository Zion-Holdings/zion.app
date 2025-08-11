const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  try {
    run('node automation/site-link-crawler.cjs || true');
    run('node automation/link-sentinel-aggregator.cjs || true');
    run('node automation/advanced-git-sync.cjs');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'site-404-map-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};