#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');

class SyncEnsurance {
  constructor() {
    this.id = 'sync-ensurance';
    this.version = '1.0.0';
    this.status = 'running';
    this.checkInterval = 30000; // 30 seconds
    this.processes = new Map();
    this.config = {
      syncScripts: [
        'master-sync-controller.js',
        'comprehensive-sync-orchestrator.js',
        'high-frequency-git-sync.js'
      ],
      maxRestartAttempts: 5,
      restartDelay: 10000, // 10 seconds
      healthCheckInterval: 60000 // 1 minute
    };
  }

  async initialize() {
    console.log('🚀 Initializing Sync Ensurance...');
    
    try {
      // Start all sync processes
      this.startAllSyncProcesses();
      
      // Start monitoring
      this.startMonitoring();
      this.startHealthChecks();
      
      this.status = 'running';
      console.log('✅ Sync Ensurance initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing Sync Ensurance:', error);
      this.status = 'error';
      throw error;
    }
  }

  startAllSyncProcesses() {
    console.log('⚡ Starting all sync processes...');
    
    this.config.syncScripts.forEach(script => {
      this.startSyncProcess(script);
    });
  }

  startSyncProcess(scriptName) {
    console.log(`🔄 Starting ${scriptName}...`);
    
    const scriptPath = path.join(__dirname, scriptName);
    
    if (!fs.existsSync(scriptPath)) {
      console.warn(`⚠️  Script not found: ${scriptPath}`);
      return;
    }
    
    const process = spawn('node', [scriptPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      detached: false
    });
    
    this.processes.set(scriptName, {
      process,
      scriptName,
      startTime: new Date().toISOString(),
      restartCount: 0,
      lastHealthCheck: new Date().toISOString()
    });
    
    this.setupProcessHandlers(scriptName, process);
    
    console.log(`✅ ${scriptName} started with PID: ${process.pid}`);
  }

  setupProcessHandlers(scriptName, process) {
    process.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[${scriptName}] ${output.trim()}`);
    });
    
    process.stderr.on('data', (data) => {
      const output = data.toString();
      console.error(`[${scriptName} ERROR] ${output.trim()}`);
    });
    
    process.on('close', (code) => {
      console.log(`[${scriptName}] Process exited with code ${code}`);
      this.handleProcessExit(scriptName, code);
    });
    
    process.on('error', (error) => {
      console.error(`[${scriptName}] Process error:`, error);
      this.handleProcessError(scriptName, error);
    });
  }

  handleProcessExit(scriptName, code) {
    const processInfo = this.processes.get(scriptName);
    if (processInfo) {
      console.log(`🔄 ${scriptName} exited with code ${code}, restarting...`);
      
      if (processInfo.restartCount < this.config.maxRestartAttempts) {
        setTimeout(() => {
          this.restartProcess(scriptName);
        }, this.config.restartDelay);
      } else {
        console.error(`❌ ${scriptName} exceeded max restart attempts`);
      }
    }
  }

  handleProcessError(scriptName, error) {
    console.error(`❌ ${scriptName} process error:`, error.message);
    this.handleProcessExit(scriptName, 1);
  }

  restartProcess(scriptName) {
    const processInfo = this.processes.get(scriptName);
    if (processInfo) {
      // Kill existing process if still running
      if (processInfo.process && !processInfo.process.killed) {
        processInfo.process.kill('SIGTERM');
      }
      
      // Increment restart count
      processInfo.restartCount++;
      
      // Start new process
      this.startSyncProcess(scriptName);
      
      console.log(`✅ ${scriptName} restarted (attempt ${processInfo.restartCount})`);
    }
  }

  startMonitoring() {
    console.log('👀 Starting monitoring...');
    
    setInterval(() => {
      this.checkProcessHealth();
    }, this.checkInterval);
  }

  startHealthChecks() {
    console.log('🏥 Starting health checks...');
    
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  checkProcessHealth() {
    for (const [scriptName, processInfo] of this.processes) {
      if (processInfo.process && processInfo.process.killed) {
        console.log(`⚠️  ${scriptName} process is dead, restarting...`);
        this.restartProcess(scriptName);
      }
    }
  }

  performHealthCheck() {
    const health = {
      timestamp: new Date().toISOString(),
      status: this.status,
      processes: Object.fromEntries(
        Array.from(this.processes.entries()).map(([scriptName, processInfo]) => [
          scriptName,
          {
            pid: processInfo.process ? processInfo.process.pid : null,
            startTime: processInfo.startTime,
            restartCount: processInfo.restartCount,
            lastHealthCheck: processInfo.lastHealthCheck,
            isRunning: processInfo.process && !processInfo.process.killed
          }
        ])
      ),
      memory: process.memoryUsage(),
      uptime: process.uptime()
    };
    
    const healthPath = path.join(__dirname, 'sync-ensurance-health.json');
    fs.writeFileSync(healthPath, JSON.stringify(health, null, 2));
    
    console.log('📊 Generated sync ensurance health report');
  }

  getStatus() {
    return {
      id: this.id,
      version: this.version,
      status: this.status,
      processes: this.processes.size,
      timestamp: new Date().toISOString()
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down Sync Ensurance...');
    
    // Stop all processes
    for (const [scriptName, processInfo] of this.processes) {
      if (processInfo.process && !processInfo.process.killed) {
        processInfo.process.kill('SIGTERM');
        console.log(`🛑 Stopped ${scriptName}`);
      }
    }
    
    this.status = 'stopped';
    console.log('✅ Sync Ensurance shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const ensurance = new SyncEnsurance();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await ensurance.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await ensurance.shutdown();
    process.exit(0);
  });
  
  ensurance.initialize().catch(error => {
    console.error('❌ Sync Ensurance initialization failed:', error);
    process.exit(1);
  });
}

module.exports = SyncEnsurance;
