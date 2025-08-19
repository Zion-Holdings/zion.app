#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [UNIFIED-REDUNDANCY] ${message}`;
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

// Redundancy system configuration
const REDUNDANCY_SYSTEMS = {
  pm2: {
    name: "PM2 Redundancy",
    ecosystemFile: "ecosystem.redundancy.pm2.cjs",
    processes: [
      "redundancy-marketing-sync",
      "redundancy-sync-health",
      "redundancy-build-monitor",
      "redundancy-netlify-orchestrator",
      "redundancy-content-quality",
      "redundancy-security-scanner",
      "redundancy-performance-monitor",
      "redundancy-dependency-monitor",
      "redundancy-health-orchestrator"
    ],
    status: "unknown"
  },
  githubActions: {
    name: "GitHub Actions Redundancy",
    workflows: [
      "marketing-sync",
      "sync-health"
    ],
    status: "unknown"
  },
  netlifyFunctions: {
    name: "Netlify Functions Redundancy",
    functionsCount: 0,
    status: "unknown"
  }
};

function checkPM2Redundancy() {
  log("Checking PM2 redundancy system...");
  
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
        const total = REDUNDANCY_SYSTEMS.pm2.processes.length;
        
        REDUNDANCY_SYSTEMS.pm2.status = running === total ? "healthy" : "degraded";
        
        log(`PM2 Redundancy: ${running}/${total} processes running`);
        return { success: true, running, total, status: REDUNDANCY_SYSTEMS.pm2.status };
      } catch (error) {
        log(`Error parsing PM2 status: ${String(error)}`);
        return { success: false, error: "Failed to parse PM2 status" };
      }
    } else {
      log("PM2 not available");
      REDUNDANCY_SYSTEMS.pm2.status = "unavailable";
      return { success: false, error: "PM2 not available" };
    }
  } catch (error) {
    log(`Error checking PM2 redundancy: ${String(error)}`);
    REDUNDANCY_SYSTEMS.pm2.status = "error";
    return { success: false, error: String(error) };
  }
}

function checkGitHubActionsRedundancy() {
  log("Checking GitHub Actions redundancy...");
  
  try {
    const workflowsDir = path.join(process.cwd(), ".github", "workflows");
    if (!fs.existsSync(workflowsDir)) {
      REDUNDANCY_SYSTEMS.githubActions.status = "unavailable";
      return { success: false, error: "GitHub workflows directory not found" };
    }
    
    const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
    const redundancyWorkflows = workflowFiles.filter(file => 
      REDUNDANCY_SYSTEMS.githubActions.workflows.some(name => file.includes(name))
    );
    
    const status = redundancyWorkflows.length > 0 ? "healthy" : "degraded";
    REDUNDANCY_SYSTEMS.githubActions.status = status;
    
    log(`GitHub Actions Redundancy: ${redundancyWorkflows.length} workflows found`);
    return { success: true, workflows: redundancyWorkflows, status };
  } catch (error) {
    log(`Error checking GitHub Actions redundancy: ${String(error)}`);
    REDUNDANCY_SYSTEMS.githubActions.status = "error";
    return { success: false, error: String(error) };
  }
}

function checkNetlifyFunctionsRedundancy() {
  log("Checking Netlify Functions redundancy...");
  
  try {
    const manifestPath = path.join(process.cwd(), "netlify", "functions", "functions-manifest.json");
    if (!fs.existsSync(manifestPath)) {
      REDUNDANCY_SYSTEMS.netlifyFunctions.status = "unavailable";
      return { success: false, error: "Functions manifest not found" };
    }
    
    const manifestContent = fs.readFileSync(manifestPath, "utf8");
    const manifest = JSON.parse(manifestContent);
    
    if (manifest.functions && Array.isArray(manifest.functions)) {
      REDUNDANCY_SYSTEMS.netlifyFunctions.functionsCount = manifest.functions.length;
      REDUNDANCY_SYSTEMS.netlifyFunctions.status = "healthy";
      
      log(`Netlify Functions Redundancy: ${manifest.functions.length} functions found`);
      return { success: true, functions: manifest.functions, status: "healthy" };
    } else {
      REDUNDANCY_SYSTEMS.netlifyFunctions.status = "degraded";
      return { success: false, error: "Invalid functions manifest" };
    }
  } catch (error) {
    log(`Error checking Netlify Functions redundancy: ${String(error)}`);
    REDUNDANCY_SYSTEMS.netlifyFunctions.status = "error";
    return { success: false, error: String(error) };
  }
}

