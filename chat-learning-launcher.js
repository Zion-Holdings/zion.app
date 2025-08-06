#!/usr/bin/env node

const ChatLearningIntegration = require('./chat-learning-integration.js');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ChatLearningLauncher {
  constructor() {
    this.integration = new ChatLearningIntegration();
    this.isRunning = false;
    this.processes = [];
  }

  async start() {
    try {
      console.log('🚀 Starting Chat Learning Automation System...');
      
      // Create necessary directories
      await this.createDirectories();
      
      // Initialize the integration
      await this.integration.initialize();
      
      // Start monitoring and learning
      await this.integration.monitorAndLearn();
      
      // Set up periodic tasks
      this.setupPeriodicTasks();
      
      this.isRunning = true;
      console.log('✅ Chat Learning Automation System is running');
      
      // Keep the process alive
      process.on('SIGINT', () => this.stop());
      process.on('SIGTERM', () => this.stop());
      
    } catch (error) {
      console.error('Error starting Chat Learning Automation System:', error);
      process.exit(1);
    }
  }

  async createDirectories() {
    try {
      const directories = [
        'data',
        'data/chat-history',
        'data/learned-patterns',
        'data/automation-rules',
        'data/development-insights',
        'data/reports',
        'logs'
      ];

      for (const dir of directories) {
        await fs.mkdir(path.join(__dirname, dir), { recursive: true });
      }

      console.log('✅ Created necessary directories');
    } catch (error) {
      console.error('Error creating directories:', error);
    }
  }

  setupPeriodicTasks() {
    // Generate insights every hour
    setInterval(async () => {
      if (this.isRunning) {
        await this.generateInsights();
      }
    }, 60 * 60 * 1000); // Every hour

    // Create learning reports every day
    setInterval(async () => {
      if (this.isRunning) {
        await this.createDailyReport();
      }
    }, 24 * 60 * 60 * 1000); // Every day

    // Optimize automation rules every week
    setInterval(async () => {
      if (this.isRunning) {
        await this.optimizeAutomationRules();
      }
    }, 7 * 24 * 60 * 60 * 1000); // Every week
  }

  async generateInsights() {
    try {
      console.log('📊 Generating periodic insights...');
      
      // Generate development insights
      await this.integration.generateDevelopmentInsights();
      
      // Analyze chat patterns
      const patterns = await this.integration.chatLearningSystem.analyzeChatPatterns({
        timeRange: 'week'
      });

      if (patterns.success) {
        console.log(`📈 Analyzed ${patterns.analysis.totalPatterns} patterns`);
        
        // Generate automation rules for high-value patterns
        if (patterns.analysis.automationOpportunities.length > 0) {
          const rules = await this.integration.chatLearningSystem.generateAutomationRules({
            patternType: 'high_value',
            priority: 'high'
          });

          if (rules.success) {
            console.log(`🔧 Generated ${rules.rulesGenerated} automation rules`);
          }
        }
      }
    } catch (error) {
      console.error('Error generating insights:', error);
    }
  }

  async createDailyReport() {
    try {
      console.log('📋 Creating daily learning report...');
      
      const report = await this.integration.createLearningReport();
      
      if (report.success) {
        // Save report to daily reports directory
        const reportPath = path.join(__dirname, 'data', 'reports', `daily-report-${new Date().toISOString().split('T')[0]}.json`);
        await fs.writeFile(reportPath, JSON.stringify({
          timestamp: new Date().toISOString(),
          report: report.report,
          dataAnalyzed: report.dataAnalyzed
        }, null, 2));
        
        console.log(`✅ Daily report saved to ${reportPath}`);
      }
    } catch (error) {
      console.error('Error creating daily report:', error);
    }
  }

  async optimizeAutomationRules() {
    try {
      console.log('🔧 Optimizing automation rules...');
      
      // Analyze existing rules
      const rulesPath = path.join(__dirname, 'data', 'automation-rules.json');
      if (await fs.access(rulesPath).then(() => true).catch(() => false)) {
        const rules = JSON.parse(await fs.readFile(rulesPath, 'utf8'));
        
        // Analyze rule effectiveness
        const analysis = await this.analyzeRuleEffectiveness(rules);
        
        // Generate optimized rules
        const optimizedRules = await this.generateOptimizedRules(analysis);
        
        // Update rules file
        await fs.writeFile(rulesPath, JSON.stringify(optimizedRules, null, 2));
        
        console.log(`✅ Optimized ${optimizedRules.length} automation rules`);
      }
    } catch (error) {
      console.error('Error optimizing automation rules:', error);
    }
  }

  async analyzeRuleEffectiveness(rules) {
    try {
      const analysis = {
        totalRules: rules.length,
        activeRules: rules.filter(r => r.status === 'active').length,
        effectiveRules: [],
        ineffectiveRules: [],
        suggestions: []
      };

      for (const rule of rules) {
        // Analyze rule effectiveness based on patterns
        const effectiveness = await this.calculateRuleEffectiveness(rule);
        
        if (effectiveness > 0.7) {
          analysis.effectiveRules.push({ rule, effectiveness });
        } else {
          analysis.ineffectiveRules.push({ rule, effectiveness });
        }
      }

      // Generate suggestions for improvement
      analysis.suggestions = await this.generateRuleSuggestions(analysis);

      return analysis;
    } catch (error) {
      console.error('Error analyzing rule effectiveness:', error);
      return { totalRules: 0, activeRules: 0, effectiveRules: [], ineffectiveRules: [], suggestions: [] };
    }
  }

  async calculateRuleEffectiveness(rule) {
    try {
      // Calculate effectiveness based on pattern frequency and automation potential
      const relatedPatterns = this.integration.chatLearningSystem.learnedPatterns.filter(p => 
        p.type === rule.pattern?.type || p.description.includes(rule.pattern?.description || '')
      );

      if (relatedPatterns.length === 0) return 0;

      const avgFrequency = relatedPatterns.reduce((sum, p) => sum + p.frequency, 0) / relatedPatterns.length;
      const avgAutomationPotential = relatedPatterns.reduce((sum, p) => sum + p.automation_potential, 0) / relatedPatterns.length;

      return (avgFrequency * 0.6 + avgAutomationPotential * 0.4) / 10; // Normalize to 0-1
    } catch (error) {
      console.error('Error calculating rule effectiveness:', error);
      return 0;
    }
  }

  async generateRuleSuggestions(analysis) {
    try {
      const suggestions = [];

      // Suggest improvements for ineffective rules
      for (const { rule, effectiveness } of analysis.ineffectiveRules) {
        if (effectiveness < 0.3) {
          suggestions.push({
            type: 'deactivate',
            ruleId: rule.id,
            reason: 'Low effectiveness',
            effectiveness: effectiveness
          });
        } else {
          suggestions.push({
            type: 'optimize',
            ruleId: rule.id,
            reason: 'Medium effectiveness - needs optimization',
            effectiveness: effectiveness
          });
        }
      }

      // Suggest new rules based on high-value patterns
      const highValuePatterns = this.integration.chatLearningSystem.learnedPatterns.filter(p => 
        p.automation_potential > 0.8 && p.frequency > 3
      );

      for (const pattern of highValuePatterns.slice(0, 5)) {
        const existingRule = analysis.effectiveRules.find(r => 
          r.rule.pattern?.type === pattern.type
        );

        if (!existingRule) {
          suggestions.push({
            type: 'create',
            pattern: pattern,
            reason: 'High-value pattern without automation rule'
          });
        }
      }

      return suggestions;
    } catch (error) {
      console.error('Error generating rule suggestions:', error);
      return [];
    }
  }

  async generateOptimizedRules(analysis) {
    try {
      const optimizedRules = [];

      // Keep effective rules
      for (const { rule } of analysis.effectiveRules) {
        optimizedRules.push(rule);
      }

      // Optimize ineffective rules
      for (const { rule, effectiveness } of analysis.ineffectiveRules) {
        if (effectiveness >= 0.3) {
          // Try to optimize the rule
          const optimizedRule = await this.optimizeRule(rule);
          if (optimizedRule) {
            optimizedRules.push(optimizedRule);
          }
        }
        // Remove rules with effectiveness < 0.3
      }

      // Add new rules based on suggestions
      for (const suggestion of analysis.suggestions) {
        if (suggestion.type === 'create') {
          const newRule = await this.createRuleFromPattern(suggestion.pattern);
          if (newRule) {
            optimizedRules.push(newRule);
          }
        }
      }

      return optimizedRules;
    } catch (error) {
      console.error('Error generating optimized rules:', error);
      return [];
    }
  }

  async optimizeRule(rule) {
    try {
      // Use AI to optimize the rule
      const response = await this.integration.chatLearningSystem.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at optimizing automation rules. Improve the rule to make it more effective and reliable."
          },
          {
            role: "user",
            content: `Optimize this automation rule:\n\n${JSON.stringify(rule, null, 2)}`
          }
        ],
        temperature: 0.3
      });

      const optimizedRule = JSON.parse(response.choices[0].message.content);
      optimizedRule.id = rule.id;
      optimizedRule.optimized = new Date().toISOString();

      return optimizedRule;
    } catch (error) {
      console.error('Error optimizing rule:', error);
      return rule; // Return original rule if optimization fails
    }
  }

  async createRuleFromPattern(pattern) {
    try {
      const response = await this.integration.chatLearningSystem.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at creating automation rules from patterns. Create a specific, actionable automation rule."
          },
          {
            role: "user",
            content: `Create an automation rule for this pattern:\n\nType: ${pattern.type}\nDescription: ${pattern.description}\nFrequency: ${pattern.frequency}\nAutomation Potential: ${pattern.automation_potential}`
          }
        ],
        temperature: 0.3
      });

      return {
        id: `rule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        pattern: pattern,
        rule: JSON.parse(response.choices[0].message.content),
        created: new Date().toISOString(),
        status: 'active'
      };
    } catch (error) {
      console.error('Error creating rule from pattern:', error);
      return null;
    }
  }

  async stop() {
    try {
      console.log('🛑 Stopping Chat Learning Automation System...');
      
      this.isRunning = false;
      await this.integration.stop();
      
      console.log('✅ Chat Learning Automation System stopped');
      process.exit(0);
    } catch (error) {
      console.error('Error stopping Chat Learning Automation System:', error);
      process.exit(1);
    }
  }
}

// Start the launcher if this file is run directly
if (require.main === module) {
  const launcher = new ChatLearningLauncher();
  launcher.start().catch(console.error);
}

module.exports = ChatLearningLauncher;
