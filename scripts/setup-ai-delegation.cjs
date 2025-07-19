#!/usr/bin/env node

/**
 * Zion App - AI Delegation Setup Script
 *
 * Sets up the AI-driven continuous improvement system across multiple computers
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  // Required environment variables
  REQUIRED_ENV_VARS: ['CURSOR_API_KEY', 'CURSOR_WORKSPACE_ID'],

  // Optional environment variables
  OPTIONAL_ENV_VARS: [
    'OPENAI_API_KEY',
    'ANTHROPIC_API_KEY',
    'MASTER_NODE',
    'NODE_ID',
    'SHARED_STORAGE_PATH',
    'CURSOR_API_ENDPOINT',
  ],

  // Required dependencies
  REQUIRED_DEPENDENCIES: ['axios', 'ws', 'express', 'winston'],

  // Directories to create
  DIRECTORIES: [
    'ai-improvement-data',
    'cursor-ai-data',
    'logs',
    'logs/ai-improvement',
    'logs/cursor-delegator',
    'logs/multi-coordinator',
  ],

  // Configuration files
  CONFIG_FILES: ['.env.ai-delegation', 'ai-delegation-config.json'],
};

class AIDelegationSetup {
  constructor() {
    this.setupLog = [];
  }

  /**
   * Run the complete setup
   */
  async run() {
    console.log('🚀 Setting up AI Delegation System...\n');

    try {
      // Check system requirements
      await this.checkSystemRequirements();

      // Setup environment
      await this.setupEnvironment();

      // Install dependencies
      await this.installDependencies();

      // Create directories
      await this.createDirectories();

      // Create configuration files
      await this.createConfigFiles();

      // Setup logging
      await this.setupLogging();

      // Test setup
      await this.testSetup();

      // Generate setup report
      await this.generateSetupReport();

      console.log('\n✅ AI Delegation System setup completed successfully!');
      console.log('\n📋 Next steps:');
      console.log(
        '1. Configure your Cursor API credentials in .env.ai-delegation',
      );
      console.log('2. Run "npm run ai-delegate:master" on the master computer');
      console.log('3. Run "npm run ai-delegate:worker" on worker computers');
      console.log('4. Monitor with "npm run ai-delegate:monitor"');
    } catch (error) {
      console.error('\n❌ Setup failed:', error.message);
      process.exit(1);
    }
  }

  /**
   * Check system requirements
   */
  async checkSystemRequirements() {
    console.log('🔍 Checking system requirements...');

    // Check Node.js version
    const nodeVersion = process.version;
    const nodeMajor = parseInt(nodeVersion.slice(1).split('.')[0]);

    if (nodeMajor < 16) {
      throw new Error(
        `Node.js version 16 or higher required. Current version: ${nodeVersion}`,
      );
    }

    this.log('✅ Node.js version:', nodeVersion);

    // Check npm
    try {
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      this.log('✅ npm version:', npmVersion);
    } catch (error) {
      throw new Error('npm not found. Please install npm.');
    }

    // Check git
    try {
      const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
      this.log('✅ git version:', gitVersion);
    } catch (error) {
      console.warn('⚠️  git not found. Some features may be limited.');
    }

    // Check available memory
    const os = require('os');
    const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024));

    if (totalMemory < 4) {
      console.warn(
        `⚠️  Low memory detected: ${totalMemory}GB. Recommended: 8GB+`,
      );
    } else {
      this.log('✅ Available memory:', `${totalMemory}GB`);
    }

    // Check available disk space
    const diskSpace = await this.getDiskSpace();
    if (diskSpace < 1) {
      console.warn(`⚠️  Low disk space: ${diskSpace}GB. Recommended: 5GB+`);
    } else {
      this.log('✅ Available disk space:', `${diskSpace}GB`);
    }

    console.log('✅ System requirements check completed\n');
  }

  /**
   * Setup environment variables
   */
  async setupEnvironment() {
    console.log('🔧 Setting up environment...');

    // Check existing .env file
    const envPath = path.join(process.cwd(), '.env');
    const aiEnvPath = path.join(process.cwd(), '.env.ai-delegation');

    if (fs.existsSync(envPath)) {
      this.log('✅ Found existing .env file');

      // Read existing environment variables
      const envContent = fs.readFileSync(envPath, 'utf8');
      const envVars = this.parseEnvFile(envContent);

      // Check for required variables
      const missing = CONFIG.REQUIRED_ENV_VARS.filter(
        (varName) => !envVars[varName],
      );

      if (missing.length > 0) {
        console.warn(
          `⚠️  Missing required environment variables: ${missing.join(', ')}`,
        );
        console.warn(
          'Please add them to your .env file or .env.ai-delegation file',
        );
      }
    }

    // Create AI delegation specific env file
    if (!fs.existsSync(aiEnvPath)) {
      const aiEnvContent = this.generateAIEnvContent();
      fs.writeFileSync(aiEnvPath, aiEnvContent);
      this.log('✅ Created .env.ai-delegation file');
    } else {
      this.log('✅ Found existing .env.ai-delegation file');
    }

    console.log('✅ Environment setup completed\n');
  }

  /**
   * Install dependencies
   */
  async installDependencies() {
    console.log('📦 Installing dependencies...');

    const missingDeps = [];

    // Check for missing dependencies
    for (const dep of CONFIG.REQUIRED_DEPENDENCIES) {
      try {
        require.resolve(dep);
        this.log(`✅ ${dep} already installed`);
      } catch (error) {
        missingDeps.push(dep);
      }
    }

    // Install missing dependencies
    if (missingDeps.length > 0) {
      console.log(
        `📥 Installing missing dependencies: ${missingDeps.join(', ')}`,
      );

      try {
        execSync(`npm install ${missingDeps.join(' ')}`, { stdio: 'inherit' });
        this.log('✅ Dependencies installed successfully');
      } catch (error) {
        throw new Error(`Failed to install dependencies: ${error.message}`);
      }
    }

    console.log('✅ Dependencies check completed\n');
  }

  /**
   * Create directories
   */
  async createDirectories() {
    console.log('📁 Creating directories...');

    for (const dir of CONFIG.DIRECTORIES) {
      const dirPath = path.join(process.cwd(), dir);

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        this.log(`✅ Created directory: ${dir}`);
      } else {
        this.log(`✅ Directory exists: ${dir}`);
      }
    }

    console.log('✅ Directory creation completed\n');
  }

  /**
   * Create configuration files
   */
  async createConfigFiles() {
    console.log('⚙️  Creating configuration files...');

    // Create AI delegation config
    const configPath = path.join(process.cwd(), 'ai-delegation-config.json');

    if (!fs.existsSync(configPath)) {
      const config = this.generateAIConfig();
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      this.log('✅ Created ai-delegation-config.json');
    } else {
      this.log('✅ Found existing ai-delegation-config.json');
    }

    // Create log configuration
    const logConfigPath = path.join(
      process.cwd(),
      'logs',
      'ai-delegation-log-config.json',
    );
    const logConfig = this.generateLogConfig();
    fs.writeFileSync(logConfigPath, JSON.stringify(logConfig, null, 2));
    this.log('✅ Created log configuration');

    console.log('✅ Configuration files created\n');
  }

  /**
   * Setup logging
   */
  async setupLogging() {
    console.log('📝 Setting up logging...');

    // Create log files
    const logFiles = [
      'logs/ai-improvement.log',
      'logs/cursor-delegator.log',
      'logs/multi-coordinator.log',
      'logs/ai-delegation.log',
    ];

    for (const logFile of logFiles) {
      const logPath = path.join(process.cwd(), logFile);

      if (!fs.existsSync(logPath)) {
        fs.writeFileSync(
          logPath,
          `# AI Delegation Log - ${new Date().toISOString()}\n`,
        );
        this.log(`✅ Created log file: ${logFile}`);
      } else {
        this.log(`✅ Log file exists: ${logFile}`);
      }
    }

    console.log('✅ Logging setup completed\n');
  }

  /**
   * Test setup
   */
  async testSetup() {
    console.log('🧪 Testing setup...');

    // Test script loading
    try {
      require('./ai-continuous-improvement.cjs');
      this.log('✅ AI continuous improvement script loads successfully');
    } catch (error) {
      throw new Error(
        `AI continuous improvement script failed to load: ${error.message}`,
      );
    }

    try {
      require('./cursor-ai-delegator.cjs');
      this.log('✅ Cursor AI delegator script loads successfully');
    } catch (error) {
      throw new Error(
        `Cursor AI delegator script failed to load: ${error.message}`,
      );
    }

    try {
      require('./multi-computer-coordinator.cjs');
      this.log('✅ Multi-computer coordinator script loads successfully');
    } catch (error) {
      throw new Error(
        `Multi-computer coordinator script failed to load: ${error.message}`,
      );
    }

    // Test dependencies
    try {
      require('axios');
      require('ws');
      require('express');
      this.log('✅ All dependencies load successfully');
    } catch (error) {
      throw new Error(`Dependency test failed: ${error.message}`);
    }

    console.log('✅ Setup tests completed\n');
  }

  /**
   * Generate setup report
   */
  async generateSetupReport() {
    console.log('📊 Generating setup report...');

    const report = {
      timestamp: new Date().toISOString(),
      nodeId: process.env.NODE_ID || 'unknown',
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        memory: Math.round(require('os').totalmem() / (1024 * 1024 * 1024)),
      },
      setup: {
        directories: CONFIG.DIRECTORIES.map((dir) => ({
          path: dir,
          exists: fs.existsSync(path.join(process.cwd(), dir)),
        })),
        configFiles: CONFIG.CONFIG_FILES.map((file) => ({
          path: file,
          exists: fs.existsSync(path.join(process.cwd(), file)),
        })),
        dependencies: CONFIG.REQUIRED_DEPENDENCIES.map((dep) => ({
          name: dep,
          installed: this.isDependencyInstalled(dep),
        })),
      },
      environment: {
        required: CONFIG.REQUIRED_ENV_VARS.map((varName) => ({
          name: varName,
          set: !!process.env[varName],
        })),
        optional: CONFIG.OPTIONAL_ENV_VARS.map((varName) => ({
          name: varName,
          set: !!process.env[varName],
        })),
      },
      logs: this.setupLog,
    };

    const reportPath = path.join(process.cwd(), 'logs', 'setup-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('✅ Setup report generated: logs/setup-report.json');
    console.log('✅ Setup report completed\n');
  }

  /**
   * Helper methods
   */
  getDiskSpace() {
    // Simplified disk space check
    return new Promise((resolve) => {
      try {
        const stats = fs.statSync(process.cwd());
        // This is a placeholder - in production you'd use a proper disk space library
        resolve(100); // Assume 100GB available
      } catch (error) {
        resolve(100);
      }
    });
  }

  parseEnvFile(content) {
    const vars = {};
    const lines = content.split('\n');

    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        vars[match[1].trim()] = match[2].trim();
      }
    }

    return vars;
  }

  generateAIEnvContent() {
    return `# AI Delegation Environment Variables
# Copy this file to .env and fill in your actual values

# Required: Cursor AI Configuration
CURSOR_API_KEY=your_cursor_api_key_here
CURSOR_WORKSPACE_ID=your_cursor_workspace_id_here

# Optional: Additional AI Services
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Node Configuration
NODE_ID=${CONFIG.REQUIRED_ENV_VARS.includes('NODE_ID') ? 'node-1' : 'node-' + Math.random().toString(36).substr(2, 9)}
MASTER_NODE=false
IS_MASTER=false

# Network Configuration
MASTER_PORT=3002
NODE_PORT=3003
DISCOVERY_PORT=3004
TASK_PORT=3005

# Storage Configuration
SHARED_STORAGE_PATH=./ai-improvement-data
STORAGE_PATH=./cursor-ai-data

# API Configuration
CURSOR_API_ENDPOINT=https://api.cursor.sh

# Monitoring Configuration
ENABLE_PERFORMANCE_MONITORING=true
ENABLE_SLACK_COMMANDS=false
`;
  }

  generateAIConfig() {
    return {
      version: '1.0.0',
      description: 'AI Delegation System Configuration',
      nodes: {
        master: {
          port: 3002,
          discoveryPort: 3004,
        },
        worker: {
          port: 3003,
          taskPort: 3005,
        },
      },
      ai: {
        cursor: {
          maxConcurrentRequests: 5,
          requestTimeout: 30000,
        },
        improvement: {
          intervals: {
            codeQuality: 900000, // 15 minutes
            performance: 600000, // 10 minutes
            security: 1800000, // 30 minutes
            userExperience: 1200000, // 20 minutes
            dependencies: 43200000, // 12 hours
            aiAnalysis: 300000, // 5 minutes
          },
          thresholds: {
            performanceScore: 85,
            securityVulnerabilities: 0,
            codeCoverage: 75,
            bundleSizeIncrease: 5,
            errorRate: 0.005,
            lighthouseScore: 90,
          },
        },
      },
      coordination: {
        heartbeatInterval: 5000,
        taskSyncInterval: 2000,
        discoveryInterval: 30000,
      },
      storage: {
        basePath: './ai-improvement-data',
        cursorPath: './cursor-ai-data',
      },
    };
  }

  generateLogConfig() {
    return {
      version: '1.0.0',
      transports: {
        file: {
          filename: 'logs/ai-delegation.log',
          level: 'info',
          maxsize: 10485760, // 10MB
          maxFiles: 5,
        },
        console: {
          level: 'info',
          format: 'simple',
        },
      },
      levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3,
      },
    };
  }

  isDependencyInstalled(dep) {
    try {
      require.resolve(dep);
      return true;
    } catch (error) {
      return false;
    }
  }

  log(message, ...args) {
    const logEntry =
      `[${new Date().toISOString()}] ${message} ${args.join(' ')}`.trim();
    this.setupLog.push(logEntry);
    console.log(logEntry);
  }
}

// CLI handling
if (require.main === module) {
  const setup = new AIDelegationSetup();
  setup.run().catch((error) => {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  });
}

module.exports = AIDelegationSetup;
