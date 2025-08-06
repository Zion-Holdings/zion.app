
// Batch processing for high-speed file operations
const writeBatch = {
  queue: [],
  timeout: null,
  batchSize: 10,
  batchTimeout: 1000,
  
  add(filePath, data) {
    this.queue.push({ filePath, data });
    
    if (this.queue.length >= this.batchSize) {
      this.flush();
    } else if (!this.timeout) {
      this.timeout = setTimeout(() => this.flush(), this.batchTimeout);
    }
  },
  
  async flush() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    
    if (this.queue.length === 0) return;
    
    const batch = [...this.queue];
    this.queue = [];
    
    await Promise.all(batch.map(({ filePath, data }) => 
      fs.writeFile(filePath, data).catch(console.error)
    ));
  }
};

// Replace fs.writeFile with batched version
const originalWriteFile = fs.writeFile;
fs.writeFile = function(filePath, data, options) {
  writeBatch.add(filePath, data);
  return Promise.resolve();
};

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1; // 10x faster in high-speed mode

function getOptimizedInterval(baseInterval) {
  return Math.floor(baseInterval * SPEED_MULTIPLIER);
}
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');
const { v4: uuidv4 } = require('uuid');

class SyncAutomationLauncher {
  constructor() {
    this.id = 'sync-automation-launcher';
    this.version = '1.0.0';
    this.status = 'initializing';
    this.processes = new Map();
    this.config = {
      syncSystems: [
        {
          name: 'master-sync-controller',
          script: 'master-sync-controller.js',
          priority: 'critical',
          autoRestart: true,
          maxRestarts: 10
        },
        {
          name: 'comprehensive-sync-orchestrator',
          script: 'comprehensive-sync-orchestrator.js',
          priority: 'high',
          autoRestart: true,
          maxRestarts: 5
        },
        {
          name: 'frontend-sync-orchestrator',
          script: 'frontend-sync-orchestrator.js',
          priority: 'high',
          autoRestart: true,
          maxRestarts: 5
        },
        {
          name: 'ensure-sync-running',
          script: 'ensure-sync-running.js',
          priority: 'critical',
          autoRestart: true,
          maxRestarts: 15
        }
      ],
      healthCheckInterval: 200, // 30 seconds
      restartDelay: 200, // 5 seconds
      maxConcurrentProcesses: 4,
      logLevel: 'info'
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'sync-logs',
      'sync-status',
      'sync-reports',
      'sync-pids'
    ];
    
    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log('🚀 Initializing Sync Automation Launcher...');
    
    try {
      // Start all sync systems
      await this.startAllSyncSystems();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start process management
      this.startProcessManagement();
      
      this.status = 'running';
      console.log('✅ Sync Automation Launcher initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing Sync Automation Launcher:', error);
      this.status = 'error';
      throw error;
    }
  }

  async startAllSyncSystems() {
    console.log('⚡ Starting all sync systems...');
    
    // Sort systems by priority
    const sortedSystems = this.config.syncSystems.sort((a, b) => {
      const priorities = { critical: 3, high: 2, normal: 1, low: 0 };
      return priorities[b.priority] - priorities[a.priority];
    });
    
    for (const system of sortedSystems) {
      await this.startSyncSystem(system);
      
      // Small delay between starts to avoid overwhelming the system
      await this.sleep(300);
    }
    
    console.log(`✅ Started ${this.processes.size} sync systems`);
  }

  async startSyncSystem(system) {
    console.log(`🔄 Starting ${system.name}...`);
    
    const scriptPath = path.join(__dirname, system.script);
    
    if (!fs.existsSync(scriptPath)) {
      console.warn(`⚠️ Script not found: ${scriptPath}`);
      return;
    }
    
    const process = spawn('node', [scriptPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      detached: false,
      env: {
        ...process.env,
        NODE_ENV: 'production'
      }
    });
    
    this.processes.set(system.name, {
      process,
      system,
      startTime: new Date().toISOString(),
      restartCount: 0,
      lastHealthCheck: new Date().toISOString(),
      status: 'running'
    });
    
    this.setupProcessHandlers(system.name, process);
    
    console.log(`✅ ${system.name} started with PID: ${process.pid}`);
  }

