#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

console.log("🧪 Local Workflow Testing & Validation\n");

const workflowsDir = ".github/workflows";
const results = [];

// Colors for output
const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
  bold: "\x1b[1m"
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateWorkflow(filepath) {
  const filename = path.basename(filepath);
  const issues = [];
  let content;
  
  try {
    content = fs.readFileSync(filepath, "utf8");
  } catch (err) {
    issues.push(`Cannot read file: ${err.message}`);
    return { filename, issues, valid: false, content: null };
  }
  
  // Check if file is empty or very small
  if (content.trim().length === 0) {
    issues.push("File is empty");
    return { filename, issues, valid: false, content };
  }
  
  if (content.length < 100) {
    issues.push("File is suspiciously small (< 100 chars)");
  }
  
  // Try to parse YAML
  try {
    const parsed = yaml.load(content);
    if (!parsed) {
      issues.push("YAML parsing resulted in null/undefined");
      return { filename, issues, valid: false, content };
    }
    
    // Check basic structure
    if (!parsed.name) {
      issues.push("Missing 'name' field");
    }
    
    if (!parsed.on) {
      issues.push("Missing 'on' trigger section");
    }
    
    if (!parsed.jobs) {
      issues.push("Missing 'jobs' section");
    }
    
    // Check for common issues
    if (content.includes("WORKFLOW_NAME_PLACEHOLDER")) {
      issues.push("Contains placeholder name");
    }
    
    if (content.includes("PLACEHOLDER")) {
      issues.push("Contains placeholder text");
    }
    
    // Check for missing permissions
    if (!content.includes("permissions:")) {
      issues.push("Missing permissions section (security concern)");
    }
    
    // Check for missing concurrency
    if (!content.includes("concurrency:")) {
      issues.push("Missing concurrency settings (potential race conditions)");
    }
    
    // Check for missing timeout
    if (!content.includes("timeout-minutes:")) {
      issues.push("Missing timeout-minutes (potential hanging workflows)");
    }
    
    // Check for outdated actions
    if (content.includes("actions/checkout@v3")) {
      issues.push("Using outdated checkout@v3 (should be v4)");
    }
    
    if (content.includes("actions/setup-node@v3")) {
      issues.push("Using outdated setup-node@v3 (should be v4)");
    }
    
    if (content.includes("actions/upload-artifact@v3")) {
      issues.push("Using outdated upload-artifact@v3 (should be v4)");
    }
    
    // Check for overly permissive permissions
    if (content.includes("contents: write") && !content.includes("pull-requests: write")) {
      issues.push("Overly permissive: contents: write without pull-requests: write");
    }
    
    // Check for high-frequency schedules
    const cronMatch = content.match(/cron:\s*['"`](\*\/\d+\s+\*\s+\*\s+\*\s+\*)/);
    if (cronMatch) {
      const schedule = cronMatch[1];
      if (schedule.startsWith("*/1") || schedule.startsWith("*/2") || schedule.startsWith("*/5")) {
        issues.push(`High-frequency schedule detected: ${schedule} (may cause rate limiting)`);
      }
    }
    
    // Check for missing runs-on
    if (!content.includes("runs-on:")) {
      issues.push("Missing runs-on specification");
    }
    
    // Check for missing steps
    if (!content.includes("steps:")) {
      issues.push("Missing steps section");
    }
    
    // Check for proper job structure
    if (parsed.jobs) {
      for (const [jobName, job] of Object.entries(parsed.jobs)) {
        if (typeof job === "object" && job !== null) {
          if (!job.runs_on && !job["runs-on"]) {
            issues.push(`Job '${jobName}' missing runs-on`);
          }
          if (!job.steps) {
            issues.push(`Job '${jobName}' missing steps`);
          }
        }
      }
    }
    
  } catch (yamlErr) {
    issues.push(`YAML parsing error: ${yamlErr.message}`);
    return { filename, issues, valid: false, content };
  }
  
  return { 
    filename, 
    issues, 
    valid: issues.length === 0, 
    content,
    parsed: yaml.load(content)
  };
}

function testWorkflowExecution(filepath) {
  const filename = path.basename(filepath);
  const content = fs.readFileSync(filepath, "utf8");
  
  // Check if workflow has workflow_dispatch (can be manually triggered)
  const hasManualTrigger = content.includes("workflow_dispatch");
  
  // Check if workflow has schedule (runs automatically)
  const hasSchedule = content.includes("schedule") && content.includes("cron:");
  
  // Check if workflow has push/pull_request triggers
  const hasPushTrigger = content.includes("push:");
  const hasPullRequestTrigger = content.includes("pull_request:");
  
  // Check if workflow has proper error handling
  const hasContinueOnError = content.includes("continue-on-error:");
  const hasTimeout = content.includes("timeout-minutes:");
  
  return {
    filename,
    canBeManuallyTriggered: hasManualTrigger,
    runsAutomatically: hasSchedule,
    hasPushTrigger,
    hasPullRequestTrigger,
    hasErrorHandling: hasContinueOnError,
    hasTimeout,
    triggerTypes: {
      manual: hasManualTrigger,
      scheduled: hasSchedule,
      push: hasPushTrigger,
      pullRequest: hasPullRequestTrigger
    }
  };
}

function generateTestInstructions(workflow) {
  const instructions = [];
  
  if (workflow.canBeManuallyTriggered) {
    instructions.push("✅ Can be manually triggered via GitHub UI or API");
  } else {
    instructions.push("⚠️  Cannot be manually triggered - add 'workflow_dispatch: {}' to 'on:' section");
  }
  
  if (workflow.runsAutomatically) {
    instructions.push("✅ Runs automatically on schedule");
  } else {
    instructions.push("ℹ️  No automatic schedule - consider adding cron schedule for regular execution");
  }
  
  if (workflow.hasPushTrigger || workflow.hasPullRequestTrigger) {
    instructions.push("✅ Triggers on code changes");
  } else {
    instructions.push("ℹ️  No automatic triggers on code changes");
  }
  
  if (workflow.hasErrorHandling) {
    instructions.push("✅ Has error handling (continue-on-error)");
  } else {
    instructions.push("⚠️  Consider adding continue-on-error for non-critical steps");
  }
  
  if (workflow.hasTimeout) {
    instructions.push("✅ Has timeout protection");
  } else {
    instructions.push("⚠️  Missing timeout - add 'timeout-minutes: 30' to prevent hanging");
  }
  
  return instructions;
}

// Main execution
async function main() {
  if (!fs.existsSync(workflowsDir)) {
    log("❌ No .github/workflows directory found", "red");
    process.exit(1);
  }
  
  const workflowFiles = fs.readdirSync(workflowsDir)
    .filter(file => file.endsWith(".yml") || file.endsWith(".yaml"))
    .filter(file => !file.includes("broken_workflows_backup"));
  
  log(`📁 Found ${workflowFiles.length} workflow files\n`, "blue");
  
  const validationResults = [];
  const executionResults = [];
  
  for (const filename of workflowFiles) {
    const filepath = path.join(workflowsDir, filename);
    log(`🔍 Testing: ${filename}`, "cyan");
    
    // Validate workflow structure
    const validation = validateWorkflow(filepath);
    validationResults.push(validation);
    
    // Test execution capabilities
    const execution = testWorkflowExecution(filepath);
    executionResults.push(execution);
    
    if (validation.issues.length > 0) {
      log(`  ❌ Issues found:`, "red");
      validation.issues.forEach(issue => log(`    - ${issue}`, "red"));
    } else {
      log(`  ✅ Valid workflow`, "green");
    }
    
    // Show execution capabilities
    const instructions = generateTestInstructions(execution);
    instructions.forEach(instruction => {
      if (instruction.startsWith("✅")) {
        log(`  ${instruction}`, "green");
      } else if (instruction.startsWith("⚠️")) {
        log(`  ${instruction}`, "yellow");
      } else {
        log(`  ${instruction}`, "blue");
      }
    });
    
    console.log("");
  }
  
  // Summary
  log("\n📊 Test Results Summary", "bold");
  log("=====================", "bold");
  
  const validCount = validationResults.filter(r => r.valid).length;
  const invalidCount = validationResults.filter(r => !r.valid).length;
  
  log(`Total workflows: ${workflowFiles.length}`, "blue");
  log(`✅ Valid: ${validCount}`, "green");
  log(`❌ Invalid: ${invalidCount}`, "red");
  
  if (invalidCount > 0) {
    log("\n🚨 Workflows requiring attention:", "red");
    validationResults
      .filter(r => !r.valid)
      .forEach(r => {
        log(`  ${r.filename}:`, "red");
        r.issues.forEach(issue => log(`    - ${issue}`, "red"));
      });
  }
  
  // Generate test report
  const report = {
    timestamp: new Date().toISOString(),
    totalWorkflows: workflowFiles.length,
    validWorkflows: validCount,
    invalidWorkflows: invalidCount,
    validationResults,
    executionResults,
    recommendations: []
  };
  
  // Generate recommendations
  if (invalidCount > 0) {
    report.recommendations.push("Fix validation issues before testing workflows");
  }
  
  const workflowsWithoutManualTrigger = executionResults.filter(w => !w.canBeManuallyTriggered).length;
  if (workflowsWithoutManualTrigger > 0) {
    report.recommendations.push(`Add workflow_dispatch to ${workflowsWithoutManualTrigger} workflows for manual testing`);
  }
  
  const workflowsWithoutTimeout = executionResults.filter(w => !w.hasTimeout).length;
  if (workflowsWithoutTimeout > 0) {
    report.recommendations.push(`Add timeout-minutes to ${workflowsWithoutTimeout} workflows`);
  }
  
  if (report.recommendations.length > 0) {
    log("\n💡 Recommendations:", "yellow");
    report.recommendations.forEach(rec => log(`  - ${rec}`, "yellow"));
  }
  
  // Save report
  try {
    const reportDir = path.resolve(__dirname, "../public/reports/workflows");
    fs.mkdirSync(reportDir, { recursive: true });
    const reportPath = path.join(reportDir, "local-test-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    log(`\n📄 Detailed report saved to: ${reportPath}`, "green");
  } catch (err) {
    log(`\n⚠️  Could not save report: ${err.message}`, "yellow");
  }
  
  // Exit with error code if there are invalid workflows
  if (invalidCount > 0) {
    log("\n❌ Some workflows have issues that should be fixed before testing", "red");
    process.exit(1);
  } else {
    log("\n✅ All workflows are valid and ready for testing!", "green");
  }
}

main().catch(err => {
  log(`❌ Error: ${err.message}`, "red");
  process.exit(1);
});