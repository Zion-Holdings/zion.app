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

function backupUntracked(backupRoot) {
  try {
    const list = runGit(["ls-files", "--others", "--exclude-standard", "-z"]);
    if (list.status !== 0) return 0;
    const files = list.stdout.split("\0").filter(Boolean);
    if (files.length === 0) return 0;
    
    const backupDir = path.join(backupRoot, `untracked_${Date.now()}`);
    fs.mkdirSync(backupDir, { recursive: true });
    
    let backedUp = 0;
    for (const file of files) {
      try {
        const sourcePath = path.join(process.cwd(), file);
        const destPath = path.join(backupDir, file);
        const destDir = path.dirname(destPath);
        fs.mkdirSync(destDir, { recursive: true });
        fs.copyFileSync(sourcePath, destPath);
        backedUp++;
      } catch (err) {
        log(`Failed to backup ${file}: ${String(err)}`);
      }
    }
    log(`Backed up ${backedUp} untracked files to ${backupDir}`);
    return backedUp;
  } catch (err) {
    log(`Backup failed: ${String(err)}`);
    return 0;
  }
}

function runSafePm2AutoSync() {
  log("Running pm2-auto-sync in safe mode...");
  
  try {
    // Set safe environment variables
    const env = {
      ...process.env,
      AUTO_SYNC_STRATEGY: "hardreset",
      AUTO_SYNC_CLEAN: "0"
    };
    
    const result = spawnSync("node", ["automation/pm2-auto-sync.js"], {
      cwd: process.cwd(),
      env: env,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    
    if (result.status === 0) {
      log("pm2-auto-sync completed successfully");
      return true;
    } else {
      log(`pm2-auto-sync failed with status ${result.status}: ${result.stderr}`);
      return false;
    }
  } catch (err) {
    log(`pm2-auto-sync execution error: ${String(err)}`);
    return false;
  }
}

function pushIfAhead() {
  try {
    // Check if we have local commits not on origin
    const aheadCheck = runGit(["rev-list", "--left-right", "--count", `HEAD...${GIT_REMOTE}/${GIT_BRANCH}`]);
    if (aheadCheck.status !== 0) {
      log(`Ahead check failed: ${aheadCheck.stderr}`);
      return false;
    }
    
    const { ahead } = parseDivergence(aheadCheck.stdout);
    if (ahead > 0) {
      log(`Repository is ${ahead} commits ahead of origin, pushing...`);
      
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      const pushResult = runGit(["push", "origin", "HEAD:main"]);
      if (pushResult.status === 0) {
        log("Successfully pushed to origin/main");
        return true;
      } else {
        log(`Push failed: ${pushResult.stderr}`);
        return false;
      }
    } else {
      log("No push needed - repository is not ahead of origin");
      return true;
    }
  } catch (err) {
    log(`Push error: ${String(err)}`);
    return false;
  }
}

function generateHealthReport(syncResult, pushResult) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "sync-health",
    syncResult: syncResult,
    pushResult: pushResult,
    summary: {
      syncSuccessful: syncResult,
      pushSuccessful: pushResult,
      overallHealth: syncResult && pushResult ? "healthy" : "degraded"
    }
  };

  const reportPath = path.join(process.cwd(), "sync-health-redundancy-report.md");
  const reportContent = `# Sync Health Redundancy Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Sync Status**: ${report.syncResult ? '✅ Successful' : '❌ Failed'}
- **Push Status**: ${report.pushResult ? '✅ Successful' : '❌ Failed'}

## Details
- **Sync Operation**: pm2-auto-sync executed in safe mode
- **Push Operation**: Repository checked for local commits and pushed if ahead
- **Git Remote**: ${GIT_REMOTE}
- **Git Branch**: ${GIT_BRANCH}

## Redundancy Status
This report was generated by the PM2 redundancy system, providing backup for GitHub Actions sync-health workflow.

## Next Steps
- Monitor logs for any errors
- Check repository sync status
- Verify all processes are running correctly
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Health report generated: ${reportPath}`);
  return reportPath;
}

async function commitHealthReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update sync-health redundancy report"]);
      
      log("Health report committed successfully");
      return true;
    } else {
      log("No changes to commit");
      return true;
    }
  } catch (err) {
    log(`Commit error: ${String(err)}`);
    return false;
  }
}

async function main() {
  log("Starting Sync Health Redundancy Process");
  
  try {
    ensureRepoRoot();
    
    // Run safe pm2-auto-sync
    const syncResult = runSafePm2AutoSync();
    
    // Push if repository is ahead
    const pushResult = pushIfAhead();
    
    // Generate health report
    log("Generating health report...");
    const reportPath = generateHealthReport(syncResult, pushResult);
    
    // Commit report if changed
    log("Committing health report if changed...");
    await commitHealthReport(reportPath);
    
    log("Sync Health Redundancy Process completed");
    log(`Results: Sync=${syncResult ? 'OK' : 'FAILED'}, Push=${pushResult ? 'OK' : 'FAILED'}`);
    
    // Exit with appropriate code
    if (syncResult && pushResult) {
      process.exit(0);
    } else {
      process.exit(1);
    }
    
  } catch (error) {
    log(`Fatal error: ${String(error)}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    log(`Unhandled error: ${String(error)}`);
    process.exit(1);
  });
}

module.exports = { main, runSafePm2AutoSync, pushIfAhead, generateHealthReport };