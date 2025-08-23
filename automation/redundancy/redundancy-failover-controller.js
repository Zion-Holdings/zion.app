#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-FAILOVER-CONTROLLER] ${message}`;
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

function checkGitHubActionsStatus() {
  log("Checking GitHub Actions status...");
  
  try {
    // Check if .github/workflows directory exists and has workflow files
    const workflowsDir = path.join(process.cwd(), ".github", "workflows");
    if (fs.existsSync(workflowsDir)) {
      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
      
      if (workflowFiles.length > 0) {
        log(`Found ${workflowFiles.length} GitHub Actions workflows`);
        return {
          available: true,
          workflowCount: workflowFiles.length,
          workflows: workflowFiles
        };
      } else {
        log("No workflow files found in .github/workflows");
        return {
          available: false,
          workflowCount: 0,
          workflows: []
        };
      }
    } else {
      log(".github/workflows directory not found");
      return {
        available: false,
        workflowCount: 0,
        workflows: []
      };
    }
  } catch (err) {
    log(`GitHub Actions status check error: ${String(err)}`);
    return {
      available: false,
      workflowCount: 0,
      workflows: [],
      error: String(err)
    };
  }
}

function checkPm2RedundancyStatus() {
  log("Checking PM2 redundancy status...");
  
  try {
    const pm2Status = run("pm2", ["status"]);
    if (pm2Status.status === 0) {
      const lines = pm2Status.stdout.split('\n');
      const redundancyProcesses = lines.filter(line => 
        line.includes('redundancy-') || 
        line.includes('zion-auto-sync')
      );
      
      const runningProcesses = redundancyProcesses.filter(line => 
        line.includes('online') || 
        line.includes('errored')
      );
      
      log(`Found ${runningProcesses.length} running redundancy processes`);
      return {
        available: true,
        processCount: redundancyProcesses.length,
        runningCount: runningProcesses.length,
        processes: redundancyProcesses
      };
    } else {
      log(`PM2 status check failed: ${pm2Status.stderr}`);
      return {
        available: false,
        processCount: 0,
        runningCount: 0,
        processes: [],
        error: pm2Status.stderr
      };
    }
  } catch (err) {
    log(`PM2 redundancy status check error: ${String(err)}`);
    return {
      available: false,
      processCount: 0,
      runningCount: 0,
      processes: [],
      error: String(err)
    };
  }
}

function checkNetlifyFunctionsStatus() {
  log("Checking Netlify functions status...");
  
  try {
    const netlifyDir = path.join(process.cwd(), "netlify", "functions");
    if (fs.existsSync(netlifyDir)) {
      const items = fs.readdirSync(netlifyDir, { withFileTypes: true });
      const functionDirs = items.filter(item => 
        item.isDirectory() && 
        fs.existsSync(path.join(netlifyDir, item.name, "index.js"))
      );
      
      log(`Found ${functionDirs.length} Netlify functions`);
      return {
        available: true,
        functionCount: functionDirs.length,
        functions: functionDirs.map(d => d.name)
      };
    } else {
      log("netlify/functions directory not found");
      return {
        available: false,
        functionCount: 0,
        functions: []
      };
    }
  } catch (err) {
    log(`Netlify functions status check error: ${String(err)}`);
    return {
      available: false,
        functionCount: 0,
        functions: [],
        error: String(err)
    };
  }
}

