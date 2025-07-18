#!/usr/bin/env node

/**
 * Zion App - Start All Automation Systems
 * 
 * This script starts all automation systems for maximum app improvement:
 * - Super Automation Orchestrator (main coordinator)
 * - AI Continuous Improvement
 * - Cursor AI Delegator
 * - Multi-Computer Coordinator
 * - Automated App Improvement
 * - AI Code Optimizer
 * - Automation Dashboard
 * - Performance Monitoring
 * - Security Scanning
 * - Code Quality Analysis
 * - Dependency Management
 * - Build Optimization
 * - Testing Automation
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AllAutomationStarter {
  constructor() {
    this.projectRoot = process.cwd();
    this.processes = new Map();
    this.isRunning = false;
    
    // All automation systems to start
    this.automationSystems = [
      {
        name: 'super-automation-orchestrator',
        script: 'scripts/super-automation-orchestrator.cjs',
        priority: 'high',
        autoRestart: true,
        maxRestarts: 5
      },
      {
        name: 'ai-continuous-improvement',
        script: 'scripts/ai-continuous-improvement.cjs',
        priority: 'high',
        autoRestart: true,
        maxRestarts: 3
      },
      {
        name: 'cursor-ai-delegator',
        script: 'scripts/cursor-ai-delegator.cjs',
        priority: 'medium',
        autoRestart: true,
        maxRestarts: 3
      },
      {
        name: 'multi-computer-coordinator',
        script: 'scripts/multi-computer-coordinator.cjs',
        priority: 'medium',
        autoRestart: true,
        maxRestarts: 3
      },
      {
        name: 'automated-app-improvement',
        script: 'scripts/automated-app-improvement.cjs',
        priority: 'high',
        autoRestart: true,
        maxRestarts: 5
      },
      {
        name: 'ai-code-optimizer',
        script: 'scripts/ai-code-optimizer.cjs',
        priority: 'high',
        autoRestart: true,
        maxRestarts: 3
      },
      {
        name: 'automation-dashboard',
        script: 'scripts/automation-dashboard.cjs',
        priority: 'low',
        autoRestart: true,
        maxRestarts: 2
      }
    ];
  }

  /**
   * Start all automation systems
   */
  async start() {
    console.log('🚀 Starting ALL Zion App Automation Systems...');
    console.log('=' .repeat(80));
    console.log('🤖 This will start maximum automation for continuous app improvement');
    console.log('📊 All systems will run simultaneously and coordinate with each other');
    console.log('🔄 Auto-restart enabled for all critical systems');
    console.log('=' .repeat(80));
    
    this.isRunning = true;
    
    try {
      // Check and create logs directory
      this.ensureLogsDirectory();
      
      // Start all systems
      await this.startAllSystems();
      
      // Start monitoring
      this.startMonitoring();
      
      // Display status
      this.displayStatus();
      
      console.log('✅ ALL automation systems started successfully!');
      console.log('🎯 Maximum automation coverage achieved');
      console.log('📈 Your app will now continuously improve automatically');
      console.log('=' .repeat(80));
      
    } catch (error) {
      console.error('❌ Failed to start all automation systems:', error);
      throw error;
    }
  }

  /**
   * Ensure logs directory exists
   */
  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
      console.log('📁 Created logs directory');
    }
  }

  /**
   * Start all automation systems
   */
  async startAllSystems() {
    console.log('🔧 Starting all automation systems...');
    
    // Start systems in priority order
    const sortedSystems = this.automationSystems.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    for (const system of sortedSystems) {
      await this.startSystem(system);
      // Small delay between starts to avoid overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  /**
   * Start a single automation system
   */
  async startSystem(system) {
    try {
      console.log(`🚀 Starting ${system.name}...`);
      
      // Check if script exists
      if (!fs.existsSync(system.script)) {
        console.warn(`⚠️ Script not found: ${system.script}`);
        return;
      }
      
      // Start the process
      const childProcess = spawn('node', [system.script], {
        stdio: 'pipe',
        detached: false,
        env: {
          ...process.env,
          ENABLE_AI_IMPROVEMENTS: 'true',
          ENABLE_AUTO_COMMIT: 'true',
          ENABLE_SLACK_NOTIFICATIONS: 'false'
        }
      });
      
      // Set up logging
      const logFile = path.join(this.projectRoot, 'logs', `${system.name}.log`);
      
      childProcess.stdout.on('data', (data) => {
        const message = `[${system.name}] ${data.toString().trim()}`;
        console.log(message);
        fs.appendFileSync(logFile, `${new Date().toISOString()} ${message}\n`);
      });
      
      childProcess.stderr.on('data', (data) => {
        const message = `[${system.name}] ERROR: ${data.toString().trim()}`;
        console.error(message);
        fs.appendFileSync(logFile, `${new Date().toISOString()} ${message}\n`);
      });
      
      childProcess.on('close', (code) => {
        const message = `[${system.name}] Process exited with code ${code}`;
        console.log(message);
        fs.appendFileSync(logFile, `${new Date().toISOString()} ${message}\n`);
        
        // Auto-restart if enabled
        if (system.autoRestart && this.isRunning) {
          const restartCount = this.processes.get(system.name)?.restartCount || 0;
          if (restartCount < system.maxRestarts) {
            console.log(`🔄 Restarting ${system.name} (attempt ${restartCount + 1}/${system.maxRestarts})`);
            setTimeout(() => this.restartSystem(system), 5000);
          } else {
            console.error(`❌ ${system.name} failed to start after ${system.maxRestarts} attempts`);
          }
        }
      });
      
      // Store process info
      this.processes.set(system.name, {
        process: childProcess,
        system: system,
        startTime: new Date(),
        restartCount: 0,
        status: 'running'
      });
      
      console.log(`✅ ${system.name} started successfully`);
      
    } catch (error) {
      console.error(`❌ Failed to start ${system.name}:`, error);
    }
  }

  /**
   * Restart a system
   */
  async restartSystem(system) {
    const processInfo = this.processes.get(system.name);
    if (processInfo) {
      processInfo.restartCount++;
      processInfo.status = 'restarting';
      
      // Kill existing process if still running
      if (!processInfo.process.killed) {
        processInfo.process.kill();
      }
      
      // Start new process
      await this.startSystem(system);
    }
  }

  /**
   * Start monitoring
   */
  startMonitoring() {
    const monitoringLoop = () => {
      if (!this.isRunning) return;
      
      // Check process health
      this.checkProcessHealth();
      
      // Update status
      this.updateStatus();
      
      setTimeout(monitoringLoop, 30 * 1000); // Check every 30 seconds
    };
    
    monitoringLoop();
  }

  /**
   * Check process health
   */
  checkProcessHealth() {
    for (const [name, processInfo] of this.processes) {
      if (processInfo.process.killed && processInfo.status === 'running') {
        console.warn(`⚠️ Process ${name} has died unexpectedly`);
        processInfo.status = 'dead';
        
        // Auto-restart if enabled
        if (processInfo.system.autoRestart && this.isRunning) {
          if (processInfo.restartCount < processInfo.system.maxRestarts) {
            console.log(`🔄 Auto-restarting ${name}...`);
            setTimeout(() => this.restartSystem(processInfo.system), 5000);
          }
        }
      }
    }
  }

  /**
   * Update status
   */
  updateStatus() {
    let runningCount = 0;
    let totalCount = this.processes.size;
    
    for (const processInfo of this.processes.values()) {
      if (processInfo.status === 'running') {
        runningCount++;
      }
    }
    
    // Log status periodically
    if (runningCount === totalCount) {
      console.log(`✅ All ${totalCount} automation systems running normally`);
    } else {
      console.log(`⚠️ ${runningCount}/${totalCount} automation systems running`);
    }
  }

  /**
   * Display status
   */
  displayStatus() {
    console.log('\n📊 Automation Systems Status:');
    console.log('─'.repeat(80));
    
    for (const [name, processInfo] of this.processes) {
      const statusIcon = processInfo.status === 'running' ? '🟢' : processInfo.status === 'restarting' ? '🟡' : '🔴';
      const uptime = this.formatUptime(new Date() - processInfo.startTime);
      const restarts = processInfo.restartCount;
      
      console.log(`${statusIcon} ${name.padEnd(30)} ${processInfo.status.padEnd(12)} ${uptime.padEnd(10)} ${restarts} restarts`);
    }
    
    console.log('─'.repeat(80));
    console.log('');
  }

  /**
   * Format uptime
   */
  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  /**
   * Stop all automation systems
   */
  stop() {
    console.log('🛑 Stopping all automation systems...');
    this.isRunning = false;
    
    for (const [name, processInfo] of this.processes) {
      console.log(`🛑 Stopping ${name}...`);
      if (!processInfo.process.killed) {
        processInfo.process.kill();
      }
    }
    
    console.log('✅ All automation systems stopped');
  }

  /**
   * Get status
   */
  getStatus() {
    const status = {
      isRunning: this.isRunning,
      systems: {},
      summary: {
        total: this.processes.size,
        running: 0,
        stopped: 0,
        restarting: 0
      }
    };
    
    for (const [name, processInfo] of this.processes) {
      status.systems[name] = {
        status: processInfo.status,
        uptime: new Date() - processInfo.startTime,
        restartCount: processInfo.restartCount
      };
      
      status.summary[processInfo.status]++;
    }
    
    return status;
  }
}

// Export the class
module.exports = AllAutomationStarter;

// Start all automation if this file is executed directly
if (require.main === module) {
  const starter = new AllAutomationStarter();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down all automation systems...');
    starter.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down all automation systems...');
    starter.stop();
    process.exit(0);
  });
  
  // Start all automation systems
  starter.start().catch(error => {
    console.error('❌ Failed to start all automation systems:', error);
    process.exit(1);
  });
} 