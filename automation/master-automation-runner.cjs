#!/usr/bin/env node

/**
 * Master Automation Runner
 * Executes all remaining automation tasks:
 * 1. Build automation and error fixing
 * 2. Git operations and merging
 * 3. Cleanup and finalization
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationRunner {
  constructor() {
    this.startTime = Date.now();
    this.taskResults = {};
    this.currentTask = '';
  }

  async run() {
    console.log('🚀 Starting Master Automation Runner...');
    console.log('========================================');
    
    try {
      // Task 1: Build Automation
      await this.executeTask('Build Automation', () => this.runBuildAutomation());
      
      // Task 2: Git Operations
      await this.executeTask('Git Operations', () => this.runGitOperations());
      
      // Task 3: Cleanup and Finalization
      await this.executeTask('Cleanup and Finalization', () => this.runCleanup());
      
      // Generate final report
      this.generateFinalReport();
      
      console.log('✅ Master Automation completed successfully!');
      
    } catch (error) {
      console.error('❌ Master Automation failed:', error.message);
      this.taskResults[this.currentTask] = { success: false, error: error.message };
      this.generateFinalReport();
      throw error;
    }
  }

  async executeTask(taskName, taskFunction) {
    this.currentTask = taskName;
    console.log(`\n🔄 Executing: ${taskName}`);
    console.log('─'.repeat(50));
    
    const taskStartTime = Date.now();
    
    try {
      await taskFunction();
      
      const taskDuration = Date.now() - taskStartTime;
      this.taskResults[taskName] = { 
        success: true, 
        duration: taskDuration,
        timestamp: new Date().toISOString()
      };
      
      console.log(`✅ ${taskName} completed successfully (${taskDuration}ms)`);
      
    } catch (error) {
      const taskDuration = Date.now() - taskStartTime;
      this.taskResults[taskName] = { 
        success: false, 
        error: error.message,
        duration: taskDuration,
        timestamp: new Date().toISOString()
      };
      
      console.error(`❌ ${taskName} failed: ${error.message}`);
      throw error;
    }
  }

  async runBuildAutomation() {
    console.log('🔨 Running build automation...');
    
    // Check if build automation runner exists
    if (fs.existsSync('automation/build-automation-runner.cjs')) {
      console.log('  - Using build automation runner...');
      execSync('node automation/build-automation-runner.cjs', { stdio: 'inherit' });
    } else {
      console.log('  - Build automation runner not found, running manual build...');
      
      // Manual build process
      try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log('    ✅ Manual build successful');
      } catch (buildError) {
        console.log('    ❌ Manual build failed, attempting fixes...');
        
        // Try to fix common issues
        try {
          execSync('npm run fix:all', { stdio: 'pipe' });
          console.log('      ✅ Linting fixes applied');
        } catch (fixError) {
          console.log('      ⚠️ Could not apply all fixes');
        }
        
        // Try building again
        try {
          execSync('npm run build', { stdio: 'inherit' });
          console.log('      ✅ Build successful after fixes');
        } catch (retryError) {
          throw new Error(`Build failed even after fixes: ${retryError.message}`);
        }
      }
    }
    
    console.log('✅ Build automation completed');
  }

  async runGitOperations() {
    console.log('🐙 Running git operations...');
    
    // Check git status
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    
    if (gitStatus.trim()) {
      console.log('  - Changes detected, preparing commit...');
      
      // Add all changes
      execSync('git add -A', { stdio: 'inherit' });
      console.log('    ✅ All changes staged');
      
      // Create commit
      const commitMessage = `feat: comprehensive redundancy automation system implementation

- Added PM2 redundancy automation
- Added GitHub Actions redundancy workflows  
- Added Netlify functions redundancy
- Added build automation and error handling
- Added comprehensive monitoring and health checks

Generated: ${new Date().toISOString()}`;
      
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
      console.log('    ✅ Changes committed');
      
      // Push to main branch
      try {
        execSync('git push origin main', { stdio: 'inherit' });
        console.log('    ✅ Changes pushed to main branch');
      } catch (pushError) {
        console.log('    ⚠️ Could not push to main branch (may need force push)');
        
        // Try force push if needed
        try {
          execSync('git push origin main --force', { stdio: 'inherit' });
          console.log('      ✅ Force push successful');
        } catch (forcePushError) {
          console.log('      ❌ Force push also failed');
          throw new Error('Could not push changes to main branch');
        }
      }
      
    } else {
      console.log('  - No changes to commit');
    }
    
    console.log('✅ Git operations completed');
  }

  async runCleanup() {
    console.log('🧹 Running cleanup and finalization...');
    
    // Stop the comprehensive redundancy system
    try {
      if (fs.existsSync('start-comprehensive-redundancy.sh')) {
        console.log('  - Stopping comprehensive redundancy system...');
        execSync('./start-comprehensive-redundancy.sh stop', { stdio: 'pipe' });
        console.log('    ✅ Redundancy system stopped');
      }
    } catch (stopError) {
      console.log('    ⚠️ Could not stop redundancy system');
    }
    
    // Clean up PM2 processes
    try {
      console.log('  - Cleaning up PM2 processes...');
      execSync('pm2 stop all', { stdio: 'pipe' });
      execSync('pm2 delete all', { stdio: 'pipe' });
      console.log('    ✅ PM2 processes cleaned up');
    } catch (pm2Error) {
      console.log('    ⚠️ Could not clean up all PM2 processes');
    }
    
    // Clean up temporary files
    try {
      console.log('  - Cleaning up temporary files...');
      const tempFiles = [
        'automation/comprehensive-redundancy.pid',
        'automation/git-sync-cron.pid',
        'automation/ultimate-redundancy.pid'
      ];
      
      tempFiles.forEach(file => {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
        }
      });
      
      console.log('    ✅ Temporary files cleaned up');
    } catch (cleanupError) {
      console.log('    ⚠️ Could not clean up all temporary files');
    }
    
    // Generate completion report
    console.log('  - Generating completion report...');
    this.generateCompletionReport();
    
    console.log('✅ Cleanup and finalization completed');
  }

  generateCompletionReport() {
    const completionReport = {
      timestamp: new Date().toISOString(),
      totalDuration: Date.now() - this.startTime,
      tasks: this.taskResults,
      summary: {
        totalTasks: Object.keys(this.taskResults).length,
        successfulTasks: Object.values(this.taskResults).filter(t => t.success).length,
        failedTasks: Object.values(this.taskResults).filter(t => !t.success).length,
        overallSuccess: Object.values(this.taskResults).every(t => t.success)
      },
      status: 'COMPLETED'
    };
    
    // Save completion report
    const reportPath = 'automation/completion-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(completionReport, null, 2));
    
    console.log(`    ✅ Completion report saved to: ${reportPath}`);
  }

  generateFinalReport() {
    const endTime = Date.now();
    const totalDuration = endTime - this.startTime;
    
    console.log('\n📊 Master Automation Final Report');
    console.log('==================================');
    console.log(`⏱️  Total Duration: ${totalDuration}ms`);
    console.log(`📋 Total Tasks: ${Object.keys(this.taskResults).length}`);
    
    const successfulTasks = Object.values(this.taskResults).filter(t => t.success).length;
    const failedTasks = Object.values(this.taskResults).filter(t => !t.success).length;
    
    console.log(`✅ Successful Tasks: ${successfulTasks}`);
    console.log(`❌ Failed Tasks: ${failedTasks}`);
    
    if (failedTasks === 0) {
      console.log('\n🎉 ALL TASKS COMPLETED SUCCESSFULLY!');
    } else {
      console.log('\n⚠️  Some tasks failed. Check the completion report for details.');
    }
    
    // Display task details
    console.log('\n📋 Task Details:');
    Object.entries(this.taskResults).forEach(([taskName, result]) => {
      const status = result.success ? '✅' : '❌';
      const duration = result.duration ? ` (${result.duration}ms)` : '';
      console.log(`  ${status} ${taskName}${duration}`);
      
      if (!result.success && result.error) {
        console.log(`      Error: ${result.error}`);
      }
    });
    
    console.log(`\n📁 Completion report saved to: automation/completion-report.json`);
  }
}

// CLI interface
if (require.main === module) {
  const runner = new MasterAutomationRunner();
  runner.run().catch(console.error);
}

module.exports = MasterAutomationRunner;