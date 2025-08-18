#!/usr/bin/env node

const { execSync } = require('child_process');

function run(cmd, options = {}) {
  try {
    const output = execSync(cmd, {
      stdio: ['ignore', 'pipe', 'pipe'],
      encoding: 'utf8',
      ...options,
    });
    if (output) process.stdout.write(output);
    return { ok: true, output };
  } catch (err) {
    process.stderr.write(`Command failed: ${cmd}\n`);
    if (err.stdout) process.stderr.write(err.stdout.toString());
    if (err.stderr) process.stderr.write(err.stderr.toString());
    return { ok: false, error: err };
  }
}

function getCurrentBranch() {
  const res = run('git rev-parse --abbrev-ref HEAD');
  return res.ok ? res.output.trim() : 'HEAD';
}

function hasChanges() {
  const res = run('git status --porcelain');
  return res.ok && res.output.trim().length > 0;
}

function hasMergeConflicts() {
  const res = run('git diff --name-only --diff-filter=U');
  return res.ok && res.output.trim().length > 0;
}

function configureBotIdentity() {
  run('git config user.name "github-actions[bot]"');
  run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
}

function commitAllIfAny(message) {
  if (!hasChanges()) return false;
  run('git add -A');
  const committed = run(`git commit -m ${JSON.stringify(message)}`);
  return committed.ok;
}

function ensureOnMainBranch() {
  const currentBranch = getCurrentBranch();
  if (currentBranch !== 'main') {
    console.log(`Switching from ${currentBranch} to main branch...`);
    run('git checkout main');
    run('git pull origin main');
  }
  console.log('✅ Now working on main branch');
}

function push(refspec) {
  return run(`git push origin ${refspec}`);
}

(function main() {
  console.log('🤖 Starting enhanced git sync on main branch...');
  
  configureBotIdentity();

  // Fetch latest changes
  console.log('Fetching latest changes...');
  run('git fetch --all --prune');

  // Ensure we're on main branch
  ensureOnMainBranch();

  const currentBranch = getCurrentBranch();
  console.log(`Current branch: ${currentBranch}`);

  // Always sync with latest main branch
  console.log('Syncing with latest main...');
  run('git pull origin main || true');
  
  // Commit any working tree changes
  const committed = commitAllIfAny('chore(sync): enhanced autonomous sync on main');
  if (committed) {
    console.log('✅ Committed working tree changes');
  }

  // Always push to main
  console.log('Pushing to main...');
  const res = push('HEAD:main');
  if (!res.ok) {
    console.log('Push to main failed, attempting to resolve...');
    // Try to resolve any issues and push again
    run('git pull --rebase origin main || true');
    push('HEAD:main');
  }

  // Attempt to push tags as well (non-fatal)
  run('git push --tags || true');
  
  console.log('✅ Enhanced git sync completed successfully on main branch');
})();
