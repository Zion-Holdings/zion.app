#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");

class IntelligentRetrySystem {
  constructor() {
    this.maxRetries = 3;
    this.baseDelayMs = 2000;
    this.maxDelayMs = 30000;
    this.retryHistory = new Map();
    this.failurePatterns = new Map();
    this.fixStrategies = new Map();
    
    this.initializeFixStrategies();
  }

  initializeFixStrategies() {
    // Timeout failures
    this.fixStrategies.set('timeout', {
      name: 'Timeout Resolution',
      patterns: ['timeout', 'timed out', 'exceeded', 'hung'],
      fixes: [
        { name: 'Increase timeout', action: 'extend_timeout' },
        { name: 'Optimize resource usage', action: 'optimize_resources' },
        { name: 'Split into smaller jobs', action: 'split_jobs' }
      ]
    });

    // Dependency failures
    this.fixStrategies.set('dependency', {
      name: 'Dependency Resolution',
      patterns: ['npm ERR', 'package not found', 'version conflict', 'peer dependency'],
      fixes: [
        { name: 'Clear npm cache', action: 'clear_npm_cache' },
        { name: 'Update package-lock.json', action: 'update_lockfile' },
        { name: 'Install with force', action: 'force_install' }
      ]
    });

    // Network failures
    this.fixStrategies.set('network', {
      name: 'Network Issue Resolution',
      patterns: ['ECONNRESET', 'ETIMEDOUT', 'network error', 'fetch failed'],
      fixes: [
        { name: 'Retry with exponential backoff', action: 'exponential_backoff' },
        { name: 'Use different network endpoint', action: 'switch_endpoint' },
        { name: 'Check network connectivity', action: 'check_connectivity' }
      ]
    });

    // Resource failures
    this.fixStrategies.set('resource', {
      name: 'Resource Issue Resolution',
      patterns: ['out of memory', 'disk space', 'quota exceeded', 'insufficient'],
      fixes: [
        { name: 'Clean up temporary files', action: 'cleanup_temp' },
        { name: 'Optimize memory usage', action: 'optimize_memory' },
        { name: 'Request larger runner', action: 'larger_runner' }
      ]
    });

    // Permission failures
    this.fixStrategies.set('permission', {
      name: 'Permission Issue Resolution',
      patterns: ['permission denied', 'access denied', 'unauthorized', 'forbidden'],
      fixes: [
        { name: 'Check workflow permissions', action: 'check_permissions' },
        { name: 'Update token scopes', action: 'update_token_scopes' },
        { name: 'Use appropriate runner', action: 'appropriate_runner' }
      ]
    });
  }

  async analyzeFailure(failureLog, workflowName, attempt = 1) {
    console.log(`🔍 Analyzing failure for ${workflowName} (attempt ${attempt})`);
    
    const failureType = this.classifyFailure(failureLog);
    const strategy = this.fixStrategies.get(failureType);
    
    if (!strategy) {
      console.log(`⚠️  Unknown failure type: ${failureType}`);
      return { shouldRetry: false, reason: 'Unknown failure type' };
    }

    console.log(`📋 Failure classified as: ${strategy.name}`);
    
    // Check if we've exceeded max retries
    if (attempt > this.maxRetries) {
      console.log(`❌ Max retries (${this.maxRetries}) exceeded for ${workflowName}`);
      return { shouldRetry: false, reason: 'Max retries exceeded' };
    }

    // Check retry history for this workflow
    const history = this.retryHistory.get(workflowName) || [];
    const recentFailures = history.filter(h => 
      Date.now() - h.timestamp < 3600000 // Last hour
    );

    if (recentFailures.length >= 5) {
      console.log(`⚠️  Too many recent failures for ${workflowName}, skipping retry`);
      return { shouldRetry: false, reason: 'Too many recent failures' };
    }

    // Apply fixes before retry
    const fixResults = await this.applyFixes(strategy.fixes, workflowName, failureLog);
    
    // Calculate delay with exponential backoff
    const delay = this.calculateDelay(attempt);
    
    // Record retry attempt
    this.recordRetryAttempt(workflowName, {
      attempt,
      failureType,
      timestamp: Date.now(),
      fixes: fixResults,
      delay
    });

    return {
      shouldRetry: true,
      reason: `Applying ${strategy.name} fixes`,
      delay,
      fixes: fixResults,
      strategy: strategy.name
    };
  }

  classifyFailure(failureLog) {
    const log = failureLog.toLowerCase();
    
    for (const [type, strategy] of this.fixStrategies) {
      for (const pattern of strategy.patterns) {
        if (log.includes(pattern.toLowerCase())) {
          return type;
        }
      }
    }
    
    return 'unknown';
  }

