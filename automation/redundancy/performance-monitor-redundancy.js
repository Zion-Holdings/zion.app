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
  console.log(message);
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

function checkSystemPerformance() {
  log("Checking system performance metrics...");
  
  try {
    const metrics = {
      cpu: null,
      memory: null,
      disk: null,
      network: null,
      processes: null
    };
    
    // CPU metrics
    try {
      const loadInfo = run("uptime");
      if (loadInfo.status === 0) {
        const loadMatch = loadInfo.stdout.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
        if (loadMatch) {
          metrics.cpu = {
            load1: parseFloat(loadMatch[1]),
            load5: parseFloat(loadMatch[2]),
            load15: parseFloat(loadMatch[3]),
            status: getLoadStatus(parseFloat(loadMatch[1]))
          };
        }
      }
    } catch (error) {
      log(`Error checking CPU: ${String(error)}`);
    }
    
    // Memory metrics
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
          
          metrics.memory = {
            total: total,
            used: used,
            available: available,
            usage: parseFloat(usagePercent),
            status: getMemoryStatus(parseFloat(usagePercent))
          };
        }
      }
    } catch (error) {
      log(`Error checking memory: ${String(error)}`);
    }
    
    // Disk metrics
    try {
      const diskInfo = run("df", ["-h", "."]);
      if (diskInfo.status === 0) {
        const lines = diskInfo.stdout.split('\n');
        if (lines.length > 1) {
          const diskLine = lines[1].split(/\s+/);
          const total = diskLine[1];
          const used = diskLine[2];
          const available = diskLine[3];
          const usagePercent = parseInt(diskLine[4].replace('%', ''));
          
          metrics.disk = {
            total,
            used,
            available,
            usage: usagePercent,
            status: getDiskStatus(usagePercent)
          };
        }
      }
    } catch (error) {
      log(`Error checking disk: ${String(error)}`);
    }
    
    // Process metrics
    try {
      const processInfo = run("ps", ["aux"]);
      if (processInfo.status === 0) {
        const lines = processInfo.stdout.split('\n');
        const processCount = lines.length - 1; // Subtract header line
        
        metrics.processes = {
          count: processCount,
          status: getProcessStatus(processCount)
        };
      }
    } catch (error) {
      log(`Error checking processes: ${String(error)}`);
    }
    
    return { success: true, metrics };
  } catch (error) {
    log(`Error checking system performance: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function getLoadStatus(load) {
  if (load < 1.0) return "low";
  if (load < 2.0) return "normal";
  if (load < 5.0) return "high";
  return "critical";
}

function getMemoryStatus(usage) {
  if (usage < 70) return "good";
  if (usage < 85) return "warning";
  if (usage < 95) return "high";
  return "critical";
}

function getDiskStatus(usage) {
  if (usage < 80) return "good";
  if (usage < 90) return "warning";
  if (usage < 95) return "high";
  return "critical";
}

function getProcessStatus(count) {
  if (count < 100) return "low";
  if (count < 200) return "normal";
  if (count < 500) return "high";
  return "critical";
}

function checkBuildPerformance() {
  log("Checking build performance...");
  
  try {
    const buildMetrics = {
      buildTime: null,
      bundleSize: null,
      dependencies: null
    };
    
    // Check if .next directory exists (build output)
    const nextDir = path.join(process.cwd(), ".next");
    if (fs.existsSync(nextDir)) {
      const stats = fs.statSync(nextDir);
      buildMetrics.buildTime = stats.mtime.toISOString();
      
      // Calculate bundle size
      try {
        const bundleSize = calculateDirectorySize(nextDir);
        buildMetrics.bundleSize = bundleSize;
      } catch (error) {
        log(`Error calculating bundle size: ${String(error)}`);
      }
    }
    
    // Check package.json for dependency count
    try {
      const packagePath = path.join(process.cwd(), "package.json");
      if (fs.existsSync(packagePath)) {
        const packageContent = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        const deps = Object.keys(packageContent.dependencies || {}).length;
        const devDeps = Object.keys(packageContent.devDependencies || {}).length;
        buildMetrics.dependencies = { deps, devDeps, total: deps + devDeps };
      }
    } catch (error) {
      log(`Error checking dependencies: ${String(error)}`);
    }
    
    return { success: true, metrics: buildMetrics };
  } catch (error) {
    log(`Error checking build performance: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function calculateDirectorySize(dirPath) {
  let totalSize = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        totalSize += calculateDirectorySize(itemPath);
      } else {
        totalSize += stats.size;
      }
    });
  } catch (error) {
    log(`Error calculating size for ${dirPath}: ${String(error)}`);
  }
  
  return totalSize;
}

