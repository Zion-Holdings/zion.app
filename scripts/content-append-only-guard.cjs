#!/usr/bin/env node
/*
 Append-only content guard
 - Blocks commits that modify or delete existing lines in designated content paths
 - Allows: new files, and modifications that only add lines (no deletions)
 - Paths are configured in content-append-only.config.json as directory prefixes
 - Bypass with APPEND_ONLY_BYPASS=1
*/

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function readConfig(repoRoot) {
  const configPath = path.join(repoRoot, 'content-append-only.config.json');
  if (fs.existsSync(configPath)) {
    try {
      const raw = fs.readFileSync(configPath, 'utf8');
      const parsed = JSON.parse(raw);
      const enforcedPaths = Array.isArray(parsed.enforcedPaths) ? parsed.enforcedPaths : [];
      return { enforcedPaths };
    } catch (err) {
      console.error('content-append-only-guard: Failed to read config. Falling back to defaults. Error:', err.message);
    }
  }
  return {
    enforcedPaths: [
      'pages/reports/updates/',
      'public/reports/',
      'data/reports/'
    ]
  };
}

function normalize(p) {
  return p.replace(/\\/g, '/');
}

function isEnforced(filePath, enforcedPrefixes) {
  const n = normalize(filePath);
  return enforcedPrefixes.some(prefix => n.startsWith(prefix));
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.cwd();
  }
}

function getStagedChanges() {
  // -z for NUL-delimited output. name-status includes status and paths; renames include two paths
  const res = spawnSync('git', ['diff', '--cached', '--name-status', '-z'], { encoding: 'utf8' });
  if (res.status !== 0) {
    throw new Error('Failed to read staged changes');
  }
  const out = res.stdout;
  if (!out) return [];
  const tokens = out.split('\u0000').filter(Boolean);
  const entries = [];
  for (let i = 0; i < tokens.length;) {
    const status = tokens[i++];
    // status can be like 'M', 'A', 'D', 'R100', 'C75'
    if (!status) break;
    const code = status[0];
    const score = status.slice(1); // may be ''
    const path1 = tokens[i++];
    let path2 = null;
    if (code === 'R' || code === 'C') {
      path2 = tokens[i++];
    }
    entries.push({ status: code, score, path1, path2 });
  }
  return entries;
}

function hasDeletionsInPatch(filePath) {
  const res = spawnSync('git', ['diff', '--cached', '-U0', '--', filePath], { encoding: 'utf8' });
  if (res.status !== 0) {
    // If we cannot read diff, be conservative and fail
    return true;
  }
  const lines = res.stdout.split('\n');
  for (const line of lines) {
    if (line.startsWith('--- ') || line.startsWith('+++ ') || line.startsWith('@@')) continue;
    if (line.startsWith('-')) {
      return true; // deletion detected
    }
  }
  return false;
}

function main() {
  if (process.env.APPEND_ONLY_BYPASS === '1') {
    console.log('content-append-only-guard: Bypass enabled via APPEND_ONLY_BYPASS=1');
    return;
  }

  const repoRoot = getRepoRoot();
  const { enforcedPaths } = readConfig(repoRoot);
  if (!enforcedPaths || enforcedPaths.length === 0) {
    return; // nothing to enforce
  }

  const staged = getStagedChanges();
  if (staged.length === 0) return;

  const violations = [];

  for (const entry of staged) {
    const { status, path1, path2 } = entry;
    const filePath = path2 || path1; // renamed/copied new path

    if (!isEnforced(filePath, enforcedPaths)) continue;

    if (status === 'A') {
      continue; // new files allowed
    }
    if (status === 'M') {
      const hasDel = hasDeletionsInPatch(filePath);
      if (hasDel) {
        violations.push({ file: filePath, reason: 'modification contains deletions of existing content' });
      }
      continue;
    }
    if (status === 'D') {
      violations.push({ file: filePath, reason: 'deletion not allowed in append-only paths' });
      continue;
    }
    if (status === 'R' || status === 'C') {
      violations.push({ file: `${path1} -> ${path2}`, reason: 'rename/copy not allowed in append-only paths' });
      continue;
    }
    // Any other status: be conservative
    violations.push({ file: filePath, reason: `status ${status} not allowed in append-only paths` });
  }

  if (violations.length > 0) {
    console.error('\n✖ Append-only content guard blocked this commit for protected content paths.');
    console.error('Protected paths:', enforcedPaths.join(', '));
    for (const v of violations) {
      console.error(` - ${v.file}: ${v.reason}`);
    }
    console.error('\nAllowed actions in protected paths:');
    console.error(' - Add new files');
    console.error(' - Modify existing files only by adding new lines (no deletions)');
    console.error('\nIf this is an emergency maintenance change, a maintainer may bypass with APPEND_ONLY_BYPASS=1, but this is discouraged.');
    process.exit(1);
  }
}

try {
  main();
} catch (err) {
  console.error('content-append-only-guard: Unexpected error:', err && err.message ? err.message : err);
  process.exit(1);
}