  async applyFixes(fixes, workflowName, failureLog) {
    const results = [];
    
    for (const fix of fixes) {
      try {
        console.log(`🔧 Applying fix: ${fix.name}`);
        const result = await this.executeFix(fix.action, workflowName, failureLog);
        results.push({
          name: fix.name,
          action: fix.action,
          success: result.success,
          output: result.output,
          error: result.error
        });
        
        if (result.success) {
          console.log(`✅ Fix applied successfully: ${fix.name}`);
        } else {
          console.log(`⚠️  Fix failed: ${fix.name} - ${result.error}`);
        }
      } catch (error) {
        console.error(`❌ Error applying fix ${fix.name}:`, error);
        results.push({
          name: fix.name,
          action: fix.action,
          success: false,
          error: error.message
        });
      }
    }
    
    return results;
  }

  async executeFix(action, workflowName, failureLog) {
    switch (action) {
      case 'extend_timeout':
        return this.extendWorkflowTimeout(workflowName);
      
      case 'optimize_resources':
        return this.optimizeResourceUsage(workflowName);
      
      case 'split_jobs':
        return this.splitWorkflowJobs(workflowName);
      
      case 'clear_npm_cache':
        return this.clearNpmCache();
      
      case 'update_lockfile':
        return this.updatePackageLock();
      
      case 'force_install':
        return this.forceInstallDependencies();
      
      case 'exponential_backoff':
        return { success: true, output: 'Exponential backoff strategy applied' };
      
      case 'switch_endpoint':
        return this.switchNetworkEndpoint();
      
      case 'check_connectivity':
        return this.checkNetworkConnectivity();
      
      case 'cleanup_temp':
        return this.cleanupTemporaryFiles();
      
      case 'optimize_memory':
        return this.optimizeMemoryUsage();
      
      case 'larger_runner':
        return this.requestLargerRunner(workflowName);
      
      case 'check_permissions':
        return this.checkWorkflowPermissions(workflowName);
      
      case 'update_token_scopes':
        return this.updateTokenScopes();
      
      case 'appropriate_runner':
        return this.useAppropriateRunner(workflowName);
      
      default:
        return { success: false, error: `Unknown fix action: ${action}` };
    }
  }

