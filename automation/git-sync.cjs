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

function isAheadOfRemote(branch) {
  const res = run(`git rev-list --left-right --count origin/${branch}...HEAD`);
  if (!res.ok) return false;
  const [behindStr, aheadStr] = res.output.trim().split(/\s+/);
  const ahead = parseInt(aheadStr || '0', 10);
  return ahead > 0;
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

function rebaseOnto(remoteBranch) {
  const rebase = run(`git rebase origin/${remoteBranch}`);
  if (!rebase.ok) {
    // Abort rebase on conflict and fallback to merge
    run('git rebase --abort');
    const merge = run(`git merge --no-edit origin/${remoteBranch}`);
    if (!merge.ok) {
      // Last resort: create a merge commit with ours strategy
      run(`git merge -s ours --no-edit origin/${remoteBranch}`);
    }
  }
}

function push(refspec) {
  return run(`git push origin ${refspec}`);
}

(function main() {
  // Simple cross-process lock to avoid concurrent git ops (shared with PM2 autosync loop)
  const fs = require('fs');
  const path = require('path');
  const lockFile = path.join(__dirname, '.git-sync.lock');
  const maxAgeMs = 5 * 60 * 1000;
  try {
    if (fs.existsSync(lockFile)) {
      const stat = fs.statSync(lockFile);
      if (Date.now() - stat.mtimeMs < maxAgeMs) {
        process.stdout.write('git-sync: lock present, skipping\n');
        return;
      }
      try { fs.unlinkSync(lockFile); } catch {}
    }
    fs.writeFileSync(lockFile, String(process.pid));
  } catch {}
  const removeLock = () => { try { fs.unlinkSync(lockFile); } catch {} };
  process.on('exit', removeLock);
  process.on('SIGINT', () => { removeLock(); process.exit(130); });
  process.on('SIGTERM', () => { removeLock(); process.exit(143); });
  configureBotIdentity();

  const TARGET_BRANCH = process.env.TARGET_BRANCH || 'main';
  const PUSH_TO_MAIN = String(process.env.PUSH_TO_MAIN || 'true').toLowerCase() !== 'false';

  run('git fetch --all --prune');

  const currentBranch = getCurrentBranch();

  if (currentBranch === 'HEAD') {
    // Detached HEAD – create a temp branch to ensure pushes work
    run('git checkout -B automation/git-sync-temp');
  }

  const workingBranch = getCurrentBranch();

  // Always sync with latest main
  run(`git fetch origin ${TARGET_BRANCH}:${TARGET_BRANCH} || true`);
  rebaseOnto(TARGET_BRANCH);

  // Commit any working tree changes
  commitAllIfAny('chore(sync): fast autonomous sync');

  // Decide where to push
  if (PUSH_TO_MAIN) {
    // If we are not on main, prefer pushing HEAD directly to main when allowed
    const res = push('HEAD:main');
    if (!res.ok) {
      // Fallback to pushing branch
      push('HEAD');
    }
  } else {
    if (workingBranch === TARGET_BRANCH) {
      // Ensure we are up to date and push main
      run('git pull --rebase origin main || true');
      push('HEAD:main');
    } else {
      push('HEAD');
    }
  }

  // Attempt to push tags as well (non-fatal)
  run('git push --tags || true');
})();