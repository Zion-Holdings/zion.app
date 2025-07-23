
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

/**
 * AI Discovery Automation System
 * 
 * Autonomous system that continuously searches the web for new AI tools,
 * features, and capabilities, then integrates them into the automation system.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const https = require('https');
const http = require('http');

class AIDiscoveryAutomation extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      // Discovery settings
      discovery: {
        interval: 30 * 60 * 1000, // 30 minutes
        searchEngines: ['google', 'bing', 'duckduckgo'],
        aiSources: [
          'github.com/topics/artificial-intelligence',
          'paperswithcode.com',
          'arxiv.org',
          'huggingface.co',
          'openai.com/blog',
          'anthropic.com/blog',
          'ai.google',
          'research.microsoft.com',
          'ai.meta.com'
        ],
        keywords: [
          'new AI tools',
          'latest AI features',
          'AI automation',
          'machine learning tools',
          'AI code generation',
          'AI code review',
          'AI testing',
          'AI debugging',
          'AI optimization',
          'AI security',
          'AI performance',
          'AI monitoring'
        ]
      },
      
      // Integration settings
      integration: {
        autoIntegrate: false, // Set to true for automatic integration
        testBeforeIntegration: true,
        backupBeforeChanges: true,
        notifyOnDiscovery: true
      },
      
      // Paths
      paths: {
        projectRoot: process.cwd(),
        logs: path.join(process.cwd(), 'logs'),
        discoveries: path.join(process.cwd(), 'discoveries'),
        integrations: path.join(process.cwd(), 'integrations'),
        backups: path.join(process.cwd(), 'backups')
      }
    };
    
    this.isRunning = false;
    this.currentDiscovery = null;
    this.discoveryHistory = [];
    this.discoveredTools = new Map();
    this.integratedTools = new Map();
    this.stats = {
      totalDiscoveries: 0,
      successfulDiscoveries: 0,
      failedDiscoveries: 0,
      toolsDiscovered: 0,
      toolsIntegrated: 0,
      lastDiscovery: null
    };
    
    this.initializeDirectories();
  }

  async initializeDirectories() {
    const dirs = [
      this.config.paths.logs,
      this.config.paths.discoveries,
      this.config.paths.integrations,
      this.config.paths.backups
    ];

    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        this.log('warn', `Failed to create directory ${dir}: ${error.message}`);
      }
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('warn', 'AI Discovery Automation is already running');
      return;
    }

    this.log('info', '🚀 Starting AI Discovery Automation...');
    this.isRunning = true;

    // Start discovery loop
    this.startDiscoveryLoop();

    // Start periodic deep discovery
    this.startPeriodicDiscovery();

    this.log('info', '✅ AI Discovery Automation started successfully');
    this.emit('started');
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'AI Discovery Automation is not running');
      return;
    }

    this.log('info', '🛑 Stopping AI Discovery Automation...');
    this.isRunning = false;

    if (this.discoveryTimer) {
      clearInterval(this.discoveryTimer);
    }

    if (this.periodicTimer) {
      clearInterval(this.periodicTimer);
    }

    this.log('info', '✅ AI Discovery Automation stopped');
    this.emit('stopped');
  }

  startDiscoveryLoop() {
    this.discoveryTimer = setInterval(async () => {
      if (this.isRunning && !this.currentDiscovery) {
        await this.performQuickDiscovery();
      }
    }, this.config.discovery.interval);
  }

  startPeriodicDiscovery() {
    // Perform deep discovery every 6 hours
    this.periodicTimer = setInterval(async () => {
      if (this.isRunning && !this.currentDiscovery) {
        await this.performDeepDiscovery();
      }
    }, 6 * 60 * 60 * 1000);
  }

  async performQuickDiscovery() {
    try {
      this.currentDiscovery = {
        id: `discovery_${Date.now()}`,
        type: 'quick',
        startTime: Date.now(),
        status: 'running'
      };

      this.log('info', '🔍 Starting quick AI discovery...');

      // Search for new AI tools
      const discoveries = await this.searchForAITools();
      
      // Analyze discoveries
      const analyzedDiscoveries = await this.analyzeDiscoveries(discoveries);
      
      // Filter relevant discoveries
      const relevantDiscoveries = this.filterRelevantDiscoveries(analyzedDiscoveries);
      
      // Store discoveries
      await this.storeDiscoveries(relevantDiscoveries);

      this.currentDiscovery.status = 'completed';
      this.currentDiscovery.endTime = Date.now();
      this.currentDiscovery.results = {
        totalDiscovered: discoveries.length,
        relevantDiscovered: relevantDiscoveries.length,
        newTools: relevantDiscoveries.filter(d => !this.discoveredTools.has(d.id)).length
      };

      this.discoveryHistory.push(this.currentDiscovery);
      this.stats.totalDiscoveries++;
      this.stats.successfulDiscoveries++;
      this.stats.toolsDiscovered += relevantDiscoveries.length;
      this.stats.lastDiscovery = Date.now();

      this.log('info', `✅ Quick discovery completed: ${discoveries.length} found, ${relevantDiscoveries.length} relevant`);
      this.emit('discoveryCompleted', this.currentDiscovery);

    } catch (error) {
      this.log('error', `Quick discovery failed: ${error.message}`);
      this.stats.failedDiscoveries++;
      this.emit('discoveryFailed', error);
    } finally {
      this.currentDiscovery = null;
    }
  }

  async performDeepDiscovery() {
    try {
      this.currentDiscovery = {
        id: `discovery_${Date.now()}`,
        type: 'deep',
        startTime: Date.now(),
        status: 'running'
      };

      this.log('info', '🔍 Starting deep AI discovery...');

      // Comprehensive search across all sources
      const allDiscoveries = [];
      
      for (const source of this.config.discovery.aiSources) {
        try {
          const sourceDiscoveries = await this.searchSource(source);
          allDiscoveries.push(...sourceDiscoveries);
        } catch (error) {
          this.log('warn', `Failed to search source ${source}: ${error.message}`);
        }
      }

      // Analyze all discoveries
      const analyzedDiscoveries = await this.analyzeDiscoveries(allDiscoveries);
      
      // Filter and rank discoveries
      const relevantDiscoveries = this.filterRelevantDiscoveries(analyzedDiscoveries);
      const rankedDiscoveries = this.rankDiscoveries(relevantDiscoveries);
      
      // Store discoveries
      await this.storeDiscoveries(rankedDiscoveries);

      // Generate integration suggestions
      const integrationSuggestions = await this.generateIntegrationSuggestions(rankedDiscoveries);
      
      // Auto-integrate if enabled
      if (this.config.integration.autoIntegrate) {
        await this.autoIntegrateTools(integrationSuggestions);
      }

      this.currentDiscovery.status = 'completed';
      this.currentDiscovery.endTime = Date.now();
      this.currentDiscovery.results = {
        totalDiscovered: allDiscoveries.length,
        relevantDiscovered: relevantDiscoveries.length,
        integrationSuggestions: integrationSuggestions.length
      };

      this.discoveryHistory.push(this.currentDiscovery);
      this.stats.totalDiscoveries++;
      this.stats.successfulDiscoveries++;
      this.stats.toolsDiscovered += relevantDiscoveries.length;
      this.stats.lastDiscovery = Date.now();

      // Generate report
      await this.generateDiscoveryReport();

      this.log('info', `✅ Deep discovery completed: ${allDiscoveries.length} found, ${relevantDiscoveries.length} relevant`);
      this.emit('discoveryCompleted', this.currentDiscovery);

    } catch (error) {
      this.log('error', `Deep discovery failed: ${error.message}`);
      this.stats.failedDiscoveries++;
      this.emit('discoveryFailed', error);
    } finally {
      this.currentDiscovery = null;
    }
  }

  async searchForAITools() {
    const discoveries = [];
    
    // Search with different keywords
    for (const keyword of this.config.discovery.keywords) {
      try {
        const keywordDiscoveries = await this.searchKeyword(keyword);
        discoveries.push(...keywordDiscoveries);
      } catch (error) {
        this.log('warn', `Failed to search keyword "${keyword}": ${error.message}`);
      }
    }
    
    return discoveries;
  }

  async searchKeyword(keyword) {
    const discoveries = [];
    
    // Simulate web search (in real implementation, use actual search APIs)
    const searchResults = await this.simulateWebSearch(keyword);
    
    for (const result of searchResults) {
      discoveries.push({
        id: this.generateId(result.url),
        title: result.title,
        description: result.description,
        url: result.url,
        source: 'web_search',
        keyword: keyword,
        timestamp: Date.now(),
        relevance: this.calculateRelevance(result, keyword)
      });
    }
    
    return discoveries;
  }

  async searchSource(source) {
    const discoveries = [];
    
    try {
      // Simulate source scraping (in real implementation, use actual scraping)
      const sourceContent = await this.simulateSourceScraping(source);
      
      for (const item of sourceContent) {
        discoveries.push({
          id: this.generateId(item.url),
          title: item.title,
          description: item.description,
          url: item.url,
          source: source,
          timestamp: Date.now(),
          relevance: this.calculateRelevance(item, 'AI tools')
        });
      }
    } catch (error) {
      this.log('warn', `Failed to search source ${source}: ${error.message}`);
    }
    
    return discoveries;
  }

  async simulateWebSearch(keyword) {
    // Simulate search results (replace with actual search API calls)
    return [
      {
        title: `New AI Tool for ${keyword}`,
        description: `Latest AI tool that helps with ${keyword}`,
        url: `https://example.com/ai-tool-${Date.now()}`
      },
      {
        title: `AI Automation for ${keyword}`,
        description: `Automated AI solution for ${keyword}`,
        url: `https://example.com/ai-automation-${Date.now()}`
      }
    ];
  }

  async simulateSourceScraping(source) {
    // Simulate source content (replace with actual scraping)
    return [
      {
        title: `AI Tool from ${source}`,
        description: `New AI tool discovered from ${source}`,
        url: `https://${source}/ai-tool-${Date.now()}`
      }
    ];
  }

  async analyzeDiscoveries(discoveries) {
    const analyzed = [];
    
    for (const discovery of discoveries) {
      try {
        const analysis = await this.analyzeDiscovery(discovery);
        analyzed.push({
          ...discovery,
          analysis
        });
      } catch (error) {
        this.log('warn', `Failed to analyze discovery ${discovery.id}: ${error.message}`);
      }
    }
    
    return analyzed;
  }

  async analyzeDiscovery(discovery) {
    // Analyze discovery content and extract key information
    const analysis = {
      category: this.categorizeDiscovery(discovery),
      potential: this.assessPotential(discovery),
      integrationDifficulty: this.assessIntegrationDifficulty(discovery),
      impact: this.assessImpact(discovery),
      requirements: this.extractRequirements(discovery),
      alternatives: this.findAlternatives(discovery)
    };
    
    return analysis;
  }

  categorizeDiscovery(discovery) {
    const categories = {
      'code-generation': ['code generation', 'codegen', 'autocomplete'],
      'code-review': ['code review', 'static analysis', 'linting'],
      'testing': ['testing', 'test generation', 'test automation'],
      'debugging': ['debugging', 'error detection', 'bug finding'],
      'optimization': ['optimization', 'performance', 'efficiency'],
      'security': ['security', 'vulnerability', 'threat detection'],
      'monitoring': ['monitoring', 'observability', 'logging'],
      'deployment': ['deployment', 'ci/cd', 'automation']
    };
    
    const text = `${discovery.title} ${discovery.description}`.toLowerCase();
    
    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => text.includes(keyword))) {
        return category;
      }
    }
    
    return 'general';
  }

  assessPotential(discovery) {
    // Assess the potential value of the discovery
    let score = 0;
    
    // Relevance scoring
    score += discovery.relevance * 0.4;
    
    // Source credibility
    const credibleSources = ['github.com', 'openai.com', 'anthropic.com', 'google.com'];
    if (credibleSources.some(source => discovery.url.includes(source))) {
      score += 0.3;
    }
    
    // Recency
    const age = Date.now() - discovery.timestamp;
    if (age < 24 * 60 * 60 * 1000) { // Less than 24 hours
      score += 0.2;
    } else if (age < 7 * 24 * 60 * 60 * 1000) { // Less than 7 days
      score += 0.1;
    }
    
    // Description quality
    if (discovery.description.length > 100) {
      score += 0.1;
    }
    
    return Math.min(1, Math.max(0, score));
  }

  assessIntegrationDifficulty(discovery) {
    // Assess how difficult it would be to integrate this tool
    const text = `${discovery.title} ${discovery.description}`.toLowerCase();
    
    if (text.includes('api') || text.includes('sdk') || text.includes('library')) {
      return 'easy';
    } else if (text.includes('plugin') || text.includes('extension')) {
      return 'medium';
    } else if (text.includes('standalone') || text.includes('service')) {
      return 'hard';
    }
    
    return 'unknown';
  }

  assessImpact(discovery) {
    // Assess the potential impact of integrating this tool
    const category = this.categorizeDiscovery(discovery);
    const potential = this.assessPotential(discovery);
    
    const impactScores = {
      'code-generation': 0.9,
      'code-review': 0.8,
      'testing': 0.7,
      'debugging': 0.8,
      'optimization': 0.6,
      'security': 0.9,
      'monitoring': 0.5,
      'deployment': 0.6,
      'general': 0.4
    };
    
    return (impactScores[category] || 0.4) * potential;
  }

  extractRequirements(discovery) {
    // Extract requirements for integrating this tool
    const requirements = [];
    const text = `${discovery.title} ${discovery.description}`.toLowerCase();
    
    if (text.includes('api key') || text.includes('authentication')) {
      requirements.push('api_key');
    }
    
    if (text.includes('docker') || text.includes('container')) {
      requirements.push('docker');
    }
    
    if (text.includes('python') || text.includes('pip')) {
      requirements.push('python');
    }
    
    if (text.includes('node') || text.includes('npm')) {
      requirements.push('nodejs');
    }
    
    return requirements;
  }

  findAlternatives(discovery) {
    // Find alternative tools in the same category
    const category = this.categorizeDiscovery(discovery);
    const alternatives = [];
    
    for (const [id, tool] of this.discoveredTools) {
      if (tool.analysis.category === category && id !== discovery.id) {
        alternatives.push({
          id: tool.id,
          title: tool.title,
          url: tool.url
        });
      }
    }
    
    return alternatives;
  }

  filterRelevantDiscoveries(discoveries) {
    return discoveries.filter(discovery => {
      // Filter by relevance score
      if (discovery.relevance < 0.3) {
        return false;
      }
      
      // Filter by potential
      if (discovery.analysis.potential < 0.4) {
        return false;
      }
      
      // Filter duplicates
      if (this.discoveredTools.has(discovery.id)) {
        return false;
      }
      
      return true;
    });
  }

  rankDiscoveries(discoveries) {
    return discoveries.sort((a, b) => {
      // Rank by impact score
      const impactA = a.analysis.impact;
      const impactB = b.analysis.impact;
      
      if (impactA !== impactB) {
        return impactB - impactA;
      }
      
      // Then by potential
      const potentialA = a.analysis.potential;
      const potentialB = b.analysis.potential;
      
      if (potentialA !== potentialB) {
        return potentialB - potentialA;
      }
      
      // Then by relevance
      return b.relevance - a.relevance;
    });
  }

  async storeDiscoveries(discoveries) {
    for (const discovery of discoveries) {
      this.discoveredTools.set(discovery.id, discovery);
      
      // Save to file
      const filePath = path.join(this.config.paths.discoveries, `${discovery.id}.json`);
      await fs.writeFile(filePath, JSON.stringify(discovery, null, 2));
    }
  }

  async generateIntegrationSuggestions(discoveries) {
    const suggestions = [];
    
    for (const discovery of discoveries) {
      if (discovery.analysis.impact > 0.7 && discovery.analysis.integrationDifficulty !== 'hard') {
        suggestions.push({
          tool: discovery,
          priority: discovery.analysis.impact > 0.8 ? 'high' : 'medium',
          reason: `High impact (${discovery.analysis.impact.toFixed(2)}) and ${discovery.analysis.integrationDifficulty} integration`,
          estimatedEffort: this.estimateIntegrationEffort(discovery)
        });
      }
    }
    
    return suggestions.sort((a, b) => b.tool.analysis.impact - a.tool.analysis.impact);
  }

  estimateIntegrationEffort(discovery) {
    const effortScores = {
      'easy': 1,
      'medium': 3,
      'hard': 5,
      'unknown': 2
    };
    
    return effortScores[discovery.analysis.integrationDifficulty] || 2;
  }

  async autoIntegrateTools(suggestions) {
    for (const suggestion of suggestions) {
      if (suggestion.priority === 'high' && this.config.integration.autoIntegrate) {
        try {
          await this.integrateTool(suggestion.tool);
        } catch (error) {
          this.log('error', `Failed to auto-integrate tool ${suggestion.tool.id}: ${error.message}`);
        }
      }
    }
  }

  async integrateTool(discovery) {
    this.log('info', `🔧 Integrating tool: ${discovery.title}`);
    
    // Create backup
    if (this.config.integration.backupBeforeChanges) {
      await this.createBackup();
    }
    
    // Generate integration code
    const integrationCode = await this.generateIntegrationCode(discovery);
    
    // Test integration
    if (this.config.integration.testBeforeIntegration) {
      const testResult = await this.testIntegration(integrationCode);
      if (!testResult.success) {
        throw new Error(`Integration test failed: ${testResult.error}`);
      }
    }
    
    // Apply integration
    await this.applyIntegration(discovery, integrationCode);
    
    // Mark as integrated
    this.integratedTools.set(discovery.id, {
      ...discovery,
      integratedAt: Date.now(),
      integrationCode
    });
    
    this.stats.toolsIntegrated++;
    
    this.log('info', `✅ Successfully integrated tool: ${discovery.title}`);
  }

  async createBackup() {
    const backupPath = path.join(this.config.paths.backups, `backup-${Date.now()}`);
    await fs.mkdir(backupPath, { recursive: true });
    
    // Copy relevant files
    const filesToBackup = ['package.json', 'automation/', 'scripts/'];
    
    for (const file of filesToBackup) {
      try {
        const sourcePath = path.join(this.config.paths.projectRoot, file);
        const destPath = path.join(backupPath, file);
        
        if (await this.fileExists(sourcePath)) {
          await this.copyFile(sourcePath, destPath);
        }
      } catch (error) {
        this.log('warn', `Failed to backup ${file}: ${error.message}`);
      }
    }
  }

  async generateIntegrationCode(discovery) {
    // Generate integration code based on discovery
    const template = this.getIntegrationTemplate(discovery);
    
    return template
      .replace('{{TOOL_NAME}}', discovery.title)
      .replace('{{TOOL_URL}}', discovery.url)
      .replace('{{TOOL_DESCRIPTION}}', discovery.description)
      .replace('{{CATEGORY}}', discovery.analysis.category);
  }

  getIntegrationTemplate(discovery) {
    const category = discovery.analysis.category;
    
    const templates = {
      'code-generation': `
// AI Code Generation Integration
const ${discovery.title.replace(/\s+/g, '').toLowerCase()} = {
  name: '{{TOOL_NAME}}',
  url: '{{TOOL_URL}}',
  description: '{{TOOL_DESCRIPTION}}',
  
  async generateCode(prompt, context) {
    // Implementation for {{TOOL_NAME}}
    return { code: '', success: true };
  }
};

module.exports = ${discovery.title.replace(/\s+/g, '').toLowerCase()};
      `,
      'code-review': `
// AI Code Review Integration
const ${discovery.title.replace(/\s+/g, '').toLowerCase()} = {
  name: '{{TOOL_NAME}}',
  url: '{{TOOL_URL}}',
  description: '{{TOOL_DESCRIPTION}}',
  
  async reviewCode(code, filePath) {
    // Implementation for {{TOOL_NAME}}
    return { issues: [], suggestions: [], success: true };
  }
};

module.exports = ${discovery.title.replace(/\s+/g, '').toLowerCase()};
      `,
      'default': `
// AI Tool Integration
const ${discovery.title.replace(/\s+/g, '').toLowerCase()} = {
  name: '{{TOOL_NAME}}',
  url: '{{TOOL_URL}}',
  description: '{{TOOL_DESCRIPTION}}',
  
  async process(input) {
    // Implementation for {{TOOL_NAME}}
    return { result: '', success: true };
  }
};

module.exports = ${discovery.title.replace(/\s+/g, '').toLowerCase()};
      `
    };
    
    return templates[category] || templates.default;
  }

  async testIntegration(integrationCode) {
    // Test the integration code
    try {
      // Create temporary test file
      const testFile = path.join(this.config.paths.integrations, 'test-integration.js');
      await fs.writeFile(testFile, integrationCode);
      
      // Test syntax
      const syntaxCheck = execSync(`node -c ${testFile}`, { encoding: 'utf8' });
      
      // Clean up
      await fs.unlink(testFile);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async applyIntegration(discovery, integrationCode) {
    // Apply the integration
    const integrationFile = path.join(this.config.paths.integrations, `${discovery.id}.js`);
    await fs.writeFile(integrationFile, integrationCode);
    
    // Update package.json if needed
    await this.updatePackageJson(discovery);
    
    // Update automation system
    await this.updateAutomationSystem(discovery);
  }

  async updatePackageJson(discovery) {
    // Update package.json with new dependencies if needed
    const packagePath = path.join(this.config.paths.projectRoot, 'package.json');
    
    try {
      const packageJson = JSON.parse(await fs.readFile(packagePath, 'utf8'));
      
      // Add new script if needed
      const scriptName = discovery.title.replace(/\s+/g, '-').toLowerCase();
      packageJson.scripts[`ai:${scriptName}`] = `node integrations/${discovery.id}.js`;
      
      await fs.writeFile(packagePath, JSON.stringify(packageJson, null, 2));
    } catch (error) {
      this.log('warn', `Failed to update package.json: ${error.message}`);
    }
  }

  async updateAutomationSystem(discovery) {
    // Update the automation system to include the new tool
    const automationFile = path.join(this.config.paths.projectRoot, 'automation', 'enhanced-automation-system.js');
    
    try {
      let automationCode = await fs.readFile(automationFile, 'utf8');
      
      // Add import for new tool
      const importStatement = `const ${discovery.title.replace(/\s+/g, '').toLowerCase()} = require('../integrations/${discovery.id}.js');\n`;
      
      if (!automationCode.includes(importStatement)) {
        automationCode = importStatement + automationCode;
        await fs.writeFile(automationFile, automationCode);
      }
    } catch (error) {
      this.log('warn', `Failed to update automation system: ${error.message}`);
    }
  }

  async generateDiscoveryReport() {
    const report = {
      timestamp: Date.now(),
      stats: this.stats,
      recentDiscoveries: this.discoveryHistory.slice(-10),
      topDiscoveries: Array.from(this.discoveredTools.values())
        .sort((a, b) => b.analysis.impact - a.analysis.impact)
        .slice(0, 10),
      integrationSuggestions: await this.generateIntegrationSuggestions(Array.from(this.discoveredTools.values())),
      summary: {
        totalTools: this.discoveredTools.size,
        integratedTools: this.integratedTools.size,
        averageImpact: this.calculateAverageImpact(),
        topCategories: this.getTopCategories()
      }
    };

    const reportPath = path.join(this.config.paths.discoveries, `discovery-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    this.log('info', `Generated discovery report: ${reportPath}`);
    return report;
  }

  calculateAverageImpact() {
    const tools = Array.from(this.discoveredTools.values());
    if (tools.length === 0) return 0;
    
    const totalImpact = tools.reduce((sum, tool) => sum + tool.analysis.impact, 0);
    return totalImpact / tools.length;
  }

  getTopCategories() {
    const categories = {};
    
    for (const tool of this.discoveredTools.values()) {
      const category = tool.analysis.category;
      categories[category] = (categories[category] || 0) + 1;
    }
    
    return Object.entries(categories)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([category, count]) => ({ category, count }));
  }

  calculateRelevance(result, keyword) {
    // Calculate relevance score based on keyword matching
    const text = `${result.title} ${result.description}`.toLowerCase();
    const keywordLower = keyword.toLowerCase();
    
    let score = 0;
    
    // Exact keyword match
    if (text.includes(keywordLower)) {
      score += 0.5;
    }
    
    // Partial keyword match
    const keywordWords = keywordLower.split(' ');
    for (const word of keywordWords) {
      if (text.includes(word)) {
        score += 0.1;
      }
    }
    
    // AI-related terms
    const aiTerms = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'neural', 'deep learning'];
    for (const term of aiTerms) {
      if (text.includes(term)) {
        score += 0.2;
      }
    }
    
    return Math.min(1, Math.max(0, score));
  }

  generateId(url) {
    // Generate a unique ID based on URL
    return Buffer.from(url).toString('base64').replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async copyFile(source, dest) {
    const content = await fs.readFile(source);
    await fs.writeFile(dest, content);
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] [AI-DISCOVERY] ${message}`;
    
    logger.info(logMessage);
    
    // Save to log file
    const logPath = path.join(this.config.paths.logs, 'ai-discovery.log');
    fs.appendFile(logPath, logMessage + '\n').catch(() => {});
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      currentDiscovery: this.currentDiscovery,
      stats: this.stats,
      discoveredTools: this.discoveredTools.size,
      integratedTools: this.integratedTools.size,
      lastDiscovery: this.stats.lastDiscovery
    };
  }
}

// CLI Interface
async function main() {
  const automation = new AIDiscoveryAutomation();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      await automation.start();
      break;
    case 'stop':
      await automation.stop();
      break;
    case 'status':
      logger.info(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'discover':
      await automation.performQuickDiscovery();
      break;
    case 'deep':
      await automation.performDeepDiscovery();
      break;
    default:
      logger.info('Usage: node ai-discovery-automation.cjs [start|stop|status|discover|deep]');
      break;
  }
}

if (require.main === module) {
  main().catch(error => {
    logger.error('AI Discovery Automation failed:', error.message);
    process.exit(1);
  });
}

module.exports = AIDiscoveryAutomation; 

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

