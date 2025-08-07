#!/usr/bin/env node

/**
 * Code Fixer Agent
 * Specialized agent for fixing fence code block errors
 */

const fs = require('fs');
const path = require('path');

class CodeFixerAgent {
  constructor(config = {}) {
    this.config = {
      createBackup: true,
      validateAfterFix: true,
      maxRetries: 3,
      ...config
    };
    
    this.isRunning = false;
    this.stats = {
      filesFixed: 0,
      errorsFixed: 0,
      backupsCreated: 0,
      startTime: Date.now()
    };
    
    this.fixQueue = [];
    this.fixStrategies = {
      'missing-closing-fence': this.fixMissingClosingFence.bind(this),
      'malformed-fence': this.fixMalformedFence.bind(this),
      'unclosed-code-block': this.fixUnclosedCodeBlock.bind(this),
      'invalid-language-tag': this.fixInvalidLanguageTag.bind(this),
      'nested-fences': this.fixNestedFences.bind(this),
      'malformed-inline-code': this.fixMalformedInlineCode.bind(this)
    };
  }

  async start() {
    if (this.isRunning) {
      this.log('Agent is already running');
      return;
    }

    this.isRunning = true;
    this.log('Starting Code Fixer Agent');

    // Start processing queue
    setInterval(() => {
      this.processFixQueue();
    }, 1000);

    this.log('Code Fixer Agent started successfully');
  }

  async stop() {
    this.isRunning = false;
    this.log('Code Fixer Agent stopped');
  }

  async queueFix(filePath, errors) {
    this.fixQueue.push({
      file: filePath,
      errors,
      timestamp: Date.now(),
      retries: 0
    });
    
    this.log(`Queued ${errors.length} errors from ${filePath} for fixing`);
  }

  async processFixQueue() {
    if (this.fixQueue.length === 0) {
      return;
    }

    const item = this.fixQueue.shift();
    
    try {
      await this.fixFile(item.file, item.errors);
      this.stats.filesFixed++;
    } catch (error) {
      this.log(`Error fixing file ${item.file}: ${error.message}`, 'error');
      
      // Retry logic
      if (item.retries < this.config.maxRetries) {
        item.retries++;
        this.fixQueue.push(item);
        this.log(`Retrying fix for ${item.file} (attempt ${item.retries})`);
      } else {
        this.log(`Max retries reached for ${item.file}`, 'error');
      }
    }
  }

  async fixFile(filePath, errors) {
    try {
      // Create backup if enabled
      if (this.config.createBackup) {
        await this.createBackup(filePath);
      }

      // Read file content
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Apply fixes for each error
      for (const error of errors) {
        const fixStrategy = this.fixStrategies[error.type];
        if (fixStrategy) {
          const fixedContent = await fixStrategy(content, error);
          if (fixedContent !== content) {
            content = fixedContent;
            modified = true;
            this.stats.errorsFixed++;
            this.log(`Fixed ${error.type} error in ${filePath} at line ${error.line}`);
          }
        } else {
          this.log(`No fix strategy found for error type: ${error.type}`, 'warn');
        }
      }

      // Write fixed content back to file
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Successfully fixed ${errors.length} errors in ${filePath}`);

        // Validate after fix if enabled
        if (this.config.validateAfterFix) {
          await this.validateFix(filePath);
        }
      } else {
        this.log(`No fixes applied to ${filePath}`);
      }

    } catch (error) {
      throw new Error(`Failed to fix file ${filePath}: ${error.message}`);
    }
  }

  async fixMissingClosingFence(content, error) {
    // Find the last opening fence and add closing fence
    const lastFenceIndex = content.lastIndexOf('```');
    if (lastFenceIndex !== -1) {
      // Check if there's already a closing fence after this
      const afterLastFence = content.substring(lastFenceIndex + 3);
      if (!afterLastFence.includes('```')) {
        return content.substring(0, lastFenceIndex + 3) + '\n```' + afterLastFence;
      }
    }
    return content;
  }

  async fixMalformedFence(content, error) {
    // Fix malformed fence by standardizing it
    return content.replace(/```[^\n]*\n/g, (match) => {
      const language = match.slice(3, -1).trim();
      if (/^[a-zA-Z0-9]+$/.test(language)) {
        return match; // Valid language tag
      }
      return '```\n'; // Remove invalid language tag
    });
  }

