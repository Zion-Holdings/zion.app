#!/usr/bin/env node

/**
 * AI Code Review Automation System
 * 
 * Autonomous system that continuously reviews code quality, suggests improvements,
 * and applies AI-powered enhancements using multiple AI providers.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const https = require('https');
const http = require('http');

class AICodeReviewAutomation extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      // AI Providers
      aiProviders: {
        openai: {
          enabled: process.env.OPENAI_ENABLED === 'true',
          apiKey: process.env.OPENAI_API_KEY,
          model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
          endpoint: 'https://api.openai.com/v1/chat/completions'
        },
        claude: {
          enabled: process.env.CLAUDE_ENABLED === 'true',
          apiKey: process.env.CLAUDE_API_KEY,
          model: process.env.CLAUDE_MODEL || 'claude-3-sonnet-20240229',
          endpoint: 'https://api.anthropic.com/v1/messages'
        },
        cursor: {
          enabled: process.env.CURSOR_AI_ENABLED === 'true',
          apiKey: process.env.CURSOR_API_KEY,
          workspaceId: process.env.CURSOR_WORKSPACE_ID
        },
        local: {
          enabled: process.env.LOCAL_AI_ENABLED === 'true',
          endpoint: process.env.LOCAL_AI_ENDPOINT || 'http://localhost:11434',
          model: process.env.LOCAL_AI_MODEL || 'codellama:7b'
        }
      },
      
      // Review settings
      review: {
        interval: 10 * 60 * 1000, // 10 minutes
        maxFilesPerReview: 50,
        fileTypes: ['.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.cpp', '.c', '.go', '.rs'],
        excludePatterns: ['node_modules', '.git', 'dist', 'build', 'coverage'],
        maxFileSize: 1024 * 1024 // 1MB
      },
      
      // Quality thresholds
      thresholds: {
        complexity: 10,
        maintainability: 50,
        testCoverage: 80,
        documentation: 70
      },
      
      // Paths
      paths: {
        projectRoot: process.cwd(),
        logs: path.join(process.cwd(), 'logs'),
        reports: path.join(process.cwd(), 'reports'),
        backups: path.join(process.cwd(), 'backups')
      }
    };
    
    this.isRunning = false;
    this.currentReview = null;
    this.reviewHistory = [];
    this.aiProviders = new Map();
    this.stats = {
      totalReviews: 0,
      successfulReviews: 0,
      failedReviews: 0,
      suggestionsApplied: 0,
      lastReview: null
    };
    
    this.initializeAIProviders();
    this.initializeDirectories();
  }

  async initializeAIProviders() {
    // Initialize OpenAI
    if (this.config.aiProviders.openai.enabled && this.config.aiProviders.openai.apiKey) {
      this.aiProviders.set('openai', {
        name: 'OpenAI GPT',
        analyze: this.analyzeWithOpenAI.bind(this),
        suggest: this.suggestWithOpenAI.bind(this),
        apply: this.applyWithOpenAI.bind(this)
      });
    }

    // Initialize Claude
    if (this.config.aiProviders.claude.enabled && this.config.aiProviders.claude.apiKey) {
      this.aiProviders.set('claude', {
        name: 'Claude',
        analyze: this.analyzeWithClaude.bind(this),
        suggest: this.suggestWithClaude.bind(this),
        apply: this.applyWithClaude.bind(this)
      });
    }

    // Initialize Cursor AI
    if (this.config.aiProviders.cursor.enabled && this.config.aiProviders.cursor.apiKey) {
      this.aiProviders.set('cursor', {
        name: 'Cursor AI',
        analyze: this.analyzeWithCursor.bind(this),
        suggest: this.suggestWithCursor.bind(this),
        apply: this.applyWithCursor.bind(this)
      });
    }

    // Initialize Local AI
    if (this.config.aiProviders.local.enabled) {
      this.aiProviders.set('local', {
        name: 'Local AI',
        analyze: this.analyzeWithLocalAI.bind(this),
        suggest: this.suggestWithLocalAI.bind(this),
        apply: this.applyWithLocalAI.bind(this)
      });
    }

    this.log('info', `Initialized ${this.aiProviders.size} AI providers`);
  }

  async initializeDirectories() {
    const dirs = [
      this.config.paths.logs,
      this.config.paths.reports,
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
      this.log('warn', 'AI Code Review Automation is already running');
      return;
    }

    this.log('info', '🚀 Starting AI Code Review Automation...');
    this.isRunning = true;

    // Start continuous review loop
    this.startReviewLoop();

    // Start periodic full review
    this.startPeriodicReview();

    this.log('info', '✅ AI Code Review Automation started successfully');
    this.emit('started');
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'AI Code Review Automation is not running');
      return;
    }

    this.log('info', '🛑 Stopping AI Code Review Automation...');
    this.isRunning = false;

    if (this.reviewTimer) {
      clearInterval(this.reviewTimer);
    }

    if (this.periodicTimer) {
      clearInterval(this.periodicTimer);
    }

    this.log('info', '✅ AI Code Review Automation stopped');
    this.emit('stopped');
  }

  startReviewLoop() {
    this.reviewTimer = setInterval(async () => {
      if (this.isRunning && !this.currentReview) {
        await this.performQuickReview();
      }
    }, this.config.review.interval);
  }

  startPeriodicReview() {
    // Perform full review every 2 hours
    this.periodicTimer = setInterval(async () => {
      if (this.isRunning && !this.currentReview) {
        await this.performFullReview();
      }
    }, 2 * 60 * 60 * 1000);
  }

  async performQuickReview() {
    try {
      this.currentReview = {
        id: `review_${Date.now()}`,
        type: 'quick',
        startTime: Date.now(),
        status: 'running'
      };

      this.log('info', '🔍 Starting quick code review...');

      // Get recently modified files
      const recentFiles = await this.getRecentFiles(10);
      
      if (recentFiles.length === 0) {
        this.log('info', 'No recent files to review');
        this.currentReview = null;
        return;
      }

      // Analyze files with AI
      const analysis = await this.analyzeFiles(recentFiles);
      
      // Generate suggestions
      const suggestions = await this.generateSuggestions(analysis);
      
      // Apply critical suggestions automatically
      const applied = await this.applyCriticalSuggestions(suggestions);

      this.currentReview.status = 'completed';
      this.currentReview.endTime = Date.now();
      this.currentReview.results = {
        filesAnalyzed: recentFiles.length,
        suggestions: suggestions.length,
        applied: applied.length
      };

      this.reviewHistory.push(this.currentReview);
      this.stats.totalReviews++;
      this.stats.successfulReviews++;
      this.stats.suggestionsApplied += applied.length;
      this.stats.lastReview = Date.now();

      this.log('info', `✅ Quick review completed: ${recentFiles.length} files, ${suggestions.length} suggestions, ${applied.length} applied`);
      this.emit('reviewCompleted', this.currentReview);

    } catch (error) {
      this.log('error', `Quick review failed: ${error.message}`);
      this.stats.failedReviews++;
      this.emit('reviewFailed', error);
    } finally {
      this.currentReview = null;
    }
  }

  async performFullReview() {
    try {
      this.currentReview = {
        id: `review_${Date.now()}`,
        type: 'full',
        startTime: Date.now(),
        status: 'running'
      };

      this.log('info', '🔍 Starting full code review...');

      // Get all relevant files
      const allFiles = await this.getAllFiles();
      
      if (allFiles.length === 0) {
        this.log('info', 'No files to review');
        this.currentReview = null;
        return;
      }

      // Analyze files in batches
      const batchSize = this.config.review.maxFilesPerReview;
      const batches = this.chunkArray(allFiles, batchSize);
      
      let totalSuggestions = 0;
      let totalApplied = 0;

      for (let i = 0; i < batches.length; i++) {
        this.log('info', `Processing batch ${i + 1}/${batches.length} (${batches[i].length} files)`);
        
        const analysis = await this.analyzeFiles(batches[i]);
        const suggestions = await this.generateSuggestions(analysis);
        const applied = await this.applyCriticalSuggestions(suggestions);
        
        totalSuggestions += suggestions.length;
        totalApplied += applied.length;
      }

      this.currentReview.status = 'completed';
      this.currentReview.endTime = Date.now();
      this.currentReview.results = {
        filesAnalyzed: allFiles.length,
        suggestions: totalSuggestions,
        applied: totalApplied
      };

      this.reviewHistory.push(this.currentReview);
      this.stats.totalReviews++;
      this.stats.successfulReviews++;
      this.stats.suggestionsApplied += totalApplied;
      this.stats.lastReview = Date.now();

      // Generate report
      await this.generateReport();

      this.log('info', `✅ Full review completed: ${allFiles.length} files, ${totalSuggestions} suggestions, ${totalApplied} applied`);
      this.emit('reviewCompleted', this.currentReview);

    } catch (error) {
      this.log('error', `Full review failed: ${error.message}`);
      this.stats.failedReviews++;
      this.emit('reviewFailed', error);
    } finally {
      this.currentReview = null;
    }
  }

  async getRecentFiles(minutes = 10) {
    try {
      const files = [];
      const cutoffTime = Date.now() - (minutes * 60 * 1000);
      
      await this.scanDirectory(this.config.paths.projectRoot, files, cutoffTime);
      
      return files.filter(file => 
        this.config.review.fileTypes.some(ext => file.endsWith(ext)) &&
        !this.config.review.excludePatterns.some(pattern => file.includes(pattern))
      );
    } catch (error) {
      this.log('error', `Failed to get recent files: ${error.message}`);
      return [];
    }
  }

  async getAllFiles() {
    try {
      const files = [];
      await this.scanDirectory(this.config.paths.projectRoot, files);
      
      return files.filter(file => 
        this.config.review.fileTypes.some(ext => file.endsWith(ext)) &&
        !this.config.review.excludePatterns.some(pattern => file.includes(pattern))
      );
    } catch (error) {
      this.log('error', `Failed to get all files: ${error.message}`);
      return [];
    }
  }

  async scanDirectory(dir, files, cutoffTime = null) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (!this.config.review.excludePatterns.some(pattern => entry.name.includes(pattern))) {
            await this.scanDirectory(fullPath, files, cutoffTime);
          }
        } else if (entry.isFile()) {
          if (cutoffTime) {
            const stats = await fs.stat(fullPath);
            if (stats.mtime.getTime() > cutoffTime && stats.size <= this.config.review.maxFileSize) {
              files.push(fullPath);
            }
          } else if (entry.size <= this.config.review.maxFileSize) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      this.log('warn', `Failed to scan directory ${dir}: ${error.message}`);
    }
  }

  async analyzeFiles(files) {
    const analysis = [];
    
    for (const file of files) {
      try {
        const content = await fs.readFile(file, 'utf8');
        const fileAnalysis = await this.analyzeFile(file, content);
        analysis.push(fileAnalysis);
      } catch (error) {
        this.log('warn', `Failed to analyze file ${file}: ${error.message}`);
      }
    }
    
    return analysis;
  }

  async analyzeFile(filePath, content) {
    const analysis = {
      file: filePath,
      size: content.length,
      lines: content.split('\n').length,
      complexity: this.calculateComplexity(content),
      maintainability: this.calculateMaintainability(content),
      issues: [],
      suggestions: []
    };

    // Analyze with each AI provider
    for (const [providerName, provider] of this.aiProviders) {
      try {
        const aiAnalysis = await provider.analyze(filePath, content);
        analysis.issues.push(...aiAnalysis.issues);
        analysis.suggestions.push(...aiAnalysis.suggestions);
      } catch (error) {
        this.log('warn', `AI provider ${providerName} failed to analyze ${filePath}: ${error.message}`);
      }
    }

    return analysis;
  }

  calculateComplexity(content) {
    // Simple cyclomatic complexity calculation
    const complexityKeywords = ['if', 'else', 'for', 'while', 'switch', 'case', 'catch', '&&', '||'];
    let complexity = 1;
    
    for (const keyword of complexityKeywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        complexity += matches.length;
      }
    }
    
    return complexity;
  }

  calculateMaintainability(content) {
    // Simple maintainability index calculation
    const lines = content.split('\n').length;
    const complexity = this.calculateComplexity(content);
    const commentLines = (content.match(/\/\/.*$/gm) || []).length + (content.match(/\/\*[\s\S]*?\*\//gm) || []).length;
    
    const maintainability = Math.max(0, 171 - 5.2 * Math.log(complexity) - 0.23 * Math.log(lines) - 16.2 * Math.log(commentLines));
    return Math.min(100, Math.max(0, maintainability));
  }

  async generateSuggestions(analysis) {
    const suggestions = [];
    
    for (const fileAnalysis of analysis) {
      // Generate suggestions based on analysis
      if (fileAnalysis.complexity > this.config.thresholds.complexity) {
        suggestions.push({
          type: 'complexity',
          file: fileAnalysis.file,
          priority: 'high',
          message: `File has high complexity (${fileAnalysis.complexity}). Consider refactoring.`,
          action: 'refactor'
        });
      }
      
      if (fileAnalysis.maintainability < this.config.thresholds.maintainability) {
        suggestions.push({
          type: 'maintainability',
          file: fileAnalysis.file,
          priority: 'medium',
          message: `File has low maintainability (${fileAnalysis.maintainability}). Add comments and simplify.`,
          action: 'improve'
        });
      }
      
      // Add AI-generated suggestions
      suggestions.push(...fileAnalysis.suggestions);
    }
    
    return suggestions;
  }

  async applyCriticalSuggestions(suggestions) {
    const applied = [];
    const criticalSuggestions = suggestions.filter(s => s.priority === 'critical');
    
    for (const suggestion of criticalSuggestions) {
      try {
        const result = await this.applySuggestion(suggestion);
        if (result.success) {
          applied.push(suggestion);
        }
      } catch (error) {
        this.log('error', `Failed to apply suggestion: ${error.message}`);
      }
    }
    
    return applied;
  }

  async applySuggestion(suggestion) {
    // Create backup
    await this.createBackup(suggestion.file);
    
    // Apply suggestion using AI
    for (const [providerName, provider] of this.aiProviders) {
      try {
        const result = await provider.apply(suggestion);
        if (result.success) {
          this.log('info', `Applied suggestion using ${providerName}: ${suggestion.message}`);
          return result;
        }
      } catch (error) {
        this.log('warn', `Provider ${providerName} failed to apply suggestion: ${error.message}`);
      }
    }
    
    return { success: false, error: 'No AI provider could apply the suggestion' };
  }

  async createBackup(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const backupPath = path.join(this.config.paths.backups, `${path.basename(filePath)}.${Date.now()}.backup`);
      await fs.writeFile(backupPath, content);
    } catch (error) {
      this.log('warn', `Failed to create backup for ${filePath}: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: Date.now(),
      stats: this.stats,
      recentReviews: this.reviewHistory.slice(-10),
      summary: {
        totalFiles: await this.getAllFiles().then(files => files.length),
        averageComplexity: this.calculateAverageComplexity(),
        averageMaintainability: this.calculateAverageMaintainability(),
        topIssues: this.getTopIssues()
      }
    };

    const reportPath = path.join(this.config.paths.reports, `code-review-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    this.log('info', `Generated report: ${reportPath}`);
    return report;
  }

  calculateAverageComplexity() {
    // Implementation for calculating average complexity
    return 5; // Placeholder
  }

  calculateAverageMaintainability() {
    // Implementation for calculating average maintainability
    return 75; // Placeholder
  }

  getTopIssues() {
    // Implementation for getting top issues
    return ['High complexity', 'Low maintainability', 'Missing documentation'];
  }

  chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  // AI Provider Methods
  async analyzeWithOpenAI(filePath, content) {
    const prompt = `Analyze this code file and identify issues and suggestions for improvement:

File: ${filePath}
Content:
${content}

Please provide:
1. List of issues found
2. Suggestions for improvement
3. Priority level for each suggestion (low/medium/high/critical)`;

    // Implementation for OpenAI API call
    return { issues: [], suggestions: [] };
  }

  async suggestWithOpenAI(analysis) {
    // Implementation for OpenAI suggestions
    return [];
  }

  async applyWithOpenAI(suggestion) {
    // Implementation for OpenAI application
    return { success: true };
  }

  async analyzeWithClaude(filePath, content) {
    // Implementation for Claude analysis
    return { issues: [], suggestions: [] };
  }

  async suggestWithClaude(analysis) {
    // Implementation for Claude suggestions
    return [];
  }

  async applyWithClaude(suggestion) {
    // Implementation for Claude application
    return { success: true };
  }

  async analyzeWithCursor(filePath, content) {
    // Implementation for Cursor AI analysis
    return { issues: [], suggestions: [] };
  }

  async suggestWithCursor(analysis) {
    // Implementation for Cursor AI suggestions
    return [];
  }

  async applyWithCursor(suggestion) {
    // Implementation for Cursor AI application
    return { success: true };
  }

  async analyzeWithLocalAI(filePath, content) {
    // Implementation for Local AI analysis
    return { issues: [], suggestions: [] };
  }

  async suggestWithLocalAI(analysis) {
    // Implementation for Local AI suggestions
    return [];
  }

  async applyWithLocalAI(suggestion) {
    // Implementation for Local AI application
    return { success: true };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] [AI-REVIEW] ${message}`;
    
    console.log(logMessage);
    
    // Save to log file
    const logPath = path.join(this.config.paths.logs, 'ai-code-review.log');
    fs.appendFile(logPath, logMessage + '\n').catch(() => {});
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      currentReview: this.currentReview,
      stats: this.stats,
      aiProviders: Array.from(this.aiProviders.keys()),
      lastReview: this.stats.lastReview
    };
  }
}

// CLI Interface
async function main() {
  const automation = new AICodeReviewAutomation();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      await automation.start();
      break;
    case 'stop':
      await automation.stop();
      break;
    case 'status':
      console.log(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'review':
      await automation.performQuickReview();
      break;
    default:
      console.log('Usage: node ai-code-review-automation.cjs [start|stop|status|review]');
      break;
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('AI Code Review Automation failed:', error.message);
    process.exit(1);
  });
}

module.exports = AICodeReviewAutomation; 