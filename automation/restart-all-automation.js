#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class AutomationRestarter {
  constructor() {
    this.automationSystems = [
      'ultimate-automation-factory-system',
      'intelligent-automation-orchestrator',
      'continuous-automation-improvement-system',
      'master-automation-coordinator',
      'enhanced-diversification-orchestrator',
      'intelligent-agent-orchestrator'
    ];
    
    this.isRunning = false;
    this.restartLogs = [];
  }

  async initialize() {
    console.log('🔄 Initializing Automation Restarter...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      this.isRunning = true;
      console.log('✅ Automation Restarter initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Automation Restarter:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'restart-logs',
      'backup-scripts',
      'restart-reports'
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

  async restartAllSystems() {
    console.log('🔄 Restarting all automation systems...');
    
    const results = [];
    
    for (const system of this.automationSystems) {
      try {
        const result = await this.restartSystem(system);
        results.push(result);
      } catch (error) {
        console.error(`❌ Failed to restart ${system}:`, error);
        results.push({
          system,
          success: false,
          error: error.message
        });
      }
    }
    
    // Generate restart report
    await this.generateRestartReport(results);
    
    console.log('✅ All automation systems restart completed');
    return results;
  }

  async restartSystem(systemName) {
    console.log(`🔄 Restarting ${systemName}...`);
    
    try {
      // Stop the system if running
      await this.stopSystem(systemName);
      
      // Wait a moment
      await this.sleep(2000);
      
      // Start the system
      await this.startSystem(systemName);
      
      // Wait for system to initialize
      await this.sleep(5000);
      
      // Verify system is running
      const isRunning = await this.verifySystemRunning(systemName);
      
      const result = {
        system: systemName,
        success: isRunning,
        timestamp: new Date().toISOString(),
        error: null
      };
      
      if (isRunning) {
        console.log(`✅ ${systemName} restarted successfully`);
      } else {
        console.log(`❌ ${systemName} failed to restart`);
        result.success = false;
        result.error = 'System failed to start';
      }
      
      return result;
      
    } catch (error) {
      console.error(`❌ Error restarting ${systemName}:`, error);
      return {
        system: systemName,
        success: false,
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async stopSystem(systemName) {
    console.log(`🛑 Stopping ${systemName}...`);
    
    try {
      // Kill any existing processes
      const { stdout } = await execAsync(`pkill -f "${systemName}"`);
      console.log(`✅ Stopped ${systemName}`);
    } catch (error) {
      // Process might not be running, which is fine
      console.log(`ℹ️ ${systemName} was not running`);
    }
  }

  async startSystem(systemName) {
    console.log(`🚀 Starting ${systemName}...`);
    
    try {
      const scriptPath = path.join(__dirname, `${systemName}.js`);
      
      // Check if script exists
      await fs.access(scriptPath);
      
      // Start the system in background
      const child = spawn('node', [scriptPath], {
        detached: true,
        stdio: 'ignore'
      });
      
      child.unref();
      
      console.log(`✅ Started ${systemName} (PID: ${child.pid})`);
      
    } catch (error) {
      throw new Error(`Failed to start ${systemName}: ${error.message}`);
    }
  }

  async verifySystemRunning(systemName) {
    try {
      // Check if process is running
      const { stdout } = await execAsync(`ps aux | grep "${systemName}" | grep -v grep`);
      return stdout.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async generateRestartReport(results) {
    console.log('📊 Generating restart report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      totalSystems: this.automationSystems.length,
      successfulRestarts: 0,
      failedRestarts: 0,
      results: results
    };
    
    for (const result of results) {
      if (result.success) {
        report.successfulRestarts++;
      } else {
        report.failedRestarts++;
      }
    }
    
    // Save report
    const reportPath = path.join(__dirname, 'restart-reports', `restart-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    // Display summary
    this.displayRestartSummary(report);
  }

  displayRestartSummary(report) {
    console.log('\n🔄 RESTART SUMMARY');
    console.log('==================');
    console.log(`Total Systems: ${report.totalSystems}`);
    console.log(`Successful Restarts: ${report.successfulRestarts}`);
    console.log(`Failed Restarts: ${report.failedRestarts}`);
    console.log(`Success Rate: ${((report.successfulRestarts / report.totalSystems) * 100).toFixed(1)}%`);
    console.log('==================\n');
  }

  async logRestart(systemName, success, error = null) {
    const logEntry = {
      system: systemName,
      success,
      timestamp: new Date().toISOString(),
      error
    };
    
    this.restartLogs.push(logEntry);
    
    const logPath = path.join(__dirname, 'restart-logs', `restart-${Date.now()}.json`);
    await fs.writeFile(logPath, JSON.stringify(logEntry, null, 2));
  }
}

// Main execution
async function main() {
  const restarter = new AutomationRestarter();
  await restarter.initialize();
  
  // Restart all systems
  await restarter.restartAllSystems();
  
  console.log('✅ Automation restart completed');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutomationRestarter;


  async getStatus() {
    return {
      systemName: 'restart-all-automation',
      isRunning: this.isRunning,
      startTime: this.startTime,
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0
    };
  }

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down restart-all-automation gracefully...');
  if (this.isRunning) {
    this.isRunning = false;
  }
  process.exit(0);
});