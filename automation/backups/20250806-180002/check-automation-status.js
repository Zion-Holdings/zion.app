#!/usr/bin/env node

const fs = require(($2););.promises;
const path = require(('path'););
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class AutomationStatusChecker {
  constructor() {
    this.automationSystems = new Map();
    this.statusData = new Map();
    this.isRunning = false;
    
    // Automation systems to monitor
    this.systemTypes = [
      'ultimate-automation-factory',
      'intelligent-automation-orchestrator',
      'continuous-improvement',
      'enhanced-diversification',
      'intelligent-agent-orchestrator',
      'master-automation-coordinator'
    ];
  }

  async initialize() {
    console.log('📊 Initializing Automation Status Checker...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Initialize status monitoring
      await this.initializeStatusMonitoring();
      
      this.isRunning = true;
      console.log('✅ Automation Status Checker initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Automation Status Checker: ', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'status-data',
      'health-logs',
      'performance-logs',
      'system-logs',
      'reports'
    ];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, dir);
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }
    }
  }

  async initializeStatusMonitoring() {
    console.log('📊 Initializing status monitoring...');
    
    for (const systemType of this.systemTypes) {
      await this.initializeSystemMonitoring(systemType);
    }
  }

  async initializeSystemMonitoring(systemType) {
    console.log(`📊 Initializing monitoring for ${systemType}...`);
    
    const system = {
      type: systemType,
      isActive: false,
      lastCheck: null,
      health: 'unknown',
      performance: 0,
      uptime: 0,
      errorCount: 0,
      successCount: 0
    };
    
    this.automationSystems.set(systemType, system);
  }

  async checkAllSystems() {
    console.log('🔍 Checking all automation systems...');
    
    const results = [];
    
    for (const systemType of this.systemTypes) {
      try {
        const status = await this.checkSystemStatus(systemType);
        results.push(status);
      } catch (error) {
        console.error(`❌ Error checking ${systemType}:`, error.message);
        results.push({
          type: systemType,
          isActive: false,
          health: 'error',
          error: error.message
        });
      }
    }
    
    return results;
  }

  async checkSystemStatus(systemType) {
    const system = this.automationSystems.get(systemType);
    if (!system) {
      return { type: systemType, isActive: false, health: 'unknown' };
    }
    
    try {
      // Check if process is running
      const isRunning = await this.checkProcessStatus(systemType);
      
      // Update system status
      system.isActive = isRunning;
      system.lastCheck = new Date();
      
      if (isRunning) {
        system.health = 'healthy';
        system.successCount++;
      } else {
        system.health = 'inactive';
      }
      
      return {
        type: systemType,
        isActive: isRunning,
        health: system.health,
        lastCheck: system.lastCheck,
        successCount: system.successCount,
        errorCount: system.errorCount
      };
    } catch (error) {
      system.errorCount++;
      system.health = 'error';
      throw error;
    }
  }

  async checkProcessStatus(systemType) {
    try {
      // Check if there's a PID file for this system
      const pidFile = path.join(__dirname, 'pids', `${systemType}.pid`);
      
      try {
        const pid = await fs.readFile(pidFile, 'utf8');
        const trimmedPid = pid.trim();
        
        // Check if process is actually running
        const { stdout } = await execAsync(`ps -p ${trimmedPid} -o pid=`);
        return stdout.trim() === trimmedPid;
      } catch (error) {
        // PID file doesn't exist or process not running
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async generateStatusReport() {
    console.log('📋 Generating status report...');
    
    const results = await this.checkAllSystems();
    
    const summary = {
      timestamp: new Date().toISOString(),
      totalSystems: this.systemTypes.length,
      activeSystems: results.filter(r => r.isActive).length,
      inactiveSystems: results.filter(r => !r.isActive).length,
      healthySystems: results.filter(r => r.health === 'healthy').length,
      systems: results
    };
    
    // Save report
    const reportPath = path.join(__dirname, 'reports', `status-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(summary, null, 2));
    
    return summary;
  }

  displayStatusSummary(summary) {
    console.log('\n📊 AUTOMATION STATUS SUMMARY');
    console.log('=' .repeat(50));
    console.log(`Timestamp: ${summary.timestamp}`);
    console.log(`Total Systems: ${summary.totalSystems}`);
    console.log(`Active Systems: ${summary.activeSystems}`);
    console.log(`Inactive Systems: ${summary.inactiveSystems}`);
    console.log(`Healthy Systems: ${summary.healthySystems}`);
    console.log('\nSystem Details: ');
    console.log('-'.repeat(50));
    
    summary.systems.forEach(system => {
      const status = system.isActive ? '🟢 ACTIVE' : '🔴 INACTIVE';
      const health = system.health === 'healthy' ? '✅' : system.health === 'error' ? '❌' : '⚠️';
      console.log(`${health} ${system.type}: ${status}`);
    });
    
    console.log('=' .repeat(50));
  }

  async getSystemStatus() {
    if (!this.isRunning) {
      await this.initialize();
    }
    
    const summary = await this.generateStatusReport();
    this.displayStatusSummary(summary);
    
    return summary;
  }

  async saveSystemState() {
    const state = {
      timestamp: new Date().toISOString(),
      systems: Array.from(this.automationSystems.entries())
    };
    
    const statePath = path.join(__dirname, 'status-data', 'system-state.json');
    await fs.writeFile(statePath, JSON.stringify(state, null, 2));
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Save to log file
    const logPath = path.join(__dirname, 'system-logs', `automation-status-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFile(logPath, logMessage + '\n').catch(console.error);
  }
}

async function main() {
  const checker = new AutomationStatusChecker();
  
  try {
    await checker.getSystemStatus();
    await checker.saveSystemState();
  } catch (error) {
    console.error('❌ Error in main: ', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutomationStatusChecker;