#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-HEALTH-ORCHESTRATOR] ${message}`;
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

function checkPM2Status() {
  try {
    log("Checking PM2 status...");
    
    const statusResult = run("pm2", ["status", "--json"], { verbose: false });
    
    if (statusResult.status === 0) {
      try {
        const pm2Data = JSON.parse(statusResult.stdout);
        const processes = pm2Data || [];
        
        const redundancyProcesses = processes.filter(p => p.name && p.name.includes('redundancy'));
        const otherProcesses = processes.filter(p => p.name && !p.name.includes('redundancy'));
        
        return {
          pm2Status: {
            totalProcesses: processes.length,
            redundancyProcesses: redundancyProcesses.length,
            otherProcesses: otherProcesses.length,
            processes: processes.map(p => ({
              name: p.name,
              status: p.pm2_env?.status || 'unknown',
              uptime: p.pm2_env?.pm_uptime || 0,
              memory: p.monit?.memory || 0,
              cpu: p.monit?.cpu || 0
            })),
            timestamp: nowIso()
          }
        };
      } catch (parseErr) {
        return {
          pm2Status: {
            error: "Failed to parse PM2 status",
            timestamp: nowIso()
          }
        };
      }
    } else {
      return {
        pm2Status: {
          error: "PM2 status command failed",
          timestamp: nowIso()
        }
      };
    }
  } catch (err) {
    log(`PM2 status check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkSystemResources() {
  try {
    log("Checking system resources...");
    
    const memoryResult = run("free", ["-h"], { verbose: false });
    const diskResult = run("df", ["-h", "."], { verbose: false });
    const loadResult = run("uptime", [], { verbose: false });
    
    let memoryInfo = "Unknown";
    let diskInfo = "Unknown";
    let loadInfo = "Unknown";
    
    if (memoryResult.status === 0) {
      const lines = memoryResult.stdout.split('\n');
      if (lines.length > 1) {
        const memLine = lines[1].split(/\s+/);
        if (memLine.length > 2) {
          memoryInfo = `${memLine[2]} used / ${memLine[1]} total`;
        }
      }
    }
    
    if (diskResult.status === 0) {
      const lines = diskResult.stdout.split('\n');
      if (lines.length > 1) {
        const diskLine = lines[1].split(/\s+/);
        if (diskLine.length > 4) {
          diskInfo = `${diskLine[4]} used / ${diskLine[1]} total`;
        }
      }
    }
    
    if (loadResult.status === 0) {
      const loadMatch = loadResult.stdout.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
      if (loadMatch) {
        loadInfo = `${loadMatch[1]} (1m), ${loadMatch[2]} (5m), ${loadMatch[3]} (15m)`;
      }
    }
    
    return {
      systemResources: {
        memory: memoryInfo,
        disk: diskInfo,
        load: loadInfo,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`System resources check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkRedundancyReports() {
  try {
    log("Checking redundancy reports...");
    
    const reportFiles = [
      "marketing-sync-redundancy-report.md",
      "sync-health-redundancy-report.md",
      "netlify-functions-redundancy-report.md",
      "build-monitor-redundancy-report.md",
      "content-quality-redundancy-report.md",
      "security-scanner-redundancy-report.md",
      "performance-monitor-redundancy-report.md",
      "dependency-monitor-redundancy-report.md",
      "seo-monitor-redundancy-report.md"
    ];
    
    const reportStatus = {};
    let totalReports = 0;
    let recentReports = 0;
    
    for (const reportFile of reportFiles) {
      const reportPath = path.join(process.cwd(), reportFile);
      if (fs.existsSync(reportPath)) {
        totalReports++;
        const stats = fs.statSync(reportPath);
        const ageHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        
        if (ageHours < 24) {
          recentReports++;
        }
        
        reportStatus[reportFile] = {
          exists: true,
          age: `${Math.round(ageHours)} hours`,
          recent: ageHours < 24
        };
      } else {
        reportStatus[reportFile] = {
          exists: false,
          age: "N/A",
          recent: false
        };
      }
    }
    
    return {
      redundancyReports: {
        totalReports,
        recentReports,
        reportStatus,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Redundancy reports check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkGitStatus() {
  try {
    log("Checking git status...");
    
    const status = run("git", ["status", "--porcelain"]);
    const branch = run("git", ["branch", "--show-current"]);
    const remote = run("git", ["remote", "-v"]);
    
    const hasChanges = status.stdout.trim().length > 0;
    const currentBranch = branch.stdout.trim();
    const hasRemote = remote.stdout.includes("origin");
    
    return {
      gitStatus: {
        hasChanges,
        currentBranch,
        hasRemote,
        changesCount: status.stdout.split("\n").filter(line => line.trim()).length,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Git status check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function generateHealthReport(pm2Status, systemResources, redundancyReports, gitStatus) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    healthOrchestrator: {
      pm2Status,
      systemResources,
      redundancyReports,
      gitStatus,
      summary: {
        overallHealth: "healthy",
        issues: []
      }
    }
  };
  
  // Analyze overall health
  if (pm2Status.pm2Status?.error) {
    report.healthOrchestrator.summary.issues.push("PM2 status check failed");
  }
  
  if (systemResources.systemResources?.error) {
    report.healthOrchestrator.summary.issues.push("System resources check failed");
  }
  
  if (redundancyReports.redundancyReports?.recentReports < 5) {
    report.healthOrchestrator.summary.issues.push("Some redundancy reports are outdated");
  }
  
  if (gitStatus.gitStatus?.hasChanges) {
    report.healthOrchestrator.summary.issues.push("Uncommitted changes detected");
  }
  
  if (report.healthOrchestrator.summary.issues.length > 0) {
    report.healthOrchestrator.summary.overallHealth = "needs_attention";
  }

  const reportPath = path.join(process.cwd(), "health-orchestrator-redundancy-report.md");
  const reportContent = `# Health Orchestrator Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall Health: ${report.healthOrchestrator.summary.overallHealth.toUpperCase()}

## Issues Detected
${report.healthOrchestrator.summary.issues.length > 0 ? 
  report.healthOrchestrator.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No health issues detected"}

## PM2 Status
- Total Processes: ${pm2Status.pm2Status?.totalProcesses || 0} 📊
- Redundancy Processes: ${pm2Status.pm2Status?.redundancyProcesses || 0} 🔄
- Other Processes: ${pm2Status.pm2Status?.otherProcesses || 0} ⚙️

## System Resources
- Memory: ${systemResources.systemResources?.memory || "Unknown"} 💾
- Disk: ${systemResources.systemResources?.disk || "Unknown"} 💿
- Load Average: ${systemResources.systemResources?.load || "Unknown"} 📈

## Redundancy Reports
- Total Reports: ${redundancyReports.redundancyReports?.totalReports || 0} 📋
- Recent Reports (<24h): ${redundancyReports.redundancyReports?.recentReports || 0} ✅

## Git Status
- Current Branch: ${gitStatus.gitStatus?.currentBranch || "Unknown"} 🌿
- Has Remote: ${gitStatus.gitStatus?.hasRemote ? "✅ Yes" : "❌ No"} 🔗
- Uncommitted Changes: ${gitStatus.gitStatus?.hasChanges ? "⚠️ Yes (${gitStatus.gitStatus.changesCount})" : "✅ No"} 📝

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Health orchestrator report generated: ${reportPath}`);
  return report;
}

async function commitAndPush() {
  try {
    run("git", ["config", "user.name", "pm2-redundancy[bot]"]);
    run("git", ["config", "user.email", "redundancy@ziontechgroup.com"]);

    const status = run("git", ["status", "--porcelain"]);
    if (!status.stdout.trim()) {
      log("No changes to commit.");
      return;
    }

    run("git", ["add", "-A"]);
    run("git", ["commit", "-m", `chore(redundancy): health orchestration via PM2 redundancy`]);

    const pushResult = run("git", ["push", "origin", "main"]);
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
    log("Starting health orchestrator redundancy process...");
    
    const pm2Status = checkPM2Status();
    const systemResources = checkSystemResources();
    const redundancyReports = checkRedundancyReports();
    const gitStatus = checkGitStatus();
    
    const report = generateHealthReport(pm2Status, systemResources, redundancyReports, gitStatus);
    
    await commitAndPush();
    
    log("Health orchestrator redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Health orchestrator redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  main, 
  checkPM2Status, 
  checkSystemResources, 
  checkRedundancyReports, 
  checkGitStatus,
  generateHealthReport 
};