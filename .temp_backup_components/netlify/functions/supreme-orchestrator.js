const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/1 * * * *' };

exports.handler = async () => {
  try {
    // Front and Home advertisers/futurizers
    run('node automation/front-index-ads.cjs || true');
    run('node automation/front-index-advertiser.cjs || true');
    run('node automation/homepage-auto-advertiser.cjs || true');
    run('node automation/homepage-updater.cjs || true');
    run('node automation/front-index-directory-builder.cjs || true');
    run('node automation/home-index-visionary.cjs || true');

    // Discovery and maintenance
    run('node automation/auto-discovery-runner.cjs || true');
    run('node automation/sitemap-runner.cjs || true');

    // Sync to repo
    run('node automation/git-sync.cjs || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'supreme-orchestrator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};