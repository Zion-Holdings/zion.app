#!/usr/bin/env node

/**
 * Continuous Git autosync loop for PM2.
 * - Runs forever with a configurable interval
 * - Safely fetches, rebases/merges, commits local changes, and pushes upstream
 * - No secrets required; uses local Git credentials
 */

const { execSync } = require('child_process');

function now() {
  return new Date().toISOString();
}

function log(message) {
  process.stdout.write(`[${now()}] ${message}\n`);
}

function run(command, allowFailure = false) {
  try {
    const output = execSync(command, {
      stdio: ['ignore', 'pipe', 'pipe'],
      encoding: 'utf8',
      shell: true,
    });
    if (output) process.stdout.write(output);
    return { ok: true, output };
  } catch (error) {
    if (!allowFailure) {
      process.stderr.write(`Command failed: ${command}\n`);
      if (error.stdout) process.stderr.write(error.stdout.toString());
      if (error.stderr) process.stderr.write(error.stderr.toString());
    }
    return { ok: false, error };
  }
}

function configureBotIdentity() {
  run('git config user.name "github-actions[bot]"', true);
  run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"', true);
}

function getCurrentBranch() {
  const res = run('git rev-parse --abbrev-ref HEAD', true);
  return res.ok ? String(res.output || '').trim() : 'HEAD';
}

function hasChanges() {
  const res = run('git status --porcelain', true);
  return Boolean(res.ok && String(res.output || '').trim().length > 0);
}

function rebaseOrMergeOnto(targetBranch) {
  // Try a rebase first; fallback to merge if needed
  if (!run(`git rebase origin/${targetBranch}`, true).ok) {
    run('git rebase --abort', true);
    if (!run(`git merge --no-edit origin/${targetBranch}`, true).ok) {
      // Last resort merge strategy to avoid blocking
      run(`git merge -s ours --no-edit origin/${targetBranch}`, true);
    }
  }
}

function commitAllIfAny(message) {
  if (!hasChanges()) return false;
  run('git add -A');
  const res = run(`git commit -m ${JSON.stringify(message)}`, true);
  return res.ok;
}

function push(refspec) {
  return run(`git push origin ${refspec}`, true).ok;
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function syncOnce() {
  const TARGET_BRANCH = process.env.TARGET_BRANCH || 'main';

  // Ensure remotes and refs are up-to-date
  run('git fetch --all --prune', true);
  run(`git fetch origin ${TARGET_BRANCH}:${TARGET_BRANCH} || true`, true);

  let current = getCurrentBranch();
  if (current === 'HEAD' || current === '') {
    // Detached HEAD; ensure a branch exists to push from
    run('git checkout -B automation/git-autosync-temp', true);
    current = getCurrentBranch();
  }

  // Rebase/merge latest main onto the working branch
  rebaseOrMergeOnto(TARGET_BRANCH);

  // Commit local changes, if any
  commitAllIfAny('chore(sync): continuous autosync');

  // Prefer pushing directly to main; fallback to pushing the current branch
  if (!push('HEAD:main')) {
    push('HEAD');
  }

  // Non-fatal tags push
  run('git push --tags || true', true);
}

async function main() {
  configureBotIdentity();

  const intervalSeconds = Number(process.env.SYNC_INTERVAL_SECONDS || '60');
  const intervalMs = Math.max(10, intervalSeconds) * 1000;

  log(`Starting PM2 Git Autosync loop (every ${intervalSeconds}s) targeting 'main'`);

  // Initial sync at boot
  try {
    await syncOnce();
  } catch (e) {
    log(`Initial sync error: ${String(e)}`);
  }

  // Continuous loop
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      await sleep(intervalMs);
      await syncOnce();
    } catch (e) {
      log(`Sync cycle error: ${String(e)}`);
    }
  }
}

main().catch((e) => {
  log(`Fatal error: ${String(e)}`);
  process.exitCode = 1;
});