  setupProcessHandlers(systemName, process) {
    process.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[${systemName}] ${output.trim()}`);
    });
    
    process.stderr.on('data', (data) => {
      const output = data.toString();
      console.error(`[${systemName} ERROR] ${output.trim()}`);
    });
    
    process.on('close', (code) => {
      console.log(`[${systemName}] Process exited with code ${code}`);
      this.handleProcessExit(systemName, code);
    });
    
    process.on('error', (error) => {
      console.error(`[${systemName}] Process error:`, error);
      this.handleProcessError(systemName, error);
    });
  }

  handleProcessExit(systemName, code) {
    const processInfo = this.processes.get(systemName);
    if (!processInfo) return;
    
    processInfo.status = 'stopped';
    processInfo.exitCode = code;
    
    console.log(`[${systemName}] Process stopped with code ${code}`);
    
    // Auto-restart if enabled
    if (processInfo.system.autoRestart && processInfo.restartCount < processInfo.system.maxRestarts) {
      console.log(`🔄 Auto-restarting ${systemName}...`);
      setTimeout(() => {
        this.restartProcess(systemName);
      }, this.config.restartDelay);
    } else {
      console.error(`❌ ${systemName} exceeded max restart attempts`);
    }
  }

  handleProcessError(systemName, error) {
    console.error(`[${systemName}] Process error:`, error);
    
    const processInfo = this.processes.get(systemName);
    if (processInfo) {
      processInfo.status = 'error';
      processInfo.lastError = error.message;
    }
  }

  async restartProcess(systemName) {
    const processInfo = this.processes.get(systemName);
    if (!processInfo) return;
    
    console.log(`🔄 Restarting ${systemName}...`);
    
    // Stop existing process
    if (processInfo.process && !processInfo.process.killed) {
      processInfo.process.kill();
    }
    
    // Increment restart count
    processInfo.restartCount++;
    
    // Start new process
    await this.startSyncSystem(processInfo.system);
  }

  startHealthMonitoring() {
    console.log('🏥 Starting health monitoring...');
    
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    console.log('✅ Health monitoring started');
  }

  startProcessManagement() {
    console.log('⚙️ Starting process management...');
    
    setInterval(() => {
      this.manageProcesses();
    }, 3000); // Every 10 seconds
    
    console.log('✅ Process management started');
  }

  manageProcesses() {
    for (const [systemName, processInfo] of this.processes) {
      // Check if process is still running
      if (processInfo.process && processInfo.process.killed) {
        console.warn(`⚠️ Process ${systemName} was killed, attempting restart...`);
        this.handleProcessExit(systemName, 1);
      }
      
      // Check memory usage
      if (processInfo.process) {
        try {
          const memoryUsage = processInfo.process.memoryUsage();
          if (memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
            console.warn(`⚠️ High memory usage for ${systemName}: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
          }
        } catch (error) {
          // Process might not be accessible
        }
      }
    }
  }

  performHealthCheck() {
    console.log('🏥 Performing health check...');
    
    const health = {
      launcherId: this.id,
      version: this.version,
      status: this.status,
      timestamp: new Date().toISOString(),
      processes: {}
    };
    
    for (const [systemName, processInfo] of this.processes) {
      health.processes[systemName] = {
        status: processInfo.status,
        restartCount: processInfo.restartCount,
        startTime: processInfo.startTime,
        lastHealthCheck: processInfo.lastHealthCheck,
        exitCode: processInfo.exitCode,
        lastError: processInfo.lastError
      };
    }
    
    // Save health report
    const healthPath = path.join(__dirname, 'sync-status', 'launcher-health.json');
    fs.writeFileSync(healthPath, JSON.stringify(health, null, 2));
    
    console.log('✅ Health check completed');
  }

  getStatus() {
    const status = {
      id: this.id,
      version: this.version,
      status: this.status,
      processes: {}
    };
    
    for (const [systemName, processInfo] of this.processes) {
      status.processes[systemName] = {
        status: processInfo.status,
        restartCount: processInfo.restartCount,
        startTime: processInfo.startTime,
        lastHealthCheck: processInfo.lastHealthCheck
      };
    }
    
    return status;
  }

  async shutdown() {
    console.log('🛑 Shutting down Sync Automation Launcher...');
    
    this.status = 'stopping';
    
    // Stop all processes
    for (const [systemName, processInfo] of this.processes) {
      console.log(`🛑 Stopping ${systemName}...`);
      
      if (processInfo.process && !processInfo.process.killed) {
        processInfo.process.kill('SIGTERM');
        
        // Wait a bit for graceful shutdown
        await this.sleep(200);
        
        // Force kill if still running
        if (!processInfo.process.killed) {
          processInfo.process.kill('SIGKILL');
        }
      }
    }
    
    this.status = 'stopped';
    console.log('✅ Sync Automation Launcher shutdown complete');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export the class
module.exports = SyncAutomationLauncher;

// If running directly, start the launcher
if (require.main === module) {
  const launcher = new SyncAutomationLauncher();
  
  launcher.initialize().then(() => {
    console.log('🚀 Sync Automation Launcher started successfully');
    
    // Log status every 5 minutes
    setInterval(() => {
      const status = launcher.getStatus();
      console.log('📊 Launcher Status:', JSON.stringify(status, null, 2));
    }, 200);
    
  }).catch((error) => {
    console.error('❌ Failed to start Sync Automation Launcher:', error);
    process.exit(1);
  });
  
  // Handle shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await launcher.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await launcher.shutdown();
    process.exit(0);
  });
  
  // Handle uncaught exceptions
  process.on('uncaughtException', async (error) => {
    console.error('❌ Uncaught Exception:', error);
    await launcher.shutdown();
    process.exit(1);
  });
  
  process.on('unhandledRejection', async (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    await launcher.shutdown();
    process.exit(1);
  });
}
