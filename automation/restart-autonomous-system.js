const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutonomousSystemRestarter {
  constructor() {
    this.mainProcess = null;
    this.isRestarting = false;
  }

  async restartSystem() {
    if (this.isRestarting) {
      console.log('⚠️ System restart already in progress...');
      return;
    }

    console.log('🔄 Restarting Autonomous System...');
    this.isRestarting = true;

    try {
      // Stop current system
      await this.stopCurrentSystem();
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start new system
      await this.startNewSystem();
      
      console.log('✅ System restart completed successfully');
      
    } catch (error) {
      console.error('❌ Failed to restart system:', error);
      throw error;
    } finally {
      this.isRestarting = false;
    }
  }

  async stopCurrentSystem() {
    console.log('🛑 Stopping current system...');
    
    // Find and kill existing processes
    const processes = await this.findSystemProcesses();
    
    for (const process of processes) {
      try {
        process.kill('SIGTERM');
        console.log(`   Stopped process: ${process.pid}`);
      } catch (error) {
        console.error(`   Failed to stop process ${process.pid}:`, error.message);
      }
    }
    
    // Wait for processes to terminate
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  async findSystemProcesses() {
    // This is a simplified version - in production you'd use a proper process manager
    const processes = [];
    
    try {
      // Check if there's a PID file
      const pidFile = path.join(__dirname, 'data', 'system.pid');
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, 'utf8').trim();
        try {
          process.kill(pid, 0); // Check if process exists
          processes.push({ pid: parseInt(pid) });
        } catch (error) {
          // Process doesn't exist, remove PID file
          fs.unlinkSync(pidFile);
        }
      }
    } catch (error) {
      console.error('Error finding system processes:', error);
    }
    
    return processes;
  }

  async startNewSystem() {
    console.log('🚀 Starting new system...');
    
    const systemScript = path.join(__dirname, 'launch-enhanced-autonomous-system.js');
    
    this.mainProcess = spawn('node', [systemScript], {
      stdio: 'pipe',
      detached: false
    });
    
    // Save PID
    const pidFile = path.join(__dirname, 'data', 'system.pid');
    fs.writeFileSync(pidFile, this.mainProcess.pid.toString());
    
    // Handle process events
    this.mainProcess.on('exit', (code) => {
      console.log(`System process exited with code ${code}`);
      if (fs.existsSync(pidFile)) {
        fs.unlinkSync(pidFile);
      }
    });
    
    this.mainProcess.on('error', (error) => {
      console.error('System process error:', error);
    });
    
    // Wait for system to start
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('System startup timeout'));
      }, 30000);
      
      this.mainProcess.stdout.on('data', (data) => {
        const output = data.toString();
        console.log(output);
        
        if (output.includes('Enhanced Autonomous System started successfully')) {
          clearTimeout(timeout);
          resolve();
        }
      });
      
      this.mainProcess.stderr.on('data', (data) => {
        console.error('System stderr:', data.toString());
      });
    });
    
    console.log('✅ New system started successfully');
  }

  async checkSystemHealth() {
    console.log('🔍 Checking system health...');
    
    try {
      const statusChecker = require('./check-autonomous-status');
      const checker = new statusChecker();
      const status = checker.checkSystemStatus();
      
      const isHealthy = status.agents.status === 'ok' && 
                       status.jobs.status === 'ok' && 
                       status.system.status === 'healthy';
      
      console.log(`System health: ${isHealthy ? '✅ Healthy' : '❌ Unhealthy'}`);
      return isHealthy;
      
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  async performHealthCheckAndRestart() {
    console.log('🏥 Performing health check and restart if needed...');
    
    const isHealthy = await this.checkSystemHealth();
    
    if (!isHealthy) {
      console.log('⚠️ System is unhealthy, performing restart...');
      await this.restartSystem();
    } else {
      console.log('✅ System is healthy, no restart needed');
    }
  }
}

// Main execution
async function main() {
  const restarter = new AutonomousSystemRestarter();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'restart':
      await restarter.restartSystem();
      break;
    case 'health-check':
      await restarter.performHealthCheckAndRestart();
      break;
    default:
      console.log('Usage:');
      console.log('  node restart-autonomous-system.js restart');
      console.log('  node restart-autonomous-system.js health-check');
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutonomousSystemRestarter; 