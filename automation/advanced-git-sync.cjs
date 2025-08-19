#!/usr/bin/env node

const { execSync } = require('child_process');

function sh(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' }).trim();
  } catch (e) {
    process.stderr.write(e.stderr?.toString?.() || String(e));
    return '';
  }
}

function bot() {
  sh('git config user.name "github-actions[bot]"');
  sh('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
}

function hasChanges() {
  return sh('git status --porcelain') !== '';
}

function commitAll(message) {
  sh('git add -A');
  const out = sh(`git commit -m ${JSON.stringify(message)}`);
  return out.includes('files changed') || out.includes('create mode') || out.includes('insertions') || out.includes('chore(');
}

function tryPush(refspec) {
  const out = sh(`git push origin ${refspec}`);
  return /https:\/\/.+|Create a pull request|Everything up-to-date|\[new branch\]/.test(out) || out !== '';
}

(function main() {
  bot();
  sh('git fetch --all --prune');
  sh('git checkout main');
  sh('git pull --rebase origin main || true');

  if (hasChanges()) {
    commitAll('chore(sync): advanced autonomous sync');
  }

  if (!tryPush('HEAD:main')) {
    sh('git pull --rebase origin main || true');
    tryPush('HEAD:main');
  }

  sh('git push --tags || true');
})();


