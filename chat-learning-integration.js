#!/usr/bin/env node

const ChatLearningAutomationSystem = require('./chat-learning-automation.js');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ChatLearningIntegration {
  constructor() {
    this.chatLearningSystem = new ChatLearningAutomationSystem();
    this.integrationRules = [];
    this.developmentWorkflows = [];
    this.automationTriggers = [];
  }

  async initialize() {
    try {
      console.log('🔗 Initializing Chat Learning Integration...');
      
      // Load existing integration rules
      await this.loadIntegrationRules();
      
      // Start the chat learning system
      await this.chatLearningSystem.start();
      
      // Set up integration with existing automation
      await this.setupAutomationIntegration();
      
      console.log('✅ Chat Learning Integration initialized');
    } catch (error) {
      console.error('Error initializing Chat Learning Integration:', error);
    }
  }

  async loadIntegrationRules() {
    try {
      const rulesPath = path.join(__dirname, 'data', 'integration-rules.json');
      if (await fs.access(rulesPath).then(() => true).catch(() => false)) {
        const data = await fs.readFile(rulesPath, 'utf8');
        this.integrationRules = JSON.parse(data);
      }
    } catch (error) {
      console.log('No existing integration rules found');
    }
  }

  async setupAutomationIntegration() {
    // Integration with existing automation systems
    const integrations = [
      {
        name: 'cursor-automation',
        script: 'cursor-automation-system.js',
        integration: this.integrateWithCursorAutomation.bind(this)
      },
      {
        name: 'mcp-automation',
        script: 'mcp-automation-system.js',
        integration: this.integrateWithMCPAutomation.bind(this)
      },
      {
        name: 'development-workflow',
        script: 'development-automation.js',
        integration: this.integrateWithDevelopmentWorkflow.bind(this)
      }
    ];

    for (const integration of integrations) {
      try {
        await integration.integration();
        console.log(`✅ Integrated with ${integration.name}`);
      } catch (error) {
        console.error(`❌ Failed to integrate with ${integration.name}:`, error);
      }
    }
  }

  async integrateWithCursorAutomation() {
    // Learn from Cursor automation patterns
    const cursorPatterns = await this.chatLearningSystem.analyzeChatPatterns({
      patternType: 'cursor_automation'
    });

    if (cursorPatterns.success) {
      // Generate automation rules for Cursor
      const rules = await this.chatLearningSystem.generateAutomationRules({
        patternType: 'cursor_automation',
        priority: 'high'
      });

      if (rules.success) {
        console.log(`Generated ${rules.rulesGenerated} Cursor automation rules`);
      }
    }
  }

  async integrateWithMCPAutomation() {
    // Learn from MCP automation patterns
    const mcpPatterns = await this.chatLearningSystem.analyzeChatPatterns({
      patternType: 'mcp_automation'
    });

    if (mcpPatterns.success) {
      // Generate automation rules for MCP
      const rules = await this.chatLearningSystem.generateAutomationRules({
        patternType: 'mcp_automation',
        priority: 'high'
      });

      if (rules.success) {
        console.log(`Generated ${rules.rulesGenerated} MCP automation rules`);
      }
    }
  }

  async integrateWithDevelopmentWorkflow() {
    // Learn from development workflow patterns
    const workflowPatterns = await this.chatLearningSystem.analyzeChatPatterns({
      patternType: 'development_workflow'
    });

    if (workflowPatterns.success) {
      // Generate workflow optimizations
      const optimizations = await this.chatLearningSystem.optimizeDevelopmentWorkflow({
        workflowType: 'general',
        metrics: { patterns: workflowPatterns.analysis.totalPatterns }
      });

      if (optimizations.success) {
        console.log('Generated development workflow optimizations');
      }
    }
  }

  async processChatFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      // Learn from the chat content
      const learningResult = await this.chatLearningSystem.learnFromChat({
        chatContent: content,
        context: 'cursor_chat',
        timestamp: new Date().toISOString()
      });

      if (learningResult.success) {
        // Apply learned patterns to current development
        const suggestions = await this.chatLearningSystem.applyLearnedPatterns({
          taskType: 'development',
          context: 'cursor_chat'
        });

        if (suggestions.success) {
          console.log(`Generated ${suggestions.suggestions.length} development suggestions`);
          
          // Apply the most confident suggestions
          const topSuggestions = suggestions.suggestions
            .filter(s => s.confidence > 0.7)
            .slice(0, 3);

          for (const suggestion of topSuggestions) {
            await this.applySuggestion(suggestion);
          }
        }
      }

      return learningResult;
    } catch (error) {
      console.error(`Error processing chat file ${filePath}:`, error);
      return { success: false, error: error.message };
    }
  }

  async applySuggestion(suggestion) {
    try {
      console.log(`Applying suggestion: ${suggestion.suggestion.substring(0, 100)}...`);
      
      // Parse the suggestion and apply it
      const action = await this.parseSuggestion(suggestion);
      
      if (action.type === 'code_fix') {
        await this.applyCodeFix(action);
      } else if (action.type === 'workflow_optimization') {
        await this.applyWorkflowOptimization(action);
      } else if (action.type === 'automation_rule') {
        await this.applyAutomationRule(action);
      }
      
      console.log(`✅ Applied suggestion: ${action.type}`);
    } catch (error) {
      console.error('Error applying suggestion:', error);
    }
  }

  async parseSuggestion(suggestion) {
    try {
      const response = await this.chatLearningSystem.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at parsing development suggestions into actionable items. Parse the suggestion and return a JSON object with: type (code_fix, workflow_optimization, automation_rule), description, file (if applicable), and actions (array of specific actions to take)."
          },
          {
            role: "user",
            content: `Parse this development suggestion into an actionable item:\n\n${suggestion.suggestion}`
          }
        ],
        temperature: 0.2
      });

      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error parsing suggestion:', error);
      return { type: 'unknown', description: suggestion.suggestion };
    }
  }

  async applyCodeFix(action) {
    try {
      if (action.file && action.actions) {
        for (const actionItem of action.actions) {
          if (actionItem.type === 'replace') {
            await this.replaceCode(action.file, actionItem.find, actionItem.replace);
          } else if (actionItem.type === 'add') {
            await this.addCode(action.file, actionItem.content, actionItem.position);
          } else if (actionItem.type === 'remove') {
            await this.removeCode(action.file, actionItem.find);
          }
        }
      }
    } catch (error) {
      console.error('Error applying code fix:', error);
    }
  }

  async replaceCode(filePath, find, replace) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const newContent = content.replace(find, replace);
      await fs.writeFile(filePath, newContent);
      console.log(`✅ Replaced code in ${filePath}`);
    } catch (error) {
      console.error(`Error replacing code in ${filePath}:`, error);
    }
  }

  async addCode(filePath, content, position) {
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      let newContent;
      
      if (position === 'start') {
        newContent = content + '\n' + fileContent;
      } else if (position === 'end') {
        newContent = fileContent + '\n' + content;
      } else {
        newContent = fileContent + '\n' + content;
      }
      
      await fs.writeFile(filePath, newContent);
      console.log(`✅ Added code to ${filePath}`);
    } catch (error) {
      console.error(`Error adding code to ${filePath}:`, error);
    }
  }

  async removeCode(filePath, find) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const newContent = content.replace(find, '');
      await fs.writeFile(filePath, newContent);
      console.log(`✅ Removed code from ${filePath}`);
    } catch (error) {
      console.error(`Error removing code from ${filePath}:`, error);
    }
  }

  async applyWorkflowOptimization(action) {
    try {
      // Apply workflow optimizations
      if (action.actions) {
        for (const actionItem of action.actions) {
          if (actionItem.type === 'script_update') {
            await this.updateScript(actionItem.script, actionItem.changes);
          } else if (actionItem.type === 'config_update') {
            await this.updateConfig(actionItem.config, actionItem.changes);
          }
        }
      }
    } catch (error) {
      console.error('Error applying workflow optimization:', error);
    }
  }

  async applyAutomationRule(action) {
    try {
      // Add new automation rule
      if (action.rule) {
        const rulePath = path.join(__dirname, 'data', 'automation-rules.json');
        const rules = await fs.readFile(rulePath, 'utf8').then(JSON.parse).catch(() => []);
        
        rules.push({
          id: `rule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          rule: action.rule,
          created: new Date().toISOString(),
          status: 'active'
        });
        
        await fs.writeFile(rulePath, JSON.stringify(rules, null, 2));
        console.log('✅ Added new automation rule');
      }
    } catch (error) {
      console.error('Error applying automation rule:', error);
    }
  }

  async updateScript(scriptPath, changes) {
    try {
      const content = await fs.readFile(scriptPath, 'utf8');
      let newContent = content;
      
      for (const change of changes) {
        if (change.type === 'replace') {
          newContent = newContent.replace(change.find, change.replace);
        }
      }
      
      await fs.writeFile(scriptPath, newContent);
      console.log(`✅ Updated script ${scriptPath}`);
    } catch (error) {
      console.error(`Error updating script ${scriptPath}:`, error);
    }
  }

  async updateConfig(configPath, changes) {
    try {
      const content = await fs.readFile(configPath, 'utf8');
      const config = JSON.parse(content);
      
      for (const change of changes) {
        if (change.type === 'set') {
          config[change.key] = change.value;
        }
      }
      
      await fs.writeFile(configPath, JSON.stringify(config, null, 2));
      console.log(`✅ Updated config ${configPath}`);
    } catch (error) {
      console.error(`Error updating config ${configPath}:`, error);
    }
  }

  async generateDevelopmentInsights() {
    try {
      const insights = await this.chatLearningSystem.generateAutomationInsights({
        insightType: 'development',
        data: { integration: true }
      });

      if (insights.success) {
        console.log('📊 Development insights generated:', insights.insights);
        
        // Save insights to file
        const insightsPath = path.join(__dirname, 'data', 'development-insights.json');
        await fs.writeFile(insightsPath, JSON.stringify({
          timestamp: new Date().toISOString(),
          insights: insights.insights
        }, null, 2));
      }
    } catch (error) {
      console.error('Error generating development insights:', error);
    }
  }

  async createLearningReport() {
    try {
      const report = await this.chatLearningSystem.createLearningReport({
        reportType: 'integration',
        timeRange: 'week'
      });

      if (report.success) {
        console.log('📋 Learning report created:', report.report);
        
        // Save report to file
        const reportPath = path.join(__dirname, 'data', 'learning-report.json');
        await fs.writeFile(reportPath, JSON.stringify({
          timestamp: new Date().toISOString(),
          report: report.report,
          dataAnalyzed: report.dataAnalyzed
        }, null, 2));
      }
    } catch (error) {
      console.error('Error creating learning report:', error);
    }
  }

  async monitorAndLearn() {
    try {
      console.log('🔍 Monitoring and learning from development activities...');
      
      // Monitor file changes and learn
      const watcher = require('chokidar').watch([
        '**/*.js',
        '**/*.ts',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.md',
        '**/*.json'
      ], {
        ignored: /(^|[\/\\])\../,
        persistent: true
      });

      watcher
        .on('change', async (filePath) => {
          try {
            const content = await fs.readFile(filePath, 'utf8');
            await this.chatLearningSystem.analyzeCodeChanges(filePath);
          } catch (error) {
            console.error(`Error monitoring file ${filePath}:`, error);
          }
        });

      // Periodic learning and insights generation
      setInterval(async () => {
        await this.generateDevelopmentInsights();
        await this.createLearningReport();
      }, 30 * 60 * 1000); // Every 30 minutes
      
    } catch (error) {
      console.error('Error in monitor and learn:', error);
    }
  }

  async stop() {
    try {
      await this.chatLearningSystem.stop();
      console.log('🛑 Chat Learning Integration stopped');
    } catch (error) {
      console.error('Error stopping Chat Learning Integration:', error);
    }
  }
}

// Start the integration if this file is run directly
if (require.main === module) {
  const integration = new ChatLearningIntegration();
  integration.initialize().then(() => {
    integration.monitorAndLearn();
  }).catch(console.error);
}

module.exports = ChatLearningIntegration;
