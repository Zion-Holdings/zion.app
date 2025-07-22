const AutomationTask = require('../continuous-improvement/AutomationTask');
const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class StaleCleaner extends AutomationTask {
  constructor(config = {}) {
    super({
      name: 'StaleCleaner',
      schedule: '0 3 * * 0', // Weekly on Sunday at 3 AM
      enabled: true,
      autoClean: false, // Don't auto-delete by default
      notifyBeforeClean: true,
      staleThreshold: 30, // Days
      protectedBranches: ['main', 'master', 'develop', 'staging'],
      ...config
    });
    
    this.cleanupHistory = [];
  }

  async run() {
    console.log('🧹 Starting stale cleanup process...');
    
    try {
      // Check if we're in a git repository
      if (!this.isGitRepository()) {
        throw new Error('Not in a git repository');
      }
      
      // Fetch latest changes
      await this.fetchLatestChanges();
      
      // Find stale branches
      const staleBranches = await this.findStaleBranches();
      
      // Find stale PRs
      const stalePRs = await this.findStalePRs();
      
      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        staleBranches: staleBranches,
        stalePRs: stalePRs,
        summary: {
          totalStaleBranches: staleBranches.length,
          totalStalePRs: stalePRs.length,
          branchesToClean: staleBranches.filter(b => !b.protected).length,
          prsToClean: stalePRs.filter(pr => !pr.protected).length
        }
      };
      
      // Store cleanup history
      this.cleanupHistory.push(report);
      
      // Notify if there are items to clean
      if (report.summary.branchesToClean > 0 || report.summary.prsToClean > 0) {
        await this.handleStaleItems(report);
      } else {
        console.log('✅ No stale items found');
      }
      
      this.lastStatus = 'success';
      this.lastRun = new Date();
      
      return report;
      
    } catch (error) {
      console.error('❌ Stale cleanup failed:', error);
      this.lastStatus = 'failed';
      this.lastError = error.message;
      this.lastRun = new Date();
      
      throw error;
    }
  }

  isGitRepository() {
    try {
      execSync('git rev-parse --git-dir', { stdio: 'pipe' });
      return true;
    } catch {
      return false;
    }
  }

  async fetchLatestChanges() {
    console.log('📥 Fetching latest changes...');
    
    try {
      execSync('git fetch --all --prune', { stdio: 'pipe' });
      console.log('✅ Latest changes fetched');
    } catch (error) {
      console.warn('⚠️ Failed to fetch changes:', error.message);
    }
  }

  async findStaleBranches() {
    console.log('🔍 Finding stale branches...');
    
    try {
      // Get all branches
      const output = execSync('git branch -r --format="%(refname:short) %(committerdate:iso8601)"', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const branches = [];
      const lines = output.trim().split('\n');
      
      for (const line of lines) {
        if (line.trim()) {
          const [branch, date] = line.split(' ');
          const lastCommit = new Date(date);
          const daysSinceLastCommit = (Date.now() - lastCommit.getTime()) / (1000 * 60 * 60 * 24);
          
          if (daysSinceLastCommit > this.config.staleThreshold) {
            const isProtected = this.config.protectedBranches.some(protected => 
              branch.includes(protected) || branch === protected
            );
            
            branches.push({
              name: branch,
              lastCommit: lastCommit.toISOString(),
              daysSinceLastCommit: Math.floor(daysSinceLastCommit),
              isProtected: isProtected,
              canDelete: !isProtected
            });
          }
        }
      }
      
      console.log(`✅ Found ${branches.length} stale branches`);
      return branches;
      
    } catch (error) {
      console.error('❌ Failed to find stale branches:', error);
      return [];
    }
  }

  async findStalePRs() {
    console.log('🔍 Finding stale pull requests...');
    
    try {
      // Use GitHub CLI to get PRs
      const output = execSync('gh pr list --state open --json number,title,createdAt,updatedAt,author,url', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const prs = JSON.parse(output);
      const stalePRs = [];
      
      for (const pr of prs) {
        const lastUpdate = new Date(pr.updatedAt);
        const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysSinceUpdate > this.config.staleThreshold) {
          stalePRs.push({
            number: pr.number,
            title: pr.title,
            author: pr.author.login,
            url: pr.url,
            createdAt: pr.createdAt,
            updatedAt: pr.updatedAt,
            daysSinceUpdate: Math.floor(daysSinceUpdate),
            isProtected: false, // Could be enhanced with branch protection rules
            canDelete: true
          });
        }
      }
      
      console.log(`✅ Found ${stalePRs.length} stale pull requests`);
      return stalePRs;
      
    } catch (error) {
      console.warn('⚠️ Failed to find stale PRs (GitHub CLI not available):', error.message);
      return [];
    }
  }

  async handleStaleItems(report) {
    console.log(`📋 Found ${report.summary.branchesToClean} stale branches and ${report.summary.prsToClean} stale PRs`);
    
    if (this.config.notifyBeforeClean) {
      await this.sendStaleNotification(report);
    }
    
    if (this.config.autoClean) {
      await this.performCleanup(report);
    } else {
      console.log('ℹ️ Auto-clean is disabled. Items will be reported but not deleted.');
    }
  }

  async sendStaleNotification(report) {
    const message = this.generateStaleNotification(report);
    
    // This would integrate with the notification system
    console.log('📢 Stale items notification:');
    console.log(message);
    
    // Emit event for external notification handlers
    this.emit('staleItemsFound', report);
  }

  generateStaleNotification(report) {
    let message = `🧹 **Stale Items Found**\n\n`;
    
    if (report.staleBranches.length > 0) {
      message += `**Stale Branches (${report.staleBranches.length}):**\n`;
      report.staleBranches.forEach(branch => {
        const status = branch.isProtected ? '🛡️ Protected' : '🗑️ Can Delete';
        message += `• ${branch.name} (${branch.daysSinceLastCommit} days old) - ${status}\n`;
      });
      message += '\n';
    }
    
    if (report.stalePRs.length > 0) {
      message += `**Stale Pull Requests (${report.stalePRs.length}):**\n`;
      report.stalePRs.forEach(pr => {
        message += `• #${pr.number} - ${pr.title} by @${pr.author} (${pr.daysSinceUpdate} days old)\n`;
      });
      message += '\n';
    }
    
    message += `**Summary:**\n`;
    message += `• Total stale branches: ${report.summary.totalStaleBranches}\n`;
    message += `• Total stale PRs: ${report.summary.totalStalePRs}\n`;
    message += `• Branches that can be cleaned: ${report.summary.branchesToClean}\n`;
    message += `• PRs that can be cleaned: ${report.summary.prsToClean}\n\n`;
    
    if (!this.config.autoClean) {
      message += `⚠️ **Auto-clean is disabled.** Items will be reported but not automatically deleted.\n`;
    }
    
    return message;
  }

  async performCleanup(report) {
    console.log('🧹 Performing cleanup...');
    
    const cleanupResults = {
      branches: { deleted: [], failed: [] },
      prs: { closed: [], failed: [] }
    };
    
    // Clean stale branches
    for (const branch of report.staleBranches) {
      if (branch.canDelete) {
        try {
          await this.deleteBranch(branch);
          cleanupResults.branches.deleted.push(branch.name);
        } catch (error) {
          cleanupResults.branches.failed.push({ name: branch.name, error: error.message });
        }
      }
    }
    
    // Clean stale PRs
    for (const pr of report.stalePRs) {
      if (pr.canDelete) {
        try {
          await this.closePR(pr);
          cleanupResults.prs.closed.push(pr.number);
        } catch (error) {
          cleanupResults.prs.failed.push({ number: pr.number, error: error.message });
        }
      }
    }
    
    // Send cleanup report
    await this.sendCleanupReport(cleanupResults);
    
    console.log(`✅ Cleanup completed: ${cleanupResults.branches.deleted.length} branches deleted, ${cleanupResults.prs.closed.length} PRs closed`);
    
    return cleanupResults;
  }

  async deleteBranch(branch) {
    console.log(`🗑️ Deleting branch: ${branch.name}`);
    
    try {
      // Delete remote branch
      execSync(`git push origin --delete ${branch.name}`, { stdio: 'pipe' });
      console.log(`✅ Deleted branch: ${branch.name}`);
    } catch (error) {
      console.error(`❌ Failed to delete branch ${branch.name}:`, error.message);
      throw error;
    }
  }

  async closePR(pr) {
    console.log(`🔒 Closing PR: #${pr.number} - ${pr.title}`);
    
    try {
      // Close PR with comment
      const comment = `This PR has been automatically closed by the stale cleaner after ${pr.daysSinceUpdate} days of inactivity.`;
      execSync(`gh pr close ${pr.number} --delete-branch --comment "${comment}"`, { stdio: 'pipe' });
      console.log(`✅ Closed PR: #${pr.number}`);
    } catch (error) {
      console.error(`❌ Failed to close PR #${pr.number}:`, error.message);
      throw error;
    }
  }

  async sendCleanupReport(results) {
    const message = this.generateCleanupReport(results);
    
    console.log('📊 Cleanup Report:');
    console.log(message);
    
    // Emit event for external notification handlers
    this.emit('cleanupCompleted', results);
  }

  generateCleanupReport(results) {
    let message = `🧹 **Cleanup Report**\n\n`;
    
    message += `**Branches Deleted (${results.branches.deleted.length}):**\n`;
    if (results.branches.deleted.length > 0) {
      results.branches.deleted.forEach(branch => {
        message += `• ✅ ${branch}\n`;
      });
    } else {
      message += `• No branches deleted\n`;
    }
    
    if (results.branches.failed.length > 0) {
      message += `\n**Branches Failed (${results.branches.failed.length}):**\n`;
      results.branches.failed.forEach(branch => {
        message += `• ❌ ${branch.name}: ${branch.error}\n`;
      });
    }
    
    message += `\n**PRs Closed (${results.prs.closed.length}):**\n`;
    if (results.prs.closed.length > 0) {
      results.prs.closed.forEach(prNumber => {
        message += `• ✅ #${prNumber}\n`;
      });
    } else {
      message += `• No PRs closed\n`;
    }
    
    if (results.prs.failed.length > 0) {
      message += `\n**PRs Failed (${results.prs.failed.length}):**\n`;
      results.prs.failed.forEach(pr => {
        message += `• ❌ #${pr.number}: ${pr.error}\n`;
      });
    }
    
    return message;
  }

  async selfHeal(error) {
    console.log('🔧 Attempting self-healing for StaleCleaner...');
    
    if (error.message.includes('not a git repository')) {
      console.log('⚠️ Not in a git repository, skipping stale cleanup');
      return;
    }
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      console.log('🔐 Permission issue detected, checking git configuration...');
      await this.checkGitConfiguration();
      return;
    }
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      console.log('⏳ Network issue detected, will retry later...');
      return;
    }
  }

  async checkGitConfiguration() {
    try {
      // Check git user configuration
      execSync('git config user.name', { stdio: 'pipe' });
      execSync('git config user.email', { stdio: 'pipe' });
    } catch (error) {
      console.log('⚠️ Git configuration missing, setting up...');
      execSync('git config user.name "Stale Cleaner Bot"', { stdio: 'pipe' });
      execSync('git config user.email "bot@zion.app"', { stdio: 'pipe' });
    }
  }

  getStatus() {
    return {
      ...super.getStatus(),
      cleanupHistory: this.cleanupHistory.slice(-5), // Last 5 cleanups
      totalCleanups: this.cleanupHistory.length,
      lastCleanup: this.cleanupHistory.length > 0 ? this.cleanupHistory[this.cleanupHistory.length - 1] : null
    };
  }
}

module.exports = StaleCleaner; 