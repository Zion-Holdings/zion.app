#!/usr/bin/env node

/**
 * Intelligent Automation Orchestrator
 * 
 * The main orchestrator that coordinates all autonomous automation components:
 * - Task Scheduler
 * - Notification Manager
 * - Autonomous Automation Manager
 * - Individual automation tasks
 * 
 * Provides a unified interface for managing the entire automation system.
 */

const { EventEmitter } = require('events');
const path = require('path');
const fs = require('fs').promises;

// Import core components
const AutonomousAutomationManager = require('./AutonomousAutomationManager');
const TaskScheduler = require('./TaskScheduler');
const NotificationManager = require('./NotificationManager');

class IntelligentAutomationOrchestrator extends EventEmitter {
  constructor(config = {}) {
    super();
    
    this.config = {
      // System configuration
      port: process.env.AUTOMATION_PORT || 3001,
      logLevel: process.env.LOG_LEVEL || 'info',
      enableDashboard: process.env.ENABLE_DASHBOARD !== 'false',
      enableAPI: process.env.ENABLE_API !== 'false',
      
      // Task configuration
      tasksDirectory: path.join(__dirname, '..', 'tasks'),
      autoLoadTasks: true,
      defaultTaskConfig: {
        enabled: true,
        priority: 'normal',
        retryAttempts: 3,
        timeout: 300000 // 5 minutes
      },
      
      // Monitoring configuration
      healthCheckInterval: 60000, // 1 minute
      performanceTracking: true,
      anomalyDetection: true,
      
      // Notification configuration
      notifications: {
        enabled: true,
        channels: ['console', 'slack', 'webhook'],
        levels: ['warning', 'error', 'critical']
      },
      
      ...config
    };
    
    // Core components
    this.automationManager = null;
    this.taskScheduler = null;
    this.notificationManager = null;
    
    // State management
    this.isRunning = false;
    this.tasks = new Map();
    this.systemHealth = {
      status: 'unknown',
      lastCheck: null,
      issues: []
    };
    
    // Performance tracking
    this.performanceMetrics = {
      uptime: 0,
      totalTasks: 0,
      successfulTasks: 0,
      failedTasks: 0,
      averageResponseTime: 0
    };
    
    // Initialize components
    this.initializeComponents();
  }

  async initializeComponents() {
    console.log('🔧 Initializing Intelligent Automation Orchestrator...');
    
    try {
      // Initialize notification manager first
      this.notificationManager = new NotificationManager(this.config.notifications);
      
      // Initialize task scheduler
      this.taskScheduler = new TaskScheduler({
        maxConcurrentTasks: 5,
        adaptiveScheduling: true,
        trackPerformance: this.config.performanceTracking
      });
      
      // Initialize autonomous automation manager
      this.automationManager = new AutonomousAutomationManager({
        autoRestart: true,
        maxRestartAttempts: 3,
        healthCheckInterval: this.config.healthCheckInterval
      });
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Load tasks if enabled
      if (this.config.autoLoadTasks) {
        await this.loadTasks();
      }
      
      console.log('✅ Intelligent Automation Orchestrator initialized');
      
    } catch (error) {
      console.error('❌ Failed to initialize orchestrator:', error);
      throw error;
    }
  }

  setupEventListeners() {
    // Task scheduler events
    this.taskScheduler.on('taskSuccess', (data) => {
      this.handleTaskSuccess(data);
    });
    
    this.taskScheduler.on('taskFailure', (data) => {
      this.handleTaskFailure(data);
    });
    
    this.taskScheduler.on('taskDisabled', (data) => {
      this.handleTaskDisabled(data);
    });
    
    // Automation manager events
    this.automationManager.on('started', () => {
      this.notificationManager.info('System Started', 'Autonomous automation system started successfully');
    });
    
    this.automationManager.on('stopped', () => {
      this.notificationManager.info('System Stopped', 'Autonomous automation system stopped');
    });
    
    this.automationManager.on('error', (error) => {
      this.notificationManager.error('System Error', 'Automation system encountered an error', { error: error.message });
    });
    
    // Health monitoring
    this.automationManager.on('healthIssue', (health) => {
      this.handleHealthIssue(health);
    });
  }

