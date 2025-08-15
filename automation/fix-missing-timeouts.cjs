#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class TimeoutFixer {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.fixedWorkflows = [];
    this.failedWorkflows = [];
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async fixMissingTimeouts() {
    console.log("🔧 Fixing missing timeouts in workflows...");
    
    const workflows = this.getWorkflows();
    console.log(`📋 Found ${workflows.length} workflows to check`);
    
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

  getWorkflows() {
    if (!fs.existsSync(this.workflowsDir)) return [];
    
    return fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.workflowsDir, f)
      }));
  }

  async fixWorkflowTimeout(workflow) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    
    // Check if workflow already has timeout
    if (content.includes('timeout-minutes:')) {
      console.log(`⏭️  ${workflow.name} already has timeout, skipping`);
      return false; // Already has timeout
    }
    
    console.log(`🔧 Processing ${workflow.name} (no timeout found)`);
    
    // Determine appropriate timeout based on workflow type
    const timeout = this.determineTimeout(workflow.name, content);
    console.log(`   📊 Determined timeout: ${timeout} minutes`);
    
    // Add timeout to each job
    const updatedContent = this.addTimeoutToJobs(content, timeout);
    
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

  addTimeoutToJobs(content, timeout) {
    const lines = content.split('\n');
    const updatedLines = [];
    let inJobsSection = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      updatedLines.push(line);
      
      // Check if we're entering the jobs section
      if (line.trim() === 'jobs:') {
        inJobsSection = true;
        continue;
      }
      
      // Only process job definitions within the jobs section
      if (inJobsSection && line.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:$/)) {
        console.log(`   🔍 Found job: ${line.trim()}`);
        
        // Look for the next non-empty line to see if it's 'runs-on:'
        let j = i + 1;
        while (j < lines.length && lines[j].trim() === '') j++;
        
        if (j < lines.length && lines[j].includes('runs-on:')) {
          console.log(`   📍 Found runs-on at line ${j + 1}`);
          // Insert timeout after runs-on
          updatedLines.splice(j + 1, 0, `    timeout-minutes: ${timeout}`);
          console.log(`   ✅ Added timeout after runs-on`);
        }
      }
    }
    
    return updatedLines.join('\n');
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
    
    const reportPath = path.join(this.reportsDir, 'timeout-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📊 Timeout fix report saved to: ${reportPath}`);
    console.log(`\n✅ Fixed ${this.fixedWorkflows.length} workflows`);
    if (this.failedWorkflows.length > 0) {
      console.log(`❌ Failed to fix ${this.failedWorkflows.length} workflows`);
    }
  }
}

// Run the fixer
async function main() {
  try {
    const fixer = new TimeoutFixer();
    const results = await fixer.fixMissingTimeouts();
    
    console.log("\n🎉 Timeout fixing completed!");
    console.log(`Fixed: ${results.fixed.length}`);
    console.log(`Failed: ${results.failed.length}`);
    
  } catch (error) {
    console.error("❌ Error running timeout fixer:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = TimeoutFixer;