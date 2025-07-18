#!/usr/bin/env node

/**
 * Zion App - Automation Status Checker
 * 
 * This script checks the status of all automation systems and provides
 * a comprehensive overview of the automation coverage and performance.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationStatusChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationSystems = [
      'super-automation-orchestrator',
      'ai-continuous-improvement',
      'cursor-ai-delegator',
      'multi-computer-coordinator',
      'automated-app-improvement',
      'ai-code-optimizer',
      'automation-dashboard',
      'continuous-optimization-engine'
    ];
  }

  /**
   * Check all automation systems
   */
  async checkAllSystems() {
    console.log('🔍 Checking Zion App Automation Systems Status...');
    console.log('=' .repeat(80));
    
    const status = {
      systems: {},
      summary: {
        total: this.automationSystems.length,
        running: 0,
        stopped: 0,
        error: 0
      },
      performance: {
        memoryUsage: 0,
        cpuUsage: 0,
        activeProcesses: 0
      },
      improvements: {
        total: 0,
        recent: 0
      }
    };
    
    // Check each system
    for (const system of this.automationSystems) {
      const systemStatus = await this.checkSystem(system);
      status.systems[system] = systemStatus;
      
      if (systemStatus.status === 'running') {
        status.summary.running++;
      } else if (systemStatus.status === 'error') {
        status.summary.error++;
      } else {
        status.summary.stopped++;
      }
    }
    
    // Get performance metrics
    status.performance = this.getPerformanceMetrics();
    
    // Get improvement metrics
    status.improvements = this.getImprovementMetrics();
    
    // Display status
    this.displayStatus(status);
    
    return status;
  }

  /**
   * Check a specific system
   */
  async checkSystem(systemName) {
    try {
      // Check if process is running
      const isRunning = this.isProcessRunning(systemName);
      
      if (isRunning) {
        const uptime = this.getProcessUptime(systemName);
        const memoryUsage = this.getProcessMemoryUsage(systemName);
        const cpuUsage = this.getProcessCpuUsage(systemName);
        
        return {
          status: 'running',
          uptime,
          memoryUsage,
          cpuUsage,
          lastCheck: new Date().toISOString()
        };
      } else {
        return {
          status: 'stopped',
          uptime: '0:00',
          memoryUsage: 0,
          cpuUsage: 0,
          lastCheck: new Date().toISOString()
        };
      }
    } catch (error) {
      return {
        status: 'error',
        error: error.message,
        lastCheck: new Date().toISOString()
      };
    }
  }

  /**
   * Check if process is running
   */
  isProcessRunning(processName) {
    try {
      const output = execSync(`ps aux | grep "${processName}" | grep -v grep`, { stdio: 'pipe' }).toString();
      return output.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get process uptime
   */
  getProcessUptime(processName) {
    try {
      const output = execSync(`ps -eo pid,etime,comm | grep "${processName}" | grep -v grep`, { stdio: 'pipe' }).toString();
      if (output.trim()) {
        const parts = output.trim().split(/\s+/);
        if (parts.length >= 2) {
          return parts[1];
        }
      }
      return '0:00';
    } catch (error) {
      return '0:00';
    }
  }

  /**
   * Get process memory usage
   */
  getProcessMemoryUsage(processName) {
    try {
      const output = execSync(`ps -eo pid,rss,comm | grep "${processName}" | grep -v grep`, { stdio: 'pipe' }).toString();
      if (output.trim()) {
        const parts = output.trim().split(/\s+/);
        if (parts.length >= 2) {
          return Math.round(parseInt(parts[1]) / 1024); // Convert KB to MB
        }
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Get process CPU usage
   */
  getProcessCpuUsage(processName) {
    try {
      const output = execSync(`ps -eo pid,%cpu,comm | grep "${processName}" | grep -v grep`, { stdio: 'pipe' }).toString();
      if (output.trim()) {
        const parts = output.trim().split(/\s+/);
        if (parts.length >= 2) {
          return parseFloat(parts[1]);
        }
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Get performance metrics
   */
  getPerformanceMetrics() {
    try {
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      return {
        memoryUsage: Math.round(memoryUsage.heapUsed / 1024 / 1024),
        cpuUsage: (cpuUsage.user + cpuUsage.system) / 1000000, // Convert to seconds
        activeProcesses: this.getActiveProcessCount()
      };
    } catch (error) {
      return {
        memoryUsage: 0,
        cpuUsage: 0,
        activeProcesses: 0
      };
    }
  }

  /**
   * Get active process count
   */
  getActiveProcessCount() {
    try {
      const output = execSync('ps aux | grep -E "(super-automation|ai-continuous-improvement|cursor-ai-delegator|multi-computer-coordinator|automated-app-improvement|ai-code-optimizer|automation-dashboard|continuous-optimization-engine)" | grep -v grep | wc -l', { stdio: 'pipe' }).toString();
      return parseInt(output.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Get improvement metrics
   */
  getImprovementMetrics() {
    try {
      // Count log files for improvements
      const logsDir = path.join(this.projectRoot, 'logs');
      let totalImprovements = 0;
      let recentImprovements = 0;
      
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        for (const file of files) {
          if (file.endsWith('.log')) {
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Count improvement entries
            const improvementMatches = content.match(/optimization|improvement|fix|enhancement/gi);
            if (improvementMatches) {
              totalImprovements += improvementMatches.length;
            }
            
            // Count recent improvements (last hour)
            const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
            if (stats.mtime > oneHourAgo) {
              const recentMatches = content.match(/optimization|improvement|fix|enhancement/gi);
              if (recentMatches) {
                recentImprovements += recentMatches.length;
              }
            }
          }
        }
      }
      
      return {
        total: totalImprovements,
        recent: recentImprovements
      };
    } catch (error) {
      return {
        total: 0,
        recent: 0
      };
    }
  }

  /**
   * Display status
   */
  displayStatus(status) {
    console.log('📊 Automation Systems Status:');
    console.log('─'.repeat(80));
    
    // Display system status
    for (const [systemName, systemStatus] of Object.entries(status.systems)) {
      const statusIcon = systemStatus.status === 'running' ? '🟢' : systemStatus.status === 'error' ? '🔴' : '⚪';
      const statusText = systemStatus.status.toUpperCase();
      const uptime = systemStatus.uptime || '0:00';
      const memory = systemStatus.memoryUsage ? `${systemStatus.memoryUsage}MB` : 'N/A';
      const cpu = systemStatus.cpuUsage ? `${systemStatus.cpuUsage.toFixed(1)}%` : 'N/A';
      
      console.log(`${statusIcon} ${systemName.padEnd(35)} ${statusText.padEnd(10)} ${uptime.padEnd(8)} ${memory.padEnd(8)} ${cpu.padEnd(8)}`);
    }
    
    console.log('─'.repeat(80));
    console.log('');
    
    // Display summary
    console.log('📈 Summary:');
    console.log(`   Total Systems: ${status.summary.total}`);
    console.log(`   Running: ${status.summary.running} 🟢`);
    console.log(`   Stopped: ${status.summary.stopped} ⚪`);
    console.log(`   Errors: ${status.summary.error} 🔴`);
    console.log('');
    
    // Display performance
    console.log('⚡ Performance:');
    console.log(`   Memory Usage: ${status.performance.memoryUsage}MB`);
    console.log(`   CPU Usage: ${status.performance.cpuUsage.toFixed(2)}s`);
    console.log(`   Active Processes: ${status.performance.activeProcesses}`);
    console.log('');
    
    // Display improvements
    console.log('🎯 Improvements:');
    console.log(`   Total Improvements: ${status.improvements.total}`);
    console.log(`   Recent Improvements (1h): ${status.improvements.recent}`);
    console.log('');
    
    // Display automation coverage
    const coverage = (status.summary.running / status.summary.total) * 100;
    console.log('🤖 Automation Coverage:');
    console.log(`   Coverage: ${coverage.toFixed(1)}%`);
    
    if (coverage >= 80) {
      console.log('   Status: 🟢 Excellent - Maximum automation coverage achieved!');
    } else if (coverage >= 60) {
      console.log('   Status: 🟡 Good - Most automation systems running');
    } else if (coverage >= 40) {
      console.log('   Status: 🟠 Fair - Some automation systems running');
    } else {
      console.log('   Status: 🔴 Poor - Limited automation coverage');
    }
    
    console.log('');
    console.log('=' .repeat(80));
  }

  /**
   * Get detailed status
   */
  getDetailedStatus() {
    return {
      timestamp: new Date().toISOString(),
      systems: this.automationSystems,
      performance: this.getPerformanceMetrics(),
      improvements: this.getImprovementMetrics()
    };
  }
}

// Export the class
module.exports = AutomationStatusChecker;

// Run status check if this file is executed directly
if (require.main === module) {
  const checker = new AutomationStatusChecker();
  
  checker.checkAllSystems().catch(error => {
    console.error('❌ Failed to check automation status:', error);
    process.exit(1);
  });
} 