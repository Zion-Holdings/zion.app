#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-PERFORMANCE-MONITOR] ${message}`;
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

function checkBuildPerformance() {
  try {
    log("Checking build performance...");
    
    const startTime = Date.now();
    
    // Run a quick build check
    const buildCheck = run("npm", ["run", "build:health-check"], { verbose: false });
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    return {
      buildPerformance: {
        duration: `${duration}ms`,
        success: buildCheck.status === 0,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Build performance check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkDependencyPerformance() {
  try {
    log("Checking dependency performance...");
    
    const startTime = Date.now();
    const installCheck = run("npm", ["install", "--dry-run"], { verbose: false });
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    return {
      dependencyPerformance: {
        duration: `${duration}ms`,
        success: installCheck.status === 0,
        timestamp: nowIso()
      }
    };
  } catch (err) {
    log(`Dependency performance check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkFileSystemPerformance() {
  try {
  log("Checking file system performance...");
  
  const startTime = Date.now();
  
  // Count files in key directories
  const dirs = ["pages", "automation", "scripts", "public"];
  const fileCounts = {};
  
  for (const dir of dirs) {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath, { recursive: true });
      fileCounts[dir] = files.length;
    }
  }
  
  const endTime = Date.now();
  const duration = endTime - startTime;
  
  return {
    fileSystemPerformance: {
      duration: `${duration}ms`,
      fileCounts,
      timestamp: nowIso()
    }
  };
} catch (err) {
  log(`File system performance check failed: ${String(err)}`);
  return { error: String(err), timestamp: nowIso() };
}
}

function generatePerformanceReport(buildPerf, depPerf, fsPerf) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    performance: {
      buildPerf,
      depPerf,
      fsPerf,
      summary: {
        overallPerformance: "good",
        issues: []
      }
    }
  };
  
  // Analyze overall performance
  if (buildPerf.buildPerformance?.duration > 30000) {
    report.performance.summary.issues.push("Build performance is slow (>30s)");
  }
  
  if (depPerf.dependencyPerformance?.duration > 10000) {
    report.performance.summary.issues.push("Dependency check is slow (>10s)");
  }
  
  if (fsPerf.fileSystemPerformance?.duration > 5000) {
    report.performance.summary.issues.push("File system operations are slow (>5s)");
  }
  
  if (report.performance.summary.issues.length > 0) {
    report.performance.summary.overallPerformance = "needs_optimization";
  }

  const reportPath = path.join(process.cwd(), "performance-monitor-redundancy-report.md");
  const reportContent = `# Performance Monitor Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall Performance: ${report.performance.summary.overallPerformance.toUpperCase()}

## Issues Detected
${report.performance.summary.issues.length > 0 ? 
  report.performance.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No performance issues detected"}

## Build Performance
- Duration: ${buildPerf.buildPerformance?.duration || "Unknown"} ${buildPerf.buildPerformance?.success ? "✅" : "❌"}
- Status: ${buildPerf.buildPerformance?.success ? "Success" : "Failed"}

## Dependency Performance
- Duration: ${depPerf.dependencyPerformance?.duration || "Unknown"} ${depPerf.dependencyPerformance?.success ? "✅" : "❌"}
- Status: ${depPerf.dependencyPerformance?.success ? "Success" : "Failed"}

## File System Performance
- Duration: ${fsPerf.fileSystemPerformance?.duration || "Unknown"} ✅
- File Counts:
${Object.entries(fsPerf.fileSystemPerformance?.fileCounts || {}).map(([dir, count]) => `  - ${dir}: ${count} files`).join("\n")}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Performance report generated: ${reportPath}`);
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
    run("git", ["commit", "-m", `chore(redundancy): performance monitoring via PM2 redundancy`]);

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
    log("Starting performance monitor redundancy process...");
    
    const buildPerf = checkBuildPerformance();
    const depPerf = checkDependencyPerformance();
    const fsPerf = checkFileSystemPerformance();
    
    const report = generatePerformanceReport(buildPerf, depPerf, fsPerf);
    
    await commitAndPush();
    
    log("Performance monitor redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Performance monitor redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, checkBuildPerformance, checkDependencyPerformance, checkFileSystemPerformance, generatePerformanceReport };