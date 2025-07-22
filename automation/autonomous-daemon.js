#!/usr/bin/env node

/**
 * Zion App - Autonomous Daemon for Infinite Improvement Loop
 * 
 * This daemon runs the infinite improvement loop system automatically
 * in the background, with automatic restart capabilities and system integration.
 */

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const EventEmitter = require('events');

class AutonomousDaemon extends EventEmitter {
  constructor() {
    super();
    
    this.isRunning = false;
    this.process = null;
    this.restartCount = 0;
    this.maxRestarts = 10;
    this.restartDelay = 5000; // 5 seconds
    this.healthCheckInterval = 30000; // 30 seconds
    this.healthCheckTimer = null;
    
    // Configuration
    this.config = {
      scriptPath: path.join(__dirname, 'infinite-improvement-loop.js'),
      logPath: path.join(__dirname, 'logs', 'daemon.log'),
      pidPath: path.join(__dirname, '.daemon.pid'),
      port: process.env.IMPROVEMENT_PORT || 3002,
      autoRestart: true,
      healthCheck: true,
      logLevel: process.env.LOG_LEVEL || 'info'
    };
    
    // Bind methods
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.restart = this.restart.bind(this);
    this.healthCheck = this.healthCheck.bind(this);
    this.handleProcessExit = this.handleProcessExit.bind(this);
    this.handleProcessError = this.handleProcessError.bind(this);
  }

  /**
   * Initialize the daemon
   */
  async initialize() {
    try {
      // Create necessary directories
      await this.createDirectories();
      
      // Check if already running
      if (await this.isAlreadyRunning()) {
        console.log('🚨 Daemon is already running');
        return false;
      }
      
      // Write PID file
      await this.writePidFile();
      
      console.log('✅ Daemon initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize daemon:', error);
      return false;
    }
  }

