const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/1 * * * *' };

exports.handler = async () => {
  try {
    // Homepage: insert/refresh visionary and tools sections, and explore links
    run('node automation/home-index-visionary.cjs || true');
    run('node automation/homepage-updater.cjs || true');
    run('node automation/homepage-auto-advertiser.cjs || true');

    // Front index: directory, ads for features/capabilities/benefits, and futurizer effects
    run('node automation/front-index-directory-builder.cjs || true');
    run('node automation/front-index-auto-advertiser.cjs || true');
    run('node automation/front-futurizer.cjs || true');

    // Sync changes back to the repository
    run('node automation/advanced-git-sync.cjs || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'ultrafast-home-and-front-advertiser' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};