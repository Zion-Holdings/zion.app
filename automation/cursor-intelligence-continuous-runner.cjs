#!/usr/bin/env node

'use strict';

/*
  Cursor Intelligence Continuous Runner
  - Runs the intelligence system autonomously in the background
  - Continuously generates conversations and tasks
  - Monitors system health and performance
  - Automatically recovers from failures
  - Creates continuous improvement cycles
*/

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class CursorIntelligenceContinuousRunner {
  constructor() {
    this.baseDir = process.cwd();
    this.isRunning = false;
    this.cycleCount = 0;
    this.lastCycleTime = null;
    this.errorCount = 0;
    this.successCount = 0;
    this.startTime = new Date();
    
    // Configuration
    this.config = {
      cycleInterval: 5 * 60 * 1000, // 5 minutes
      maxErrors: 5,
      conversationTypes: [
        'code-review',
        'feature-planning', 
        'bug-investigation',
        'performance-optimization',
        'security-audit',
        'architecture-discussion',
        'testing-strategy',
        'deployment-planning'
      ],
      maxConversationsPerCycle: 2,
      healthCheckInterval: 60 * 1000, // 1 minute
      logRetentionDays: 7
    };
    
    this.setupLogging();
    this.loadState();
  }

  setupLogging() {
    this.logDir = path.join(this.baseDir, 'automation', 'logs');
    fs.mkdirSync(this.logDir, { recursive: true });
    
    this.logFile = path.join(this.logDir, 'continuous-runner.log');
    this.stateFile = path.join(this.logDir, 'runner-state.json');
  }

  loadState() {
    try {
      if (fs.existsSync(this.stateFile)) {
        const state = JSON.parse(fs.readFileSync(this.stateFile, 'utf8'));
        this.cycleCount = state.cycleCount || 0;
        this.errorCount = state.errorCount || 0;
        this.successCount = state.successCount || 0;
        this.startTime = new Date(state.startTime || Date.now());
      }
    } catch (error) {
      this.log('Could not load state, starting fresh');
    }
  }

  saveState() {
    try {
      const state = {
        cycleCount: this.cycleCount,
        errorCount: this.errorCount,
        successCount: this.successCount,
        startTime: this.startTime.toISOString(),
        lastUpdate: new Date().toISOString()
      };
      fs.writeFileSync(this.stateFile, JSON.stringify(state, null, 2));
    } catch (error) {
      this.log('Could not save state');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + '\n');
    } catch (error) {
      console.error('Could not write to log file:', error.message);
    }
  }

  async start() {
    this.log('🚀 Starting Cursor Intelligence Continuous Runner...');
    this.log(`Configuration: ${this.config.cycleInterval / 1000}s cycles, max ${this.config.maxConversationsPerCycle} conversations per cycle`);
    
    this.isRunning = true;
    this.startTime = new Date();
    
    // Start health monitoring
    this.startHealthMonitoring();
    
    // Start main cycle
    this.startMainCycle();
    
    // Handle graceful shutdown
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
    
    this.log('✅ Continuous runner started successfully');
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  performHealthCheck() {
    const uptime = Date.now() - this.startTime.getTime();
    const uptimeHours = Math.floor(uptime / (1000 * 60 * 60));
    const uptimeMinutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    
    this.log(`🏥 Health Check - Uptime: ${uptimeHours}h ${uptimeMinutes}m, Cycles: ${this.cycleCount}, Success: ${this.successCount}, Errors: ${this.errorCount}`);
    
    // Check system resources
    this.checkSystemResources();
    
    // Clean up old logs
    this.cleanupOldLogs();
  }

  checkSystemResources() {
    try {
      // Check disk space
      const conversationsDir = path.join(this.baseDir, 'automation', 'cursor-conversations');
      if (fs.existsSync(conversationsDir)) {
        const files = fs.readdirSync(conversationsDir);
        this.log(`📁 Conversations directory: ${files.length} files`);
      }
      
      // Check task directory
      const tasksDir = path.join(this.baseDir, 'automation', 'cursor-tasks');
      if (fs.existsSync(tasksDir)) {
        const files = fs.readdirSync(tasksDir);
        this.log(`📋 Tasks directory: ${files.length} files`);
      }
      
      // Check agent prompts
      const agentsDir = path.join(this.baseDir, 'automation', 'cursor-agents');
      if (fs.existsSync(agentsDir)) {
        const files = fs.readdirSync(agentsDir);
        this.log(`🤖 Agents directory: ${files.length} files`);
      }
    } catch (error) {
      this.log(`Error checking system resources: ${error.message}`, 'ERROR');
    }
  }

  cleanupOldLogs() {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - this.config.logRetentionDays);
      
      if (fs.existsSync(this.logDir)) {
        const files = fs.readdirSync(this.logDir);
        files.forEach(file => {
          if (file.endsWith('.log') && file !== 'continuous-runner.log') {
            const filePath = path.join(this.logDir, file);
            const stats = fs.statSync(filePath);
            if (stats.mtime < cutoffDate) {
              fs.unlinkSync(filePath);
              this.log(`🗑️ Cleaned up old log file: ${file}`);
            }
          }
        });
      }
    } catch (error) {
      this.log(`Error cleaning up logs: ${error.message}`, 'ERROR');
    }
  }

  startMainCycle() {
    const runCycle = async () => {
      if (!this.isRunning) return;
      
      try {
        this.log(`🔄 Starting cycle ${this.cycleCount + 1}...`);
        this.lastCycleTime = new Date();
        
        await this.runIntelligenceCycle();
        
        this.cycleCount++;
        this.successCount++;
        this.errorCount = 0; // Reset error count on success
        
        this.log(`✅ Cycle ${this.cycleCount} completed successfully`);
        
      } catch (error) {
        this.errorCount++;
        this.log(`❌ Cycle ${this.cycleCount + 1} failed: ${error.message}`, 'ERROR');
        
        if (this.errorCount >= this.config.maxErrors) {
          this.log(`🚨 Too many errors (${this.errorCount}), attempting recovery...`, 'ERROR');
          await this.attemptRecovery();
        }
      }
      
      // Schedule next cycle
      if (this.isRunning) {
        setTimeout(runCycle, this.config.cycleInterval);
      }
    };
    
    // Start first cycle immediately
    runCycle();
  }

  async runIntelligenceCycle() {
    this.log('🧠 Running intelligence cycle...');
    
    // Step 1: Generate new conversations
    await this.generateConversations();
    
    // Step 2: Run intelligence amplification
    await this.runIntelligenceAmplification();
    
    // Step 3: Synthesize knowledge
    await this.runKnowledgeSynthesis();
    
    // Step 4: Update system state
    this.updateSystemState();
    
    this.log('🧠 Intelligence cycle completed');
  }

  async generateConversations() {
    this.log('💬 Generating new conversations...');
    
    const conversationGenerator = require('./cursor-agent-conversation-generator.cjs');
    const generator = new conversationGenerator();
    
    // Generate random conversations
    const conversationsToGenerate = Math.min(
      this.config.maxConversationsPerCycle,
      this.config.conversationTypes.length
    );
    
    const selectedTypes = this.getRandomConversationTypes(conversationsToGenerate);
    
    for (const conversationType of selectedTypes) {
      try {
        this.log(`  📝 Generating ${conversationType} conversation...`);
        await generator.generateNewConversation(conversationType);
        this.log(`  ✅ ${conversationType} conversation generated`);
        
        // Small delay between generations
        await this.sleep(2000);
        
      } catch (error) {
        this.log(`  ❌ Failed to generate ${conversationType} conversation: ${error.message}`, 'ERROR');
      }
    }
  }

  getRandomConversationTypes(count) {
    const shuffled = [...this.config.conversationTypes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  async runIntelligenceAmplification() {
    this.log('🧠 Running intelligence amplification...');
    
    try {
      // Load and analyze existing conversations
      const conversations = this.loadActiveConversations();
      
      if (conversations.length > 0) {
        this.log(`  📊 Analyzing ${conversations.length} active conversations...`);
        
        // Analyze conversation patterns
        const patterns = this.analyzeConversationPatterns(conversations);
        
        // Generate enhanced prompts based on patterns
        await this.generateEnhancedPrompts(patterns);
        
        this.log('  ✅ Intelligence amplification completed');
      } else {
        this.log('  ℹ️ No conversations to amplify');
      }
      
    } catch (error) {
      this.log(`  ❌ Intelligence amplification failed: ${error.message}`, 'ERROR');
    }
  }

  async runKnowledgeSynthesis() {
    this.log('📚 Running knowledge synthesis...');
    
    try {
      // Load tasks and analyze patterns
      const tasks = this.loadTasks();
      
      if (tasks.length > 0) {
        this.log(`  📋 Analyzing ${tasks.length} tasks for knowledge patterns...`);
        
        // Identify common patterns and solutions
        const knowledgePatterns = this.identifyKnowledgePatterns(tasks);
        
        // Generate knowledge base updates
        await this.updateKnowledgeBase(knowledgePatterns);
        
        this.log('  ✅ Knowledge synthesis completed');
      } else {
        this.log('  ℹ️ No tasks to synthesize');
      }
      
    } catch (error) {
      this.log(`  ❌ Knowledge synthesis failed: ${error.message}`, 'ERROR');
    }
  }

  loadActiveConversations() {
    try {
      const indexPath = path.join(this.baseDir, 'automation', 'cursor-conversations', 'conversations-index.json');
      if (fs.existsSync(indexPath)) {
        return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading conversations: ${error.message}`, 'ERROR');
    }
    return [];
  }

  loadTasks() {
    try {
      const indexPath = path.join(this.baseDir, 'automation', 'cursor-tasks', 'tasks-index.json');
      if (fs.existsSync(indexPath)) {
        return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading tasks: ${error.message}`, 'ERROR');
    }
    return [];
  }

  analyzeConversationPatterns(conversations) {
    const patterns = {
      types: {},
      participants: {},
      topics: {},
      duration: []
    };
    
    conversations.forEach(conv => {
      // Count conversation types
      patterns.types[conv.type] = (patterns.types[conv.type] || 0) + 1;
      
      // Count participants
      conv.participants.forEach(participant => {
        patterns.participants[participant] = (patterns.participants[participant] || 0) + 1;
      });
      
      // Calculate duration
      const startTime = new Date(conv.startTime);
      const now = new Date();
      const duration = now - startTime;
      patterns.duration.push(duration);
    });
    
    return patterns;
  }

  identifyKnowledgePatterns(tasks) {
    const patterns = {
      priorities: {},
      types: {},
      estimatedEffort: {},
      commonThemes: []
    };
    
    tasks.forEach(task => {
      // Count priorities
      patterns.priorities[task.priority] = (patterns.priorities[task.priority] || 0) + 1;
      
      // Count types
      patterns.types[task.type] = (patterns.types[task.type] || 0) + 1;
      
      // Count effort estimates
      patterns.estimatedEffort[task.estimatedEffort] = (patterns.estimatedEffort[task.estimatedEffort] || 0) + 1;
    });
    
    return patterns;
  }

  async generateEnhancedPrompts(patterns) {
    try {
      const enhancedPromptsDir = path.join(this.baseDir, 'automation', 'cursor-agents', 'enhanced');
      fs.mkdirSync(enhancedPromptsDir, { recursive: true });
      
      const enhancedPrompt = {
        id: `enhanced-${Date.now()}`,
        timestamp: new Date().toISOString(),
        patterns: patterns,
        prompt: this.generatePatternBasedPrompt(patterns),
        usage: 'Use this enhanced prompt for agents based on conversation patterns'
      };
      
      const fileName = `enhanced-prompt-${Date.now()}.json`;
      const filePath = path.join(enhancedPromptsDir, fileName);
      fs.writeFileSync(filePath, JSON.stringify(enhancedPrompt, null, 2));
      
      this.log(`  📝 Generated enhanced prompt: ${fileName}`);
      
    } catch (error) {
      this.log(`  ❌ Failed to generate enhanced prompt: ${error.message}`, 'ERROR');
    }
  }

  generatePatternBasedPrompt(patterns) {
    const mostCommonType = Object.entries(patterns.types)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'general';
    
    const mostCommonParticipants = Object.entries(patterns.participants)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([participant]) => participant);
    
    return `Based on the analysis of ${Object.values(patterns.types).reduce((a, b) => a + b, 0)} conversations:

Most common conversation type: ${mostCommonType}
Most active participants: ${mostCommonParticipants.join(', ')}

Use this context to provide more relevant and targeted assistance. Focus on patterns that have emerged from successful conversations and apply similar approaches to new situations.`;
  }

  async updateKnowledgeBase(patterns) {
    try {
      const knowledgeDir = path.join(this.baseDir, 'automation', 'cursor-knowledge');
      fs.mkdirSync(knowledgeDir, { recursive: true });
      
      const knowledgeUpdate = {
        id: `knowledge-${Date.now()}`,
        timestamp: new Date().toISOString(),
        patterns: patterns,
        insights: this.generateInsightsFromPatterns(patterns),
        recommendations: this.generateRecommendationsFromPatterns(patterns)
      };
      
      const fileName = `knowledge-update-${Date.now()}.json`;
      const filePath = path.join(knowledgeDir, fileName);
      fs.writeFileSync(filePath, JSON.stringify(knowledgeUpdate, null, 2));
      
      this.log(`  📚 Updated knowledge base: ${fileName}`);
      
    } catch (error) {
      this.log(`  ❌ Failed to update knowledge base: ${error.message}`, 'ERROR');
    }
  }

  generateInsightsFromPatterns(patterns) {
    const insights = [];
    
    // Priority insights
    const highPriorityCount = patterns.priorities.high || 0;
    const totalTasks = Object.values(patterns.priorities).reduce((a, b) => a + b, 0);
    if (highPriorityCount > totalTasks * 0.3) {
      insights.push('High priority tasks are over-represented, consider task prioritization strategy');
    }
    
    // Type insights
    const mostCommonType = Object.entries(patterns.types)
      .sort(([,a], [,b]) => b - a)[0];
    if (mostCommonType) {
      insights.push(`Most common task type is ${mostCommonType[0]} (${mostCommonType[1]} tasks)`);
    }
    
    return insights;
  }

  generateRecommendationsFromPatterns(patterns) {
    const recommendations = [];
    
    // Effort recommendations
    const effortPatterns = Object.entries(patterns.estimatedEffort);
    if (effortPatterns.length > 0) {
      const avgEffort = effortPatterns.reduce((sum, [, count]) => sum + count, 0) / effortPatterns.length;
      recommendations.push(`Average task effort: ${avgEffort.toFixed(1)} units`);
    }
    
    // Priority recommendations
    if (patterns.priorities.high > patterns.priorities.medium) {
      recommendations.push('Consider reducing high priority tasks to improve focus');
    }
    
    return recommendations;
  }

  updateSystemState() {
    this.saveState();
    
    // Generate status report
    const statusReport = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime.getTime(),
      cycles: this.cycleCount,
      success: this.successCount,
      errors: this.errorCount,
      lastCycle: this.lastCycleTime?.toISOString(),
      nextCycle: new Date(Date.now() + this.config.cycleInterval).toISOString()
    };
    
    const statusFile = path.join(this.logDir, 'status-report.json');
    fs.writeFileSync(statusFile, JSON.stringify(statusReport, null, 2));
  }

  async attemptRecovery() {
    this.log('🔄 Attempting system recovery...');
    
    try {
      // Reset error count
      this.errorCount = 0;
      
      // Wait a bit before restarting
      await this.sleep(10000);
      
      // Restart main cycle
      this.startMainCycle();
      
      this.log('✅ Recovery completed, system restarted');
      
    } catch (error) {
      this.log(`❌ Recovery failed: ${error.message}`, 'ERROR');
      this.shutdown();
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  shutdown() {
    this.log('🛑 Shutting down continuous runner...');
    this.isRunning = false;
    
    // Save final state
    this.saveState();
    
    this.log('✅ Shutdown completed');
    process.exit(0);
  }

  // Main execution method
  async run() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      console.log(`
🎯 Cursor Intelligence Continuous Runner
========================================

Usage: node automation/cursor-intelligence-continuous-runner.cjs [command]

Commands:
  start           - Start the continuous runner (default)
  status          - Show current status
  stop            - Stop the runner (if running as service)
  config          - Show current configuration

Examples:
  node automation/cursor-intelligence-continuous-runner.cjs start
  node automation/cursor-intelligence-continuous-runner.cjs status

The runner will:
• Generate conversations every 5 minutes
• Run intelligence amplification cycles
• Synthesize knowledge from patterns
• Monitor system health continuously
• Automatically recover from failures
      `);
      return;
    }
    
    const command = args[0].toLowerCase();
    
    try {
      switch (command) {
        case 'start':
          await this.start();
          break;
        case 'status':
          this.showStatus();
          break;
        case 'stop':
          this.shutdown();
          break;
        case 'config':
          this.showConfig();
          break;
        default:
          console.error(`❌ Unknown command: ${command}`);
          console.log('Use "start", "status", "stop", or "config"');
      }
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }

  showStatus() {
    const uptime = Date.now() - this.startTime.getTime();
    const uptimeHours = Math.floor(uptime / (1000 * 60 * 60));
    const uptimeMinutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    
    console.log('\n📊 Cursor Intelligence Continuous Runner Status');
    console.log('================================================');
    console.log(`Status: ${this.isRunning ? '🟢 Running' : '🔴 Stopped'}`);
    console.log(`Uptime: ${uptimeHours}h ${uptimeMinutes}m`);
    console.log(`Cycles Completed: ${this.cycleCount}`);
    console.log(`Successful Cycles: ${this.successCount}`);
    console.log(`Failed Cycles: ${this.errorCount}`);
    console.log(`Last Cycle: ${this.lastCycleTime ? this.lastCycleTime.toLocaleString() : 'None'}`);
    console.log(`Next Cycle: ${this.isRunning ? new Date(Date.now() + this.config.cycleInterval).toLocaleString() : 'N/A'}`);
  }

  showConfig() {
    console.log('\n⚙️ Cursor Intelligence Continuous Runner Configuration');
    console.log('========================================================');
    console.log(`Cycle Interval: ${this.config.cycleInterval / 1000} seconds`);
    console.log(`Max Errors: ${this.config.maxErrors}`);
    console.log(`Max Conversations Per Cycle: ${this.config.maxConversationsPerCycle}`);
    console.log(`Health Check Interval: ${this.config.healthCheckInterval / 1000} seconds`);
    console.log(`Log Retention: ${this.config.logRetentionDays} days`);
    console.log(`Conversation Types: ${this.config.conversationTypes.join(', ')}`);
  }
}

// Main execution
if (require.main === module) {
  const runner = new CursorIntelligenceContinuousRunner();
  
  runner.run()
    .then(() => {
      // Keep the process running for continuous operation
      if (process.argv.includes('start')) {
        console.log('🔄 Continuous runner is now running... Press Ctrl+C to stop');
      }
    })
    .catch((error) => {
      console.error('\n💥 Continuous runner failed:', error);
      process.exit(1);
    });
}

module.exports = CursorIntelligenceContinuousRunner;
