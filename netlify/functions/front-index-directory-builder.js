const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  try {
    const buildRes = runNode('automation/front-index-directory-builder.cjs');
    const buildOk = buildRes.status === 0;
    const syncRes = runNode('automation/advanced-git-sync.cjs');
    const syncOk = syncRes.status === 0;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: buildOk && syncOk, build: { status: buildRes.status, stdout: buildRes.stdout }, sync: { status: syncRes.status, stdout: syncRes.stdout } })
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};