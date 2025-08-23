#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-NETLIFY-FUNCTIONS] ${message}`;
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

function getNetlifyFunctions() {
  try {
    const manifestPath = path.join(process.cwd(), "netlify", "functions", "functions-manifest.json");
    if (!fs.existsSync(manifestPath)) {
      log("Netlify functions manifest not found, generating...");
      run("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
    }
    
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    return manifest.functions || [];
  } catch (err) {
    log(`Error reading functions manifest: ${String(err)}`);
    return [];
  }
}

function executeFunctionLocally(functionName) {
  try {
    log(`Executing function: ${functionName}`);
    
    // Check if function file exists
    const functionPath = path.join(process.cwd(), "netlify", "functions", functionName);
    if (!fs.existsSync(functionPath)) {
      log(`Function ${functionName} not found, skipping...`);
      return { success: false, error: "Function not found" };
    }
    
    // Try to execute the function locally
    const result = run("node", [functionPath], { verbose: true });
    
    if (result.status === 0) {
      log(`Function ${functionName} executed successfully`);
      return { success: true, output: result.stdout };
    } else {
      log(`Function ${functionName} failed: ${result.stderr}`);
      return { success: false, error: result.stderr };
    }
  } catch (err) {
    log(`Error executing function ${functionName}: ${String(err)}`);
    return { success: false, error: String(err) };
  }
}

function executeCriticalFunctions() {
  const criticalFunctions = [
    "netlify-auto-healer-runner",
    "continuous-orchestrator",
    "build-failure-recovery",
    "security-audit-runner",
    "performance-monitor",
    "content-quality-fixer",
    "seo-audit-runner"
  ];
  
  const results = {};
  
  for (const funcName of criticalFunctions) {
    results[funcName] = executeFunctionLocally(funcName);
  }
  
  return results;
}

function executeScheduledFunctions() {
  const scheduledFunctions = [
    "marketing-scheduler",
    "content-freshness-score-runner",
    "maintenance-scheduler",
    "link-and-health-scheduler",
    "homepage-updater-scheduler"
  ];
  
  const results = {};
  
  for (const funcName of scheduledFunctions) {
    results[funcName] = executeFunctionLocally(funcName);
  }
  
  return results;
}

function executeContentFunctions() {
  const contentFunctions = [
    "ai-content-factory-runner",
    "ai-trends-radar-runner",
    "content-generation-runner",
    "media-optimizer-runner",
    "og-image-update-runner"
  ];
  
  const results = {};
  
  for (const funcName of contentFunctions) {
    results[funcName] = executeFunctionLocally(funcName);
  }
  
  return results;
}

function generateExecutionReport(criticalResults, scheduledResults, contentResults) {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    netlifyFunctions: {
      critical: criticalResults,
      scheduled: scheduledResults,
      content: contentResults,
      summary: {
        totalExecuted: Object.keys(criticalResults).length + 
                     Object.keys(scheduledResults).length + 
                     Object.keys(contentResults).length,
        successful: Object.values(criticalResults).filter(r => r.success).length +
                   Object.values(scheduledResults).filter(r => r.success).length +
                   Object.values(contentResults).filter(r => r.success).length,
        failed: Object.values(criticalResults).filter(r => !r.success).length +
                Object.values(scheduledResults).filter(r => !r.success).length +
                Object.values(contentResults).filter(r => !r.success).length
      }
    }
  };

  const reportPath = path.join(process.cwd(), "netlify-functions-redundancy-report.md");
  const reportContent = `# Netlify Functions Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Execution Summary
- Total Functions: ${report.netlifyFunctions.summary.totalExecuted}
- Successful: ${report.netlifyFunctions.summary.successful} ✅
- Failed: ${report.netlifyFunctions.summary.failed} ❌

## Critical Functions
${Object.entries(criticalResults).map(([name, result]) => 
  `- ${name}: ${result.success ? "✅ Success" : "❌ Failed"}`
).join("\n")}

## Scheduled Functions
${Object.entries(scheduledResults).map(([name, result]) => 
  `- ${name}: ${result.success ? "✅ Success" : "❌ Failed"}`
).join("\n")}

## Content Functions
${Object.entries(contentResults).map(([name, result]) => 
  `- ${name}: ${result.success ? "✅ Success" : "❌ Failed"}`
).join("\n")}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Execution report generated: ${reportPath}`);
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
    run("git", ["commit", "-m", `chore(redundancy): netlify functions execution via PM2 redundancy`]);

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
    log("Starting Netlify functions redundancy process...");
    
    // Get list of available functions
    const functions = getNetlifyFunctions();
    log(`Found ${functions.length} Netlify functions`);
    
    // Execute functions by category
    log("Executing critical functions...");
    const criticalResults = executeCriticalFunctions();
    
    log("Executing scheduled functions...");
    const scheduledResults = executeScheduledFunctions();
    
    log("Executing content functions...");
    const contentResults = executeContentFunctions();
    
    // Generate execution report
    const report = generateExecutionReport(criticalResults, scheduledResults, contentResults);
    
    // Commit and push if needed
    await commitAndPush();
    
    log("Netlify functions redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Netlify functions redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { 
  main, 
  executeFunctionLocally, 
  executeCriticalFunctions, 
  executeScheduledFunctions, 
  executeContentFunctions,
  generateExecutionReport 
};