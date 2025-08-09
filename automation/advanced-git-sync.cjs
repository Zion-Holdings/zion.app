#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

function run(command, options = {}) {
  return execSync(command, { stdio: 'pipe', encoding: 'utf8', ...options }).trim();
}

function safeRun(command, options = {}) {
  try {
    return run(command, options);
  } catch (error) {
    return '';
  }
}

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[advanced-git-sync ${timestamp}] ${message}`);
}

function getWorkspaceRoot() {
  const cwd = process.cwd();
  try {
    const top = run('git rev-parse --show-toplevel');
    return top || cwd;
  } catch {
    return cwd;
  }
}

function withLock(lockPath, fn) {
  const staleMs = 15 * 60 * 1000; // 15 minutes
  try {
    if (fs.existsSync(lockPath)) {
      const stat = fs.statSync(lockPath);
      const age = Date.now() - stat.mtimeMs;
      if (age < staleMs) {
        log(`Lock exists (${lockPath}); another sync is running. Skipping.`);
        return;
      } else {
        log(`Stale lock detected. Removing ${lockPath}`);
        fs.rmSync(lockPath, { force: true });
      }
    }
    fs.writeFileSync(lockPath, String(process.pid));
    try {
      fn();
    } finally {
      fs.rmSync(lockPath, { force: true });
    }
  } catch (error) {
    log(`Lock error: ${error.message}`);
  }
}

(function main() {
  try {
    const inside = safeRun('git rev-parse --is-inside-work-tree');
    if (!/true/i.test(inside)) {
      log('Not inside a git repository. Exiting.');
      return;
    }

    const repoRoot = getWorkspaceRoot();
    const lockFile = path.join(repoRoot, '.git', '.advanced-git-sync.lock');

    withLock(lockFile, () => {
      // Configure user if missing
      const isCi = process.env.GITHUB_ACTIONS === 'true';
      const userName = safeRun('git config user.name');
      const userEmail = safeRun('git config user.email');
      if (!userName) {
        const name = isCi ? 'github-actions[bot]' : 'Zion Automation Bot';
        safeRun(`git config user.name "${name}"`);
      }
      if (!userEmail) {
        const email = isCi ? '41898282+github-actions[bot]@users.noreply.github.com' : 'bot@zion.app';
        safeRun(`git config user.email "${email}"`);
      }

      // Ensure origin exists but don't override tokenized URLs if present
      let origin = safeRun('git remote get-url origin');
      if (!origin) {
        const desired = 'https://github.com/Zion-Holdings/zion.app.git';
        safeRun(`git remote add origin ${desired}`);
        origin = desired;
        log(`Added origin remote: ${origin}`);
      }

      // Identify current branch
      let currentBranch = safeRun('git rev-parse --abbrev-ref HEAD') || 'main';

      // Fetch latest
      safeRun('git fetch --prune origin');

      // Best-effort rebase onto remote tracking branch to reduce push failures
      const remoteBranchExists = !!safeRun(`git ls-remote --heads origin ${currentBranch}`);
      if (remoteBranchExists) {
        // Use autostash so local changes are preserved
        const rebaseResult = spawnSync('bash', ['-lc', `git pull --rebase --autostash origin ${currentBranch}`], { encoding: 'utf8' });
        if (rebaseResult.status !== 0) {
          log(`Rebase failed on ${currentBranch}. Aborting rebase.`);
          safeRun('git rebase --abort');
        }
      }

      // Check for changes
      const status = safeRun('git status --porcelain');
      if (!status) {
        log('No local changes to commit. Attempting lightweight push to ensure remote up-to-date.');
      } else {
        // Stage and commit
        safeRun('git add -A');
        const timestamp = new Date().toISOString();
        const host = os.hostname();
        const msg = `chore(sync): auto-sync from ${host} on ${currentBranch} at ${timestamp}`;
        try {
          run(`git commit -m "${msg}"`);
          log('Committed local changes.');
        } catch (e) {
          log('Nothing to commit after staging.');
        }
      }

      // Ensure branch has upstream
      const hasUpstream = !!safeRun('git rev-parse --abbrev-ref --symbolic-full-name @{u}');
      if (!hasUpstream) {
        safeRun(`git push --set-upstream origin ${currentBranch}`);
      }

      // Push with no-verify to avoid local hooks blocking automation
      try {
        const pushRef = `${currentBranch}`;
        run(`git push --no-verify origin ${pushRef}`);
        log(`Pushed ${pushRef} to origin.`);
      } catch (e) {
        log(`Push failed: ${e.message}`);
      }

      // Opportunistic cleanup
      safeRun('git gc --auto');
    });
  } catch (error) {
    log(`Fatal error: ${error.message}`);
  }
})();