function determineFailoverStrategy(githubActions, pm2Redundancy, netlifyFunctions) {
  log("Determining failover strategy...");
  
  const strategy = {
    primary: null,
    secondary: null,
    tertiary: null,
    recommendations: []
  };
  
  // Determine primary system based on availability and health
  if (pm2Redundancy.available && pm2Redundancy.runningCount > 0) {
    strategy.primary = "pm2-redundancy";
    log("PM2 redundancy system selected as primary");
  } else if (githubActions.available && githubActions.workflowCount > 0) {
    strategy.primary = "github-actions";
    log("GitHub Actions selected as primary");
  } else if (netlifyFunctions.available && netlifyFunctions.functionCount > 0) {
    strategy.primary = "netlify-functions";
    log("Netlify functions selected as primary");
  }
  
  // Determine secondary system
  if (strategy.primary !== "github-actions" && githubActions.available) {
    strategy.secondary = "github-actions";
    log("GitHub Actions selected as secondary");
  } else if (strategy.primary !== "pm2-redundancy" && pm2Redundancy.available) {
    strategy.secondary = "pm2-redundancy";
    log("PM2 redundancy selected as secondary");
  } else if (strategy.primary !== "netlify-functions" && netlifyFunctions.available) {
    strategy.secondary = "netlify-functions";
    log("Netlify functions selected as secondary");
  }
  
  // Determine tertiary system
  if (strategy.primary !== "netlify-functions" && strategy.secondary !== "netlify-functions" && netlifyFunctions.available) {
    strategy.tertiary = "netlify-functions";
    log("Netlify functions selected as tertiary");
  } else if (strategy.primary !== "pm2-redundancy" && strategy.secondary !== "pm2-redundancy" && pm2Redundancy.available) {
    strategy.tertiary = "pm2-redundancy";
    log("PM2 redundancy selected as tertiary");
  } else if (strategy.primary !== "github-actions" && strategy.secondary !== "github-actions" && githubActions.available) {
    strategy.tertiary = "github-actions";
    log("GitHub Actions selected as tertiary");
  }
  
  // Generate recommendations
  if (!strategy.primary) {
    strategy.recommendations.push("No primary system available - immediate action required");
  }
  
  if (pm2Redundancy.available && pm2Redundancy.runningCount === 0) {
    strategy.recommendations.push("PM2 redundancy processes not running - restart required");
  }
  
  if (githubActions.available && githubActions.workflowCount === 0) {
    strategy.recommendations.push("GitHub Actions workflows not configured - setup required");
  }
  
  if (netlifyFunctions.available && netlifyFunctions.functionCount === 0) {
    strategy.recommendations.push("Netlify functions not configured - setup required");
  }
  
  return strategy;
}

function executeFailoverActions(strategy) {
  log("Executing failover actions...");
  
  const actions = [];
  
  try {
    // If PM2 redundancy is primary but not running, start it
    if (strategy.primary === "pm2-redundancy") {
      const pm2Status = run("pm2", ["status"]);
      if (pm2Status.status !== 0 || !pm2Status.stdout.includes('redundancy-')) {
        log("Starting PM2 redundancy system...");
        const startResult = run("pm2", ["start", "ecosystem.redundancy.cjs"]);
        if (startResult.status === 0) {
          actions.push({
            action: "start-pm2-redundancy",
            success: true,
            output: startResult.stdout
          });
          log("PM2 redundancy system started successfully");
        } else {
          actions.push({
            action: "start-pm2-redundancy",
            success: false,
            error: startResult.stderr
          });
          log(`Failed to start PM2 redundancy: ${startResult.stderr}`);
        }
      }
    }
    
    // If GitHub Actions is primary but workflows are missing, create basic ones
    if (strategy.primary === "github-actions") {
      const workflowsDir = path.join(process.cwd(), ".github", "workflows");
      if (!fs.existsSync(workflowsDir)) {
        log("Creating GitHub Actions workflows directory...");
        fs.mkdirSync(workflowsDir, { recursive: true });
        actions.push({
          action: "create-workflows-directory",
          success: true
        });
      }
    }
    
    // If Netlify functions is primary but functions are missing, create basic ones
    if (strategy.primary === "netlify-functions") {
      const netlifyDir = path.join(process.cwd(), "netlify", "functions");
      if (!fs.existsSync(netlifyDir)) {
        log("Creating Netlify functions directory...");
        fs.mkdirSync(netlifyDir, { recursive: true });
        actions.push({
          action: "create-netlify-directory",
          success: true
        });
      }
    }
    
    log(`Executed ${actions.length} failover actions`);
    return actions;
  } catch (err) {
    log(`Failover actions execution error: ${String(err)}`);
    return [{
      action: "failover-execution",
      success: false,
      error: String(err)
    }];
  }
}

