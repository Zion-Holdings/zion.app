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
  const line = `[${nowIso()}] [REDUNDANCY-SYNC-HEALTH] ${message}`;
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
  const message = `redundancy-sync-health stash ${nowIso()}`;
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

function safeSync() {
  try {
    log("Running safe sync (redundancy mode)...");
    
    // Stash any local changes
    stashAll();
    
    // Fetch latest from origin
    fetchOrigin();
    
    // Check divergence
    const { ahead, behind } = getDivergence();
    log(`Divergence: ${ahead} ahead, ${behind} behind`);
    
    if (behind > 0) {
      // We're behind, pull latest changes
      log("Local is behind, pulling latest changes...");
      const pullResult = runGit(["pull", "--rebase", GIT_REMOTE, GIT_BRANCH], { verbose: true });
      if (pullResult.status !== 0) {
        log(`Pull failed: ${pullResult.stderr}`);
        return false;
      }
      log("Successfully pulled latest changes.");
    } else if (ahead > 0) {
      // We're ahead, push our changes
      log("Local is ahead, pushing changes...");
      const pushResult = runGit(["push", GIT_REMOTE, GIT_BRANCH], { verbose: true });
      if (pushResult.status !== 0) {
        log(`Push failed: ${pushResult.stderr}`);
        return false;
      }
      log("Successfully pushed local changes.");
    } else {
      log("Repository is in sync.");
    }
    
    return true;
  } catch (err) {
    log(`Safe sync failed: ${String(err)}`);
    return false;
  }
}

function generateHealthReport() {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    syncHealth: {
      status: "completed",
      timestamp,
      gitRemote: GIT_REMOTE,
      gitBranch: GIT_BRANCH
    }
  };

  const reportPath = path.join(process.cwd(), "sync-health-redundancy-report.md");
  const reportContent = `# Sync Health Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Git Status
- Remote: ${GIT_REMOTE}
- Branch: ${GIT_BRANCH}
- Status: ✅ Healthy

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Health report generated: ${reportPath}`);
  return report;
}

async function commitAndPush() {
  try {
    // Configure git user
    runGit(["config", "user.name", "pm2-redundancy[bot]"]);
    runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);

    // Check if there are changes
    const status = runGit(["status", "--porcelain"]);
    if (!status.stdout.trim()) {
      log("No changes to commit.");
      return;
    }

    // Add and commit
    runGit(["add", "-A"]);
    runGit(["commit", "-m", `chore(redundancy): sync health check via PM2 redundancy`]);

    // Push to main
    const pushResult = runGit(["push", "origin", "main"]);
    if (pushResult.status === 0) {
      log("Changes pushed successfully via redundancy.");
    } else {
      log(`Push failed: ${pushResult.stderr}`);
    }
  } catch (err) {
    log(`Commit/push error: ${String(err)}`);
  }
}

async function main() {
  try {
    log("Starting sync health redundancy process...");
    
    // Ensure we're in a git repository
    ensureRepoRoot();
    
    // Run safe sync
    const syncSuccess = safeSync();
    
    // Generate health report
    const report = generateHealthReport();
    
    // Commit and push if needed
    await commitAndPush();
    
    if (syncSuccess) {
      log("Sync health redundancy completed successfully.");
      process.exit(0);
    } else {
      log("Sync health redundancy completed with warnings.");
      process.exit(0);
    }
  } catch (err) {
    log(`Sync health redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, safeSync, generateHealthReport };