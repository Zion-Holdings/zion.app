#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class WorkflowFixer {
  constructor() {
    this.workflowsDir = path.join(__dirname, '.github', 'workflows');
    this.backupDir = path.join(__dirname, '.github', 'workflows', 'backup-' + Date.now());
    this.fixedCount = 0;
    this.errors = [];
  }

  createBackup() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
      console.log(`📁 Created backup directory: ${this.backupDir}`);
    }
  }

  backupWorkflow(originalPath, filename) {
    const backupPath = path.join(this.backupDir, filename);
    fs.copyFileSync(originalPath, backupPath);
  }

  fixWorkflowRunsOn(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const workflow = yaml.load(content);
      
      if (!workflow || !workflow.jobs) {
        return { fixed: false, error: 'No jobs found' };
      }

      let hasChanges = false;
      
      // Fix each job that's missing runs_on
      Object.keys(workflow.jobs).forEach(jobName => {
        const job = workflow.jobs[jobName];
        
        if (!job.runs_on) {
          // Determine appropriate runner based on job content
          let runner = 'ubuntu-latest';
          
          // Check if it's a Node.js job
          if (job.steps) {
            const hasNodeStep = job.steps.some(step => 
              step.uses && step.uses.includes('actions/setup-node')
            );
            if (hasNodeStep) {
              runner = 'ubuntu-latest';
            }
          }
          
          // Check if it's a Docker job
          if (job.container) {
            runner = 'ubuntu-latest';
          }
          
          // Check if it's a self-hosted runner job
          if (jobName.toLowerCase().includes('self-hosted') || 
              jobName.toLowerCase().includes('local')) {
            runner = 'self-hosted';
          }
          
          workflow.jobs[jobName].runs_on = runner;
          hasChanges = true;
          console.log(`    Fixed job '${jobName}': added runs_on: ${runner}`);
        }
      });

      if (hasChanges) {
        // Convert back to YAML
        const newContent = yaml.dump(workflow, {
          lineWidth: 120,
          noRefs: true,
          sortKeys: false
        });
        
        // Write the fixed content
        fs.writeFileSync(filePath, newContent, 'utf8');
        return { fixed: true, changes: hasChanges };
      }

      return { fixed: false, changes: false };
    } catch (error) {
      return { fixed: false, error: error.message };
    }
  }

  fixAllWorkflows() {
    console.log('🔧 Fixing Missing runs_on in GitHub Actions Workflows\n');
    
    // Create backup
    this.createBackup();
    
    const workflowFiles = fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .filter(f => !f.startsWith('backup-'))
      .sort();

    console.log(`Found ${workflowFiles.length} workflow files to check...\n`);

    workflowFiles.forEach(filename => {
      const filePath = path.join(this.workflowsDir, filename);
      console.log(`📝 Processing: ${filename}`);
      
      // Backup original
      this.backupWorkflow(filePath, filename);
      
      // Fix the workflow
      const result = this.fixWorkflowRunsOn(filePath);
      
      if (result.fixed) {
        this.fixedCount++;
        console.log(`  ✅ Fixed successfully`);
      } else if (result.error) {
        this.errors.push({ filename, error: result.error });
        console.log(`  ❌ Error: ${result.error}`);
      } else {
        console.log(`  ℹ️  No changes needed`);
      }
    });

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('🔧 FIXING SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total workflows processed: ${workflowFiles.length}`);
    console.log(`Workflows fixed: ${this.fixedCount}`);
    console.log(`Errors: ${this.errors.length}`);
    console.log(`Backup location: ${this.backupDir}`);

    if (this.errors.length > 0) {
      console.log('\n❌ ERRORS ENCOUNTERED:');
      this.errors.forEach(error => {
        console.log(`  ${error.filename}: ${error.error}`);
      });
    }

    if (this.fixedCount > 0) {
      console.log('\n💡 NEXT STEPS:');
      console.log('  • Review the fixed workflows');
      console.log('  • Test workflows locally if possible');
      console.log('  • Commit the changes');
      console.log('  • Push to trigger GitHub Actions');
    }

    return {
      total: workflowFiles.length,
      fixed: this.fixedCount,
      errors: this.errors.length,
      backupDir: this.backupDir
    };
  }

  restoreFromBackup() {
    if (!fs.existsSync(this.backupDir)) {
      console.log('❌ No backup directory found');
      return;
    }

    console.log(`🔄 Restoring workflows from backup: ${this.backupDir}`);
    
    const backupFiles = fs.readdirSync(this.backupDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));

    backupFiles.forEach(filename => {
      const backupPath = path.join(this.backupDir, filename);
      const originalPath = path.join(this.workflowsDir, filename);
      
      fs.copyFileSync(backupPath, originalPath);
      console.log(`  ✅ Restored: ${filename}`);
    });

    console.log(`\n🔄 Restored ${backupFiles.length} workflows from backup`);
  }
}

// Command line interface
if (require.main === module) {
  const fixer = new WorkflowFixer();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--restore')) {
    fixer.restoreFromBackup();
  } else {
    fixer.fixAllWorkflows();
  }
}

module.exports = WorkflowFixer;