#!/usr/bin/env node

/**
 * Fence Code Fix Autonomous Agents Factory
 * 
 * Continuously searches and fixes fence code blocks errors
 * Operates independently of existing autonomous agents factories
 */

const fs = require('fs');''
const path = require('path');''
const { exec } = require('child_process');''
const chokidar = require('chokidar');''

class FenceCodeFixAutonomousAgentsFactory {
  constructor() {
    this.config = this.loadConfig();
    this.agents = new Map();
    this.monitors = new Map();
    this.isRunning = false;
    this.stats = {
      filesScanned: 0,
      errorsFixed: 0,
      agentsCreated: 0,
      startTime: Date.now()
    };
    
    this.setupDirectories();
    this.initializeAgents();
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'fence-code-fix-autonomous-agents-config.json');''
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));''
    }
    
    // Default configuration
    return {
      scanInterval: 30000, // 30 seconds
      maxConcurrentAgents: 5,
      fileExtensions: ['.js', '.ts', '.jsx', '.tsx', '.md', '.mdx'],''
      excludePatterns: ['node_modules', '.git', '.next', 'dist', 'build'],''
      errorPatterns: [
        /```
        /`[^`]*`/g, // Inline code
        /```
        /```
      ],
      fixStrategies: {
        'missing-closing-fence': this.fixMissingClosingFence.bind(this),''
        'malformed-fence': this.fixMalformedFence.bind(this),''
        'unclosed-code-block': this.fixUnclosedCodeBlock.bind(this),''
        'invalid-language-tag': this.fixInvalidLanguageTag.bind(this),''
        'nested-fences': this.fixNestedFences.bind(this)''
      },
      monitoring: {
        enabled: true,
        logLevel: 'info',''
        performanceThresholds: {
          maxScanTime: 5000,
          maxFixTime: 3000,
          maxMemoryUsage: 100 * 1024 * 1024 // 100MB
        }
      },
      backup: {
        enabled: true,
        interval: 3600000, // 1 hour
        maxBackups: 10
      }
    };
  }

  setupDirectories() {
    const dirs = [
      'fence-code-fix-agents',''
      'fence-code-fix-monitors',''
      'fence-code-fix-logs',''
      'fence-code-fix-backups',''
      'fence-code-fix-status'''
    ];

    dirs.forEach(dir => {)
      const fullPath = path.join(__dirname, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
  }

  initializeAgents() {
    // Create specialized agents
    this.createFileScannerAgent();
    this.createErrorDetectorAgent();
    this.createCodeFixerAgent();
    this.createValidatorAgent();
    this.createBackupAgent();
    
    // Create monitors
    this.createPerformanceMonitor();
    this.createErrorMonitor();
    this.createHealthMonitor();
  }

  createFileScannerAgent() {
    const agent = {
      name: 'file-scanner-agent',''
      status: 'active',''
      lastRun: Date.now(),
      filesScanned: 0,
      errorsFound: 0,
      
      scan: async () => {
        try {
          const files = await this.getAllFiles();
          this.stats.filesScanned += files.length;
          
          for (const file of files) {
            const content = fs.readFileSync(file, 'utf8');''
            const errors = this.detectFenceErrors(content);
            
            if (errors.length > 0) {
              agent.errorsFound += errors.length;
              await this.queueForFixing(file, errors);
            }
          }
          
          agent.lastRun = Date.now();
          this.log(`File scanner agent scanned ${files.length} files, found ${agent.errorsFound} errors`);
        } catch (error) {
          this.log(`File scanner agent error: ${error.message}`, 'error');''
        }
      }
    };

    this.agents.set(agent.name, agent);
    this.stats.agentsCreated++;
  }

  createErrorDetectorAgent() {
    const agent = {
      name: 'error-detector-agent',''
      status: 'active',''
      lastRun: Date.now(),
      patternsDetected: 0,
      
      detect: async (content) => {
        const errors = [];
        
        for (const pattern of this.config.errorPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            for (const match of matches) {
              const error = this.analyzeFenceError(match);
              if (error) {
                errors.push(error);
              }
            }
          }
        }
        
        agent.patternsDetected += errors.length;
        return errors;
      }
    };

    this.agents.set(agent.name, agent);
    this.stats.agentsCreated++;
  }

  createCodeFixerAgent() {
    const agent = {
      name: 'code-fixer-agent',''
      status: 'active',''
      lastRun: Date.now(),
      fixesApplied: 0,
      
      fix: async (filePath, errors) => {
        try {
          let content = fs.readFileSync(filePath, 'utf8');''
          let modified = false;
          
          for (const error of errors) {
            const fixedContent = await this.applyFix(content, error);
            if (fixedContent !== content) {
              content = fixedContent;
              modified = true;
              agent.fixesApplied++;
            }
          }
          
          if (modified) {
            // Create backup before writing
            await this.createBackup(filePath);
            fs.writeFileSync(filePath, content, 'utf8');''
            this.log(`Fixed ${agent.fixesApplied} errors in ${filePath}`);
            this.stats.errorsFixed += agent.fixesApplied;
          }
        } catch (error) {
          this.log(`Code fixer agent error: ${error.message}`, 'error');''
        }
      }
    };

    this.agents.set(agent.name, agent);
    this.stats.agentsCreated++;
  }

  createValidatorAgent() {
    const agent = {
      name: 'validator-agent',''
      status: 'active',''
      lastRun: Date.now(),
      validations: 0,
      
      validate: async (filePath) => {
        try {
          const content = fs.readFileSync(filePath, 'utf8');''
          const errors = await this.agents.get('error-detector-agent').detect(content);''
          
          if (errors.length === 0) {
            agent.validations++;
            this.log(`Validation passed for ${filePath}`);
            return true;
          } else {
            this.log(`Validation failed for ${filePath}: ${errors.length} errors found`, 'warn');''
            return false;
          }
        } catch (error) {
          this.log(`Validator agent error: ${error.message}`, 'error');''
          return false;
        }
      }
    };

    this.agents.set(agent.name, agent);
    this.stats.agentsCreated++;
  }

  createBackupAgent() {
    const agent = {
      name: 'backup-agent',''
      status: 'active',''
      lastRun: Date.now(),
      backupsCreated: 0,
      
      createBackup: async (filePath) => {
        try {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');''
          const backupDir = path.join(__dirname, 'fence-code-fix-backups');''
          const fileName = path.basename(filePath);
          const backupPath = path.join(backupDir, `${fileName}.${timestamp}.backup`);
          
          fs.copyFileSync(filePath, backupPath);
          agent.backupsCreated++;
          this.log(`Backup created: ${backupPath}`);
        } catch (error) {
          this.log(`Backup agent error: ${error.message}`, 'error');''
        }
      }
    };

    this.agents.set(agent.name, agent);
    this.stats.agentsCreated++;
  }

  createPerformanceMonitor() {
    const monitor = {
      name: 'performance-monitor',''
      status: 'active',''
      metrics: {
        scanTime: 0,
        fixTime: 0,
        memoryUsage: 0
      },
      
      monitor: () => {
        const memUsage = process.memoryUsage();
        monitor.metrics.memoryUsage = memUsage.heapUsed;
        
        if (memUsage.heapUsed > this.config.monitoring.performanceThresholds.maxMemoryUsage) {
          this.log('Memory usage exceeded threshold, triggering garbage collection', 'warn');''
          global.gc && global.gc();
        }
      }
    };

    this.monitors.set(monitor.name, monitor);
  }

  createErrorMonitor() {
    const monitor = {
      name: 'error-monitor',''
      status: 'active',''
      errors: [],
      
      logError: (error) => {
        monitor.errors.push({)
          timestamp: Date.now(),
          error: error.message,
          stack: error.stack
        });
        
        // Keep only last 100 errors
        if (monitor.errors.length > 100) {
          monitor.errors = monitor.errors.slice(-100);
        }
      }
    };

    this.monitors.set(monitor.name, monitor);
  }

  createHealthMonitor() {
    const monitor = {
      name: 'health-monitor',''
      status: 'active',''
      healthChecks: 0,
      
      checkHealth: () => {
        monitor.healthChecks++;
        
        // Check all agents are active
        for (const [name, agent] of this.agents) {
          if (agent.status !== 'active') {''
            this.log(`Agent ${name} is not active`, 'warn');''
          }
        }
        
        // Check system uptime
        const uptime = Date.now() - this.stats.startTime;
        this.log(`System uptime: ${Math.floor(uptime / 1000)}s`);
      }
    };

    this.monitors.set(monitor.name, monitor);
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
              const shouldExclude = this.config.excludePatterns.some(pattern => )
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
            // Skip files/directories that can't be accessed''
            this.log(`Skipping ${fullPath}: ${error.message}`, 'warn');''
          }
        }
      } catch (error) {
        this.log(`Error reading directory ${dir}: ${error.message}`, 'error');''
      }
    };
    
    walkDir(rootDir);
    return files;
  }

  detectFenceErrors(content) {
    const errors = [];
    
    // Check for unclosed fence blocks
    const fenceMatches = content.match(/```)
    const closingMatches = content.match(/\n```)
    
    if (fenceMatches && closingMatches) {
      if (fenceMatches.length !== closingMatches.length) {
        errors.push({)
          type: 'missing-closing-fence',''
          line: this.findLineNumber(content, content.lastIndexOf('```')
          description: 'Unclosed fence code block'''
        });
      }
    } else if (fenceMatches && !closingMatches) {
      errors.push({)
        type: 'missing-closing-fence',''
        line: this.findLineNumber(content, content.lastIndexOf('```')
        description: 'Missing closing fence'''
      });
    }
    
    // Check for malformed fences
    const malformedFences = content.match(/```)
    if (malformedFences) {
      errors.push({)
        type: 'malformed-fence',''
        line: this.findLineNumber(content, content.indexOf('```')
        description: 'Malformed fence opening'''
      });
    }
    
    // Check for nested fences
    const nestedFences = content.match(/```)
    if (nestedFences) {
      errors.push({)
        type: 'nested-fences',''
        line: this.findLineNumber(content, content.indexOf('```')
        description: 'Nested fence code blocks detected'''
      });
    }
    
    return errors;
  }

  findLineNumber(content, position) {
    return content.substring(0, position).split('\n').length;''
  }

  analyzeFenceError(match) {
    // Analyze specific fence error patterns
    if (match.startsWith('```')
      return {
        type: 'unclosed-code-block',''
        description: 'Unclosed code block'''
      };
    }
    
    if (match.includes('```')
      return {
        type: 'nested-fences',''
        description: 'Nested fence blocks'''
      };
    }
    
    return null;
  }

  async applyFix(content, error) {
    const fixStrategy = this.config.fixStrategies[error.type];
    if (fixStrategy) {
      return await fixStrategy(content, error);
    }
    return content;
  }

  async fixMissingClosingFence(content, error) {
    // Add missing closing fence
    return content + '\n```'
  }

  async fixMalformedFence(content, error) {
    // Fix malformed fence by standardizing it
    return content.replace(/```)
  }

  async fixUnclosedCodeBlock(content, error) {
    // Find the last opening fence and add closing fence
    const lastFenceIndex = content.lastIndexOf('```')
    if (lastFenceIndex !== -1) {
      // Check if there's already a closing fence after this''
      const afterLastFence = content.substring(lastFenceIndex + 3);
      if (!afterLastFence.includes('```')
        return content.substring(0, lastFenceIndex + 3) + '\n```'
      }
    }
    return content;
  }

  async fixInvalidLanguageTag(content, error) {
    // Remove or fix invalid language tags
    return content.replace(/```)
      const language = match.slice(3, -1).trim();
      if (/^[a-zA-Z0-9]+$/.test(language)) {
        return match; // Valid language tag
      }
      return '```'
    });
  }

  async fixNestedFences(content, error) {
    // Fix nested fences by properly structuring them
    let fixedContent = content;
    let depth = 0;
    let result = '';''
    
    const lines = content.split('\n');''
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '```'
        if (!inCodeBlock) {
          inCodeBlock = true;
          depth++;
        } else {
          inCodeBlock = false;
          depth--;
        }
      }
      
      result += line + '\n';''
    }
    
    // Add missing closing fences
    while (depth > 0) {
      result += '```'
      depth--;
    }
    
    return result;
  }

  async queueForFixing(filePath, errors) {
    const fixerAgent = this.agents.get('code-fixer-agent');''
    if (fixerAgent) {
      await fixerAgent.fix(filePath, errors);
    }
  }

  async createBackup(filePath) {
    const backupAgent = this.agents.get('backup-agent');''
    if (backupAgent) {
      await backupAgent.createBackup(filePath);
    }
  }

  log(message, level = 'info') {''
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [FenceCodeFixFactory] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    // Write to log file
    const logDir = path.join(__dirname, 'fence-code-fix-logs');''
    const logFile = path.join(logDir, 'fence-code-fix-factory.log');''
    
    try {
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      fs.appendFileSync(logFile, logMessage + '\n');''
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('Factory is already running');''
      return;
    }

    this.isRunning = true;
    this.log('Starting Fence Code Fix Autonomous Agents Factory');''

    // Start monitoring
    setInterval(() => {
      this.monitors.get('performance-monitor')?.monitor();''
    }, 10000);

    setInterval(() => {
      this.monitors.get('health-monitor')?.checkHealth();''
    }, 30000);

    // Start file scanning
    setInterval(async () => {
      const scannerAgent = this.agents.get('file-scanner-agent');''
      if (scannerAgent) {
        await scannerAgent.scan();
      }
    }, this.config.scanInterval);

    // Start backup process
    if (this.config.backup.enabled) {
      setInterval(async () => {
        await this.createSystemBackup();
      }, this.config.backup.interval);
    }

    this.log('Factory started successfully');''
  }

  async createSystemBackup() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');''
      const backupDir = path.join(__dirname, 'fence-code-fix-backups');''
      const backupFile = path.join(backupDir, `system-backup-${timestamp}.json`);
      
      const backupData = {
        timestamp: Date.now(),
        stats: this.stats,
        agents: Object.fromEntries(this.agents),
        config: this.config
      };
      
      fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
      this.log(`System backup created: ${backupFile}`);
    } catch (error) {
      this.log(`System backup error: ${error.message}`, 'error');''
    }
  }

  async stop() {
    this.isRunning = false;
    this.log('Stopping Fence Code Fix Autonomous Agents Factory');''
    
    // Save final stats
    const statsFile = path.join(__dirname, 'fence-code-fix-status', 'final-stats.json');''
    fs.writeFileSync(statsFile, JSON.stringify(this.stats, null, 2));
    
    this.log('Factory stopped');''
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      agents: Object.fromEntries(this.agents),
      monitors: Object.fromEntries(this.monitors)
    };
  }
}

// Main execution
if (require.main === module) {
  const factory = new FenceCodeFixAutonomousAgentsFactory();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {''
    await factory.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {''
    await factory.stop();
    process.exit(0);
  });
  
  // Start the factory
  factory.start();
}

module.exports = FenceCodeFixAutonomousAgentsFactory;




