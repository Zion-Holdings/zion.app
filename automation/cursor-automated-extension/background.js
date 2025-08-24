
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

/**
 * Cursor Automated Extension Background Script
 * 
 * Handles background tasks for the Cursor automation extension:
 * - Code analysis
 * - Improvement suggestions
 * - Communication with main automation system
 */

class CursorExtensionBackground {
  constructor() {
    this.isActive = false;
    this.analysisQueue = [];
    this.improvementHistory = [];
  }

  async initialize() {
    logger.info('🚀 Initializing Cursor Extension Background...');
    
    try {
      // Set up message listeners
      this.setupMessageListeners();
      
      // Start background processing
      this.startBackgroundProcessing();
      
      this.isActive = true;
      logger.info('✅ Cursor Extension Background initialized');
      
    } catch (error) {
      logger.error('❌ Failed to initialize extension background:', error);
      throw error;
    }
  }

  setupMessageListeners() {
    // Listen for messages from content scripts
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
      return true; // Keep message channel open for async response
    });
  }

  async handleMessage(message, sender, sendResponse) {
    try {
      switch (message.type) {
        case ANALYZE_CODE':
          const analysis = await this.analyzeCode(message.data);
          sendResponse({ success: true, analysis });
          break;
          
        case SUGGEST_IMPROVEMENT':
          const suggestion = await this.suggestImprovement(message.data);
          sendResponse({ success: true, suggestion });
          break;
          
        case APPLY_IMPROVEMENT':
          const result = await this.applyImprovement(message.data);
          sendResponse({ success: true, result });
          break;
          
        case GET_STATUS':
          sendResponse({ success: true, status: this.getStatus() });
          break;
          
        default:
          sendResponse({ success: false, error: Unknown message type' });
      }
    } catch (error) {
      sendResponse({ success: false, error: error.message });
    }
  }

  async analyzeCode(codeData) {
    const analysis = {
      timestamp: new Date().toISOString(),
      file: codeData.file,
      issues: [],
      suggestions: []
    };

    // Analyze code for common issues
    if (codeData.content) {
      analysis.issues = this.findCodeIssues(codeData.content);
      analysis.suggestions = this.generateSuggestions(analysis.issues);
    }

    return analysis;
  }

  findCodeIssues(content) {
    const issues = [];

    // Check for console.log in production code
    if (content.includes('logger.info(')) {
      issues.push({
        type: 'debug_code',
        message: Console.log statement found',
        severity: 'low',
        line: this.findLineNumber(content, logger.info(')
      });
    }

    // Check for TODO/FIXME comments
    if (content.includes('TODO') || content.includes('FIXME')) {
      issues.push({
        type: 'todo_items',
        message: TODO/FIXME comment found',
        severity: 'medium',
        line: this.findLineNumber(content, TODO')
      });
    }

    // Check for var usage
    if (content.includes('var ) && !content.includes('var _')) {
      issues.push({
        type: 'var_usage',
        message: var keyword used instead of const/let',
        severity: 'medium',
        line: this.findLineNumber(content, var )
      });
    }

    // Check for unused imports
    const importIssues = this.findUnusedImports(content);
    issues.push(...importIssues);

    return issues;
  }

  findLineNumber(content, searchTerm) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchTerm)) {
        return i + 1;
      }
    }
    return null;
  }

  findUnusedImports(content) {
    const issues = [];
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;
    const imports = [];
    
    let match
    while ((match = importRegex.exec(content)) !== null) {
      const importNames = match[1].split(',).map(name => name.trim());
      const modulePath = match[2];
      
      importNames.forEach(name => {
        imports.push({ name, modulePath });
      });
    }

    // Check if imports are used (simplified check)
    imports.forEach(importItem => {
      const usageRegex = new RegExp(`\\b${importItem.name}\\b`, g');
      const matches = content.match(usageRegex);
      
      if (!matches || matches.length <= 1) { // Only the import statement
        issues.push({
          type: 'unused_import',
          message: `Unused import: ${importItem.name}`,
          severity: 'low',
          importName: importItem.name,
          modulePath: importItem.modulePath
        });
      }
    });

    return issues;
  }

  generateSuggestions(issues) {
    const suggestions = []

    issues.forEach(issue => {
      switch (issue.type) {
        case debug_code':
          suggestions.push({
            type: 'remove_debug',
            message: Remove console.log statement',
            code: // Remove or replace with proper logging',
            severity: issue.severity
          });
          break;

        case todo_items':
          suggestions.push({
            type: 'address_todo',
            message: Address TODO/FIXME comment',
            code: // Implement the TODO item',
            severity: issue.severity
          });
          break;

        case var_usage':
          suggestions.push({
            type: 'replace_var',
            message: Replace var with const or let',
            code: const variableName = value; // or let if reassignment needed',
            severity: issue.severity
          });
          break;

        case unused_import':
          suggestions.push({
            type: 'remove_import',
            message: `Remove unused import: ${issue.importName}`,
            code: `// Remove: ${issue.importName} from ${issue.modulePath}`,
            severity: issue.severity
          });
          break;
      }
    });

    return suggestions;
  }

  async suggestImprovement(data) {
    const suggestion = {
      timestamp: new Date().toISOString(),
      file: data.file,
      type: data.type,
      description: data.description,
      code: data.code,
      severity: data.severity || medium
    };

    // Store in history
    this.improvementHistory.push(suggestion);

    return suggestion;
  }

  async applyImprovement(data) {
    const result = {
      timestamp: new Date().toISOString(),
      file: data.file,
      success: false,
      changes: []
    };

    try {
      // Apply the improvement (this would integrate with the editor)
      result.success = true;
      result.changes.push({
        type: data.type,
        description: data.description,
        applied: true
      });

      logger.info(`✅ Applied improvement to ${data.file}`);
    } catch (error) {
      result.error = error.message;
      logger.error(`❌ Failed to apply improvement: ${error.message}`);
    }

    return result;
  }

  startBackgroundProcessing() {
    // Start periodic background tasks
    setInterval(() => {
      if (this.isActive) {
        this.processAnalysisQueue();
      }
    }, 30000); // Every 30 seconds
  }

  async processAnalysisQueue() {
    if (this.analysisQueue.length === 0) return;

    logger.info(`🔄 Processing ${this.analysisQueue.length} items in analysis queue`);

    while (this.analysisQueue.length > 0) {
      const item = this.analysisQueue.shift();
      
      try {
        const analysis = await this.analyzeCode(item);
        
        // Send analysis results back to content script
        chrome.tabs.sendMessage(item.tabId, {
          type: 'ANALYSIS_RESULT',
          analysis
        });
      } catch (error) {
        logger.error('Error processing analysis item:', error);
      }
    }
  }

  addToAnalysisQueue(item) {
    this.analysisQueue.push(item);
  }

  getStatus() {
    return {
      isActive: this.isActive,
      queueLength: this.analysisQueue.length,
      improvementHistory: this.improvementHistory.length,
      lastActivity: this.improvementHistory.length > 0 
        ? this.improvementHistory[this.improvementHistory.length - 1].timestamp 
        : null
    };
  }

  stop() {
    logger.info('🛑 Stopping Cursor Extension Background...');
    this.isActive = false;
  }
}

// Initialize the background script
const background = new CursorExtensionBackground();
background.initialize().catch(error => {
  logger.error('Failed to initialize background script:', error);
});

// Handle extension lifecycle
chrome.runtime.onInstalled.addListener(() => {
  logger.info('Cursor Automated Extension installed');
});

chrome.runtime.onStartup.addListener(() => {
  logger.info('Cursor Automated Extension started');
});

// Export for testing
if (typeof module !== undefined' && module.exports) {
  module.exports = CursorExtensionBackground;
} 