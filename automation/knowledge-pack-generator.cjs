#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function safeJsonParse(text, fallback) {
  try { return JSON.parse(text); } catch { return fallback; }
}

function getRepoRoot() {
  try {
    return run('git rev-parse --show-toplevel') || process.cwd();
  } catch {
    return process.cwd();
  }
}

function listDirs(baseDir) {
  try {
    return fs.readdirSync(baseDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
      .sort();
  } catch {
    return [];
  }
}

function countFilesRecursively(dir) {
  let count = 0;
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) count += countFilesRecursively(p);
      else count += 1;
    }
  } catch {}
  return count;
}

function getLastCommitEpochForPath(p) {
  const cmd = `git log -1 --format=%ct -- ${JSON.stringify(p)}`;
  const out = run(cmd);
  const n = Number(out);
  return Number.isFinite(n) ? n : 0;
}

function buildDirectoryStats(root) {
  const includeTop = ['pages', 'components', 'automation', 'netlify', 'public', 'scripts', 'styles', 'docs', 'data'];
  const stats = [];
  for (const dir of includeTop) {
    const abs = path.join(root, dir);
    if (!fs.existsSync(abs)) continue;
    const files = countFilesRecursively(abs);
    const lastCommit = getLastCommitEpochForPath(abs);
    stats.push({ name: dir, files, lastCommitEpoch: lastCommit, lastCommitIso: lastCommit ? new Date(lastCommit * 1000).toISOString() : null });
  }
  return stats.sort((a, b) => b.lastCommitEpoch - a.lastCommitEpoch);
}

function readFunctionsManifest(root) {
  const manifestPath = path.join(root, 'netlify', 'functions', 'functions-manifest.json');
  if (!fs.existsSync(manifestPath)) return { generatedAt: new Date().toISOString(), functions: [] };
  return safeJsonParse(fs.readFileSync(manifestPath, 'utf8'), { generatedAt: new Date().toISOString(), functions: [] });
}

(function main() {
  const root = getRepoRoot();
  const outDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });

  const functionsManifest = readFunctionsManifest(root);
  const directoryStats = buildDirectoryStats(root);

  const recentCommits = safeJsonParse(run('git log -10 --pretty=format:%H:::%ct:::%s'), []) || [];
  const recent = Array.isArray(recentCommits) ? [] : String(recentCommits)
    .split('\n')
    .filter(Boolean)
    .map(line => {
      const [hash, epoch, subject] = line.split(':::');
      return { hash, epoch: Number(epoch), iso: Number(epoch) ? new Date(Number(epoch) * 1000).toISOString() : null, subject };
    });

  const knowledgePack = {
    generatedAt: new Date().toISOString(),
    repo: path.basename(root),
    summary: {
      totalFiles: countFilesRecursively(root),
      topAreasByRecentChange: directoryStats.slice(0, 5).map(s => s.name),
      functionCount: functionsManifest.functions.length
    },
    directoryStats,
    functions: functionsManifest.functions,
    recentCommits: recent
  };

  const outPath = path.join(outDir, 'knowledge-pack.json');
  fs.writeFileSync(outPath, JSON.stringify(knowledgePack, null, 2) + '\n', 'utf8');
  process.stdout.write(`Wrote ${outPath}\n`);
})();