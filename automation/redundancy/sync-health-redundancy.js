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
  const line = `[${nowIso()}] [REDUNDANCY] ${message}`;
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
  const message = `sync-health-redundancy stash ${nowIso()}`;
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

function backupUntracked(backupRoot) {
  try {
    const list = runGit(["ls-files", "--others", "--exclude-standard", "-z"]);
    if (list.status !== 0) return 0;
    const files = list.stdout.split("\0").filter(Boolean);
    if (files.length === 0) return 0;
    
    let backedUp = 0;
    for (const file of files) {
      try {
        const sourcePath = path.join(process.cwd(), file);
        const backupPath = path.join(backupRoot, file);
        const backupDir = path.dirname(backupPath);
        if (!fs.existsSync(backupDir)) {
          fs.mkdirSync(backupDir, { recursive: true });
        }
        fs.copyFileSync(sourcePath, backupPath);
        backedUp++;
      } catch (err) {
        log(`Failed to backup ${file}: ${String(err)}`);
      }
    }
    return backedUp;
  } catch (err) {
    log(`Backup process failed: ${String(err)}`);
    return 0;
  }
}

function safeSync() {
  log("Starting safe sync process");
  
  try {
    ensureRepoRoot();
    repairIndexIfNeeded();
    
    // Stash any local changes
    stashAll();
    
    // Fetch latest from origin
    fetchOrigin();
    
    // Check divergence
    const divergence = getDivergence();
    log(`Divergence: ${divergence.ahead} ahead, ${divergence.behind} behind`);
    
    if (divergence.behind > 0) {
      log("Repository is behind origin, performing safe reset");
      
      // Create backup of untracked files
      const backupRoot = path.join(process.cwd(), ".git", `backup_${Date.now()}`);
      const backedUp = backupUntracked(backupRoot);
      if (backedUp > 0) {
        log(`Backed up ${backedUp} untracked files to ${path.basename(backupRoot)}`);
      }
      
      // Reset to origin/main
      const resetRes = runGit(["reset", "--hard", `${GIT_REMOTE}/${GIT_BRANCH}`], { verbose: true });
      if (resetRes.status !== 0) {
        throw new Error(`Reset failed: ${resetRes.stderr}`);
      }
      
      // Clean untracked files
      const cleanRes = runGit(["clean", "-fd"], { verbose: true });
      if (cleanRes.status !== 0) {
        log(`Clean warning: ${cleanRes.stderr}`);
      }
      
      log("Safe sync completed successfully");
      return { success: true, backedUp, divergence };
    } else {
      log("Repository is up to date, no sync needed");
      return { success: true, backedUp: 0, divergence };
    }
  } catch (error) {
    log(`Safe sync failed: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function pushIfAhead() {
  try {
    const divergence = getDivergence();
    if (divergence.ahead > 0) {
      log(`Repository is ${divergence.ahead} commits ahead, pushing to origin`);
      const pushRes = runGit(["push", "origin", "HEAD:main"], { verbose: true });
      if (pushRes.status === 0) {
        log("Successfully pushed to origin/main");
        return { success: true, pushed: true };
      } else {
        log(`Push failed: ${pushRes.stderr}`);
        return { success: false, error: pushRes.stderr };
      }
    } else {
      log("No push needed, repository is not ahead of origin");
      return { success: true, pushed: false };
    }
  } catch (error) {
    log(`Push check failed: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateHealthReport() {
  const report = {
    generatedAt: nowIso(),
    syncResult: null,
    pushResult: null,
    summary: "Sync health redundancy report"
  };

  try {
    // Run safe sync
    const syncResult = safeSync();
    report.syncResult = syncResult;
    
    // Check if push is needed
    const pushResult = pushIfAhead();
    report.pushResult = pushResult;
    
    // Generate summary
    if (syncResult.success && pushResult.success) {
      report.summary = `Sync health completed successfully. Sync: ${syncResult.backedUp || 0} files backed up, Push: ${pushResult.pushed ? 'Yes' : 'No'}`;
    } else {
      report.summary = `Sync health completed with issues. Sync: ${syncResult.success ? 'OK' : 'Failed'}, Push: ${pushResult.success ? 'OK' : 'Failed'}`;
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "sync-health-redundancy-report.md");
    const reportContent = `# Sync Health Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## Sync Result
- Success: ${report.syncResult.success ? "✅ Yes" : "❌ No"}
- Files Backed Up: ${report.syncResult.backedUp || 0}
- Divergence: ${report.syncResult.divergence ? `${report.syncResult.divergence.ahead} ahead, ${report.syncResult.divergence.behind} behind` : "Unknown"}

## Push Result
- Success: ${report.pushResult.success ? "✅ Yes" : "❌ No"}
- Pushed: ${report.pushResult.pushed ? "✅ Yes" : "❌ No"}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

    fs.writeFileSync(reportPath, reportContent);
    log(`Health report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating health report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

// Main execution
function main() {
  log("Starting sync health redundancy process");
  
  try {
    const report = generateHealthReport();
    log(`Sync health redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Sync health redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { safeSync, pushIfAhead, generateHealthReport };