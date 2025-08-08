#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

function run(cmd, options = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...options }).trim();
}

function safeRun(cmd, options = {}) {
  try { return run(cmd, options); } catch (e) { return ''; }
}

function log(message) {
  const t = new Date().toISOString();
  console.log(`[git-health ${t}] ${message}`);
}

function writeJson(filePath, data) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (_) {}
}

function removeIfStale(filePath, maxAgeMs) {
  try {
    if (!fs.existsSync(filePath)) return false;
    const age = Date.now() - fs.statSync(filePath).mtimeMs;
    if (age > maxAgeMs) {
      fs.rmSync(filePath, { force: true });
      return true;
    }
  } catch (_) {}
  return false;
}

(function main() {
  const args = process.argv.slice(2);
  const isCi = process.env.GITHUB_ACTIONS === 'true' || args.includes('--ci');
  const isFast = args.includes('--fast');
  const isDeep = args.includes('--deep');
  const doFix = args.includes('--fix');

  const result = {
    ok: true,
    errors: [],
    warnings: [],
    checks: {},
  };

  function fail(msg) {
    result.ok = false;
    result.errors.push(msg);
    log(`ERROR: ${msg}`);
  }

  function warn(msg) {
    result.warnings.push(msg);
    log(`WARN: ${msg}`);
  }

  // 1) Ensure in git repo
  const inside = safeRun('git rev-parse --is-inside-work-tree');
  if (!/true/i.test(inside)) {
    log('Not inside a git repository. Exiting successfully (no-op).');
    process.exit(0);
  }

  const repoRoot = safeRun('git rev-parse --show-toplevel') || process.cwd();
  const gitDir = path.join(repoRoot, '.git');

  // 2) Basic configuration
  try {
    let userName = safeRun('git config user.name');
    let userEmail = safeRun('git config user.email');
    if (!userName || !userEmail) {
      if (doFix) {
        const fallbackName = isCi ? 'github-actions[bot]' : 'Zion Automation Bot';
        const fallbackEmail = isCi ? '41898282+github-actions[bot]@users.noreply.github.com' : 'bot@zion.app';
        if (!userName) safeRun(`git config user.name "${fallbackName}"`);
        if (!userEmail) safeRun(`git config user.email "${fallbackEmail}"`);
        userName = safeRun('git config user.name');
        userEmail = safeRun('git config user.email');
        warn('Git user config was missing and has been set.');
      } else {
        warn('Git user.name or user.email is not set. Run with --fix to set safe defaults.');
      }
    }
    result.checks.user = { name: userName, email: userEmail };
  } catch (e) {
    fail(`Failed to read git user config: ${e.message}`);
  }

  // 3) Remote configuration (skip override in CI)
  try {
    const origin = safeRun('git remote get-url origin');
    if (!origin) {
      if (doFix && !isCi) {
        const desired = 'https://github.com/Zion-Holdings/zion.app.git';
        safeRun(`git remote add origin ${desired}`);
        warn('Added origin remote with default URL.');
      } else {
        warn('No origin remote configured. Run with --fix (non-CI) to add default.');
      }
    }
    result.checks.origin = safeRun('git remote -v');
  } catch (e) {
    fail(`Failed to read/set remote: ${e.message}`);
  }

  // 4) Clean up stale lock files
  try {
    const lockCandidates = [
      path.join(gitDir, 'index.lock'),
      path.join(gitDir, 'shallow.lock'),
      path.join(gitDir, 'packed-refs.lock'),
    ];
    let cleaned = 0;
    for (const file of lockCandidates) {
      if (removeIfStale(file, 15 * 60 * 1000)) cleaned++;
    }
    if (cleaned > 0) warn(`Removed ${cleaned} stale git lock file(s).`);
  } catch (e) {
    warn(`Lock cleanup issue: ${e.message}`);
  }

  // 5) Fetch and prune
  try {
    const fetched = spawnSync('bash', ['-lc', 'git fetch --prune origin'], { encoding: 'utf8' });
    if (fetched.status !== 0) {
      warn(`git fetch --prune failed: ${fetched.stderr || fetched.stdout}`);
    }
  } catch (e) {
    warn(`Fetch error: ${e.message}`);
  }

  // 6) Quick integrity check
  try {
    const fsckArgs = isFast ? '--no-progress' : '--full';
    const fsck = spawnSync('bash', ['-lc', `git fsck ${fsckArgs}`], { encoding: 'utf8' });
    result.checks.fsck = { status: fsck.status, output: (fsck.stdout || '').slice(0, 800) };
    if (fsck.status !== 0) {
      if (doFix && !isCi) {
        warn('git fsck reported issues. Attempting git gc...');
        const gc = spawnSync('bash', ['-lc', 'git gc --prune=now --aggressive'], { encoding: 'utf8' });
        result.checks.gc = { status: gc.status, output: (gc.stdout || '').slice(0, 400) };
        if (gc.status !== 0) fail('git gc failed to clean repository.');
      } else {
        fail('git fsck reported issues. Run with --fix locally to attempt repair.');
      }
    }
  } catch (e) {
    fail(`git fsck failed: ${e.message}`);
  }

  // 7) Upstream divergence check
  try {
    const branch = safeRun('git rev-parse --abbrev-ref HEAD') || 'HEAD';
    const hasUpstream = !!safeRun('git rev-parse --abbrev-ref --symbolic-full-name @{u}');
    if (!hasUpstream) {
      warn('No upstream configured for current branch.');
      if (doFix) {
        const originBranch = `origin/${branch}`;
        const exists = !!safeRun(`git show-ref --verify --quiet refs/remotes/${originBranch} && echo yes`);
        if (exists) {
          safeRun(`git branch --set-upstream-to=${originBranch}`);
          warn(`Set upstream to ${originBranch}.`);
        }
      }
    } else {
      const diverge = safeRun('git rev-list --left-right --count @{u}...HEAD');
      const [behindStr, aheadStr] = (diverge || '0\t0').split('\t');
      const behind = parseInt(behindStr || '0', 10) || 0;
      const ahead = parseInt(aheadStr || '0', 10) || 0;
      result.checks.divergence = { behind, ahead };
      if (behind > 5000) warn(`Branch is behind upstream by ${behind} commits.`);
    }
  } catch (e) {
    warn(`Divergence check failed: ${e.message}`);
  }

  // 8) Uncommitted changes check
  try {
    const status = safeRun('git status --porcelain');
    if (status) {
      result.checks.working = 'dirty';
    } else {
      result.checks.working = 'clean';
    }
  } catch (e) {
    warn(`Status check failed: ${e.message}`);
  }

  // 9) Optional deep maintenance
  if (isDeep && doFix && !isCi) {
    try {
      const gc = spawnSync('bash', ['-lc', 'git gc --prune=now --aggressive'], { encoding: 'utf8' });
      result.checks.deepGc = { status: gc.status };
      if (gc.status !== 0) warn('Deep git gc failed.');
    } catch (e) {
      warn(`Deep maintenance failed: ${e.message}`);
    }
  }

  // Persist summary
  try {
    writeJson(path.join(repoRoot, 'automation_logs', 'git-health-summary.json'), result);
  } catch (_) {}

  // Final status
  if (!result.ok) {
    log('Git health check failed.');
    process.exit(1);
  }
  log('Git health check passed.');
  process.exit(0);
})();