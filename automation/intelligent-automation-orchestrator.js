#!/usr/bin/env node

/**
 * Intelligent Automation Orchestrator
 * 
 * Coordinates and manages multiple automation systems with intelligent
 * decision making, conflict resolution, and self-healing capabilities.
 */

const EventEmitter = require('events');
const express = require('express');
const socketIo = require('socket.io');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Simple logger
const logger = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
  warn: (msg) => console.warn(`[WARN] ${msg}`),
  debug: (msg) => console.log(`[DEBUG] ${msg}`)
};

class IntelligentAutomationOrchestrator extends EventEmitter {
  constructor(config = {}) {
    super();
    
    this.config = config;
    this.port = config.dashboard?.port || 3001;
    this.isRunning = false;
    
    // Core components
    this.automationSystems = new Map();
    this.resourceManager = new ResourceManager();
    this.conflictResolver = new ConflictResolver();
    this.decisionEngine = new DecisionEngine();
    this.healthMonitor = new HealthMonitor();
    this.performanceTracker = new PerformanceTracker();
    this.learningEngine = new LearningEngine();
    
    // Express app and server
    this.app = express();
    this.server = null;
    this.io = null;
    
    // Monitoring intervals
    this.monitoringInterval = null;
    this.decisionInterval = null;
    this.learningInterval = null;
  }

  /**
   * Initialize the orchestrator
   */
  async initialize() {
    logger.info('🔧 Initializing Intelligent Automation Orchestrator...');
    
    try {
      // Initialize core components
      await this.resourceManager.initialize();
      await this.conflictResolver.initialize();
      await this.decisionEngine.initialize();
      await this.healthMonitor.initialize();
      await this.performanceTracker.initialize();
      await this.learningEngine.initialize();
      
      // Setup Express server
      await this.setupExpress();
      
      // Initialize automation systems
      await this.initializeAutomationSystems();
      
      logger.info('✅ Orchestrator initialized successfully');
    } catch (error) {
      logger.error('❌ Failed to initialize orchestrator:', error);
      throw error;
    }
  }

