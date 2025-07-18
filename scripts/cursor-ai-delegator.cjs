#!/usr/bin/env node

/**
 * Zion App - Cursor AI Delegator
 * 
 * Intelligently delegates AI tasks across multiple computers with Cursor installed
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const axios = require('axios');
const WebSocket = require('ws');

// Configuration
const CONFIG = {
  // Cursor AI Configuration
  CURSOR: {
    API_ENDPOINT: process.env.CURSOR_API_ENDPOINT || 'https://api.cursor.sh',
    API_KEY: process.env.CURSOR_API_KEY,
    WORKSPACE_ID: process.env.CURSOR_WORKSPACE_ID,
    MAX_CONCURRENT_REQUESTS: 5,
    REQUEST_TIMEOUT: 30000, // 30 seconds
  },
  
  // Task Management
  TASKS: {
    MAX_QUEUE_SIZE: 100,
    PRIORITY_LEVELS: ['critical', 'high', 'medium', 'low'],
    TASK_TYPES: [
      'code_analysis',
      'performance_optimization',
      'security_audit',
      'bug_fix',
      'feature_implementation',
      'refactoring',
      'documentation',
      'testing'
    ]
  },
  
  // Multi-Computer Coordination
  COORDINATION: {
    MASTER_NODE: process.env.MASTER_NODE === 'true',
    NODE_ID: process.env.NODE_ID || `cursor-node-${Math.random().toString(36).substr(2, 9)}`,
    DISCOVERY_PORT: process.env.DISCOVERY_PORT || 3004,
    TASK_PORT: process.env.TASK_PORT || 3005,
    HEARTBEAT_INTERVAL: 5000, // 5 seconds
    TASK_SYNC_INTERVAL: 2000, // 2 seconds
  },
  
  // Storage
  STORAGE: {
    BASE_PATH: process.env.STORAGE_PATH || './cursor-ai-data',
    TASKS_DIR: 'tasks',
    RESULTS_DIR: 'results',
    LOGS_DIR: 'logs',
    COORDINATION_DIR: 'coordination'
  }
};

class CursorAIDelegator {
  constructor() {
    this.isRunning = false;
    this.taskQueue = [];
    this.activeTasks = new Map();
    this.completedTasks = new Map();
    this.nodes = new Map();
    this.wss = null;
    this.masterClient = null;
    
    // Task processing stats
    this.stats = {
      totalTasks: 0,
      completedTasks: 0,
      failedTasks: 0,
      averageResponseTime: 0,
      lastReset: Date.now()
    };
    
    // Initialize node info
    this.nodeInfo = {
      id: CONFIG.COORDINATION.NODE_ID,
      isMaster: CONFIG.COORDINATION.MASTER_NODE,
      capabilities: this.detectCapabilities(),
      resources: this.getSystemResources(),
      status: 'initializing',
      lastHeartbeat: Date.now(),
      activeTasks: 0,
      completedTasks: 0
    };
  }

  /**
   * Initialize the Cursor AI delegator
   */
  async initialize() {
    console.log('🚀 Initializing Cursor AI Delegator...');
    
    // Validate configuration
    this.validateConfig();
    
    // Setup storage
    await this.setupStorage();
    
    // Initialize Cursor AI connection
    await this.initializeCursorAI();
    
    // Start appropriate services based on node type
    if (CONFIG.COORDINATION.MASTER_NODE) {
      await this.startMasterNode();
    } else {
      await this.startWorkerNode();
    }
    
    // Start task processing
    this.startTaskProcessing();
    
    // Start heartbeat
    this.startHeartbeat();
    
    this.nodeInfo.status = 'running';
    this.isRunning = true;
    
    console.log('✅ Cursor AI Delegator initialized successfully');
  }

  /**
   * Validate configuration
   */
  validateConfig() {
    if (!CONFIG.CURSOR.API_KEY) {
      console.warn('⚠️  Cursor API key not configured. Some features may be limited.');
    }
    
    if (!CONFIG.CURSOR.WORKSPACE_ID) {
      console.warn('⚠️  Cursor workspace ID not configured. Some features may be limited.');
    }
  }

  /**
   * Setup storage directories
   */
  async setupStorage() {
    const dirs = [
      CONFIG.STORAGE.BASE_PATH,
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.TASKS_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.RESULTS_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.LOGS_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR)
    ];
    
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  /**
   * Initialize Cursor AI connection
   */
  async initializeCursorAI() {
    if (!CONFIG.CURSOR.API_KEY) {
      console.warn('⚠️  Cursor API key not available');
      return;
    }
    
    try {
      // Test Cursor API connection
      await this.testCursorConnection();
      console.log('✅ Cursor AI connection established');
    } catch (error) {
      console.warn('⚠️  Cursor AI connection failed:', error.message);
    }
  }

  /**
   * Detect node capabilities
   */
  detectCapabilities() {
    const capabilities = [];
    
    // Check for Cursor installation
    try {
      execSync('which cursor', { stdio: 'ignore' });
      capabilities.push('cursor_installed');
    } catch (error) {
      // Cursor not found in PATH
    }
    
    // Check for development tools
    try {
      execSync('which node', { stdio: 'ignore' });
      capabilities.push('node_js');
    } catch (error) {}
    
    try {
      execSync('which npm', { stdio: 'ignore' });
      capabilities.push('npm');
    } catch (error) {}
    
    try {
      execSync('which git', { stdio: 'ignore' });
      capabilities.push('git');
    } catch (error) {}
    
    // Check for specific task capabilities
    capabilities.push('code_analysis');
    capabilities.push('performance_optimization');
    capabilities.push('security_audit');
    capabilities.push('bug_fix');
    capabilities.push('refactoring');
    
    return capabilities;
  }

  /**
   * Get system resources
   */
  getSystemResources() {
    const os = require('os');
    
    return {
      cpuCores: os.cpus().length,
      memoryGB: Math.round(os.totalmem() / (1024 * 1024 * 1024)),
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      uptime: os.uptime()
    };
  }

  /**
   * Start master node services
   */
  async startMasterNode() {
    console.log('🎯 Starting master node services...');
    
    // Start WebSocket server for node communication
    this.wss = new WebSocket.Server({ port: CONFIG.COORDINATION.DISCOVERY_PORT });
    
    this.wss.on('connection', (ws, req) => {
      console.log('🔗 New node connected');
      
      ws.on('message', (message) => {
        this.handleMasterMessage(ws, message);
      });
      
      ws.on('close', () => {
        console.log('🔌 Node disconnected');
      });
    });
    
    // Start HTTP server for task management
    this.startTaskAPI();
    
    // Start task distribution
    this.startTaskDistribution();
    
    console.log(`✅ Master node running on port ${CONFIG.COORDINATION.DISCOVERY_PORT}`);
  }

  /**
   * Start worker node services
   */
  async startWorkerNode() {
    console.log('🔧 Starting worker node services...');
    
    // Connect to master
    this.connectToMaster();
    
    console.log(`✅ Worker node ready, connecting to master on port ${CONFIG.COORDINATION.DISCOVERY_PORT}`);
  }

  /**
   * Connect to master node
   */
  connectToMaster() {
    const masterUrl = `ws://localhost:${CONFIG.COORDINATION.DISCOVERY_PORT}`;
    
    this.masterClient = new WebSocket(masterUrl);
    
    this.masterClient.on('open', () => {
      console.log('🔗 Connected to master node');
      this.sendToMaster({
        type: 'node_register',
        data: this.nodeInfo
      });
    });
    
    this.masterClient.on('message', (message) => {
      this.handleWorkerMessage(message);
    });
    
    this.masterClient.on('close', () => {
      console.log('🔌 Disconnected from master node');
      // Attempt to reconnect
      setTimeout(() => this.connectToMaster(), 5000);
    });
    
    this.masterClient.on('error', (error) => {
      console.error('❌ WebSocket error:', error);
    });
  }

  /**
   * Start task API server
   */
  startTaskAPI() {
    const express = require('express');
    const app = express();
    
    app.use(express.json());
    
    // Submit task endpoint
    app.post('/api/tasks/submit', (req, res) => {
      const task = req.body;
      const taskId = this.submitTask(task);
      res.json({ success: true, taskId });
    });
    
    // Get task status endpoint
    app.get('/api/tasks/:taskId/status', (req, res) => {
      const taskId = req.params.taskId;
      const task = this.getTask(taskId);
      res.json(task || { error: 'Task not found' });
    });
    
    // Get all tasks endpoint
    app.get('/api/tasks', (req, res) => {
      const tasks = Array.from(this.activeTasks.values());
      res.json(tasks);
    });
    
    // Get system status endpoint
    app.get('/api/status', (req, res) => {
      res.json(this.getSystemStatus());
    });
    
    // Start server
    app.listen(CONFIG.COORDINATION.TASK_PORT, () => {
      console.log(`🌐 Task API server running on port ${CONFIG.COORDINATION.TASK_PORT}`);
    });
  }

  /**
   * Start task distribution
   */
  startTaskDistribution() {
    setInterval(() => {
      this.distributeTasks();
    }, CONFIG.COORDINATION.TASK_SYNC_INTERVAL);
  }

  /**
   * Distribute tasks to available nodes
   */
  distributeTasks() {
    const availableNodes = Array.from(this.nodes.values())
      .filter(node => node.status === 'running' && node.activeTasks < CONFIG.CURSOR.MAX_CONCURRENT_REQUESTS);
    
    if (availableNodes.length === 0) return;
    
    // Get pending tasks
    const pendingTasks = this.taskQueue.filter(task => task.status === 'pending');
    
    for (const task of pendingTasks) {
      // Find best node for task
      const bestNode = this.findBestNodeForTask(task, availableNodes);
      
      if (bestNode) {
        this.assignTaskToNode(task, bestNode);
      }
    }
  }

  /**
   * Find best node for a task
   */
  findBestNodeForTask(task, availableNodes) {
    let bestNode = null;
    let bestScore = -1;
    
    for (const node of availableNodes) {
      let score = 0;
      
      // Check capabilities
      if (node.capabilities.includes(task.type)) {
        score += 20;
      }
      
      // Check resources
      score += node.resources.cpuCores * 5;
      score += node.resources.memoryGB * 2;
      
      // Check current load
      score -= node.activeTasks * 10;
      
      // Check performance history
      if (node.completedTasks > 0) {
        score += Math.min(node.completedTasks / 10, 20);
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestNode = node;
      }
    }
    
    return bestNode;
  }

  /**
   * Assign task to node
   */
  assignTaskToNode(task, node) {
    task.status = 'assigned';
    task.assignedTo = node.id;
    task.assignedAt = Date.now();
    
    // Update task in storage
    this.saveTask(task);
    
    // Send task to node
    this.sendToNode(node.id, {
      type: 'task_assigned',
      data: task
    });
    
    // Update node stats
    node.activeTasks++;
    this.nodes.set(node.id, node);
    
    console.log(`📋 Assigned task ${task.id} to node ${node.id}`);
  }

  /**
   * Start task processing
   */
  startTaskProcessing() {
    setInterval(() => {
      this.processLocalTasks();
    }, 1000); // Every second
  }

  /**
   * Process local tasks
   */
  async processLocalTasks() {
    const localTasks = Array.from(this.activeTasks.values())
      .filter(task => task.assignedTo === CONFIG.COORDINATION.NODE_ID && task.status === 'assigned');
    
    for (const task of localTasks) {
      try {
        console.log(`🔄 Processing task: ${task.id}`);
        
        task.status = 'processing';
        task.startedAt = Date.now();
        this.saveTask(task);
        
        // Process task using Cursor AI
        const result = await this.processTaskWithCursor(task);
        
        task.status = 'completed';
        task.completedAt = Date.now();
        task.result = result;
        task.responseTime = task.completedAt - task.startedAt;
        
        this.saveTask(task);
        this.completedTasks.set(task.id, task);
        this.activeTasks.delete(task.id);
        
        // Update stats
        this.updateStats(task);
        
        // Notify master
        this.sendToMaster({
          type: 'task_completed',
          data: task
        });
        
        console.log(`✅ Completed task: ${task.id} in ${task.responseTime}ms`);
        
      } catch (error) {
        console.error(`❌ Error processing task ${task.id}:`, error);
        
        task.status = 'failed';
        task.error = error.message;
        task.failedAt = Date.now();
        
        this.saveTask(task);
        this.activeTasks.delete(task.id);
        
        // Update stats
        this.stats.failedTasks++;
        
        // Notify master
        this.sendToMaster({
          type: 'task_failed',
          data: task
        });
      }
    }
  }

  /**
   * Process task with Cursor AI
   */
  async processTaskWithCursor(task) {
    const prompt = this.buildTaskPrompt(task);
    
    try {
      const response = await this.callCursorAPI(prompt);
      const result = this.parseCursorResponse(response, task);
      
      return result;
    } catch (error) {
      throw new Error(`Cursor AI processing failed: ${error.message}`);
    }
  }

  /**
   * Build task prompt for Cursor AI
   */
  buildTaskPrompt(task) {
    const { type, data, priority } = task;
    
    const context = this.getContextForTaskType(type, data);
    const examples = this.getExamplesForTaskType(type);
    
    return `You are an expert software engineer working on the Zion App, a modern React/Next.js application.

TASK TYPE: ${type}
PRIORITY: ${priority}
TASK DATA: ${JSON.stringify(data, null, 2)}

CONTEXT FOR THIS TASK:
${context}

EXAMPLES OF SIMILAR TASKS:
${examples}

TASK REQUIREMENTS:
- Provide specific, actionable solutions
- Include code examples where applicable
- Consider best practices and modern development patterns
- Focus on maintainability and performance
- Ensure security best practices

RESPONSE FORMAT:
{
  "solution": {
    "summary": "Brief summary of the solution",
    "description": "Detailed description of the solution",
    "code_changes": [
      {
        "file": "path/to/file.tsx",
        "action": "add|modify|remove|refactor",
        "content": "new or modified code",
        "reasoning": "Why this change is needed"
      }
    ],
    "recommendations": [
      "Additional recommendation 1",
      "Additional recommendation 2"
    ],
    "testing": "Testing recommendations",
    "performance_impact": "high|medium|low",
    "security_considerations": "Security notes if applicable"
  }
}

Please provide a comprehensive solution that addresses the task requirements effectively.`;
  }

  /**
   * Get context for specific task type
   */
  getContextForTaskType(type, data) {
    switch (type) {
      case 'code_analysis':
        return `
Code Analysis Task:
- Analyze code quality and structure
- Identify potential improvements
- Detect code smells and anti-patterns
- Suggest refactoring opportunities
- Focus on maintainability and readability`;
        
      case 'performance_optimization':
        return `
Performance Optimization Task:
- Identify performance bottlenecks
- Suggest optimization strategies
- Focus on Core Web Vitals
- Consider bundle size and loading times
- Implement caching and lazy loading`;
        
      case 'security_audit':
        return `
Security Audit Task:
- Identify security vulnerabilities
- Review authentication and authorization
- Check for common security issues
- Suggest security improvements
- Ensure data protection`;
        
      case 'bug_fix':
        return `
Bug Fix Task:
- Analyze the reported issue
- Identify root cause
- Provide fix with explanation
- Include regression testing
- Ensure fix doesn't introduce new issues`;
        
      case 'feature_implementation':
        return `
Feature Implementation Task:
- Design the feature architecture
- Implement the feature
- Include proper error handling
- Add appropriate tests
- Update documentation`;
        
      case 'refactoring':
        return `
Refactoring Task:
- Improve code structure
- Reduce complexity
- Enhance maintainability
- Preserve functionality
- Update tests if needed`;
        
      default:
        return `
General Task:
- Analyze the requirements
- Provide comprehensive solution
- Consider best practices
- Ensure code quality
- Include testing recommendations`;
    }
  }

  /**
   * Get examples for specific task type
   */
  getExamplesForTaskType(type) {
    switch (type) {
      case 'code_analysis':
        return `
Example - Component Analysis:
{
  "solution": {
    "summary": "Refactor large component into smaller, focused components",
    "code_changes": [
      {
        "file": "src/components/LargeComponent.tsx",
        "action": "refactor",
        "content": "// Split into Header, Body, Footer components",
        "reasoning": "Improves maintainability and reusability"
      }
    ]
  }
}`;
        
      case 'performance_optimization':
        return `
Example - Bundle Optimization:
{
  "solution": {
    "summary": "Implement code splitting and lazy loading",
    "code_changes": [
      {
        "file": "src/pages/index.tsx",
        "action": "modify",
        "content": "const HeavyComponent = lazy(() => import('./HeavyComponent'))",
        "reasoning": "Reduces initial bundle size"
      }
    ]
  }
}`;
        
      default:
        return `
Example - General Improvement:
{
  "solution": {
    "summary": "Implement suggested improvement",
    "code_changes": [
      {
        "file": "src/components/Example.tsx",
        "action": "modify",
        "content": "// Improved code here",
        "reasoning": "Better performance/maintainability"
      }
    ]
  }
}`;
    }
  }

  /**
   * Call Cursor API
   */
  async callCursorAPI(prompt) {
    if (!CONFIG.CURSOR.API_KEY) {
      throw new Error('Cursor API key not configured');
    }

    try {
      const response = await axios.post(`${CONFIG.CURSOR.API_ENDPOINT}/v1/chat/completions`, {
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert software engineer specializing in React/Next.js applications.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.3
      }, {
        headers: {
          'Authorization': `Bearer ${CONFIG.CURSOR.API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: CONFIG.CURSOR.REQUEST_TIMEOUT
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Cursor API error:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Parse Cursor response
   */
  parseCursorResponse(response, task) {
    try {
      // Try to extract JSON from the response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return {
          solution: parsed.solution,
          rawResponse: response,
          taskId: task.id,
          processedAt: Date.now()
        };
      }
      
      // Fallback: return the raw response
      return {
        solution: {
          summary: 'Response received',
          description: response,
          code_changes: [],
          recommendations: []
        },
        rawResponse: response,
        taskId: task.id,
        processedAt: Date.now()
      };
    } catch (error) {
      console.error('Error parsing Cursor response:', error);
      return {
        solution: {
          summary: 'Error parsing response',
          description: 'Failed to parse AI response',
          code_changes: [],
          recommendations: []
        },
        rawResponse: response,
        taskId: task.id,
        processedAt: Date.now(),
        error: error.message
      };
    }
  }

  /**
   * Test Cursor connection
   */
  async testCursorConnection() {
    if (!CONFIG.CURSOR.API_KEY) {
      throw new Error('Cursor API key not configured');
    }
    
    // Simple test call
    await this.callCursorAPI('Test connection');
  }

  /**
   * Start heartbeat
   */
  startHeartbeat() {
    setInterval(() => {
      this.sendHeartbeat();
    }, CONFIG.COORDINATION.HEARTBEAT_INTERVAL);
  }

  /**
   * Send heartbeat
   */
  sendHeartbeat() {
    this.nodeInfo.lastHeartbeat = Date.now();
    this.nodeInfo.activeTasks = this.activeTasks.size;
    this.nodeInfo.completedTasks = this.completedTasks.size;
    
    // Update node info file
    const nodeInfoPath = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR, `${CONFIG.COORDINATION.NODE_ID}.json`);
    fs.writeFileSync(nodeInfoPath, JSON.stringify(this.nodeInfo, null, 2));
    
    // Send to master if worker node
    if (!CONFIG.COORDINATION.MASTER_NODE && this.masterClient?.readyState === WebSocket.OPEN) {
      this.sendToMaster({
        type: 'heartbeat',
        data: this.nodeInfo
      });
    }
  }

  /**
   * Handle master node messages
   */
  handleMasterMessage(ws, message) {
    try {
      const data = JSON.parse(message);
      
      switch (data.type) {
        case 'node_register':
          this.nodes.set(data.data.id, data.data);
          console.log(`📝 Node registered: ${data.data.id}`);
          break;
        case 'heartbeat':
          this.nodes.set(data.data.id, data.data);
          break;
        case 'task_completed':
          this.handleTaskCompleted(data.data);
          break;
        case 'task_failed':
          this.handleTaskFailed(data.data);
          break;
        default:
          console.warn(`⚠️  Unknown message type: ${data.type}`);
      }
    } catch (error) {
      console.error('❌ Error handling master message:', error);
    }
  }

  /**
   * Handle worker node messages
   */
  handleWorkerMessage(message) {
    try {
      const data = JSON.parse(message);
      
      switch (data.type) {
        case 'task_assigned':
          this.activeTasks.set(data.data.id, data.data);
          console.log(`📋 Received task: ${data.data.id}`);
          break;
        default:
          console.warn(`⚠️  Unknown message type: ${data.type}`);
      }
    } catch (error) {
      console.error('❌ Error handling worker message:', error);
    }
  }

  /**
   * Send message to master
   */
  sendToMaster(message) {
    if (this.masterClient?.readyState === WebSocket.OPEN) {
      this.masterClient.send(JSON.stringify(message));
    }
  }

  /**
   * Send message to specific node
   */
  sendToNode(nodeId, message) {
    // In a real implementation, you'd maintain WebSocket connections to each node
    // For now, we'll use the shared storage
    const messagePath = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR, `message-${nodeId}-${Date.now()}.json`);
    fs.writeFileSync(messagePath, JSON.stringify(message, null, 2));
  }

  /**
   * Handle task completed
   */
  handleTaskCompleted(task) {
    this.activeTasks.set(task.id, task);
    console.log(`✅ Task completed: ${task.id} by ${task.assignedTo}`);
  }

  /**
   * Handle task failed
   */
  handleTaskFailed(task) {
    this.activeTasks.set(task.id, task);
    console.log(`❌ Task failed: ${task.id} by ${task.assignedTo}: ${task.error}`);
  }

  /**
   * Submit task
   */
  submitTask(taskData) {
    const taskId = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const task = {
      id: taskId,
      type: taskData.type || 'general',
      priority: taskData.priority || 'medium',
      data: taskData.data || {},
      status: 'pending',
      submittedAt: Date.now(),
      submittedBy: CONFIG.COORDINATION.NODE_ID
    };
    
    this.taskQueue.push(task);
    this.activeTasks.set(taskId, task);
    this.stats.totalTasks++;
    
    // Save task to storage
    this.saveTask(task);
    
    console.log(`📝 Task submitted: ${taskId} (${task.type})`);
    return taskId;
  }

  /**
   * Get task by ID
   */
  getTask(taskId) {
    return this.activeTasks.get(taskId) || this.completedTasks.get(taskId);
  }

  /**
   * Save task to storage
   */
  saveTask(task) {
    const taskPath = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.TASKS_DIR, `${task.id}.json`);
    fs.writeFileSync(taskPath, JSON.stringify(task, null, 2));
  }

  /**
   * Update stats
   */
  updateStats(task) {
    this.stats.completedTasks++;
    
    // Update average response time
    const totalTime = this.stats.averageResponseTime * (this.stats.completedTasks - 1) + task.responseTime;
    this.stats.averageResponseTime = totalTime / this.stats.completedTasks;
  }

  /**
   * Get system status
   */
  getSystemStatus() {
    return {
      nodeInfo: this.nodeInfo,
      nodes: Array.from(this.nodes.values()),
      tasks: {
        queue: this.taskQueue.length,
        active: this.activeTasks.size,
        completed: this.completedTasks.size
      },
      stats: this.stats,
      isRunning: this.isRunning
    };
  }

  /**
   * Stop the delegator
   */
  stop() {
    console.log('⏹️  Stopping Cursor AI Delegator...');
    this.isRunning = false;
    this.nodeInfo.status = 'stopped';
    
    if (this.wss) {
      this.wss.close();
    }
    
    if (this.masterClient) {
      this.masterClient.close();
    }
  }
}

// CLI handling
if (require.main === module) {
  const delegator = new CursorAIDelegator();
  
  // Handle process signals
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await delegator.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await delegator.stop();
    process.exit(0);
  });

  // Start the delegator
  delegator.initialize().catch(error => {
    console.error('❌ Failed to start Cursor AI delegator:', error);
    process.exit(1);
  });
}

module.exports = CursorAIDelegator; 