  /**
   * Create necessary directories
   */
  async createDirectories() {
    const dirs = [
      path.dirname(this.config.logPath),
      path.dirname(this.config.pidPath)
    ];
    
    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }
    }
  }

  /**
   * Check if daemon is already running
   */
  async isAlreadyRunning() {
    try {
      const pid = await fs.readFile(this.config.pidPath, 'utf8');
      const isRunning = await this.isProcessRunning(parseInt(pid));
      
      if (!isRunning) {
        // Clean up stale PID file
        await fs.unlink(this.config.pidPath).catch(() => {});
        return false;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if a process is running
   */
  async isProcessRunning(pid) {
    return new Promise((resolve) => {
      exec(`ps -p ${pid}`, (error) => {
        resolve(!error);
      });
    });
  }

  /**
   * Write PID file
   */
  async writePidFile() {
    await fs.writeFile(this.config.pidPath, process.pid.toString());
  }

  /**
   * Start the daemon
   */
  async start() {
    if (this.isRunning) {
      console.log('🚨 Daemon is already running');
      return;
    }

    console.log('🚀 Starting autonomous daemon...');
    
    if (!(await this.initialize())) {
      return;
    }

    this.isRunning = true;
    this.startInfiniteImprovementLoop();
    
    // Start health check if enabled
    if (this.config.healthCheck) {
      this.startHealthCheck();
    }
    
    // Handle process signals
    this.setupSignalHandlers();
    
    console.log('✅ Autonomous daemon started successfully');
    console.log(`📊 Dashboard available at: http://localhost:${this.config.port}`);
    console.log(`📝 Logs: ${this.config.logPath}`);
  }

  /**
   * Start the infinite improvement loop process
   */
  startInfiniteImprovementLoop() {
    console.log('🔄 Starting infinite improvement loop process...');
    
    // Create log stream
    const logStream = fs.createWriteStream(this.config.logPath, { flags: 'a' });
    
    // Start the process
    this.process = spawn('node', [this.config.scriptPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      detached: false,
      env: {
        ...process.env,
        NODE_ENV: 'production',
        DAEMON_MODE: 'true'
      }
    });
    
    // Pipe output to log file
    this.process.stdout.pipe(logStream);
    this.process.stderr.pipe(logStream);
    
    // Handle process events
    this.process.on('exit', this.handleProcessExit);
    this.process.on('error', this.handleProcessError);
    
    // Log process start
    const timestamp = new Date().toISOString();
    logStream.write(`\n[${timestamp}] 🚀 Infinite improvement loop process started (PID: ${this.process.pid})\n`);
    
    console.log(`✅ Infinite improvement loop process started (PID: ${this.process.pid})`);
  }

  /**
   * Handle process exit
   */
  handleProcessExit(code, signal) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] 🔄 Process exited with code ${code} and signal ${signal}`);
    
    if (this.isRunning && this.config.autoRestart && this.restartCount < this.maxRestarts) {
      console.log(`🔄 Restarting process (attempt ${this.restartCount + 1}/${this.maxRestarts})...`);
      this.restartCount++;
      
      setTimeout(() => {
        this.startInfiniteImprovementLoop();
      }, this.restartDelay);
    } else if (this.restartCount >= this.maxRestarts) {
      console.log('❌ Maximum restart attempts reached. Stopping daemon.');
      this.stop();
    }
  }

  /**
   * Handle process error
   */
  handleProcessError(error) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ❌ Process error:`, error);
    
    // Log error to file
    fs.appendFile(this.config.logPath, `[${timestamp}] ❌ Process error: ${error.message}\n`).catch(() => {});
  }

  /**
   * Start health check
   */
  startHealthCheck() {
    this.healthCheckTimer = setInterval(async () => {
      await this.healthCheck();
    }, this.healthCheckInterval);
  }

  /**
   * Perform health check
   */
  async healthCheck() {
    try {
      // Check if process is still running
      if (this.process && this.process.exitCode === null) {
        // Process is still running, check if it's responsive
        const isResponsive = await this.checkProcessResponsiveness();
        
        if (!isResponsive) {
          console.log('⚠️ Process is not responsive, restarting...');
          this.restart();
        }
      }
    } catch (error) {
      console.error('❌ Health check failed:', error);
    }
  }

  /**
   * Check if process is responsive
   */
  async checkProcessResponsiveness() {
    return new Promise((resolve) => {
      // Try to connect to the dashboard
      const http = require('http');
      const req = http.request({
        hostname: 'localhost',
        port: this.config.port,
        path: '/api/status',
        method: 'GET',
        timeout: 5000
      }, (res) => {
        resolve(res.statusCode === 200);
      });
      
      req.on('error', () => {
        resolve(false);
      });
      
      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });
      
      req.end();
    });
  }

  /**
   * Restart the process
   */
  restart() {
    console.log('🔄 Restarting infinite improvement loop process...');
    
    if (this.process) {
      this.process.kill('SIGTERM');
    }
    
    setTimeout(() => {
      this.startInfiniteImprovementLoop();
    }, 1000);
  }

  /**
   * Stop the daemon
   */
  async stop() {
    console.log('🛑 Stopping autonomous daemon...');
    
    this.isRunning = false;
    
    // Stop health check
    if (this.healthCheckTimer) {
      clearInterval(this.healthCheckTimer);
      this.healthCheckTimer = null;
    }
    
    // Stop the process
    if (this.process) {
      this.process.kill('SIGTERM');
      
      // Wait for process to exit
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      
      // Force kill if still running
      if (this.process.exitCode === null) {
        this.process.kill('SIGKILL');
      }
    }
    
    // Clean up PID file
    try {
      await fs.unlink(this.config.pidPath);
    } catch (error) {
      // PID file might not exist
    }
    
    console.log('✅ Autonomous daemon stopped');
  }

  /**
   * Setup signal handlers
   */
  setupSignalHandlers() {
    process.on('SIGINT', async () => {
      console.log('\n🛑 Received SIGINT, shutting down...');
      await this.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
      console.log('\n🛑 Received SIGTERM, shutting down...');
      await this.stop();
      process.exit(0);
    });
    
    process.on('SIGUSR1', () => {
      console.log('📊 Status request received');
      this.logStatus();
    });
    
    process.on('SIGUSR2', () => {
      console.log('🔄 Restart request received');
      this.restart();
    });
  }

  /**
   * Log current status
   */
  logStatus() {
    const status = {
      isRunning: this.isRunning,
      processPid: this.process ? this.process.pid : null,
      restartCount: this.restartCount,
      timestamp: new Date().toISOString()
    };
    
    console.log('📊 Daemon Status:', JSON.stringify(status, null, 2));
  }

  /**
   * Get daemon status
   */
  async getStatus() {
    try {
      const pid = await fs.readFile(this.config.pidPath, 'utf8');
      const isRunning = await this.isProcessRunning(parseInt(pid));
      
      return {
        isRunning,
        pid: parseInt(pid),
        port: this.config.port,
        logPath: this.config.logPath
      };
    } catch (error) {
      return {
        isRunning: false,
        error: error.message
      };
    }
  }
}

// Export the daemon class
module.exports = AutonomousDaemon;

// If running directly, start the daemon
if (require.main === module) {
  const daemon = new AutonomousDaemon();
  
  // Parse command line arguments
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      daemon.start();
      break;
    case 'stop':
      daemon.stop();
      break;
    case 'restart':
      daemon.restart();
      break;
    case 'status':
      daemon.getStatus().then(status => {
        console.log('Status:', status);
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node autonomous-daemon.js [start|stop|restart|status]');
      process.exit(1);
  }
} 