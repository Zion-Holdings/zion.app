exports.handler = async function() {
  const { execSync } = require('child_process');
  const steps = [
    'node automation/front-index-directory-builder.cjs || true',
    'node automation/front-index-advertiser.cjs || true',
    'node automation/homepage-updater.cjs || true',
    'node automation/home-index-visionary.cjs || true',
    'node automation/git-sync.cjs || true'
  ];
  try {
    for (const cmd of steps) {
      execSync(cmd, { stdio: 'inherit', shell: true });
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'autonomous-innovation-generator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};