function startPM2Redundancy() {
  log("Starting PM2 redundancy system...");
  
  try {
    const ecosystemFile = REDUNDANCY_SYSTEMS.pm2.ecosystemFile;
    const ecosystemPath = path.join(process.cwd(), ecosystemFile);
    
    if (!fs.existsSync(ecosystemPath)) {
      return { success: false, error: `Ecosystem file not found: ${ecosystemFile}` };
    }
    
    // Create logs directory
    const logsDir = path.join(process.cwd(), "automation", "logs");
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Start PM2 processes
    const startResult = run("pm2", ["start", ecosystemFile, "--update-env"]);
    
    if (startResult.status === 0) {
      log("PM2 redundancy system started successfully");
      return { success: true, message: "PM2 redundancy system started" };
    } else {
      log(`Failed to start PM2 redundancy: ${startResult.stderr}`);
      return { success: false, error: startResult.stderr };
    }
  } catch (error) {
    log(`Error starting PM2 redundancy: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function stopPM2Redundancy() {
  log("Stopping PM2 redundancy system...");
  
  try {
    const stopResult = run("pm2", ["stop", "ecosystem.redundancy.pm2.cjs"]);
    
    if (stopResult.status === 0) {
      log("PM2 redundancy system stopped successfully");
      return { success: true, message: "PM2 redundancy system stopped" };
    } else {
      log(`Failed to stop PM2 redundancy: ${stopResult.stderr}`);
      return { success: false, error: stopResult.stderr };
    }
  } catch (error) {
    log(`Error stopping PM2 redundancy: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function restartPM2Redundancy() {
  log("Restarting PM2 redundancy system...");
  
  try {
    const restartResult = run("pm2", ["restart", "ecosystem.redundancy.pm2.cjs"]);
    
    if (restartResult.status === 0) {
      log("PM2 redundancy system restarted successfully");
      return { success: true, message: "PM2 redundancy system restarted" };
    } else {
      log(`Failed to restart PM2 redundancy: ${restartResult.stderr}`);
      return { success: false, error: restartResult.stderr };
    }
  } catch (error) {
    log(`Error restarting PM2 redundancy: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function runRedundancyTests() {
  log("Running redundancy system tests...");
  
  try {
    const testResults = {
      pm2: null,
      githubActions: null,
      netlifyFunctions: null
    };
    
    // Test PM2 redundancy
    testResults.pm2 = checkPM2Redundancy();
    
    // Test GitHub Actions redundancy
    testResults.githubActions = checkGitHubActionsRedundancy();
    
    // Test Netlify Functions redundancy
    testResults.netlifyFunctions = checkNetlifyFunctionsRedundancy();
    
    // Generate overall status
    const healthySystems = Object.values(testResults).filter(r => r && r.success && r.status === "healthy").length;
    const totalSystems = Object.keys(testResults).length;
    
    const overallStatus = healthySystems === totalSystems ? "healthy" : 
                         healthySystems >= totalSystems * 0.7 ? "degraded" : "critical";
    
    return { success: true, results: testResults, overallStatus, healthySystems, totalSystems };
  } catch (error) {
    log(`Error running redundancy tests: ${String(error)}`);
    return { success: false, error: String(error) };
  }
}

function generateUnifiedReport() {
  const report = {
    generatedAt: nowIso(),
    systemStatus: {},
    testResults: null,
    summary: "Unified redundancy system report"
  };

  try {
    // Check all systems
    report.systemStatus.pm2 = checkPM2Redundancy();
    report.systemStatus.githubActions = checkGitHubActionsRedundancy();
    report.systemStatus.netlifyFunctions = checkNetlifyFunctionsRedundancy();
    
    // Run tests
    report.testResults = runRedundancyTests();
    
    // Generate summary
    const healthyCount = Object.values(report.systemStatus).filter(s => s && s.success && s.status === "healthy").length;
    const totalCount = Object.keys(report.systemStatus).length;
    
    if (healthyCount === totalCount) {
      report.summary = "All redundancy systems operating normally";
    } else if (healthyCount >= totalCount * 0.7) {
      report.summary = `Most redundancy systems healthy (${healthyCount}/${totalCount})`;
    } else {
      report.summary = `Multiple redundancy systems need attention (${healthyCount}/${totalCount})`;
    }
    
    // Write report
    const reportPath = path.join(process.cwd(), "unified-redundancy-report.md");
    const reportContent = `# Unified Redundancy System Report

Generated: ${report.generatedAt}

## Summary
${report.summary}

## System Status

### PM2 Redundancy
- Status: ${report.systemStatus.pm2?.success ? "✅ Success" : "❌ Failed"}
- Health: ${report.systemStatus.pm2?.status || "Unknown"}
- Running: ${report.systemStatus.pm2?.running || 0}/${report.systemStatus.pm2?.total || 0} processes

### GitHub Actions Redundancy
- Status: ${report.systemStatus.githubActions?.success ? "✅ Success" : "❌ Failed"}
- Health: ${report.systemStatus.githubActions?.status || "Unknown"}
- Workflows: ${report.systemStatus.githubActions?.workflows?.length || 0} found

### Netlify Functions Redundancy
- Status: ${report.systemStatus.netlifyFunctions?.success ? "✅ Success" : "❌ Failed"}
- Health: ${report.systemStatus.netlifyFunctions?.status || "Unknown"}
- Functions: ${report.systemStatus.netlifyFunctions?.functionsCount || 0} available

## Test Results
- Overall Status: ${report.testResults?.overallStatus || "Unknown"}
- Healthy Systems: ${report.testResults?.healthySystems || 0}/${report.testResults?.totalSystems || 0}

## Redundancy Coverage

### PM2 Processes
${REDUNDANCY_SYSTEMS.pm2.processes.map(process => `- ${process}`).join('\n')}

### GitHub Actions Workflows
${REDUNDANCY_SYSTEMS.githubActions.workflows.map(workflow => `- ${workflow}`).join('\n')}

### Netlify Functions
- Total Functions: ${REDUNDANCY_SYSTEMS.netlifyFunctions.functionsCount}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

    fs.writeFileSync(reportPath, reportContent);
    log(`Unified report written to ${reportPath}`);
    
    return report;
  } catch (error) {
    log(`Error generating unified report: ${String(error)}`);
    report.error = String(error);
    return report;
  }
}

function showHelp() {
  console.log(`
Unified Redundancy Orchestrator

Usage: node automation/redundancy-unified-orchestrator.js [command]

Commands:
  status          - Check status of all redundancy systems
  start           - Start PM2 redundancy system
  stop            - Stop PM2 redundancy system
  restart         - Restart PM2 redundancy system
  test            - Run redundancy system tests
  report          - Generate comprehensive redundancy report
  help            - Show this help message

Examples:
  node automation/redundancy-unified-orchestrator.js status
  node automation/redundancy-unified-orchestrator.js start
  node automation/redundancy-unified-orchestrator.js test
`);
}

// Main execution
function main() {
  const command = process.argv[2] || "status";
  
  log(`Executing command: ${command}`);
  
  try {
    switch (command) {
      case "status":
        const status = runRedundancyTests();
        if (status.success) {
          log(`Overall Status: ${status.overallStatus}`);
          log(`Healthy Systems: ${status.healthySystems}/${status.totalSystems}`);
        } else {
          log(`Status check failed: ${status.error}`);
        }
        break;
        
      case "start":
        const startResult = startPM2Redundancy();
        if (startResult.success) {
          log(startResult.message);
        } else {
          log(`Start failed: ${startResult.error}`);
        }
        break;
        
      case "stop":
        const stopResult = stopPM2Redundancy();
        if (stopResult.success) {
          log(stopResult.message);
        } else {
          log(`Stop failed: ${stopResult.error}`);
        }
        break;
        
      case "restart":
        const restartResult = restartPM2Redundancy();
        if (restartResult.success) {
          log(restartResult.message);
        } else {
          log(`Restart failed: ${restartResult.error}`);
        }
        break;
        
      case "test":
        const testResult = runRedundancyTests();
        if (testResult.success) {
          log(`Test completed. Overall Status: ${testResult.overallStatus}`);
        } else {
          log(`Test failed: ${testResult.error}`);
        }
        break;
        
      case "report":
        const report = generateUnifiedReport();
        log(`Report generated: ${report.summary}`);
        break;
        
      case "help":
        showHelp();
        break;
        
      default:
        log(`Unknown command: ${command}`);
        showHelp();
        process.exit(1);
    }
    
    process.exit(0);
  } catch (error) {
    log(`Command execution failed: ${String(error)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  checkPM2Redundancy,
  checkGitHubActionsRedundancy,
  checkNetlifyFunctionsRedundancy,
  startPM2Redundancy,
  stopPM2Redundancy,
  restartPM2Redundancy,
  runRedundancyTests,
  generateUnifiedReport,
  REDUNDANCY_SYSTEMS
};