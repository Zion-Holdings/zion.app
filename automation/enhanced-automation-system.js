#!/usr/bin/env node

/**
 * Zion App - Enhanced Unified Automation System
 * 
 * A comprehensive automation system that consolidates all existing automation
 * capabilities and adds intelligent task scheduling, better error handling,
 * and AI-powered decision making.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Import existing automation modules
const AIOptimizer = require('./continuous-improvement/ai-optimizer');
const CursorIntegration = require('./continuous-improvement/cursor-integration');
const PerformanceMonitor = require('./performance/monitor');

class EnhancedAutomationSystem extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      // System configuration
      port: process.env.AUTOMATION_PORT || 3001,
      logLevel: process.env.LOG_LEVEL || 'info',
      enableDashboard: process.env.ENABLE_DASHBOARD !== 'false',
      enableWebSocket: process.env.ENABLE_WEBSOCKET !== 'false',
      
      // AI Configuration
      ai: {
        cursor: {
          enabled: process.env.CURSOR_AI_ENABLED === 'true',
          apiKey: process.env.CURSOR_API_KEY,
          workspaceId: process.env.CURSOR_WORKSPACE_ID
        },
        openai: {
          enabled: process.env.OPENAI_ENABLED === 'true',
          apiKey: process.env.OPENAI_API_KEY,
          model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview'
        },
        claude: {
          enabled: process.env.CLAUDE_ENABLED === 'true',
          apiKey: process.env.CLAUDE_API_KEY,
          model: process.env.CLAUDE_MODEL || 'claude-3-sonnet-20240229'
        }
      },
      
      // Task scheduling
      scheduling: {
        quickScan: 5 * 60 * 1000,        // 5 minutes
        deepAnalysis: 30 * 60 * 1000,    // 30 minutes
        fullAudit: 2 * 60 * 60 * 1000,   // 2 hours
        performanceCheck: 15 * 60 * 1000, // 15 minutes
        securityScan: 60 * 60 * 1000,    // 1 hour
        dependencyCheck: 24 * 60 * 60 * 1000, // 24 hours
        healthCheck: 2 * 60 * 1000,      // 2 minutes
        cleanup: 6 * 60 * 60 * 1000      // 6 hours
      },
      
      // Thresholds
      thresholds: {
        performance: {
          lighthouseScore: 85,
          loadTime: 3000,
          bundleSize: 500,
          memoryUsage: 100
        },
        security: {
          vulnerabilities: 0,
          outdatedPackages: 5,
          securityScore: 90
        },
        quality: {
          lintErrors: 0,
          testCoverage: 80,
          codeComplexity: 10
        }
      },
      
      // Paths
      paths: {
        projectRoot: process.cwd(),
        logs: path.join(process.cwd(), 'logs'),
        reports: path.join(process.cwd(), 'reports'),
        temp: path.join(process.cwd(), 'temp'),
        backups: path.join(process.cwd(), 'backups')
      }
    };
    
    // Initialize components
    this.aiOptimizer = new AIOptimizer();
    this.cursorIntegration = new CursorIntegration();
    this.performanceMonitor = new PerformanceMonitor();
    
    // State management
    this.isRunning = false;
    this.currentTasks = new Map();
    this.taskQueue = [];
    this.completedTasks = [];
    this.failedTasks = [];
    this.systemHealth = {
      status: 'healthy',
      lastCheck: Date.now(),
      uptime: 0,
      totalTasks: 0,
      successfulTasks: 0,
      failedTasks: 0
    };
    
    // Timers
    this.timers = new Map();
    
    // Express app and server
    this.app = express();
    this.server = null;
    this.io = null;
    
    // Initialize
    this.initializeDirectories();
    this.setupExpress();
    this.setupWebSocket();
  }

  /**
   * Initialize required directories
   */
  async initializeDirectories() {
    const dirs = [
      this.config.paths.logs,
      this.config.paths.reports,
      this.config.paths.temp,
      this.config.paths.backups
    ];
    
    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        this.log('warn', `Failed to create directory ${dir}: ${error.message}`);
      }
    }
  }

  /**
   * Setup Express server
   */
  setupExpress() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS middleware
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
    });
    
    // Request logging
    this.app.use((req, res, next) => {
      this.log('info', `${req.method} ${req.path}`);
      next();
    });
    
    // API routes
    this.setupAPIRoutes();
    
    // Health check endpoint
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        uptime: this.systemHealth.uptime,
        timestamp: new Date().toISOString()
      });
    });
  }

  /**
   * Setup API routes
   */
  setupAPIRoutes() {
    // System status
    this.app.get('/api/status', (req, res) => {
      res.json({
        system: this.systemHealth,
        currentTasks: Array.from(this.currentTasks.values()),
        queueLength: this.taskQueue.length,
        completedTasks: this.completedTasks.length,
        failedTasks: this.failedTasks.length
      });
    });
    
    // Task management
    this.app.post('/api/tasks', async (req, res) => {
      try {
        const { type, priority = 'normal', data = {} } = req.body;
        const taskId = await this.queueTask(type, priority, data);
        res.json({ success: true, taskId });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });
    
    // Task status
    this.app.get('/api/tasks/:taskId', (req, res) => {
      const task = this.currentTasks.get(req.params.taskId) || 
                   this.completedTasks.find(t => t.id === req.params.taskId) ||
                   this.failedTasks.find(t => t.id === req.params.taskId);
      
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    });
    
    // System control
    this.app.post('/api/control', async (req, res) => {
      try {
        const { action } = req.body;
        
        switch (action) {
          case 'start':
            await this.start();
            break;
          case 'stop':
            await this.stop();
            break;
          case 'restart':
            await this.restart();
            break;
          case 'pause':
            this.pause();
            break;
          case 'resume':
            this.resume();
            break;
          default:
            return res.status(400).json({ error: 'Invalid action' });
        }
        
        res.json({ success: true, action });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });
    
    // Reports
    this.app.get('/api/reports', async (req, res) => {
      try {
        const reports = await this.generateReports();
        res.json(reports);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  /**
   * Setup WebSocket for real-time updates
   */
  setupWebSocket() {
    if (!this.config.enableWebSocket) return;
    
    this.io = socketIo(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });
    
    this.io.on('connection', (socket) => {
      this.log('info', 'WebSocket client connected');
      
      // Send initial status
      socket.emit('status', this.systemHealth);
      
      socket.on('disconnect', () => {
        this.log('info', 'WebSocket client disconnected');
      });
    });
  }

  /**
   * Start the automation system
   */
  async start() {
    if (this.isRunning) {
      this.log('warn', 'Automation system is already running');
      return;
    }
    
    this.log('info', 'Starting Enhanced Automation System...');
    
    try {
      // Start HTTP server
      this.server = http.createServer(this.app);
      await new Promise((resolve, reject) => {
        this.server.listen(this.config.port, (error) => {
          if (error) reject(error);
          else resolve();
        });
      });
      
      // Setup WebSocket after server is running
      this.setupWebSocket();
      
      this.isRunning = true;
      this.systemHealth.status = 'running';
      this.systemHealth.uptime = Date.now();
      
      // Start scheduled tasks
      this.startScheduledTasks();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      this.log('info', `Enhanced Automation System started on port ${this.config.port}`);
      this.emit('started');
      
      // Emit WebSocket update
      if (this.io) {
        this.io.emit('systemStarted', this.systemHealth);
      }
      
    } catch (error) {
      this.log('error', `Failed to start automation system: ${error.message}`);
      throw error;
    }
  }

  /**
   * Stop the automation system
   */
  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'Automation system is not running');
      return;
    }
    
    this.log('info', 'Stopping Enhanced Automation System...');
    
    // Stop all timers
    for (const [name, timer] of this.timers) {
      clearInterval(timer);
      this.timers.delete(name);
    }
    
    // Stop HTTP server
    if (this.server) {
      await new Promise((resolve) => {
        this.server.close(resolve);
      });
    }
    
    this.isRunning = false;
    this.systemHealth.status = 'stopped';
    
    this.log('info', 'Enhanced Automation System stopped');
    this.emit('stopped');
    
    // Emit WebSocket update
    if (this.io) {
      this.io.emit('systemStopped', this.systemHealth);
    }
  }

  /**
   * Restart the automation system
   */
  async restart() {
    this.log('info', 'Restarting Enhanced Automation System...');
    await this.stop();
    await this.start();
  }

  /**
   * Pause the automation system
   */
  pause() {
    this.systemHealth.status = 'paused';
    this.log('info', 'Automation system paused');
    this.emit('paused');
    
    if (this.io) {
      this.io.emit('systemPaused', this.systemHealth);
    }
  }

  /**
   * Resume the automation system
   */
  resume() {
    this.systemHealth.status = 'running';
    this.log('info', 'Automation system resumed');
    this.emit('resumed');
    
    if (this.io) {
      this.io.emit('systemResumed', this.systemHealth);
    }
  }

  /**
   * Start scheduled tasks
   */
  startScheduledTasks() {
    // Quick scan - every 5 minutes
    this.timers.set('quickScan', setInterval(() => {
      this.queueTask('quickScan', 'low');
    }, this.config.scheduling.quickScan));
    
    // Performance check - every 15 minutes
    this.timers.set('performanceCheck', setInterval(() => {
      this.queueTask('performanceCheck', 'normal');
    }, this.config.scheduling.performanceCheck));
    
    // Deep analysis - every 30 minutes
    this.timers.set('deepAnalysis', setInterval(() => {
      this.queueTask('deepAnalysis', 'high');
    }, this.config.scheduling.deepAnalysis));
    
    // Security scan - every hour
    this.timers.set('securityScan', setInterval(() => {
      this.queueTask('securityScan', 'high');
    }, this.config.scheduling.securityScan));
    
    // Full audit - every 2 hours
    this.timers.set('fullAudit', setInterval(() => {
      this.queueTask('fullAudit', 'critical');
    }, this.config.scheduling.fullAudit));
    
    // Dependency check - daily
    this.timers.set('dependencyCheck', setInterval(() => {
      this.queueTask('dependencyCheck', 'normal');
    }, this.config.scheduling.dependencyCheck));
    
    // Cleanup - every 6 hours
    this.timers.set('cleanup', setInterval(() => {
      this.queueTask('cleanup', 'low');
    }, this.config.scheduling.cleanup));
    
    this.log('info', 'Scheduled tasks started');
  }

  /**
   * Start health monitoring
   */
  startHealthMonitoring() {
    this.timers.set('healthCheck', setInterval(() => {
      this.checkSystemHealth();
    }, this.config.scheduling.healthCheck));
    
    this.log('info', 'Health monitoring started');
  }

  /**
   * Check system health
   */
  async checkSystemHealth() {
    try {
      const health = {
        status: 'healthy',
        lastCheck: Date.now(),
        uptime: Date.now() - this.systemHealth.uptime,
        totalTasks: this.systemHealth.totalTasks,
        successfulTasks: this.systemHealth.successfulTasks,
        failedTasks: this.systemHealth.failedTasks,
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage()
      };
      
      // Check for issues
      if (this.failedTasks.length > 10) {
        health.status = 'warning';
        health.warnings = ['High number of failed tasks'];
      }
      
      if (this.taskQueue.length > 50) {
        health.status = 'warning';
        health.warnings = health.warnings || [];
        health.warnings.push('Large task queue');
      }
      
      this.systemHealth = health;
      
      // Emit WebSocket update
      if (this.io) {
        this.io.emit('healthUpdate', health);
      }
      
      this.emit('healthCheck', health);
      
    } catch (error) {
      this.log('error', `Health check failed: ${error.message}`);
    }
  }

  /**
   * Queue a new task
   */
  async queueTask(type, priority = 'normal', data = {}) {
    const taskId = `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const task = {
      id: taskId,
      type,
      priority,
      data,
      status: 'queued',
      createdAt: Date.now(),
      startedAt: null,
      completedAt: null,
      result: null,
      error: null
    };
    
    // Add to queue based on priority
    const priorityOrder = { critical: 0, high: 1, normal: 2, low: 3 };
    const insertIndex = this.taskQueue.findIndex(t => 
      priorityOrder[t.priority] > priorityOrder[priority]
    );
    
    if (insertIndex === -1) {
      this.taskQueue.push(task);
    } else {
      this.taskQueue.splice(insertIndex, 0, task);
    }
    
    this.systemHealth.totalTasks++;
    
    this.log('info', `Task queued: ${type} (${priority} priority)`);
    this.emit('taskQueued', task);
    
    // Start processing if not already running
    if (this.currentTasks.size < 3) {
      this.processNextTask();
    }
    
    return taskId;
  }

  /**
   * Process next task in queue
   */
  async processNextTask() {
    if (this.taskQueue.length === 0 || this.currentTasks.size >= 3) {
      return;
    }
    
    const task = this.taskQueue.shift();
    this.currentTasks.set(task.id, task);
    task.status = 'running';
    task.startedAt = Date.now();
    
    this.log('info', `Processing task: ${task.type}`);
    this.emit('taskStarted', task);
    
    try {
      const result = await this.executeTask(task);
      
      task.status = 'completed';
      task.completedAt = Date.now();
      task.result = result;
      
      this.completedTasks.push(task);
      this.systemHealth.successfulTasks++;
      
      this.log('info', `Task completed: ${task.type}`);
      this.emit('taskCompleted', task);
      
    } catch (error) {
      task.status = 'failed';
      task.completedAt = Date.now();
      task.error = error.message;
      
      this.failedTasks.push(task);
      this.systemHealth.failedTasks++;
      
      this.log('error', `Task failed: ${task.type} - ${error.message}`);
      this.emit('taskFailed', task);
    }
    
    this.currentTasks.delete(task.id);
    
    // Process next task
    if (this.taskQueue.length > 0) {
      this.processNextTask();
    }
    
    // Emit WebSocket update
    if (this.io) {
      this.io.emit('taskUpdate', {
        currentTasks: Array.from(this.currentTasks.values()),
        queueLength: this.taskQueue.length
      });
    }
  }

  /**
   * Execute a specific task
   */
  async executeTask(task) {
    switch (task.type) {
      case 'quickScan':
        return await this.performQuickScan();
      case 'performanceCheck':
        return await this.performPerformanceCheck();
      case 'deepAnalysis':
        return await this.performDeepAnalysis();
      case 'securityScan':
        return await this.performSecurityScan();
      case 'fullAudit':
        return await this.performFullAudit();
      case 'dependencyCheck':
        return await this.performDependencyCheck();
      case 'cleanup':
        return await this.performCleanup();
      case 'aiOptimization':
        return await this.performAIOptimization(task.data);
      case 'cursorIntegration':
        return await this.performCursorIntegration(task.data);
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }

  /**
   * Perform quick scan
   */
  async performQuickScan() {
    const results = {
      timestamp: Date.now(),
      checks: {}
    };
    
    // Quick lint check
    try {
      const lintResult = execSync('npm run lint --silent', { encoding: 'utf8' });
      results.checks.lint = { status: 'passed', output: lintResult };
    } catch (error) {
      results.checks.lint = { status: 'failed', error: error.message };
    }
    
    // Quick test check
    try {
      const testResult = execSync('npm test --silent', { encoding: 'utf8' });
      results.checks.tests = { status: 'passed', output: testResult };
    } catch (error) {
      results.checks.tests = { status: 'failed', error: error.message };
    }
    
    return results;
  }

  /**
   * Perform performance check
   */
  async performPerformanceCheck() {
    return await this.performanceMonitor.runPerformanceCheck();
  }

  /**
   * Perform deep analysis
   */
  async performDeepAnalysis() {
    const results = {
      timestamp: Date.now(),
      analysis: {}
    };
    
    // Code complexity analysis
    try {
      const complexityResult = execSync('npx complexity-report src/', { encoding: 'utf8' });
      results.analysis.complexity = complexityResult;
    } catch (error) {
      results.analysis.complexity = { error: error.message };
    }
    
    // Bundle analysis
    try {
      const bundleResult = execSync('npm run build:analyze', { encoding: 'utf8' });
      results.analysis.bundle = bundleResult;
    } catch (error) {
      results.analysis.bundle = { error: error.message };
    }
    
    return results;
  }

  /**
   * Perform security scan
   */
  async performSecurityScan() {
    const results = {
      timestamp: Date.now(),
      vulnerabilities: []
    };
    
    // NPM audit
    try {
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);
      results.vulnerabilities = audit.vulnerabilities || [];
    } catch (error) {
      results.error = error.message;
    }
    
    return results;
  }

  /**
   * Perform full audit
   */
  async performFullAudit() {
    const results = {
      timestamp: Date.now(),
      audit: {}
    };
    
    // Run all checks
    results.audit.quickScan = await this.performQuickScan();
    results.audit.performanceCheck = await this.performPerformanceCheck();
    results.audit.securityScan = await this.performSecurityScan();
    results.audit.deepAnalysis = await this.performDeepAnalysis();
    
    return results;
  }

  /**
   * Perform dependency check
   */
  async performDependencyCheck() {
    const results = {
      timestamp: Date.now(),
      dependencies: {}
    };
    
    // Check for outdated packages
    try {
      const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
      results.dependencies.outdated = JSON.parse(outdatedResult);
    } catch (error) {
      results.dependencies.outdated = { error: error.message };
    }
    
    return results;
  }

  /**
   * Perform cleanup
   */
  async performCleanup() {
    const results = {
      timestamp: Date.now(),
      cleaned: []
    };
    
    // Clean temporary files
    try {
      const tempFiles = await fs.readdir(this.config.paths.temp);
      for (const file of tempFiles) {
        const filePath = path.join(this.config.paths.temp, file);
        const stats = await fs.stat(filePath);
        
        // Remove files older than 24 hours
        if (Date.now() - stats.mtime.getTime() > 24 * 60 * 60 * 1000) {
          await fs.unlink(filePath);
          results.cleaned.push(file);
        }
      }
    } catch (error) {
      results.error = error.message;
    }
    
    return results;
  }

  /**
   * Perform AI optimization
   */
  async performAIOptimization(data) {
    return await this.aiOptimizer.optimize(data);
  }

  /**
   * Perform Cursor integration
   */
  async performCursorIntegration(data) {
    return await this.cursorIntegration.process(data);
  }

  /**
   * Generate reports
   */
  async generateReports() {
    const reports = {
      system: this.systemHealth,
      tasks: {
        current: Array.from(this.currentTasks.values()),
        completed: this.completedTasks.slice(-10), // Last 10
        failed: this.failedTasks.slice(-10), // Last 10
        queue: this.taskQueue
      },
      performance: await this.performanceMonitor.getPerformanceReport(),
      timestamp: Date.now()
    };
    
    // Save report
    const reportPath = path.join(this.config.paths.reports, `report_${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(reports, null, 2));
    
    return reports;
  }

  /**
   * Log message with timestamp and level
   */
  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Save to log file
    const logPath = path.join(this.config.paths.logs, 'automation.log');
    fs.appendFile(logPath, logMessage + '\n').catch(() => {});
    
    // Emit WebSocket update for important messages
    if (this.io && (level === 'error' || level === 'warn')) {
      this.io.emit('log', { level, message, timestamp });
    }
  }
}

module.exports = EnhancedAutomationSystem; 