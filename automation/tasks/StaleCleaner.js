const AutomationTask = require('./AutomationTask');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class StaleCleaner extends AutomationTask {
  constructor(config = {}) {
    super({
      staleBranchDays: 30,
      stalePRDays: 14,
      protectedBranches: ['main', 'master', 'develop', 'staging'],
      dryRun: false,
      autoDelete: false,
      notifyOnCleanup: true,
      maxBranchesToClean: 10,
      maxPRsToClean: 5,
      ...config
    });
  }

  async run() {
    console.log('🧹 Starting stale branch and PR cleanup...');
    
    try {
      const startTime = Date.now();
      
      // Check if we're in a git repository
      if (!this.isGitRepository()) {
        throw new Error('Not in a git repository');
      }

      // Fetch latest from remote
      await this.fetchLatest();
      
      // Get stale branches
      const staleBranches = await this.getStaleBranches();
      console.log(`📋 Found ${staleBranches.length} stale branches`);
      
      // Get stale PRs
      const stalePRs = await this.getStalePRs();
      console.log(`📋 Found ${stalePRs.length} stale pull requests`);
      
      // Clean up branches
      const branchResults = await this.cleanupBranches(staleBranches);
      
      // Clean up PRs
      const prResults = await this.cleanupPRs(stalePRs);
      
      const duration = Date.now() - startTime;
      
      // Update status
      this.lastRun = new Date().toISOString();
      this.lastStatus = 'success';
      
      const summary = {
        branches: {
          found: staleBranches.length,
          cleaned: branchResults.cleaned,
          failed: branchResults.failed
        },
        pullRequests: {
          found: stalePRs.length,
          cleaned: prResults.cleaned,
          failed: prResults.failed
        },
        duration,
        dryRun: this.config.dryRun
      };
      
      console.log('✅ Stale cleanup completed:', summary);
      
      return {
        success: true,
        summary,
        details: {
          branches: branchResults,
          pullRequests: prResults
        }
      };
      
    } catch (error) {
      console.error('❌ Stale cleanup failed:', error.message);
      this.lastStatus = 'error';
      this.lastError = error.message;
      
      // Attempt self-healing
      await this.selfHeal(error);
      
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getStaleBranches() {
    try {
      // Get all remote branches
      const branchesOutput = execSync('git branch -r --format="%(refname:short) %(committerdate:iso8601)"', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const branches = branchesOutput
        .trim()
        .split('\n')
        .filter(line => line.trim())
        .map(line => {
          const [branch, date] = line.split(' ');
          return {
            name: branch,
            lastCommit: new Date(date),
            daysOld: Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24))
          };
        })
        .filter(branch => {
          // Filter out protected branches
          return !this.config.protectedBranches.some(protected => 
            branch.name.includes(protected)
          );
        })
        .filter(branch => branch.daysOld > this.config.staleBranchDays)
        .sort((a, b) => b.daysOld - a.daysOld)
        .slice(0, this.config.maxBranchesToClean);
      
      return branches;
      
    } catch (error) {
      console.error('Error getting stale branches:', error.message);
      return [];
    }
  }

  async getStalePRs() {
    try {
      // Use GitHub CLI to get stale PRs
      const prsOutput = execSync(`gh pr list --state open --limit 100 --json number,title,createdAt,updatedAt,author`, {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const prs = JSON.parse(prsOutput)
        .map(pr => ({
          number: pr.number,
          title: pr.title,
          createdAt: new Date(pr.createdAt),
          updatedAt: new Date(pr.updatedAt),
          author: pr.author,
          daysOld: Math.floor((Date.now() - new Date(pr.updatedAt).getTime()) / (1000 * 60 * 60 * 24))
        }))
        .filter(pr => pr.daysOld > this.config.stalePRDays)
        .sort((a, b) => b.daysOld - a.daysOld)
        .slice(0, this.config.maxPRsToClean);
      
      return prs;
      
    } catch (error) {
      console.error('Error getting stale PRs:', error.message);
      return [];
    }
  }

  async cleanupBranches(staleBranches) {
    const results = {
      cleaned: [],
      failed: [],
      skipped: []
    };
    
    for (const branch of staleBranches) {
      try {
        if (this.config.dryRun) {
          console.log(`🔍 [DRY RUN] Would delete branch: ${branch.name} (${branch.daysOld} days old)`);
          results.skipped.push(branch);
          continue;
        }
        
        // Check if branch has unmerged commits
        const hasUnmergedCommits = await this.hasUnmergedCommits(branch.name);
        
        if (hasUnmergedCommits && !this.config.autoDelete) {
          console.log(`⚠️ Skipping ${branch.name} - has unmerged commits`);
          results.skipped.push({ ...branch, reason: 'unmerged_commits' });
          continue;
        }
        
        // Delete the branch
        if (branch.name.startsWith('origin/')) {
          const branchName = branch.name.replace('origin/', '');
          execSync(`git push origin --delete ${branchName}`, {
            cwd: process.cwd(),
            stdio: 'pipe'
          });
        }
        
        console.log(`🗑️ Deleted stale branch: ${branch.name} (${branch.daysOld} days old)`);
        results.cleaned.push(branch);
        
      } catch (error) {
        console.error(`❌ Failed to delete branch ${branch.name}:`, error.message);
        results.failed.push({ ...branch, error: error.message });
      }
    }
    
    return results;
  }

  async cleanupPRs(stalePRs) {
    const results = {
      cleaned: [],
      failed: [],
      skipped: []
    };
    
    for (const pr of stalePRs) {
      try {
        if (this.config.dryRun) {
          console.log(`🔍 [DRY RUN] Would close PR: #${pr.number} - ${pr.title} (${pr.daysOld} days old)`);
          results.skipped.push(pr);
          continue;
        }
        
        // Close the PR
        execSync(`gh pr close ${pr.number} --delete-branch`, {
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        console.log(`🗑️ Closed stale PR: #${pr.number} - ${pr.title} (${pr.daysOld} days old)`);
        results.cleaned.push(pr);
        
      } catch (error) {
        console.error(`❌ Failed to close PR #${pr.number}:`, error.message);
        results.failed.push({ ...pr, error: error.message });
      }
    }
    
    return results;
  }

  async hasUnmergedCommits(branchName) {
    try {
      const branchNameClean = branchName.replace('origin/', '');
      const output = execSync(`git log --oneline origin/main..origin/${branchNameClean}`, {
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      return output.trim().split('\n').filter(line => line.trim()).length > 0;
      
    } catch (error) {
      // If command fails, assume there are unmerged commits
      return true;
    }
  }

  async fetchLatest() {
    try {
      execSync('git fetch --prune', {
        cwd: process.cwd(),
        stdio: 'pipe'
      });
    } catch (error) {
      console.warn('⚠️ Failed to fetch latest from remote:', error.message);
    }
  }

  isGitRepository() {
    try {
      execSync('git rev-parse --git-dir', {
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async selfHeal(error) {
    console.log('🔧 Attempting self-healing for StaleCleaner...');
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      console.log('🔐 Permission issue detected, checking git configuration...');
      await this.checkGitConfiguration();
      return;
    }
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      console.log('⏳ Network issue detected, will retry later...');
      return;
    }
    
    if (error.message.includes('gh') || error.message.includes('GitHub CLI')) {
      console.log('🔧 GitHub CLI issue detected, checking installation...');
      await this.checkGitHubCLI();
      return;
    }
  }

  async checkGitConfiguration() {
    try {
      // Check git user configuration
      const userName = execSync('git config user.name', { encoding: 'utf8', stdio: 'pipe' }).trim();
      const userEmail = execSync('git config user.email', { encoding: 'utf8', stdio: 'pipe' }).trim();
      
      console.log('✅ Git configuration:', { userName, userEmail });
      
    } catch (error) {
      console.error('❌ Git configuration issue:', error.message);
    }
  }

  async checkGitHubCLI() {
    try {
      const version = execSync('gh --version', { encoding: 'utf8', stdio: 'pipe' });
      console.log('✅ GitHub CLI version:', version.trim());
      
      // Check authentication
      const authStatus = execSync('gh auth status', { encoding: 'utf8', stdio: 'pipe' });
      console.log('✅ GitHub CLI auth status:', authStatus.trim());
      
    } catch (error) {
      console.error('❌ GitHub CLI issue:', error.message);
    }
  }

  getStatus() {
    return {
      ...super.getStatus(),
      config: {
        staleBranchDays: this.config.staleBranchDays,
        stalePRDays: this.config.stalePRDays,
        dryRun: this.config.dryRun,
        autoDelete: this.config.autoDelete,
        protectedBranches: this.config.protectedBranches
      }
    };
  }
}

module.exports = StaleCleaner; 