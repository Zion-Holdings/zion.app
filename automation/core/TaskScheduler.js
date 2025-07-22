const { EventEmitter } = require('events');

class TaskScheduler extends EventEmitter {
  constructor(config = {}) {
    super();
    
    this.config = {
      // Scheduling configuration
      maxConcurrentTasks: 3,
      defaultInterval: 300000, // 5 minutes
      adaptiveScheduling: true,
      loadThreshold: 0.8,
      memoryThreshold: 0.9,
      
      // Priority levels
      priorities: {
        critical: 1,
        high: 2,
        normal: 3,
        low: 4,
        background: 5
      },
      
      // Performance tracking
      trackPerformance: true,
      performanceHistory: [],
      maxHistorySize: 1000,
      
      ...config
    };
    
    // Task management
    this.tasks = new Map();
    this.scheduledTasks = new Map();
    this.runningTasks = new Set();
    this.taskQueue = [];
    this.performanceMetrics = {};
    
    // Scheduling state
    this.isRunning = false;
    this.schedulerTimer = null;
    this.performanceTimer = null;
  }

  registerTask(taskName, task, schedule = {}) {
    const taskConfig = {
      name: taskName,
      task: task,
      schedule: schedule.interval || this.config.defaultInterval,
      priority: schedule.priority || 'normal',
      enabled: schedule.enabled !== false,
      lastRun: null,
      nextRun: null,
      runCount: 0,
      successCount: 0,
      failureCount: 0,
      averageExecutionTime: 0,
      lastExecutionTime: 0,
      consecutiveFailures: 0,
      maxRetries: schedule.maxRetries || 3,
      retryDelay: schedule.retryDelay || 60000, // 1 minute
      ...schedule
    };
    
    this.tasks.set(taskName, taskConfig);
    this.performanceMetrics[taskName] = {
      executionTimes: [],
      successRate: 1.0,
      averageLoad: 0,
      lastPerformance: Date.now()
    };
    
    // Schedule the task
    this.scheduleTask(taskName);
    
    console.log(`📅 Registered task: ${taskName} (${taskConfig.schedule}ms interval)`);
  }

  scheduleTask(taskName) {
    const taskConfig = this.tasks.get(taskName);
    if (!taskConfig || !taskConfig.enabled) return;
    
    // Calculate next run time
    const now = Date.now();
    const nextRun = taskConfig.lastRun 
      ? taskConfig.lastRun + taskConfig.schedule
      : now + taskConfig.schedule;
    
    taskConfig.nextRun = nextRun;
    
    // Add to scheduled tasks
    this.scheduledTasks.set(taskName, taskConfig);
    
    console.log(`⏰ Scheduled ${taskName} for ${new Date(nextRun).toISOString()}`);
  }

  async start() {
    if (this.isRunning) return;
    
    console.log('🚀 Starting Task Scheduler...');
    this.isRunning = true;
    
    // Start the main scheduler loop
    this.schedulerTimer = setInterval(() => {
      this.processScheduledTasks();
    }, 1000); // Check every second
    
    // Start performance tracking
    if (this.config.trackPerformance) {
      this.performanceTimer = setInterval(() => {
        this.updatePerformanceMetrics();
      }, 30000); // Every 30 seconds
    }
    
    console.log('✅ Task Scheduler started');
  }

