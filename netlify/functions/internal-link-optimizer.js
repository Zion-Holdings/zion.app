exports.handler = async function() {
  const { execSync } = require('child_process');
  const steps = [
    'node automation/site-link-crawler.cjs || true',
    'node automation/smart-redirect-manager.cjs || true',
    'node automation/redirect-healer.cjs || true',
    'node automation/front-index-directory-builder.cjs || true',
    'node automation/front-index-advertiser.cjs || true',
    'node automation/git-sync.cjs || true'
  ];
  try {
    for (const cmd of steps) {
      execSync(cmd, { stdio: 'inherit', shell: true });
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'internal-link-optimizer' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};