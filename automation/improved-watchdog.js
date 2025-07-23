
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class ImprovedWatchdog {
  constructor() {
    this.processes = new Map();
    this.config = {
      checkInterval: 30000, // 30 seconds
      maxRestarts: 5,
      restartDelay: 5000, // 5 seconds
      logFile: path.join(__dirname, watchdog.log')
    };
    
    this.isRunning = false;
    this.checkInterval = null;
  }

  async initialize() {
    logger.info('🐕 Initializing Improved Watchdog System...');
    
    // Create log directory if it doesn't exist
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Load existing processes
    await this.loadExistingProcesses();
    
    logger.info('✅ Improved Watchdog System initialized');
  }

  async loadExistingProcesses() {
    const pidFile = path.join(__dirname, .watchdog.pid');
    
    if (fs.existsSync(pidFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(pidFile, utf8'));
        for (const [name, info] of Object.entries(data)) {
          if (this.isProcessRunning(info.pid)) {
            this.processes.set(name, {
              ...info,
              restarts: 0,
              lastCheck: Date.now()
            });
            logger.info(`📋 Loaded existing process: ${name} (PID: ${info.pid})`);
          }
        }
      } catch (error) {
        logger.warn('⚠️  Failed to load existing processes:', error.message);
      }
    }
  }

  isProcessRunning(pid) {
    try {
      process.kill(pid, 0);
      return true;
    } catch (error) {
      return false;
    }
  }

  async startProcess(name, command, args = [], options = {}) {
    logger.info(`🚀 Starting process: ${name}`);
    
    const processInfo = {
      name,
      command,
      args,
      options,
      pid: null,
      startTime: Date.now(),
      restarts: 0,
      lastCheck: Date.now(),
      status: starting
    };

    try {
      const child = spawn(command, args, {
        cwd: __dirname,
        stdio: ['pipe', pipe', pipe'],
        env: { ...process.env, ...options.env },
        ...options
      });

      processInfo.pid = child.pid;
      processInfo.status = running';
      processInfo.child = child;

      child.stdout.on('data', (data) => {
        this.log(`${name} [STDOUT]: ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        this.log(`${name} [STDERR]: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        this.log(`${name} process exited with code ${code}`);
        processInfo.status = stopped';
        processInfo.child = null;
        
        if (code !== 0 && processInfo.restarts < this.config.maxRestarts) {
          this.scheduleRestart(name);
        }
      });

      child.on('error', (error) => {
        this.log(`${name} process error: ${error.message}`);
        processInfo.status = error';
        processInfo.child = null;
        
        if (processInfo.restarts < this.config.maxRestarts) {
          this.scheduleRestart(name);
        }
      });

      this.processes.set(name, processInfo);
      this.saveProcessInfo();
      
      logger.info(`✅ Started ${name} (PID: ${child.pid})`);
      return true;
      
    } catch (error) {
      this.log(`❌ Failed to start ${name}: ${error.message}`);
      return false;
    }
  }

  scheduleRestart(name) {
    const processInfo = this.processes.get(name);
    if (!processInfo) return;

    processInfo.restarts++;
    this.log(`🔄 Scheduling restart for ${name} (attempt ${processInfo.restarts}/${this.config.maxRestarts})`);
    
    
const timeoutId = setTimeout(() => {
      this.restartProcess(name);
    },  this.config.restartDelay);
// Store timeoutId for cleanup if needed
;
  }

  async restartProcess(name) {
    const processInfo = this.processes.get(name);
    if (!processInfo) return;

    logger.info(`🔄 Restarting ${name}...`);
    
    // Stop the current process
    if (processInfo.child) {
      processInfo.child.kill('SIGTERM');
    }
    
    // Wait a bit then restart
    
const timeoutId = setTimeout(async () => {
      await this.startProcess(name,  processInfo.command, processInfo.args, processInfo.options);
// Store timeoutId for cleanup if needed
;
    }, 1000);
  }

  stopProcess(name) {
    const processInfo = this.processes.get(name);
    if (!processInfo) return false;

    logger.info(`🛑 Stopping ${name}...`);
    
    if (processInfo.child) {
      processInfo.child.kill('SIGTERM');
    }
    
    this.processes.delete(name);
    this.saveProcessInfo();
    return true;
  }

  async checkProcesses() {
    for (const [name, processInfo] of this.processes) {
      const isRunning = this.isProcessRunning(processInfo.pid);
      
      if (!isRunning && processInfo.status === running') {
        this.log(`⚠️  Process ${name} (PID: ${processInfo.pid}) is not responding`);
        processInfo.status = stopped';
        
        if (processInfo.restarts < this.config.maxRestarts) {
          this.scheduleRestart(name);
        }
      }
      
      processInfo.lastCheck = Date.now();
    }
  }

  saveProcessInfo() {
    const pidFile = path.join(__dirname, .watchdog.pid');
    const data = {};
    
    for (const [name, processInfo] of this.processes) {
      data[name] = {
        pid: processInfo.pid,
        command: processInfo.command,
        args: processInfo.args,
        startTime: processInfo.startTime
      };
    }
    
    fs.writeFileSync(pidFile, JSON.stringify(data, null, 2));
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    
    logger.info(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.config.logFile, logMessage + \n');
  }

  getStatus() {
    const status = {};
    for (const [name, processInfo] of this.processes) {
      status[name] = {
        pid: processInfo.pid,
        status: processInfo.status,
        restarts: processInfo.restarts,
        uptime: Date.now() - processInfo.startTime,
        lastCheck: processInfo.lastCheck
      };
    }
    return status;
  }

  async start() {
    if (this.isRunning) {
      logger.info('⚠️  Watchdog is already running');
      return;
    }

    await this.initialize();
    this.isRunning = true;

    // Start monitoring loop
    this.checkInterval = setInterval(() => {
      this.checkProcesses();
    }, this.config.checkInterval);

    logger.info('🐕 Improved Watchdog System started');
    logger.info(`📊 Check interval: ${this.config.checkInterval}ms`);
    logger.info(`📝 Log file: ${this.config.logFile}`);
  }

  stop() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    // Stop all processes
    for (const [name] of this.processes) {
      this.stopProcess(name);
    }

    this.isRunning = false;
    logger.info('🛑 Improved Watchdog System stopped');
  }
}

// Start the watchdog
if (require.main === module) {
  const watchdog = new ImprovedWatchdog();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
    watchdog.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
    watchdog.stop();
    process.exit(0);
  });

  // Start the watchdog
  watchdog.start().catch(error => {
    logger.error('❌ Failed to start Improved Watchdog:', error);
    process.exit(1);
  });
}

module.exports = ImprovedWatchdog; 