  async stop() {
    if (!this.isRunning) return;
    
    console.log('🛑 Stopping Task Scheduler...');
    this.isRunning = false;
    
    if (this.schedulerTimer) {
      clearInterval(this.schedulerTimer);
      this.schedulerTimer = null;
    }
    
    if (this.performanceTimer) {
      clearInterval(this.performanceTimer);
      this.performanceTimer = null;
    }
    
    // Wait for running tasks to complete
    while (this.runningTasks.size > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('✅ Task Scheduler stopped');
  }

  async processScheduledTasks() {
    const now = Date.now();
    const tasksToRun = [];
    
    // Find tasks that should run now
    for (const [taskName, taskConfig] of this.scheduledTasks) {
      if (now >= taskConfig.nextRun && !this.runningTasks.has(taskName)) {
        tasksToRun.push({ name: taskName, config: taskConfig });
      }
    }
    
    // Sort by priority
    tasksToRun.sort((a, b) => {
      const priorityA = this.config.priorities[a.config.priority];
      const priorityB = this.config.priorities[b.config.priority];
      return priorityA - priorityB;
    });
    
    // Run tasks (respecting concurrency limit)
    for (const { name, config } of tasksToRun) {
      if (this.runningTasks.size >= this.config.maxConcurrentTasks) {
        // Queue the task for later
        this.queueTask(name, config);
        continue;
      }
      
      // Check if we should run this task based on system conditions
      if (!this.shouldRunTask(name, config)) {
        // Reschedule for later
        this.rescheduleTask(name, config, 60000); // 1 minute delay
        continue;
      }
      
      // Run the task
      await this.runTask(name, config);
    }
  }

  shouldRunTask(taskName, config) {
    // Check system load
    const systemLoad = this.getSystemLoad();
    if (systemLoad > this.config.loadThreshold) {
      console.log(`⚠️ High system load (${systemLoad.toFixed(2)}), skipping ${taskName}`);
      return false;
    }
    
    // Check memory usage
    const memoryUsage = this.getMemoryUsage();
    if (memoryUsage > this.config.memoryThreshold) {
      console.log(`⚠️ High memory usage (${memoryUsage.toFixed(2)}), skipping ${taskName}`);
      return false;
    }
    
    // Check consecutive failures
    if (config.consecutiveFailures >= config.maxRetries) {
      console.log(`⚠️ Too many consecutive failures for ${taskName}, skipping`);
      return false;
    }
    
    // Check task-specific conditions
    const performance = this.performanceMetrics[taskName];
    if (performance && performance.successRate < 0.5) {
      console.log(`⚠️ Low success rate for ${taskName} (${performance.successRate.toFixed(2)}), skipping`);
      return false;
    }
    
    return true;
  }

  async runTask(taskName, config) {
    const startTime = Date.now();
    this.runningTasks.add(taskName);
    
    try {
      console.log(`🚀 Running task: ${taskName}`);
      
      // Run the task
      const result = await config.task.run();
      
      // Record success
      const executionTime = Date.now() - startTime;
      this.recordTaskSuccess(taskName, config, executionTime, result);
      
      // Reschedule for next run
      this.rescheduleTask(taskName, config);
      
      console.log(`✅ Task completed: ${taskName} (${executionTime}ms)`);
      
    } catch (error) {
      // Record failure
      const executionTime = Date.now() - startTime;
      this.recordTaskFailure(taskName, config, executionTime, error);
      
      console.error(`❌ Task failed: ${taskName}`, error.message);
      
      // Handle retry logic
      await this.handleTaskFailure(taskName, config, error);
      
    } finally {
      this.runningTasks.delete(taskName);
    }
  }

  recordTaskSuccess(taskName, config, executionTime, result) {
    config.lastRun = Date.now();
    config.runCount++;
    config.successCount++;
    config.lastExecutionTime = executionTime;
    config.consecutiveFailures = 0;
    
    // Update average execution time
    config.averageExecutionTime = 
      (config.averageExecutionTime * (config.runCount - 1) + executionTime) / config.runCount;
    
    // Update performance metrics
    this.updateTaskPerformance(taskName, executionTime, true);
    
    this.emit('taskSuccess', { taskName, executionTime, result });
  }

  recordTaskFailure(taskName, config, executionTime, error) {
    config.lastRun = Date.now();
    config.runCount++;
    config.failureCount++;
    config.lastExecutionTime = executionTime;
    config.consecutiveFailures++;
    
    // Update performance metrics
    this.updateTaskPerformance(taskName, executionTime, false);
    
    this.emit('taskFailure', { taskName, executionTime, error });
  }

  async handleTaskFailure(taskName, config, error) {
    if (config.consecutiveFailures < config.maxRetries) {
      console.log(`🔄 Retrying task ${taskName} in ${config.retryDelay}ms (attempt ${config.consecutiveFailures}/${config.maxRetries})`);
      
      // Reschedule with retry delay
      this.rescheduleTask(taskName, config, config.retryDelay);
    } else {
      console.error(`❌ Task ${taskName} failed ${config.maxRetries} times, disabling`);
      
      // Disable the task
      config.enabled = false;
      this.scheduledTasks.delete(taskName);
      
      this.emit('taskDisabled', { taskName, error });
    }
  }

  updateTaskPerformance(taskName, executionTime, success) {
    const metrics = this.performanceMetrics[taskName];
    if (!metrics) return;
    
    // Update execution times
    metrics.executionTimes.push(executionTime);
    if (metrics.executionTimes.length > 100) {
      metrics.executionTimes = metrics.executionTimes.slice(-100);
    }
    
    // Update success rate
    const task = this.tasks.get(taskName);
    if (task) {
      metrics.successRate = task.successCount / task.runCount;
    }
    
    // Update average load
    metrics.averageLoad = this.getSystemLoad();
    metrics.lastPerformance = Date.now();
  }

  rescheduleTask(taskName, config, delay = null) {
    const interval = delay || config.schedule;
    const nextRun = Date.now() + interval;
    
    config.nextRun = nextRun;
    this.scheduledTasks.set(taskName, config);
    
    console.log(`⏰ Rescheduled ${taskName} for ${new Date(nextRun).toISOString()}`);
  }

  queueTask(taskName, config) {
    this.taskQueue.push({ name: taskName, config, priority: this.config.priorities[config.priority] });
    
    // Sort queue by priority
    this.taskQueue.sort((a, b) => a.priority - b.priority);
    
    console.log(`📋 Queued task: ${taskName}`);
  }

  async processQueue() {
    while (this.taskQueue.length > 0 && this.runningTasks.size < this.config.maxConcurrentTasks) {
      const { name, config } = this.taskQueue.shift();
      
      if (this.shouldRunTask(name, config)) {
        await this.runTask(name, config);
      } else {
        // Put it back in the queue
        this.queueTask(name, config);
        break;
      }
    }
  }

  getSystemLoad() {
    // This is a simplified system load calculation
    // In production, you'd use a proper system monitoring library
    const usage = process.cpuUsage();
    return (usage.user + usage.system) / 1000000; // Convert to seconds
  }

  getMemoryUsage() {
    const usage = process.memoryUsage();
    return usage.heapUsed / usage.heapTotal;
  }

  updatePerformanceMetrics() {
    // Update adaptive scheduling based on performance
    if (this.config.adaptiveScheduling) {
      this.adjustScheduling();
    }
    
    // Store performance history
    if (this.config.trackPerformance) {
      this.performanceHistory.push({
        timestamp: Date.now(),
        systemLoad: this.getSystemLoad(),
        memoryUsage: this.getMemoryUsage(),
        runningTasks: this.runningTasks.size,
        queuedTasks: this.taskQueue.length
      });
      
      // Keep history size manageable
      if (this.performanceHistory.length > this.config.maxHistorySize) {
        this.performanceHistory = this.performanceHistory.slice(-this.config.maxHistorySize);
      }
    }
  }

  adjustScheduling() {
    const recentHistory = this.performanceHistory.slice(-10);
    if (recentHistory.length < 5) return;
    
    const avgLoad = recentHistory.reduce((sum, h) => sum + h.systemLoad, 0) / recentHistory.length;
    const avgMemory = recentHistory.reduce((sum, h) => sum + h.memoryUsage, 0) / recentHistory.length;
    
    // Adjust thresholds based on performance
    if (avgLoad < 0.5) {
      this.config.loadThreshold = Math.min(0.9, this.config.loadThreshold + 0.05);
      console.log(`📈 Increasing load threshold to ${this.config.loadThreshold.toFixed(2)}`);
    } else if (avgLoad > 0.8) {
      this.config.loadThreshold = Math.max(0.6, this.config.loadThreshold - 0.05);
      console.log(`📉 Decreasing load threshold to ${this.config.loadThreshold.toFixed(2)}`);
    }
    
    if (avgMemory < 0.7) {
      this.config.memoryThreshold = Math.min(0.95, this.config.memoryThreshold + 0.05);
      console.log(`📈 Increasing memory threshold to ${this.config.memoryThreshold.toFixed(2)}`);
    } else if (avgMemory > 0.9) {
      this.config.memoryThreshold = Math.max(0.7, this.config.memoryThreshold - 0.05);
      console.log(`📉 Decreasing memory threshold to ${this.config.memoryThreshold.toFixed(2)}`);
    }
  }

  getTaskStatus(taskName) {
    const task = this.tasks.get(taskName);
    if (!task) return null;
    
    return {
      name: taskName,
      enabled: task.enabled,
      lastRun: task.lastRun,
      nextRun: task.nextRun,
      runCount: task.runCount,
      successCount: task.successCount,
      failureCount: task.failureCount,
      successRate: task.runCount > 0 ? task.successCount / task.runCount : 0,
      averageExecutionTime: task.averageExecutionTime,
      consecutiveFailures: task.consecutiveFailures,
      isRunning: this.runningTasks.has(taskName),
      isQueued: this.taskQueue.some(t => t.name === taskName)
    };
  }

  getAllTaskStatus() {
    const status = {};
    for (const taskName of this.tasks.keys()) {
      status[taskName] = this.getTaskStatus(taskName);
    }
    return status;
  }

  enableTask(taskName) {
    const task = this.tasks.get(taskName);
    if (task) {
      task.enabled = true;
      task.consecutiveFailures = 0;
      this.scheduleTask(taskName);
      console.log(`✅ Enabled task: ${taskName}`);
    }
  }

  disableTask(taskName) {
    const task = this.tasks.get(taskName);
    if (task) {
      task.enabled = false;
      this.scheduledTasks.delete(taskName);
      console.log(`❌ Disabled task: ${taskName}`);
    }
  }

  updateTaskSchedule(taskName, newSchedule) {
    const task = this.tasks.get(taskName);
    if (task) {
      Object.assign(task, newSchedule);
      this.scheduleTask(taskName);
      console.log(`📅 Updated schedule for task: ${taskName}`);
    }
  }

  getSchedulerStatus() {
    return {
      isRunning: this.isRunning,
      totalTasks: this.tasks.size,
      scheduledTasks: this.scheduledTasks.size,
      runningTasks: this.runningTasks.size,
      queuedTasks: this.taskQueue.length,
      systemLoad: this.getSystemLoad(),
      memoryUsage: this.getMemoryUsage(),
      performanceHistory: this.performanceHistory.slice(-10)
    };
  }
}

module.exports = TaskScheduler; 