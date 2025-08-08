#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');

function run(cmd, opts = {}) {
  console.log(`$ ${cmd}`);
  try {
    const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
    process.stdout.write(out);
    return { ok: true, out };
  } catch (e) {
    console.error(e.stdout?.toString?.() || e.message);
    return { ok: false, out: e.stdout?.toString?.() || '' };
  }
}

function hasChanges() {
  const { out } = run('git status --porcelain');
  return out && out.trim().length > 0;
}

function getTasks() {
  const list = process.env.AUTOBOT_TASKS || '';
  const tasks = list
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  return tasks;
}

function ensureGitConfig() {
  const name = process.env.GIT_AUTHOR_NAME || 'zion-autobot';
  const email = process.env.GIT_AUTHOR_EMAIL || 'autobot@users.noreply.github.com';
  run(`git config user.name "${name}"`);
  run(`git config user.email "${email}"`);
}

function commitAndPush(branchName) {
  run('git add -A');
  const ts = new Date().toISOString();
  const msg = `chore(autobot): automated improvements @ ${ts}`;
  run(`git commit -m "${msg}"`);
  // Try push to same branch
  const current = run('git rev-parse --abbrev-ref HEAD');
  const onMain = current.out.trim() === 'main' || current.out.trim() === 'master';
  if (!onMain) {
    run('git push --no-verify');
    return { pushed: true };
  }
  // If on main, create a new branch
  const safeBranch = branchName || `autobot/${ts.replace(/[:.]/g, '-')}`;
  run(`git checkout -b ${safeBranch}`);
  run('git push --set-upstream origin ' + safeBranch);
  return { pushed: true, branch: safeBranch };
}

async function main() {
  ensureGitConfig();

  const tasks = getTasks();
  if (tasks.length === 0) {
    console.log('No AUTOBOT_TASKS specified. Exiting.');
    process.exit(0);
  }

  console.log('Running tasks:', tasks);

  for (const task of tasks) {
    // Prefer npm scripts when possible
    const cmd = `npm run ${task}`;
    const res = run(cmd);
    if (!res.ok) {
      console.warn(`Task failed: ${task}`);
    }
  }

  // After tasks, auto-fix lint and type issues opportunistically
  run('npm run lint --silent');

  if (!hasChanges()) {
    console.log('No changes detected. Exiting.');
    return;
  }

  const { branch } = commitAndPush();

  // Try to open PR via gh if available
  const gh = run('gh --version');
  if (gh.ok && branch) {
    run(`gh pr create --fill --base main --head ${branch}`);
  } else {
    console.log('PR step skipped (gh not available or not on new branch).');
  }
}

main().catch((e) => {
  console.error('Autobot error:', e);
  process.exit(1);
});