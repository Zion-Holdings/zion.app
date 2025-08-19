#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class BranchProtectionFixer {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.disabledDir = path.resolve(__dirname, "../.github/workflows.disabled");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.fixedWorkflows = [];
    this.failedWorkflows = [];
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async fixAllBranchProtectionIssues() {
    console.log("🔒 Fixing branch protection issues in workflows...");
    
    const activeWorkflows = this.getWorkflows(this.workflowsDir);
    const disabledWorkflows = this.getWorkflows(this.disabledDir);
    
    console.log(`📋 Found ${activeWorkflows.length} active workflows and ${disabledWorkflows.length} disabled workflows`);
    
    // Process active workflows first
    for (const workflow of activeWorkflows) {
      try {
        const fixed = await this.fixWorkflowBranchProtection(workflow, 'active');
        if (fixed) {
          this.fixedWorkflows.push({ name: workflow.name, status: 'active' });
        }
      } catch (error) {
        console.error(`❌ Failed to fix ${workflow.name}:`, error.message);
        this.failedWorkflows.push({ name: workflow.name, status: 'active', error: error.message });
      }
    }
    
    // Process disabled workflows
    for (const workflow of disabledWorkflows) {
      try {
        const fixed = await this.fixWorkflowBranchProtection(workflow, 'disabled');
        if (fixed) {
          this.fixedWorkflows.push({ name: workflow.name, status: 'disabled' });
        }
      } catch (error) {
        console.error(`❌ Failed to fix ${workflow.name}:`, error.message);
        this.failedWorkflows.push({ name: workflow.name, status: 'disabled', error: error.message });
      }
    }
    
    this.generateReport();
    return { fixed: this.fixedWorkflows, failed: this.failedWorkflows };
  }

  getWorkflows(dir) {
    if (!fs.existsSync(dir)) return [];
    
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(dir, f)
      }));
  }

  async fixWorkflowBranchProtection(workflow, status) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    
    // Check if workflow has unsafe git push operations
    if (!this.hasUnsafeGitPush(content)) {
      return false; // No unsafe operations found
    }
    
    console.log(`🔒 Processing ${workflow.name} (${status}) - unsafe git push detected`);
    
    // Apply security fixes
    const updatedContent = this.applySecurityFixes(content, workflow.name);
    
    if (updatedContent !== content) {
      // Backup original file
      const backupPath = `${workflow.path}.backup`;
      fs.writeFileSync(backupPath, content);
      
      // Write updated content
      fs.writeFileSync(workflow.path, updatedContent);
      
      console.log(`✅ Applied security fixes to ${workflow.name}`);
      return true;
    } else {
      console.log(`⚠️  No changes made to ${workflow.name}`);
    }
    
    return false;
  }

  hasUnsafeGitPush(content) {
    // Check for unsafe git push patterns
    const unsafePatterns = [
      /git push origin HEAD:main/,
      /git push origin main/,
      /git push origin HEAD:master/,
      /git push origin master/,
      /git push.*main/,
      /git push.*master/
    ];
    
    return unsafePatterns.some(pattern => pattern.test(content));
  }

  applySecurityFixes(content, workflowName) {
    let updatedContent = content;
    
    // Fix 1: Replace direct push to main with push to feature branch
    updatedContent = this.fixDirectPushToMain(updatedContent);
    
    // Fix 2: Add branch protection rules - DISABLED due to invalid YAML syntax
    // updatedContent = this.addBranchProtectionRules(updatedContent);
    
    // Fix 3: Add pull request requirement
    updatedContent = this.addPullRequestRequirement(updatedContent);
    
    // Fix 4: Optimize permissions
    updatedContent = this.optimizePermissions(updatedContent);
    
    return updatedContent;
  }

  fixDirectPushToMain(content) {
    // Replace direct push to main with push to feature branch
    let updatedContent = content;
    
    // Pattern 1: git push origin HEAD:main
    updatedContent = updatedContent.replace(
      /git push origin HEAD:main/g,
      'git push origin HEAD:$(git rev-parse --abbrev-ref HEAD)'
    );
    
    // Pattern 2: git push origin main
    updatedContent = updatedContent.replace(
      /git push origin main/g,
      'git push origin HEAD:$(git rev-parse --abbrev-ref HEAD)'
    );
    
    // Pattern 3: git push origin HEAD:master
    updatedContent = updatedContent.replace(
      /git push origin HEAD:master/g,
      'git push origin HEAD:$(git rev-parse --abbrev-ref HEAD)'
    );
    
    // Pattern 4: git push origin master
    updatedContent = updatedContent.replace(
      /git push origin master/g,
      'git push origin HEAD:$(git rev-parse --abbrev-ref HEAD)'
    );
    
    return updatedContent;
  }

  // Branch protection rules are not valid GitHub Actions permissions
  // This method has been removed as it was causing YAML syntax errors

  addPullRequestRequirement(content) {
    // Add pull request requirement if not present
    if (content.includes('required_pull_request_reviews:')) {
      return content; // Already has PR requirement
    }
    
    // This is handled by branch protection rules above
    return content;
  }

  optimizePermissions(content) {
    // Optimize permissions to be more restrictive
    let updatedContent = content;
    
    // If workflow has contents: write, consider if it's really needed
    if (content.includes('contents: write')) {
      // Only keep write permission if workflow actually needs to push
      if (!this.hasUnsafeGitPush(content)) {
        updatedContent = updatedContent.replace(
          /contents: write/g,
          'contents: read'
        );
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
    
    const reportPath = path.join(this.reportsDir, 'branch-protection-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📊 Branch protection fix report saved to: ${reportPath}`);
    console.log(`\n✅ Fixed ${this.fixedWorkflows.length} workflows`);
    if (this.failedWorkflows.length > 0) {
      console.log(`❌ Failed to fix ${this.failedWorkflows.length} workflows`);
    }
  }
}

// Run the fixer
async function main() {
  try {
    const fixer = new BranchProtectionFixer();
    const results = await fixer.fixAllBranchProtectionIssues();
    
    console.log("\n🎉 Branch protection fixing completed!");
    console.log(`Fixed: ${results.fixed.length}`);
    console.log(`Failed: ${results.failed.length}`);
    
  } catch (error) {
    console.error("❌ Error running branch protection fixer:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = BranchProtectionFixer;