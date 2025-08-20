#!/usr/bin/env node

/**
 * PM2 Resurrect Hook
 * Handles PM2 process resurrection and recovery
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2ResurrectHook {
  constructor() {
    this.logDir = path.join(__dirname, '..', 'automation', 'logs');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    const logFile = path.join(this.logDir, 'pm2-resurrect.log');
    
    fs.appendFileSync(logFile, logMessage);
    console.log(`[${level}] ${message}`);
  }

  async checkPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      return {
        total: processes.length,
        running: processes.filter(p => p.pm2_env.status === 'online').length,
        stopped: processes.filter(p => p.pm2_env.status === 'stopped').length,
        errored: processes.filter(p => p.pm2_env.status === 'errored').length,
        processes: processes
      };
    } catch (error) {
      this.log(`Failed to check PM2 status: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async resurrectProcesses() {
    this.log('Starting PM2 process resurrection...');
    
    try {
      // Check if PM2 is running
      const status = await this.checkPM2Status();
      if (!status) {
        this.log('PM2 is not accessible', 'ERROR');
        return false;
      }

      this.log(`Found ${status.total} processes: ${status.running} running, ${status.stopped} stopped, ${status.errored} errored`);

      if (status.total === 0) {
        this.log('No processes to resurrect', 'WARN');
        return true;
      }

      // Attempt to resurrect all processes
      execSync('pm2 resurrect', { stdio: 'inherit' });
      this.log('PM2 resurrect command executed');

      // Wait a moment for processes to start
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Check status after resurrection
      const newStatus = await this.checkPM2Status();
      if (newStatus) {
        this.log(`After resurrection: ${newStatus.total} processes, ${newStatus.running} running`);
        
        if (newStatus.running > status.running) {
          this.log(`Successfully resurrected ${newStatus.running - status.running} processes`, 'SUCCESS');
        } else {
          this.log('No additional processes were resurrected', 'WARN');
        }
      }

      return true;
    } catch (error) {
      this.log(`Failed to resurrect processes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async startSpecificProcesses(processNames) {
    this.log(`Starting specific processes: ${processNames.join(', ')}`);
    
    try {
      for (const processName of processNames) {
        try {
          execSync(`pm2 start ${processName}`, { stdio: 'inherit' });
          this.log(`Started process: ${processName}`, 'SUCCESS');
        } catch (error) {
          this.log(`Failed to start ${processName}: ${error.message}`, 'ERROR');
        }
      }
      return true;
    } catch (error) {
      this.log(`Error starting specific processes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async restartFailedProcesses() {
    this.log('Checking for failed processes...');
    
    try {
      const status = await this.checkPM2Status();
      if (!status) return false;

      const failedProcesses = status.processes.filter(p => 
        p.pm2_env.status === 'errored' || p.pm2_env.status === 'stopped'
      );

      if (failedProcesses.length === 0) {
        this.log('No failed processes found');
        return true;
      }

      this.log(`Found ${failedProcesses.length} failed processes`);

      for (const process of failedProcesses) {
        try {
          this.log(`Restarting failed process: ${process.name}`);
          execSync(`pm2 restart ${process.name}`, { stdio: 'inherit' });
          this.log(`Restarted: ${process.name}`, 'SUCCESS');
        } catch (error) {
          this.log(`Failed to restart ${process.name}: ${error.message}`, 'ERROR');
        }
      }

      return true;
    } catch (error) {
      this.log(`Error restarting failed processes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async cleanupOrphanedProcesses() {
    this.log('Cleaning up orphaned processes...');
    
    try {
      // Get list of processes that should be running
      const ecosystemFiles = this.findEcosystemFiles();
      const expectedProcesses = this.getExpectedProcesses(ecosystemFiles);
      
      const status = await this.checkPM2Status();
      if (!status) return false;

      const orphanedProcesses = status.processes.filter(p => 
        !expectedProcesses.includes(p.name)
      );

      if (orphanedProcesses.length === 0) {
        this.log('No orphaned processes found');
        return true;
      }

      this.log(`Found ${orphanedProcesses.length} orphaned processes`);

      for (const process of orphanedProcesses) {
        try {
          this.log(`Removing orphaned process: ${process.name}`);
          execSync(`pm2 delete ${process.name}`, { stdio: 'inherit' });
          this.log(`Removed: ${process.name}`, 'SUCCESS');
        } catch (error) {
          this.log(`Failed to remove ${process.name}: ${error.message}`, 'ERROR');
        }
      }

      return true;
    } catch (error) {
      this.log(`Error cleaning up orphaned processes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  findEcosystemFiles() {
    try {
      const automationDir = path.join(__dirname, '..', 'automation');
      return fs.readdirSync(automationDir)
        .filter(file => file.startsWith('ecosystem') && file.endsWith('.cjs'))
        .map(file => path.join(automationDir, file));
    } catch (error) {
      this.log(`Error finding ecosystem files: ${error.message}`, 'ERROR');
      return [];
    }
  }

  getExpectedProcesses(ecosystemFiles) {
    const expectedProcesses = [];
    
    for (const file of ecosystemFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const appMatches = content.match(/name:\s*['"`]([^'"`]+)['"`]/g);
        
        if (appMatches) {
          appMatches.forEach(match => {
            const processName = match.match(/name:\s*['"`]([^'"`]+)['"`]/)[1];
            expectedProcesses.push(processName);
          });
        }
      } catch (error) {
        this.log(`Error reading ecosystem file ${file}: ${error.message}`, 'WARN');
      }
    }
    
    return expectedProcesses;
  }

  async generateResurrectReport() {
    this.log('Generating resurrection report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      status: await this.checkPM2Status(),
      ecosystemFiles: this.findEcosystemFiles().map(f => path.basename(f)),
      expectedProcesses: this.getExpectedProcesses(this.findEcosystemFiles()),
      recommendations: []
    };

    if (report.status) {
      if (report.status.errored > 0) {
        report.recommendations.push('Check logs for errored processes');
      }
      
      if (report.status.stopped > 0) {
        report.recommendations.push('Review stopped processes and restart if needed');
      }
      
      if (report.status.running === 0) {
        report.recommendations.push('No processes are running - check PM2 installation');
      }
    }

    const reportFile = path.join(this.logDir, 'resurrect-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to: ${reportFile}`);
    return report;
  }
}

// CLI execution
async function main() {
  const hook = new PM2ResurrectHook();
  const command = process.argv[2] || 'resurrect';

  try {
    switch (command) {
      case 'resurrect':
        await hook.resurrectProcesses();
        break;
        
      case 'restart-failed':
        await hook.restartFailedProcesses();
        break;
        
      case 'cleanup':
        await hook.cleanupOrphanedProcesses();
        break;
        
      case 'start':
        const processNames = process.argv.slice(3);
        if (processNames.length === 0) {
          console.log('Please specify process names to start');
          process.exit(1);
        }
        await hook.startSpecificProcesses(processNames);
        break;
        
      case 'status':
        const status = await hook.checkPM2Status();
        console.log(JSON.stringify(status, null, 2));
        break;
        
      case 'report':
        await hook.generateResurrectReport();
        break;
        
      case 'help':
      default:
        console.log('PM2 Resurrect Hook');
        console.log('==================');
        console.log('');
        console.log('Usage:');
        console.log('  node pm2-resurrect-hook.cjs resurrect      - Resurrect all processes');
        console.log('  node pm2-resurrect-hook.cjs restart-failed - Restart failed processes');
        console.log('  node pm2-resurrect-hook.cjs cleanup        - Clean up orphaned processes');
        console.log('  node pm2-resurrect-hook.cjs start <names>  - Start specific processes');
        console.log('  node pm2-resurrect-hook.cjs status         - Show PM2 status');
        console.log('  node pm2-resurrect-hook.cjs report         - Generate resurrection report');
        console.log('  node pm2-resurrect-hook.cjs help           - Show this help');
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2ResurrectHook;