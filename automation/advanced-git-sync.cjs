#!/usr/bin/env node
"use strict";

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AdvancedGitSync {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/git-sync.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runGitCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        ...options
      });
      return { success: true, output: result.trim() };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout?.toString() || '' };
    }
  }

  async checkGitStatus() {
    this.log('Checking git status...');
    
    const status = await this.runGitCommand('git status --porcelain');
    if (!status.success) {
      this.log(`Error checking git status: ${status.error}`);
      return false;
    }

    if (status.output) {
      this.log(`Changes detected: ${status.output.split('\n').length} files modified`);
      return true;
    } else {
      this.log('No changes detected');
      return false;
    }
  }

  async checkRemoteUpdates() {
    this.log('Checking for remote updates...');
    
    // Fetch latest changes
    const fetch = await this.runGitCommand('git fetch origin');
    if (!fetch.success) {
      this.log(`Error fetching from remote: ${fetch.error}`);
      return false;
    }

    // Check if we're behind remote
    const behind = await this.runGitCommand('git rev-list --count HEAD..origin/main');
    if (!behind.success) {
      this.log(`Error checking if behind remote: ${behind.error}`);
      return false;
    }

    const behindCount = parseInt(behind.output);
    if (behindCount > 0) {
      this.log(`Behind remote by ${behindCount} commits`);
      return true;
    } else {
      this.log('Up to date with remote');
      return false;
    }
  }

  async autoCommit() {
    this.log('Attempting auto-commit...');
    
    // Check if there are staged changes
    const staged = await this.runGitCommand('git diff --cached --name-only');
    if (!staged.success) {
      this.log(`Error checking staged changes: ${staged.error}`);
      return false;
    }

    if (staged.output) {
      const commitMessage = `Auto-sync: Automated commit at ${new Date().toISOString()}`;
      const commit = await this.runGitCommand(`git commit -m "${commitMessage}"`);
      
      if (commit.success) {
        this.log('Auto-commit successful');
        return true;
      } else {
        this.log(`Auto-commit failed: ${commit.error}`);
        return false;
      }
    } else {
      this.log('No staged changes to commit');
      return false;
    }
  }

  async autoPush() {
    this.log('Attempting auto-push...');
    
    const push = await this.runGitCommand('git push origin main');
    if (push.success) {
      this.log('Auto-push successful');
      return true;
    } else {
      this.log(`Auto-push failed: ${push.error}`);
      return false;
    }
  }

  async autoPull() {
    this.log('Attempting auto-pull...');
    
    const pull = await this.runGitCommand('git pull origin main');
    if (pull.success) {
      this.log('Auto-pull successful');
      return true;
    } else {
      this.log(`Auto-pull failed: ${pull.error}`);
      return false;
    }
  }

  async resolveConflicts() {
    this.log('Checking for merge conflicts...');
    
    const conflicts = await this.runGitCommand('git diff --name-only --diff-filter=U');
    if (!conflicts.success) {
      this.log(`Error checking for conflicts: ${conflicts.error}`);
      return false;
    }

    if (conflicts.output) {
      this.log(`Merge conflicts detected in: ${conflicts.output}`);
      
      // Try to resolve conflicts automatically
      try {
        // Abort current merge
        await this.runGitCommand('git merge --abort');
        this.log('Merge aborted due to conflicts');
        
        // Try to reset to clean state
        await this.runGitCommand('git reset --hard HEAD');
        this.log('Reset to clean state');
        
        return false;
      } catch (error) {
        this.log(`Error resolving conflicts: ${error.message}`);
        return false;
      }
    }
    
    return true;
  }

  async run() {
    this.log('Starting advanced git sync process...');
    
    try {
      // Check if we have changes to commit
      const hasChanges = await this.checkGitStatus();
      
      // Check if remote has updates
      const hasRemoteUpdates = await this.checkRemoteUpdates();
      
      if (hasChanges) {
        // Stage all changes
        this.log('Staging all changes...');
        const add = await this.runGitCommand('git add .');
        if (!add.success) {
          this.log(`Error staging changes: ${add.error}`);
          return;
        }
        
        // Try to auto-commit
        await this.autoCommit();
      }
      
      if (hasRemoteUpdates) {
        // Try to pull first
        const pullSuccess = await this.autoPull();
        
        if (!pullSuccess) {
          // If pull fails, try to resolve conflicts
          await this.resolveConflicts();
        }
      }
      
      // Try to push our changes
      if (hasChanges) {
        await this.autoPush();
      }
      
      this.log('Advanced git sync process completed');
      
    } catch (error) {
      this.log(`Error in git sync process: ${error.message}`);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const gitSync = new AdvancedGitSync();
  gitSync.run().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = AdvancedGitSync;
