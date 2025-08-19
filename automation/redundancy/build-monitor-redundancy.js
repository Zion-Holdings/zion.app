#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-BUILD-MONITOR] ${message}`;
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

function checkBuildHealth() {
  try {
    log("Checking build health...");
    
    // Check if build artifacts exist
    const buildDir = path.join(process.cwd(), ".next");
    const outDir = path.join(process.cwd(), "out");
    
    const buildExists = fs.existsSync(buildDir);
    const outExists = fs.existsSync(outDir);
    
    // Check package.json scripts
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const buildScripts = packageJson.scripts || {};
    
    // Check for build-related files
    const hasBuildScript = !!buildScripts.build;
    const hasDevScript = !!buildScripts.dev;
    const hasStartScript = !!buildScripts.start;
    
    return {
      buildArtifacts: {
        nextBuild: buildExists,
        staticExport: outExists
      },
      scripts: {
        build: hasBuildScript,
        dev: hasDevScript,
        start: hasStartScript
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`Build health check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkDependencies() {
  try {
    log("Checking dependencies...");
    
    // Check if node_modules exists
    const nodeModulesExists = fs.existsSync(path.join(process.cwd(), "node_modules"));
    
    // Check package-lock.json
    const packageLockExists = fs.existsSync(path.join(process.cwd(), "package-lock.json"));
    
    // Check for dependency issues
    const auditResult = run("npm", ["audit", "--audit-level=high", "--json"], { verbose: false });
    const hasVulnerabilities = auditResult.status !== 0;
    
    return {
      dependencies: {
        nodeModules: nodeModulesExists,
        packageLock: packageLockExists,
        hasVulnerabilities
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`Dependency check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkGitStatus() {
  try {
    log("Checking git status...");
    
    const status = run("git", ["status", "--porcelain"]);
    const hasChanges = status.stdout.trim().length > 0;
    
    const branch = run("git", ["branch", "--show-current"]);
    const currentBranch = branch.stdout.trim();
    
    const remote = run("git", ["remote", "-v"]);
    const hasRemote = remote.stdout.includes("origin");
    
    return {
      git: {
        hasChanges,
        currentBranch,
        hasRemote,
        changesCount: status.stdout.split("\n").filter(line => line.trim()).length
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`Git status check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function checkFileSystem() {
  try {
    log("Checking file system...");
    
    const criticalFiles = [
      "package.json",
      "next.config.js",
      "tsconfig.json",
      ".eslintrc.js",
      "README.md"
    ];
    
    const fileStatus = {};
    for (const file of criticalFiles) {
      fileStatus[file] = fs.existsSync(path.join(process.cwd(), file));
    }
    
    // Check automation directory
    const automationDir = path.join(process.cwd(), "automation");
    const automationExists = fs.existsSync(automationDir);
    
    // Check logs directory
    const logsDir = path.join(automationDir, "logs");
    const logsExist = fs.existsSync(logsDir);
    
    return {
      files: fileStatus,
      directories: {
        automation: automationExists,
        logs: logsExist
      },
      timestamp: nowIso()
    };
  } catch (err) {
    log(`File system check failed: ${String(err)}`);
    return { error: String(err), timestamp: nowIso() };
  }
}

function generateBuildReport(buildHealth, dependencies, gitStatus, fileSystem) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    buildMonitor: {
      buildHealth,
      dependencies,
      gitStatus,
      fileSystem,
      summary: {
        overallHealth: "healthy",
        issues: []
      }
    }
  };
  
  // Analyze overall health
  if (buildHealth.error || dependencies.error || gitStatus.error || fileSystem.error) {
    report.buildMonitor.summary.overallHealth = "degraded";
  }
  
  if (!buildHealth.buildArtifacts?.nextBuild) {
    report.buildMonitor.summary.issues.push("Missing Next.js build artifacts");
  }
  
  if (dependencies.hasVulnerabilities) {
    report.buildMonitor.summary.issues.push("Dependencies have security vulnerabilities");
  }
  
  if (gitStatus.hasChanges) {
    report.buildMonitor.summary.issues.push("Uncommitted changes detected");
  }
  
  if (report.buildMonitor.summary.issues.length > 0) {
    report.buildMonitor.summary.overallHealth = "attention_needed";
  }

  const reportPath = path.join(process.cwd(), "build-monitor-redundancy-report.md");
  const reportContent = `# Build Monitor Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Overall Health: ${report.buildMonitor.summary.overallHealth.toUpperCase()}

## Issues Detected
${report.buildMonitor.summary.issues.length > 0 ? 
  report.buildMonitor.summary.issues.map(issue => `- ⚠️ ${issue}`).join("\n") : 
  "- ✅ No issues detected"}

## Build Health
- Next.js Build: ${buildHealth.buildArtifacts?.nextBuild ? "✅ Exists" : "❌ Missing"}
- Static Export: ${buildHealth.buildArtifacts?.staticExport ? "✅ Exists" : "❌ Missing"}
- Build Script: ${buildHealth.scripts?.build ? "✅ Available" : "❌ Missing"}

## Dependencies
- Node Modules: ${dependencies.dependencies?.nodeModules ? "✅ Installed" : "❌ Missing"}
- Package Lock: ${dependencies.dependencies?.packageLock ? "✅ Exists" : "❌ Missing"}
- Vulnerabilities: ${dependencies.dependencies?.hasVulnerabilities ? "⚠️ Found" : "✅ None"}

## Git Status
- Current Branch: ${gitStatus.git?.currentBranch || "Unknown"}
- Has Remote: ${gitStatus.git?.hasRemote ? "✅ Yes" : "❌ No"}
- Uncommitted Changes: ${gitStatus.git?.hasChanges ? "⚠️ Yes (${gitStatus.git.changesCount})" : "✅ No"}

## File System
- Critical Files: ${Object.values(fileSystem.files || {}).filter(Boolean).length}/${Object.keys(fileSystem.files || {}).length} ✅
- Automation Directory: ${fileSystem.directories?.automation ? "✅ Exists" : "❌ Missing"}
- Logs Directory: ${fileSystem.directories?.logs ? "✅ Exists" : "❌ Missing"}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Build monitor report generated: ${reportPath}`);
  return report;
}

async function commitAndPush() {
  try {
    // Configure git user
    run("git", ["config", "user.name", "pm2-redundancy[bot]"]);
    run("git", ["config", "user.email", "redundancy@ziontechgroup.com"]);

    // Check if there are changes
    const status = run("git", ["status", "--porcelain"]);
    if (!status.stdout.trim()) {
      log("No changes to commit.");
      return;
    }

    // Add and commit
    run("git", ["add", "-A"]);
    run("git", ["commit", "-m", `chore(redundancy): build health check via PM2 redundancy`]);

    // Push to main
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
    log("Starting build monitor redundancy process...");
    
    // Run all health checks
    const buildHealth = checkBuildHealth();
    const dependencies = checkDependencies();
    const gitStatus = checkGitStatus();
    const fileSystem = checkFileSystem();
    
    // Generate comprehensive report
    const report = generateBuildReport(buildHealth, dependencies, gitStatus, fileSystem);
    
    // Commit and push if needed
    await commitAndPush();
    
    log("Build monitor redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Build monitor redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  main, 
  checkBuildHealth, 
  checkDependencies, 
  checkGitStatus, 
  checkFileSystem,
  generateBuildReport 
};