  async loadTasks() {
    console.log('📦 Loading automation tasks...');
    
    try {
      const taskFiles = await this.getTaskFiles();
      
      for (const taskFile of taskFiles) {
        await this.loadTask(taskFile);
      }
      
      console.log(`✅ Loaded ${this.tasks.size} automation tasks`);
      
    } catch (error) {
      console.error('❌ Failed to load tasks:', error);
      throw error;
    }
  }

  async getTaskFiles() {
    try {
      const files = await fs.readdir(this.config.tasksDirectory);
      return files.filter(file => file.endsWith('.js') && file !== 'README.md');
    } catch (error) {
      console.warn('⚠️ Tasks directory not found, creating...');
      await fs.mkdir(this.config.tasksDirectory, { recursive: true });
      return [];
    }
  }

  async loadTask(taskFile) {
    try {
      const taskPath = path.join(this.config.tasksDirectory, taskFile);
      const TaskClass = require(taskPath);
      
      if (TaskClass && typeof TaskClass === 'function') {
        const taskName = path.basename(taskFile, '.js');
        const task = new TaskClass(this.config.defaultTaskConfig);
        
        this.tasks.set(taskName, task);
        
        // Register with task scheduler
        this.taskScheduler.registerTask(taskName, task, {
          interval: task.config.schedule || 300000, // 5 minutes default
          priority: task.config.priority || 'normal',
          enabled: task.config.enabled !== false,
          maxRetries: task.config.maxRetries || 3
        });
        
        console.log(`📦 Loaded task: ${taskName}`);
      }
    } catch (error) {
      console.error(`❌ Failed to load task ${taskFile}:`, error.message);
    }
  }

  async start() {
    if (this.isRunning) {
      console.warn('⚠️ Orchestrator is already running');
      return;
    }
    
    console.log('🚀 Starting Intelligent Automation Orchestrator...');
    
    try {
      // Start core components
      await this.automationManager.start();
      await this.taskScheduler.start();
      
      // Start performance tracking
      if (this.config.performanceTracking) {
        this.startPerformanceTracking();
      }
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start anomaly detection
      if (this.config.anomalyDetection) {
        this.startAnomalyDetection();
      }
      
      this.isRunning = true;
      this.performanceMetrics.uptime = Date.now();
      
      // Send startup notification
      await this.notificationManager.info(
        'Orchestrator Started',
        'Intelligent Automation Orchestrator is now running',
        { tasks: this.tasks.size, components: ['automationManager', 'taskScheduler', 'notificationManager'] }
      );
      
      console.log('✅ Intelligent Automation Orchestrator started successfully');
      this.emit('started');
      
    } catch (error) {
      console.error('❌ Failed to start orchestrator:', error);
      await this.notificationManager.error('Startup Failed', 'Failed to start automation orchestrator', { error: error.message });
      throw error;
    }
  }

  async stop() {
    if (!this.isRunning) {
      console.warn('⚠️ Orchestrator is not running');
      return;
    }
    
    console.log('🛑 Stopping Intelligent Automation Orchestrator...');
    
    try {
      // Stop core components
      await this.automationManager.stop();
      await this.taskScheduler.stop();
      
      this.isRunning = false;
      
      // Send shutdown notification
      await this.notificationManager.info(
        'Orchestrator Stopped',
        'Intelligent Automation Orchestrator has been stopped'
      );
      
      console.log('✅ Intelligent Automation Orchestrator stopped');
      this.emit('stopped');
      
    } catch (error) {
      console.error('❌ Error stopping orchestrator:', error);
      throw error;
    }
  }

  handleTaskSuccess(data) {
    this.performanceMetrics.totalTasks++;
    this.performanceMetrics.successfulTasks++;
    
    // Update average response time
    const currentAvg = this.performanceMetrics.averageResponseTime;
    const totalTasks = this.performanceMetrics.totalTasks;
    this.performanceMetrics.averageResponseTime = 
      (currentAvg * (totalTasks - 1) + data.executionTime) / totalTasks;
    
    // Send notification for high-priority tasks
    if (data.priority === 'critical' || data.executionTime > 60000) {
      this.notificationManager.info(
        'Task Completed',
        `Task "${data.taskName}" completed successfully`,
        { executionTime: data.executionTime, result: data.result }
      );
    }
  }

