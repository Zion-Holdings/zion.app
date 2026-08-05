#!/usr/bin/env node
/**
 * content-loop/auto-deploy.cjs
 * Reads GH token, commits pending changes, pushes master+main, and dispatches Pages workflow.
 */
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_DIR = path.resolve(__dirname, '..');
const TOKEN_PATH = path.resolve(process.env.HOME || process.env.USERPROFILE || '~', '.gh_token');

function run(cmd, opts = {}) {
  const shell = process.platform === 'win32' ? 'bash' : undefined;
  const args = typeof cmd === 'string' ? cmd : cmd.join(' ');
  try {
    return spawnSync('bash', ['-lc', args], { cwd: REPO_DIR, encoding: 'utf8', stdio: 'pipe', shell, ...opts }).stdout.trim();
  } catch (e) {
    if (opts.allowFail) return '';
    throw new Error(`Command failed: ${args}\n${e.message}`);
  }
}

async function main() {
  // 1) ensure clean state
  run('git add -A');
  const status = run('git status --short');
  if (!status) {
    console.log('No changes to deploy.');
    return;
  }

  // 2) commit
  run("git commit -m 'chore: autonomous content loop batch'");

  // 3) push master
  run('git push origin master --force');
  run('git push origin master:main --force');

  // 4) dispatch Pages workflow via GitHub API
  let token = '';
  try { token = fs.readFileSync(TOKEN_PATH, 'utf8').trim(); } catch {}
  if (!token) {
    console.log('No GH token at', TOKEN_PATH, '- skipping workflow dispatch');
    return;
  }
  const payload = JSON.stringify({ ref: 'main' });
  const curl = `curl -s -X POST -H "Authorization: token ***" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" https://api.github.com/repos/Zion-support/zion-support.github.io/actions/workflows/gh-pages.yml/dispatches -d '${payload}'`;
  run(curl, { allowFail: true });
  console.log('Deploy complete.');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
