#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const GIT_REMOTE = String(process.env.AUTO_SYNC_REMOTE || "origin");
const GIT_BRANCH = String(process.env.AUTO_SYNC_BRANCH || "main");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] ${message}`;
  console.log(line);
}

function run(command, args, options = {}) {
  const execCwd = options.cwd || process.cwd();
  const result = spawnSync(command, args, {
    cwd: execCwd,
    env: process.env,
    shell: false,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 20
  });
  const stdout = (result.stdout || "").trim();
  const stderr = (result.stderr || "").trim();
  const status = typeof result.status === "number" ? result.status : 0;
  if (options.verbose) {
    log(`$ ${command} ${args.join(" ")}`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  }
  return { status, stdout, stderr };
}

function runGit(args, options = {}) {
  return run("git", args, options);
}

function ensureRepoRoot() {
  const gitDir = path.join(process.cwd(), ".git");
  if (!fs.existsSync(gitDir)) {
    throw new Error(`No .git directory found in ${process.cwd()}`);
  }
}

function repairIndexIfNeeded() {
  const probe = runGit(["status", "-sb"]);
  if (probe.status === 0) return;
  const indexPath = path.join(process.cwd(), ".git", "index");
  const backup = path.join(process.cwd(), ".git", `index.bak_${Date.now()}`);
  try {
    if (fs.existsSync(indexPath)) {
      fs.renameSync(indexPath, backup);
      log(`Repaired Git index by moving to ${path.basename(backup)}`);
    }
  } catch (err) {
    log(`Index move failed: ${String(err)}`);
  }
  runGit(["rebase", "--abort"]);
  runGit(["reset", "--mixed"], { verbose: true });
}

function stashAll() {
  const message = `pm2-auto-sync stash ${nowIso()}`;
  const res = runGit(["stash", "push", "-u", "-m", message]);
  if (res.status !== 0) {
    log(`Stash skipped or failed (status ${res.status}): ${res.stderr}`);
  } else {
    log(`Created stash: ${message}`);
  }
}

function fetchOrigin() {
  const res = runGit(["fetch", "--prune", GIT_REMOTE], { verbose: true });
  if (res.status !== 0) throw new Error(`git fetch failed: ${res.stderr}`);
}

function parseDivergence(output) {
  // Expected format: "<ahead>\t<behind>" or "<ahead> <behind>"
  const parts = output.trim().split(/\s+/);
  const ahead = parseInt(parts[0] || "0", 10) || 0;
  const behind = parseInt(parts[1] || "0", 10) || 0;
  return { ahead, behind };
}

function getDivergence() {
  const res = runGit(["rev-list", "--left-right", "--count", `HEAD...${GIT_REMOTE}/${GIT_BRANCH}`]);
  if (res.status !== 0) throw new Error(`divergence check failed: ${res.stderr}`);
  return parseDivergence(res.stdout);
}

function backupUntracked(backupRoot) {
  try {
    const list = runGit(["ls-files", "--others", "--exclude-standard", "-z"]);
    if (list.status !== 0) return 0;
    const files = list.stdout ? list.stdout.split("\u0000").filter(Boolean) : [];
    if (files.length === 0) return 0;
    for (const relative of files) {
      const src = path.join(process.cwd(), relative);
      const dest = path.join(backupRoot, relative);
      const dir = path.dirname(dest);
      fs.mkdirSync(dir, { recursive: true });
      try {
        fs.renameSync(src, dest);
      } catch (err) {
        // If rename fails (e.g., cross-device), try copy+unlink
        try {
          fs.copyFileSync(src, dest);
          fs.unlinkSync(src);
        } catch (inner) {
          log(`Backup failed for ${relative}: ${String(inner)}`);
        }
      }
    }
    return files.length;
  } catch (err) {
    log(`Backup of untracked failed: ${String(err)}`);
    return 0;
  }
}

function hardResetToOriginMain() {
  const res = runGit(["reset", "--hard", `${GIT_REMOTE}/${GIT_BRANCH}`], { verbose: true });
  if (res.status !== 0) throw new Error(`hard reset failed: ${res.stderr}`);
}

function tryRebaseTheirs() {
  const res = runGit(["rebase", "-X", "theirs", `${GIT_REMOTE}/${GIT_BRANCH}`], { verbose: true });
  if (res.status === 0) return true;
  runGit(["rebase", "--abort"]);
  return false;
}

function cleanUntracked(force = true) {
  const args = ["clean", "-d"]; // directories too
  if (force) args.push("-f");
  args.push("-x"); // include ignored files for a truly clean state
  runGit(args, { verbose: true });
}

function pushIfAhead() {
  const { ahead, behind } = getDivergence();
  if (ahead > 0 && behind === 0) {
    const res = runGit(["push", GIT_REMOTE, GIT_BRANCH], { verbose: true });
    if (res.status === 0) {
      log(`Pushed ${ahead} commit(s) to ${GIT_REMOTE}/${GIT_BRANCH}`);
    } else {
      log(`Push skipped/failed: ${res.stderr}`);
    }
  } else {
    log(`No push needed (ahead=${ahead}, behind=${behind})`);
  }
}

function maybeGc() {
  if (String(process.env.AUTO_SYNC_GC || "0") === "1") {
    runGit(["gc", "--prune=now"], { verbose: true });
  }
}

(function main() {
  try {
    ensureRepoRoot();
    log("Starting pm2-auto-sync run");
    repairIndexIfNeeded();

    // Always stash to avoid local workspace interference
    stashAll();

    fetchOrigin();
    let { ahead, behind } = getDivergence();
    log(`Divergence before sync: ahead=${ahead}, behind=${behind}`);

    const strategy = (process.env.AUTO_SYNC_STRATEGY || "hardreset").toLowerCase();
    const doClean = String(process.env.AUTO_SYNC_CLEAN || "1") === "1";

    if (ahead === 0 && behind === 0) {
      log("Already up-to-date with origin/main");
    } else if (behind > 0 && ahead === 0) {
      // Simple fast-forward via hard reset for speed and determinism
      if (doClean) {
        const backupDir = path.join(process.cwd(), "tmp", `untracked_backup_${Date.now()}`);
        fs.mkdirSync(backupDir, { recursive: true });
        const backedUp = backupUntracked(backupDir);
        if (backedUp > 0) log(`Backed up ${backedUp} untracked file(s) to ${backupDir}`);
        cleanUntracked(true);
      }
      hardResetToOriginMain();
    } else {
      // Diverged or ahead-only
      if (strategy === "rebase") {
        const ok = tryRebaseTheirs();
        if (!ok) {
          log("Rebase failed, falling back to hard reset");
          if (doClean) {
            const backupDir = path.join(process.cwd(), "tmp", `untracked_backup_${Date.now()}`);
            fs.mkdirSync(backupDir, { recursive: true });
            const backedUp = backupUntracked(backupDir);
            if (backedUp > 0) log(`Backed up ${backedUp} untracked file(s) to ${backupDir}`);
            cleanUntracked(true);
          }
          hardResetToOriginMain();
        }
      } else {
        if (doClean) {
          const backupDir = path.join(process.cwd(), "tmp", `untracked_backup_${Date.now()}`);
          fs.mkdirSync(backupDir, { recursive: true });
          const backedUp = backupUntracked(backupDir);
          if (backedUp > 0) log(`Backed up ${backedUp} untracked file(s) to ${backupDir}`);
          cleanUntracked(true);
        }
        hardResetToOriginMain();
      }
    }

    maybeGc();

    // Final verification and push if needed
    ({ ahead, behind } = getDivergence());
    log(`Divergence after sync: ahead=${ahead}, behind=${behind}`);
    pushIfAhead();

    log("pm2-auto-sync completed");
    process.exit(0);
  } catch (err) {
    log(`FATAL: ${String(err && err.stack ? err.stack : err)}`);
    process.exit(1);
  }
})();


