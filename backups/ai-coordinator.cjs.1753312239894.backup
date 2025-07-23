#!/usr/bin/env node

/**
 * AI Coordinator
 *
 * This script coordinates multiple AI assistants across different computers
 * to work together on continuous app improvement.
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
const os = require('os')
const crypto = require('crypto')
const EventEmitter = require('events');

// Configuration
const COORDINATOR_CONFIG = {
  // AI assistant types and their capabilities
  assistantTypes: {
    'code-analyzer': {
      capabilities: ['linting', 'code-review', 'refactoring'],
      priority: 'high',
      maxConcurrentTasks: 3,
    },
    'security-scanner': {
      capabilities: [
        'vulnerability-scan',
        'dependency-analysis',
        'security-review',
      ],
      priority: 'critical',
      maxConcurrentTasks: 2,
    },
    'performance-optimizer': {
      capabilities: ['performance-analysis', 'optimization', 'bundle-analysis'],
      priority: 'medium',
      maxConcurrentTasks: 2,
    },
    'test-generator': {
      capabilities: [
        'test-generation',
        'test-maintenance',
        'coverage-analysis',
      ],
      priority: 'medium',
      maxConcurrentTasks: 2,
    },
    'documentation-generator': {
      capabilities: [
        'doc-generation',
        'api-documentation',
        'readme-maintenance',
      ],
      priority: 'low',
      maxConcurrentTasks: 1,
    },
  },

  // Task types and their requirements
  taskTypes: {
    'lint-fix': {
      requiredCapabilities: ['linting'],
      estimatedDuration: 30000, // 30 seconds
      priority: 'high',
    },
    'security-scan': {
      requiredCapabilities: ['vulnerability-scan'],
      estimatedDuration: 120000, // 2 minutes
      priority: 'critical',
    },
    'performance-optimization': {
      requiredCapabilities: ['performance-analysis'],
      estimatedDuration: 180000, // 3 minutes
      priority: 'medium',
    },
    'test-generation': {
      requiredCapabilities: ['test-generation'],
      estimatedDuration: 240000, // 4 minutes
      priority: 'medium',
    },
    'documentation-update': {
      requiredCapabilities: ['doc-generation'],
      estimatedDuration: 60000, // 1 minute
      priority: 'low',
    },
  },

  // Coordination settings
  coordination: {
    heartbeatInterval: 30000, // 30 seconds
    taskTimeout: 600000, // 10 minutes
    maxRetries: 3,
    loadBalancingStrategy: 'least-loaded', // or 'round-robin', 'priority-based'
    autoScaling: true,
    maxConcurrentTasks: 10,
  },
}
class AICoordinator extends EventEmitter {
  constructor() {
    super();

    this.assistants = new Map();
    this.tasks = new Map();
    this.taskQueue = [];
    this.computers = new Map();
    this.isRunning = false;
    this.startTime = Date.now();

    // Statistics
    this.stats = {
      totalTasks: 0,
      completedTasks: 0,
      failedTasks: 0,
      averageTaskDuration: 0,
      totalAssistants: 0,
      activeAssistants: 0,
    };

    // Initialize logging
    this.setupLogging();
  }

  setupLogging() {
    const logLevels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
    };

    this.log = (level, message, data = {}) => {
      const currentLevel = logLevels[process.env.LOG_LEVEL || 'info'] || 2;
      if (logLevels[level] <= currentLevel) {
        const timestamp = new Date().toISOString()
const logEntry = {
          timestamp,
          level,
          message,
          data,
          coordinator: os.hostname(),
        };

        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`, data);

        // Write to log file
        const logFile = path.join(process.cwd(), 'logs', 'ai-coordinator.log')
const logDir = path.dirname(logFile);
        if (!fs.existsSync(logDir)) {
          fs.mkdirSync(logDir, { recursive: true });
        }
        fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
      }
    };
  }

  async start() {
    this.log('info', 'Starting AI Coordinator...');

    try {
      // Initialize assistant discovery
      await this.discoverAssistants();

      // Start task management
      await this.initializeTaskManagement();

      // Start coordination services
      await this.startCoordinationServices();

      // Start monitoring
      await this.startMonitoring();

      this.isRunning = true;
      this.log('info', 'AI Coordinator started successfully');

      // Start continuous improvement loop
      this.startContinuousImprovementLoop();
    } catch (error) {
      this.log('error', 'Failed to start AI Coordinator', {
        error: error.message,
      });
      throw error;
    }
  }

  async discoverAssistants() {
    this.log('info', 'Discovering AI assistants...');

    // Discover local assistants
    await this.discoverLocalAssistants();

    // Discover remote assistants
    await this.discoverRemoteAssistants();

    this.log('info', 'Assistant discovery completed', {
      totalAssistants: this.assistants.size,
    });
  }

  async discoverLocalAssistants() {
    const configDir = path.join(
      os.homedir(),
      '.cursor',
      'config',
      'assistants',
    );

    if (fs.existsSync(configDir)) {
      const assistantFiles = fs
        .readdirSync(configDir)
        .filter((file) => file.endsWith('.json'));

      for (const file of assistantFiles) {
        try {
          const configPath = path.join(configDir, file)
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
const assistant = new AIAssistant(config, this, 'local');
          await assistant.initialize();

          this.assistants.set(assistant.id, assistant);

          this.log('info', 'Discovered local assistant', {
            name: assistant.name,
            type: assistant.type,
          });
        } catch (error) {
          this.log('warn', 'Failed to load local assistant', {
            file,
            error: error.message,
          });
        }
      }
    }
  }

  async discoverRemoteAssistants() {
    // This would typically involve network discovery
    // For now, we'll use a simple approach
    const networkRange = this.getNetworkRange();

    for (const ip of networkRange.slice(0, 10)) {
      // Limit to first 10 for demo
      try {
        const assistants = await this.discoverAssistantsOnComputer(ip);

        for (const assistantConfig of assistants) {
          const assistant = new AIAssistant(
            assistantConfig,
            this,
            'remote',
            ip,
          );
          await assistant.initialize();

          this.assistants.set(assistant.id, assistant);

          this.log('info', 'Discovered remote assistant', {
            name: assistant.name,
            type: assistant.type,
            computer: ip,
          });
        }
      } catch (error) {
        // Silently continue - not all IPs will have assistants
      }
    }
  }

  async discoverAssistantsOnComputer(ip) {
    try {
      const result = await this.executeRemoteCommand(
        ip,
        'find ~/.cursor/config/assistants -name "*.json" -exec cat {} \\;',
      )
const assistants = []
const lines = result.split('\n').filter((line) => line.trim());

      for (const line of lines) {
        try {
          const config = JSON.parse(line);
          assistants.push(config);
        } catch (error) {
          // Skip invalid JSON
        }
      }

      return assistants;
    } catch (error) {
      return [];
    }
  }

  getNetworkRange() {
    const interfaces = os.networkInterfaces()
const ips = [];

    for (const [name, nets] of Object.entries(interfaces)) {
      for (const net of nets) {
        if (net.family === 'IPv4' && !net.internal) {
          const baseIP = net.address.split('.').slice(0, 3).join('.');
          // Generate range for subnet
          for (let i = 1; i <= 254; i++) {
            ips.push(`${baseIP}.${i}`);
          }
          break; // Only use first external interface
        }
      }
    }

    return ips;
  }

  async executeRemoteCommand(ip, command) {
    return new Promise((resolve, reject) => {
      const ssh = spawn('ssh', [
        `-o ConnectTimeout=5`,
        `-o BatchMode=yes`,
        ip,
        command,
      ]);

      let stdout = '';
      let stderr = '';

      ssh.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      ssh.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      ssh.on('close', (code) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(new Error(stderr || `Command failed with code ${code}`));
        }
      });

      ssh.on('error', (error) => {
        reject(error);
      });
    });
  }

  async initializeTaskManagement() {
    this.log('info', 'Initializing task management...');

    // Start task queue processor
    this.startTaskQueueProcessor();

    // Start load balancer
    this.startLoadBalancer();

    // Start task monitoring
    this.startTaskMonitoring();

    this.log('info', 'Task management initialized');
  }

  startTaskQueueProcessor() {
    setInterval(() => {
      this.processTaskQueue();
    }, 5000); // Process every 5 seconds
  }

  async processTaskQueue() {
    if (this.taskQueue.length === 0) return;

    // Sort tasks by priority
    this.taskQueue.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    // Find available assistants
    const availableAssistants = Array.from(this.assistants.values()).filter(
      (assistant) => assistant.isAvailable(),
    );

    if (availableAssistants.length === 0) return;

    // Distribute tasks
    for (const task of this.taskQueue) {
      const assistant = this.selectAssistantForTask(task, availableAssistants);
      if (assistant) {
        await this.assignTaskToAssistant(task, assistant);
        this.taskQueue = this.taskQueue.filter((t) => t.id !== task.id);
      }
    }
  }

  selectAssistantForTask(task, availableAssistants) {
    const taskConfig = COORDINATOR_CONFIG.taskTypes[task.type];
    if (!taskConfig) return null;

    // Filter assistants by required capabilities
    const capableAssistants = availableAssistants.filter((assistant) =>
      taskConfig.requiredCapabilities.some((cap) =>
        assistant.capabilities.includes(cap),
      ),
    );

    if (capableAssistants.length === 0) return null;

    switch (COORDINATOR_CONFIG.coordination.loadBalancingStrategy) {
      case 'least-loaded':
        return capableAssistants.reduce((min, assistant) =>
          assistant.currentTasks < min.currentTasks ? assistant : min,
        );

      case 'priority-based':
        // Assign critical tasks to assistants with higher priority
        if (task.priority === 'critical') {
          return capableAssistants.reduce((best, assistant) => {
            const bestPriority =
              COORDINATOR_CONFIG.assistantTypes[best.type]?.priority || 'low'
const assistantPriority =
              COORDINATOR_CONFIG.assistantTypes[assistant.type]?.priority ||
              'low'
const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
            return priorityOrder[assistantPriority] <
              priorityOrder[bestPriority]
              ? assistant
              : best;
          });
        }
      // Fall through to round-robin for other priorities

      case 'round-robin':
      default:
        // Simple round-robin selection
        const index = Math.floor(Math.random() * capableAssistants.length);
        return capableAssistants[index];
    }
  }

  async assignTaskToAssistant(task, assistant) {
    try {
      assistant.currentTasks++;
      task.assignedTo = assistant.id;
      task.status = 'running';
      task.startTime = Date.now();

      this.tasks.set(task.id, task);

      this.log('info', 'Assigned task to assistant', {
        taskId: task.id,
        assistant: assistant.name,
        taskType: task.type,
      });

      // Execute task
      await assistant.executeTask(task);
    } catch (error) {
      this.log('error', 'Failed to assign task to assistant', {
        taskId: task.id,
        assistant: assistant.name,
        error: error.message,
      });

      assistant.currentTasks--;
      task.status = 'failed';
      task.error = error.message;

      // Retry if possible
      if (task.retryCount < COORDINATOR_CONFIG.coordination.maxRetries) {
        task.retryCount++;
        task.status = 'pending';
        this.taskQueue.push(task);
      }
    }
  }

  startLoadBalancer() {
    setInterval(() => {
      this.rebalanceLoad();
    }, 60000); // Rebalance every minute
  }

  async rebalanceLoad() {
    const assistants = Array.from(this.assistants.values())
const avgLoad =
      assistants.reduce((sum, a) => sum + a.currentTasks, 0) /
      assistants.length;

    for (const assistant of assistants) {
      const maxTasks =
        COORDINATOR_CONFIG.assistantTypes[assistant.type]?.maxConcurrentTasks ||
        1;

      if (assistant.currentTasks > maxTasks) {
        this.log('info', 'Load rebalancing needed', {
          assistant: assistant.name,
          currentLoad: assistant.currentTasks,
          maxLoad: maxTasks,
        });

        // Consider moving some tasks
        await this.rebalanceAssistantLoad(assistant);
      }
    }
  }

  async rebalanceAssistantLoad(assistant) {
    const runningTasks = Array.from(this.tasks.values()).filter(
      (task) => task.assignedTo === assistant.id && task.status === 'running',
    );

    for (const task of runningTasks.slice(0, 1)) {
      // Move one task
      const availableAssistants = Array.from(this.assistants.values()).filter(
        (a) => a.id !== assistant.id && a.isAvailable(),
      );

      if (availableAssistants.length > 0) {
        const newAssistant = this.selectAssistantForTask(
          task,
          availableAssistants,
        );
        if (newAssistant) {
          // Reassign task
          assistant.currentTasks--;
          task.assignedTo = newAssistant.id;
          newAssistant.currentTasks++;

          this.log('info', 'Rebalanced task', {
            taskId: task.id,
            from: assistant.name,
            to: newAssistant.name,
          });
        }
      }
    }
  }

  startTaskMonitoring() {
    setInterval(() => {
      this.monitorTasks();
    }, 30000); // Monitor every 30 seconds
  }

  async monitorTasks() {
    const now = Date.now();

    for (const [id, task] of this.tasks) {
      if (task.status === 'running') {
        const duration = now - task.startTime;

        // Check for timeout
        if (duration > COORDINATOR_CONFIG.coordination.taskTimeout) {
          this.log('warn', 'Task timeout detected', {
            taskId: id,
            duration,
            timeout: COORDINATOR_CONFIG.coordination.taskTimeout,
          });

          // Cancel task
          task.status = 'timeout'
const assistant = this.assistants.get(task.assignedTo);
          if (assistant) {
            assistant.currentTasks--;
          }

          // Retry if possible
          if (task.retryCount < COORDINATOR_CONFIG.coordination.maxRetries) {
            task.retryCount++;
            task.status = 'pending';
            this.taskQueue.push(task);
          }
        }
      }
    }
  }

  async startCoordinationServices() {
    this.log('info', 'Starting coordination services...');

    // Start heartbeat service
    this.startHeartbeatService();

    // Start communication service
    this.startCommunicationService();

    // Start auto-scaling
    if (COORDINATOR_CONFIG.coordination.autoScaling) {
      this.startAutoScaling();
    }

    this.log('info', 'Coordination services started');
  }

  startHeartbeatService() {
    setInterval(() => {
      this.sendHeartbeats();
    }, COORDINATOR_CONFIG.coordination.heartbeatInterval);
  }

  async sendHeartbeats() {
    for (const [id, assistant] of this.assistants) {
      try {
        await assistant.sendHeartbeat();
      } catch (error) {
        this.log('warn', 'Assistant heartbeat failed', {
          assistant: assistant.name,
          error: error.message,
        });

        // Mark assistant as unavailable
        assistant.status = 'unavailable';
      }
    }
  }

  startCommunicationService() {
    // This would typically involve WebSocket or similar
    // For now, we'll use a simple event-based approach
    this.on('task-completed', (task) => {
      this.handleTaskCompleted(task);
    });

    this.on('task-failed', (task) => {
      this.handleTaskFailed(task);
    });

    this.on('assistant-status-changed', (assistant) => {
      this.handleAssistantStatusChanged(assistant);
    });
  }

  startAutoScaling() {
    setInterval(() => {
      this.checkAutoScaling();
    }, 120000); // Check every 2 minutes
  }

  async checkAutoScaling() {
    const totalTasks =
      this.taskQueue.length +
      Array.from(this.tasks.values()).filter((t) => t.status === 'running')
        .length
const totalAssistants = this.assistants.size
const maxConcurrentTasks =
      COORDINATOR_CONFIG.coordination.maxConcurrentTasks;

    // Scale up if needed
    if (totalTasks > maxConcurrentTasks * 0.8 && totalAssistants < 10) {
      this.log('info', 'Auto-scaling: Scaling up', {
        totalTasks,
        totalAssistants,
      });

      await this.scaleUp();
    }

    // Scale down if possible
    if (totalTasks < maxConcurrentTasks * 0.3 && totalAssistants > 3) {
      this.log('info', 'Auto-scaling: Scaling down', {
        totalTasks,
        totalAssistants,
      });

      await this.scaleDown();
    }
  }

  async scaleUp() {
    // This would typically involve starting new assistants
    // For now, we'll just log the intention
    this.log('info', 'Auto-scaling: Would start new assistants');
  }

  async scaleDown() {
    // This would typically involve stopping some assistants
    // For now, we'll just log the intention
    this.log('info', 'Auto-scaling: Would stop some assistants');
  }

  async startMonitoring() {
    this.log('info', 'Starting monitoring...');

    // Start performance monitoring
    this.startPerformanceMonitoring();

    // Start health monitoring
    this.startHealthMonitoring();

    // Start reporting
    this.startReporting();

    this.log('info', 'Monitoring started');
  }

  startPerformanceMonitoring() {
    setInterval(() => {
      this.collectPerformanceMetrics();
    }, 30000); // Every 30 seconds
  }

  async collectPerformanceMetrics() {
    const completedTasks = Array.from(this.tasks.values()).filter(
      (t) => t.status === 'completed',
    )
const avgDuration =
      completedTasks.length > 0
        ? completedTasks.reduce((sum, t) => sum + (t.duration || 0), 0) /
          completedTasks.length
        : 0;

    this.stats = {
      totalTasks: this.tasks.size,
      completedTasks: completedTasks.length,
      failedTasks: Array.from(this.tasks.values()).filter(
        (t) => t.status === 'failed',
      ).length,
      averageTaskDuration: avgDuration,
      totalAssistants: this.assistants.size,
      activeAssistants: Array.from(this.assistants.values()).filter(
        (a) => a.status === 'active',
      ).length,
      queueLength: this.taskQueue.length,
    };

    this.log('debug', 'Performance metrics collected', this.stats);
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.checkSystemHealth();
    }, 60000); // Every minute
  }

  async checkSystemHealth() {
    const health = {
      timestamp: Date.now(),
      status: 'healthy',
      issues: [],
    };

    // Check assistant health
    for (const [id, assistant] of this.assistants) {
      if (assistant.status !== 'active') {
        health.issues.push(
          `Assistant ${assistant.name} is ${assistant.status}`,
        );
      }
    }

    // Check task health
    const stuckTasks = Array.from(this.tasks.values()).filter(
      (task) =>
        task.status === 'running' &&
        Date.now() - task.startTime >
          COORDINATOR_CONFIG.coordination.taskTimeout,
    );

    if (stuckTasks.length > 0) {
      health.issues.push(`${stuckTasks.length} tasks appear to be stuck`);
      health.status = 'degraded';
    }

    // Check queue health
    if (this.taskQueue.length > 50) {
      health.issues.push(
        `Task queue is very long: ${this.taskQueue.length} tasks`,
      );
      health.status = 'degraded';
    }

    if (health.issues.length > 0) {
      this.log('warn', 'System health issues detected', health);
    }
  }

  startReporting() {
    setInterval(() => {
      this.generateReport();
    }, 300000); // Every 5 minutes
  }

  async generateReport() {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalAssistants: this.stats.totalAssistants,
        activeAssistants: this.stats.activeAssistants,
        totalTasks: this.stats.totalTasks,
        completedTasks: this.stats.completedTasks,
        failedTasks: this.stats.failedTasks,
        queueLength: this.stats.queueLength,
        averageTaskDuration: this.stats.averageTaskDuration,
      },
      assistants: Array.from(this.assistants.values()).map((a) => ({
        name: a.name,
        type: a.type,
        status: a.status,
        currentTasks: a.currentTasks,
        capabilities: a.capabilities,
      })),
      recentTasks: Array.from(this.tasks.values())
        .filter((t) => Date.now() - t.startTime < 300000) // Last 5 minutes
        .map((t) => ({
          id: t.id,
          type: t.type,
          status: t.status,
          duration: t.duration,
          assignedTo: t.assignedTo,
        })),
    };

    this.log('info', 'Generated coordination report', report);

    // Save report
    const reportPath = path.join(
      process.cwd(),
      'logs',
      `ai-coordinator-report_${Date.now()}.json`,
    )
const logsDir = path.dirname(reportPath);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  startContinuousImprovementLoop() {
    this.log('info', 'Starting continuous improvement loop...');

    setInterval(async () => {
      await this.runContinuousImprovement();
    }, 600000); // Every 10 minutes
  }

  async runContinuousImprovement() {
    this.log('info', 'Running continuous improvement cycle...');

    try {
      // 1. Analyze current system state
      const analysis = await this.analyzeSystemState();

      // 2. Identify improvement opportunities
      const improvements = await this.identifyImprovements(analysis);

      // 3. Prioritize improvements
      const prioritizedImprovements = this.prioritizeImprovements(improvements);

      // 4. Execute high-priority improvements
      await this.executeImprovements(prioritizedImprovements.slice(0, 3)); // Top 3

      this.log('info', 'Continuous improvement cycle completed', {
        improvementsIdentified: improvements.length,
        improvementsExecuted: Math.min(prioritizedImprovements.length, 3),
      });
    } catch (error) {
      this.log('error', 'Continuous improvement cycle failed', {
        error: error.message,
      });
    }
  }

  async analyzeSystemState() {
    const analysis = {
      performance: {
        averageTaskDuration: this.stats.averageTaskDuration,
        taskSuccessRate:
          this.stats.totalTasks > 0
            ? this.stats.completedTasks / this.stats.totalTasks
            : 1,
        assistantUtilization:
          this.stats.totalAssistants > 0
            ? Array.from(this.assistants.values()).reduce(
                (sum, a) => sum + a.currentTasks,
                0,
              ) / this.stats.totalAssistants
            : 0,
      },
      bottlenecks: this.identifyBottlenecks(),
      opportunities: this.identifyOpportunities(),
    };

    return analysis;
  }

  identifyBottlenecks() {
    const bottlenecks = [];

    // Check for assistants with high load
    for (const [id, assistant] of this.assistants) {
      const maxTasks =
        COORDINATOR_CONFIG.assistantTypes[assistant.type]?.maxConcurrentTasks ||
        1;
      if (assistant.currentTasks >= maxTasks) {
        bottlenecks.push({
          type: 'high_load',
          assistant: assistant.name,
          load: assistant.currentTasks,
          maxLoad: maxTasks,
        });
      }
    }

    // Check for long task queue
    if (this.taskQueue.length > 20) {
      bottlenecks.push({
        type: 'long_queue',
        queueLength: this.taskQueue.length,
      });
    }

    // Check for failed tasks
    const recentFailedTasks = Array.from(this.tasks.values()).filter(
      (t) => t.status === 'failed' && Date.now() - t.startTime < 300000,
    );

    if (recentFailedTasks.length > 5) {
      bottlenecks.push({
        type: 'high_failure_rate',
        failedTasks: recentFailedTasks.length,
      });
    }

    return bottlenecks;
  }

  identifyOpportunities() {
    const opportunities = [];

    // Check for underutilized assistants
    for (const [id, assistant] of this.assistants) {
      if (assistant.currentTasks === 0 && assistant.status === 'active') {
        opportunities.push({
          type: 'underutilized_assistant',
          assistant: assistant.name,
          type: assistant.type,
        });
      }
    }

    // Check for optimization opportunities
    if (this.stats.averageTaskDuration > 120000) {
      // More than 2 minutes
      opportunities.push({
        type: 'slow_tasks',
        averageDuration: this.stats.averageTaskDuration,
      });
    }

    return opportunities;
  }

  async identifyImprovements(analysis) {
    const improvements = [];

    // Performance improvements
    if (analysis.performance.taskSuccessRate < 0.9) {
      improvements.push({
        type: 'improve_reliability',
        priority: 'high',
        description: 'Improve task success rate',
        actions: ['retry_failed_tasks', 'improve_error_handling'],
      });
    }

    if (analysis.performance.averageTaskDuration > 120000) {
      improvements.push({
        type: 'optimize_performance',
        priority: 'medium',
        description: 'Reduce average task duration',
        actions: ['parallel_execution', 'task_optimization'],
      });
    }

    // Bottleneck improvements
    for (const bottleneck of analysis.bottlenecks) {
      if (bottleneck.type === 'high_load') {
        improvements.push({
          type: 'load_balancing',
          priority: 'high',
          description: `Reduce load on ${bottleneck.assistant}`,
          actions: ['redistribute_tasks', 'add_assistant'],
        });
      }
    }

    return improvements;
  }

  prioritizeImprovements(improvements) {
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };

    return improvements.sort((a, b) => {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  async executeImprovements(improvements) {
    for (const improvement of improvements) {
      try {
        this.log('info', 'Executing improvement', {
          type: improvement.type,
          description: improvement.description,
        });

        await this.executeImprovementActions(improvement);

        this.log('info', 'Improvement executed successfully', {
          type: improvement.type,
        });
      } catch (error) {
        this.log('error', 'Failed to execute improvement', {
          type: improvement.type,
          error: error.message,
        });
      }
    }
  }

  async executeImprovementActions(improvement) {
    switch (improvement.type) {
      case 'improve_reliability':
        await this.improveReliability();
        break;

      case 'optimize_performance':
        await this.optimizePerformance();
        break;

      case 'load_balancing':
        await this.improveLoadBalancing();
        break;

      default:
        this.log('warn', 'Unknown improvement type', {
          type: improvement.type,
        });
    }
  }

  async improveReliability() {
    // Retry failed tasks
    const failedTasks = Array.from(this.tasks.values()).filter(
      (t) => t.status === 'failed',
    );

    for (const task of failedTasks.slice(0, 5)) {
      // Retry up to 5 tasks
      task.status = 'pending';
      task.retryCount = (task.retryCount || 0) + 1;
      this.taskQueue.push(task);
    }
  }

  async optimizePerformance() {
    // Optimize task execution
    const slowTasks = Array.from(this.tasks.values()).filter(
      (t) => t.status === 'running' && Date.now() - t.startTime > 300000,
    );

    for (const task of slowTasks) {
      // Consider canceling very slow tasks
      if (Date.now() - task.startTime > 600000) {
        // 10 minutes
        task.status = 'cancelled';
        this.log('warn', 'Cancelled slow task', { taskId: task.id });
      }
    }
  }

  async improveLoadBalancing() {
    // Redistribute tasks from overloaded assistants
    const overloadedAssistants = Array.from(this.assistants.values()).filter(
      (a) => a.currentTasks >= 2,
    );

    for (const assistant of overloadedAssistants) {
      const tasksToMove = Array.from(this.tasks.values())
        .filter((t) => t.assignedTo === assistant.id && t.status === 'running')
        .slice(0, 1); // Move one task

      for (const task of tasksToMove) {
        const availableAssistants = Array.from(this.assistants.values()).filter(
          (a) => a.id !== assistant.id && a.isAvailable(),
        );

        if (availableAssistants.length > 0) {
          const newAssistant = this.selectAssistantForTask(
            task,
            availableAssistants,
          );
          if (newAssistant) {
            // Move task to available assistant
            assistant.currentTasks--;
            task.assignedTo = newAssistant.id;
            newAssistant.currentTasks++;

            this.log('info', 'Moved task for load balancing', {
              taskId: task.id,
              from: assistant.name,
              to: newAssistant.name,
            });
          }
        }
      }
    }
  }

  // Event handlers
  handleTaskCompleted(task) {
    this.stats.completedTasks++;
    this.updateTaskDuration(task)
const assistant = this.assistants.get(task.assignedTo);
    if (assistant) {
      assistant.currentTasks--;
    }

    this.log('info', 'Task completed', {
      taskId: task.id,
      duration: task.duration,
      assistant: assistant?.name,
    });
  }

  handleTaskFailed(task) {
    this.stats.failedTasks++
const assistant = this.assistants.get(task.assignedTo);
    if (assistant) {
      assistant.currentTasks--;
    }

    this.log('warn', 'Task failed', {
      taskId: task.id,
      error: task.error,
      assistant: assistant?.name,
    });
  }

  handleAssistantStatusChanged(assistant) {
    this.log('info', 'Assistant status changed', {
      name: assistant.name,
      status: assistant.status,
    });
  }

  updateTaskDuration(task) {
    if (task.startTime && task.endTime) {
      task.duration = task.endTime - task.startTime;

      // Update average duration
      const completedTasks = Array.from(this.tasks.values()).filter(
        (t) => t.status === 'completed' && t.duration,
      );

      if (completedTasks.length > 0) {
        this.stats.averageTaskDuration =
          completedTasks.reduce((sum, t) => sum + t.duration, 0) /
          completedTasks.length;
      }
    }
  }

  // Public API methods
  async submitTask(taskConfig) {
    const task = {
      id: crypto.randomUUID(),
      ...taskConfig,
      status: 'pending',
      createdAt: Date.now(),
      retryCount: 0,
    };

    this.taskQueue.push(task);
    this.stats.totalTasks++;

    this.log('info', 'Submitted task', { taskId: task.id, type: task.type });

    return task.id;
  }

  async getTaskStatus(taskId) {
    const task = this.tasks.get(taskId);
    if (!task) {
      const queuedTask = this.taskQueue.find((t) => t.id === taskId);
      return queuedTask ? { ...queuedTask, status: 'queued' } : null;
    }
    return task;
  }

  async getSystemStatus() {
    return {
      isRunning: this.isRunning,
      assistants: this.stats.totalAssistants,
      activeAssistants: this.stats.activeAssistants,
      totalTasks: this.stats.totalTasks,
      activeTasks: Array.from(this.tasks.values()).filter(
        (t) => t.status === 'running',
      ).length,
      queueLength: this.stats.queueLength,
      averageTaskDuration: this.stats.averageTaskDuration,
      uptime: Date.now() - this.startTime,
    };
  }

  async stop() {
    this.log('info', 'Stopping AI Coordinator...');

    this.isRunning = false;

    // Stop all assistants
    for (const [id, assistant] of this.assistants) {
      await assistant.stop();
    }

    // Cancel running tasks
    for (const [id, task] of this.tasks) {
      if (task.status === 'running') {
        task.status = 'cancelled';
      }
    }

    this.log('info', 'AI Coordinator stopped');
  }
}

// AI Assistant class
class AIAssistant {
  constructor(config, coordinator, location = 'local', computerIp = null) {
    this.config = config;
    this.coordinator = coordinator;
    this.location = location;
    this.computerIp = computerIp;

    this.id = crypto.randomUUID();
    this.name = config.name;
    this.type = config.type || 'unknown';
    this.capabilities = config.capabilities || [];
    this.status = 'inactive';
    this.currentTasks = 0;

    this.lastHeartbeat = Date.now();
  }

  async initialize() {
    this.status = 'active';
    this.coordinator.log('info', 'AI assistant initialized', {
      name: this.name,
      type: this.type,
      location: this.location,
    });
  }

  async stop() {
    this.status = 'inactive';
    this.coordinator.log('info', 'AI assistant stopped', { name: this.name });
  }

  isAvailable() {
    return (
      this.status === 'active' &&
      this.currentTasks < this.getMaxConcurrentTasks()
    );
  }

  getMaxConcurrentTasks() {
    return (
      COORDINATOR_CONFIG.assistantTypes[this.type]?.maxConcurrentTasks || 1
    );
  }

  async sendHeartbeat() {
    this.lastHeartbeat = Date.now();

    if (this.location === 'remote' && this.computerIp) {
      // Send heartbeat to remote assistant
      await this.coordinator.executeRemoteCommand(
        this.computerIp,
        `echo "heartbeat" > /tmp/assistant_${this.name}_heartbeat`,
      );
    }
  }

  async executeTask(task) {
    try {
      this.coordinator.log('info', 'Assistant executing task', {
        assistant: this.name,
        taskId: task.id,
        taskType: task.type,
      });

      // Execute task based on type
      const result = await this.executeTaskByType(task);

      // Mark task as completed
      task.status = 'completed';
      task.endTime = Date.now();
      task.result = result;

      // Emit completion event
      this.coordinator.emit('task-completed', task);

      this.coordinator.log('info', 'Assistant completed task', {
        assistant: this.name,
        taskId: task.id,
        duration: task.endTime - task.startTime,
      });
    } catch (error) {
      // Mark task as failed
      task.status = 'failed';
      task.endTime = Date.now();
      task.error = error.message;

      // Emit failure event
      this.coordinator.emit('task-failed', task);

      this.coordinator.log('error', 'Assistant failed task', {
        assistant: this.name,
        taskId: task.id,
        error: error.message,
      });

      throw error;
    }
  }

  async executeTaskByType(task) {
    switch (task.type) {
      case 'lint-fix':
        return await this.executeLintFix(task);

      case 'security-scan':
        return await this.executeSecurityScan(task);

      case 'performance-optimization':
        return await this.executePerformanceOptimization(task);

      case 'test-generation':
        return await this.executeTestGeneration(task);

      case 'documentation-update':
        return await this.executeDocumentationUpdate(task);

      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }

  async executeLintFix(task) {
    const commands = [
      'npm run lint -- --fix',
      'npm run format',
      'npm run type-check',
    ];

    return await this.executeCommands(commands);
  }

  async executeSecurityScan(task) {
    const commands = [
      'npm audit',
      'npm run security-scan',
      'npm run dependency-check',
    ];

    return await this.executeCommands(commands);
  }

  async executePerformanceOptimization(task) {
    const commands = [
      'npm run analyze',
      'npm run optimize',
      'npm run bundle-analyze',
    ];

    return await this.executeCommands(commands);
  }

  async executeTestGeneration(task) {
    const commands = [
      'npm run test-generate',
      'npm run test',
      'npm run coverage',
    ];

    return await this.executeCommands(commands);
  }

  async executeDocumentationUpdate(task) {
    const commands = [
      'npm run docs-generate',
      'npm run api-docs',
      'npm run readme-update',
    ];

    return await this.executeCommands(commands);
  }

  async executeCommands(commands) {
    const results = [];

    for (const command of commands) {
      try {
        if (this.location === 'remote' && this.computerIp) {
          const result = await this.coordinator.executeRemoteCommand(
            this.computerIp,
            command,
          );
          results.push({ command, success: true, result });
        } else {
          const result = execSync(command, {
            encoding: 'utf8',
            timeout: 300000,
          });
          results.push({ command, success: true, result });
        }
      } catch (error) {
        results.push({ command, success: false, error: error.message });
      }
    }

    return results;
  }
}

// CLI interface
if (require.main === module) {
  const coordinator = new AICoordinator();

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nShutting down...');
    await coordinator.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\nShutting down...');
    await coordinator.stop();
    process.exit(0);
  });

  // Start the coordinator
  coordinator.start().catch((error) => {
    console.error('Failed to start coordinator:', error);
    process.exit(1);
  });
}

module.exports = { AICoordinator, AIAssistant, COORDINATOR_CONFIG };
