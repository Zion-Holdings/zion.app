#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const IGNORE_DIRS = new Set(['.git', 'node_modules', '.next', 'out', 'dist', 'build', '.cache']);
const CONFLICT_START = '<<<<<<< ';
const CONFLICT_MID = '=======\n';
// We will search for lines starting with '>>>>>>>' for end

function log(message) {
  process.stdout.write(`[merge-conflict-auto-resolver] ${message}\n`);
}

function isTextFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const textExts = new Set(['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.json', '.md', '.mdx', '.toml', '.yml', '.yaml', '.css', '.scss', '.sass', '.txt', '.html']);
  if (textExts.has(ext)) return true;
  // Fallback: small files without null bytes
  try {
    const buf = fs.readFileSync(filePath);
    if (buf.length > 2_000_000) return false; // skip huge files
    return !buf.includes(0);
  } catch {
    return false;
  }
}

function walkDir(dir, out = []) {
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) walkDir(p, out);
    } else if (entry.isFile()) {
      out.push(p);
    }
  }
  return out;
}

function resolveConflictContent(source) {
  // Generic strategy: prefer HEAD side when encountering conflict markers
  const lines = source.split(/\r?\n/);
  const out = [];
  let i = 0;
  let changed = false;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('<<<<<<< ')) {
      changed = true;
      // consume HEAD block until '======='
      i += 1;
      const headBuf = [];
      while (i < lines.length && lines[i] + '\n' !== CONFLICT_MID && lines[i] !== '=======') {
        headBuf.push(lines[i]);
        i += 1;
      }
      // skip the '======='
      if (i < lines.length && (lines[i] === '=======' || lines[i] + '\n' === CONFLICT_MID)) i += 1;
      // skip incoming block until '>>>>>>>'
      while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
        i += 1;
      }
      // skip the '>>>>>>>' line
      if (i < lines.length && lines[i].startsWith('>>>>>>>')) i += 1;
      // keep HEAD content
      out.push(...headBuf);
      continue;
    }
    out.push(line);
    i += 1;
  }
  return { content: out.join('\n'), changed };
}

function resolveSpecialCases(filePath, source) {
  // For now, we rely on generic HEAD-prefer strategy. Extend here if needed.
  return { content: source, changed: false };
}

(function main() {
  const files = walkDir(REPO_ROOT);
  let totalChanged = 0;
  for (const file of files) {
    if (!isTextFile(file)) continue;
    let src;
    try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }
    if (!src.includes('<<<<<<<') || !src.includes('>>>>>>>')) continue;

    const special = resolveSpecialCases(file, src);
    let content = special.content;
    let changed = special.changed;

    const generic = resolveConflictContent(content);
    content = generic.content;
    changed = changed || generic.changed;

    if (changed) {
      fs.writeFileSync(file, content);
      totalChanged += 1;
      log(`Resolved conflicts in ${path.relative(REPO_ROOT, file)}`);
    }
  }

  log(`Done. Files updated: ${totalChanged}`);
  process.exit(0);
})();