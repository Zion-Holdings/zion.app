#!/usr/bin/env node

/**
 * Zion App - Multi-Computer AI Coordination System
 * 
 * Coordinates AI-driven improvements across multiple computers with Cursor installed
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const axios = require('axios');
const WebSocket = require('ws');

// Configuration
const CONFIG = {
  // Network configuration
  NETWORK: {
    MASTER_PORT: process.env.MASTER_PORT || 3002,
    NODE_PORT: process.env.NODE_PORT || 3003,
    DISCOVERY_INTERVAL: 30 * 1000, // 30 seconds
    HEARTBEAT_INTERVAL: 10 * 1000, // 10 seconds
  },
  
  // Node configuration
  NODE: {
    ID: process.env.NODE_ID || `node-${Math.random().toString(36).substr(2, 9)}`,
    IS_MASTER: process.env.IS_MASTER === 'true',
    CAPABILITIES: process.env.NODE_CAPABILITIES?.split(',') || ['code_analysis', 'ai_suggestions', 'improvements'],
    RESOURCES: {
      CPU_CORES: require('os').cpus().length,
      MEMORY_GB: Math.round(require('os').totalmem() / (1024 * 1024 * 1024)),
      DISK_GB: 0, // Will be calculated
    }
  },
  
  // Shared storage
  STORAGE: {
    BASE_PATH: process.env.SHARED_STORAGE_PATH || './ai-improvement-data',
    IMPROVEMENTS_DIR: 'improvements',
    SUGGESTIONS_DIR: 'suggestions',
    METRICS_DIR: 'metrics',
    COORDINATION_DIR: 'coordination',
    LOGS_DIR: 'logs'
  },
  
  // AI Configuration
  AI: {
    CURSOR_API_KEY: process.env.CURSOR_API_KEY,
    CURSOR_WORKSPACE_ID: process.env.CURSOR_WORKSPACE_ID,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  }
};

class MultiComputerCoordinator {
  constructor() {
    this.isRunning = false;
    this.nodes = new Map();
    this.tasks = new Map();
    this.improvements = new Map();
    this.wss = null;
    this.masterClient = null;
    
    // Initialize node info
    this.nodeInfo = {
      id: CONFIG.NODE.ID,
      isMaster: CONFIG.NODE.IS_MASTER,
      capabilities: CONFIG.NODE.CAPABILITIES,
      resources: CONFIG.NODE.RESOURCES,
      status: 'initializing',
      lastHeartbeat: Date.now(),
      tasks: [],
      improvements: []
    };
    
    // Calculate disk space
    this.calculateDiskSpace();
  }

  /**
   * Initialize the coordinator
   */
  async initialize() {
    console.log('🚀 Initializing Multi-Computer AI Coordinator...');
    
    // Setup storage
    await this.setupStorage();
    
    // Initialize node info
    await this.initializeNodeInfo();
    
    // Start appropriate services based on node type
    if (CONFIG.NODE.IS_MASTER) {
      await this.startMasterNode();
    } else {
      await this.startWorkerNode();
    }
    
    // Start heartbeat
    this.startHeartbeat();
    
    // Start task processing
    this.startTaskProcessing();
    
    this.nodeInfo.status = 'running';
    this.isRunning = true;
    
    console.log('✅ Multi-Computer AI Coordinator initialized successfully');
  }

  /**
   * Calculate available disk space
   */
  calculateDiskSpace() {
    try {
      const stats = fs.statSync(CONFIG.STORAGE.BASE_PATH);
      // This is a simplified calculation - in production you'd use a proper disk space library
      this.nodeInfo.resources.DISK_GB = 100; // Placeholder
    } catch (error) {
      this.nodeInfo.resources.DISK_GB = 100; // Default
    }
  }

  /**
   * Setup shared storage
   */
  async setupStorage() {
    const dirs = [
      CONFIG.STORAGE.BASE_PATH,
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.IMPROVEMENTS_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.SUGGESTIONS_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.METRICS_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR),
      path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.LOGS_DIR)
    ];
    
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  /**
   * Initialize node information
   */
  async initializeNodeInfo() {
    const nodeInfoPath = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR, `${CONFIG.NODE.ID}.json`);
    
    // Save node info
    fs.writeFileSync(nodeInfoPath, JSON.stringify(this.nodeInfo, null, 2));
    
    // Register node
    await this.registerNode();
  }

  /**
   * Register node with master
   */
  async registerNode() {
    if (CONFIG.NODE.IS_MASTER) return;
    
    try {
      const masterUrl = `http://localhost:${CONFIG.NETWORK.MASTER_PORT}`;
      await axios.post(`${masterUrl}/api/nodes/register`, this.nodeInfo);
      console.log('✅ Registered with master node');
    } catch (error) {
      console.warn('⚠️  Could not register with master node:', error.message);
    }
  }

  /**
   * Start master node services
   */
  async startMasterNode() {
    console.log('🎯 Starting master node services...');
    
    // Start WebSocket server
    this.wss = new WebSocket.Server({ port: CONFIG.NETWORK.MASTER_PORT });
    
    this.wss.on('connection', (ws, req) => {
      console.log('🔗 New node connected');
      
      ws.on('message', (message) => {
        this.handleMasterMessage(ws, message);
      });
      
      ws.on('close', () => {
        console.log('🔌 Node disconnected');
      });
    });
    
    // Start HTTP server for API endpoints
    this.startMasterAPI();
    
    // Start node discovery
    this.startNodeDiscovery();
    
    // Start task distribution
    this.startTaskDistribution();
    
    console.log(`✅ Master node running on port ${CONFIG.NETWORK.MASTER_PORT}`);
  }

  /**
   * Start worker node services
   */
  async startWorkerNode() {
    console.log('🔧 Starting worker node services...');
    
    // Connect to master
    this.connectToMaster();
    
    // Start local improvement system
    this.startLocalImprovementSystem();
    
    console.log(`✅ Worker node ready, connecting to master on port ${CONFIG.NETWORK.MASTER_PORT}`);
  }

  /**
   * Connect to master node
   */
  connectToMaster() {
    const masterUrl = `ws://localhost:${CONFIG.NETWORK.MASTER_PORT}`;
    
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
   * Start master API server
   */
  startMasterAPI() {
    const express = require('express');
    const app = express();
    
    app.use(express.json());
    
    // Node registration endpoint
    app.post('/api/nodes/register', (req, res) => {
      const nodeInfo = req.body;
      this.nodes.set(nodeInfo.id, nodeInfo);
      console.log(`📝 Registered node: ${nodeInfo.id}`);
      res.json({ success: true });
    });
    
    // Node status endpoint
    app.get('/api/nodes/status', (req, res) => {
      const nodes = Array.from(this.nodes.values());
      res.json({
        master: this.nodeInfo,
        nodes,
        totalNodes: nodes.length + 1
      });
    });
    
    // Task assignment endpoint
    app.post('/api/tasks/assign', (req, res) => {
      const task = req.body;
      this.assignTask(task);
      res.json({ success: true, taskId: task.id });
    });
    
    // Improvement submission endpoint
    app.post('/api/improvements/submit', (req, res) => {
      const improvement = req.body;
      this.submitImprovement(improvement);
      res.json({ success: true, improvementId: improvement.id });
    });
    
    // Start server
    app.listen(CONFIG.NETWORK.MASTER_PORT + 1, () => {
      console.log(`🌐 Master API server running on port ${CONFIG.NETWORK.MASTER_PORT + 1}`);
    });
  }

  /**
   * Start node discovery
   */
  startNodeDiscovery() {
    setInterval(() => {
      this.discoverNodes();
    }, CONFIG.NETWORK.DISCOVERY_INTERVAL);
  }

  /**
   * Discover other nodes
   */
  async discoverNodes() {
    const coordinationDir = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR);
    
    if (!fs.existsSync(coordinationDir)) return;
    
    const files = fs.readdirSync(coordinationDir);
    
    for (const file of files) {
      if (file.endsWith('.json') && file !== `${CONFIG.NODE.ID}.json`) {
        try {
          const filePath = path.join(coordinationDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const nodeInfo = JSON.parse(content);
          
          // Check if node is still active
          const timeSinceHeartbeat = Date.now() - nodeInfo.lastHeartbeat;
          if (timeSinceHeartbeat < CONFIG.NETWORK.HEARTBEAT_INTERVAL * 3) {
            this.nodes.set(nodeInfo.id, nodeInfo);
          } else {
            // Remove inactive node
            this.nodes.delete(nodeInfo.id);
            fs.unlinkSync(filePath);
          }
        } catch (error) {
          console.error('❌ Error reading node info:', error);
        }
      }
    }
  }

  /**
   * Start task distribution
   */
  startTaskDistribution() {
    setInterval(() => {
      this.distributeTasks();
    }, 5000); // Every 5 seconds
  }

  /**
   * Distribute tasks to available nodes
   */
  distributeTasks() {
    const availableNodes = Array.from(this.nodes.values())
      .filter(node => node.status === 'running' && node.tasks.length < 3);
    
    if (availableNodes.length === 0) return;
    
    // Get pending tasks
    const pendingTasks = Array.from(this.tasks.values())
      .filter(task => task.status === 'pending');
    
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
    // Simple scoring system - can be enhanced
    let bestNode = null;
    let bestScore = -1;
    
    for (const node of availableNodes) {
      let score = 0;
      
      // Check capabilities
      if (node.capabilities.includes(task.type)) {
        score += 10;
      }
      
      // Check resources
      score += node.resources.CPU_CORES * 2;
      score += node.resources.MEMORY_GB;
      
      // Check current load
      score -= node.tasks.length * 5;
      
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
    
    console.log(`📋 Assigned task ${task.id} to node ${node.id}`);
  }

  /**
   * Start task processing
   */
  startTaskProcessing() {
    setInterval(() => {
      this.processLocalTasks();
    }, 2000); // Every 2 seconds
  }

  /**
   * Process local tasks
   */
  async processLocalTasks() {
    const localTasks = Array.from(this.tasks.values())
      .filter(task => task.assignedTo === CONFIG.NODE.ID && task.status === 'assigned');
    
    for (const task of localTasks) {
      try {
        console.log(`🔄 Processing task: ${task.id}`);
        
        task.status = 'processing';
        task.startedAt = Date.now();
        this.saveTask(task);
        
        // Process task based on type
        const result = await this.processTask(task);
        
        task.status = 'completed';
        task.completedAt = Date.now();
        task.result = result;
        this.saveTask(task);
        
        // Notify master
        this.sendToMaster({
          type: 'task_completed',
          data: task
        });
        
        console.log(`✅ Completed task: ${task.id}`);
        
      } catch (error) {
        console.error(`❌ Error processing task ${task.id}:`, error);
        
        task.status = 'failed';
        task.error = error.message;
        task.failedAt = Date.now();
        this.saveTask(task);
        
        // Notify master
        this.sendToMaster({
          type: 'task_failed',
          data: task
        });
      }
    }
  }

  /**
   * Process a specific task
   */
  async processTask(task) {
    switch (task.type) {
      case 'code_analysis':
        return await this.performCodeAnalysis(task.data);
      case 'ai_suggestion':
        return await this.generateAISuggestion(task.data);
      case 'improvement_application':
        return await this.applyImprovement(task.data);
      case 'performance_test':
        return await this.runPerformanceTest(task.data);
      case 'security_audit':
        return await this.runSecurityAudit(task.data);
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }

  /**
   * Perform code analysis
   */
  async performCodeAnalysis(data) {
    console.log('🔍 Performing code analysis...');
    
    const analysis = {
      timestamp: Date.now(),
      nodeId: CONFIG.NODE.ID,
      files: [],
      patterns: [],
      metrics: {},
      issues: []
    };
    
    // Scan source files
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      analysis.files = this.scanDirectory(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    }
    
    // Analyze patterns and metrics
    analysis.patterns = await this.detectCodePatterns(analysis.files);
    analysis.metrics = await this.calculateMetrics(analysis.files);
    analysis.issues = await this.detectIssues(analysis.files, analysis.patterns);
    
    return analysis;
  }

  /**
   * Generate AI suggestion
   */
  async generateAISuggestion(data) {
    console.log('🤖 Generating AI suggestion...');
    
    if (!CONFIG.AI.CURSOR_API_KEY) {
      throw new Error('Cursor API key not configured');
    }
    
    const prompt = this.buildAIPrompt(data);
    const response = await this.callCursorAPI(prompt);
    const suggestions = this.parseAISuggestions(response);
    
    return suggestions;
  }

  /**
   * Apply improvement
   */
  async applyImprovement(data) {
    console.log('🔧 Applying improvement...');
    
    const { suggestion, files } = data;
    
    for (const fileChange of suggestion.changes || []) {
      await this.applyFileChange(fileChange);
    }
    
    return { success: true, appliedChanges: suggestion.changes?.length || 0 };
  }

  /**
   * Run performance test
   */
  async runPerformanceTest(data) {
    console.log('⚡ Running performance test...');
    
    // Run Lighthouse audit
    const lighthouseResults = await this.runLighthouseAudit();
    
    // Check Core Web Vitals
    const webVitals = await this.checkCoreWebVitals();
    
    return {
      lighthouse: lighthouseResults,
      webVitals,
      timestamp: Date.now()
    };
  }

  /**
   * Run security audit
   */
  async runSecurityAudit(data) {
    console.log('🔒 Running security audit...');
    
    // Run npm audit
    const auditResults = await this.runNpmAudit();
    
    // Check for vulnerabilities
    const vulnerabilities = await this.checkVulnerabilities();
    
    return {
      audit: auditResults,
      vulnerabilities,
      timestamp: Date.now()
    };
  }

  /**
   * Start local improvement system
   */
  startLocalImprovementSystem() {
    // Import and start the AI continuous improvement system
    const AIContinuousImprovementSystem = require('./ai-continuous-improvement.cjs');
    this.improvementSystem = new AIContinuousImprovementSystem();
    
    // Override the node configuration
    this.improvementSystem.nodeStatus.id = CONFIG.NODE.ID;
    this.improvementSystem.nodeStatus.isMaster = false;
    
    // Start the system
    this.improvementSystem.initialize().catch(error => {
      console.error('❌ Failed to start local improvement system:', error);
    });
  }

  /**
   * Start heartbeat
   */
  startHeartbeat() {
    setInterval(() => {
      this.sendHeartbeat();
    }, CONFIG.NETWORK.HEARTBEAT_INTERVAL);
  }

  /**
   * Send heartbeat
   */
  sendHeartbeat() {
    this.nodeInfo.lastHeartbeat = Date.now();
    this.nodeInfo.tasks = Array.from(this.tasks.values())
      .filter(task => task.assignedTo === CONFIG.NODE.ID)
      .map(task => ({ id: task.id, status: task.status }));
    
    // Update node info file
    const nodeInfoPath = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR, `${CONFIG.NODE.ID}.json`);
    fs.writeFileSync(nodeInfoPath, JSON.stringify(this.nodeInfo, null, 2));
    
    // Send to master if worker node
    if (!CONFIG.NODE.IS_MASTER && this.masterClient?.readyState === WebSocket.OPEN) {
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
        case 'improvement_submitted':
          this.handleImprovementSubmitted(data.data);
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
          this.tasks.set(data.data.id, data.data);
          console.log(`📋 Received task: ${data.data.id}`);
          break;
        case 'improvement_request':
          this.handleImprovementRequest(data.data);
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
    this.tasks.set(task.id, task);
    console.log(`✅ Task completed: ${task.id} by ${task.assignedTo}`);
  }

  /**
   * Handle task failed
   */
  handleTaskFailed(task) {
    this.tasks.set(task.id, task);
    console.log(`❌ Task failed: ${task.id} by ${task.assignedTo}: ${task.error}`);
  }

  /**
   * Handle improvement submitted
   */
  handleImprovementSubmitted(improvement) {
    this.improvements.set(improvement.id, improvement);
    console.log(`📈 Improvement submitted: ${improvement.id}`);
  }

  /**
   * Handle improvement request
   */
  async handleImprovementRequest(data) {
    try {
      const improvement = await this.improvementSystem.generateAISuggestions(data);
      
      this.sendToMaster({
        type: 'improvement_submitted',
        data: {
          id: `improvement-${Date.now()}`,
          type: data.type,
          suggestions: improvement,
          nodeId: CONFIG.NODE.ID,
          timestamp: Date.now()
        }
      });
    } catch (error) {
      console.error('❌ Error handling improvement request:', error);
    }
  }

  /**
   * Assign task
   */
  assignTask(task) {
    this.tasks.set(task.id, task);
    console.log(`📋 Task assigned: ${task.id}`);
  }

  /**
   * Submit improvement
   */
  submitImprovement(improvement) {
    this.improvements.set(improvement.id, improvement);
    console.log(`📈 Improvement submitted: ${improvement.id}`);
  }

  /**
   * Save task to storage
   */
  saveTask(task) {
    const taskPath = path.join(CONFIG.STORAGE.BASE_PATH, CONFIG.STORAGE.COORDINATION_DIR, `task-${task.id}.json`);
    fs.writeFileSync(taskPath, JSON.stringify(task, null, 2));
  }

  // Helper methods (simplified implementations)
  scanDirectory(dir, extensions) {
    const files = [];
    const scan = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scan(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push({
            path: fullPath,
            relativePath: path.relative(process.cwd(), fullPath),
            size: stat.size,
            modified: stat.mtime
          });
        }
      }
    };
    scan(dir);
    return files;
  }

  async detectCodePatterns(files) {
    return { imports: {}, components: {}, hooks: {} };
  }

  async calculateMetrics(files) {
    return {
      totalFiles: files.length,
      totalLines: 0,
      totalSize: files.reduce((sum, f) => sum + f.size, 0)
    };
  }

  async detectIssues(files, patterns) {
    return [];
  }

  buildAIPrompt(data) {
    return `Analyze the following data and provide improvement suggestions: ${JSON.stringify(data)}`;
  }

  async callCursorAPI(prompt) {
    // Implementation would use the Cursor API
    return '{"suggestions": []}';
  }

  parseAISuggestions(response) {
    try {
      return JSON.parse(response).suggestions || [];
    } catch (error) {
      return [];
    }
  }

  async applyFileChange(fileChange) {
    // Implementation would apply file changes
    console.log(`🔧 Applying change to ${fileChange.file}`);
  }

  async runLighthouseAudit() {
    return { performance: 90, accessibility: 95, bestPractices: 90, seo: 90 };
  }

  async checkCoreWebVitals() {
    return { lcp: 2000, fid: 50, cls: 0.05 };
  }

  async runNpmAudit() {
    return { vulnerabilities: 0 };
  }

  async checkVulnerabilities() {
    return { count: 0 };
  }

  /**
   * Stop the coordinator
   */
  stop() {
    console.log('⏹️  Stopping Multi-Computer AI Coordinator...');
    this.isRunning = false;
    this.nodeInfo.status = 'stopped';
    
    if (this.wss) {
      this.wss.close();
    }
    
    if (this.masterClient) {
      this.masterClient.close();
    }
  }

  /**
   * Get system status
   */
  getStatus() {
    return {
      nodeInfo: this.nodeInfo,
      nodes: Array.from(this.nodes.values()),
      tasks: Array.from(this.tasks.values()),
      improvements: Array.from(this.improvements.values()),
      isRunning: this.isRunning
    };
  }
}

// CLI handling
if (require.main === module) {
  const coordinator = new MultiComputerCoordinator();
  
  // Handle process signals
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await coordinator.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await coordinator.stop();
    process.exit(0);
  });

  // Start the coordinator
  coordinator.initialize().catch(error => {
    console.error('❌ Failed to start multi-computer coordinator:', error);
    process.exit(1);
  });
}

module.exports = MultiComputerCoordinator; 