  /**
   * Setup Express server
   */
  async setupExpress() {
    // Basic middleware
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'public')));
    
    // Health check endpoint
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        systems: Array.from(this.automationSystems.entries()).map(([name, system]) => ({
          name,
          status: system.status,
          health: system.health,
          performance: system.performance
        }))
      });
    });
    
    // API endpoints
    this.app.get('/api/systems', (req, res) => {
      const systems = Array.from(this.automationSystems.entries()).map(([name, system]) => ({
        name,
        ...system
      }));
      res.json(systems);
    });
    
    this.app.post('/api/systems/:name/start', async (req, res) => {
      try {
        const { name } = req.params;
        await this.startSystem(name);
        res.json({ success: true, message: `Started system: ${name}` });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });
    
    this.app.post('/api/systems/:name/stop', async (req, res) => {
      try {
        const { name } = req.params;
        await this.stopSystem(name);
        res.json({ success: true, message: `Stopped system: ${name}` });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });
    
    this.app.post('/api/systems/:name/restart', async (req, res) => {
      try {
        const { name } = req.params;
        await this.restartSystem(name);
        res.json({ success: true, message: `Restarted system: ${name}` });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });
  }

  /**
   * Initialize automation systems
   */
  async initializeAutomationSystems() {
    logger.info('🤖 Initializing automation systems...');

    // Autonomous System
    this.automationSystems.set('autonomous', {
      name: 'Autonomous System',
      process: null,
      status: 'stopped',
      health: 0,
      performance: 0,
      lastActivity: null,
      port: 3001,
      start: () => this.startSystem('autonomous'),
      stop: () => this.stopSystem('autonomous'),
      restart: () => this.restartSystem('autonomous')
    });

    // Infinite Improvement Loop
    this.automationSystems.set('infinite-improvement', {
      name: 'Infinite Improvement Loop',
      process: null,
      status: 'stopped',
      health: 0,
      performance: 0,
      lastActivity: null,
      port: 3002,
      start: () => this.startSystem('infinite-improvement'),
      stop: () => this.stopSystem('infinite-improvement'),
      restart: () => this.restartSystem('infinite-improvement')
    });

    // Enhanced Infinite Improvement Loop
    this.automationSystems.set('enhanced-improvement', {
      name: 'Enhanced Infinite Improvement Loop',
      process: null,
      status: 'stopped',
      health: 0,
      performance: 0,
      lastActivity: null,
      port: 3003,
      start: () => this.startSystem('enhanced-improvement'),
      stop: () => this.stopSystem('enhanced-improvement'),
      restart: () => this.restartSystem('enhanced-improvement')
    });

    // Continuous Improvement System
    this.automationSystems.set('continuous-improvement', {
      name: 'Continuous Improvement System',
      process: null,
      status: 'stopped',
      health: 0,
      performance: 0,
      lastActivity: null,
      port: 3005,
      start: () => this.startSystem('continuous-improvement'),
      stop: () => this.stopSystem('continuous-improvement'),
      restart: () => this.restartSystem('continuous-improvement')
    });

    logger.info(`✅ Initialized ${this.automationSystems.size} automation systems`);
  }

  /**
   * Start the orchestrator
   */
  async start() {
    logger.info('🚀 Starting Intelligent Automation Orchestrator...');
    
    try {
      // Initialize orchestrator
      await this.initialize();
      
      // Start server
      this.server = this.app.listen(this.port, () => {
        logger.info(`🌐 Orchestrator running on port ${this.port}`);
      });

      // Setup WebSocket
      this.setupWebSocket();
      
      // Start orchestration
      this.isRunning = true;
      await this.startOrchestration();
      
      logger.info('✅ Intelligent Automation Orchestrator started successfully');
      logger.info(`📊 Dashboard: http://localhost:${this.port}`);
      logger.info(`🔗 API: http://localhost:${this.port}/health`);
      
    } catch (error) {
      logger.error('❌ Failed to start orchestrator:', error);
      throw error;
    }
  }

  /**
   * Setup WebSocket
   */
  setupWebSocket() {
    this.io = socketIo(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });

    this.io.on('connection', (socket) => {
      logger.info('🔌 Client connected to orchestrator');
      
      // Send initial state
      socket.emit('systems', Array.from(this.automationSystems.entries()));
      
      socket.on('disconnect', () => {
        logger.info('🔌 Client disconnected from orchestrator');
      });
    });
  }

  /**
   * Start orchestration loops
   */
  async startOrchestration() {
    // Start monitoring loop
    this.startMonitoringLoop();
    
    // Start decision loop
    this.startDecisionLoop();
    
    // Start learning loop
    this.startLearningLoop();
    
    logger.info('🔄 Orchestration loops started');
  }

  /**
   * Start all automation systems
   */
  async startAllSystems() {
    logger.info('🚀 Starting all automation systems...');
    
    for (const [name, system] of this.automationSystems) {
      try {
        await this.startSystem(name);
        await this.sleep(2000); // Wait between starts
      } catch (error) {
        logger.error(`❌ Failed to start system ${name}:`, error);
      }
    }
    
    logger.info('✅ All automation systems started');
  }

  /**
   * Start a specific automation system
   */
  async startSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      throw new Error(`System ${systemName} not found`);
    }

    if (system.status === 'running') {
      logger.warn(`System ${systemName} is already running`);
      return;
    }

    logger.info(`🚀 Starting system: ${systemName}`);

    try {
      // Check if port is available
      const isPortAvailable = await this.resourceManager.checkPort(system.port);
      if (!isPortAvailable) {
        throw new Error(`Port ${system.port} is not available`);
      }

      // Start the system process
      const scriptPath = this.getSystemScriptPath(systemName);
      system.process = spawn('node', [scriptPath], {
        stdio: 'pipe',
        detached: false,
        env: { ...process.env, PORT: system.port }
      });

      system.status = 'starting';
      system.lastActivity = Date.now();

      // Monitor process
      system.process.stdout.on('data', (data) => {
        logger.info(`[${systemName}] ${data.toString().trim()}`);
        system.lastActivity = Date.now();
      });

      system.process.stderr.on('data', (data) => {
        logger.error(`[${systemName} ERROR] ${data.toString().trim()}`);
        system.lastActivity = Date.now();
      });

      system.process.on('close', (code) => {
        logger.info(`[${systemName}] Process exited with code ${code}`);
        system.status = 'stopped';
        system.process = null;
        
        // Attempt restart if it was running
        if (this.isRunning) {
          const timeoutId = setTimeout(() => this.restartSystem(systemName), 5000);
          // Store timeoutId for cleanup if needed
        }
      });

      // Wait for system to start
      await this.waitForSystemStart(systemName);
      
      system.status = 'running';
      system.health = 100;
      system.performance = 100;
      
      logger.info(`✅ System ${systemName} started successfully`);
      this.emitSystemUpdate(systemName);
      
    } catch (error) {
      system.status = 'error';
      logger.error(`❌ Failed to start system ${systemName}:`, error);
      throw error;
    }
  }

  /**
   * Stop a specific automation system
   */
  async stopSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      throw new Error(`System ${systemName} not found`);
    }

    if (system.status === 'stopped') {
      logger.warn(`System ${systemName} is already stopped`);
      return;
    }

    logger.info(`🛑 Stopping system: ${systemName}`);

    try {
      if (system.process) {
        system.process.kill('SIGTERM');
        
        // Wait for graceful shutdown
        await new Promise((resolve) => {
          const timeout = setTimeout(() => {
            system.process.kill('SIGKILL');
            resolve();
          }, 5000);
          
          system.process.on('close', () => {
            clearTimeout(timeout);
            resolve();
          });
        });
      }
      
      system.status = 'stopped';
      system.process = null;
      system.health = 0;
      system.performance = 0;
      
      logger.info(`✅ System ${systemName} stopped successfully`);
      this.emitSystemUpdate(systemName);
      
    } catch (error) {
      logger.error(`❌ Failed to stop system ${systemName}:`, error);
      throw error;
    }
  }

  /**
   * Restart a specific automation system
   */
  async restartSystem(systemName) {
    logger.info(`🔄 Restarting system: ${systemName}`);
    
    try {
      await this.stopSystem(systemName);
      await this.sleep(1000);
      await this.startSystem(systemName);
      
      logger.info(`✅ System ${systemName} restarted successfully`);
    } catch (error) {
      logger.error(`❌ Failed to restart system ${systemName}:`, error);
      throw error;
    }
  }

  /**
   * Wait for system to start
   */
  async waitForSystemStart(systemName) {
    const maxAttempts = 30;
    const delay = 1000;
    
    for (let i = 0; i < maxAttempts; i++) {
      try {
        const response = await fetch(`http://localhost:${this.automationSystems.get(systemName).port}/health`);
        if (response.ok) {
          return;
        }
      } catch (error) {
        // System not ready yet
      }
      
      await this.sleep(delay);
    }
    
    throw new Error(`System ${systemName} failed to start within ${maxAttempts * delay}ms`);
  }

  /**
   * Start monitoring loop
   */
  startMonitoringLoop() {
    this.monitoringInterval = setInterval(async () => {
      await this.monitorSystems();
    }, this.config.monitoring?.interval || 60000);
  }

  /**
   * Start decision loop
   */
  startDecisionLoop() {
    this.decisionInterval = setInterval(async () => {
      await this.makeDecisions();
    }, 30000);
  }

  /**
   * Start learning loop
   */
  startLearningLoop() {
    this.learningInterval = setInterval(async () => {
      await this.learnFromData();
    }, 60000);
  }

  /**
   * Monitor all systems
   */
  async monitorSystems() {
    for (const [name, system] of this.automationSystems) {
      if (system.status === 'running') {
        try {
          const health = await this.checkSystemHealth(name, system.port);
          system.health = health;
          system.lastActivity = Date.now();
          
          this.emitSystemUpdate(name);
        } catch (error) {
          logger.error(`❌ Health check failed for ${name}:`, error);
          system.health = 0;
        }
      }
    }
    
    // Check for conflicts
    await this.checkConflicts();
    
    // Update health metrics
    await this.updateHealthMetrics();
  }

  /**
   * Check system health
   */
  async checkSystemHealth(systemName, port) {
    try {
      const response = await fetch(`http://localhost:${port}/health`);
      if (response.ok) {
        const data = await response.json();
        return data.health || 100;
      }
    } catch (error) {
      logger.debug(`Health check failed for ${systemName}: ${error.message}`);
    }
    
    return 0;
  }

  /**
   * Check for conflicts between systems
   */
  async checkConflicts() {
    const conflicts = await this.conflictResolver.detectConflicts(this.automationSystems);
    if (conflicts.length > 0) {
      logger.warn(`⚠️ Detected ${conflicts.length} conflicts`);
      await this.handleConflicts();
    }
  }

  /**
   * Update health metrics
   */
  async updateHealthMetrics() {
    const metrics = {
      totalSystems: this.automationSystems.size,
      runningSystems: Array.from(this.automationSystems.values()).filter(s => s.status === 'running').length,
      averageHealth: Array.from(this.automationSystems.values()).reduce((sum, s) => sum + s.health, 0) / this.automationSystems.size,
      timestamp: Date.now()
    };
    
    this.performanceTracker.updateMetrics(metrics);
  }

  /**
   * Make intelligent decisions
   */
  async makeDecisions() {
    const decisions = await this.decisionEngine.makeDecisions(this.automationSystems);
    
    for (const decision of decisions) {
      try {
        await this.executeDecision(decision);
      } catch (error) {
        logger.error(`❌ Failed to execute decision:`, error);
      }
    }
  }

  /**
   * Execute a decision
   */
  async executeDecision(decision) {
    logger.info(`🎯 Executing decision: ${decision.action} on ${decision.target}`);
    
    switch (decision.action) {
      case 'restart':
        await this.restartSystem(decision.target);
        break;
      case 'optimize':
        await this.optimizeResources();
        break;
      case 'scale':
        // Handle scaling decisions
        break;
      default:
        logger.warn(`Unknown decision action: ${decision.action}`);
    }
  }

  /**
   * Optimize resource usage
   */
  async optimizeResources() {
    const usage = this.resourceManager.getUsage();
    
    if (usage.cpu > 80 || usage.memory > 80) {
      logger.warn('⚠️ High resource usage detected, optimizing...');
      await this.resourceManager.optimize();
    }
  }

  /**
   * Handle conflicts between systems
   */
  async handleConflicts() {
    const conflicts = this.conflictResolver.getActiveConflicts();
    
    for (const conflict of conflicts) {
      try {
        await this.conflictResolver.resolveConflict(conflict);
      } catch (error) {
        logger.error(`❌ Failed to resolve conflict:`, error);
      }
    }
  }

  /**
   * Learn from collected data
   */
  async learnFromData() {
    const metrics = this.performanceTracker.getMetrics();
    await this.learningEngine.learn(metrics);
    
    // Update recommendations
    await this.updateRecommendations();
  }

  /**
   * Update recommendations based on learning
   */
  async updateRecommendations() {
    const patterns = this.learningEngine.getPatterns();
    const recommendations = this.learningEngine.getRecommendations();
    
    // Apply recommendations
    for (const recommendation of recommendations) {
      try {
        await this.optimizeOrchestration(recommendation);
      } catch (error) {
        logger.error(`❌ Failed to apply recommendation:`, error);
      }
    }
  }

  /**
   * Optimize orchestration based on recommendations
   */
  async optimizeOrchestration(recommendation) {
    logger.info(`🔧 Applying optimization: ${recommendation.type}`);
    
    switch (recommendation.type) {
      case 'scheduling':
        // Adjust scheduling intervals
        break;
      case 'resource':
        // Optimize resource allocation
        break;
      case 'conflict':
        // Improve conflict resolution
        break;
      default:
        logger.warn(`Unknown optimization type: ${recommendation.type}`);
    }
  }

  /**
   * Orchestrate an action across systems
   */
  async orchestrateAction(action, target, data = {}) {
    logger.info(`🎼 Orchestrating action: ${action} on ${target}`);
    
    try {
      // Execute action
      const result = await this.executeAction(action, target, data);
      
      // Learn from result
      await this.learningEngine.learn({ action, target, data, result });
      
      return result;
    } catch (error) {
      logger.error(`❌ Orchestration failed:`, error);
      throw error;
    }
  }

  /**
   * Execute an action
   */
  async executeAction(action, target, data) {
    // Implementation depends on specific actions
    logger.info(`⚡ Executing action: ${action} on ${target}`);
    return { success: true, timestamp: Date.now() };
  }

  /**
   * Get system script path
   */
  getSystemScriptPath(systemName) {
    const scriptMap = {
      'autonomous': 'start-autonomous-system.js',
      'infinite-improvement': 'start-infinite-improvement.sh',
      'enhanced-improvement': 'enhanced-automation-system.js',
      'continuous-improvement': 'continuous-improvement.js'
    };
    
    const scriptName = scriptMap[systemName];
    if (!scriptName) {
      throw new Error(`No script found for system: ${systemName}`);
    }
    
    return path.join(__dirname, scriptName);
  }

  /**
   * Emit system update via WebSocket
   */
  emitSystemUpdate(systemName) {
    if (this.io) {
      const system = this.automationSystems.get(systemName);
      this.io.emit('systemUpdate', { name: systemName, ...system });
    }
  }

  /**
   * Stop the orchestrator
   */
  async stop() {
    logger.info('🛑 Stopping Intelligent Automation Orchestrator...');
    
    this.isRunning = false;
    
    // Clear intervals
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    if (this.decisionInterval) {
      clearInterval(this.decisionInterval);
    }
    if (this.learningInterval) {
      clearInterval(this.learningInterval);
    }
    
    // Stop all systems
    for (const [name, system] of this.automationSystems) {
      if (system.status === 'running') {
        try {
          await this.stopSystem(name);
        } catch (error) {
          logger.error(`❌ Failed to stop system ${name}:`, error);
        }
      }
    }
    
    // Close server
    if (this.server) {
      this.server.close();
    }
    
    logger.info('✅ Intelligent Automation Orchestrator stopped');
  }

  /**
   * Sleep utility
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Resource Manager
class ResourceManager {
  async initialize() {
    logger.info('🔧 Initializing Resource Manager');
  }

  async checkPort(port) {
    try {
      const response = await fetch(`http://localhost:${port}/health`);
      return false; // Port is in use
    } catch (error) {
      return true; // Port is available
    }
  }

  getUsage() {
    // Mock resource usage
    return {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100
    };
  }

  async optimize() {
    logger.info('🔧 Optimizing resource usage');
  }
}

// Conflict Resolver
class ConflictResolver {
  async initialize() {
    logger.info('🔧 Initializing Conflict Resolver');
  }

  async detectConflicts(systems) {
    // Mock conflict detection
    return [];
  }

  getActiveConflicts() {
    return [];
  }

  async resolveConflict(conflict) {
    logger.info(`🔧 Resolving conflict: ${conflict.type}`);
  }
}

// Decision Engine
class DecisionEngine {
  async initialize() {
    logger.info('🔧 Initializing Decision Engine');
  }

  async makeDecisions(systems) {
    // Mock decision making
    return [];
  }

  async makeDecision(action, target, data) {
    return { action, target, data, timestamp: Date.now() };
  }

  getRecentDecisions() {
    return [];
  }
}

// Health Monitor
class HealthMonitor {
  async initialize() {
    logger.info('🔧 Initializing Health Monitor');
  }
}

// Performance Tracker
class PerformanceTracker {
  async initialize() {
    logger.info('🔧 Initializing Performance Tracker');
  }

  getMetrics() {
    return {
      timestamp: Date.now(),
      systems: []
    };
  }
}

// Learning Engine
class LearningEngine {
  async initialize() {
    logger.info('🔧 Initializing Learning Engine');
  }

  async learn(data) {
    // Mock learning
  }

  getPatterns() {
    return [];
  }

  getRecommendations() {
    return [];
  }

  async optimizeOrchestration() {
    // Mock optimization
  }
}

module.exports = { IntelligentAutomationOrchestrator }; 
module.exports = IntelligentAutomationOrchestrator; 