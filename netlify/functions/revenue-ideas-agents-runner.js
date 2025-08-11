const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runNode(absPath, args = []) {
  const res = spawnSync('node', [absPath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '17 */6 * * *',
};

exports.handler = async () => {
  const logs = [];
  const agentsDir = path.resolve(__dirname, '..', '..', 'automation', 'revenue-ideas-agents');

  function log(msg) { logs.push(msg); }

  try {
    const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.cjs'));
    for (const file of files) {
      const abs = path.join(agentsDir, file);
      log(`\n=== agent:${file} ===`);
      const { status, stdout, stderr } = runNode(abs);
      if (stdout) log(stdout);
      if (stderr) log(stderr);
      log(`exit=${status}`);
    }
  } catch (e) {
    log(`Error listing/processing agents: ${String(e)}`);
  }

  // Sync any generated proposals/reports
  const sync = spawnSync('node', [path.resolve(__dirname, '..', '..', 'automation', 'advanced-git-sync.cjs')], { stdio: 'pipe', encoding: 'utf8' });
  if (sync.stdout) logs.push(sync.stdout);
  if (sync.stderr) logs.push(sync.stderr);
  logs.push(`git-sync-exit=${sync.status || 0}`);

  return { statusCode: 200, body: logs.join('\n') };
};