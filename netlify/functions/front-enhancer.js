const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/10 * * * *', // every 10 minutes for faster iteration
};

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/design-analyzer.cjs', { stdio: 'inherit' });
    execSync('node automation/design-factory.cjs', { stdio: 'inherit' });
    execSync('node automation/homepage-promo-analyzer.cjs', { stdio: 'inherit' });
    execSync('node automation/homepage-promo-factory.cjs', { stdio: 'inherit' });
    execSync('node automation/homepage-promo-applier.cjs', { stdio: 'inherit' });
    execSync('node automation/front-index-advertiser.cjs', { stdio: 'inherit' });
    execSync('node automation/front-futurizer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/advanced-git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'front-enhancer' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};