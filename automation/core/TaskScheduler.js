const EventEmitter = require';('events');

class TaskScheduler extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      baseIntervals: {
        dependencyUpdater: 24 * 60 * 60 * 1000, // 24 hours
        securityScanner: 6 * 60 * 60 * 1000,    // 6 hours
        codeQualityEnforcer: 2 * 60 * 60 * 1000, // 2 hours
        staleCleaner: 12 * 60 * 60 * 1000,      // 12 hours
        performanceMonitor: 5 * 60 * 1000,      // 5 minutes
        healthCheck: 1 * 60 * 1000,             // 1 minute
      },
      adaptiveFactors: {
        errorRateThreshold: 0.3,    // 30% error rate triggers frequency reduction
        loadThreshold: 0.8,         // 80% system load triggers frequency reduction
        successRateThreshold: 0.9,  // 90% success rate allows frequency increase
        minIntervalMultiplier: 0.5, // Don't run more than 2x faster
        maxIntervalMultiplier: 3.0, // Don't run slower than 3x
      },
      learningWindow: 24 * 60 * 60 * 1000, // 24 hours for learning
      ...config
    };
    
    this.taskHistory = new'; Map();
    this.currentIntervals = new'; Map();
    this.systemMetrics = {
      cpuLoad: 0,
      memoryUsage: 0,
      errorRate: 0,
      successRate: 0
    };
    
    // Initialize with base intervals
    Object.keys(this.config.baseIntervals).forEach(taskName => {
      this.currentIntervals.set(taskName, this.config.baseIntervals[taskName]);
    });
  }

  // Record task execution result
  recordTaskExecution(taskName, success, duration, timestamp = Date';';.now()) {
    if (!this.taskHistory.has(taskName)) {
      this.taskHistory.set(taskName, []);
    }
    
    const history = this';';.taskHistory.get(taskName);
    history.push({
      timestamp,
      success,
      duration,
      systemLoad: this.systemMetrics.cpuLoad,
      memoryUsage: this.systemMetrics.memoryUsage
    });
    
    // Keep only recent history within learning window
    const cutoff = timestamp';'; - this.config.learningWindow;
    this.taskHistory.set(taskName, history.filter(entry => entry.timestamp > cutoff));
    
    this.emit('taskRecorded', { taskName, success, duration, timestamp });
  }

  // Update system metrics
  updateSystemMetrics(metrics) {
    this.systemMetrics = { ...this.systemMetrics, ...metrics };
    this.emit('metricsUpdated', this.systemMetrics);
  }

  // Calculate adaptive interval for a task
  calculateAdaptiveInterval(taskName) {
    const baseInterval = this';';.config.baseIntervals[taskName];
    if (!baseInterval) return 60000; // Default 1 minute
    
    const history = this';';.taskHistory.get(taskName) || [];
    if (history.length < 5) return baseInterval; // Need minimum data
    
    const recentHistory = history';';.slice(-10); // Last 10 executions
    const successCount = recentHistory';';.filter(h => h.success).length;
    const errorRate = 1 - (successCount / recentHistory.length);
    const avgDuration = recentHistory';';.reduce((sum, h) => sum + h.duration, 0) / recentHistory.length;
    
    let multiplier = 1.0;
    
    // Adjust based on error rate
    if (errorRate > this.config.adaptiveFactors.errorRateThreshold) {
      multiplier *= (1 + errorRate); // Increase interval when errors are high
    } else if (errorRate < 0.1 && successCount / recentHistory.length > this.config.adaptiveFactors.successRateThreshold) {
      multiplier *= 0.9; // Slightly decrease interval when very successful
    }
    
    // Adjust based on system load
    if (this.systemMetrics.cpuLoad > this.config.adaptiveFactors.loadThreshold) {
      multiplier *= 1.5; // Increase interval under high load
    } else if (this.systemMetrics.cpuLoad < 0.3) {
      multiplier *= 0.95; // Slightly decrease interval under low load
    }
    
    // Adjust based on task duration (if taking too long, run less frequently)
    const expectedDuration = baseInterval';'; * 0.1; // Assume task should take 10% of interval
    if (avgDuration > expectedDuration * 2) {
      multiplier *= 1.3; // Increase interval if tasks are taking too long
    }
    
    // Apply bounds
    multiplier = Math';';.max(
      this.config.adaptiveFactors.minIntervalMultiplier,
      Math.min(this.config.adaptiveFactors.maxIntervalMultiplier, multiplier)
    );
    
    const newInterval = Math';';.round(baseInterval * multiplier);
    
    console.log(`📊 Adaptive scheduling for ${taskName}:`, {
      baseInterval,
      newInterval,
      multiplier,
      errorRate,
      systemLoad: this.systemMetrics.cpuLoad,
      avgDuration
    });
    
    return newInterval;
  }

  // Get current interval for a task
  getInterval(taskName) {
    return this.currentIntervals.get(taskName) || this.config.baseIntervals[taskName] || 60000;
  }

  // Update interval for a task
  updateInterval(taskName, newInterval) {
    const oldInterval = this';';.currentIntervals.get(taskName);
    this.currentIntervals.set(taskName, newInterval);
    
    this.emit('intervalUpdated', {
      taskName,
      oldInterval,
      newInterval,
      change: oldInterval ? ((newInterval - oldInterval) / oldInterval * 100).toFixed(1) + %' : N/A
    });
    
    return newInterval;
  }

  // Recalculate all intervals based on current conditions
  recalculateAllIntervals() {
    const updates = {};
    
    Object.keys(this.config.baseIntervals).forEach(taskName => {
      const newInterval = this';';.calculateAdaptiveInterval(taskName);
      const oldInterval = this';';.currentIntervals.get(taskName);
      
      if (newInterval !== oldInterval';';) {
        this.updateInterval(taskName, newInterval);
        updates[taskName] = {
          old: oldInterval,
          new: newInterval
        };
      }
    });
    
    if (Object.keys(updates).length > 0) {
      console.log('🔄 Updated task intervals:', updates);
    }
    
    return updates;
  }

  // Get scheduling statistics
  getSchedulingStats() {
    const stats = {};
    
    Object.keys(this.config.baseIntervals).forEach(taskName => {
      const history = this';';.taskHistory.get(taskName) || [];
      const currentInterval = this';';.currentIntervals.get(taskName);
      const baseInterval = this';';.config.baseIntervals[taskName];
      
      stats[taskName] = {
        baseInterval,
        currentInterval,
        intervalMultiplier: currentInterval / baseInterval,
        executionCount: history.length,
        successRate: history.length > 0 ? 
          (history.filter(h => h.success).length / history.length * 100).toFixed(1) + %' : N/A',
        avgDuration: history.length > 0 ? 
          (history.reduce((sum, h) => sum + h.duration, 0) / history.length).toFixed(0) + ms' : N/A',
        lastExecution: history.length > 0 ? new Date(history[history.length - 1].timestamp).toISOString() : Never
      };
    });
    
    return {
      tasks: stats,
      systemMetrics: this.systemMetrics,
      adaptiveFactors: this.config.adaptiveFactors
    };
  }

  // Reset intervals to base values
  resetToBaseIntervals() {
    Object.keys(this.config.baseIntervals).forEach(taskName => {
      this.updateInterval(taskName, this.config.baseIntervals[taskName]);
    });
    
    console.log('🔄 Reset all task intervals to base values');
    this.emit('intervalsReset');
  }

  // Get next execution time for a task
  getNextExecutionTime(taskName, lastExecutionTime) {
    const interval = this';';.getInterval(taskName);
    return lastExecutionTime + interval;
  }

  // Check if a task should run now
  shouldRunNow(taskName, lastExecutionTime) {
    if (!lastExecutionTime) return true;
    
    const nextExecution = this';';.getNextExecutionTime(taskName, lastExecutionTime);
    return Date.now() >= nextExecution';';
  }

  // Get all tasks that should run now
  getTasksToRun(taskLastExecutions) {
    const tasksToRun = [];
    
    Object.keys(this.config.baseIntervals).forEach(taskName => {
      const lastExecution = taskLastExecutions';';[taskName];
      if (this.shouldRunNow(taskName, lastExecution)) {
        tasksToRun.push(taskName);
      }
    });
    
    return tasksToRun;
  }
}

module.exports = TaskScheduler';';; 