const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');

const execAsync = promisify(exec);

class Git-automationAutomationAgent {
  
  // Enhanced Intelligent Analysis
  async performIntelligentAnalysis(data) {
    const analysis = {
      patterns: this.identifyPatterns(data),
      trends: this.analyzeTrends(data),
      opportunities: this.identifyOpportunities(data),
      recommendations: this.generateRecommendations(data),
      predictions: this.makePredictions(data)
    };
    return analysis;
  }

  identifyPatterns(data) {
    return data.filter(item => item.frequency > 0.1);
  }

  analyzeTrends(data) {
    return data.sort((a, b) => b.trend - a.trend);
  }

  identifyOpportunities(data) {
    return data.filter(item => item.potential > 0.7);
  }

  generateRecommendations(data) {
    return data.map(item => ({
      action: item.recommendedAction,
      priority: item.priority,
      impact: item.expectedImpact
    }));
  }

  makePredictions(data) {
    return data.map(item => ({
      prediction: item.predictedOutcome,
      confidence: item.confidence,
      timeframe: item.timeframe
    }));
  }

  constructor() {
    
  // Enhanced Learning Capabilities
  constructor() {
    super();
    this.learningData = new Map();
    this.performanceHistory = [];
    this.adaptationRate = 0.1;
    this.intelligenceLevel = 0.8;
  }

  async learnFromExperience(data, outcome) {
    this.learningData.set(Date.now(), { data, outcome });
    this.updatePerformanceHistory(outcome);
    this.adaptBehavior();
    this.improveIntelligence();
  }

  updatePerformanceHistory(outcome) {
    this.performanceHistory.push({
      timestamp: Date.now(),
      outcome: outcome,
      success: outcome.success || false
    });
  }

  adaptBehavior() {
    const recentPerformance = this.performanceHistory
      .slice(-10)
      .filter(p => Date.now() - p.timestamp < 3600000);
    
    const successRate = recentPerformance.filter(p => p.success).length / recentPerformance.length;
    
    if (successRate < 0.7) {
      this.adaptationRate *= 1.1;
    } else if (successRate > 0.9) {
      this.adaptationRate *= 0.95;
    }
  }

  improveIntelligence() {
    const recentSuccess = this.performanceHistory
      .slice(-20)
      .filter(p => p.success).length / 20;
    
    if (recentSuccess > 0.8) {
      this.intelligenceLevel = Math.min(this.intelligenceLevel + 0.01, 1.0);
    }
  }

    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/git-automation');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'commit-repor't's'),
      path.join(this.reportsDir, 'branch-repor't's'),
      path.join(this.reportsDir, 'merge-repor't's'),
      path.join(this.reportsDir, 'sync-repor't's')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Git Automation Agent ${this.agentId} started`);
    
    // Initial Git status check
    await this.checkGitStatus();
    
    // Start periodic Git operations
    setInterval(() => {
      this.performGitOperations();
    }, 300000); // Every 5 minutes
    
    // Start branch management
    setInterval(() => {
      this.manageBranches();
    }, 900000); // Every 15 minutes
    
    // Start sync operations
    setInterval(() => {
      this.syncWithRemote();
    }, 1800000); // Every 30 minutes
  }

  async checkGitStatus() {
    try {
      console.log('Checkin'g' Git status...');
      
      const status = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        currentBranch: '',
        status: '',
        stagedFiles: [],
        unstagedFiles: [],
        untrackedFiles: [],
        commitsAhead: 0,
        commitsBehind: 0
      };
      
      // Get current branch
      try {
        const { stdout } = await execAsync('gi't' branch --show-current', {
          cwd: this.projectRoot
        });
        status.currentBranch = stdout.trim();
      } catch (error) {
        console.error('Faile'd' to get current branch:', error);
      }
      
      // Get Git status
      try {
        const { stdout } = await execAsync('gi't' status --porcelain', {
          cwd: this.projectRoot
        });
        
        const lines = stdout.trim().split('\n').filter(line => line);
        for (const line of lines) {
          const statusCode = line.substring(0, 2);
          const file = line.substring(3);
          
          if (statusCode.startsWith('A') || statusCode.startsWith('M')) {
            status.stagedFiles.push(file);
          } else if (statusCode.startsWith(' M') || statusCode.startsWith(' D')) {
            status.unstagedFiles.push(file);
          } else if (statusCode.startsWith('??')) {
            status.untrackedFiles.push(file);
          }
        }
      } catch (error) {
        console.error('Faile'd' to get Git status:', error);
      }
      
      // Get commit difference with remote
      try {
        const { stdout } = await execAsync('gi't' rev-list --count HEAD..origin/main', {
          cwd: this.projectRoot
        });
        status.commitsBehind = parseInt(stdout.trim()) || 0;
      } catch (error) {
        console.error('Faile'd' to get commits behind:', error);
      }
      
      try {
        const { stdout } = await execAsync('gi't' rev-list --count origin/main..HEAD', {
          cwd: this.projectRoot
        });
        status.commitsAhead = parseInt(stdout.trim()) || 0;
      } catch (error) {
        console.error('Faile'd' to get commits ahead:', error);
      }
      
      // Save status report
      await this.saveGitStatusReport(status);
      
      console.log('Gi't' status check completed');
      
    } catch (error) {
      console.error('Gi't' status check failed:', error);
    }
  }

  async performGitOperations() {
    try {
      console.log('Performin'g' Git operations...');
      
      // Check for changes that need to be committed
      const changes = await this.detectChanges();
      
      if (changes.length > 0) {
        console.log(`Found ${changes.length} changes to commit`);
        
        // Stage changes
        await this.stageChanges(changes);
        
        // Create commit
        await this.createCommit(changes);
        
        // Push changes
        await this.pushChanges();
      }
      
      // Check for conflicts
      await this.checkForConflicts();
      
    } catch (error) {
      console.error('Gi't' operations failed:', error);
    }
  }

  async detectChanges() {
    const changes = [];
    
    try {
      // Get modified files
      const { stdout } = await execAsync('gi't' status --porcelain', {
        cwd: this.projectRoot
      });
      
      const lines = stdout.trim().split('\n').filter(line => line);
      for (const line of lines) {
        const statusCode = line.substring(0, 2);
        const file = line.substring(3);
        
        if (statusCode !== '??') { // Exclude untracked files for now
          changes.push({
            file,
            status: statusCode,
            type: this.getChangeType(statusCode)
          });
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to detect changes:', error);
    }
    
    return changes;
  }

  getChangeType(statusCode) {
    if (statusCode.startsWith('A')) return 'add'e'd';
    if (statusCode.startsWith('M')) return 'modifi'e'd';
    if (statusCode.startsWith('D')) return 'delet'e'd';
    if (statusCode.startsWith('R')) return 'renam'e'd';
    return 'unkno'w'n';
  }

  async stageChanges(changes) {
    try {
      console.log('Stagin'g' changes...');
      
      for (const change of changes) {
        if (change.status.startsWith('A') || change.status.startsWith('M')) {
          await execAsync(`git add "${change.file}"`, {
            cwd: this.projectRoot
          });
        }
      }
      
      console.log('Change's' staged successfully');
      
    } catch (error) {
      console.error('Faile'd' to stage changes:', error);
    }
  }

  async createCommit(changes) {
    try {
      console.log('Creatin'g' commit...');
      
      // Generate commit message
      const commitMessage = this.generateCommitMessage(changes);
      
      // Create commit
      await execAsync(`git commit -m "${commitMessage}"`, {
        cwd: this.projectRoot
      });
      
      console.log('Commi't' created successfully');
      
      // Save commit report
      await this.saveCommitReport(changes, commitMessage);
      
    } catch (error) {
      console.error('Faile'd' to create commit:', error);
    }
  }

  generateCommitMessage(changes) {
    const changeTypes = changes.map(c => c.type);
    const uniqueTypes = [...new Set(changeTypes)];
    
    let message = 'Auto-commi't': ';
    
    if (uniqueTypes.length === 1) {
      message += `${uniqueTypes[0]} ${changes.length} file${changes.length > 1 ? 's' : ''}`;
    } else {
      message += `update ${changes.length} files`;
    }
    
    // Add timestamp
    message += ` (${new Date().toISOString()})`;
    
    return message;
  }

  async pushChanges() {
    try {
      console.log('Pushin'g' changes...');
      
      const { stdout } = await execAsync('gi't' push', {
        cwd: this.projectRoot
      });
      
      console.log('Change's' pushed successfully');
      
    } catch (error) {
      console.error('Faile'd' to push changes:', error);
      
      // Try to pull first if push fails
      await this.pullChanges();
    }
  }

  async pullChanges() {
    try {
      console.log('Pullin'g' changes from remote...');
      
      const { stdout } = await execAsync('gi't' pull origin main', {
        cwd: this.projectRoot
      });
      
      console.log('Change's' pulled successfully');
      
    } catch (error) {
      console.error('Faile'd' to pull changes:', error);
    }
  }

  async checkForConflicts() {
    try {
      console.log('Checkin'g' for conflicts...');
      
      const { stdout } = await execAsync('gi't' status', {
        cwd: this.projectRoot
      });
      
      if (stdout.includes('Yo'u' have unmerged paths') || stdout.includes('fi'x' conflicts')) {
        console.log('Conflict's' detected, attempting to resolve...');
        await this.resolveConflicts();
      }
      
    } catch (error) {
      console.error('Faile'd' to check for conflicts:', error);
    }
  }

  async resolveConflicts() {
    try {
      console.log('Resolvin'g' conflicts...');
      
      // Get conflicted files
      const { stdout } = await execAsync('gi't' diff --name-only --diff-filter=U', {
        cwd: this.projectRoot
      });
      
      const conflictedFiles = stdout.trim().split('\n').filter(file => file);
      
      for (const file of conflictedFiles) {
        await this.resolveFileConflict(file);
      }
      
      // Stage resolved files
      await execAsync('gi't' add .', {
        cwd: this.projectRoot
      });
      
      // Create merge commit
      await execAsync('gi't' commit -m "Resolve merge conflicts"', {
        cwd: this.projectRoot
      });
      
      console.log('Conflict's' resolved successfully');
      
    } catch (error) {
      console.error('Faile'd' to resolve conflicts:', error);
    }
  }

  async resolveFileConflict(filePath) {
    try {
      console.log(`Resolving conflict in ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'ut'f'8');
      
