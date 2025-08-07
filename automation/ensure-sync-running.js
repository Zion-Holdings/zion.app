const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');

// Batch processing for optimized file operations
const writeBatch = {
  queue: [],
  maxSize: 100,
  flushInterval: 5000,
  
  add(filePath, content) {
    this.queue.push({ filePath, content, timestamp: Date.now() });
    if (this.queue.length >= this.maxSize) {
      this.flush();
    }
  },
  
  flush() {
    if (this.queue.length === 0) return;
    
    this.queue.forEach(item => {
      try {
        fs.writeFileSync(item.filePath, item.content);
      } catch (error) {
        console.error(`Error writing file ${item.filePath}:`, error.message);
      }
    });
    
    this.queue = [];
  }
};

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.value;
    }
    return null;
  },
  
  setCached(key, value) {
    this.cache.set(key, { value, timestamp: Date.now() });
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

class SyncEnsurance {
  constructor() {
    this.id = 'sync-ensurance';
    this.version = '2.0';
    this.status = 'initializing';
    this.processes = [
      {
        name: 'git-sync-automation.js',
        description: 'Basic git sync automation',
        priority: 'high'
      },
      {
        name: 'high-frequency-git-sync.js',
        description: 'High-frequency git sync',
        priority: 'high'
      },
      {
        name: 'comprehensive-sync-orchestrator.js',
        description: 'Comprehensive sync orchestrator',
        priority: 'medium'
      },
      {
        name: 'master-sync-controller.js',
        description: 'Master sync controller',
        priority: 'medium'
      }
    ];
    this.setupDirectories();
  }

  setupDirectories() {
    const directories = [
      'sync-ensurance-logs',
      'sync-ensurance-status',
      'sync-ensurance-reports'
    ];
    
    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      console.log('🔄 Initializing Sync Ensurance...');
      this.status = 'running';
      console.log('✅ Sync Ensurance initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Sync Ensurance: ', error.message);
      this.status = 'error';
    }
  }

  async start() {
    console.log('👀 Starting sync process monitoring...');
    
    // Start monitoring
    this.startMonitoring();
  }

  async checkProcessHealth(processName) {
    try {
      const pidPath = path.join(__dirname, 'pids', `${processName}.pid`);
      
      if (!fs.existsSync(pidPath)) {
        console.log(`❌ PID file not found for ${processName}`);
        return false;
      }
      
      const pid = fs.readFileSync(pidPath, 'utf8').trim();
      
      try {
        execSync(`ps -p ${pid}`, { stdio: 'pipe' });
        console.log(`✅ Process ${processName} (PID: ${pid}) is running`);
        return true;
      } catch (error) {
        console.log(`❌ Process ${processName} (PID: ${pid}) is not running`);
        return false;
      }
    } catch (error) {
      console.error(`❌ Error checking process health for ${processName}:`, error.message);
      return false;
    }
  }

  async restartProcess(processName) {
    try {
      console.log(`🔄 Restarting ${processName}...`);
      
      // Kill existing process if running
      await this.killExistingProcess(processName);
      
      // Start new process
      await this.startNewProcess(processName);
      
      console.log(`✅ Successfully restarted ${processName}`);
    } catch (error) {
      console.error(`❌ Failed to restart ${processName}:`, error.message);
      await this.handleError('restart', error);
    }
  }

  async killExistingProcess(processName) {
    try {
      const pidPath = path.join(__dirname, 'pids', `${processName}.pid`);
      
      if (fs.existsSync(pidPath)) {
        const pid = fs.readFileSync(pidPath, 'utf8').trim();
        
        try {
          execSync(`kill ${pid}`, { stdio: 'pipe' });
          console.log(`🛑 Killed process ${processName} (PID: ${pid})`);
        } catch (error) {
          // Process might already be dead
          console.log(`ℹ️ Process ${processName} (PID: ${pid}) was already stopped`);
        }
        
        // Remove PID file
        fs.unlinkSync(pidPath);
      }
    } catch (error) {
      console.error(`❌ Error killing process ${processName}:`, error.message);
    }
  }

  async startNewProcess(processName) {
    try {
      const scriptPath = path.join(__dirname, processName);
      
      if (!fs.existsSync(scriptPath)) {
        throw new Error(`Script ${processName} not found`);
      }
      
      const child = spawn('node', [scriptPath], {
        detached: true,
        stdio: 'ignore',
        cwd: path.resolve(__dirname, '..')
      });
      
      // Write PID to file
      const pidPath = path.join(__dirname, 'pids', `${processName}.pid`);
      fs.writeFileSync(pidPath, child.pid.toString());
      
      console.log(`🚀 Started ${processName} with PID: ${child.pid}`);
      
      child.unref();
    } catch (error) {
      console.error(`❌ Error starting process ${processName}:`, error.message);
      throw error;
    }
  }

  async handleError(operation, error) {
    console.error(`❌ Error in ${operation}:`, error.message);
    
    const errorLog = {
      timestamp: new Date().toISOString(),
      operation,
      error: error.message,
      stack: error.stack
    };
    
    const errorPath = path.join(__dirname, 'sync-ensurance-logs', `error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));
  }

  startMonitoring() {
    // Set up monitoring (every 10 seconds)
    setInterval(async () => {
      console.log('🔍 Checking sync processes health...');
      
      for (const process of this.processes) {
        const isHealthy = await this.checkProcessHealth(process.name);
        
        if (!isHealthy) {
          console.log(`⚠️ Process ${process.name} is not healthy, attempting restart...`);
          await this.restartProcess(process.name);
        }
      }
      
      console.log('✅ Sync processes health check completed');
    }, 10000);
  }

  generateReport() {
    const statusPath = path.join(__dirname, 'sync-ensurance-status', 'current-status.json');
    
    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      version: this.version,
      uptime: process.uptime(),
      processes: this.processes.map(process => ({
        name: process.name,
        description: process.description,
        priority: process.priority
      }))
    };
    
    fs.writeFileSync(statusPath, JSON.stringify(report, null, 2));
    console.log('📊 Generated sync ensurance report');
  }

  async shutdown() {
    console.log('🛑 Shutting down Sync Ensurance...');
    this.status = 'stopped';
    this.generateReport();
    console.log('✅ Sync Ensurance shutdown complete');
  }
}

// Signal handlers
process.on('SIGTERM', async () => {
  console.log('🛑 Received SIGTERM, shutting down...');
  await ensurance.shutdown();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('🛑 Received SIGINT, shutting down...');
  await ensurance.shutdown();
  process.exit(0);
});

// Initialize and start
const ensurance = new SyncEnsurance();

ensurance.initialize().then(() => {
  ensurance.start();
}).catch(error => {
  console.error('❌ Failed to start Sync Ensurance: ', error.message);
  process.exit(1);
});
