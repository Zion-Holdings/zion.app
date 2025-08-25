#!/usr/bin/env node
"use strict";

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnhancedGitSync {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/enhanced-git-sync.log');
    this.ensureLogDir();
    this.config = {
      maxRetries: 3,
      retryDelay: 5000,
      conflictResolution: 'auto',
      backupBeforeSync: true,
      autoStash: true
    };
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
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
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout?.toString() || '',
        stderr: error.stderr?.toString() || ''
      };
    }
  }

  async createBackup() {
    if (!this.config.backupBeforeSync) return true;
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.projectRoot, 'automation/backups/git-sync', timestamp);
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Backup current git state
      const gitStatus = await this.runGitCommand('git status --porcelain');
      if (gitStatus.success && gitStatus.output) {
        fs.writeFileSync(path.join(backupDir, 'git-status.txt'), gitStatus.output);
      }
      
      // Backup current branch info
      const currentBranch = await this.runGitCommand('git branch --show-current');
      if (currentBranch.success) {
        fs.writeFileSync(path.join(backupDir, 'current-branch.txt'), currentBranch.output);
      }
      
      this.log(`Backup created at: ${backupDir}`);
      return true;
    } catch (error) {
      this.log(`Backup creation failed: ${error.message}`, 'WARN');
      return false;
    }
  }

  async checkGitStatus() {
    this.log('Checking git status...');
    
    const status = await this.runGitCommand('git status --porcelain');
    if (!status.success) {
      this.log(`Error checking git status: ${status.error}`, 'ERROR');
      return { hasChanges: false, error: status.error };
    }

    const hasChanges = status.output && status.output.trim() !== '';
    if (hasChanges) {
      const changeCount = status.output.split('\n').filter(line => line.trim()).length;
      this.log(`Changes detected: ${changeCount} files modified`);
    } else {
      this.log('No changes detected');
    }

    return { hasChanges, changes: status.output };
  }

  async checkBranchStatus() {
    this.log('Checking branch status...');
    
    // Check if we're on the main branch
    const currentBranch = await this.runGitCommand('git branch --show-current');
    if (!currentBranch.success) {
      this.log(`Error checking current branch: ${currentBranch.error}`, 'ERROR');
      return { isMain: false, error: currentBranch.error };
    }

    const isMain = currentBranch.output === 'main';
    this.log(`Current branch: ${currentBranch.output}`);

    // Check relationship with remote
    const remoteStatus = await this.runGitCommand('git status --porcelain=2 --branch');
    if (!remoteStatus.success) {
      this.log(`Error checking remote status: ${remoteStatus.error}`, 'ERROR');
      return { isMain, error: remoteStatus.error };
    }

    // Parse branch status
    const branchInfo = remoteStatus.output.split('\n').find(line => line.startsWith('# branch.'));
    if (branchInfo) {
      if (branchInfo.includes('ahead') && branchInfo.includes('behind')) {
        this.log('Branch has diverged from remote', 'WARN');
        return { isMain, diverged: true };
      } else if (branchInfo.includes('ahead')) {
        this.log('Branch is ahead of remote');
        return { isMain, ahead: true };
      } else if (branchInfo.includes('behind')) {
        this.log('Branch is behind remote');
        return { isMain, behind: true };
      }
    }

    this.log('Branch is up to date with remote');
    return { isMain, upToDate: true };
  }

  async stashChanges() {
    if (!this.config.autoStash) return true;
    
    this.log('Stashing current changes...');
    const stash = await this.runGitCommand('git stash push -m "Auto-stash before sync"');
    
    if (stash.success) {
      this.log('Changes stashed successfully');
      return true;
    } else {
      this.log(`Stash failed: ${stash.error}`, 'WARN');
      return false;
    }
  }

  async fetchLatest() {
    this.log('Fetching latest changes from remote...');
    
    const fetch = await this.runGitCommand('git fetch origin --prune');
    if (!fetch.success) {
      this.log(`Error fetching from remote: ${fetch.error}`, 'ERROR');
      return false;
    }

    this.log('Fetch completed successfully');
    return true;
  }

  async resolveDivergedBranch() {
    this.log('Resolving diverged branch...');
    
    // Get commit counts
    const ahead = await this.runGitCommand('git rev-list --count HEAD..origin/main');
    const behind = await this.runGitCommand('git rev-list --count origin/main..HEAD');
    
    if (!ahead.success || !behind.success) {
      this.log('Error getting commit counts', 'ERROR');
      return false;
    }

    const aheadCount = parseInt(ahead.output) || 0;
    const behindCount = parseInt(behind.output) || 0;
    
    this.log(`Local commits: ${behindCount}, Remote commits: ${aheadCount}`);

    if (aheadCount === 0 && behindCount > 0) {
      // Only local commits, safe to push
      this.log('Only local commits, pushing to remote...');
      return await this.pushChanges();
    } else if (behindCount === 0 && aheadCount > 0) {
      // Only remote commits, safe to pull
      this.log('Only remote commits, pulling from remote...');
      return await this.pullChanges();
    } else {
      // Both have commits, need to merge
      this.log('Both branches have commits, attempting merge...');
      return await this.mergeChanges();
    }
  }

  async mergeChanges() {
    this.log('Attempting to merge remote changes...');
    
    // Try merge with strategy
    const merge = await this.runGitCommand('git merge origin/main --strategy=recursive --strategy-option=theirs');
    
    if (merge.success) {
      this.log('Merge completed successfully');
      return true;
    }

    // Check for conflicts
    const conflicts = await this.runGitCommand('git diff --name-only --diff-filter=U');
    if (conflicts.success && conflicts.output) {
      this.log(`Merge conflicts detected in: ${conflicts.output}`, 'WARN');
      
      // Abort merge and try rebase
      this.log('Aborting merge, attempting rebase...');
      await this.runGitCommand('git merge --abort');
      
      return await this.rebaseChanges();
    }

    this.log('Merge failed for unknown reason', 'ERROR');
    return false;
  }

  async rebaseChanges() {
    this.log('Attempting rebase...');
    
    const rebase = await this.runGitCommand('git rebase origin/main');
    
    if (rebase.success) {
      this.log('Rebase completed successfully');
      return true;
    }

    // Check for conflicts during rebase
    const conflicts = await this.runGitCommand('git diff --name-only --diff-filter=U');
    if (conflicts.success && conflicts.output) {
      this.log(`Rebase conflicts detected in: ${conflicts.output}`, 'WARN');
      
      // Abort rebase
      await this.runGitCommand('git rebase --abort');
      
      // Try to reset to clean state
      await this.runGitCommand('git reset --hard HEAD');
      this.log('Reset to clean state after failed rebase');
      
      return false;
    }

    this.log('Rebase failed for unknown reason', 'ERROR');
    return false;
  }

  async pullChanges() {
    this.log('Pulling changes from remote...');
    
    const pull = await this.runGitCommand('git pull origin main');
    if (pull.success) {
      this.log('Pull completed successfully');
      return true;
    } else {
      this.log(`Pull failed: ${pull.error}`, 'ERROR');
      return false;
    }
  }

  async pushChanges() {
    this.log('Pushing changes to remote...');
    
    const push = await this.runGitCommand('git push origin main');
    if (push.success) {
      this.log('Push completed successfully');
      return true;
    } else {
      this.log(`Push failed: ${push.error}`, 'ERROR');
      return false;
    }
  }

  async restoreStashedChanges() {
    if (!this.config.autoStash) return true;
    
    this.log('Restoring stashed changes...');
    const stashList = await this.runGitCommand('git stash list');
    
    if (stashList.success && stashList.output.includes('Auto-stash before sync')) {
      const pop = await this.runGitCommand('git stash pop');
      if (pop.success) {
        this.log('Stashed changes restored successfully');
        return true;
      } else {
        this.log(`Failed to restore stashed changes: ${pop.error}`, 'WARN');
        return false;
      }
    }
    
    return true;
  }

  async run() {
    this.log('Starting enhanced git sync process...');
    
    try {
      // Create backup
      await this.createBackup();
      
      // Check current status
      const { hasChanges, error: statusError } = await this.checkGitStatus();
      if (statusError) {
        this.log('Cannot proceed due to git status error', 'ERROR');
        return false;
      }

      // Check branch status
      const { isMain, diverged, error: branchError } = await this.checkBranchStatus();
      if (branchError) {
        this.log('Cannot proceed due to branch status error', 'ERROR');
        return false;
      }

      if (!isMain) {
        this.log('Not on main branch, switching to main...');
        const checkout = await this.runGitCommand('git checkout main');
        if (!checkout.success) {
          this.log(`Failed to checkout main: ${checkout.error}`, 'ERROR');
          return false;
        }
      }

      // Stash changes if any
      if (hasChanges) {
        await this.stashChanges();
      }

      // Fetch latest
      const fetchSuccess = await this.fetchLatest();
      if (!fetchSuccess) {
        this.log('Failed to fetch latest changes', 'ERROR');
        return false;
      }

      // Handle branch divergence
      if (diverged) {
        const resolveSuccess = await this.resolveDivergedBranch();
        if (!resolveSuccess) {
          this.log('Failed to resolve branch divergence', 'ERROR');
          return false;
        }
      } else {
        // Normal sync
        const pullSuccess = await this.pullChanges();
        if (!pullSuccess) {
          this.log('Failed to pull changes', 'ERROR');
          return false;
        }
      }

      // Restore stashed changes
      if (hasChanges) {
        await this.restoreStashedChanges();
      }

      this.log('Enhanced git sync process completed successfully');
      return true;
      
    } catch (error) {
      this.log(`Error in enhanced git sync process: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const gitSync = new EnhancedGitSync();
  gitSync.run().then((success) => {
    process.exit(success ? 0 : 1);
  }).catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = EnhancedGitSync;
