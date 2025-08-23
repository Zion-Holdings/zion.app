#!/usr/bin/env node

/**
 * Automation Scheduler
 * 
 * Runs automation tasks at scheduled intervals with intelligent
 * scheduling, conflict resolution, and monitoring.
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Simple logger
const logger = {
  info: (msg) => console.log(`[INFO] ${new Date().toISOString()} ${msg}`),
  error: (msg) => console.error(`[ERROR] ${new Date().toISOString()} ${msg}`),
  warn: (msg) => console.warn(`[WARN] ${new Date().toISOString()} ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ${new Date().toISOString()} ${msg}`)
};

class AutomationScheduler {
  constructor(config = {}) {
    this.config = {
      schedules: {
        SecurityScanner: '0 */6 * * *', // Every 6 hours
        CodeQualityEnforcer: '0 */2 * * *', // Every 2 hours
        PerformanceOptimizer: '0 */4 * * *', // Every 4 hours
        DependencyUpdater: '0 0 * * *', // Daily at midnight
        StaleCleaner: '0 2 * * *', // Daily at 2 AM
        AIEnhancer: '0 */8 * * *' // Every 8 hours
      },
      maxConcurrent: 2,
      retryAttempts: 3,
      retryDelay: 5000,
      timeout: 300000, // 5 minutes per task
      ...config
    };
    
    this.runningTasks = new Map();
    this.taskHistory = [];
    this.scheduler = null;
    this.isRunning = false;
  }

  async start() {
    logger.info('🚀 Starting automation scheduler...');
    
    try {
      // Load configuration
      await this.loadConfiguration();
      
      // Initialize scheduler
      await this.initializeScheduler();
      
      // Start monitoring
      this.startMonitoring();
      
      this.isRunning = true;
      logger.success('✅ Automation scheduler started successfully');
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      logger.error('❌ Failed to start scheduler:', error);
      throw error;
    }
  }

  async loadConfiguration() {
    const configPath = path.join(__dirname, 'automation-config.json');
    
    if (fs.existsSync(configPath)) {
      try {
        const configData = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(configData);
        
        // Merge with default config
        this.config = { ...this.config, ...config.scheduler };
        
        logger.info('📋 Configuration loaded successfully');
      } catch (error) {
        logger.warn('⚠️ Failed to load configuration, using defaults:', error.message);
      }
    }
  }

  async initializeScheduler() {
    logger.info('🔧 Initializing scheduler...');
    
    // Create task directories if they don't exist
    const dirs = ['logs', 'reports', 'backups'];
    for (const dir of dirs) {
      const dirPath = path.join(process.cwd(), 'automation', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    }
    
    // Initialize task history
    await this.loadTaskHistory();
    
    logger.info('✅ Scheduler initialized');
  }

  startMonitoring() {
    // Monitor every minute
    setInterval(() => {
      this.monitorTasks();
    }, 60000);
    
    // Clean up old logs daily
    setInterval(() => {
      this.cleanupOldLogs();
    }, 24 * 60 * 60 * 1000);
    
    logger.info('📊 Monitoring started');
  }

  async monitorTasks() {
    const now = new Date();
    
    // Check each scheduled task
    for (const [taskName, schedule] of Object.entries(this.config.schedules)) {
      if (this.shouldRunTask(taskName, schedule, now)) {
        await this.scheduleTask(taskName);
      }
    }
    
    // Check for stuck tasks
    this.checkForStuckTasks();
  }

  shouldRunTask(taskName, schedule, now) {
    // Simple cron-like parsing (basic implementation)
    const parts = schedule.split(' ');
    const minute = parseInt(parts[0]);
    const hour = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    const month = parseInt(parts[3]);
    const dayOfWeek = parseInt(parts[4]);
    
    const currentMinute = now.getMinutes();
    const currentHour = now.getHours();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth() + 1;
    const currentDayOfWeek = now.getDay();
    
    // Check if task should run now
    const shouldRun = 
      (minute === currentMinute || minute === -1) &&
      (hour === currentHour || hour === -1) &&
      (day === currentDay || day === -1) &&
      (month === currentMonth || month === -1) &&
      (dayOfWeek === currentDayOfWeek || dayOfWeek === -1);
    
    // Check if task is already running
    const isRunning = this.runningTasks.has(taskName);
    
    // Check last run time to avoid duplicate runs
    const lastRun = this.getLastRunTime(taskName);
    const timeSinceLastRun = now - lastRun;
    const minInterval = this.getMinInterval(schedule);
    
    return shouldRun && !isRunning && timeSinceLastRun >= minInterval;
  }

  getLastRunTime(taskName) {
    const history = this.taskHistory.filter(h => h.taskName === taskName);
    if (history.length === 0) return 0;
    
    return Math.max(...history.map(h => new Date(h.timestamp).getTime()));
  }

  getMinInterval(schedule) {
    // Calculate minimum interval between runs (in milliseconds)
    const parts = schedule.split(' ');
    const minute = parts[0];
    const hour = parts[1];
    
    if (minute !== '*' && hour === '*') {
      return parseInt(minute) * 60 * 1000; // minutes
    } else if (hour !== '*') {
      return parseInt(hour) * 60 * 60 * 1000; // hours
    }
    
    return 60 * 1000; // default 1 minute
  }

  async scheduleTask(taskName) {
    if (this.runningTasks.size >= this.config.maxConcurrent) {
      logger.warn(`⚠️ Maximum concurrent tasks reached, skipping ${taskName}`);
      return;
    }
    
    logger.info(`🎯 Scheduling task: ${taskName}`);
    
    try {
      const taskId = `${taskName}-${Date.now()}`;
      const taskInfo = {
        id: taskId,
        taskName,
        startTime: new Date(),
        status: 'running'
      };
      
      this.runningTasks.set(taskName, taskInfo);
      
      // Run the task
      const result = await this.runTask(taskName);
      
      // Update task info
      taskInfo.endTime = new Date();
      taskInfo.status = result.success ? 'completed' : 'failed';
      taskInfo.result = result;
      
      // Add to history
      this.taskHistory.push({
        ...taskInfo,
        timestamp: taskInfo.startTime.toISOString()
      });
      
      // Save history
      await this.saveTaskHistory();
      
      // Remove from running tasks
      this.runningTasks.delete(taskName);
      
      logger.success(`✅ Task ${taskName} completed with status: ${taskInfo.status}`);
      
    } catch (error) {
      logger.error(`❌ Task ${taskName} failed:`, error.message);
      
      // Update task info
      const taskInfo = this.runningTasks.get(taskName);
      if (taskInfo) {
        taskInfo.endTime = new Date();
        taskInfo.status = 'failed';
        taskInfo.error = error.message;
        
        this.runningTasks.delete(taskName);
      }
    }
  }

  async runTask(taskName) {
    const taskPath = path.join(__dirname, 'tasks', `${taskName}.js`);
    
    if (!fs.existsSync(taskPath)) {
      throw new Error(`Task file not found: ${taskPath}`);
    }
    
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Task ${taskName} timed out after ${this.config.timeout}ms`));
      }, this.config.timeout);
      
      const taskProcess = spawn('node', [taskPath, '--run'], {
        stdio: 'pipe',
        env: { ...process.env, NODE_ENV: 'production' }
      });
      
      let stdout = '';
      let stderr = '';
      
      taskProcess.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      taskProcess.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      taskProcess.on('close', (code) => {
        clearTimeout(timeout);
        
        if (code === 0) {
          resolve({
            success: true,
            stdout,
            stderr,
            exitCode: code
          });
        } else {
          reject(new Error(`Task ${taskName} exited with code ${code}: ${stderr}`));
        }
      });
      
      taskProcess.on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  checkForStuckTasks() {
    const now = new Date();
    const stuckThreshold = 10 * 60 * 1000; // 10 minutes
    
    for (const [taskName, taskInfo] of this.runningTasks) {
      const runningTime = now - taskInfo.startTime;
      
      if (runningTime > stuckThreshold) {
        logger.warn(`⚠️ Task ${taskName} appears to be stuck (running for ${runningTime}ms)`);
        
        // Force kill stuck task
        this.forceKillTask(taskName);
      }
    }
  }

  forceKillTask(taskName) {
    const taskInfo = this.runningTasks.get(taskName);
    if (taskInfo) {
      taskInfo.status = 'killed';
      taskInfo.endTime = new Date();
      taskInfo.error = 'Task was killed due to timeout';
      
      this.runningTasks.delete(taskName);
      
      logger.warn(`🔪 Killed stuck task: ${taskName}`);
    }
  }

  async loadTaskHistory() {
    const historyPath = path.join(process.cwd(), 'automation', 'logs', 'task-history.json');
    
    if (fs.existsSync(historyPath)) {
      try {
        const data = fs.readFileSync(historyPath, 'utf8');
        this.taskHistory = JSON.parse(data);
        logger.info(`📋 Loaded ${this.taskHistory.length} task history entries`);
      } catch (error) {
        logger.warn('⚠️ Failed to load task history:', error.message);
        this.taskHistory = [];
      }
    } else {
      this.taskHistory = [];
    }
  }

  async saveTaskHistory() {
    const historyPath = path.join(process.cwd(), 'automation', 'logs', 'task-history.json');
    
    try {
      // Keep only last 1000 entries
      const recentHistory = this.taskHistory.slice(-1000);
      fs.writeFileSync(historyPath, JSON.stringify(recentHistory, null, 2));
    } catch (error) {
      logger.error('❌ Failed to save task history:', error.message);
    }
  }

  async cleanupOldLogs() {
    logger.info('🧹 Cleaning up old logs...');
    
    const logsDir = path.join(process.cwd(), 'automation', 'logs');
    const reportsDir = path.join(process.cwd(), 'automation', 'reports');
    
    // Remove logs older than 30 days
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);
    
    [logsDir, reportsDir].forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.mtime < cutoffDate) {
            fs.unlinkSync(filePath);
            logger.info(`🗑️  Removed old file: ${file}`);
          }
        });
      }
    });
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGINT', async () => {
      logger.info('🛑 Shutting down scheduler...');
      await this.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
      logger.info('🛑 Shutting down scheduler...');
      await this.stop();
      process.exit(0);
    });
  }

  async stop() {
    logger.info('🛑 Stopping automation scheduler...');
    
    this.isRunning = false;
    
    // Wait for running tasks to complete
    if (this.runningTasks.size > 0) {
      logger.info(`⏳ Waiting for ${this.runningTasks.size} tasks to complete...`);
      
      const maxWaitTime = 30000; // 30 seconds
      const startTime = Date.now();
      
      while (this.runningTasks.size > 0 && (Date.now() - startTime) < maxWaitTime) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Force kill remaining tasks
      for (const [taskName] of this.runningTasks) {
        this.forceKillTask(taskName);
      }
    }
    
    // Save final state
    await this.saveTaskHistory();
    
    logger.success('✅ Automation scheduler stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      runningTasks: Array.from(this.runningTasks.values()),
      totalHistory: this.taskHistory.length,
      schedules: this.config.schedules
    };
  }
}

// CLI support
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🤖 Automation Scheduler

Usage: node automation-scheduler.js [options]

Options:
  --help, -h       Show this help message
  --start          Start the scheduler
  --stop           Stop the scheduler
  --status         Show scheduler status

Examples:
  node automation-scheduler.js --start
  node automation-scheduler.js --status
    `);
    process.exit(0);
  }
  
  const scheduler = new AutomationScheduler();
  
  if (args.includes('--start')) {
    scheduler.start().catch((error) => {
      logger.error('❌ Scheduler failed:', error);
      process.exit(1);
    });
  } else if (args.includes('--status')) {
    console.log(JSON.stringify(scheduler.getStatus(), null, 2));
  } else {
    console.log('Use --help for usage information');
  }
}

module.exports = AutomationScheduler; 