#!/usr/bin/env node

'use strict';

/*
  Cursor Intelligence Orchestrator
  - Coordinates all intelligent systems for Cursor agents
  - Manages the snowball effect of intelligence amplification
  - Orchestrates multi-agent collaboration and knowledge synthesis
  - Provides unified interface for agent intelligence enhancement
  - Maintains continuous improvement cycles
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Import the intelligent systems
const CursorIntelligenceAmplifier = require('./cursor-intelligence-amplifier.cjs');
const CursorMultiAgentCollaborator = require('./cursor-multi-agent-collaborator.cjs');
const CursorKnowledgeSynthesizer = require('./cursor-knowledge-synthesizer.cjs');

class CursorIntelligenceOrchestrator {
  constructor() {
    this.baseDir = process.cwd();
    this.orchestratorDir = path.join(this.baseDir, 'automation', 'cursor-intelligence-orchestrator');
    this.configPath = path.join(this.orchestratorDir, 'orchestrator-config.json');
    this.statusPath = path.join(this.orchestratorDir, 'orchestrator-status.json');
    this.logsPath = path.join(this.orchestratorDir, 'orchestrator-logs.json');
    
    this.ensureDirectories();
    this.loadOrchestratorState();
    
    // Initialize intelligent systems
    this.intelligenceAmplifier = new CursorIntelligenceAmplifier();
    this.multiAgentCollaborator = new CursorMultiAgentCollaborator();
    this.knowledgeSynthesizer = new CursorKnowledgeSynthesizer();
    
    this.systems = {
      intelligenceAmplifier: this.intelligenceAmplifier,
      multiAgentCollaborator: this.multiAgentCollaborator,
      knowledgeSynthesizer: this.knowledgeSynthesizer
    };
  }

  ensureDirectories() {
    const dirs = [
      this.orchestratorDir,
      path.join(this.orchestratorDir, 'configs'),
      path.join(this.orchestratorDir, 'status'),
      path.join(this.orchestratorDir, 'logs'),
      path.join(this.orchestratorDir, 'reports'),
      path.join(this.orchestratorDir, 'analytics')
    ];
    
    dirs.forEach(dir => {
      fs.mkdirSync(dir, { recursive: true });
    });
  }

  loadOrchestratorState() {
    this.config = this.loadJSON(this.configPath, this.getDefaultConfig());
    this.status = this.loadJSON(this.statusPath, this.getDefaultStatus());
    this.logs = this.loadJSON(this.logsPath, { logs: [], metrics: {} });
  }

  loadJSON(filePath, defaultValue = {}) {
    try {
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
    } catch (error) {
      console.warn(`Warning: Could not load ${filePath}:`, error.message);
    }
    return defaultValue;
  }

  saveOrchestratorState() {
    this.saveJSON(this.configPath, this.config);
    this.saveJSON(this.statusPath, this.status);
    this.saveJSON(this.logsPath, this.logs);
  }

  saveJSON(filePath, data) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(`Error saving ${filePath}:`, error.message);
    }
  }

  getDefaultConfig() {
    return {
      orchestrator: {
        name: 'Cursor Intelligence Orchestrator',
        version: '1.0.0',
        enabled: true,
        autoStart: true,
        maxConcurrentSessions: 10,
        sessionTimeout: 3600, // seconds
        intelligenceLevel: 7,
        collaborationMode: 'hybrid',
        knowledgeRetentionDays: 30
      },
      systems: {
        intelligenceAmplifier: {
          enabled: true,
          autoRun: true,
          runInterval: 300, // seconds
          maxAgents: 5
        },
        multiAgentCollaborator: {
          enabled: true,
          autoRun: true,
          runInterval: 600, // seconds
          maxCollaborativeAgents: 5
        },
        knowledgeSynthesizer: {
          enabled: true,
          autoRun: true,
          runInterval: 900, // seconds
          synthesisThreshold: 0.8
        }
      },
      monitoring: {
        enabled: true,
        metricsCollection: true,
        alerting: true,
        performanceTracking: true
      }
    };
  }

  getDefaultStatus() {
    return {
      orchestrator: {
        status: 'initializing',
        startTime: null,
        lastRun: null,
        totalRuns: 0,
        successfulRuns: 0,
        failedRuns: 0
      },
      systems: {
        intelligenceAmplifier: { status: 'stopped', lastRun: null, successRate: 0 },
        multiAgentCollaborator: { status: 'stopped', lastRun: null, successRate: 0 },
        knowledgeSynthesizer: { status: 'stopped', lastRun: null, successRate: 0 }
      },
      sessions: {
        active: 0,
        completed: 0,
        failed: 0,
        total: 0
      },
      intelligence: {
        currentLevel: 7,
        growthRate: 1.5,
        knowledgeNodes: 0,
        collaborationSessions: 0,
        learningPatterns: 0
      }
    };
  }

  // Core Orchestration Methods
  
  async startOrchestrator() {
    console.log('🚀 Starting Cursor Intelligence Orchestrator...');
    
    try {
      this.status.orchestrator.status = 'starting';
      this.status.orchestrator.startTime = new Date().toISOString();
      
      // Initialize all systems
      await this.initializeAllSystems();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start auto-run cycles
      this.startAutoRunCycles();
      
      this.status.orchestrator.status = 'running';
      this.logOrchestratorEvent('orchestrator_started', 'Orchestrator started successfully');
      
      console.log('✅ Cursor Intelligence Orchestrator started successfully');
      
    } catch (error) {
      this.status.orchestrator.status = 'failed';
      this.logOrchestratorEvent('orchestrator_started_failed', `Failed to start orchestrator: ${error.message}`);
      console.error('❌ Failed to start orchestrator:', error);
      throw error;
    }
  }

  async initializeAllSystems() {
    console.log('🔧 Initializing all intelligent systems...');
    
    // Initialize each system
    for (const [systemName, system] of Object.entries(this.systems)) {
      if (this.config.systems[systemName].enabled) {
        try {
          await this.initializeSystem(systemName, system);
          this.status.systems[systemName].status = 'ready';
        } catch (error) {
          console.error(`Failed to initialize ${systemName}:`, error.message);
          this.status.systems[systemName].status = 'failed';
        }
      }
    }
  }

  async initializeSystem(systemName, system) {
    console.log(`🔧 Initializing ${systemName}...`);
    
    switch (systemName) {
      case 'intelligenceAmplifier':
        await system.initializeIntelligenceSystems();
        break;
      case 'multiAgentCollaborator':
        await system.initializeCollaborationSystems();
        break;
      case 'knowledgeSynthesizer':
        await system.initializeKnowledgeSystems();
        break;
      default:
        console.warn(`Unknown system: ${systemName}`);
    }
  }

  startMonitoring() {
    if (!this.config.monitoring.enabled) return;
    
    // Set up periodic monitoring
    this.monitoringInterval = setInterval(() => {
      this.monitorOrchestratorHealth();
    }, 30000); // Every 30 seconds
    
    console.log('📊 Monitoring started');
  }

  startAutoRunCycles() {
    // Start auto-run for each system
    Object.entries(this.config.systems).forEach(([systemName, config]) => {
      if (config.enabled && config.autoRun) {
        this.startSystemAutoRun(systemName, config.runInterval);
      }
    });
    
    console.log('🔄 Auto-run cycles started');
  }

  startSystemAutoRun(systemName, interval) {
    const autoRunInterval = setInterval(async () => {
      try {
        await this.runSystem(systemName);
      } catch (error) {
        console.error(`Auto-run failed for ${systemName}:`, error.message);
        this.logOrchestratorEvent('auto_run_failed', `${systemName} auto-run failed: ${error.message}`);
      }
    }, interval * 1000);
    
    // Store interval reference for cleanup
    if (!this.autoRunIntervals) this.autoRunIntervals = {};
    this.autoRunIntervals[systemName] = autoRunInterval;
  }

  async runSystem(systemName) {
    if (!this.config.systems[systemName].enabled) {
      console.log(`System ${systemName} is disabled, skipping...`);
      return;
    }
    
    console.log(`🔄 Running ${systemName}...`);
    
    try {
      let result;
      
      switch (systemName) {
        case 'intelligenceAmplifier':
          result = await this.systems.intelligenceAmplifier.runIntelligenceAmplification();
          break;
        case 'multiAgentCollaborator':
          result = await this.systems.multiAgentCollaborator.runCollaborationSystem();
          break;
        case 'knowledgeSynthesizer':
          result = await this.systems.knowledgeSynthesizer.runKnowledgeSynthesis();
          break;
        default:
          throw new Error(`Unknown system: ${systemName}`);
      }
      
      // Update system status
      this.status.systems[systemName].status = 'completed';
      this.status.systems[systemName].lastRun = new Date().toISOString();
      
      // Update success rate
      const currentRate = this.status.systems[systemName].successRate;
      this.status.systems[systemName].successRate = (currentRate * 0.9) + 0.1; // Moving average
      
      this.logOrchestratorEvent('system_run_success', `${systemName} completed successfully`);
      console.log(`✅ ${systemName} completed successfully`);
      
      return result;
      
    } catch (error) {
      // Update system status
      this.status.systems[systemName].status = 'failed';
      this.status.systems[systemName].lastRun = new Date().toISOString();
      
      // Update success rate
      const currentRate = this.status.systems[systemName].successRate;
      this.status.systems[systemName].successRate = currentRate * 0.9; // Decrease on failure
      
      this.logOrchestratorEvent('system_run_failed', `${systemName} failed: ${error.message}`);
      console.error(`❌ ${systemName} failed:`, error.message);
      
      throw error;
    }
  }

  // Intelligence Enhancement Methods
  
  async enhanceAgentIntelligence(agentId, context, task) {
    console.log(`🧠 Enhancing intelligence for agent: ${agentId}`);
    
    try {
      // Use intelligence amplifier
      const amplification = await this.intelligenceAmplifier.amplifyAgentIntelligence(agentId, context, task);
      
      // Check if collaboration would be beneficial
      const collaborationAnalysis = await this.multiAgentCollaborator.analyzeTaskForCollaboration(task);
      
      if (collaborationAnalysis.shouldCollaborate) {
        // Initiate collaboration
        const collaboration = await this.multiAgentCollaborator.initiateCollaboration(task, [agentId]);
        
        // Synthesize knowledge from collaboration
        if (collaboration) {
          await this.knowledgeSynthesizer.synthesizeKnowledgeFromSession(collaboration);
        }
      }
      
      // Update orchestrator status
      this.updateIntelligenceMetrics(amplification);
      
      this.logOrchestratorEvent('agent_intelligence_enhanced', `Enhanced intelligence for agent ${agentId}`);
      
      return {
        amplification,
        collaborationRecommended: collaborationAnalysis.shouldCollaborate,
        knowledgeSynthesized: collaborationAnalysis.shouldCollaborate
      };
      
    } catch (error) {
      this.logOrchestratorEvent('agent_intelligence_enhancement_failed', `Failed to enhance agent ${agentId}: ${error.message}`);
      console.error(`Failed to enhance agent intelligence:`, error);
      throw error;
    }
  }

  async createCollaborativeTask(task, agentIds) {
    console.log(`🤝 Creating collaborative task with ${agentIds.length} agents`);
    
    try {
      // Initiate collaboration
      const collaboration = await this.multiAgentCollaborator.initiateCollaboration(task, agentIds);
      
      // Monitor collaboration progress
      this.monitorCollaboration(collaboration);
      
      this.logOrchestratorEvent('collaborative_task_created', `Created collaborative task ${collaboration.id}`);
      
      return collaboration;
      
    } catch (error) {
      this.logOrchestratorEvent('collaborative_task_creation_failed', `Failed to create collaborative task: ${error.message}`);
      console.error(`Failed to create collaborative task:`, error);
      throw error;
    }
  }

  async synthesizeKnowledgeFromCollaboration(sessionId) {
    console.log(`🧠 Synthesizing knowledge from collaboration: ${sessionId}`);
    
    try {
      // Get collaboration session data
      const sessionData = await this.getCollaborationSessionData(sessionId);
      
      if (!sessionData) {
        throw new Error(`Collaboration session ${sessionId} not found`);
      }
      
      // Synthesize knowledge
      const synthesizedKnowledge = await this.knowledgeSynthesizer.synthesizeKnowledgeFromSession(sessionData);
      
      // Update orchestrator status
      this.updateKnowledgeMetrics(synthesizedKnowledge);
      
      this.logOrchestratorEvent('knowledge_synthesized', `Synthesized knowledge from collaboration ${sessionId}`);
      
      return synthesizedKnowledge;
      
    } catch (error) {
      this.logOrchestratorEvent('knowledge_synthesis_failed', `Failed to synthesize knowledge: ${error.message}`);
      console.error(`Failed to synthesize knowledge:`, error);
      throw error;
    }
  }

  // Monitoring and Health Methods
  
  async monitorOrchestratorHealth() {
    try {
      // Check system health
      const healthStatus = await this.checkSystemHealth();
      
      // Update orchestrator status
      this.status.orchestrator.lastRun = new Date().toISOString();
      this.status.orchestrator.totalRuns++;
      
      if (healthStatus.overall === 'healthy') {
        this.status.orchestrator.successfulRuns++;
      } else {
        this.status.orchestrator.failedRuns++;
      }
      
      // Log health status
      this.logOrchestratorEvent('health_check', `Health check: ${healthStatus.overall}`);
      
      // Take action if unhealthy
      if (healthStatus.overall === 'unhealthy') {
        await this.handleUnhealthyState(healthStatus);
      }
      
    } catch (error) {
      console.error('Health monitoring failed:', error.message);
      this.logOrchestratorEvent('health_monitoring_failed', `Health monitoring failed: ${error.message}`);
    }
  }

  async checkSystemHealth() {
    const healthChecks = {};
    
    // Check each system
    for (const [systemName, system] of Object.entries(this.systems)) {
      try {
        const health = await this.checkSystemHealth(systemName, system);
        healthChecks[systemName] = health;
      } catch (error) {
        healthChecks[systemName] = { status: 'error', error: error.message };
      }
    }
    
    // Determine overall health
    const overallHealth = this.determineOverallHealth(healthChecks);
    
    return {
      overall: overallHealth,
      systems: healthChecks,
      timestamp: new Date().toISOString()
    };
  }

  async checkSystemHealth(systemName, system) {
    // Basic health check - in practice, implement more sophisticated checks
    const status = this.status.systems[systemName];
    
    if (status.status === 'ready' || status.status === 'completed') {
      return { status: 'healthy', lastRun: status.lastRun, successRate: status.successRate };
    } else if (status.status === 'failed') {
      return { status: 'unhealthy', lastRun: status.lastRun, successRate: status.successRate };
    } else {
      return { status: 'unknown', lastRun: status.lastRun, successRate: status.successRate };
    }
  }

  determineOverallHealth(healthChecks) {
    const healthySystems = Object.values(healthChecks).filter(check => check.status === 'healthy').length;
    const totalSystems = Object.keys(healthChecks).length;
    
    if (healthySystems === totalSystems) return 'healthy';
    if (healthySystems >= totalSystems * 0.7) return 'degraded';
    return 'unhealthy';
  }

  async handleUnhealthyState(healthStatus) {
    console.log('⚠️ Handling unhealthy orchestrator state...');
    
    // Log unhealthy state
    this.logOrchestratorEvent('unhealthy_state_detected', `Orchestrator is unhealthy: ${JSON.stringify(healthStatus)}`);
    
    // Attempt recovery for failed systems
    for (const [systemName, health] of Object.entries(healthStatus.systems)) {
      if (health.status === 'unhealthy') {
        try {
          await this.recoverSystem(systemName);
        } catch (error) {
          console.error(`Failed to recover system ${systemName}:`, error.message);
        }
      }
    }
  }

  async recoverSystem(systemName) {
    console.log(`🔧 Attempting to recover system: ${systemName}`);
    
    try {
      // Reinitialize system
      await this.initializeSystem(systemName, this.systems[systemName]);
      
      // Update status
      this.status.systems[systemName].status = 'ready';
      
      this.logOrchestratorEvent('system_recovered', `System ${systemName} recovered successfully`);
      console.log(`✅ System ${systemName} recovered successfully`);
      
    } catch (error) {
      this.logOrchestratorEvent('system_recovery_failed', `Failed to recover system ${systemName}: ${error.message}`);
      console.error(`Failed to recover system ${systemName}:`, error.message);
      throw error;
    }
  }

  // Utility Methods
  
  logOrchestratorEvent(eventType, message) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      eventType,
      message,
      orchestratorStatus: this.status.orchestrator.status
    };
    
    this.logs.logs.push(logEntry);
    
    // Keep only last 1000 logs
    if (this.logs.logs.length > 1000) {
      this.logs.logs = this.logs.logs.slice(-1000);
    }
    
    // Update metrics
    this.updateLogMetrics(eventType);
  }

  updateLogMetrics(eventType) {
    if (!this.logs.metrics[eventType]) {
      this.logs.metrics[eventType] = 0;
    }
    
    this.logs.metrics[eventType]++;
  }

  updateIntelligenceMetrics(amplification) {
    // Update intelligence level based on amplification success
    if (amplification && amplification.enhancedContext) {
      this.status.intelligence.currentLevel = Math.min(
        this.status.intelligence.currentLevel + 0.1,
        10
      );
    }
    
    // Update knowledge nodes count
    if (this.intelligenceAmplifier.knowledgeGraph) {
      this.status.intelligence.knowledgeNodes = this.intelligenceAmplifier.knowledgeGraph.nodes.length;
    }
  }

  updateKnowledgeMetrics(synthesizedKnowledge) {
    // Update learning patterns count
    if (this.knowledgeSynthesizer.learningPatterns) {
      this.status.intelligence.learningPatterns = this.knowledgeSynthesizer.learningPatterns.patterns.length;
    }
  }

  async getCollaborationSessionData(sessionId) {
    // Get collaboration session data from the collaborator
    if (this.multiAgentCollaborator.activeSessions[sessionId]) {
      return this.multiAgentCollaborator.activeSessions[sessionId];
    }
    
    // Check completed sessions
    const completedSession = this.multiAgentCollaborator.collaborationHistory.sessions.find(
      session => session.id === sessionId
    );
    
    return completedSession || null;
  }

  monitorCollaboration(collaboration) {
    // Set up monitoring for the collaboration session
    const monitorInterval = setInterval(() => {
      if (collaboration.status === 'completed' || collaboration.status === 'timeout') {
        clearInterval(monitorInterval);
        
        // Update session counts
        if (collaboration.status === 'completed') {
          this.status.sessions.completed++;
        } else {
          this.status.sessions.failed++;
        }
        
        this.status.sessions.total++;
        this.status.sessions.active = Math.max(0, this.status.sessions.active - 1);
      }
    }, 10000); // Check every 10 seconds
  }

  // Reporting Methods
  
  async generateOrchestratorReport() {
    console.log('📊 Generating orchestrator report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      orchestrator: this.status.orchestrator,
      systems: this.status.systems,
      sessions: this.status.sessions,
      intelligence: this.status.intelligence,
      logs: {
        totalLogs: this.logs.logs.length,
        recentEvents: this.logs.logs.slice(-10),
        eventMetrics: this.logs.metrics
      },
      recommendations: await this.generateOrchestratorRecommendations()
    };
    
    const reportPath = path.join(this.orchestratorDir, 'reports', `orchestrator-report-${Date.now()}.json`);
    this.saveJSON(reportPath, report);
    
    console.log(`📄 Orchestrator report saved to: ${reportPath}`);
    return report;
  }

  async generateOrchestratorRecommendations() {
    const recommendations = [];
    
    // System health recommendations
    Object.entries(this.status.systems).forEach(([systemName, status]) => {
      if (status.successRate < 0.8) {
        recommendations.push({
          type: 'system_health',
          system: systemName,
          priority: 'high',
          description: `${systemName} has low success rate (${status.successRate.toFixed(2)})`,
          action: `Investigate and improve ${systemName} performance`
        });
      }
    });
    
    // Intelligence growth recommendations
    if (this.status.intelligence.currentLevel < 8) {
      recommendations.push({
        type: 'intelligence_growth',
        priority: 'medium',
        description: 'Intelligence level is below optimal (current: 7, target: 8+)',
        action: 'Focus on high-quality agent interactions and knowledge synthesis'
      });
    }
    
    // Collaboration recommendations
    if (this.status.sessions.active < 2) {
      recommendations.push({
        type: 'collaboration_encouragement',
        priority: 'low',
        description: 'Low active collaboration sessions',
        action: 'Encourage more collaborative tasks and agent interactions'
      });
    }
    
    return recommendations;
  }

  // Cleanup Methods
  
  async stopOrchestrator() {
    console.log('🛑 Stopping Cursor Intelligence Orchestrator...');
    
    try {
      // Stop monitoring
      if (this.monitoringInterval) {
        clearInterval(this.monitoringInterval);
      }
      
      // Stop auto-run cycles
      if (this.autoRunIntervals) {
        Object.values(this.autoRunIntervals).forEach(interval => {
          clearInterval(interval);
        });
      }
      
      // Update status
      this.status.orchestrator.status = 'stopped';
      
      // Save state
      this.saveOrchestratorState();
      
      this.logOrchestratorEvent('orchestrator_stopped', 'Orchestrator stopped successfully');
      
      console.log('✅ Cursor Intelligence Orchestrator stopped successfully');
      
    } catch (error) {
      console.error('❌ Failed to stop orchestrator:', error);
      throw error;
    }
  }

  // Main execution method
  
  async runOrchestrator() {
    try {
      // Start orchestrator
      await this.startOrchestrator();
      
      // Generate initial report
      await this.generateOrchestratorReport();
      
      // Keep orchestrator running
      console.log('🔄 Orchestrator is running. Press Ctrl+C to stop.');
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        await this.stopOrchestrator();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        await this.stopOrchestrator();
        process.exit(0);
      });
      
    } catch (error) {
      console.error('❌ Orchestrator failed:', error);
      await this.stopOrchestrator();
      process.exit(1);
    }
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new CursorIntelligenceOrchestrator();
  
  orchestrator.runOrchestrator()
    .then(() => {
      console.log('🎉 Cursor Intelligence Orchestrator completed successfully!');
    })
    .catch((error) => {
      console.error('💥 Cursor Intelligence Orchestrator failed:', error);
      process.exit(1);
    });
}

module.exports = CursorIntelligenceOrchestrator;
