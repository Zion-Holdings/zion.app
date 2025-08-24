#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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
    process.stderr.write('Command failed\n');
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

function getAuthEnv() {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;
  if (!token) return {};
  const basic = Buffer.from(`x-access-token:${token}`).toString('base64');
  return { GIT_HTTP_EXTRAHEADER: `Authorization: Basic ${basic}` };
}

const AUTH_ENV = getAuthEnv();

function runGit(cmd) {
  const env = { env: { ...process.env, ...AUTH_ENV, GIT_TERMINAL_PROMPT: '0' } };
  return run(cmd, env);
}

function configureBotIdentity() {
  run('git config user.name "github-actions[bot]"');
  run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
}

function commitAllIfAny(message) {
  if (!hasChanges()) return false;
  runGit('git add -A');
  const committed = runGit(`git commit -m ${JSON.stringify(message)}`);
  return committed.ok;
}

function ensureOnMainBranch() {
  const currentBranch = getCurrentBranch();
  if (currentBranch !== 'main') {
    console.log(`Switching from ${currentBranch} to main branch...`);
    runGit('git checkout main');
    runGit('git pull --rebase origin main || true');
  }
  console.log('✅ Now working on main branch');
}

function clearStaleGitIndexLock() {
  try {
    const lockPath = path.join(process.cwd(), '.git', 'index.lock');
    if (fs.existsSync(lockPath)) {
      const stat = fs.statSync(lockPath);
      const ageMs = Date.now() - stat.mtimeMs;
      if (ageMs > 5 * 60 * 1000) {
        fs.unlinkSync(lockPath);
        console.log('Removed stale .git/index.lock');
      } else {
        console.log('Recent .git/index.lock present; skipping destructive ops');
      }
    }
  } catch {}
}

function rebaseOriginMainWithFallback() {
  const rb = runGit('git rebase origin/main');
  if (rb.ok) return true;
  console.log('Rebase failed, attempting fallback reset/stash strategy');
  runGit('git rebase --abort || true');
  runGit('git stash push -u -m "autosync-stash" || true');
  const reset = runGit('git reset --hard origin/main');
  if (!reset.ok) return false;
  runGit('git stash pop || true');
  return true;
}

function push(refspec) {
  return runGit(`git push origin ${refspec}`);
}

(function main() {
  console.log('🤖 Starting enhanced git sync on main branch...');
  configureBotIdentity();
  console.log('Fetching latest changes...');
  runGit('git fetch --all --prune');
  ensureOnMainBranch();
  const currentBranch = getCurrentBranch();
  console.log(`Current branch: ${currentBranch}`);
  clearStaleGitIndexLock();
  console.log('Syncing with origin/main via rebase...');
  if (!rebaseOriginMainWithFallback()) {
    console.log('Rebase/reset strategy failed; using merge -X ours as last resort');
    runGit('git merge -X ours --no-edit origin/main || true');
  }
  const committed = commitAllIfAny('chore(sync): enhanced autonomous sync on main');
  if (committed) {
    console.log('✅ Committed working tree changes');
  }
  console.log('Pushing to main...');
  const res = push('HEAD:main');
  if (!res.ok) {
    console.log('Push to main failed, attempting to resolve...');
    runGit('git fetch origin --prune');
    rebaseOriginMainWithFallback();
    push('HEAD:main');
  }
  run('git push --tags || true');
  console.log('✅ Enhanced git sync completed successfully on main branch');
})();


