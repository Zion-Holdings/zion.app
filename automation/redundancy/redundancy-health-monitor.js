#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-HEALTH-MONITOR] ${message}`;
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

function checkPm2Status() {
  log("Checking PM2 status...");
  
  try {
    const pm2Status = run("pm2", ["status"]);
    if (pm2Status.status === 0) {
      const lines = pm2Status.stdout.split('\n');
      const redundancyProcesses = lines.filter(line => 
        line.includes('redundancy-') || 
        line.includes('zion-auto-sync')
      );
      
      log(`Found ${redundancyProcesses.length} redundancy processes`);
      return {
        healthy: true,
        processCount: redundancyProcesses.length,
        output: pm2Status.stdout
      };
    } else {
      log(`PM2 status check failed: ${pm2Status.stderr}`);
      return {
        healthy: false,
        processCount: 0,
        error: pm2Status.stderr
      };
    }
  } catch (err) {
    log(`PM2 status check error: ${String(err)}`);
    return {
      healthy: false,
      processCount: 0,
      error: String(err)
    };
  }
}

function checkRedundancyLogs() {
  log("Checking redundancy logs...");
  
  try {
    const logsDir = path.join(process.cwd(), "automation", "logs");
    if (!fs.existsSync(logsDir)) {
      log("Logs directory not found");
      return {
        healthy: false,
        logCount: 0,
        error: "logs-directory-missing"
      };
    }
    
    const logFiles = fs.readdirSync(logsDir).filter(file => 
      file.includes('redundancy-') || 
      file.includes('zion-auto-sync')
    );
    
    const logResults = [];
    
    for (const logFile of logFiles) {
      const logPath = path.join(logsDir, logFile);
      try {
        const stats = fs.statSync(logPath);
        const isRecent = (Date.now() - stats.mtime.getTime()) < (24 * 60 * 60 * 1000); // 24 hours
        
        logResults.push({
          file: logFile,
          exists: true,
          size: stats.size,
          lastModified: stats.mtime,
          isRecent: isRecent,
          healthy: stats.size > 0 && isRecent
        });
      } catch (err) {
        logResults.push({
          file: logFile,
          exists: false,
          size: 0,
          lastModified: null,
          isRecent: false,
          healthy: false,
          error: String(err)
        });
      }
    }
    
    const healthy = logResults.filter(r => r.healthy).length;
    const total = logResults.length;
    
    log(`Log check: ${healthy}/${total} log files healthy`);
    return {
      total: total,
      healthy: healthy,
      results: logResults
    };
  } catch (err) {
    log(`Log check error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function checkRedundancyReports() {
  log("Checking redundancy reports...");
  
  try {
    const reportFiles = [
      "marketing-sync-redundancy-report.md",
      "sync-health-redundancy-report.md",
      "netlify-functions-redundancy-report.md",
      "build-automation-redundancy-report.md",
      "content-generation-redundancy-report.md",
      "security-health-redundancy-report.md"
    ];
    
    const reportResults = [];
    
    for (const reportFile of reportFiles) {
      const reportPath = path.join(process.cwd(), reportFile);
      if (fs.existsSync(reportPath)) {
        const stats = fs.statSync(reportPath);
        const isRecent = (Date.now() - stats.mtime.getTime()) < (6 * 60 * 60 * 1000); // 6 hours
        
        reportResults.push({
          file: reportFile,
          exists: true,
          size: stats.size,
          lastModified: stats.mtime,
          isRecent: isRecent,
          healthy: stats.size > 0 && isRecent
        });
      } else {
        reportResults.push({
          file: reportFile,
          exists: false,
          size: 0,
          lastModified: null,
          isRecent: false,
          healthy: false
        });
      }
    }
    
    const healthy = reportResults.filter(r => r.healthy).length;
    const total = reportResults.length;
    
    log(`Report check: ${healthy}/${total} reports healthy`);
    return {
      total: total,
      healthy: healthy,
      results: reportResults
    };
  } catch (err) {
    log(`Report check error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function checkRedundancyScripts() {
  log("Checking redundancy scripts...");
  
  try {
    const redundancyDir = path.join(process.cwd(), "automation", "redundancy");
    if (!fs.existsSync(redundancyDir)) {
      log("Redundancy directory not found");
      return {
        healthy: false,
        scriptCount: 0,
        error: "redundancy-directory-missing"
      };
    }
    
    const scriptFiles = [
      "marketing-sync-redundancy.js",
      "sync-health-redundancy.js",
      "netlify-functions-redundancy.js",
      "build-automation-redundancy.js",
      "content-generation-redundancy.js",
      "security-health-redundancy.js",
      "redundancy-health-monitor.js",
      "redundancy-failover-controller.js"
    ];
    
    const scriptResults = [];
    
    for (const scriptFile of scriptFiles) {
      const scriptPath = path.join(redundancyDir, scriptFile);
      if (fs.existsSync(scriptPath)) {
        const stats = fs.statSync(scriptPath);
        scriptResults.push({
          file: scriptFile,
          exists: true,
          size: stats.size,
          healthy: stats.size > 0
        });
      } else {
        scriptResults.push({
          file: scriptFile,
          exists: false,
          size: 0,
          healthy: false
        });
      }
    }
    
    const healthy = scriptResults.filter(r => r.healthy).length;
    const total = scriptResults.length;
    
    log(`Script check: ${healthy}/${total} scripts healthy`);
    return {
      total: total,
      healthy: healthy,
      results: scriptResults
    };
  } catch (err) {
    log(`Script check error: ${String(err)}`);
    return {
      total: 0,
      healthy: 0,
      results: [],
      error: String(err)
    };
  }
}

function checkEcosystemFile() {
  log("Checking ecosystem file...");
  
  try {
    const ecosystemPath = path.join(process.cwd(), "ecosystem.redundancy.cjs");
    if (fs.existsSync(ecosystemPath)) {
      const stats = fs.statSync(ecosystemPath);
      const content = fs.readFileSync(ecosystemPath, "utf8");
      const hasRedundancyProcesses = content.includes('redundancy-');
      
      return {
        exists: true,
        size: stats.size,
        hasRedundancyProcesses: hasRedundancyProcesses,
        healthy: stats.size > 0 && hasRedundancyProcesses
      };
    } else {
      return {
        exists: false,
        size: 0,
        hasRedundancyProcesses: false,
        healthy: false
      };
    }
  } catch (err) {
    log(`Ecosystem file check error: ${String(err)}`);
    return {
      exists: false,
      size: 0,
      hasRedundancyProcesses: false,
      healthy: false,
      error: String(err)
    };
  }
}

function generateHealthMonitorReport(pm2Status, logCheck, reportCheck, scriptCheck, ecosystemCheck) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "health-monitor",
    checks: {
      pm2Status: pm2Status,
      logCheck: logCheck,
      reportCheck: reportCheck,
      scriptCheck: scriptCheck,
      ecosystemCheck: ecosystemCheck
    },
    summary: {
      overallHealth: "healthy",
      issues: []
    }
  };
  
  // Determine overall health
  if (!pm2Status.healthy) report.summary.issues.push("pm2-status-unhealthy");
  if (logCheck.healthy < logCheck.total) report.summary.issues.push("log-files-unhealthy");
  if (reportCheck.healthy < reportCheck.total) report.summary.issues.push("reports-unhealthy");
  if (scriptCheck.healthy < scriptCheck.total) report.summary.issues.push("scripts-unhealthy");
  if (!ecosystemCheck.healthy) report.summary.issues.push("ecosystem-file-unhealthy");
  
  if (report.summary.issues.length > 0) {
    report.summary.overallHealth = "degraded";
  }
  
  const reportPath = path.join(process.cwd(), "redundancy-health-monitor-report.md");
  const reportContent = `# Redundancy Health Monitor Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Issues Found**: ${report.summary.issues.length}

## Check Results
- **PM2 Status**: ${report.checks.pm2Status.healthy ? '✅ Healthy' : '❌ Unhealthy'} (${report.checks.pm2Status.processCount} processes)${report.checks.pm2Status.error ? ` (${report.checks.pm2Status.error})` : ''}
- **Log Files**: ${report.checks.logCheck.healthy}/${report.checks.logCheck.total} healthy${report.checks.logCheck.error ? ` (${report.checks.logCheck.error})` : ''}
- **Reports**: ${report.checks.reportCheck.healthy}/${report.checks.reportCheck.total} healthy
- **Scripts**: ${report.checks.scriptCheck.healthy}/${report.checks.scriptCheck.total} healthy${report.checks.scriptCheck.error ? ` (${report.checks.scriptCheck.error})` : ''}
- **Ecosystem File**: ${report.checks.ecosystemCheck.healthy ? '✅ Healthy' : '❌ Unhealthy'}${report.checks.ecosystemCheck.error ? ` (${report.checks.ecosystemCheck.error})` : ''}

## PM2 Process Details
${report.checks.pm2Status.healthy ? `${report.checks.pm2Status.processCount} redundancy processes running` : 'No redundancy processes found'}

## Log File Details
${logCheck.results.map(r => `- **${r.file}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.size} bytes, ${r.isRecent ? 'Recent' : 'Stale'}, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Report Details
${reportCheck.results.map(r => `- **${r.file}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.size} bytes, ${r.isRecent ? 'Recent' : 'Stale'}, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Script Details
${scriptCheck.results.map(r => `- **${r.file}**: ${r.exists ? '✅ Exists' : '❌ Missing'} (${r.size} bytes, ${r.healthy ? 'Healthy' : 'Unhealthy'})`).join('\n')}

## Ecosystem File Details
- **File**: ecosystem.redundancy.cjs
- **Exists**: ${ecosystemCheck.exists ? '✅ Yes' : '❌ No'}
- **Size**: ${ecosystemCheck.size} bytes
- **Has Redundancy Processes**: ${ecosystemCheck.hasRedundancyProcesses ? '✅ Yes' : '❌ No'}

## Redundancy Status
This report was generated by the redundancy health monitor, providing oversight of all redundancy processes and components.

## Next Steps
- Review any failed checks
- Restart failed PM2 processes if needed
- Check log files for errors
- Ensure all redundancy scripts are present
- Validate ecosystem configuration
- Monitor system performance
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Health monitor report generated: ${reportPath}`);
  return reportPath;
}

async function commitHealthMonitorReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update health monitor report"]);
      
      log("Health monitor report committed successfully");
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
  log("Starting Redundancy Health Monitor Process");
  
  try {
    ensureRepoRoot();
    
    // Check PM2 status
    log("Checking PM2 status...");
    const pm2Status = checkPm2Status();
    
    // Check redundancy logs
    log("Checking redundancy logs...");
    const logCheck = checkRedundancyLogs();
    
    // Check redundancy reports
    log("Checking redundancy reports...");
    const reportCheck = checkRedundancyReports();
    
    // Check redundancy scripts
    log("Checking redundancy scripts...");
    const scriptCheck = checkRedundancyScripts();
    
    // Check ecosystem file
    log("Checking ecosystem file...");
    const ecosystemCheck = checkEcosystemFile();
    
    // Generate health monitor report
    log("Generating health monitor report...");
    const reportPath = generateHealthMonitorReport(pm2Status, logCheck, reportCheck, scriptCheck, ecosystemCheck);
    
    // Commit report if changed
    log("Committing health monitor report if changed...");
    await commitHealthMonitorReport(reportPath);
    
    log("Redundancy Health Monitor Process completed");
    log(`Results: PM2=${pm2Status.healthy ? 'OK' : 'FAILED'}, Logs=${logCheck.healthy}/${logCheck.total}, Scripts=${scriptCheck.healthy}/${scriptCheck.total}`);
    
    // Exit with appropriate code
    if (pm2Status.healthy && logCheck.healthy === logCheck.total && scriptCheck.healthy === scriptCheck.total) {
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

module.exports = { 
  main, 
  checkPm2Status, 
  checkRedundancyLogs, 
  checkRedundancyReports, 
  checkRedundancyScripts, 
  checkEcosystemFile,
  generateHealthMonitorReport 
};