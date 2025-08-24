#!/usr/bin/env node

const { execSync } = require('child_process');

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }).trim();
}
function safe(cmd) { try { return run(cmd); } catch { return ''; } }
function log(msg) { console.log(`[cloud-commit ${new Date().toISOString()}] ${msg}`); }

(function main(){
  // Ensure git identity
  safe('git config user.name "Zion Cloud Bot"');
  safe('git config user.email "cloud-bot@zion.app"');

  // Detect changes
  const status = safe('git status --porcelain');
  if (!status) { log('No changes to commit.'); return; }

  // Stage, commit, rebase-pull, push
  run('git add -A');
  const msg = `chore(cloud): automated cloud commit at ${new Date().toISOString()}`;
  try { run(`git commit -m ${JSON.stringify(msg)}`); log('Committed changes.'); } catch (e) { log('Nothing to commit after staging.'); return; }

  // Pull rebase to reduce conflicts
  safe('git pull --rebase origin main');

  try {
    run('git push origin HEAD:main --no-verify');
    log('Pushed changes.');
  } catch (e) {
    log(`Push failed: ${e.message}`);
  }
})();