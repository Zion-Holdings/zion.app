#!/usr/bin/env node
/**
 * Recover and merge content from all remote branches that are not merged into main.
 * - Creates snapshots under recovered-branches/<branch>/ for all files differing from main
 * - Generates recovered-branches/INDEX.md with metadata
 * - Commits and pushes on the current branch
 * - Optional: merges current branch into main when --merge-main is provided
 */

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, opts = {}) {
  try {
    const res = execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', ...opts });
    return { ok: true, out: res.trim() };
  } catch (err) {
    const stdout = err?.stdout?.toString?.() || '';
    const stderr = err?.stderr?.toString?.() || '';
    return { ok: false, out: (stdout + stderr).trim() };
  }
}

function log(msg) {
  process.stdout.write(`${msg}\n`);
}

function ensureBotIdentity() {
  run('git config user.name "github-actions[bot]"');
  run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');
}

function fetchAll() {
  run('git fetch --all --prune --tags');
}

function currentBranch() {
  const res = run('git rev-parse --abbrev-ref HEAD');
  return res.ok ? res.out : 'HEAD';
}

function isMergedIntoMain(remoteBranch) {
  const res = spawnSync('bash', ['-lc', `git merge-base --is-ancestor "origin/${remoteBranch}" origin/main`], { encoding: 'utf8' });
  // exitCode 0 => ancestor; 1 => not ancestor; >1 => error
  return res.status === 0;
}

function listRemoteBranches() {
  const res = run("git for-each-ref --format='%(refname:short)' refs/remotes/origin");
  if (!res.ok) return [];
  return res.out
    .split(/\r?\n/)
    .map(s => s.replace(/^origin\//, ''))
    .filter(Boolean)
    .filter(b => b !== 'main' && b !== 'HEAD');
}

function listChangedFiles(branch) {
  const res = run(`git diff --name-only --diff-filter=ACMRTUXB "origin/main..origin/${branch}"`);
  if (!res.ok) return [];
  return res.out.split(/\r?\n/).filter(Boolean);
}

function showFile(branch, filePath) {
  const res = run(`git cat-file -e "origin/${branch}:${filePath}"`);
  if (!res.ok) return null;
  const content = run(`git show "origin/${branch}:${filePath}"`);
  return content.ok ? content.out : null;
}

function writeFileSafely(destPath, content) {
  const dir = path.dirname(destPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(destPath, content, 'utf8');
}

function getBranchMeta(branch) {
  const metaFmt = '%h|%ci|%an|%s';
  const res = run(`git log -1 --format='${metaFmt}' origin/${branch}`);
  if (!res.ok) return { short: 'unknown', date: '', author: '', subject: '' };
  const [short, date, author, subject] = res.out.split('|');
  return { short: short || 'unknown', date: date || '', author: author || '', subject: subject || '' };
}

function hasWorkingTreeChanges() {
  const res = run('git status --porcelain');
  return res.ok && Boolean(res.out);
}

function commitAll(message) {
  run('git add -A');
  const res = run(`git commit -m ${JSON.stringify(message)}`);
  return res.ok;
}

function push(refspec) {
  return run(`git push origin ${refspec}`);
}

function mergeIntoMain(fromBranch) {
  run('git checkout main');
  run('git pull --rebase origin main || true');
  const merged = run(`git merge --no-ff -m ${JSON.stringify(`recovery: merge snapshots from ${fromBranch}`)} ${fromBranch}`);
  if (!merged.ok) {
    // fallback: try a merge strategy that prefers current main changes
    run('git merge -X ours --no-edit ' + fromBranch);
  }
  push('HEAD:main');
}

function main() {
  const args = process.argv.slice(2);
  const limitIndex = args.findIndex(a => a === '--limit');
  const limit = limitIndex !== -1 ? Number(args[limitIndex + 1]) : Infinity;
  const batchIndex = args.findIndex(a => a === '--batch');
  const batchSize = batchIndex !== -1 ? Math.max(1, Number(args[batchIndex + 1])) : 25;
  const shouldMergeMain = args.includes('--merge-main');

  ensureBotIdentity();
  fetchAll();

  const cur = currentBranch();
  log(`Working on branch: ${cur}`);
  const allRemotes = listRemoteBranches();
  const candidates = allRemotes.filter(b => !isMergedIntoMain(b));
  log(`Found ${candidates.length} remote branches not merged into main`);

  const rootDir = path.join(process.cwd(), 'recovered-branches');
  fs.mkdirSync(rootDir, { recursive: true });
  const indexPath = path.join(rootDir, 'INDEX.md');
  const indexLines = ['# Recovered Branch Snapshots', ''];

  let processed = 0;
  let inBatch = 0;

  for (const branch of candidates) {
    if (processed >= limit) break;
    const meta = getBranchMeta(branch);
    const snapRoot = path.join(rootDir, branch);
    fs.mkdirSync(snapRoot, { recursive: true });

    const files = listChangedFiles(branch);
    const skip = (f) => (
      f.startsWith('node_modules/') || f.startsWith('.next/') || f.startsWith('dist/') ||
      f.startsWith('build/') || f.startsWith('coverage/') || /(^|\/)\.cache\//.test(f) ||
      f.endsWith('.lock') || f.endsWith('package-lock.json') || f.endsWith('pnpm-lock.yaml') || f.endsWith('yarn.lock')
    );

    if (files.length === 0) {
      // Snapshot a couple of canonical files if present
      ['README.md', 'package.json'].forEach((cand) => {
        const txt = showFile(branch, cand);
        if (txt != null) writeFileSafely(path.join(snapRoot, cand), txt);
      });
    } else {
      for (const f of files) {
        if (!f || skip(f)) continue;
        const txt = showFile(branch, f);
        if (txt == null) continue;
        writeFileSafely(path.join(snapRoot, f), txt);
      }
    }

    // write metadata per branch
    const metaTxt = [
      `branch: ${branch}`,
      `commit: ${meta.short}`,
      `date: ${meta.date}`,
      `author: ${meta.author}`,
      `subject: ${meta.subject}`,
      ''
    ].join('\n');
    writeFileSafely(path.join(snapRoot, 'META.txt'), metaTxt);

    indexLines.push(`- ${branch} (${meta.short})`);
    processed += 1;
    inBatch += 1;

    if (inBatch >= batchSize) {
      // Commit batch
      writeFileSafely(indexPath, indexLines.concat(['', `Recovered ${processed} branches as of ${new Date().toISOString()}.`]).join('\n'));
      if (hasWorkingTreeChanges()) {
        commitAll(`recovery: add snapshots for ${inBatch} branches (total ${processed})`);
        push(`HEAD:${cur}`);
      }
      inBatch = 0;
    }
  }

  // Finalize index and commit remainder
  writeFileSafely(indexPath, indexLines.concat(['', `Recovered ${processed} branches as of ${new Date().toISOString()}.`]).join('\n'));
  if (hasWorkingTreeChanges()) {
    commitAll(`recovery: finalize snapshots for ${processed} branches`);
    push(`HEAD:${cur}`);
  }

  if (shouldMergeMain) {
    mergeIntoMain(cur);
  }

  log(`Done. Recovered ${processed} branches.`);
}

if (require.main === module) {
  main();
}

