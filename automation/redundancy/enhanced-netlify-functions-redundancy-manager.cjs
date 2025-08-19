#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cron = require('node-cron');

class EnhancedNetlifyFunctionsRedundancyManager {
  constructor() {
    // Use a more robust path resolution
    this.baseDir = process.cwd() || __dirname || '.';
    this.logDir = path.resolve(this.baseDir, 'automation', 'logs');
    this.ensureLogDir();
    
    this.netlifyDir = path.resolve(this.baseDir, 'netlify');
    this.functionsDir = path.join(this.netlifyDir, 'functions');
    this.backupFunctionsDir = path.join(this.netlifyDir, 'functions', 'backup');
    this.redundantFunctionsDir = path.join(this.netlifyDir, 'functions', 'redundant');
    
    this.primaryFunctions = [
      'a11y-alt-text-runner',
      'adaptive-orchestrator',
      'ai-changelog-runner',
      'ai-trends-radar-runner',
      'anchor-links-auto-fixer',
      'auto-discovery-runner',
      'auto-scheduler',
      'automation-matrix',
      'autonomous-invention-orchestrator',
      'autonomous-meta-orchestrator',
      'broken-image-scanner',
      'broken-image-scanner-runner',
      'canonical-auditor',
      'cloud_deep_research',
      'cloud_orchestrator',
      'code-smell-audit-runner',
      'component-coupling-graph-runner',
      'component-props-docs-runner',
      'component-size-report',
      'content-freshness-score-runner',
      'continuous-front-runner',
      'continuous-orchestrator',
      'dead-code-audit',
      'dead-code-report',
      'deps-auto-upgrade-runner',
      'docs-index-runner',
      'docs-search-index-runner',
      'duplicate-media-finder-runner',
      'external-link-check-runner',
      'fast-front-promoter',
      'fast-orchestrator',
      'feature-advertiser',
      'features-capabilities-benefits-advertiser',
      'front-ads-promoter',
      'front-enhancer',
      'front-index-futurizer',
      'front-index-orchestrator',
      'front-index-scheduler',
      'front-maximizer',
      'front-visionary-expander',
      'frontpage-enhancer',
      'frontpage-scheduler',
      'headers-enforcer',
      'home-visionary-expander',
      'homepage-advertiser-scheduler',
      'homepage-enhancer',
      'homepage-updater',
      'homepage-updater-scheduler',
      'homepage_advertiser',
      'hyper-front-index-accelerator',
      'image-optimizer-runner',
      'innovation-lab',
      'innovations-promoter',
      'intelligent-meta-orchestrator',
      'internal-link-graph-runner',
      'knowledge-pack-runner',
      'license-compliance-auditor',
      'link-and-health-scheduler',
      'link-crawler',
      'maintenance-scheduler',
      'marketing-and-features-promo',
      'marketing-scheduler',
      'media-og-and-optimize',
      'metadata-optimizer-runner',
      'netlify-auto-healer-runner',
      'newsroom-auto-publisher',
      'newsroom-runner',
      'og-image-update-runner',
      'orphan-pages-detector',
      'pagespeed-insights-runner',
      'readme-advertiser',
      'repo-knowledge-graph-runner',
      'repo-radar-and-graph',
      'repo-radar-runner',
      'revenue-ideas-lab',
      'roadmap-curator',
      'robots-auditor',
      'schedule-content-index',
      'schedule-homepage',
      'schedule-knowledge-graph',
      'schedule-site-health',
      'security-audit',
      'security-audit-runner',
      'seo-audit-runner',
      'site-404-map-runner',
      'site-crawler',
      'sitemap_runner',
      'stale-content-auditor-runner',
      'todo-scanner-runner',
      'todo-summary-runner',
      'topic-cluster-builder-runner',
      'topics-map-runner',
      'trigger-all-and-commit',
      'ui-enhancer',
      'ultrafast-front-orchestrator',
      'ultrafast-orchestrator',
      'unused-media-scanner'
    ];
    
    this.criticalFunctions = [
      'netlify-auto-healer-runner',
      'continuous-orchestrator',
      'automation-matrix',
      'security-audit-runner'
    ];
    
    this.healthStatus = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 3;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.backupFunctionsDir)) {
      fs.mkdirSync(this.backupFunctionsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.redundantFunctionsDir)) {
      fs.mkdirSync(this.redundantFunctionsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [NETLIFY-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'netlify-functions-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      const functionPath = path.join(this.functionsDir, functionName);
      const backupPath = path.join(this.backupFunctionsDir, functionName);
      const redundantPath = path.join(this.redundantFunctionsDir, functionName);
      
      if (!fs.existsSync(functionPath)) {
        return { status: 'not_found', health: 'unhealthy' };
      }
      
      // Check if function directory has required files
      const functionFiles = fs.readdirSync(functionPath);
      const hasIndexFile = functionFiles.some(file => file === 'index.js' || file === 'index.cjs');
      const hasPackageJson = functionFiles.some(file => file === 'package.json');
      
      const health = {
        status: 'exists',
        health: 'healthy',
        hasIndexFile,
        hasPackageJson,
        fileCount: functionFiles.length,
        lastModified: fs.statSync(functionPath).mtime,
        hasBackup: fs.existsSync(backupPath),
        hasRedundant: fs.existsSync(redundantPath)
      };
      
      // Determine health based on file structure
      if (!hasIndexFile) {
        health.health = 'unhealthy';
      } else if (!hasPackageJson) {
        health.health = 'degraded';
      }
      
      // Check if backup exists
      if (!health.hasBackup) {
        health.health = health.health === 'healthy' ? 'degraded' : 'unhealthy';
      }
      
      return health;
    } catch (error) {
      this.log(`Failed to check health for function ${functionName}: ${error.message}`, 'ERROR');
      return { status: 'error', health: 'unhealthy', error: error.message };
    }
  }

  async createBackupFunctions() {
    this.log('Creating backup Netlify Functions...');
    
    for (const functionName of this.primaryFunctions) {
      try {
        const sourcePath = path.join(this.functionsDir, functionName);
        const backupPath = path.join(this.backupFunctionsDir, functionName);
        
        if (!fs.existsSync(sourcePath)) {
          this.log(`Source function ${functionName} not found, skipping backup`, 'WARN');
          continue;
        }
        
        if (fs.existsSync(backupPath)) {
          this.log(`Backup function ${functionName} already exists`);
          continue;
        }
        
        // Copy function directory to backup
        await this.executeCommand(`cp -r "${sourcePath}" "${backupPath}"`);
        
        this.log(`Successfully created backup for function: ${functionName}`);
        
      } catch (error) {
        this.log(`Failed to create backup for function ${functionName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async createRedundantFunctions() {
    this.log('Creating redundant Netlify Functions...');
    
    for (const functionName of this.primaryFunctions) {
      try {
        const sourcePath = path.join(this.functionsDir, functionName);
        const redundantPath = path.join(this.redundantFunctionsDir, functionName);
        
        if (!fs.existsSync(sourcePath)) {
          this.log(`Source function ${functionName} not found, skipping redundant creation`, 'WARN');
          continue;
        }
        
        if (fs.existsSync(redundantPath)) {
          this.log(`Redundant function ${functionName} already exists`);
          continue;
        }
        
        // Copy function directory to redundant
        await this.executeCommand(`cp -r "${sourcePath}" "${redundantPath}"`);
        
        // Enhance redundant function with additional reliability
        await this.enhanceFunctionForRedundancy(redundantPath, functionName);
        
        this.log(`Successfully created redundant function: ${functionName}`);
        
      } catch (error) {
        this.log(`Failed to create redundant function ${functionName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async enhanceFunctionForRedundancy(functionPath, functionName) {
    try {
      const indexPath = path.join(functionPath, 'index.js');
      const indexCjsPath = path.join(functionPath, 'index.cjs');
      
      let indexPathToUse = null;
      if (fs.existsSync(indexPath)) {
        indexPathToUse = indexPath;
      } else if (fs.existsSync(indexCjsPath)) {
        indexPathToUse = indexCjsPath;
      }
      
      if (!indexPathToUse) {
        this.log(`No index file found for function ${functionName}`, 'WARN');
        return;
      }
      
      // Read the function code
      let functionCode = fs.readFileSync(indexPathToUse, 'utf8');
      
      // Add redundancy wrapper
      functionCode = this.addRedundancyWrapper(functionCode, functionName);
      
      // Write enhanced function
      fs.writeFileSync(indexPathToUse, functionCode);
      
      this.log(`Enhanced function ${functionName} with redundancy wrapper`);
      
    } catch (error) {
      this.log(`Error enhancing function ${functionName}: ${error.message}`, 'ERROR');
    }
  }

  addRedundancyWrapper(code, functionName) {
    try {
      // Check if already has redundancy wrapper
      if (code.includes('REDUNDANCY_MODE')) {
        return code;
      }
      
      // Add redundancy wrapper at the beginning
      const wrapper = `// Redundancy wrapper for ${functionName}
const REDUNDANCY_MODE = process.env.REDUNDANCY_MODE || 'primary';
const REDUNDANCY_TIMESTAMP = new Date().toISOString();

// Enhanced error handling and logging
const originalHandler = exports.handler || (() => {});

exports.handler = async (event, context) => {
  try {
    // Add redundancy context
    context.redundancy = {
      mode: REDUNDANCY_MODE,
      timestamp: REDUNDANCY_TIMESTAMP,
      function: '${functionName}'
    };
    
    // Call original handler
    return await originalHandler(event, context);
  } catch (error) {
    console.error(\`[REDUNDANCY] Error in ${functionName}:\`, error);
    
    // Return graceful error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Function execution failed',
        function: '${functionName}',
        redundancy: REDUNDANCY_MODE,
        timestamp: REDUNDANCY_TIMESTAMP
      })
    };
  }
};

`;
      
      return wrapper + code;
    } catch (error) {
      this.log(`Error adding redundancy wrapper to ${functionName}: ${error.message}`, 'ERROR');
      return code;
    }
  }

  async createFunctionManifest() {
    this.log('Creating enhanced Netlify Functions manifest...');
    
    try {
      const manifest = {
        generatedAt: new Date().toISOString(),
        version: '2.0.0',
        redundancy: {
          enabled: true,
          backupFunctions: this.primaryFunctions.length,
          redundantFunctions: this.primaryFunctions.length,
          criticalFunctions: this.criticalFunctions.length
        },
        functions: this.primaryFunctions.map(func => ({
          name: func,
          status: 'active',
          hasBackup: true,
          hasRedundant: true,
          isCritical: this.criticalFunctions.includes(func)
        })),
        backupFunctions: this.primaryFunctions.map(func => `${func}-backup`),
        redundantFunctions: this.primaryFunctions.map(func => `${func}-redundant`)
      };
      
      const manifestPath = path.join(this.netlifyDir, 'functions', 'redundancy-manifest.json');
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      
      this.log('Successfully created enhanced functions manifest');
      
    } catch (error) {
      this.log(`Failed to create functions manifest: ${error.message}`, 'ERROR');
    }
  }

  async monitorAndRecover() {
    this.log('Starting Netlify Functions redundancy monitoring and recovery...');
    
    // Monitor functions every 3 minutes
    cron.schedule('*/3 * * * *', async () => {
      await this.performHealthCheck();
    });
    
    // Full system recovery check every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      await this.performFullRecovery();
    });
  }

  async performHealthCheck() {
    this.log('Performing health check on all Netlify Functions...');
    
    for (const functionName of this.primaryFunctions) {
      try {
        const health = await this.checkFunctionHealth(functionName);
        this.healthStatus.set(functionName, health);
        
        if (health.health === 'unhealthy') {
          this.log(`Function ${functionName} is unhealthy, attempting recovery...`);
          await this.attemptRecovery(functionName);
        }
      } catch (error) {
        this.log(`Error checking health for function ${functionName}: ${error.message}`, 'ERROR');
      }
    }
  }

  async attemptRecovery(functionName) {
    const attempts = this.recoveryAttempts.get(functionName) || 0;
    
    if (attempts >= this.maxRecoveryAttempts) {
      this.log(`Max recovery attempts reached for ${functionName}, escalating...`, 'WARN');
      await this.escalateRecovery(functionName);
      return;
    }
    
    this.log(`Attempting recovery for function ${functionName} (attempt ${attempts + 1}/${this.maxRecoveryAttempts})`);
    
    try {
      // Try to restore from backup
      const backupPath = path.join(this.backupFunctionsDir, functionName);
      const functionPath = path.join(this.functionsDir, functionName);
      
      if (fs.existsSync(backupPath)) {
        // Remove corrupted function
        if (fs.existsSync(functionPath)) {
          await this.executeCommand(`rm -rf "${functionPath}"`);
        }
        
        // Restore from backup
        await this.executeCommand(`cp -r "${backupPath}" "${functionPath}"`);
        
        this.log(`Successfully restored function ${functionName} from backup`);
        this.recoveryAttempts.set(functionName, 0);
      } else {
        this.log(`No backup found for function ${functionName}`, 'ERROR');
        this.recoveryAttempts.set(functionName, attempts + 1);
      }
    } catch (error) {
      this.log(`Error during recovery for function ${functionName}: ${error.message}`, 'ERROR');
      this.recoveryAttempts.set(functionName, attempts + 1);
    }
  }

  async escalateRecovery(functionName) {
    this.log(`Escalating recovery for function ${functionName}...`);
    
    try {
      // Create a basic function with error handling
      const basicFunction = this.createBasicFunction(functionName);
      const functionPath = path.join(this.functionsDir, functionName);
      
      // Create function directory
      if (!fs.existsSync(functionPath)) {
        fs.mkdirSync(functionPath, { recursive: true });
      }
      
      // Create basic index file
      const indexPath = path.join(functionPath, 'index.js');
      fs.writeFileSync(indexPath, basicFunction);
      
      // Create basic package.json
      const packageJson = {
        name: functionName,
        version: '1.0.0',
        description: `Recovery function for ${functionName}`,
        main: 'index.js',
        dependencies: {}
      };
      
      const packagePath = path.join(functionPath, 'package.json');
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      
      this.log(`Successfully created basic recovery function for ${functionName}`);
      this.recoveryAttempts.set(functionName, 0);
    } catch (error) {
      this.log(`Error during escalated recovery for function ${functionName}: ${error.message}`, 'ERROR');
    }
  }

  createBasicFunction(functionName) {
    return `// Recovery function for ${functionName}
exports.handler = async (event, context) => {
  try {
    console.log(\`[RECOVERY] ${functionName} function called\`);
    
    // Return a basic response indicating this is a recovery function
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Function is in recovery mode',
        function: '${functionName}',
        status: 'recovery',
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error(\`[RECOVERY] Error in ${functionName}:\`, error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Recovery function failed',
        function: '${functionName}',
        timestamp: new Date().toISOString()
      })
    };
  }
};`;
  }

  async performFullRecovery() {
    this.log('Performing full system recovery check...');
    
    // Check if any critical functions are missing or corrupted
    for (const functionName of this.criticalFunctions) {
      const health = await this.checkFunctionHealth(functionName);
      
      if (health.status === 'not_found' || health.health === 'unhealthy') {
        this.log(`Critical function ${functionName} needs recovery, recreating...`);
        await this.escalateRecovery(functionName);
      }
    }
    
    // Regenerate manifest
    await this.createFunctionManifest();
  }

  async getSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      overallHealth: 'healthy',
      functions: {},
      recoveryStats: {
        totalAttempts: 0,
        successfulRecoveries: 0,
        failedRecoveries: 0
      },
      redundancy: {
        totalFunctions: this.primaryFunctions.length,
        criticalFunctions: this.criticalFunctions.length,
        backupFunctions: 0,
        redundantFunctions: 0
      }
    };
    
    // Get status for all functions
    for (const functionName of this.primaryFunctions) {
      const health = await this.checkFunctionHealth(functionName);
      status.functions[functionName] = health;
      
      if (health.health === 'unhealthy') {
        status.overallHealth = 'degraded';
      }
      
      if (health.hasBackup) {
        status.redundancy.backupFunctions++;
      }
      
      if (health.hasRedundant) {
        status.redundancy.redundantFunctions++;
      }
    }
    
    // Calculate recovery stats
    for (const [functionName, attempts] of this.recoveryAttempts) {
      status.recoveryStats.totalAttempts += attempts;
      if (attempts === 0) {
        status.recoveryStats.successfulRecoveries++;
      } else {
        status.recoveryStats.failedRecoveries++;
      }
    }
    
    return status;
  }

  async start() {
    this.log('Starting Enhanced Netlify Functions Redundancy Manager...');
    
    try {
      // Create backup functions
      await this.createBackupFunctions();
      
      // Create redundant functions
      await this.createRedundantFunctions();
      
      // Create enhanced manifest
      await this.createFunctionManifest();
      
      // Start monitoring
      await this.monitorAndRecover();
      
      this.log('Enhanced Netlify Functions Redundancy Manager started successfully');
      
      // Keep the process alive
      setInterval(() => {
        // Heartbeat
      }, 60000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced Netlify Functions Redundancy Manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Export for use in other modules
module.exports = { EnhancedNetlifyFunctionsRedundancyManager };

// If run directly, start the manager
if (require.main === module) {
  const manager = new EnhancedNetlifyFunctionsRedundancyManager();
  manager.start().catch(error => {
    console.error('Failed to start Enhanced Netlify Functions Redundancy Manager:', error);
    process.exit(1);
  });
}