#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class DisabledTimeoutFixer {
  constructor() {
    this.disabledDir = path.resolve(__dirname, "../.github/workflows.disabled");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.fixedWorkflows = [];
    this.failedWorkflows = [];
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async fixDisabledWorkflowTimeouts() {
    console.log("🔧 Fixing missing timeouts in disabled workflows...");
    
    const workflows = this.getDisabledWorkflows();
    console.log(`📋 Found ${workflows.length} disabled workflows to check`);
    
    for (const workflow of workflows) {
      try {
        const fixed = await this.fixWorkflowTimeout(workflow);
        if (fixed) {
          this.fixedWorkflows.push(workflow.name);
        }
      } catch (error) {
        console.error(`❌ Failed to fix ${workflow.name}:`, error.message);
        this.failedWorkflows.push({ name: workflow.name, error: error.message });
      }
    }
    
    this.generateReport();
    return { fixed: this.fixedWorkflows, failed: this.failedWorkflows };
  }

  getDisabledWorkflows() {
    if (!fs.existsSync(this.disabledDir)) return [];
    
    return fs.readdirSync(this.disabledDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.disabledDir, f)
      }));
  }

  async fixWorkflowTimeout(workflow) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    
    // Check if workflow already has timeout
    if (content.includes('timeout-minutes:')) {
      return false; // Already has timeout
    }
    
    console.log(`🔧 Processing ${workflow.name} (no timeout found)`);
    
    // Determine appropriate timeout based on workflow type
    const timeout = this.determineTimeout(workflow.name, content);
    console.log(`   📊 Determined timeout: ${timeout} minutes`);
    
    // Add timeout to each job using regex replacement
    const updatedContent = this.addTimeoutToJobsRegex(content, timeout);
    
    if (updatedContent !== content) {
      // Backup original file
      const backupPath = `${workflow.path}.backup`;
      fs.writeFileSync(backupPath, content);
      
      // Write updated content
      fs.writeFileSync(workflow.path, updatedContent);
      
      console.log(`✅ Added ${timeout}min timeout to ${workflow.name}`);
      return true;
    } else {
      console.log(`⚠️  No changes made to ${workflow.name}`);
    }
    
    return false;
  }

  determineTimeout(workflowName, content) {
    // Determine timeout based on workflow type and complexity
    const lines = content.split('\n').length;
    const hasBuild = content.includes('npm run build') || content.includes('npm run build:');
    const hasTests = content.includes('npm test') || content.includes('npm run test');
    const hasLint = content.includes('npm run lint') || content.includes('eslint');
    const hasSecurity = content.includes('security') || content.includes('audit');
    
    if (hasBuild && hasTests) return 30; // Complex build + test workflows
    if (hasBuild) return 25; // Build workflows
    if (hasTests) return 20; // Test workflows
    if (hasLint) return 15; // Lint workflows
    if (hasSecurity) return 20; // Security workflows
    if (lines > 100) return 20; // Large workflows
    if (lines > 50) return 15; // Medium workflows
    
    return 10; // Default timeout
  }

  addTimeoutToJobsRegex(content, timeout) {
    // Use regex to find and replace job definitions
    // Look for patterns like:
    //   jobname:
    //     runs-on: ubuntu-latest
    // And insert timeout after runs-on
    
    const jobPattern = /^(\s+)([a-zA-Z_][a-zA-Z0-9_-]*):\s*$/gm;
    let updatedContent = content;
    let match;
    
    while ((match = jobPattern.exec(content)) !== null) {
      const fullMatch = match[0];
      const indent = match[1];
      const jobName = match[2];
      
      // Skip if this is not a job definition (e.g., 'on:', 'permissions:', etc.)
      if (['on', 'permissions', 'concurrency', 'env', 'jobs'].includes(jobName)) {
        continue;
      }
      
      // Find the runs-on line for this job
      const lines = content.split('\n');
      const jobStartLine = content.substring(0, match.index).split('\n').length - 1;
      
      // Look for runs-on in the next few lines
      for (let i = jobStartLine + 1; i < Math.min(jobStartLine + 10, lines.length); i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // If we hit another job definition or section, stop looking
        if (trimmed.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:\s*$/) && !trimmed.includes('runs-on')) {
          break;
        }
        
        if (trimmed.startsWith('runs-on:')) {
          // Insert timeout after this line
          const timeoutLine = `${indent}    timeout-minutes: ${timeout}`;
          const beforeTimeout = lines.slice(0, i + 1).join('\n');
          const afterTimeout = lines.slice(i + 1).join('\n');
          
          updatedContent = beforeTimeout + '\n' + timeoutLine + '\n' + afterTimeout;
          
          console.log(`   🔍 Found job '${jobName}' with runs-on, added timeout`);
          break;
        }
      }
    }
    
    return updatedContent;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalWorkflows: this.fixedWorkflows.length + this.failedWorkflows.length,
        fixed: this.fixedWorkflows.length,
        failed: this.failedWorkflows.length
      },
      fixedWorkflows: this.fixedWorkflows,
      failedWorkflows: this.failedWorkflows
    };
    
    const reportPath = path.join(this.reportsDir, 'disabled-timeout-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📊 Disabled timeout fix report saved to: ${reportPath}`);
    console.log(`\n✅ Fixed ${this.fixedWorkflows.length} disabled workflows`);
    if (this.failedWorkflows.length > 0) {
      console.log(`❌ Failed to fix ${this.failedWorkflows.length} disabled workflows`);
    }
  }
}

// Run the fixer
async function main() {
  try {
    const fixer = new DisabledTimeoutFixer();
    const results = await fixer.fixDisabledWorkflowTimeouts();
    
    console.log("\n🎉 Disabled workflow timeout fixing completed!");
    console.log(`Fixed: ${results.fixed.length}`);
    console.log(`Failed: ${results.failed.length}`);
    
  } catch (error) {
    console.error("❌ Error running disabled timeout fixer:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = DisabledTimeoutFixer;