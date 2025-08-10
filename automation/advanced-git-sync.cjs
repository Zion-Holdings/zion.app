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

function createBranch(prefix) {
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const name = `${prefix}/${ts}`;
  sh(`git checkout -B ${name}`);
  return name;
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

function createPR(branch, title, body) {
  // Use GitHub CLI if available; otherwise use REST via curl + token
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const repo = process.env.GITHUB_REPOSITORY || '';
  if (sh('which gh')) {
    sh(`gh pr create --fill --title ${JSON.stringify(title)} --body ${JSON.stringify(body)} --base main --head ${branch} || true`);
    sh(`gh pr merge --auto --squash || true`);
    return true;
  }
  if (token && repo) {
    const data = JSON.stringify({ title, head: branch, base: 'main', body });
    const out = sh(`curl -s -X POST -H 'Authorization: Bearer ${token}' -H 'Accept: application/vnd.github+json' https://api.github.com/repos/${repo}/pulls -d ${JSON.stringify(data)} || true`);
    process.stdout.write(out + '\n');
    return true;
  }
  return false;
}

(function main() {
  bot();
  sh('git fetch --all --prune');
  sh('git checkout -B automation/advanced-git-sync-temp');
  sh('git pull --rebase origin main || true');

  if (hasChanges()) {
    commitAll('chore(sync): advanced autonomous sync');
  }

  // Try to push directly to main first
  if (!tryPush('HEAD:main')) {
    const branch = createBranch('automation/git-sync');
    if (!hasChanges()) {
      // force a noop commit so PR can exist if needed
      sh('git commit --allow-empty -m "chore(sync): empty commit to trigger PR"');
    }
    tryPush('HEAD');
    createPR(branch, 'chore(sync): advanced autonomous sync', 'Automated sync from advanced runner.');
  }

  sh('git push --tags || true');
})();