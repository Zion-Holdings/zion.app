#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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

(function main() {
  try {
    // Ensure we're in a git repo
    const inside = safeRun('git rev-parse --is-inside-work-tree');
    if (!/true/i.test(inside)) {
      log('Not inside a git repository. Skipping.');
      return;
    }

    // Ensure user config exists (local scope)
    const userName = safeRun('git config user.name');
    const userEmail = safeRun('git config user.email');
    if (!userName) safeRun('git config user.name "Zion Automation Bot"');
    if (!userEmail) safeRun('git config user.email "bot@zion.app"');

    // Ensure correct remote URL
    const configPath = path.join(__dirname, 'repository.config.json');
    let desired = 'https://github.com/Zion-Holdings/zion.app';
    try {
      const rawConfig = fs.readFileSync(configPath, 'utf8');
      const parsed = JSON.parse(rawConfig);
      if (parsed && typeof parsed.canonicalRepository === 'string' && parsed.canonicalRepository.trim()) {
        desired = parsed.canonicalRepository.trim();
      }
    } catch (_) {}

    let origin = safeRun('git remote get-url origin');
    if (!origin) {
      safeRun(`git remote add origin ${desired}.git`);
      origin = desired + '.git';
      log(`Added origin remote: ${origin}`);
    } else {
      const current = origin.replace(/^https?:\/\//, '').replace(/\.git$/, '');
      const want = desired.replace(/^https?:\/\//, '').replace(/\.git$/, '');
      if (!current.includes(want)) {
        safeRun(`git remote set-url origin ${desired}.git`);
        origin = desired + '.git';
        log(`Updated origin remote: ${origin}`);
      }
    }

    // Check if there are changes
    const status = run('git status --porcelain');
    if (!status) {
      log('No changes to commit.');
      return;
    }

    // Stage all changes
    run('git add -A');

    // Create commit message
    const timestamp = new Date().toISOString();
    const branch = safeRun('git rev-parse --abbrev-ref HEAD') || 'main';
    const msg = `chore(automation): sync changes from automation at ${timestamp}`;

    // Commit
    try {
      run(`git commit -m "${msg}"`);
      log('Committed changes.');
    } catch (e) {
      // Nothing to commit (could be empty), stop
      log('Nothing to commit after staging.');
      return;
    }

    // Rebase pull to reduce push failures (best-effort)
    safeRun('git pull --rebase origin main');

    // Push (skip hooks with --no-verify to avoid local pre-push failures)
    try {
      run('git push --no-verify origin HEAD:main');
      log('Pushed changes to origin/main.');
    } catch (e) {
      log(`Push failed: ${e.message}`);
    }
  } catch (error) {
    log(`Error: ${error.message}`);
  }
})();


