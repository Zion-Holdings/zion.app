#!/usr/bin/env node

/**
 * Automation Scripts Manager
 * 
 * A comprehensive manager that discovers, starts, monitors, and continuously
 * improves all automation scripts in the Zion App project.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const chokidar = require('chokidar');

class AutomationScriptsManager extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      // Discovery settings
      discovery: {
        enabled: true,
        interval: 5 * 60 * 1000, // 5 minutes
        scanDirectories: [
          'scripts',
          'automation',
          'automation/scripts',
          'automation/core',
          'automation/tasks',
          'automation/performance',
          'automation/security',
          'automation/continuous-improvement'
        ],
        filePatterns: [
          '**/*.js',
          '**/*.cjs',
          '**/*.ts',
          '**/*.py',
          '**/*.sh'
        ],
        excludePatterns: [
          '**/node_modules/**',
          '**/.git/**',
          '**/dist/**',
          '**/build/**',
          '**/coverage/**',
          '**/*.test.js',
          '**/*.spec.js'
        ]
      },
      
      // Execution settings
      execution: {
        maxConcurrent: 5,
        timeout: 30 * 60 * 1000, // 30 minutes
        retryAttempts: 3,
        retryDelay: 60 * 1000, // 1 minute
        autoRestart: true,
        healthCheckInterval: 60 * 1000 // 1 minute
      },
      
      // Improvement settings
      improvement: {
        enabled: true,
        interval: 10 * 60 * 1000, // 10 minutes
        autoFix: true,
        backupBeforeChanges: true,
        testAfterChanges: true,
        rollbackOnFailure: true
      },
      
      // Monitoring settings
      monitoring: {
        enabled: true,
        logLevel: 'info',
        metrics: true,
        alerts: true,
        dashboard: {
          enabled: true,
          port: 3004
        }
      },
      
      // Paths
      paths: {
        projectRoot: process.cwd(),
        logs: path.join(process.cwd(), 'logs'),
        data: path.join(process.cwd(), 'data'),
        config: path.join(process.cwd(), 'config'),
        backups: path.join(process.cwd(), 'backups'),
        reports: path.join(process.cwd(), 'reports')
      }
    };
    
    this.scripts = new Map();
    this.runningScripts = new Map();
    this.scriptHistory = [];
    this.improvements = [];
    this.stats = {
      totalScripts: 0,
      runningScripts: 0,
      failedScripts: 0,
      successfulScripts: 0,
      improvements: 0,
      lastDiscovery: null,
      lastImprovement: null
    };
    
    this.isRunning = false;
    this.discoveryInterval = null;
    this.improvementInterval = null;
    this.healthCheckInterval = null;
    this.startTime = Date.now();
    
    this.initializeDirectories();
    this.loadPersistentData();
  }

  async initializeDirectories() {
    const dirs = [
      this.config.paths.logs,
      this.config.paths.data,
      this.config.paths.config,
      this.config.paths.backups,
      this.config.paths.reports
    ];

    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        this.log(`Warning: Could not create directory ${dir}: ${error.message}`, 'warn');
      }
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    this.emit('log', { message, level, timestamp });
    
    // Write to log file
    const logFile = path.join(this.config.paths.logs, 'automation-manager.log');
    fs.appendFile(logFile, logMessage + '\n').catch(() => {});
  }

  async discoverScripts() {
    this.log('🔍 Discovering automation scripts...');
    
    const discoveredScripts = new Map();
    
    for (const scanDir of this.config.discovery.scanDirectories) {
      try {
        const fullPath = path.resolve(scanDir);
        if (!(await fs.stat(fullPath)).isDirectory()) continue;
        
        const files = await this.scanDirectory(fullPath);
        
        for (const file of files) {
          const scriptInfo = await this.analyzeScript(file);
          if (scriptInfo.isAutomation) {
            discoveredScripts.set(file, scriptInfo);
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${scanDir}: ${error.message}`, 'warn');
      }
    }
    
    // Update scripts map
    this.scripts = discoveredScripts;
    this.stats.totalScripts = discoveredScripts.size;
    this.stats.lastDiscovery = new Date();
    
    // Save to persistent storage
    await this.savePersistentData();
    
    this.log(`✅ Discovered ${discoveredScripts.size} automation scripts`);
    this.emit('scriptsDiscovered', discoveredScripts);
    
    return discoveredScripts;
  }

  async scanDirectory(dirPath) {
    const files = [];
    
    const scan = async (currentPath) => {
      try {
        const entries = await fs.readdir(currentPath, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(currentPath, entry.name);
          
          if (entry.isDirectory()) {
            // Check if directory should be excluded
            const shouldExclude = this.config.discovery.excludePatterns.some(pattern => {
              const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
              return regex.test(fullPath);
            });
            
            if (!shouldExclude) {
              await scan(fullPath);
            }
          } else if (entry.isFile()) {
            // Check if file matches patterns
            const shouldInclude = this.config.discovery.filePatterns.some(pattern => {
              const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
              return regex.test(fullPath);
            });
            
            if (shouldInclude) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        this.log(`Error scanning ${currentPath}: ${error.message}`, 'warn');
      }
    };
    
    await scan(dirPath);
    return files;
  }

  async analyzeScript(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const ext = path.extname(filePath);
      
      const analysis = {
        path: filePath,
        name: path.basename(filePath),
        extension: ext,
        size: content.length,
        isAutomation: false,
        type: 'unknown',
        dependencies: [],
        issues: [],
        improvements: [],
        lastModified: (await fs.stat(filePath)).mtime,
        executionCount: 0,
        successRate: 0,
        averageExecutionTime: 0
      };
      
      // Determine if it's an automation script
      const automationKeywords = [
        'automation', 'automate', 'script', 'task', 'job', 'cron',
        'scheduler', 'monitor', 'watchdog', 'orchestrator', 'manager',
        'improvement', 'optimization', 'maintenance', 'healing'
      ];
      
      const hasAutomationKeywords = automationKeywords.some(keyword => 
        content.toLowerCase().includes(keyword)
      );
      
      const hasAutomationStructure = content.includes('class') && 
        (content.includes('start()') || content.includes('run()') || content.includes('execute()'));
      
      analysis.isAutomation = hasAutomationKeywords || hasAutomationStructure;
      
      // Determine script type
      if (ext === '.js' || ext === '.cjs') {
        analysis.type = 'nodejs';
      } else if (ext === '.ts') {
        analysis.type = 'typescript';
      } else if (ext === '.py') {
        analysis.type = 'python';
      } else if (ext === '.sh') {
        analysis.type = 'shell';
      }
      
      // Analyze dependencies
      if (analysis.type === 'nodejs') {
        const requireMatches = content.match(/require\(['"`]([^'"`]+)['"`]\)/g);
        const importMatches = content.match(/import.*from\s+['"`]([^'"`]+)['"`]/g);
        
        if (requireMatches) {
          analysis.dependencies.push(...requireMatches.map(match => 
            match.replace(/require\(['"`]([^'"`]+)['"`]\)/, '$1')
          ));
        }
        
        if (importMatches) {
          analysis.dependencies.push(...importMatches.map(match => 
            match.replace(/import.*from\s+['"`]([^'"`]+)['"`]/, '$1')
          ));
        }
      }
      
      // Detect potential issues
      if (content.includes('console.log') && !content.includes('logger')) {
        analysis.issues.push('Uses console.log instead of proper logging');
      }
      
      if (content.includes('setTimeout') && !content.includes('clearTimeout')) {
        analysis.issues.push('Potential memory leak: setTimeout without clearTimeout');
      }
      
      if (content.includes('process.exit') && !content.includes('graceful')) {
        analysis.issues.push('Uses process.exit without graceful shutdown');
      }
      
      // Suggest improvements
      if (analysis.issues.length > 0) {
        analysis.improvements.push('Fix detected issues');
      }
      
      if (content.length > 1000 && !content.includes('class')) {
        analysis.improvements.push('Consider refactoring into class structure');
      }
      
      if (!content.includes('error') && !content.includes('catch')) {
        analysis.improvements.push('Add error handling');
      }
      
      return analysis;
      
    } catch (error) {
      this.log(`Error analyzing script ${filePath}: ${error.message}`, 'error');
      return {
        path: filePath,
        name: path.basename(filePath),
        isAutomation: false,
        issues: [`Analysis failed: ${error.message}`]
      };
    }
  }

  async startScript(scriptPath, options = {}) {
    const script = this.scripts.get(scriptPath);
    if (!script) {
      throw new Error(`Script not found: ${scriptPath}`);
    }
    
    if (this.runningScripts.has(scriptPath)) {
      this.log(`Script already running: ${scriptPath}`, 'warn');
      return this.runningScripts.get(scriptPath);
    }
    
    this.log(`🚀 Starting script: ${script.name}`);
    
    const startTime = Date.now();
    const processId = `script_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    try {
      let command, args;
      
      switch (script.type) {
        case 'nodejs':
          command = 'node';
          args = [scriptPath];
          break;
        case 'typescript':
          command = 'npx';
          args = ['ts-node', scriptPath];
          break;
        case 'python':
          command = 'python3';
          args = [scriptPath];
          break;
        case 'shell':
          command = 'bash';
          args = [scriptPath];
          break;
        default:
          throw new Error(`Unsupported script type: ${script.type}`);
      }
      
      const childProcess = spawn(command, args, {
        cwd: path.dirname(scriptPath),
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, ...options.env }
      });
      
      const processInfo = {
        id: processId,
        script: script,
        process: childProcess,
        startTime: startTime,
        status: 'running',
        output: [],
        errors: [],
        options: options
      };
      
      this.runningScripts.set(scriptPath, processInfo);
      this.stats.runningScripts++;
      
      // Capture output
      childProcess.stdout.on('data', (data) => {
        const output = data.toString();
        processInfo.output.push({ timestamp: Date.now(), data: output });
        this.log(`[${script.name}] ${output.trim()}`, 'debug');
      });
      
      childProcess.stderr.on('data', (data) => {
        const error = data.toString();
        processInfo.errors.push({ timestamp: Date.now(), data: error });
        this.log(`[${script.name}] ERROR: ${error.trim()}`, 'error');
      });
      
      // Handle completion
      childProcess.on('close', (code) => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        processInfo.status = code === 0 ? 'completed' : 'failed';
        processInfo.endTime = endTime;
        processInfo.duration = duration;
        processInfo.exitCode = code;
        
        this.runningScripts.delete(scriptPath);
        this.stats.runningScripts--;
        
        if (code === 0) {
          this.stats.successfulScripts++;
          this.log(`✅ Script completed: ${script.name} (${duration}ms)`);
        } else {
          this.stats.failedScripts++;
          this.log(`❌ Script failed: ${script.name} (exit code: ${code})`, 'error');
        }
        
        // Update script statistics
        script.executionCount++;
        script.averageExecutionTime = 
          (script.averageExecutionTime * (script.executionCount - 1) + duration) / script.executionCount;
        
        // Add to history
        this.scriptHistory.push({
          scriptPath,
          startTime,
          endTime,
          duration,
          exitCode: code,
          output: processInfo.output,
          errors: processInfo.errors
        });
        
        this.emit('scriptCompleted', { script, processInfo, code });
        
        // Auto-restart if enabled and failed
        if (this.config.execution.autoRestart && code !== 0 && options.retryCount < this.config.execution.retryAttempts) {
          setTimeout(() => {
            this.log(`🔄 Auto-restarting failed script: ${script.name}`);
            this.startScript(scriptPath, { ...options, retryCount: (options.retryCount || 0) + 1 });
          }, this.config.execution.retryDelay);
        }
      });
      
      // Handle timeout
      const timeout = options.timeout || this.config.execution.timeout;
      setTimeout(() => {
        if (childProcess.killed) return;
        
        this.log(`⏰ Script timeout: ${script.name}`, 'warn');
        childProcess.kill('SIGTERM');
        
        setTimeout(() => {
          if (!childProcess.killed) {
            childProcess.kill('SIGKILL');
          }
        }, 5000);
      }, timeout);
      
      this.emit('scriptStarted', { script, processInfo });
      return processInfo;
      
    } catch (error) {
      this.log(`❌ Failed to start script ${scriptPath}: ${error.message}`, 'error');
      throw error;
    }
  }

  async stopScript(scriptPath) {
    const processInfo = this.runningScripts.get(scriptPath);
    if (!processInfo) {
      this.log(`Script not running: ${scriptPath}`, 'warn');
      return false;
    }
    
    this.log(`🛑 Stopping script: ${processInfo.script.name}`);
    
    try {
      processInfo.process.kill('SIGTERM');
      
      // Force kill after 5 seconds
      setTimeout(() => {
        if (!processInfo.process.killed) {
          processInfo.process.kill('SIGKILL');
        }
      }, 5000);
      
      return true;
    } catch (error) {
      this.log(`Error stopping script ${scriptPath}: ${error.message}`, 'error');
      return false;
    }
  }

  async improveScript(scriptPath) {
    const script = this.scripts.get(scriptPath);
    if (!script) {
      throw new Error(`Script not found: ${scriptPath}`);
    }
    
    this.log(`🔧 Improving script: ${script.name}`);
    
    try {
      // Create backup
      if (this.config.improvement.backupBeforeChanges) {
        const backupPath = path.join(
          this.config.paths.backups,
          `${script.name}.${Date.now()}.backup`
        );
        await fs.copyFile(scriptPath, backupPath);
        this.log(`📦 Backup created: ${backupPath}`);
      }
      
      const content = await fs.readFile(scriptPath, 'utf8');
      let improvedContent = content;
      let improvements = [];
      
      // Apply improvements based on analysis
      if (script.issues.includes('Uses console.log instead of proper logging')) {
        improvedContent = this.improveLogging(improvedContent);
        improvements.push('Improved logging system');
      }
      
      if (script.issues.includes('Potential memory leak: setTimeout without clearTimeout')) {
        improvedContent = this.fixMemoryLeaks(improvedContent);
        improvements.push('Fixed potential memory leaks');
      }
      
      if (script.issues.includes('Uses process.exit without graceful shutdown')) {
        improvedContent = this.improveShutdown(improvedContent);
        improvements.push('Improved graceful shutdown');
      }
      
      if (script.improvements.includes('Add error handling')) {
        improvedContent = this.addErrorHandling(improvedContent);
        improvements.push('Added comprehensive error handling');
      }
      
      if (script.improvements.includes('Consider refactoring into class structure')) {
        improvedContent = this.refactorToClass(improvedContent);
        improvements.push('Refactored to class structure');
      }
      
      // Write improved content
      if (improvedContent !== content) {
        await fs.writeFile(scriptPath, improvedContent, 'utf8');
        
        // Test the improved script
        if (this.config.improvement.testAfterChanges) {
          const testResult = await this.testScript(scriptPath);
          if (!testResult.success) {
            this.log(`❌ Improvement test failed for ${script.name}, rolling back`, 'error');
            
            if (this.config.improvement.rollbackOnFailure) {
              const backupPath = path.join(
                this.config.paths.backups,
                `${script.name}.${Date.now()}.backup`
              );
              await fs.copyFile(backupPath, scriptPath);
              this.log(`🔄 Rolled back changes for ${script.name}`);
            }
            
            return { success: false, error: testResult.error };
          }
        }
        
        this.improvements.push({
          scriptPath,
          scriptName: script.name,
          improvements,
          timestamp: new Date()
        });
        
        this.stats.improvements++;
        this.stats.lastImprovement = new Date();
        
        this.log(`✅ Improved script: ${script.name} (${improvements.join(', ')})`);
        this.emit('scriptImproved', { script, improvements });
        
        return { success: true, improvements };
      } else {
        this.log(`ℹ️ No improvements needed for: ${script.name}`);
        return { success: true, improvements: [] };
      }
      
    } catch (error) {
      this.log(`❌ Failed to improve script ${scriptPath}: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  improveLogging(content) {
    // Replace console.log with proper logging
    const loggerSetup = `
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

`;

    // Add logger setup if not present
    if (!content.includes('winston') && !content.includes('logger')) {
      content = loggerSetup + content;
    }
    
    // Replace console.log calls
    content = content.replace(/console\.log\(/g, 'logger.info(');
    content = content.replace(/console\.error\(/g, 'logger.error(');
    content = content.replace(/console\.warn\(/g, 'logger.warn(');
    
    return content;
  }

  fixMemoryLeaks(content) {
    // Add cleanup for setTimeout
    const cleanupPattern = /setTimeout\(([^,]+),([^)]+)\)/g;
    let match;
    let replacements = [];
    
    while ((match = cleanupPattern.exec(content)) !== null) {
      const fullMatch = match[0];
      const callback = match[1];
      const delay = match[2];
      
      const replacement = `
const timeoutId = setTimeout(${callback}, ${delay});
// Store timeoutId for cleanup if needed
`;
      
      replacements.push({ from: fullMatch, to: replacement });
    }
    
    // Apply replacements
    for (const replacement of replacements) {
      content = content.replace(replacement.from, replacement.to);
    }
    
    return content;
  }

  improveShutdown(content) {
    // Add graceful shutdown handlers
    const shutdownHandlers = `

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

`;
    
    if (!content.includes('SIGINT') && !content.includes('SIGTERM')) {
      content += shutdownHandlers;
    }
    
    return content;
  }

  addErrorHandling(content) {
    // Add try-catch blocks around main execution
    const mainExecutionPattern = /if\s*\(\s*require\.main\s*===\s*module\s*\)\s*{([^}]+)}/g;
    
    content = content.replace(mainExecutionPattern, (match, body) => {
      return `if (require.main === module) {
  try {
    ${body}
  } catch (error) {
    console.error('Script execution failed:', error);
    process.exit(1);
  }
}`;
    });
    
    return content;
  }

  refactorToClass(content) {
    // Simple refactoring to class structure
    if (!content.includes('class') && content.length > 500) {
      const className = path.basename(content.match(/\/\*\*?\s*([^*\n]+)/)?.[1] || 'Script', ' ')
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/^[a-z]/, (c) => c.toUpperCase());
      
      const classTemplate = `
class ${className} {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting ${className}...');
    
    try {
      ${content.replace(/\/\*\*?[\s\S]*?\*\//g, '').trim()}
    } catch (error) {
      console.error('Error in ${className}:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping ${className}...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ${className}();
  script.start().catch(error => {
    console.error('Failed to start ${className}:', error);
    process.exit(1);
  });
}

module.exports = ${className};
`;
      
      return classTemplate;
    }
    
    return content;
  }

  async testScript(scriptPath) {
    try {
      // Simple syntax check
      const content = await fs.readFile(scriptPath, 'utf8');
      const ext = path.extname(scriptPath);
      
      if (ext === '.js' || ext === '.cjs') {
        // Use Node.js to check syntax
        execSync(`node -c "${scriptPath}"`, { stdio: 'pipe' });
      } else if (ext === '.ts') {
        // Use TypeScript compiler to check syntax
        execSync(`npx tsc --noEmit "${scriptPath}"`, { stdio: 'pipe' });
      } else if (ext === '.py') {
        // Use Python to check syntax
        execSync(`python3 -m py_compile "${scriptPath}"`, { stdio: 'pipe' });
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async startMonitoring() {
    this.log('📊 Starting automation monitoring...');
    
    // Start file watching for script changes
    const watcher = chokidar.watch(this.config.discovery.scanDirectories, {
      ignored: this.config.discovery.excludePatterns,
      persistent: true
    });
    
    watcher.on('change', async (filePath) => {
      this.log(`📝 Script changed: ${filePath}`);
      
      // Re-analyze the changed script
      const scriptInfo = await this.analyzeScript(filePath);
      if (scriptInfo.isAutomation) {
        this.scripts.set(filePath, scriptInfo);
        this.emit('scriptChanged', { script: scriptInfo, filePath });
      }
    });
    
    watcher.on('add', async (filePath) => {
      this.log(`➕ New script detected: ${filePath}`);
      
      const scriptInfo = await this.analyzeScript(filePath);
      if (scriptInfo.isAutomation) {
        this.scripts.set(filePath, scriptInfo);
        this.stats.totalScripts++;
        this.emit('scriptAdded', { script: scriptInfo, filePath });
      }
    });
    
    watcher.on('unlink', (filePath) => {
      this.log(`➖ Script removed: ${filePath}`);
      
      if (this.scripts.has(filePath)) {
        this.scripts.delete(filePath);
        this.stats.totalScripts--;
        this.emit('scriptRemoved', { filePath });
      }
    });
    
    // Start health check interval
    this.healthCheckInterval = setInterval(() => {
      this.performHealthCheck();
    }, this.config.execution.healthCheckInterval);
    
    this.log('✅ Monitoring started');
  }

  async performHealthCheck() {
    this.log('🏥 Performing health check...', 'debug');
    
    const healthStatus = {
      timestamp: new Date(),
      totalScripts: this.stats.totalScripts,
      runningScripts: this.stats.runningScripts,
      failedScripts: this.stats.failedScripts,
      successfulScripts: this.stats.successfulScripts,
      improvements: this.stats.improvements,
      uptime: Date.now() - this.startTime,
      memory: process.memoryUsage(),
      cpu: process.cpuUsage()
    };
    
    // Check for stuck processes
    for (const [scriptPath, processInfo] of this.runningScripts) {
      const runningTime = Date.now() - processInfo.startTime;
      if (runningTime > this.config.execution.timeout) {
        this.log(`⚠️ Script timeout detected: ${processInfo.script.name}`, 'warn');
        await this.stopScript(scriptPath);
      }
    }
    
    this.emit('healthCheck', healthStatus);
  }

  async start() {
    if (this.isRunning) {
      this.log('Manager is already running', 'warn');
      return;
    }
    
    this.log('🚀 Starting Automation Scripts Manager...');
    this.startTime = Date.now();
    this.isRunning = true;
    
    try {
      // Initial script discovery
      await this.discoverScripts();
      
      // Start monitoring
      await this.startMonitoring();
      
      // Start discovery interval
      this.discoveryInterval = setInterval(() => {
        this.discoverScripts();
      }, this.config.discovery.interval);
      
      // Start improvement interval
      if (this.config.improvement.enabled) {
        this.improvementInterval = setInterval(() => {
          this.improveAllScripts();
        }, this.config.improvement.interval);
      }
      
      this.log('✅ Automation Scripts Manager started successfully');
      this.emit('started');
      
    } catch (error) {
      this.log(`❌ Failed to start manager: ${error.message}`, 'error');
      this.isRunning = false;
      throw error;
    }
  }

  async stop() {
    if (!this.isRunning) {
      this.log('Manager is not running', 'warn');
      return;
    }
    
    this.log('🛑 Stopping Automation Scripts Manager...');
    
    // Clear intervals
    if (this.discoveryInterval) {
      clearInterval(this.discoveryInterval);
      this.discoveryInterval = null;
    }
    
    if (this.improvementInterval) {
      clearInterval(this.improvementInterval);
      this.improvementInterval = null;
    }
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    // Stop all running scripts
    for (const [scriptPath] of this.runningScripts) {
      await this.stopScript(scriptPath);
    }
    
    this.isRunning = false;
    this.log('✅ Automation Scripts Manager stopped');
    this.emit('stopped');
  }

  async improveAllScripts() {
    this.log('🔧 Starting script improvement cycle...');
    
    const improvementResults = [];
    
    for (const [scriptPath, script] of this.scripts) {
      if (script.improvements.length > 0 || script.issues.length > 0) {
        try {
          const result = await this.improveScript(scriptPath);
          improvementResults.push({ scriptPath, result });
        } catch (error) {
          this.log(`Error improving script ${scriptPath}: ${error.message}`, 'error');
          improvementResults.push({ scriptPath, result: { success: false, error: error.message } });
        }
      }
    }
    
    this.log(`✅ Improvement cycle completed: ${improvementResults.length} scripts processed`);
    this.emit('improvementCycleCompleted', improvementResults);
    
    return improvementResults;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      runningScripts: Array.from(this.runningScripts.keys()),
      totalScripts: this.scripts.size,
      uptime: this.isRunning ? Date.now() - this.startTime : 0,
      lastDiscovery: this.stats.lastDiscovery,
      lastImprovement: this.stats.lastImprovement
    };
  }

  generateReport() {
    const report = {
      timestamp: new Date(),
      status: this.getStatus(),
      scripts: Array.from(this.scripts.values()).map(script => ({
        name: script.name,
        path: script.path,
        type: script.type,
        issues: script.issues,
        improvements: script.improvements,
        executionCount: script.executionCount,
        successRate: script.successRate,
        averageExecutionTime: script.averageExecutionTime
      })),
      recentHistory: this.scriptHistory.slice(-10),
      improvements: this.improvements.slice(-10)
    };
    
    return report;
  }

  async loadPersistentData() {
    try {
      const dataFile = path.join(this.config.paths.data, 'automation-manager-state.json');
      const statsFile = path.join(this.config.paths.data, 'automation-manager-stats.json');
      const historyFile = path.join(this.config.paths.data, 'automation-manager-history.json');
      const improvementsFile = path.join(this.config.paths.data, 'automation-manager-improvements.json');
      
      // Load scripts
      if (await fs.access(dataFile).then(() => true).catch(() => false)) {
        const data = JSON.parse(await fs.readFile(dataFile, 'utf8'));
        this.scripts = new Map(Object.entries(data));
        this.log(`Loaded ${this.scripts.size} scripts from persistent storage`);
      }
      
      // Load stats
      if (await fs.access(statsFile).then(() => true).catch(() => false)) {
        const stats = JSON.parse(await fs.readFile(statsFile, 'utf8'));
        this.stats = { ...this.stats, ...stats };
        this.log(`Loaded stats from persistent storage`);
      }
      
      // Load history
      if (await fs.access(historyFile).then(() => true).catch(() => false)) {
        this.scriptHistory = JSON.parse(await fs.readFile(historyFile, 'utf8'));
        this.log(`Loaded ${this.scriptHistory.length} history entries from persistent storage`);
      }
      
      // Load improvements
      if (await fs.access(improvementsFile).then(() => true).catch(() => false)) {
        this.improvements = JSON.parse(await fs.readFile(improvementsFile, 'utf8'));
        this.log(`Loaded ${this.improvements.length} improvements from persistent storage`);
      }
      
    } catch (error) {
      this.log(`Warning: Could not load persistent data: ${error.message}`, 'warn');
    }
  }

  async savePersistentData() {
    try {
      const dataFile = path.join(this.config.paths.data, 'automation-manager-state.json');
      const statsFile = path.join(this.config.paths.data, 'automation-manager-stats.json');
      const historyFile = path.join(this.config.paths.data, 'automation-manager-history.json');
      const improvementsFile = path.join(this.config.paths.data, 'automation-manager-improvements.json');
      
      // Save scripts
      const scriptsData = Object.fromEntries(this.scripts);
      await fs.writeFile(dataFile, JSON.stringify(scriptsData, null, 2));
      
      // Save stats
      await fs.writeFile(statsFile, JSON.stringify(this.stats, null, 2));
      
      // Save history (keep only last 1000 entries)
      const recentHistory = this.scriptHistory.slice(-1000);
      await fs.writeFile(historyFile, JSON.stringify(recentHistory, null, 2));
      
      // Save improvements (keep only last 500 entries)
      const recentImprovements = this.improvements.slice(-500);
      await fs.writeFile(improvementsFile, JSON.stringify(recentImprovements, null, 2));
      
    } catch (error) {
      this.log(`Warning: Could not save persistent data: ${error.message}`, 'warn');
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new AutomationScriptsManager();
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start().catch(error => {
        console.error('Failed to start manager:', error);
        process.exit(1);
      });
      break;
      
    case 'stop':
      manager.stop().catch(error => {
        console.error('Failed to stop manager:', error);
        process.exit(1);
      });
      break;
      
    case 'status':
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
      
    case 'discover':
      manager.discoverScripts().then(scripts => {
        console.log(`Discovered ${scripts.size} automation scripts`);
      });
      break;
      
    case 'improve':
      manager.improveAllScripts().then(results => {
        console.log(`Improved ${results.length} scripts`);
      });
      break;
      
    case 'report':
      console.log(JSON.stringify(manager.generateReport(), null, 2));
      break;
      
    default:
      console.log(`
Automation Scripts Manager

Usage: node automation-scripts-manager.cjs [command]

Commands:
  start     Start the automation manager
  stop      Stop the automation manager
  status    Show current status
  discover  Discover automation scripts
  improve   Improve all scripts
  report    Generate detailed report
      `);
  }
}

module.exports = AutomationScriptsManager; 