function runPerformanceScripts() {
  log("Running performance monitoring scripts...");
  
  try {
    const scripts = [
      "automation/continuous-build-monitor.cjs",
      "automation/performance-monitor.cjs"
    ];
    
    const results = [];
    
    scripts.forEach(script => {
      const scriptPath = path.join(process.cwd(), script);
      if (fs.existsSync(scriptPath)) {
        log(`Running ${script}...`);
        const result = run("node", [script]);
        results.push({
          script,
          success: result.status === 0,
          output: result.stdout,
          error: result.stderr
        });
        
        if (result.status === 0) {
          log(`✓ ${script} completed successfully`);
        } else {
          log(`✗ ${script} failed`);
        }
      } else {
        log(`Script not found: ${script}`);
        results.push({
          script,
          success: false,
          error: "Script not found"
        });
      }
    });
    
    return { success: true, results };
  } catch (error) {
    log(`Error running performance scripts: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generatePerformanceReport() {
  const report = {
    generatedAt: nowIso(),
    systemPerformance: null,
    buildPerformance: null,
    scriptResults: null,
    summary: "Performance monitor redundancy report"
  };

  try {
    // Run all performance checks
    report.systemPerformance = checkSystemPerformance();
    report.buildPerformance = checkBuildPerformance();
    report.scriptResults = runPerformanceScripts();
    
    // Generate summary
    if (report.systemPerformance.success && report.buildPerformance.success) {
      const systemMetrics = report.systemPerformance.metrics;
      const buildMetrics = report.buildPerformance.metrics;
      
      const criticalIssues = [];
      const warnings = [];
      
      // Check for critical issues
      if (systemMetrics.cpu && systemMetrics.cpu.status === "critical") {
        criticalIssues.push("CPU load critical");
      }
      if (systemMetrics.memory && systemMetrics.memory.status === "critical") {
        criticalIssues.push("Memory usage critical");
      }
      if (systemMetrics.disk && systemMetrics.disk.status === "critical") {
        criticalIssues.push("Disk usage critical");
      }
      
      // Check for warnings
      if (systemMetrics.cpu && systemMetrics.cpu.status === "high") {
        warnings.push("CPU load high");
      }
      if (systemMetrics.memory && systemMetrics.memory.status === "high") {
        warnings.push("Memory usage high");
      }
      if (systemMetrics.disk && systemMetrics.disk.status === "high") {
        warnings.push("Disk usage high");
      }
      
      if (criticalIssues.length > 0) {
        report.summary = `Performance check completed - ${criticalIssues.length} critical issues detected`;
      } else if (warnings.length > 0) {
        report.summary = `Performance check completed - ${warnings.length} warnings detected`;
      } else {
        report.summary = "Performance check completed - all systems operating normally";
      }
    } else {
      report.summary = "Performance check failed - unable to complete all checks";
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "performance-monitor-redundancy-report.md");
    const reportContent = `# Performance Monitor Redundancy Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## System Performance
${report.systemPerformance ? `
- Status: ${report.systemPerformance.success ? "✅ Success" : "❌ Failed"}

### CPU
- Load (1min): ${report.systemPerformance.metrics?.cpu?.load1 || "Unknown"}
- Load (5min): ${report.systemPerformance.metrics?.cpu?.load5 || "Unknown"}
- Load (15min): ${report.systemPerformance.metrics?.cpu?.load15 || "Unknown"}
- Status: ${report.systemPerformance.metrics?.cpu?.status || "Unknown"}

### Memory
- Total: ${report.systemPerformance.metrics?.memory?.total || "Unknown"}MB
- Used: ${report.systemPerformance.metrics?.memory?.used || "Unknown"}MB
- Available: ${report.systemPerformance.metrics?.memory?.available || "Unknown"}MB
- Usage: ${report.systemPerformance.metrics?.memory?.usage || "Unknown"}%
- Status: ${report.systemPerformance.metrics?.memory?.status || "Unknown"}

### Disk
- Total: ${report.systemPerformance.metrics?.disk?.total || "Unknown"}
- Used: ${report.systemPerformance.metrics?.disk?.used || "Unknown"}
- Available: ${report.systemPerformance.metrics?.disk?.available || "Unknown"}
- Usage: ${report.systemPerformance.metrics?.disk?.usage || "Unknown"}%
- Status: ${report.systemPerformance.metrics?.disk?.status || "Unknown"}

### Processes
- Count: ${report.systemPerformance.metrics?.processes?.count || "Unknown"}
- Status: ${report.systemPerformance.metrics?.processes?.status || "Unknown"}
` : '- System performance data not available'}

## Build Performance
${report.buildPerformance ? `
- Status: ${report.buildPerformance.success ? "✅ Success" : "❌ Failed"}
- Last Build: ${report.buildPerformance.metrics?.buildTime || "Unknown"}
- Bundle Size: ${report.buildPerformance.metrics?.bundleSize ? `${(report.buildPerformance.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB` : "Unknown"}
- Dependencies: ${report.buildPerformance.metrics?.dependencies ? `${report.buildPerformance.metrics.dependencies.total} (${report.buildPerformance.metrics.dependencies.deps} prod, ${report.buildPerformance.metrics.dependencies.devDeps} dev)` : "Unknown"}
` : '- Build performance data not available'}

## Script Results
- Status: ${report.scriptResults.success ? "✅ Success" : "❌ Failed"}
- Scripts Run: ${report.scriptResults.results.length}
- Successful: ${report.scriptResults.results.filter(r => r.success).length}
- Failed: ${report.scriptResults.results.filter(r => !r.success).length}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

    fs.writeFileSync(reportPath, reportContent);
    log(`Performance report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating performance report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

// Main execution
function main() {
  log("Starting performance monitor redundancy process");
  
  try {
    const report = generatePerformanceReport();
    log(`Performance monitor redundancy completed: ${report.summary}`);
    process.exit(0);
  } catch (error) {
    log(`Performance monitor redundancy failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  checkSystemPerformance, 
  checkBuildPerformance, 
  runPerformanceScripts, 
  generatePerformanceReport 
};