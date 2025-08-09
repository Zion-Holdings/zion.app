#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(command, options = {}) {
  return execSync(command, { stdio: 'pipe', encoding: 'utf8', ...options }).trim();
}

function safeRun(command) {
  try {
    return run(command);
  } catch (e) {
    return '';
  }
}

function log(msg) {
  const timestamp = new Date().toISOString();
  console.log(`[git-sync ${timestamp}] ${msg}`);
}

function inProgressRebaseDir(repoRoot) {
  const candidates = [
    path.join(repoRoot, '.git', 'rebase-merge'),
    path.join(repoRoot, '.git', 'rebase-apply')
  ];
  return candidates.find((p) => fs.existsSync(p));
}

function cleanupGitState(repoRoot) {
  // Abort rebase if any
  safeRun('git rebase --abort');
  // Remove leftover rebase dirs
  const rb = inProgressRebaseDir(repoRoot);
  if (rb) {
    try { fs.rmSync(rb, { recursive: true, force: true }); } catch (_) {}
  }
  // Remove index.lock if present
  const indexLock = path.join(repoRoot, '.git', 'index.lock');
  if (fs.existsSync(indexLock)) {
    try { fs.rmSync(indexLock); } catch (_) {}
  }
}

(function main() {
  try {
    const repoRoot = process.cwd();
    const isCi = process.env.GITHUB_ACTIONS === 'true';

    // Single instance lock
    const lockDir = path.join(repoRoot, 'automation', 'logs');
    const lockFile = path.join(lockDir, 'git-sync.lock');
    try {
      if (!fs.existsSync(lockDir)) fs.mkdirSync(lockDir, { recursive: true });
      const fd = fs.openSync(lockFile, fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_WRONLY);
      fs.writeFileSync(fd, String(process.pid));
      fs.closeSync(fd);
    } catch (e) {
      log('Another git-sync instance is running. Exiting.');
      return;
    }

    try {
      // Ensure we're in a git repo
      const inside = safeRun('git rev-parse --is-inside-work-tree');
      if (!/true/i.test(inside)) {
        log('Not inside a git repository. Skipping.');
        return;
      }

      // Clean any stale git state
      cleanupGitState(repoRoot);

      // Ensure user config exists (local scope)
      if (isCi) {
        const userName = safeRun('git config user.name');
        const userEmail = safeRun('git config user.email');
        if (!userName) safeRun('git config user.name "github-actions[bot]"');
        if (!userEmail) safeRun('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
      } else {
        const userName = safeRun('git config user.name');
        const userEmail = safeRun('git config user.email');
        if (!userName) safeRun('git config user.name "Zion Automation Bot"');
        if (!userEmail) safeRun('git config user.email "bot@zion.app"');
      }

      // Remote configuration (skip in CI)
      if (!isCi) {
        const desired = 'https://github.com/Zion-Holdings/zion.app';
        let origin = safeRun('git remote get-url origin');
        if (!origin) {
          safeRun(`git remote add origin ${desired}.git`);
          origin = desired + '.git';
          log(`Added origin remote: ${origin}`);
        } else if (!origin.includes('Zion-Holdings/zion.app')) {
          safeRun(`git remote set-url origin ${desired}.git`);
          origin = desired + '.git';
          log(`Updated origin remote: ${origin}`);
        }
      }

      // Always sync with remote before committing to reduce conflicts
      safeRun('git fetch origin main --tags');
      // Prefer fast-forward merge; if not possible, rebase with autostash
      if (!safeRun('git merge --ff-only origin/main')) {
        safeRun('git rebase --autostash origin/main');
      }

      // Stage and commit local changes if any
      const statusBefore = safeRun('git status --porcelain');
      if (statusBefore) {
        safeRun('git add -A');
        const timestamp = new Date().toISOString();
        const msg = `chore(automation): sync changes from automation at ${timestamp}`;
        try {
          run('HUSKY=0 GIT_MERGE_AUTOEDIT=no git commit -m "' + msg + '"');
          log('Committed changes.');
        } catch (e) {
          log('Nothing to commit after staging.');
        }
      } else {
        log('No changes to commit.');
      }

      // Retry push up to 3 times if non-fast-forward occurs due to concurrent updates
      let pushed = false;
      for (let attempt = 1; attempt <= 3 && !pushed; attempt++) {
        try {
          run('HUSKY=0 git push --no-verify origin HEAD:main');
          log('Pushed changes to origin/main.');
          pushed = true;
        } catch (e) {
          log(`Push attempt ${attempt} failed: ${e.message}`);
          // Refresh and rebase, then try again
          cleanupGitState(repoRoot);
          safeRun('git fetch origin main --tags');
          const rb = safeRun('git rebase --autostash origin/main');
          if (/CONFLICT/i.test(rb)) {
            // If conflicts, abort rebase and fall back to merge (leave for next cycle)
            safeRun('git rebase --abort');
            safeRun('git merge --no-commit --no-ff origin/main');
            safeRun('git reset --merge');
          }
        }
      }

      if (!pushed) {
        log('Final push failed after retries. Will retry on next cycle.');
      }
    } finally {
      try { fs.rmSync(lockFile, { force: true }); } catch (_) {}
    }
  } catch (error) {
    log(`Error: ${error.message}`);
  }
})();