  async fixUnclosedCodeBlock(content, error) {
    // Find unclosed code blocks and add closing fences
    let fixedContent = content;
    let depth = 0;
    let result = '';
    let inCodeBlock = false;
    
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          depth++;
        } else {
          inCodeBlock = false;
          depth--;
        }
      }
      
      result += line + '\n';
    }
    
    // Add missing closing fences
    while (depth > 0) {
      result += '```\n';
      depth--;
    }
    
    return result;
  }

  async fixInvalidLanguageTag(content, error) {
    // Remove or fix invalid language tags
    return content.replace(/```[^\n]*\n/g, (match) => {
      const language = match.slice(3, -1).trim();
      if (/^[a-zA-Z0-9]+$/.test(language)) {
        return match; // Valid language tag
      }
      return '```\n'; // Remove invalid language tag
    });
  }

  async fixNestedFences(content, error) {
    // Fix nested fences by properly structuring them
    let fixedContent = content;
    let depth = 0;
    let result = '';
    let inCodeBlock = false;
    
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '```') {
        if (!inCodeBlock) {
          inCodeBlock = true;
          depth++;
          result += '```\n';
        } else {
          inCodeBlock = false;
          depth--;
          result += '```\n';
        }
      } else {
        result += line + '\n';
      }
    }
    
    // Ensure all code blocks are properly closed
    while (depth > 0) {
      result += '```\n';
      depth--;
    }
    
    return result;
  }

  async fixMalformedInlineCode(content, error) {
    // Fix malformed inline code blocks
    return content.replace(/`[^`]*`/g, (match) => {
      if (match.length < 3) {
        return '`' + match.slice(1, -1) + '`';
      }
      return match;
    });
  }

  async createBackup(filePath) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(__dirname, '..', 'fence-code-fix-backups');
      const fileName = path.basename(filePath);
      const backupPath = path.join(backupDir, `${fileName}.${timestamp}.backup`);
      
      // Ensure backup directory exists
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      fs.copyFileSync(filePath, backupPath);
      this.stats.backupsCreated++;
      this.log(`Backup created: ${backupPath}`);
    } catch (error) {
      this.log(`Failed to create backup for ${filePath}: ${error.message}`, 'error');
    }
  }

  async validateFix(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Basic validation - check for balanced fences
      const openingFences = (content.match(/```/g) || []).length;
      const closingFences = (content.match(/```/g) || []).length;
      
      if (openingFences !== closingFences) {
        this.log(`Validation failed for ${filePath}: Unbalanced fences`, 'warn');
        return false;
      }
      
      // Check for malformed fences
      const malformedFences = content.match(/```[^\n]*[^a-zA-Z0-9\n][^\n]*\n/g);
      if (malformedFences) {
        this.log(`Validation failed for ${filePath}: Malformed fences detected`, 'warn');
        return false;
      }
      
      this.log(`Validation passed for ${filePath}`);
      return true;
    } catch (error) {
      this.log(`Validation error for ${filePath}: ${error.message}`, 'error');
      return false;
    }
  }

  getStats() {
    return {
      ...this.stats,
      queueLength: this.fixQueue.length,
      isRunning: this.isRunning
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [CodeFixerAgent] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Write to log file
    const logDir = path.join(__dirname, '..', 'fence-code-fix-logs');
    const logFile = path.join(logDir, 'code-fixer-agent.log');
    
    try {
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      fs.appendFileSync(logFile, logMessage + '\n');
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }
}

// Main execution
if (require.main === module) {
  const agent = new CodeFixerAgent();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await agent.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await agent.stop();
    process.exit(0);
  });
  
  // Start the agent
  agent.start();
}

module.exports = CodeFixerAgent;
