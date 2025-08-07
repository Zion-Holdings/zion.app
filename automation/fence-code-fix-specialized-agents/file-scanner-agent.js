#!/usr/bin/env node

/**
 * File Scanner Agent
 * Specialized agent for scanning files and detecting fence code block errors
 */

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class FileScannerAgent {
  constructor(config = {}) {
    this.config = {
      scanInterval: 30000,
      fileExtensions: ['.js', '.ts', '.jsx', '.tsx', '.md', '.mdx'],
      excludePatterns: ['node_modules', '.git', '.next', 'dist', 'build'],
      errorPatterns: [
        /```[\s\S]*?```/g,
        /`[^`]*`/g,
        /```[\w]*\n[\s\S]*?\n```/g,
        /```[\w]*\n[\s\S]*?```/g
      ],
      ...config
    };
    
    this.isRunning = false;
    this.stats = {
      filesScanned: 0,
      errorsFound: 0,
      lastScan: null,
      startTime: Date.now()
    };
    
    this.watcher = null;
    this.errorQueue = [];
  }

  async start() {
    if (this.isRunning) {
      this.log('Agent is already running');
      return;
    }

    this.isRunning = true;
    this.log('Starting File Scanner Agent');

    // Initial scan
    await this.performFullScan();

    // Start file watching
    this.startFileWatching();

    // Start periodic scanning
    setInterval(() => {
      this.performFullScan();
    }, this.config.scanInterval);

    this.log('File Scanner Agent started successfully');
  }

  async stop() {
    this.isRunning = false;
    
    if (this.watcher) {
      await this.watcher.close();
    }
    
    this.log('File Scanner Agent stopped');
  }

  async performFullScan() {
    try {
      this.log('Starting full file scan...');
      const startTime = Date.now();
      
      const files = await this.getAllFiles();
      let totalErrors = 0;
      
      for (const file of files) {
        const errors = await this.scanFile(file);
        if (errors.length > 0) {
          totalErrors += errors.length;
          this.errorQueue.push({
            file,
            errors,
            timestamp: Date.now()
          });
        }
      }
      
      this.stats.filesScanned += files.length;
      this.stats.errorsFound += totalErrors;
      this.stats.lastScan = Date.now();
      
      const scanTime = Date.now() - startTime;
      this.log(`Full scan completed: ${files.length} files scanned, ${totalErrors} errors found in ${scanTime}ms`);
      
      // Process error queue
      await this.processErrorQueue();
      
    } catch (error) {
      this.log(`Full scan error: ${error.message}`, 'error');
    }
  }

  startFileWatching() {
    const rootDir = process.cwd();
    
    this.watcher = chokidar.watch(rootDir, {
      ignored: this.config.excludePatterns.map(pattern => `**/${pattern}/**`),
      persistent: true,
      ignoreInitial: true
    });

    this.watcher
      .on('add', (filePath) => this.handleFileChange(filePath, 'add'))
      .on('change', (filePath) => this.handleFileChange(filePath, 'change'))
      .on('unlink', (filePath) => this.handleFileChange(filePath, 'delete'))
      .on('error', (error) => this.log(`File watcher error: ${error.message}`, 'error'));
  }

  async handleFileChange(filePath, event) {
    const ext = path.extname(filePath);
    if (!this.config.fileExtensions.includes(ext)) {
      return;
    }

    this.log(`File ${event}: ${filePath}`);

    if (event === 'add' || event === 'change') {
      try {
        const errors = await this.scanFile(filePath);
        if (errors.length > 0) {
          this.errorQueue.push({
            file: filePath,
            errors,
            timestamp: Date.now()
          });
          
          this.stats.errorsFound += errors.length;
          this.log(`Found ${errors.length} errors in ${filePath}`);
          
          // Process queue immediately for new/changed files
          await this.processErrorQueue();
        }
      } catch (error) {
        this.log(`Error scanning file ${filePath}: ${error.message}`, 'error');
      }
    }
  }

  async getAllFiles() {
    const files = [];
    const rootDir = process.cwd();
    
    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          
          try {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
              const shouldExclude = this.config.excludePatterns.some(pattern => 
                fullPath.includes(pattern)
              );
              
              if (!shouldExclude) {
                walkDir(fullPath);
              }
            } else if (stat.isFile()) {
              const ext = path.extname(fullPath);
              if (this.config.fileExtensions.includes(ext)) {
                files.push(fullPath);
              }
            }
          } catch (error) {
            // Skip files/directories that can't be accessed
            this.log(`Skipping ${fullPath}: ${error.message}`, 'warn');
          }
        }
      } catch (error) {
        this.log(`Error reading directory ${dir}: ${error.message}`, 'error');
      }
    };
    
    walkDir(rootDir);
    return files;
  }

  async scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return this.detectFenceErrors(content, filePath);
    } catch (error) {
      this.log(`Error reading file ${filePath}: ${error.message}`, 'error');
      return [];
    }
  }

  detectFenceErrors(content, filePath) {
    const errors = [];
    
    // Check for unclosed fence blocks
    const fenceMatches = content.match(/```[\w]*\n/g);
    const closingMatches = content.match(/\n```/g);
    
    if (fenceMatches && closingMatches) {
      if (fenceMatches.length !== closingMatches.length) {
        errors.push({
          type: 'missing-closing-fence',
          line: this.findLineNumber(content, content.lastIndexOf('```')),
          description: 'Unclosed fence code block',
          severity: 'high'
        });
      }
    } else if (fenceMatches && !closingMatches) {
      errors.push({
        type: 'missing-closing-fence',
        line: this.findLineNumber(content, content.lastIndexOf('```')),
        description: 'Missing closing fence',
        severity: 'high'
      });
    }
    
    // Check for malformed fences
    const malformedFences = content.match(/```[^\n]*[^a-zA-Z0-9\n][^\n]*\n/g);
    if (malformedFences) {
      errors.push({
        type: 'malformed-fence',
        line: this.findLineNumber(content, content.indexOf('```')),
        description: 'Malformed fence opening',
        severity: 'medium'
      });
    }
    
    // Check for nested fences
    const nestedFences = content.match(/```[\s\S]*?```[\s\S]*?```/g);
    if (nestedFences) {
      errors.push({
        type: 'nested-fences',
        line: this.findLineNumber(content, content.indexOf('```')),
        description: 'Nested fence code blocks detected',
        severity: 'medium'
      });
    }
    
    // Check for invalid language tags
    const invalidLanguageTags = content.match(/```[^\n]*[^a-zA-Z0-9\n][^\n]*\n/g);
    if (invalidLanguageTags) {
      errors.push({
        type: 'invalid-language-tag',
        line: this.findLineNumber(content, content.indexOf('```')),
        description: 'Invalid language tag in fence block',
        severity: 'low'
      });
    }
    
    // Check for inline code issues
    const inlineCodeIssues = content.match(/`[^`]*`/g);
    if (inlineCodeIssues) {
      for (const match of inlineCodeIssues) {
        if (match.length < 3) {
          errors.push({
            type: 'malformed-inline-code',
            line: this.findLineNumber(content, content.indexOf(match)),
            description: 'Malformed inline code block',
            severity: 'low'
          });
        }
      }
    }
    
    return errors;
  }

  findLineNumber(content, position) {
    return content.substring(0, position).split('\n').length;
  }

  async processErrorQueue() {
    if (this.errorQueue.length === 0) {
      return;
    }

    this.log(`Processing ${this.errorQueue.length} error items...`);
    
    const items = [...this.errorQueue];
    this.errorQueue = [];
    
    for (const item of items) {
      try {
        // Emit error event for other agents to handle
        this.emit('errors-found', {
          file: item.file,
          errors: item.errors,
          timestamp: item.timestamp
        });
        
        this.log(`Queued ${item.errors.length} errors from ${item.file} for processing`);
      } catch (error) {
        this.log(`Error processing queue item: ${error.message}`, 'error');
      }
    }
  }

  getStats() {
    return {
      ...this.stats,
      queueLength: this.errorQueue.length,
      isRunning: this.isRunning
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [FileScannerAgent] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Write to log file
    const logDir = path.join(__dirname, '..', 'fence-code-fix-logs');
    const logFile = path.join(logDir, 'file-scanner-agent.log');
    
    try {
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      fs.appendFileSync(logFile, logMessage + '\n');
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  // Event emitter simulation
  emit(event, data) {
    // This would be replaced with actual event emitter in the factory
    if (this.onErrorFound) {
      this.onErrorFound(data);
    }
  }
}

// Main execution
if (require.main === module) {
  const agent = new FileScannerAgent();
  
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

module.exports = FileScannerAgent;
