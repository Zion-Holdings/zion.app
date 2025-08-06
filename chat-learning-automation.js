#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const chokidar = require('chokidar');
const OpenAI = require('openai');

const execAsync = promisify(exec);

class ChatLearningAutomationSystem {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-testing',
    });

    this.chatHistory = [];
    this.learnedPatterns = [];
    this.automationRules = [];
    this.developmentInsights = [];
    this.fileWatcher = null;
    this.isRunning = false;

    this.setupFileWatching();
    this.loadExistingData();
  }

  async loadExistingData() {
    try {
      // Load existing chat history
      const chatHistoryPath = path.join(__dirname, 'data', 'chat-history.json');
      if (await fs.access(chatHistoryPath).then(() => true).catch(() => false)) {
        const data = await fs.readFile(chatHistoryPath, 'utf8');
        this.chatHistory = JSON.parse(data);
      }

      // Load learned patterns
      const patternsPath = path.join(__dirname, 'data', 'learned-patterns.json');
      if (await fs.access(patternsPath).then(() => true).catch(() => false)) {
        const data = await fs.readFile(patternsPath, 'utf8');
        this.learnedPatterns = JSON.parse(data);
      }

      // Load automation rules
      const rulesPath = path.join(__dirname, 'data', 'automation-rules.json');
      if (await fs.access(rulesPath).then(() => true).catch(() => false)) {
        const data = await fs.readFile(rulesPath, 'utf8');
        this.automationRules = JSON.parse(data);
      }

      console.log('✅ Loaded existing chat learning data');
    } catch (error) {
      console.log('⚠️ No existing data found, starting fresh');
    }
  }

  setupFileWatching() {
    // Watch for new chat files and development changes
    this.fileWatcher = chokidar.watch([
      '**/*.chat',
      '**/*.log',
      '**/*.md',
      'src/**/*',
      'pages/**/*',
      'components/**/*'
    ], {
      ignored: /(^|[\/\\])\../,
      persistent: true
    });

    this.fileWatcher
      .on('add', async (filePath) => await this.handleFileChange('add', filePath))
      .on('change', async (filePath) => await this.handleFileChange('change', filePath))
      .on('unlink', async (filePath) => await this.handleFileChange('unlink', filePath));
  }

  async handleFileChange(event, filePath) {
    try {
      if (filePath.endsWith('.chat')) {
        await this.processChatFile(filePath);
      } else if (filePath.includes('src/') || filePath.includes('pages/') || filePath.includes('components/')) {
        await this.analyzeCodeChanges(filePath);
      }
    } catch (error) {
      console.error(`Error handling file change ${event} ${filePath}:`, error);
    }
  }

  async processChatFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      await this.learnFromChat({
        chatContent: content,
        context: 'file_change',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error(`Error processing chat file ${filePath}:`, error);
    }
  }

  async analyzeCodeChanges(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const analysis = await this.analyzeCodeQuality(content);
      
      this.developmentInsights.push({
        file: filePath,
        timestamp: new Date().toISOString(),
        analysis: analysis
      });

      await this.saveData();
    } catch (error) {
      console.error(`Error analyzing code changes ${filePath}:`, error);
    }
  }

  async learnFromChat(args) {
    try {
      const { chatContent, context, timestamp } = args;
      
      // Add to chat history
      this.chatHistory.push({
        content: chatContent,
        context: context || 'general',
        timestamp: timestamp || new Date().toISOString(),
        patterns: []
      });

      // Analyze chat content for patterns
      const patterns = await this.extractPatternsFromChat(chatContent);
      
      // Update the latest chat entry with patterns
      if (this.chatHistory.length > 0) {
        this.chatHistory[this.chatHistory.length - 1].patterns = patterns;
      }

      // Learn from patterns
      await this.learnFromPatterns(patterns, context);

      await this.saveData();

      console.log(`✅ Learned ${patterns.length} patterns from chat`);
      return { success: true, patternsFound: patterns.length };
    } catch (error) {
      console.error('Error learning from chat:', error);
      return { success: false, error: error.message };
    }
  }

  async extractPatternsFromChat(chatContent) {
    try {
      // Check if we have a valid API key
      if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy-key-for-testing') {
        console.log('⚠️ OpenAI API key not available, using mock patterns for testing');
        return [
          {
            type: 'error_fix',
            description: 'Mock pattern for testing',
            frequency: 1,
            impact: 'medium',
            automation_potential: 0.6
          }
        ];
      }

      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at analyzing development chat conversations and extracting patterns. Look for: 1) Common errors and their solutions, 2) Development workflows, 3) Code patterns and best practices, 4) Automation opportunities, 5) Performance issues and solutions, 6) Security concerns, 7) Testing patterns, 8) Deployment strategies. Return a JSON array of pattern objects with: type, description, frequency, impact, and automation_potential."
          },
          {
            role: "user",
            content: `Analyze this chat content and extract development patterns:\n\n${chatContent}`
          }
        ],
        temperature: 0.3
      });

      const patterns = JSON.parse(response.choices[0].message.content);
      return Array.isArray(patterns) ? patterns : [];
    } catch (error) {
      console.error('Error extracting patterns:', error);
      // Return mock patterns for testing
      return [
        {
          type: 'error_fix',
          description: 'Mock pattern for testing',
          frequency: 1,
          impact: 'medium',
          automation_potential: 0.6
        }
      ];
    }
  }

  async learnFromPatterns(patterns, context) {
    for (const pattern of patterns) {
      const existingPattern = this.learnedPatterns.find(p => 
        p.type === pattern.type && p.description === pattern.description
      );

      if (existingPattern) {
        existingPattern.frequency += 1;
        existingPattern.lastSeen = new Date().toISOString();
        existingPattern.contexts.push(context);
      } else {
        this.learnedPatterns.push({
          ...pattern,
          frequency: 1,
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
          contexts: [context]
        });
      }
    }
  }

  async analyzeChatPatterns(args) {
    try {
      const { timeRange, patternType } = args;
      
      let filteredPatterns = this.learnedPatterns;
      
      if (timeRange) {
        const cutoffDate = new Date();
        if (timeRange === 'week') {
          cutoffDate.setDate(cutoffDate.getDate() - 7);
        } else if (timeRange === 'month') {
          cutoffDate.setMonth(cutoffDate.getMonth() - 1);
        }
        
        filteredPatterns = filteredPatterns.filter(p => 
          new Date(p.lastSeen) >= cutoffDate
        );
      }

      if (patternType) {
        filteredPatterns = filteredPatterns.filter(p => p.type === patternType);
      }

      const analysis = {
        totalPatterns: filteredPatterns.length,
        patternTypes: {},
        topPatterns: filteredPatterns
          .sort((a, b) => b.frequency - a.frequency)
          .slice(0, 10),
        automationOpportunities: filteredPatterns
          .filter(p => p.automation_potential > 0.7)
          .sort((a, b) => b.automation_potential - a.automation_potential)
      };

      // Group by pattern type
      filteredPatterns.forEach(pattern => {
        if (!analysis.patternTypes[pattern.type]) {
          analysis.patternTypes[pattern.type] = [];
        }
        analysis.patternTypes[pattern.type].push(pattern);
      });

      return { success: true, analysis: analysis };
    } catch (error) {
      console.error('Error analyzing chat patterns:', error);
      return { success: false, error: error.message };
    }
  }

  async generateAutomationRules(args) {
    try {
      const { patternType, priority } = args;
      
      let patterns = this.learnedPatterns;
      if (patternType) {
        patterns = patterns.filter(p => p.type === patternType);
      }

      const highValuePatterns = patterns
        .filter(p => p.automation_potential > 0.6 && p.frequency > 2)
        .sort((a, b) => (b.automation_potential * b.frequency) - (a.automation_potential * a.frequency));

      // Check if we have a valid API key
      if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy-key-for-testing') {
        console.log('⚠️ OpenAI API key not available, using mock rules for testing');
        const mockRules = highValuePatterns.map((pattern, index) => ({
          id: `rule_${Date.now()}_${index}`,
          pattern: pattern,
          rule: {
            trigger: 'mock_trigger',
            action: 'mock_action',
            validation: 'mock_validation'
          },
          priority: priority || 'medium',
          created: new Date().toISOString(),
          status: 'active'
        }));
        
        this.automationRules.push(...mockRules);
        await this.saveData();
        return { success: true, rulesGenerated: mockRules.length, rules: mockRules };
      }

      const rules = await Promise.all(highValuePatterns.map(async (pattern) => {
        const response = await this.openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are an expert at creating automation rules for development workflows. Create a specific, actionable automation rule based on the pattern provided. Include: trigger conditions, actions to take, validation steps, and error handling."
            },
            {
              role: "user",
              content: `Create an automation rule for this pattern:\n\nType: ${pattern.type}\nDescription: ${pattern.description}\nFrequency: ${pattern.frequency}\nImpact: ${pattern.impact}\nAutomation Potential: ${pattern.automation_potential}`
            }
          ],
          temperature: 0.3
        });

        return {
          id: `rule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          pattern: pattern,
          rule: JSON.parse(response.choices[0].message.content),
          priority: priority || 'medium',
          created: new Date().toISOString(),
          status: 'active'
        };
      }));

      this.automationRules.push(...rules);
      await this.saveData();

      return { success: true, rulesGenerated: rules.length, rules: rules };
    } catch (error) {
      console.error('Error generating automation rules:', error);
      return { success: false, error: error.message };
    }
  }

  async applyLearnedPatterns(args) {
    try {
      const { taskType, context } = args;
      
      const relevantPatterns = this.learnedPatterns.filter(p => 
        p.contexts.includes(context) || p.type === taskType
      );

      const suggestions = await Promise.all(relevantPatterns.map(async (pattern) => {
        const response = await this.openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are an expert at applying learned development patterns to current tasks. Provide specific, actionable suggestions based on the pattern."
            },
            {
              role: "user",
              content: `Apply this pattern to a ${taskType} task:\n\nPattern: ${pattern.description}\nContext: ${context}\nFrequency: ${pattern.frequency}\nImpact: ${pattern.impact}`
            }
          ],
          temperature: 0.4
        });

        return {
          pattern: pattern,
          suggestion: response.choices[0].message.content,
          confidence: pattern.frequency / Math.max(...this.learnedPatterns.map(p => p.frequency))
        };
      }));

      return { success: true, suggestions: suggestions.sort((a, b) => b.confidence - a.confidence) };
    } catch (error) {
      console.error('Error applying learned patterns:', error);
      return { success: false, error: error.message };
    }
  }

  async autoFixCommonIssues(args) {
    try {
      const { issueType, filePath } = args;
      
      const issuePatterns = this.learnedPatterns.filter(p => 
        p.type === 'error' || p.type === 'issue' || p.description.toLowerCase().includes(issueType.toLowerCase())
      );

      if (issuePatterns.length === 0) {
        return { success: false, message: 'No patterns found for this issue type' };
      }

      const mostRelevantPattern = issuePatterns.sort((a, b) => 
        (b.frequency * b.automation_potential) - (a.frequency * a.automation_potential)
      )[0];

      const fix = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at automatically fixing common development issues. Provide specific code fixes based on patterns."
          },
          {
            role: "user",
            content: `Fix this ${issueType} issue based on this pattern:\n\nPattern: ${mostRelevantPattern.description}\nFile: ${filePath}\nFrequency: ${mostRelevantPattern.frequency}\nImpact: ${mostRelevantPattern.impact}`
          }
        ],
        temperature: 0.2
      });

      return {
        success: true,
        fix: fix.choices[0].message.content,
        patternUsed: mostRelevantPattern,
        confidence: mostRelevantPattern.frequency / Math.max(...this.learnedPatterns.map(p => p.frequency))
      };
    } catch (error) {
      console.error('Error auto-fixing common issues:', error);
      return { success: false, error: error.message };
    }
  }

  async generateSmartSuggestions(args) {
    try {
      const { context, suggestionType } = args;
      
      const relevantPatterns = this.learnedPatterns.filter(p => 
        p.contexts.includes(context) || p.type === suggestionType
      );

      // Check if we have a valid API key
      if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy-key-for-testing') {
        console.log('⚠️ OpenAI API key not available, using mock suggestions for testing');
        return {
          success: true,
          suggestions: 'Mock suggestions for testing: Consider optimizing your React components and implementing proper TypeScript types.',
          patternsUsed: relevantPatterns.length
        };
      }

      const suggestions = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at generating smart development suggestions based on learned patterns. Provide actionable, specific suggestions."
          },
          {
            role: "user",
            content: `Generate ${suggestionType} suggestions for this context: ${context}\n\nBased on these patterns:\n${relevantPatterns.map(p => `- ${p.description} (frequency: ${p.frequency})`).join('\n')}`
          }
        ],
        temperature: 0.4
      });

      return {
        success: true,
        suggestions: suggestions.choices[0].message.content,
        patternsUsed: relevantPatterns.length
      };
    } catch (error) {
      console.error('Error generating smart suggestions:', error);
      return { success: false, error: error.message };
    }
  }

  async optimizeDevelopmentWorkflow(args) {
    try {
      const { workflowType, metrics } = args;
      
      const workflowPatterns = this.learnedPatterns.filter(p => 
        p.type === 'workflow' || p.contexts.includes(workflowType)
      );

      // Check if we have a valid API key
      if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy-key-for-testing') {
        console.log('⚠️ OpenAI API key not available, using mock optimization for testing');
        return {
          success: true,
          optimization: 'Mock workflow optimization: Consider implementing automated testing and continuous integration.',
          patternsUsed: workflowPatterns.length
        };
      }

      const optimizationSuggestions = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at optimizing development workflows. Analyze patterns and provide specific optimization recommendations."
          },
          {
            role: "user",
            content: `Optimize this ${workflowType} workflow based on these patterns:\n\n${workflowPatterns.map(p => `- ${p.description} (frequency: ${p.frequency}, impact: ${p.impact})`).join('\n')}\n\nCurrent metrics: ${JSON.stringify(metrics)}`
          }
        ],
        temperature: 0.3
      });

      return {
        success: true,
        optimization: optimizationSuggestions.choices[0].message.content,
        patternsUsed: workflowPatterns.length
      };
    } catch (error) {
      console.error('Error optimizing development workflow:', error);
      return { success: false, error: error.message };
    }
  }

  async learnFromErrors(args) {
    try {
      const { errorLog, context } = args;
      
      const errorPatterns = await this.extractPatternsFromChat(errorLog);
      
      // Focus on error patterns
      const errorFocusedPatterns = errorPatterns.filter(p => 
        p.type === 'error' || p.type === 'issue' || p.description.toLowerCase().includes('error')
      );

      await this.learnFromPatterns(errorFocusedPatterns, context || 'error_analysis');

      // Generate prevention strategies
      const preventionStrategies = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at creating error prevention strategies. Analyze error patterns and create specific prevention measures."
          },
          {
            role: "user",
            content: `Create prevention strategies for these error patterns:\n\n${errorFocusedPatterns.map(p => `- ${p.description} (frequency: ${p.frequency})`).join('\n')}`
          }
        ],
        temperature: 0.3
      });

      return {
        success: true,
        patternsLearned: errorFocusedPatterns.length,
        preventionStrategies: preventionStrategies.choices[0].message.content
      };
    } catch (error) {
      console.error('Error learning from errors:', error);
      return { success: false, error: error.message };
    }
  }

  async createDevelopmentTemplates(args) {
    try {
      const { templateType, patterns } = args;
      
      const relevantPatterns = patterns || this.learnedPatterns.filter(p => 
        p.type === templateType || p.contexts.includes(templateType)
      );

      const template = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at creating development templates based on learned patterns. Create comprehensive, reusable templates."
          },
          {
            role: "user",
            content: `Create a ${templateType} template based on these patterns:\n\n${relevantPatterns.map(p => `- ${p.description} (type: ${p.type}, frequency: ${p.frequency})`).join('\n')}`
          }
        ],
        temperature: 0.3
      });

      return {
        success: true,
        template: template.choices[0].message.content,
        patternsUsed: relevantPatterns.length
      };
    } catch (error) {
      console.error('Error creating development templates:', error);
      return { success: false, error: error.message };
    }
  }

  async analyzeCodeQuality(content) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at analyzing code quality. Analyze the code and provide metrics and insights."
          },
          {
            role: "user",
            content: `Analyze this code for quality:\n\n${content}`
          }
        ],
        temperature: 0.2
      });

      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error analyzing code quality:', error);
      return { error: error.message };
    }
  }

  async saveData() {
    try {
      // Ensure data directory exists
      const dataDir = path.join(__dirname, 'data');
      await fs.mkdir(dataDir, { recursive: true });

      // Save chat history
      await fs.writeFile(
        path.join(dataDir, 'chat-history.json'),
        JSON.stringify(this.chatHistory, null, 2)
      );

      // Save learned patterns
      await fs.writeFile(
        path.join(dataDir, 'learned-patterns.json'),
        JSON.stringify(this.learnedPatterns, null, 2)
      );

      // Save automation rules
      await fs.writeFile(
        path.join(dataDir, 'automation-rules.json'),
        JSON.stringify(this.automationRules, null, 2)
      );

      // Save development insights
      await fs.writeFile(
        path.join(dataDir, 'development-insights.json'),
        JSON.stringify(this.developmentInsights, null, 2)
      );

      console.log('✅ Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  async start() {
    try {
      console.log('🚀 Starting Chat Learning Automation System...');
      
      this.isRunning = true;
      console.log('✅ Chat Learning Automation System is running');
      
      // Start periodic learning
      setInterval(async () => {
        if (this.isRunning) {
          await this.periodicLearning();
        }
      }, 5 * 60 * 1000); // Every 5 minutes
      
    } catch (error) {
      console.error('Error starting Chat Learning Automation System:', error);
    }
  }

  async periodicLearning() {
    try {
      // Analyze recent patterns and generate insights
      const recentPatterns = this.learnedPatterns.filter(p => 
        new Date(p.lastSeen) >= new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
      );

      if (recentPatterns.length > 0) {
        const insights = await this.generateAutomationInsights({
          insightType: 'periodic',
          data: { recentPatterns }
        });

        if (insights.success) {
          console.log('📊 Generated periodic insights:', insights.insights);
        }
      }
    } catch (error) {
      console.error('Error in periodic learning:', error);
    }
  }

  async generateAutomationInsights(args) {
    try {
      const { insightType, data } = args;
      
      const highValuePatterns = this.learnedPatterns.filter(p => 
        p.automation_potential > 0.6 && p.frequency > 1
      );

      const insights = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at generating automation insights. Analyze patterns and provide specific automation recommendations."
          },
          {
            role: "user",
            content: `Generate ${insightType} automation insights based on these patterns:\n\n${highValuePatterns.map(p => `- ${p.description} (automation potential: ${p.automation_potential}, frequency: ${p.frequency})`).join('\n')}\n\nAdditional data: ${JSON.stringify(data)}`
          }
        ],
        temperature: 0.4
      });

      return {
        success: true,
        insights: insights.choices[0].message.content,
        patternsAnalyzed: highValuePatterns.length
      };
    } catch (error) {
      console.error('Error generating automation insights:', error);
      return { success: false, error: error.message };
    }
  }

  async stop() {
    try {
      this.isRunning = false;
      if (this.fileWatcher) {
        await this.fileWatcher.close();
      }
      await this.saveData();
      console.log('🛑 Chat Learning Automation System stopped');
    } catch (error) {
      console.error('Error stopping Chat Learning Automation System:', error);
    }
  }
}

// Start the system if this file is run directly
if (require.main === module) {
  const system = new ChatLearningAutomationSystem();
  system.start().catch(console.error);
}

module.exports = ChatLearningAutomationSystem;