  handleTaskFailure(data) {
    this.performanceMetrics.totalTasks++;
    this.performanceMetrics.failedTasks++;
    
    // Send notification for failures
    this.notificationManager.error(
      'Task Failed',
      `Task "${data.taskName}" failed`,
      { executionTime: data.executionTime, error: data.error.message }
    );
  }

  handleTaskDisabled(data) {
    this.notificationManager.warning(
      'Task Disabled',
      `Task "${data.taskName}" has been disabled due to repeated failures`,
      { error: data.error.message }
    );
  }

  handleHealthIssue(health) {
    this.systemHealth.status = 'unhealthy';
    this.systemHealth.lastCheck = new Date();
    this.systemHealth.issues.push({
      timestamp: new Date().toISOString(),
      health: health
    });
    
    // Keep only recent issues
    if (this.systemHealth.issues.length > 10) {
      this.systemHealth.issues = this.systemHealth.issues.slice(-10);
    }
    
    this.notificationManager.warning(
      'System Health Issue',
      'System health check detected issues',
      { health: health }
    );
  }

  startPerformanceTracking() {
    setInterval(() => {
      this.updatePerformanceMetrics();
    }, 60000); // Every minute
  }

  updatePerformanceMetrics() {
    const now = Date.now();
    this.performanceMetrics.uptime = now - this.performanceMetrics.uptime;
    
    // Get task scheduler metrics
    const schedulerStatus = this.taskScheduler.getSchedulerStatus();
    
    // Update metrics
    this.performanceMetrics = {
      ...this.performanceMetrics,
      runningTasks: schedulerStatus.runningTasks,
      queuedTasks: schedulerStatus.queuedTasks,
      systemLoad: schedulerStatus.systemLoad,
      memoryUsage: schedulerStatus.memoryUsage
    };
  }

  startHealthMonitoring() {
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    try {
      const health = {
        timestamp: new Date().toISOString(),
        orchestrator: this.isRunning,
        automationManager: this.automationManager.isRunning,
        taskScheduler: this.taskScheduler.isRunning,
        notificationManager: true, // Always running if we get here
        tasks: this.tasks.size,
        runningTasks: this.taskScheduler.getSchedulerStatus().runningTasks,
        systemLoad: this.getSystemLoad(),
        memoryUsage: this.getMemoryUsage()
      };
      
      // Determine overall health
      const isHealthy = 
        health.orchestrator &&
        health.automationManager &&
        health.taskScheduler &&
        health.systemLoad < 0.9 &&
        health.memoryUsage < 0.95;
      
      health.isHealthy = isHealthy;
      
      if (isHealthy) {
        this.systemHealth.status = 'healthy';
        this.systemHealth.lastCheck = new Date();
      } else {
        this.handleHealthIssue(health);
      }
      
      this.emit('healthCheck', health);
      
    } catch (error) {
      console.error('❌ Health check failed:', error);
      this.handleHealthIssue({ error: error.message });
    }
  }

  startAnomalyDetection() {
    setInterval(() => {
      this.detectAnomalies();
    }, 300000); // Every 5 minutes
  }

  detectAnomalies() {
    const schedulerStatus = this.taskScheduler.getSchedulerStatus();
    
    // Check for unusual patterns
    const anomalies = [];
    
    // High failure rate
    const failureRate = this.performanceMetrics.failedTasks / Math.max(this.performanceMetrics.totalTasks, 1);
    if (failureRate > 0.3) {
      anomalies.push({
        type: 'high_failure_rate',
        value: failureRate,
        threshold: 0.3,
        message: 'Task failure rate is unusually high'
      });
    }
    
    // High system load
    if (schedulerStatus.systemLoad > 0.9) {
      anomalies.push({
        type: 'high_system_load',
        value: schedulerStatus.systemLoad,
        threshold: 0.9,
        message: 'System load is unusually high'
      });
    }
    
    // High memory usage
    if (schedulerStatus.memoryUsage > 0.95) {
      anomalies.push({
        type: 'high_memory_usage',
        value: schedulerStatus.memoryUsage,
        threshold: 0.95,
        message: 'Memory usage is unusually high'
      });
    }
    
    // Send notifications for anomalies
    for (const anomaly of anomalies) {
      this.notificationManager.warning(
        'Anomaly Detected',
        anomaly.message,
        { anomaly: anomaly }
      );
    }
  }