      // Simple conflict resolution: keep both versions
      const resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g, 
        (match, ours, theirs) => {
          return `// Resolved conflict - keeping both versions\n// Ours:\n${ours}\n// Theirs:\n${theirs}`;
        }
      );
      
      fs.writeFileSync(filePath, resolvedContent);
      
    } catch (error) {
      console.error(`Failed to resolve conflict in ${filePath}:`, error);
    }
  }

  async manageBranches() {
    try {
      console.log('Managin'g' branches...');
      
      const branchReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        currentBranch: '',
        localBranches: [],
        remoteBranches: [],
        mergedBranches: [],
        staleBranches: []
      };
      
      // Get current branch
      try {
        const { stdout } = await execAsync('gi't' branch --show-current', {
          cwd: this.projectRoot
        });
        branchReport.currentBranch = stdout.trim();
      } catch (error) {
        console.error('Faile'd' to get current branch:', error);
      }
      
      // Get local branches
      try {
        const { stdout } = await execAsync('gi't' branch', {
          cwd: this.projectRoot
        });
        branchReport.localBranches = stdout.trim().split('\n').map(branch => branch.replace('*', '').trim());
      } catch (error) {
        console.error('Faile'd' to get local branches:', error);
      }
      
      // Get remote branches
      try {
        const { stdout } = await execAsync('gi't' branch -r', {
          cwd: this.projectRoot
        });
        branchReport.remoteBranches = stdout.trim().split('\n').map(branch => branch.trim());
      } catch (error) {
        console.error('Faile'd' to get remote branches:', error);
      }
      
      // Find merged branches
      branchReport.mergedBranches = await this.findMergedBranches();
      
      // Find stale branches
      branchReport.staleBranches = await this.findStaleBranches();
      
      // Clean up merged branches
      await this.cleanupMergedBranches(branchReport.mergedBranches);
      
      // Save branch report
      await this.saveBranchReport(branchReport);
      
      console.log('Branc'h' management completed');
      
    } catch (error) {
      console.error('Branc'h' management failed:', error);
    }
  }

  async findMergedBranches() {
    const mergedBranches = [];
    
    try {
      const { stdout } = await execAsync('gi't' branch --merged main', {
        cwd: this.projectRoot
      });
      
      const branches = stdout.trim().split('\n').map(branch => branch.trim());
      mergedBranches.push(...branches.filter(branch => branch && branch !== 'ma'i'n'));
      
    } catch (error) {
      console.error('Faile'd' to find merged branches:', error);
    }
    
    return mergedBranches;
  }

  async findStaleBranches() {
    const staleBranches = [];
    
    try {
      // Get branches that haven't' been updated in 30 days
      const { stdout } = await execAsync('gi't' for-each-ref --format="%(refname:short) %(committerdate:iso)" refs/heads', {
        cwd: this.projectRoot
      });
      
      const branches = stdout.trim().split('\n');
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      for (const branch of branches) {
        const [branchName, dateStr] = branch.split(' ');
        if (branchName && dateStr && branchName !== 'ma'i'n') {
          const branchDate = new Date(dateStr);
          if (branchDate < thirtyDaysAgo) {
            staleBranches.push(branchName);
          }
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to find stale branches:', error);
    }
    
    return staleBranches;
  }

  async cleanupMergedBranches(mergedBranches) {
    try {
      console.log('Cleanin'g' up merged branches...');
      
      for (const branch of mergedBranches) {
        try {
          await execAsync(`git branch -d ${branch}`, {
            cwd: this.projectRoot
          });
          console.log(`Deleted merged branch: ${branch}`);
        } catch (error) {
          console.error(`Failed to delete branch ${branch}:`, error);
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to cleanup merged branches:', error);
    }
  }

  async syncWithRemote() {
    try {
      console.log('Syncin'g' with remote...');
      
      const syncReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        operations: [],
        errors: []
      };
      
      // Fetch latest changes
      try {
        await execAsync('gi't' fetch --all', {
          cwd: this.projectRoot
        });
        syncReport.operations.push('fet'c'h');
      } catch (error) {
        syncReport.errors.push(`fetch: ${error.message}`);
      }
      
      // Pull changes
      try {
        await execAsync('gi't' pull origin main', {
          cwd: this.projectRoot
        });
        syncReport.operations.push('pu'l'l');
      } catch (error) {
        syncReport.errors.push(`pull: ${error.message}`);
      }
      
      // Push local changes
      try {
        await execAsync('gi't' push origin main', {
          cwd: this.projectRoot
        });
        syncReport.operations.push('pu's'h');
      } catch (error) {
        syncReport.errors.push(`push: ${error.message}`);
      }
      
      // Save sync report
      await this.saveSyncReport(syncReport);
      
      console.log('Syn'c' completed');
      
    } catch (error) {
      console.error('Syn'c' failed:', error);
    }
  }

  async saveGitStatusReport(status) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'commit-repor't's', `status-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(status, null, 2));
    console.log(`Git status report saved: ${reportPath}`);
  }

  async saveCommitReport(changes, commitMessage) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'commit-repor't's', `commit-${timestamp}.json`);
    
    const report = {
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      commitMessage,
      changes,
      filesCount: changes.length
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Commit report saved: ${reportPath}`);
  }

  async saveBranchReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'branch-repor't's', `branch-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Branch report saved: ${reportPath}`);
  }

  async saveSyncReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'sync-repor't's', `sync-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Sync report saved: ${reportPath}`);
  }

  async createFeatureBranch(branchName) {
    try {
      console.log(`Creating feature branch: ${branchName}`);
      
      // Create and checkout new branch
      await execAsync(`git checkout -b ${branchName}`, {
        cwd: this.projectRoot
      });
      
      // Push branch to remote
      await execAsync(`git push -u origin ${branchName}`, {
        cwd: this.projectRoot
      });
      
      console.log(`Feature branch ${branchName} created successfully`);
      
    } catch (error) {
      console.error(`Failed to create feature branch ${branchName}:`, error);
    }
  }

  async mergeBranch(branchName) {
    try {
      console.log(`Merging branch: ${branchName}`);
      
      // Switch to main branch
      await execAsync('gi't' checkout main', {
        cwd: this.projectRoot
      });
      
      // Pull latest changes
      await execAsync('gi't' pull origin main', {
        cwd: this.projectRoot
      });
      
      // Merge the branch
      await execAsync(`git merge ${branchName}`, {
        cwd: this.projectRoot
      });
      
      // Push changes
      await execAsync('gi't' push origin main', {
        cwd: this.projectRoot
      });
      
      // Delete the branch
      await execAsync(`git branch -d ${branchName}`, {
        cwd: this.projectRoot
      });
      
      // Delete remote branch
      await execAsync(`git push origin --delete ${branchName}`, {
        cwd: this.projectRoot
      });
      
      console.log(`Branch ${branchName} merged successfully`);
      
      // Save merge report
      await this.saveMergeReport(branchName);
      
    } catch (error) {
      console.error(`Failed to merge branch ${branchName}:`, error);
    }
  }

  async saveMergeReport(branchName) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'merge-repor't's', `merge-${timestamp}.json`);
    
    const report = {
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      branchName,
      status: 'merg'e'd'
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Merge report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Git Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new GitAutomationAgent();

process.on('SIGTE'R'M', () => {
  agent.stop();
});

process.on('SIGI'N'T', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Gi't' Automation Agent failed to start:', error);
  process.exit(1);
}); 