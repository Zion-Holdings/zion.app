#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

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

function checkPM2Status() {
  log("Checking PM2 status...");
  
  try {
    const pm2Status = run("pm2", ["status", "--json"]);
    if (pm2Status.status === 0) {
      try {
        const status = JSON.parse(pm2Status.stdout);
        const processes = status.processes || [];
        const running = processes.filter(p => p.pm2_env && p.pm2_env.status === "online").length;
        const total = processes.length;
        
        log(`PM2 Status: ${running}/${total} processes running`);
        return { success: true, running, total, processes };
      } catch (error) {
        log(`Error parsing PM2 status: ${String(error)}`);
        return { success: false, error: "Failed to parse PM2 status" };
      }
    } else {
      log("PM2 not available or failed to get status");
      return { success: false, error: "PM2 not available" };
    }
  } catch (error) {
    log(`Error checking PM2 status: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkRedundancyProcesses() {
  log("Checking redundancy processes...");
  
  try {
    const pm2Status = run("pm2", ["status", "--json"]);
    if (pm2Status.status === 0) {
      try {
        const status = JSON.parse(pm2Status.stdout);
        const processes = status.processes || [];
        const redundancyProcesses = processes.filter(p => 
          p.name && p.name.includes("redundancy")
        );
        
        const running = redundancyProcesses.filter(p => p.pm2_env && p.pm2_env.status === "online").length;
        const total = redundancyProcesses.length;
        
        log(`Redundancy Processes: ${running}/${total} running`);
        
        const processDetails = redundancyProcesses.map(p => ({
          name: p.name,
          status: p.pm2_env ? p.pm2_env.status : "unknown",
          uptime: p.pm2_env ? p.pm2_env.pm_uptime : 0,
          restarts: p.pm2_env ? p.pm2_env.restart_time : 0
        }));
        
        return { success: true, running, total, processes: processDetails };
      } catch (error) {
        log(`Error parsing PM2 status: ${String(error)}`);
        return { success: false, error: "Failed to parse PM2 status" };
      }
    } else {
      log("PM2 not available for redundancy check");
      return { success: false, error: "PM2 not available" };
    }
  } catch (error) {
    log(`Error checking redundancy processes: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkSystemResources() {
  log("Checking system resources...");
  
  try {
    const resources = {
      memory: null,
      disk: null,
      cpu: null
    };
    
    // Check memory usage
    try {
      const memInfo = run("free", ["-m"]);
      if (memInfo.status === 0) {
        const lines = memInfo.stdout.split('\n');
        if (lines.length > 1) {
          const memLine = lines[1].split(/\s+/);
          const total = parseInt(memLine[1]);
          const used = parseInt(memLine[2]);
          const available = parseInt(memLine[6]);
          const usagePercent = ((used / total) * 100).toFixed(1);
          
          resources.memory = {
            total: `${total}MB`,
            used: `${used}MB`,
            available: `${available}MB`,
            usage: `${usagePercent}%`
          };
          log(`Memory: ${usagePercent}% used (${used}MB/${total}MB)`);
        }
      }
    } catch (error) {
      log(`Error checking memory: ${String(error)}`);
    }
    
    // Check disk usage
    try {
      const diskInfo = run("df", ["-h", "."]);
      if (diskInfo.status === 0) {
        const lines = diskInfo.stdout.split('\n');
        if (lines.length > 1) {
          const diskLine = lines[1].split(/\s+/);
          const total = diskLine[1];
          const used = diskLine[2];
          const available = diskLine[3];
          const usagePercent = diskLine[4];
          
          resources.disk = {
            total,
            used,
            available,
            usage: usagePercent
          };
          log(`Disk: ${usagePercent} used (${used}/${total})`);
        }
      }
    } catch (error) {
      log(`Error checking disk: ${String(error)}`);
    }
    
    // Check CPU load
    try {
      const loadInfo = run("uptime");
      if (loadInfo.status === 0) {
        const loadMatch = loadInfo.stdout.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
        if (loadMatch) {
          resources.cpu = {
            load1: loadMatch[1],
            load5: loadMatch[2],
            load15: loadMatch[3]
          };
          log(`CPU Load: 1min=${loadMatch[1]}, 5min=${loadMatch[2]}, 15min=${loadMatch[3]}`);
        }
      }
    } catch (error) {
      log(`Error checking CPU: ${String(error)}`);
    }
    
    return { success: true, resources };
  } catch (error) {
    log(`Error checking system resources: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkGitStatus() {
  log("Checking git repository status...");
  
  try {
    const gitStatus = runGit(["status", "--porcelain"]);
    const branch = runGit(["branch", "--show-current"]);
    const remote = runGit(["remote", "get-url", "origin"]);
    const lastCommit = runGit(["log", "-1", "--format=%H %s %an %ad", "--date=iso"]);
    
    const status = {
      hasChanges: gitStatus.stdout.trim().length > 0,
      currentBranch: branch.stdout.trim(),
      remoteUrl: remote.stdout.trim(),
      lastCommit: lastCommit.stdout.trim()
    };
    
    log(`Git Status: Branch=${status.currentBranch}, Changes=${status.hasChanges ? 'Yes' : 'No'}`);
    return { success: true, ...status };
  } catch (error) {
    log(`Error checking git status: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function checkLogFiles() {
  log("Checking log files...");
  
  try {
    const logsDir = path.join(process.cwd(), "automation", "logs");
    const logs = {
      exists: false,
      files: [],
      totalSize: 0
    };
    
    if (fs.existsSync(logsDir)) {
      logs.exists = true;
      const files = fs.readdirSync(logsDir);
      
      files.forEach(file => {
        const filePath = path.join(logsDir, file);
        try {
          const stats = fs.statSync(filePath);
          logs.files.push({
            name: file,
            size: stats.size,
            modified: stats.mtime.toISOString()
          });
          logs.totalSize += stats.size;
        } catch (error) {
          log(`Error reading log file ${file}: ${String(error)}`);
        }
      });
      
      log(`Logs: ${logs.files.length} files, ${(logs.totalSize / 1024 / 1024).toFixed(2)}MB total`);
    } else {
      log("Logs directory not found");
    }
    
    return { success: true, ...logs };
  } catch (error) {
    log(`Error checking log files: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateHealthReport() {
  const report = {
    generatedAt: nowIso(),
    pm2Status: null,
    redundancyProcesses: null,
    systemResources: null,
    gitStatus: null,
    logFiles: null,
    summary: "Health orchestrator redundancy report"
  };

  try {
    // Run all health checks
    report.pm2Status = checkPM2Status();
    report.redundancyProcesses = checkRedundancyProcesses();
    report.systemResources = checkSystemResources();
    report.gitStatus = checkGitStatus();
    report.logFiles = checkLogFiles();
    
    // Generate summary
    const pm2Healthy = report.pm2Status.success && report.pm2Status.running > 0;
    const redundancyHealthy = report.redundancyProcesses.success && report.redundancyProcesses.running > 0;
    const systemHealthy = report.systemResources.success;
    const gitHealthy = report.gitStatus.success;
    
    const healthyChecks = [pm2Healthy, redundancyHealthy, systemHealthy, gitHealthy].filter(Boolean).length;
    const totalChecks = 4;
    
    if (healthyChecks === totalChecks) {
      report.summary = "All systems healthy - redundancy system operating normally";
    } else if (healthyChecks >= totalChecks * 0.75) {
      report.summary = "Most systems healthy - minor issues detected";
    } else {
      report.summary = "Multiple system issues detected - attention required";
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "health-orchestrator-redundancy-report.md");
    const reportContent = `# Health Orchestrator Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## System Health Score
${healthyChecks}/${totalChecks} systems healthy (${Math.round((healthyChecks/totalChecks)*100)}%)

## PM2 Status
- Status: ${report.pm2Status.success ? "✅ OK" : "❌ Failed"}
- Running: ${report.pm2Status.running || 0}/${report.pm2Status.total || 0} processes

## Redundancy Processes
- Status: ${report.redundancyProcesses.success ? "✅ OK" : "❌ Failed"}
- Running: ${report.redundancyProcesses.running || 0}/${report.redundancyProcesses.total || 0} processes

## System Resources
- Status: ${report.systemResources.success ? "✅ OK" : "❌ Failed"}
- Memory: ${report.systemResources.resources?.memory?.usage || "Unknown"}
- Disk: ${report.systemResources.resources?.disk?.usage || "Unknown"}
- CPU Load: ${report.systemResources.resources?.cpu?.load5 || "Unknown"}

## Git Status
- Status: ${report.gitStatus.success ? "✅ OK" : "❌ Failed"}
- Branch: ${report.gitStatus.currentBranch || "Unknown"}
- Changes: ${report.gitStatus.hasChanges ? "Yes" : "No"}

## Log Files
- Status: ${report.logFiles.success ? "✅ OK" : "❌ Failed"}
- Files: ${report.logFiles.files?.length || 0}
- Total Size: ${report.logFiles.totalSize ? `${(report.logFiles.totalSize / 1024 / 1024).toFixed(2)}MB` : "Unknown"}

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
  log("Starting health orchestrator redundancy process");
  
  try {
    const report = generateHealthReport();
    log(`Health orchestrator redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Health orchestrator redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  checkPM2Status, 
  checkRedundancyProcesses, 
  checkSystemResources, 
  checkGitStatus, 
  checkLogFiles, 
  generateHealthReport 
};