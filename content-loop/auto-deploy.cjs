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
  const args = typeof cmd === 'string' ? cmd : cmd.join(' ');
  try {
    const result = spawnSync('bash', ['-lc', args], { cwd: REPO_DIR, encoding: 'utf8', stdio: 'pipe', ...opts });
    if (result.status !== 0 && !opts.allowFail) {
      throw new Error(`Command failed: ${args}\n${result.stdout || result.stderr || ''}`.trim());
    }
    return (result.stdout || '').trim();
  } catch (e) {
    if (opts.allowFail) return '';
    throw new Error(`Command failed: ${args}\n${e.message}`);
  }
}

async function waitForRun(createdAt) {
  const token = fs.readFileSync(TOKEN_PATH, 'utf8').trim();
  const repo = 'Zion-support/zion-support.github.io';
  const auth = `Authorization: token ${token}`
  const started = Date.now();
  const timeoutMs = 20 * 60 * 1000;
  while (Date.now() - started < timeoutMs) {
    const list = JSON.parse(run(`curl -s -H "${auth}" -H "Accept: application/vnd.github+json" https://api.github.com/repos/${repo}/actions/workflows/gh-pages.yml/runs?per_page=5`, { allowFail: true }) || '{"workflow_runs":[]}');
    const foundRun = (list.workflow_runs || []).find(r => r.head_sha && r.created_at && r.created_at >= createdAt);
    if (!foundRun) {
      await new Promise(r => setTimeout(r, 5000));
      continue;
    }
    if (foundRun.status === 'completed') {
      return foundRun.conclusion === 'success';
    }
    await new Promise(r => setTimeout(r, 5000));
  }
  return false;
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

  // 3) push master/main
  run('git push origin HEAD:master --force');
  run('git push origin HEAD:main --force');

  // 4) dispatch Pages workflow via GitHub API
  let token = '';
  try { token = fs.readFileSync(TOKEN_PATH, 'utf8').trim(); } catch {}
  if (!token) {
    console.log('No GH token at', TOKEN_PATH, '- skipping workflow dispatch');
    return;
  }
  const payload = JSON.stringify({ ref: 'main' });
  const createdAt = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
  const curl = `curl -s -o /dev/null -w '%{http_code}' -X POST -H "Authorization: token ${token}" -H "Accept: application/vnd.github+json" -H "Content-Type: application/json" https://api.github.com/repos/Zion-support/zion-support.github.io/actions/workflows/gh-pages.yml/dispatches -d '${payload}'`;
  const code = run(curl, { allowFail: true });
  if ((code || '').includes('204')) {
    console.log('Dispatched Pages workflow. Waiting for completion...');
    const ok = await waitForRun(createdAt);
    console.log(ok ? 'Deploy complete.' : 'Deploy did not complete successfully.');
  } else {
    console.log('Workflow dispatch failed:', code);
  }
}

main().catch((e) => { console.error(e.message); process.exit(1); });
