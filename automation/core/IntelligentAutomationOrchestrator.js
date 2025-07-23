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

const EventEmitter = require('events');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const path = require('path');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const fs = require('fs');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// Core components
const AutonomousAutomationManager = require('./AutonomousAutomationManager');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const TaskScheduler = require('./TaskScheduler');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const NotificationManager = require('./NotificationManager');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const AnomalyDetector = require('./AnomalyDetector');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const ReportGenerator = require('./ReportGenerator');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const DashboardServer = require('../dashboard/DashboardServer');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// Automation tasks
const DependencyUpdater = require('../tasks/DependencyUpdater');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const SecurityScanner = require('../tasks/SecurityScanner');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const CodeQualityEnforcer = require('../tasks/CodeQualityEnforcer');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const StaleCleaner = require('../tasks/StaleCleaner');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

class IntelligentAutomationOrchestrator extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      autonomous: {
        enabled: true,
        selfHealing: true,
        learning: true,
        adaptiveScheduling: true,
      },
      monitoring: {
        enabled: true,
        interval: 60000, // 1 minute
        healthCheckInterval: 300000, // 5 minutes
      },
      reporting: {
        enabled: true,
        daily: true,
        weekly: true,
        monthly: false,
      },
      dashboard: {
        enabled: true,
        port: 3001,
      },
      tasks: {
        dependencyUpdater: {
          enabled: true,
          interval: 24 * 60 * 60 * 1000, // 24 hours
        },
        securityScanner: {
          enabled: true,
          interval: 6 * 60 * 60 * 1000, // 6 hours
        },
        codeQualityEnforcer: {
          enabled: true,
          interval: 2 * 60 * 60 * 1000, // 2 hours
        },
        staleCleaner: {
          enabled: true,
          interval: 12 * 60 * 60 * 1000, // 12 hours
        },
      },
      ...config,
    };

    // Core components
    this.automationManager = null;
    this.taskScheduler = null;
    this.notificationManager = null;
    this.anomalyDetector = null;
    this.reportGenerator = null;
    this.dashboard = null;

    // State
    this.isRunning = false;
    this.startTime = null;
    this.healthStatus = 'healthy';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    this.monitoringInterval = null;
    this.healthCheckInterval = null;

    // Event handlers
    this.setupEventHandlers();
  }

  async initialize() {
    console.log('🚀 Initializing Intelligent Automation Orchestrator...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    try {
      // Initialize core components
      await this.initializeComponents();

      // Register automation tasks
      await this.registerTasks();

      // Setup monitoring
      if (this.config.monitoring.enabled) {
        this.setupMonitoring();
      }

      // Start dashboard
      if (this.config.dashboard.enabled) {
        await this.startDashboard();
      }

      // Setup reporting
      if (this.config.reporting.enabled) {
        this.setupReporting();
      }

      console.log(
        '✅ Intelligent Automation Orchestrator initialized successfully','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      );
      this.emit('initialized');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    } catch (error) {
      console.error('❌ Failed to initialize orchestrator:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.emit('initializationFailed', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      throw error;
    }
  }

  async initializeComponents() {
    // Initialize notification manager first (needed by other components)
    this.notificationManager = new NotificationManager();

    // Initialize anomaly detector
    this.anomalyDetector = new AnomalyDetector();

    // Initialize task scheduler
    this.taskScheduler = new TaskScheduler();

    // Initialize automation manager
    this.automationManager = new AutonomousAutomationManager({
      enableSelfHealing: this.config.autonomous.selfHealing,
      enableLearning: this.config.autonomous.learning,
      notificationManager: this.notificationManager,
      anomalyDetector: this.anomalyDetector,
      taskScheduler: this.taskScheduler,
    });

    // Initialize report generator
    this.reportGenerator = new ReportGenerator({
      notificationManager: this.notificationManager,
    });

    // Initialize dashboard
    this.dashboard = new DashboardServer({
      port: this.config.dashboard.port,
    });

    // Connect components
    this.connectComponents();
  }

  connectComponents() {
    // Connect automation manager events
    this.automationManager.on('taskCompleted', (data) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.taskScheduler.recordTaskExecution(
        data.taskName,
        data.success,
        data.duration,
      );
      this.anomalyDetector.recordMetric(
        'taskDuration','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        data.duration,
        Date.now(),
        {
          taskName: data.taskName,
          success: data.success,
        },
      );

      if (!data.success) {
        this.anomalyDetector.recordFailure(data.taskName, data.error);
      }

      this.broadcastUpdate('taskCompleted', data);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    });

    this.automationManager.on('taskFailed', (data) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.notificationManager.notifyError(
        `Task ${data.taskName} failed: ${data.error}`,
        data.taskName,
        { error: data.error, duration: data.duration },
      );

      this.broadcastUpdate('taskFailed', data);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    });

    // Connect task scheduler events
    this.taskScheduler.on('intervalUpdated', (data) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.notificationManager.notifyInfo(
        `Task ${data.taskName} interval updated: ${data.change}`,
        'scheduler','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        data,
      );

      this.broadcastUpdate('intervalUpdated', data);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    });

    // Connect anomaly detector events
    this.anomalyDetector.on('anomalyDetected', (anomaly) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.notificationManager.notifyWarning(
        `Anomaly detected in ${anomaly.metricName || anomaly.patternName}: ${anomaly.anomalyType}`,
        'anomalyDetector','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        anomaly,
      );

      this.broadcastUpdate('anomalyDetected', anomaly);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    });

    // Connect report generator events
    this.reportGenerator.on('reportGenerated', (report) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.notificationManager.notifySuccess(
        `${report.type} report generated successfully`,
        'reportGenerator','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        { reportId: report.id, type: report.type },
      );

      this.broadcastUpdate('reportGenerated', report);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    });
  }

  async registerTasks() {
    console.log('📋 Registering automation tasks...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    const tasks = [];

    // Register enabled tasks
    if (this.config.tasks.dependencyUpdater.enabled) {
      tasks.push({
        name: 'dependencyUpdater','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        task: new DependencyUpdater(),
        config: this.config.tasks.dependencyUpdater,
      });
    }

    if (this.config.tasks.securityScanner.enabled) {
      tasks.push({
        name: 'securityScanner','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        task: new SecurityScanner(),
        config: this.config.tasks.securityScanner,
      });
    }

    if (this.config.tasks.codeQualityEnforcer.enabled) {
      tasks.push({
        name: 'codeQualityEnforcer','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        task: new CodeQualityEnforcer(),
        config: this.config.tasks.codeQualityEnforcer,
      });
    }

    if (this.config.tasks.staleCleaner.enabled) {
      tasks.push({
        name: 'staleCleaner','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        task: new StaleCleaner(),
        config: this.config.tasks.staleCleaner,
      });
    }

    // Register tasks with automation manager
    for (const { name, task, config } of tasks) {
      // Create task config object with run function
      const taskConfig = {
        ...config,
        run: async () => {
          try {
            return await task.run();
          } catch (error) {
            console.error(`❌ Task ${name} failed:`, error.message);
            throw error;
          }
        },
      };

      await this.automationManager.registerTask(name, taskConfig);
      console.log(`✅ Registered task: ${name}`);
    }

    console.log(`📋 Registered ${tasks.length} automation tasks`);
  }

  setupMonitoring() {
    console.log('📊 Setting up monitoring...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    // System monitoring interval
    this.monitoringInterval = setInterval(async () => {
      await this.performSystemMonitoring();
    }, this.config.monitoring.interval);

    // Health check interval
    this.healthCheckInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.monitoring.healthCheckInterval);
  }

  async performSystemMonitoring() {
    try {
      // Update system metrics
      const metrics = await this.getSystemMetrics();

      // Record metrics in anomaly detector
      this.anomalyDetector.recordMetric('cpuLoad', metrics.cpu, Date.now());'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.anomalyDetector.recordMetric(
        'memoryUsage','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        metrics.memory,
        Date.now(),
      );

      // Update task scheduler with system metrics
      this.taskScheduler.updateSystemMetrics({
        cpuLoad: metrics.cpu,
        memoryUsage: metrics.memory,
      });

      // Broadcast metrics update
      this.broadcastUpdate('metricsUpdated', metrics);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    } catch (error) {
      console.error('❌ System monitoring failed:', error.message);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.anomalyDetector.recordActivity('monitoring_failure', {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        error: error.message,
      });
    }
  }

  async performHealthCheck() {
    try {
      const healthScore = this.anomalyDetector.getHealthScore();
      const previousStatus = this.healthStatus;

      // Update health status
      if (healthScore >= 90) {
        this.healthStatus = 'healthy';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      } else if (healthScore >= 70) {
        this.healthStatus = 'warning';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      } else {
        this.healthStatus = 'critical';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      }

      // Notify if status changed
      if (previousStatus !== this.healthStatus) {
        this.notificationManager.notifyWarning(
          `System health status changed from ${previousStatus} to ${this.healthStatus} (score: ${healthScore})`,
          'healthMonitor','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          { previousStatus, currentStatus: this.healthStatus, healthScore },
        );
      }

      // Broadcast health update
      this.broadcastUpdate('healthUpdated', {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        status: this.healthStatus,
        score: healthScore,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('❌ Health check failed:', error.message);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  setupReporting() {
    console.log('📊 Setting up automated reporting...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    // Schedule daily reports
    if (this.config.reporting.daily) {
      this.scheduleReport('daily');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    // Schedule weekly reports
    if (this.config.reporting.weekly) {
      this.scheduleReport('weekly');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    // Schedule monthly reports
    if (this.config.reporting.monthly) {
      this.scheduleReport('monthly');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  scheduleReport(type) {
    const schedules = {
      daily: '0 9 * * *', // 9 AM daily'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      weekly: '0 10 * * 1', // 10 AM Monday'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      monthly: '0 11 1 * *', // 11 AM 1st of month'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    };

    const cron = require('node-cron');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    const schedule = schedules[type];

    if (schedule) {
      cron.schedule(schedule, async () => {
        try {
          await this.generateReport(type);
        } catch (error) {
          console.error(`❌ Failed to generate ${type} report:`, error.message);
        }
      });

      console.log(`📅 Scheduled ${type} reports`);
    }
  }

  async startDashboard() {
    try {
      // Set components in dashboard
      this.dashboard.setComponents(
        this.automationManager,
        this.taskScheduler,
        this.notificationManager,
        this.anomalyDetector,
        this.reportGenerator,
      );

      // Start dashboard server
      await this.dashboard.start();

      console.log(
        `🌐 Dashboard started at http://localhost:${this.config.dashboard.port}`,
      );
    } catch (error) {
      console.error('❌ Failed to start dashboard:', error.message);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️ Orchestrator is already running');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      return;
    }

    console.log('🚀 Starting Intelligent Automation Orchestrator...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    try {
      await this.initialize();

      // Start automation manager
      await this.automationManager.start();

      this.isRunning = true;
      this.startTime = new Date().toISOString();

      console.log(
        '✅ Intelligent Automation Orchestrator started successfully','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      );
      this.emit('started');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

      // Send startup notification
      await this.notificationManager.notifySuccess(
        'Intelligent Automation Orchestrator started successfully','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        'orchestrator','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        {
          startTime: this.startTime,
          components: Object.keys(this.config.tasks).filter(
            (key) => this.config.tasks[key].enabled,
          ),
        },
      );
    } catch (error) {
      console.error('❌ Failed to start orchestrator:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.emit('startFailed', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      throw error;
    }
  }

  async stop() {
    if (!this.isRunning) {
      console.log('⚠️ Orchestrator is not running');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      return;
    }

    console.log('🛑 Stopping Intelligent Automation Orchestrator...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    try {
      // Stop monitoring intervals
      if (this.monitoringInterval) {
        clearInterval(this.monitoringInterval);
      }
      if (this.healthCheckInterval) {
        clearInterval(this.healthCheckInterval);
      }

      // Stop automation manager
      if (this.automationManager) {
        await this.automationManager.stop();
      }

      // Stop dashboard
      if (this.dashboard) {
        await this.dashboard.stop();
      }

      this.isRunning = false;

      console.log('✅ Intelligent Automation Orchestrator stopped');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.emit('stopped');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    } catch (error) {
      console.error('❌ Error stopping orchestrator:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      throw error;
    }
  }

  async generateReport(type) {
    if (!this.reportGenerator) {
      throw new Error('Report generator not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    const data = {
      tasks: this.automationManager.getTasksStatus(),
      anomalies: this.anomalyDetector.getRecentAnomalies(50),
      notifications: this.notificationManager.getRecentNotifications(50),
      systemMetrics: await this.getSystemMetrics(),
      performance: this.taskScheduler.getSchedulingStats(),
    };

    return await this.reportGenerator.generateReport(type, data);
  }

  async getSystemMetrics() {
    const os = require('os');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    return {
      cpu: Math.round((1 - os.loadavg()[0] / os.cpus().length) * 100),
      memory: Math.round((1 - os.freemem() / os.totalmem()) * 100),
      uptime: process.uptime(),
      platform: os.platform(),
      arch: os.arch(),
    };
  }

  broadcastUpdate(type, data) {
    // Broadcast to dashboard if available
    if (this.dashboard) {
      this.dashboard.broadcastUpdate(type, data);
    }

    // Emit event for other listeners
    this.emit(type, data);
  }

  setupEventHandlers() {
    // Handle process signals
    process.on('SIGINT', async () => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      console.log('\n🛑 Received SIGINT, shutting down gracefully...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      await this.stop();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      console.log('\n🛑 Received SIGTERM, shutting down gracefully...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      await this.stop();
      process.exit(0);
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', async (error) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      console.error('❌ Uncaught exception:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      await this.notificationManager.notifyError(
        `Uncaught exception: ${error.message}`,
        'orchestrator','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        { error: error.stack },
      );
      await this.stop();
      process.exit(1);
    });

    process.on('unhandledRejection', async (reason, promise) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      console.error('❌ Unhandled rejection:', reason);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      await this.notificationManager.notifyError(
        `Unhandled rejection: ${reason}`,
        'orchestrator','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        { reason: reason.toString() },
      );
    });
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      startTime: this.startTime,
      healthStatus: this.healthStatus,
      uptime: this.startTime
        ? Date.now() - new Date(this.startTime).getTime()
        : 0,
      components: {
        automationManager: !!this.automationManager,
        taskScheduler: !!this.taskScheduler,
        notificationManager: !!this.notificationManager,
        anomalyDetector: !!this.anomalyDetector,
        reportGenerator: !!this.reportGenerator,
        dashboard: !!this.dashboard,
      },
      config: {
        autonomous: this.config.autonomous,
        monitoring: this.config.monitoring,
        reporting: this.config.reporting,
        dashboard: this.config.dashboard,
      },
    };
  }
}

module.exports = IntelligentAutomationOrchestrator;