function generateFailoverReport(githubActions, pm2Redundancy, netlifyFunctions, strategy, actions) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "failover-controller",
    systemStatus: {
      githubActions: githubActions,
      pm2Redundancy: pm2Redundancy,
      netlifyFunctions: netlifyFunctions
    },
    failoverStrategy: strategy,
    executedActions: actions,
    summary: {
      overallHealth: "healthy",
      issues: []
    }
  };
  
  // Determine overall health
  if (!strategy.primary) report.summary.issues.push("no-primary-system");
  if (strategy.recommendations.length > 0) report.summary.issues.push("recommendations-available");
  if (actions.filter(a => !a.success).length > 0) report.summary.issues.push("failover-actions-failed");
  
  if (report.summary.issues.length > 0) {
    report.summary.overallHealth = "degraded";
  }
  
  const reportPath = path.join(process.cwd(), "redundancy-failover-controller-report.md");
  const reportContent = `# Redundancy Failover Controller Report

Generated: ${report.timestamp}

## Summary
- **Overall Health**: ${report.summary.overallHealth === 'healthy' ? '🟢 Healthy' : '🟡 Degraded'}
- **Issues Found**: ${report.summary.issues.length}

## System Status
- **GitHub Actions**: ${githubActions.available ? '✅ Available' : '❌ Unavailable'} (${githubActions.workflowCount} workflows)${githubActions.error ? ` (${githubActions.error})` : ''}
- **PM2 Redundancy**: ${pm2Redundancy.available ? '✅ Available' : '❌ Unavailable'} (${pm2Redundancy.runningCount}/${pm2Redundancy.processCount} running)${pm2Redundancy.error ? ` (${pm2Redundancy.error})` : ''}
- **Netlify Functions**: ${netlifyFunctions.available ? '✅ Available' : '❌ Unavailable'} (${netlifyFunctions.functionCount} functions)${netlifyFunctions.error ? ` (${netlifyFunctions.error})` : ''}

## Failover Strategy
- **Primary System**: ${strategy.primary || 'None'}
- **Secondary System**: ${strategy.secondary || 'None'}
- **Tertiary System**: ${strategy.tertiary || 'None'}

## Recommendations
${strategy.recommendations.length > 0 ? strategy.recommendations.map(r => `- ${r}`).join('\n') : 'None'}

## Executed Actions
${actions.map(a => `- **${a.action}**: ${a.success ? '✅ Success' : '❌ Failed'}${a.error ? ` (${a.error})` : ''}${a.output ? ` - ${a.output}` : ''}`).join('\n')}

## Redundancy Status
This report was generated by the redundancy failover controller, managing failover between different automation systems.

## Next Steps
- Monitor primary system performance
- Address any failed failover actions
- Implement recommendations if provided
- Test failover scenarios
- Ensure all systems are properly configured
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Failover report generated: ${reportPath}`);
  return reportPath;
}

async function commitFailoverReport(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update failover controller report"]);
      
      log("Failover report committed successfully");
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
  log("Starting Redundancy Failover Controller Process");
  
  try {
    ensureRepoRoot();
    
    // Check system statuses
    log("Checking system statuses...");
    const githubActions = checkGitHubActionsStatus();
    const pm2Redundancy = checkPm2RedundancyStatus();
    const netlifyFunctions = checkNetlifyFunctionsStatus();
    
    // Determine failover strategy
    log("Determining failover strategy...");
    const strategy = determineFailoverStrategy(githubActions, pm2Redundancy, netlifyFunctions);
    
    // Execute failover actions
    log("Executing failover actions...");
    const actions = executeFailoverActions(strategy);
    
    // Generate failover report
    log("Generating failover report...");
    const reportPath = generateFailoverReport(githubActions, pm2Redundancy, netlifyFunctions, strategy, actions);
    
    // Commit report if changed
    log("Committing failover report if changed...");
    await commitFailoverReport(reportPath);
    
    log("Redundancy Failover Controller Process completed");
    log(`Results: Primary=${strategy.primary || 'None'}, Actions=${actions.filter(a => a.success).length}/${actions.length}`);
    
    // Exit with appropriate code
    if (strategy.primary && actions.filter(a => !a.success).length === 0) {
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
    log(`Unhandled error: ${String(err)}`);
    process.exit(1);
  });
}

module.exports = { 
  main, 
  checkGitHubActionsStatus, 
  checkPm2RedundancyStatus, 
  checkNetlifyFunctionsStatus, 
  determineFailoverStrategy, 
  executeFailoverActions,
  generateFailoverReport 
};