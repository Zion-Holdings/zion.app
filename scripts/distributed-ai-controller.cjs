#!/usr/bin/env node

/**
 * Distributed AI Controller for Multi-Computer Cursor Management
 * 
 * This script coordinates multiple computers with Cursor installed to work together
 * on continuous app improvement. It can:
 * - Discover and manage multiple Cursor instances
 * - Distribute tasks across computers
 * - Coordinate AI agents for continuous improvement
 * - Monitor and report on distributed work
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');
const crypto = require('crypto');

// Configuration
const CONFIG = {
  // Network discovery settings
  DISCOVERY_PORT: 3001,
  HEARTBEAT_INTERVAL: 30000, // 30 seconds
  TASK_TIMEOUT: 300000, // 5 minutes
  
  // AI agent settings
  MAX_CONCURRENT_AGENTS: 3,
  AGENT_MEMORY_SIZE: 1000,
  
  // Task distribution settings
  TASK_PRIORITY_LEVELS: ['critical', 'high', 'medium', 'low'],
  LOAD_BALANCING_STRATEGY: 'round-robin', // or 'least-loaded', 'priority-based'
  
  // Communication settings
  WEBSOCKET_PORT: 3002,
  API_PORT: 3003,
  
  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FILE: 'distributed-ai.log'
};

class DistributedAIController {
  constructor() {
    this.computers = new Map();
    this.tasks = new Map();
    this.aiAgents = new Map();
    this.taskQueue = [];
    this.isRunning = false;
    this.startTime = Date.now();
    
    // Initialize logging
    this.setupLogging();
    
    // Load configuration
    this.loadConfiguration();
  }

  setupLogging() {
    const logLevels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    };

    this.log = (level, message, data = {}) => {
      const currentLevel = logLevels[CONFIG.LOG_LEVEL] || 2;
      if (logLevels[level] <= currentLevel) {
        const timestamp = new Date().toISOString();
        const logEntry = {
          timestamp,
          level,
          message,
          data,
          computer: os.hostname()
        };
        
        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`, data);
        
        // Write to log file
        fs.appendFileSync(CONFIG.LOG_FILE, JSON.stringify(logEntry) + '\n');
      }
    };
  }

  loadConfiguration() {
    const configPath = path.join(process.cwd(), 'config', 'distributed-ai.json');
    
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        Object.assign(CONFIG, config);
        this.log('info', 'Loaded distributed AI configuration', { configPath });
      } catch (error) {
        this.log('warn', 'Failed to load configuration, using defaults', { error: error.message });
      }
    } else {
      this.createDefaultConfiguration(configPath);
    }
  }

  createDefaultConfiguration(configPath) {
    const defaultConfig = {
      computers: [
        {
          name: 'primary',
          host: 'localhost',
          port: CONFIG.DISCOVERY_PORT,
          cursorPath: '/Applications/Cursor.app/Contents/MacOS/Cursor',
          capabilities: ['linting', 'testing', 'building', 'deployment'],
          maxConcurrentTasks: 2
        }
      ],
      aiAgents: [
        {
          name: 'code-analyzer',
          type: 'analysis',
          priority: 'high',
          commands: ['npm run lint', 'npm run test', 'npm run build']
        },
        {
          name: 'performance-optimizer',
          type: 'optimization',
          priority: 'medium',
          commands: ['npm run analyze', 'npm run optimize']
        },
        {
          name: 'security-scanner',
          type: 'security',
          priority: 'critical',
          commands: ['npm audit', 'npm run security-scan']
        }
      ]
    };

    // Ensure config directory exists
    const configDir = path.dirname(configPath);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    this.log('info', 'Created default configuration', { configPath });
  }

  async start() {
    this.log('info', 'Starting Distributed AI Controller...');
    
    try {
      // Initialize network discovery
      await this.initializeNetworkDiscovery();
      
      // Start AI agent management
      await this.initializeAIAgents();
      
      // Start task distribution system
      await this.initializeTaskDistribution();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.isRunning = true;
      this.log('info', 'Distributed AI Controller started successfully');
      
      // Start continuous improvement loop
      this.startContinuousImprovementLoop();
      
    } catch (error) {
      this.log('error', 'Failed to start Distributed AI Controller', { error: error.message });
      throw error;
    }
  }

  async initializeNetworkDiscovery() {
    this.log('info', 'Initializing network discovery...');
    
    // Discover computers with Cursor installed
    await this.discoverComputers();
    
    // Start heartbeat monitoring
    this.startHeartbeatMonitoring();
    
    this.log('info', 'Network discovery initialized', { 
      computersFound: this.computers.size 
    });
  }

  async discoverComputers() {
    const networkRange = this.getNetworkRange();
    
    for (const ip of networkRange) {
      try {
        const isCursorInstalled = await this.checkCursorInstallation(ip);
        if (isCursorInstalled) {
          const computerInfo = await this.getComputerInfo(ip);
          this.computers.set(ip, computerInfo);
          this.log('info', 'Discovered computer with Cursor', { ip, info: computerInfo });
        }
      } catch (error) {
        // Silently continue - not all IPs will have Cursor
      }
    }
  }

  getNetworkRange() {
    const interfaces = os.networkInterfaces();
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

  async checkCursorInstallation(ip) {
    // Check common Cursor installation paths
    const cursorPaths = [
      '/Applications/Cursor.app/Contents/MacOS/Cursor',
      'C:\\Users\\%USERNAME%\\AppData\\Local\\Programs\\Cursor\\Cursor.exe',
      '/usr/bin/cursor',
      '/opt/cursor/cursor'
    ];
    
    for (const cursorPath of cursorPaths) {
      try {
        const result = await this.executeRemoteCommand(ip, `test -f "${cursorPath}" && echo "found"`);
        if (result.includes('found')) {
          return true;
        }
      } catch (error) {
        // Continue checking other paths
      }
    }
    
    return false;
  }

  async getComputerInfo(ip) {
    try {
      const hostname = await this.executeRemoteCommand(ip, 'hostname');
      const osInfo = await this.executeRemoteCommand(ip, 'uname -a');
      const cpuInfo = await this.executeRemoteCommand(ip, 'nproc');
      const memoryInfo = await this.executeRemoteCommand(ip, 'free -h');
      
      return {
        ip,
        hostname: hostname.trim(),
        os: osInfo.trim(),
        cpuCores: parseInt(cpuInfo.trim()),
        memory: memoryInfo.trim(),
        lastSeen: Date.now(),
        status: 'online',
        currentTasks: 0,
        capabilities: ['linting', 'testing', 'building'] // Default capabilities
      };
    } catch (error) {
      return {
        ip,
        hostname: 'unknown',
        os: 'unknown',
        cpuCores: 0,
        memory: 'unknown',
        lastSeen: Date.now(),
        status: 'online',
        currentTasks: 0,
        capabilities: ['basic']
      };
    }
  }

  async executeRemoteCommand(ip, command) {
    return new Promise((resolve, reject) => {
      const ssh = spawn('ssh', [`-o ConnectTimeout=5`, `-o BatchMode=yes`, ip, command]);
      
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

  startHeartbeatMonitoring() {
    setInterval(() => {
      this.checkComputerHealth();
    }, CONFIG.HEARTBEAT_INTERVAL);
  }

  async checkComputerHealth() {
    for (const [ip, computer] of this.computers) {
      try {
        const isAlive = await this.pingComputer(ip);
        if (isAlive) {
          computer.lastSeen = Date.now();
          computer.status = 'online';
        } else {
          computer.status = 'offline';
          this.log('warn', 'Computer went offline', { ip, hostname: computer.hostname });
        }
      } catch (error) {
        computer.status = 'error';
        this.log('error', 'Error checking computer health', { ip, error: error.message });
      }
    }
  }

  async pingComputer(ip) {
    return new Promise((resolve) => {
      const ping = spawn('ping', ['-c', '1', '-W', '5', ip]);
      
      ping.on('close', (code) => {
        resolve(code === 0);
      });
      
      ping.on('error', () => {
        resolve(false);
      });
    });
  }

  async initializeAIAgents() {
    this.log('info', 'Initializing AI agents...');
    
    // Load AI agent configurations
    const agentConfigs = this.loadAIAgentConfigs();
    
    for (const config of agentConfigs) {
      const agent = new AIAgent(config, this);
      this.aiAgents.set(config.name, agent);
      await agent.initialize();
    }
    
    this.log('info', 'AI agents initialized', { 
      agentCount: this.aiAgents.size 
    });
  }

  loadAIAgentConfigs() {
    const configPath = path.join(process.cwd(), 'config', 'ai-agents.json');
    
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        this.log('warn', 'Failed to load AI agent configs, using defaults', { error: error.message });
      }
    }
    
    // Default AI agent configurations
    return [
      {
        name: 'code-analyzer',
        type: 'analysis',
        priority: 'high',
        description: 'Analyzes code quality and suggests improvements',
        commands: ['npm run lint', 'npm run test'],
        memorySize: 1000,
        maxConcurrentTasks: 2
      },
      {
        name: 'performance-optimizer',
        type: 'optimization',
        priority: 'medium',
        description: 'Optimizes application performance',
        commands: ['npm run analyze', 'npm run optimize'],
        memorySize: 800,
        maxConcurrentTasks: 1
      },
      {
        name: 'security-scanner',
        type: 'security',
        priority: 'critical',
        description: 'Scans for security vulnerabilities',
        commands: ['npm audit', 'npm run security-scan'],
        memorySize: 500,
        maxConcurrentTasks: 1
      }
    ];
  }

  async initializeTaskDistribution() {
    this.log('info', 'Initializing task distribution...');
    
    // Start task queue processor
    this.startTaskQueueProcessor();
    
    // Start load balancer
    this.startLoadBalancer();
    
    this.log('info', 'Task distribution initialized');
  }

  startTaskQueueProcessor() {
    setInterval(() => {
      this.processTaskQueue();
    }, 5000); // Process every 5 seconds
  }

  async processTaskQueue() {
    if (this.taskQueue.length === 0) return;
    
    const availableComputers = Array.from(this.computers.values())
      .filter(computer => computer.status === 'online' && computer.currentTasks < 2);
    
    if (availableComputers.length === 0) return;
    
    // Sort tasks by priority
    this.taskQueue.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    // Distribute tasks
    for (const task of this.taskQueue) {
      const computer = this.selectComputerForTask(task, availableComputers);
      if (computer) {
        await this.assignTaskToComputer(task, computer);
        this.taskQueue = this.taskQueue.filter(t => t.id !== task.id);
      }
    }
  }

  selectComputerForTask(task, availableComputers) {
    switch (CONFIG.LOAD_BALANCING_STRATEGY) {
      case 'least-loaded':
        return availableComputers.reduce((min, computer) => 
          computer.currentTasks < min.currentTasks ? computer : min
        );
      
      case 'priority-based':
        // Assign critical tasks to computers with more resources
        if (task.priority === 'critical') {
          return availableComputers.reduce((best, computer) => 
            computer.cpuCores > best.cpuCores ? computer : best
          );
        }
        // Fall through to round-robin for other priorities
        
      case 'round-robin':
      default:
        // Simple round-robin selection
        const index = Math.floor(Math.random() * availableComputers.length);
        return availableComputers[index];
    }
  }

  async assignTaskToComputer(task, computer) {
    try {
      computer.currentTasks++;
      task.assignedTo = computer.ip;
      task.status = 'running';
      task.startTime = Date.now();
      
      this.tasks.set(task.id, task);
      
      this.log('info', 'Assigned task to computer', { 
        taskId: task.id, 
        computer: computer.hostname,
        taskType: task.type 
      });
      
      // Execute task on remote computer
      await this.executeTaskOnComputer(task, computer);
      
    } catch (error) {
      this.log('error', 'Failed to assign task to computer', { 
        taskId: task.id, 
        computer: computer.hostname,
        error: error.message 
      });
      
      computer.currentTasks--;
      task.status = 'failed';
      task.error = error.message;
    }
  }

  async executeTaskOnComputer(task, computer) {
    const taskScript = this.generateTaskScript(task);
    const remotePath = `/tmp/task_${task.id}.sh`;
    
    try {
      // Upload task script
      await this.uploadFile(taskScript, remotePath, computer.ip);
      
      // Execute task
      const result = await this.executeRemoteCommand(computer.ip, `bash ${remotePath}`);
      
      // Process results
      await this.processTaskResults(task, result);
      
      // Cleanup
      await this.executeRemoteCommand(computer.ip, `rm -f ${remotePath}`);
      
    } catch (error) {
      throw error;
    } finally {
      computer.currentTasks--;
    }
  }

  generateTaskScript(task) {
    const commands = task.commands || [];
    const script = `#!/bin/bash
set -e

# Task ID: ${task.id}
# Type: ${task.type}
# Priority: ${task.priority}

echo "Starting task ${task.id} at $(date)"

# Change to project directory
cd ${process.cwd()}

# Execute commands
${commands.map(cmd => `echo "Executing: ${cmd}"`).join('\n')}
${commands.map(cmd => `${cmd}`).join('\n')}

echo "Task ${task.id} completed at $(date)"
`;

    return script;
  }

  async uploadFile(content, remotePath, ip) {
    // This is a simplified version - in production you'd use scp or rsync
    const tempFile = `/tmp/upload_${Date.now()}`;
    fs.writeFileSync(tempFile, content);
    
    try {
      await this.executeRemoteCommand(ip, `cat > ${remotePath}`, tempFile);
    } finally {
      fs.unlinkSync(tempFile);
    }
  }

  async processTaskResults(task, result) {
    task.status = 'completed';
    task.endTime = Date.now();
    task.duration = task.endTime - task.startTime;
    task.result = result;
    
    this.log('info', 'Task completed', { 
      taskId: task.id, 
      duration: task.duration,
      type: task.type 
    });
    
    // Trigger AI analysis of results
    await this.analyzeTaskResults(task);
  }

  async analyzeTaskResults(task) {
    // Find appropriate AI agent for this task type
    const agent = Array.from(this.aiAgents.values())
      .find(a => a.config.type === task.type);
    
    if (agent) {
      await agent.analyzeResults(task);
    }
  }

  startLoadBalancer() {
    setInterval(() => {
      this.rebalanceLoad();
    }, 60000); // Rebalance every minute
  }

  async rebalanceLoad() {
    const computers = Array.from(this.computers.values());
    const avgLoad = computers.reduce((sum, c) => sum + c.currentTasks, 0) / computers.length;
    
    for (const computer of computers) {
      if (computer.currentTasks > avgLoad + 1) {
        // Consider moving some tasks
        this.log('info', 'Load rebalancing needed', { 
          computer: computer.hostname,
          currentLoad: computer.currentTasks,
          averageLoad: avgLoad 
        });
      }
    }
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
    const metrics = {
      timestamp: Date.now(),
      computers: this.computers.size,
      onlineComputers: Array.from(this.computers.values()).filter(c => c.status === 'online').length,
      totalTasks: this.tasks.size,
      activeTasks: Array.from(this.tasks.values()).filter(t => t.status === 'running').length,
      completedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'completed').length,
      failedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'failed').length,
      queueLength: this.taskQueue.length,
      uptime: Date.now() - this.startTime
    };
    
    this.log('debug', 'Performance metrics collected', metrics);
    
    // Store metrics for analysis
    this.storeMetrics(metrics);
  }

  storeMetrics(metrics) {
    const metricsPath = path.join(process.cwd(), 'logs', 'metrics.json');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(metricsPath);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Append metrics to file
    fs.appendFileSync(metricsPath, JSON.stringify(metrics) + '\n');
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
      issues: []
    };
    
    // Check computer health
    for (const [ip, computer] of this.computers) {
      if (computer.status !== 'online') {
        health.issues.push(`Computer ${computer.hostname} (${ip}) is ${computer.status}`);
      }
    }
    
    // Check task health
    const stuckTasks = Array.from(this.tasks.values())
      .filter(task => task.status === 'running' && Date.now() - task.startTime > CONFIG.TASK_TIMEOUT);
    
    if (stuckTasks.length > 0) {
      health.issues.push(`${stuckTasks.length} tasks appear to be stuck`);
      health.status = 'degraded';
    }
    
    // Check AI agent health
    for (const [name, agent] of this.aiAgents) {
      if (!agent.isHealthy()) {
        health.issues.push(`AI agent ${name} is not healthy`);
        health.status = 'degraded';
      }
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
        totalComputers: this.computers.size,
        onlineComputers: Array.from(this.computers.values()).filter(c => c.status === 'online').length,
        totalTasks: this.tasks.size,
        completedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'completed').length,
        failedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'failed').length,
        queueLength: this.taskQueue.length
      },
      computers: Array.from(this.computers.values()).map(c => ({
        hostname: c.hostname,
        status: c.status,
        currentTasks: c.currentTasks,
        lastSeen: c.lastSeen
      })),
      recentTasks: Array.from(this.tasks.values())
        .filter(t => Date.now() - t.startTime < 300000) // Last 5 minutes
        .map(t => ({
          id: t.id,
          type: t.type,
          status: t.status,
          duration: t.duration,
          assignedTo: t.assignedTo
        }))
    };
    
    this.log('info', 'Generated system report', report);
    
    // Save report
    const reportPath = path.join(process.cwd(), 'logs', `report_${Date.now()}.json`);
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
        improvementsExecuted: Math.min(prioritizedImprovements.length, 3)
      });
      
    } catch (error) {
      this.log('error', 'Continuous improvement cycle failed', { error: error.message });
    }
  }

  async analyzeSystemState() {
    const analysis = {
      performance: {
        averageTaskDuration: this.calculateAverageTaskDuration(),
        taskSuccessRate: this.calculateTaskSuccessRate(),
        computerUtilization: this.calculateComputerUtilization()
      },
      bottlenecks: this.identifyBottlenecks(),
      opportunities: this.identifyOpportunities()
    };
    
    return analysis;
  }

  calculateAverageTaskDuration() {
    const completedTasks = Array.from(this.tasks.values())
      .filter(t => t.status === 'completed' && t.duration);
    
    if (completedTasks.length === 0) return 0;
    
    const totalDuration = completedTasks.reduce((sum, t) => sum + t.duration, 0);
    return totalDuration / completedTasks.length;
  }

  calculateTaskSuccessRate() {
    const totalTasks = this.tasks.size;
    if (totalTasks === 0) return 1;
    
    const completedTasks = Array.from(this.tasks.values())
      .filter(t => t.status === 'completed').length;
    
    return completedTasks / totalTasks;
  }

  calculateComputerUtilization() {
    const computers = Array.from(this.computers.values());
    if (computers.length === 0) return 0;
    
    const totalUtilization = computers.reduce((sum, c) => sum + c.currentTasks, 0);
    return totalUtilization / computers.length;
  }

  identifyBottlenecks() {
    const bottlenecks = [];
    
    // Check for computers with high load
    for (const [ip, computer] of this.computers) {
      if (computer.currentTasks >= 2) {
        bottlenecks.push({
          type: 'high_load',
          computer: computer.hostname,
          load: computer.currentTasks
        });
      }
    }
    
    // Check for long task queue
    if (this.taskQueue.length > 10) {
      bottlenecks.push({
        type: 'long_queue',
        queueLength: this.taskQueue.length
      });
    }
    
    // Check for failed tasks
    const recentFailedTasks = Array.from(this.tasks.values())
      .filter(t => t.status === 'failed' && Date.now() - t.startTime < 300000);
    
    if (recentFailedTasks.length > 5) {
      bottlenecks.push({
        type: 'high_failure_rate',
        failedTasks: recentFailedTasks.length
      });
    }
    
    return bottlenecks;
  }

  identifyOpportunities() {
    const opportunities = [];
    
    // Check for underutilized computers
    for (const [ip, computer] of this.computers) {
      if (computer.currentTasks === 0 && computer.status === 'online') {
        opportunities.push({
          type: 'underutilized_computer',
          computer: computer.hostname,
          ip: ip
        });
      }
    }
    
    // Check for optimization opportunities
    const avgTaskDuration = this.calculateAverageTaskDuration();
    if (avgTaskDuration > 120000) { // More than 2 minutes
      opportunities.push({
        type: 'slow_tasks',
        averageDuration: avgTaskDuration
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
        actions: ['retry_failed_tasks', 'improve_error_handling']
      });
    }
    
    if (analysis.performance.averageTaskDuration > 120000) {
      improvements.push({
        type: 'optimize_performance',
        priority: 'medium',
        description: 'Reduce average task duration',
        actions: ['parallel_execution', 'task_optimization']
      });
    }
    
    // Bottleneck improvements
    for (const bottleneck of analysis.bottlenecks) {
      if (bottleneck.type === 'high_load') {
        improvements.push({
          type: 'load_balancing',
          priority: 'high',
          description: `Reduce load on ${bottleneck.computer}`,
          actions: ['redistribute_tasks', 'add_computer']
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
          description: improvement.description 
        });
        
        await this.executeImprovementActions(improvement);
        
        this.log('info', 'Improvement executed successfully', { 
          type: improvement.type 
        });
        
      } catch (error) {
        this.log('error', 'Failed to execute improvement', { 
          type: improvement.type,
          error: error.message 
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
        this.log('warn', 'Unknown improvement type', { type: improvement.type });
    }
  }

  async improveReliability() {
    // Retry failed tasks
    const failedTasks = Array.from(this.tasks.values())
      .filter(t => t.status === 'failed');
    
    for (const task of failedTasks.slice(0, 5)) { // Retry up to 5 tasks
      task.status = 'pending';
      task.retryCount = (task.retryCount || 0) + 1;
      this.taskQueue.push(task);
    }
  }

  async optimizePerformance() {
    // Optimize task execution
    const slowTasks = Array.from(this.tasks.values())
      .filter(t => t.status === 'running' && Date.now() - t.startTime > 300000);
    
    for (const task of slowTasks) {
      // Consider canceling very slow tasks
      if (Date.now() - task.startTime > 600000) { // 10 minutes
        task.status = 'cancelled';
        this.log('warn', 'Cancelled slow task', { taskId: task.id });
      }
    }
  }

  async improveLoadBalancing() {
    // Redistribute tasks from overloaded computers
    const overloadedComputers = Array.from(this.computers.values())
      .filter(c => c.currentTasks >= 2);
    
    for (const computer of overloadedComputers) {
      const tasksToMove = Array.from(this.tasks.values())
        .filter(t => t.assignedTo === computer.ip && t.status === 'running')
        .slice(0, 1); // Move one task
      
      for (const task of tasksToMove) {
        const availableComputer = Array.from(this.computers.values())
          .find(c => c.status === 'online' && c.currentTasks === 0);
        
        if (availableComputer) {
          // Move task to available computer
          task.assignedTo = availableComputer.ip;
          this.log('info', 'Moved task for load balancing', { 
            taskId: task.id,
            from: computer.hostname,
            to: availableComputer.hostname 
          });
        }
      }
    }
  }

  async stop() {
    this.log('info', 'Stopping Distributed AI Controller...');
    
    this.isRunning = false;
    
    // Stop all AI agents
    for (const [name, agent] of this.aiAgents) {
      await agent.stop();
    }
    
    // Cancel running tasks
    for (const [id, task] of this.tasks) {
      if (task.status === 'running') {
        task.status = 'cancelled';
      }
    }
    
    this.log('info', 'Distributed AI Controller stopped');
  }

  // Public API methods
  async addComputer(computerInfo) {
    this.computers.set(computerInfo.ip, computerInfo);
    this.log('info', 'Added computer', { hostname: computerInfo.hostname, ip: computerInfo.ip });
  }

  async removeComputer(ip) {
    const computer = this.computers.get(ip);
    if (computer) {
      this.computers.delete(ip);
      this.log('info', 'Removed computer', { hostname: computer.hostname, ip: ip });
    }
  }

  async submitTask(taskConfig) {
    const task = {
      id: crypto.randomUUID(),
      ...taskConfig,
      status: 'pending',
      createdAt: Date.now(),
      retryCount: 0
    };
    
    this.taskQueue.push(task);
    this.log('info', 'Submitted task', { taskId: task.id, type: task.type });
    
    return task.id;
  }

  async getTaskStatus(taskId) {
    const task = this.tasks.get(taskId);
    if (!task) {
      const queuedTask = this.taskQueue.find(t => t.id === taskId);
      return queuedTask ? { ...queuedTask, status: 'queued' } : null;
    }
    return task;
  }

  async getSystemStatus() {
    return {
      isRunning: this.isRunning,
      computers: this.computers.size,
      onlineComputers: Array.from(this.computers.values()).filter(c => c.status === 'online').length,
      totalTasks: this.tasks.size,
      activeTasks: Array.from(this.tasks.values()).filter(t => t.status === 'running').length,
      queueLength: this.taskQueue.length,
      uptime: Date.now() - this.startTime
    };
  }
}

// AI Agent class
class AIAgent {
  constructor(config, controller) {
    this.config = config;
    this.controller = controller;
    this.memory = [];
    this.isRunning = false;
  }

  async initialize() {
    this.isRunning = true;
    this.controller.log('info', 'AI agent initialized', { name: this.config.name });
  }

  async stop() {
    this.isRunning = false;
    this.controller.log('info', 'AI agent stopped', { name: this.config.name });
  }

  isHealthy() {
    return this.isRunning && this.memory.length < this.config.memorySize;
  }

  async analyzeResults(task) {
    if (!this.isRunning) return;
    
    const analysis = {
      timestamp: Date.now(),
      taskId: task.id,
      taskType: task.type,
      result: task.result,
      recommendations: []
    };
    
    // Generate recommendations based on task results
    analysis.recommendations = await this.generateRecommendations(task);
    
    // Store in memory
    this.memory.push(analysis);
    
    // Keep memory size in check
    if (this.memory.length > this.config.memorySize) {
      this.memory = this.memory.slice(-this.config.memorySize);
    }
    
    this.controller.log('info', 'AI agent analyzed results', { 
      agent: this.config.name,
      taskId: task.id,
      recommendations: analysis.recommendations.length 
    });
  }

  async generateRecommendations(task) {
    const recommendations = [];
    
    // Analyze task results and generate recommendations
    if (task.result && task.result.includes('error')) {
      recommendations.push({
        type: 'error_fix',
        priority: 'high',
        description: 'Fix detected errors',
        action: 'review_and_fix_errors'
      });
    }
    
    if (task.result && task.result.includes('warning')) {
      recommendations.push({
        type: 'warning_fix',
        priority: 'medium',
        description: 'Address warnings',
        action: 'review_and_fix_warnings'
      });
    }
    
    if (task.duration && task.duration > 120000) {
      recommendations.push({
        type: 'performance_optimization',
        priority: 'medium',
        description: 'Optimize task performance',
        action: 'analyze_performance_bottlenecks'
      });
    }
    
    return recommendations;
  }
}

// CLI interface
if (require.main === module) {
  const controller = new DistributedAIController();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nShutting down...');
    await controller.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\nShutting down...');
    await controller.stop();
    process.exit(0);
  });
  
  // Start the controller
  controller.start().catch(error => {
    console.error('Failed to start controller:', error);
    process.exit(1);
  });
}

module.exports = { DistributedAIController, AIAgent }; 