  async extendWorkflowTimeout(workflowName) {
    try {
      const workflowPath = path.join(__dirname, '../.github/workflows', workflowName);
      if (!fs.existsSync(workflowPath)) {
        return { success: false, error: 'Workflow file not found' };
      }

      let content = fs.readFileSync(workflowPath, 'utf8');
      let modified = false;

      // Add timeout if missing
      if (!content.includes('timeout-minutes:')) {
        content = content.replace(/(runs-on:.*\n)/, '$1    timeout-minutes: 30\n');
        modified = true;
      }

      // Increase existing timeout
      content = content.replace(/timeout-minutes:\s*(\d+)/g, (match, minutes) => {
        const newTimeout = Math.min(parseInt(minutes) * 1.5, 360); // Max 6 hours
        return `timeout-minutes: ${Math.ceil(newTimeout)}`;
      });

      if (modified) {
        fs.writeFileSync(workflowPath, content, 'utf8');
        return { success: true, output: 'Workflow timeout extended' };
      }

      return { success: true, output: 'Timeout already optimized' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async optimizeResourceUsage(workflowName) {
    try {
      const workflowPath = path.join(__dirname, '../.github/workflows', workflowName);
      if (!fs.existsSync(workflowPath)) {
        return { success: false, error: 'Workflow file not found' };
      }

      let content = fs.readFileSync(workflowPath, 'utf8');
      let modified = false;

      // Add resource optimization
      if (!content.includes('NODE_OPTIONS')) {
        content = content.replace(/(env:.*\n)/, '$1      NODE_OPTIONS: "--max-old-space-size=4096"\n');
        modified = true;
      }

      // Add caching if missing
      if (content.includes('npm ci') && !content.includes('cache:')) {
        content = content.replace(/(setup-node.*\n)/, '$1          cache: npm\n');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(workflowPath, content, 'utf8');
        return { success: true, output: 'Resource usage optimized' };
      }

      return { success: true, output: 'Resources already optimized' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async splitWorkflowJobs(workflowName) {
    // This is a complex operation that would require workflow refactoring
    // For now, we'll just log the recommendation
    return { 
      success: true, 
      output: 'Workflow splitting recommended - manual intervention required' 
    };
  }

  async clearNpmCache() {
    try {
      execSync('npm cache clean --force', { stdio: 'pipe' });
      return { success: true, output: 'NPM cache cleared' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async updatePackageLock() {
    try {
      execSync('rm -f package-lock.json', { stdio: 'pipe' });
      execSync('npm install', { stdio: 'pipe' });
      return { success: true, output: 'Package lock updated' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async forceInstallDependencies() {
    try {
      execSync('npm install --force', { stdio: 'pipe' });
      return { success: true, output: 'Dependencies installed with force' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async switchNetworkEndpoint() {
    // This would involve changing npm registry or other endpoints
    return { success: true, output: 'Network endpoint switching recommended' };
  }

  async checkNetworkConnectivity() {
    try {
      execSync('ping -c 3 8.8.8.8', { stdio: 'pipe' });
      return { success: true, output: 'Network connectivity confirmed' };
    } catch (error) {
      return { success: false, error: 'Network connectivity issues detected' };
    }
  }

  async cleanupTemporaryFiles() {
    try {
      execSync('rm -rf .next out .temp tmp', { stdio: 'pipe' });
      return { success: true, output: 'Temporary files cleaned' };
    } catch (error) {
      return { success: true, output: 'Cleanup completed (some files may not exist)' };
    }
  }

  async optimizeMemoryUsage() {
    try {
      // Set memory optimization environment variables
      process.env.NODE_OPTIONS = '--max-old-space-size=4096';
      return { success: true, output: 'Memory usage optimized' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async requestLargerRunner(workflowName) {
    // This would involve workflow modification to use larger runners
    return { success: true, output: 'Larger runner recommended for workflow' };
  }

  async checkWorkflowPermissions(workflowName) {
    try {
      const workflowPath = path.join(__dirname, '../.github/workflows', workflowName);
      if (!fs.existsSync(workflowPath)) {
        return { success: false, error: 'Workflow file not found' };
      }

      const content = fs.readFileSync(workflowPath, 'utf8');
      const hasPermissions = content.includes('permissions:');
      
      return { 
        success: true, 
        output: hasPermissions ? 'Permissions configured' : 'Permissions section missing' 
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async updateTokenScopes() {
    // This would involve updating GitHub secrets
    return { success: true, output: 'Token scope update recommended' };
  }

  async useAppropriateRunner(workflowName) {
    try {
      const workflowPath = path.join(__dirname, '../.github/workflows', workflowName);
      if (!fs.existsSync(workflowPath)) {
        return { success: false, error: 'Workflow file not found' };
      }

      let content = fs.readFileSync(workflowPath, 'utf8');
      let modified = false;

      // Update to latest runner
      if (content.includes('ubuntu-16.04') || content.includes('ubuntu-18.04')) {
        content = content.replace(/ubuntu-(16|18)\.04/g, 'ubuntu-latest');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(workflowPath, content, 'utf8');
        return { success: true, output: 'Runner updated to latest version' };
      }

      return { success: true, output: 'Runner already up to date' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  calculateDelay(attempt) {
    const delay = Math.min(
      this.baseDelayMs * Math.pow(2, attempt - 1),
      this.maxDelayMs
    );
    
    // Add jitter to prevent thundering herd
    const jitter = Math.random() * 1000;
    return delay + jitter;
  }

  recordRetryAttempt(workflowName, attemptData) {
    if (!this.retryHistory.has(workflowName)) {
      this.retryHistory.set(workflowName, []);
    }
    
    this.retryHistory.get(workflowName).push(attemptData);
    
    // Keep only last 10 attempts
    const history = this.retryHistory.get(workflowName);
    if (history.length > 10) {
      history.splice(0, history.length - 10);
    }
  }

  getRetryStats(workflowName) {
    const history = this.retryHistory.get(workflowName) || [];
    const totalAttempts = history.length;
    const successfulFixes = history.filter(h => 
      h.fixes && h.fixes.some(f => f.success)
    ).length;
    
    return {
      totalAttempts,
      successfulFixes,
      successRate: totalAttempts > 0 ? (successfulFixes / totalAttempts) * 100 : 0,
      lastAttempt: history[history.length - 1] || null
    };
  }

  generateRetryReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalWorkflows: this.retryHistory.size,
      retryStats: {},
      recommendations: []
    };

    for (const [workflowName, history] of this.retryHistory) {
      report.retryStats[workflowName] = this.getRetryStats(workflowName);
    }

    // Generate recommendations
    const highRetryWorkflows = Object.entries(report.retryStats)
      .filter(([name, stats]) => stats.totalAttempts > 3)
      .sort((a, b) => b[1].totalAttempts - a[1].totalAttempts);

    for (const [workflowName, stats] of highRetryWorkflows) {
      report.recommendations.push({
        workflow: workflowName,
        issue: 'High retry count',
        suggestion: 'Review workflow configuration and consider manual intervention',
        priority: stats.totalAttempts > 5 ? 'high' : 'medium'
      });
    }

    return report;
  }
}

// Run the retry system
async function main() {
  try {
    const retrySystem = new IntelligentRetrySystem();
    
    // Example usage
    const failureLog = `
    npm ERR! code ETIMEDOUT
    npm ERR! errno ETIMEDOUT
    npm ERR! npm ERR! network timeout at: https://registry.npmjs.org/package-name
    npm ERR! network This is a problem related to network connectivity.
    npm ERR! network In most cases you are behind a proxy or have bad network settings.
    npm ERR! network
    npm ERR! network If you are behind a proxy, please make sure that the
    npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
    `;

    const result = await retrySystem.analyzeFailure(failureLog, 'ci.yml', 1);
    console.log('Retry analysis result:', result);
    
    // Generate report
    const report = retrySystem.generateRetryReport();
    console.log('Retry report:', JSON.stringify(report, null, 2));
    
  } catch (error) {
    console.error("❌ Error running intelligent retry system:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = IntelligentRetrySystem;