#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class EnhancedAutonomousSystemLauncher {
  constructor() {
    this.processes = new Map();
    this.config = this.loadConfig();
    this.logs = [];
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'launcher-config.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading launcher config:', error);
    }
    return {
      autoStart: true,
      monitoring: true,
      logLevel: 'info',
      maxRetries: 3,
      healthCheckInterval: 30000,
      backupInterval: 3600000
    };
  }

  async launch() {
    console.log('🚀 Launching Enhanced Autonomous System...');
    
    try {
      // Create necessary directories
      this.ensureDirectories();
      
      // Initialize database tables
      await this.initializeDatabase();
      
      // Start core components
      await this.startCoreComponents();
      
      // Start autonomous agents
      await this.startAutonomousAgents();
      
      // Start orchestrator
      await this.startOrchestrator();
      
      // Start cron system
      await this.startCronSystem();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      console.log('✅ Enhanced Autonomous System launched successfully');
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Error launching system:', error);
      process.exit(1);
    }
  }

  ensureDirectories() {
    const directories = [
      'logs',
      'agents',
      'orchestrators',
      'backups',
      'analytics',
      'reports',
      'templates',
      'market-research',
      'content-generation',
      'marketing-agents',
      'sales-agents',
      'analytics-agents',
      'pids'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initializeDatabase() {
    console.log('🗄️ Initializing database...');
    
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    try {
      // Create autonomous_agents table
      await supabase.rpc('create_autonomous_agents_table', {});
      
      // Create system_metrics table
      await supabase.rpc('create_system_metrics_table', {});
      
      // Create agent_logs table
      await supabase.rpc('create_agent_logs_table', {});
      
      console.log('✅ Database initialized');
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  async startCoreComponents() {
    console.log('🔧 Starting core components...');
    
    // Start enhanced autonomous system
    await this.startProcess('enhanced-autonomous-system', 'node enhanced-autonomous-system.js');
    
    // Start agent factory
    await this.startProcess('agent-factory', 'node autonomous-agent-factory.js');
    
    console.log('✅ Core components started');
  }

  async startAutonomousAgents() {
    console.log('🤖 Starting autonomous agents...');
    
    const agentTypes = [
      'content-generation',
      'marketing',
      'sales',
      'analytics',
      'research',
      'social-media',
      'seo',
      'support',
      'data-processing',
      'qa'
    ];

    for (const agentType of agentTypes) {
      await this.createAndStartAgent(agentType);
    }

    console.log('✅ Autonomous agents started');
  }

  async createAndStartAgent(agentType) {
    try {
      const AgentFactory = require('./autonomous-agent-factory');
      const factory = new AgentFactory();
      
      const agentId = await factory.createAgent(agentType, {
        name: `${agentType.charAt(0).toUpperCase() + agentType.slice(1)} Agent`,
        autoStart: true,
        monitoring: true
      });

      console.log(`✅ Created and started ${agentType} agent: ${agentId}`);
    } catch (error) {
      console.error(`❌ Error creating ${agentType} agent:`, error);
    }
  }

  async startOrchestrator() {
    console.log('🎼 Starting orchestrator...');
    
    await this.startProcess('orchestrator', 'node autonomous-agent-orchestrator.js');
    
    console.log('✅ Orchestrator started');
  }

  async startCronSystem() {
    console.log('⏰ Starting cron system...');
    
    await this.startProcess('cron-system', 'node enhanced-cron-system.js');
    
    console.log('✅ Cron system started');
  }

  async startProcess(name, command) {
    return new Promise((resolve, reject) => {
      const process = exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Error in ${name}:`, error);
          this.log(`Process ${name} failed: ${error.message}`, 'error');
        } else {
          console.log(`✅ ${name} completed successfully`);
        }
      });

      // Store process reference
      this.processes.set(name, process);
      
      // Save PID
      const pidPath = path.join(__dirname, 'pids', `${name}.pid`);
      fs.writeFileSync(pidPath, process.pid.toString());

      // Handle process events
      process.on('error', (error) => {
        console.error(`❌ Process ${name} error:`, error);
        this.log(`Process ${name} error: ${error.message}`, 'error');
      });

      process.on('exit', (code) => {
        console.log(`Process ${name} exited with code ${code}`);
        this.processes.delete(name);
        
        // Remove PID file
        const pidPath = path.join(__dirname, 'pids', `${name}.pid`);
        if (fs.existsSync(pidPath)) {
          fs.unlinkSync(pidPath);
        }
      });

      // Wait a bit for process to start
      setTimeout(() => {
        if (process.pid) {
          console.log(`✅ Started ${name} (PID: ${process.pid})`);
          resolve();
        } else {
          reject(new Error(`Failed to start ${name}`));
        }
      }, 2000);
    });
  }

  startMonitoring() {
    if (!this.config.monitoring) return;

    console.log('📊 Starting monitoring...');
    
    setInterval(() => {
      this.monitorProcesses();
    }, 30000); // Check every 30 seconds

    setInterval(() => {
      this.generateSystemReport();
    }, 300000); // Generate report every 5 minutes
  }

  monitorProcesses() {
    const activeProcesses = Array.from(this.processes.keys());
    console.log(`📈 Active processes: ${activeProcesses.length}`);
    
    activeProcesses.forEach(processName => {
      const process = this.processes.get(processName);
      if (process && process.pid) {
        // Check if process is still running
        try {
          process.kill(0); // Send signal 0 to check if process exists
        } catch (error) {
          console.log(`⚠️ Process ${processName} is not responding`);
          this.restartProcess(processName);
        }
      }
    });
  }

  async restartProcess(processName) {
    console.log(`🔄 Restarting process: ${processName}`);
    
    const process = this.processes.get(processName);
    if (process) {
      process.kill('SIGTERM');
      this.processes.delete(processName);
    }

    // Wait a bit before restarting
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Restart the process
    try {
      switch (processName) {
        case 'enhanced-autonomous-system':
          await this.startProcess(processName, 'node enhanced-autonomous-system.js');
          break;
        case 'orchestrator':
          await this.startProcess(processName, 'node autonomous-agent-orchestrator.js');
          break;
        case 'cron-system':
          await this.startProcess(processName, 'node enhanced-cron-system.js');
          break;
        default:
          console.log(`Unknown process: ${processName}`);
      }
    } catch (error) {
      console.error(`❌ Failed to restart ${processName}:`, error);
    }
  }

  startHealthChecks() {
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    console.log('🏥 Performing health check...');
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      processes: Array.from(this.processes.keys()),
      activeProcesses: this.processes.size,
      systemHealth: 'good',
      issues: []
    };

    // Check each process
    for (const [name, process] of this.processes) {
      try {
        process.kill(0);
      } catch (error) {
        healthStatus.issues.push(`${name} is not responding`);
        healthStatus.systemHealth = 'warning';
      }
    }

    // Save health status
    const healthPath = path.join(__dirname, 'logs', `health_${Date.now()}.json`);
    fs.writeFileSync(healthPath, JSON.stringify(healthStatus, null, 2));

    if (healthStatus.issues.length > 0) {
      console.log(`⚠️ Health check issues: ${healthStatus.issues.join(', ')}`);
    } else {
      console.log('✅ Health check passed');
    }
  }

  async generateSystemReport() {
    console.log('📋 Generating system report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processes: Array.from(this.processes.keys()),
      activeProcesses: this.processes.size,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      systemHealth: 'good',
      recommendations: []
    };

    // Add recommendations based on system state
    if (this.processes.size < 3) {
      report.recommendations.push('Consider starting additional processes for redundancy');
    }

    if (process.memoryUsage().heapUsed > 100 * 1024 * 1024) { // 100MB
      report.recommendations.push('High memory usage detected, consider optimization');
    }

    // Save report
    const reportPath = path.join(__dirname, 'reports', `system_report_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('✅ System report generated');
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      processCount: this.processes.size
    };

    this.logs.push(logEntry);
    
    // Keep only recent logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }

    // Save to file
    const logPath = path.join(__dirname, 'logs', `launcher_${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

    console.log(`[LAUNCHER] [${level.toUpperCase()}] ${message}`);
  }

  keepAlive() {
    console.log('🔄 System is running. Press Ctrl+C to stop.');
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down Enhanced Autonomous System...');
      this.shutdown();
    });

    process.on('SIGTERM', () => {
      console.log('\n🛑 Received SIGTERM, shutting down...');
      this.shutdown();
    });
  }

  async shutdown() {
    console.log('🔄 Stopping all processes...');
    
    // Stop all processes
    for (const [name, process] of this.processes) {
      console.log(`🛑 Stopping ${name}...`);
      try {
        process.kill('SIGTERM');
      } catch (error) {
        console.error(`❌ Error stopping ${name}:`, error);
      }
    }

    // Wait for processes to stop
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Force kill remaining processes
    for (const [name, process] of this.processes) {
      try {
        process.kill('SIGKILL');
      } catch (error) {
        console.error(`❌ Error force killing ${name}:`, error);
      }
    }

    console.log('✅ Enhanced Autonomous System stopped');
    process.exit(0);
  }

  getStatus() {
    return {
      processes: Array.from(this.processes.keys()),
      activeProcesses: this.processes.size,
      uptime: process.uptime(),
      config: this.config,
      logs: this.logs.slice(-10)
    };
  }
}

// Export the launcher
module.exports = EnhancedAutonomousSystemLauncher;

// If run directly, launch the system
if (require.main === module) {
  const launcher = new EnhancedAutonomousSystemLauncher();
  launcher.launch().catch(console.error);
} 