  getSystemLoad() {
    const usage = process.cpuUsage();
    return (usage.user + usage.system) / 1000000;
  }

  getMemoryUsage() {
    const usage = process.memoryUsage();
    return usage.heapUsed / usage.heapTotal;
  }

  // Task management methods
  async addTask(taskName, taskClass, config = {}) {
    try {
      const task = new taskClass({ ...this.config.defaultTaskConfig, ...config });
      this.tasks.set(taskName, task);
      
      this.taskScheduler.registerTask(taskName, task, config);
      
      await this.notificationManager.info(
        'Task Added',
        `New task "${taskName}" has been added to the system`,
        { taskName, config }
      );
      
      return true;
    } catch (error) {
      console.error(`❌ Failed to add task ${taskName}:`, error);
      return false;
    }
  }

  async removeTask(taskName) {
    try {
      this.tasks.delete(taskName);
      this.taskScheduler.disableTask(taskName);
      
      await this.notificationManager.info(
        'Task Removed',
        `Task "${taskName}" has been removed from the system`,
        { taskName }
      );
      
      return true;
    } catch (error) {
      console.error(`❌ Failed to remove task ${taskName}:`, error);
      return false;
    }
  }

  async enableTask(taskName) {
    try {
      this.taskScheduler.enableTask(taskName);
      
      await this.notificationManager.info(
        'Task Enabled',
        `Task "${taskName}" has been enabled`,
        { taskName }
      );
      
      return true;
    } catch (error) {
      console.error(`❌ Failed to enable task ${taskName}:`, error);
      return false;
    }
  }

  async disableTask(taskName) {
    try {
      this.taskScheduler.disableTask(taskName);
      
      await this.notificationManager.info(
        'Task Disabled',
        `Task "${taskName}" has been disabled`,
        { taskName }
      );
      
      return true;
    } catch (error) {
      console.error(`❌ Failed to disable task ${taskName}:`, error);
      return false;
    }
  }

  // Status and reporting methods
  getStatus() {
    return {
      isRunning: this.isRunning,
      uptime: this.performanceMetrics.uptime,
      tasks: {
        total: this.tasks.size,
        status: this.taskScheduler.getAllTaskStatus()
      },
      performance: this.performanceMetrics,
      health: this.systemHealth,
      components: {
        automationManager: this.automationManager?.getStatus(),
        taskScheduler: this.taskScheduler?.getSchedulerStatus(),
        notificationManager: this.notificationManager?.getStatus()
      }
    };
  }

  async generateReport() {
    const status = this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTasks: status.tasks.total,
        successfulTasks: status.performance.successfulTasks,
        failedTasks: status.performance.failedTasks,
        successRate: status.performance.totalTasks > 0 
          ? (status.performance.successfulTasks / status.performance.totalTasks * 100).toFixed(2) + '%'
          : '0%',
        averageResponseTime: status.performance.averageResponseTime.toFixed(2) + 'ms',
        uptime: Math.floor(status.uptime / 1000) + 's'
      },
      details: status
    };
    
    // Save report
    const reportPath = path.join(process.cwd(), 'reports', `orchestrator-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }

  // Emergency methods
  async emergencyStop() {
    console.log('🚨 Emergency stop initiated...');
    
    try {
      await this.notificationManager.critical(
        'Emergency Stop',
        'Emergency stop has been initiated for the automation system'
      );
      
      await this.stop();
      
      console.log('✅ Emergency stop completed');
      
    } catch (error) {
      console.error('❌ Emergency stop failed:', error);
      throw error;
    }
  }

  async restart() {
    console.log('🔄 Restarting orchestrator...');
    
    try {
      await this.stop();
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      await this.start();
      
      console.log('✅ Orchestrator restarted successfully');
      
    } catch (error) {
      console.error('❌ Restart failed:', error);
      throw error;
    }
  }
}

module.exports = IntelligentAutomationOrchestrator; 