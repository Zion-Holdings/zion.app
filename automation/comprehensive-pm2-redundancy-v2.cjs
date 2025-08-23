#!/usr/bin/env node

/**
 * Comprehensive PM2 Redundancy System V2
 * Complete redundancy coverage for all PM2 processes
 * Enhanced monitoring, recovery, and load balancing
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensivePM2RedundancyV2 {
  constructor() {
    this.config = {
      logLevel: process.env.PM2_REDUNDANCY_LOG_LEVEL || 'INFO',
      healthCheckInterval: parseInt(process.env.PM2_HEALTH_CHECK_INTERVAL) || 30000,
      maxRestartAttempts: parseInt(process.env.PM2_MAX_RESTART_ATTEMPTS) || 5,
      autoRecovery: process.env.PM2_AUTO_RECOVERY === 'true',
      processMonitoring: process.env.PM2_PROCESS_MONITORING === 'true',
      logRotation: process.env.PM2_LOG_ROTATION === 'true',
      loadBalancing: process.env.PM2_LOAD_BALANCING === 'true',
      backupInterval: parseInt(process.env.PM2_BACKUP_INTERVAL) || 300000
    };
    
    this.processes = {
      running: [],
      stopped: [],
      errored: [],
      unknown: []
    };
    
    this.ecosystemFiles = [
      'ecosystem.pm2.cjs',
      'ecosystem.comprehensive-redundancy.cjs',
      'ecosystem.redundancy.cjs',
      'ecosystem-redundancy.pm2.cjs'
    ];
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    this.setupLogging();
    
    this.restartAttempts = new Map();
    this.processHistory = new Map();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  setupLogging() {
    const logFile = path.join(this.logDir, 'comprehensive-pm2-redundancy-v2.log');
    this.log = (level, message, data = null) => {
      const timestamp = new Date().toISOString();
      const logEntry = {
        timestamp,
        level,
        message,
        data
      };
      
      console.log(`[${timestamp}] [${level}] ${message}`);
      fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    };
  }

  async start() {
    this.log('INFO', 'Starting Comprehensive PM2 Redundancy System V2...');
    
    try {
      // Initialize PM2 redundancy
      await this.initializePM2Redundancy();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      // Start backup system
      this.startBackupSystem();
      
      this.log('INFO', 'Comprehensive PM2 Redundancy System V2 started successfully');
      
      // Keep the process alive
      setInterval(() => {}, 1000);
      
    } catch (error) {
      this.log('ERROR', 'Failed to start Comprehensive PM2 Redundancy System V2', error);
      process.exit(1);
    }
  }

  async initializePM2Redundancy() {
    this.log('INFO', 'Initializing PM2 Redundancy System...');
    
    try {
      // Check PM2 installation
      await this.checkPM2Installation();
      
      // Discover ecosystem files
      await this.discoverEcosystemFiles();
      
      // Initialize PM2 processes
      await this.initializePM2Processes();
      
      // Setup log rotation
      if (this.config.logRotation) {
        await this.setupLogRotation();
      }
      
      this.log('INFO', 'PM2 Redundancy System initialized successfully');
    } catch (error) {
      this.log('ERROR', 'Failed to initialize PM2 Redundancy System', error);
    }
  }

  async checkPM2Installation() {
    try {
      execSync('pm2 --version', { stdio: 'pipe' });
      this.log('INFO', 'PM2 is installed and accessible');
    } catch (error) {
      this.log('WARN', 'PM2 is not installed, attempting to install...');
      try {
        execSync('npm install -g pm2', { stdio: 'pipe' });
        this.log('INFO', 'PM2 installed successfully');
      } catch (installError) {
        this.log('ERROR', 'Failed to install PM2', installError);
        throw installError;
      }
    }
  }

  async discoverEcosystemFiles() {
    this.log('INFO', 'Discovering PM2 ecosystem files...');
    
    const discoveredFiles = [];
    for (const ecosystemFile of this.ecosystemFiles) {
      const filePath = path.join(process.cwd(), ecosystemFile);
      if (fs.existsSync(filePath)) {
        discoveredFiles.push(ecosystemFile);
        this.log('INFO', `Found ecosystem file: ${ecosystemFile}`);
      }
    }
    
    this.ecosystemFiles = discoveredFiles;
    this.log('INFO', `Discovered ${discoveredFiles.length} ecosystem files`);
  }

  async initializePM2Processes() {
    this.log('INFO', 'Initializing PM2 processes...');
    
    try {
      // Get current PM2 status - try JSON first, fallback to text
      let pm2Status;
      let pm2Processes = [];
      
      try {
        pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        pm2Processes = JSON.parse(pm2Status);
      } catch (jsonError) {
        this.log('WARN', 'PM2 JSON output not supported, using text parsing');
        try {
          pm2Status = execSync('pm2 status', { encoding: 'utf8' });
          pm2Processes = this.parsePM2TextOutput(pm2Status);
        } catch (textError) {
          this.log('ERROR', 'Failed to get PM2 status', textError);
          pm2Processes = [];
        }
      }
      
      // Categorize processes
      this.categorizeProcesses(pm2Processes);
      
      // Start missing processes if auto-recovery is enabled
      if (this.config.autoRecovery) {
        await this.startMissingProcesses();
      }
      
      this.log('INFO', `PM2 processes initialized: ${pm2Processes.length} total`);
    } catch (error) {
      this.log('ERROR', 'Failed to initialize PM2 processes', error);
    }
  }

  categorizeProcesses(pm2Processes) {
    this.processes.running = [];
    this.processes.stopped = [];
    this.processes.errored = [];
    this.processes.unknown = [];
    
    for (const process of pm2Processes) {
      if (process.pm2_env) {
        const status = process.pm2_env.status;
        const processInfo = {
          name: process.name,
          id: process.pm_id,
          status: status,
          uptime: process.pm2_env.pm_uptime,
          memory: process.monit?.memory,
          cpu: process.monit?.cpu,
          restartCount: process.pm2_env.restart_time
        };
        
        switch (status) {
          case 'online':
            this.processes.running.push(processInfo);
            break;
          case 'stopped':
            this.processes.stopped.push(processInfo);
            break;
          case 'errored':
            this.processes.errored.push(processInfo);
            break;
          default:
            this.processes.unknown.push(processInfo);
        }
        
        // Track process history
        if (!this.processHistory.has(process.name)) {
          this.processHistory.set(process.name, []);
        }
        this.processHistory.get(process.name).push({
          timestamp: new Date(),
          status: status,
          restartCount: process.pm2_env.restart_time
        });
      }
    }
  }

  async startMissingProcesses() {
    this.log('INFO', 'Checking for missing processes...');
    
    // Check if critical processes are running
    const criticalProcesses = [
      'zion-auto-sync',
      'master-redundancy-orchestrator',
      'enhanced-pm2-redundancy'
    ];
    
    const runningNames = this.processes.running.map(p => p.name);
    const missingProcesses = criticalProcesses.filter(name => !runningNames.includes(name));
    
    if (missingProcesses.length > 0) {
      this.log('WARN', `Missing critical processes: ${missingProcesses.join(', ')}`);
      
      for (const processName of missingProcesses) {
        try {
          await this.startProcess(processName);
        } catch (error) {
          this.log('ERROR', `Failed to start missing process: ${processName}`, error);
        }
      }
    }
  }

  async startProcess(processName) {
    this.log('INFO', `Starting process: ${processName}`);
    
    try {
      // Try to start from ecosystem files
      for (const ecosystemFile of this.ecosystemFiles) {
        try {
          execSync(`pm2 start ${ecosystemFile} --only ${processName}`, { stdio: 'pipe' });
          this.log('INFO', `Successfully started ${processName} from ${ecosystemFile}`);
          return;
        } catch (error) {
          // Continue to next ecosystem file
        }
      }
      
      // If no ecosystem file worked, try direct start
      execSync(`pm2 start ${processName}`, { stdio: 'pipe' });
      this.log('INFO', `Successfully started ${processName} directly`);
      
    } catch (error) {
      this.log('ERROR', `Failed to start process: ${processName}`, error);
      throw error;
    }
  }

  async setupLogRotation() {
    this.log('INFO', 'Setting up PM2 log rotation...');
    
    try {
      // Install pm2-logrotate if not already installed
      execSync('pm2 install pm2-logrotate', { stdio: 'pipe' });
      
      // Configure log rotation
      execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:compress true', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:workerInterval 60', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:rotateInterval "0 0 * * *"', { stdio: 'pipe' });
      
      this.log('INFO', 'PM2 log rotation configured successfully');
    } catch (error) {
      this.log('WARN', 'Failed to setup PM2 log rotation', error);
    }
  }

  startMonitoring() {
    this.log('INFO', 'Starting PM2 process monitoring...');
    
    // Monitor PM2 processes every 30 seconds
    cron.schedule('*/30 * * * * *', () => {
      this.monitorPM2Processes();
    });
    
    // Monitor system resources every minute
    cron.schedule('0 * * * * *', () => {
      this.monitorSystemResources();
    });
  }

  startHealthChecks() {
    this.log('INFO', 'Starting PM2 health checks...');
    
    // Run initial health check
    this.performHealthCheck();
    
    // Schedule regular health checks
    cron.schedule('*/2 * * * *', () => {
      this.performHealthCheck();
    });
  }

  startBackupSystem() {
    this.log('INFO', 'Starting PM2 backup system...');
    
    // Create PM2 backup every 5 minutes
    cron.schedule('*/5 * * * *', () => {
      this.createPM2Backup();
    });
  }

  async monitorPM2Processes() {
    try {
      let pm2Status;
      let pm2Processes = [];
      
      try {
        pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        pm2Processes = JSON.parse(pm2Status);
      } catch (jsonError) {
        try {
          pm2Status = execSync('pm2 status', { encoding: 'utf8' });
          pm2Processes = this.parsePM2TextOutput(pm2Status);
        } catch (textError) {
          this.log('ERROR', 'Failed to get PM2 status', textError);
          return;
        }
      }
      
      // Categorize processes
      this.categorizeProcesses(pm2Processes);
      
      // Check for failed processes
      if (this.processes.errored.length > 0) {
        this.log('WARN', `Found ${this.processes.errored.length} errored processes`, this.processes.errored);
        
        if (this.config.autoRecovery) {
          await this.recoverFailedProcesses();
        }
      }
      
      // Check for stopped processes
      if (this.processes.stopped.length > 0) {
        this.log('WARN', `Found ${this.processes.stopped.length} stopped processes`, this.processes.stopped);
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to monitor PM2 processes', error);
    }
  }

  async monitorSystemResources() {
    try {
      // Check system memory and CPU usage
      let systemInfo;
      let processes = [];
      
      try {
        systemInfo = execSync('pm2 status --json', { encoding: 'utf8' });
        processes = JSON.parse(systemInfo);
      } catch (jsonError) {
        try {
          systemInfo = execSync('pm2 status', { encoding: 'utf8' });
          processes = this.parsePM2TextOutput(systemInfo);
        } catch (textError) {
          this.log('ERROR', 'Failed to get PM2 status for resource monitoring', textError);
          return;
        }
      }
      
      let totalMemory = 0;
      let totalCPU = 0;
      let processCount = 0;
      
      for (const process of processes) {
        if (process.monit) {
          totalMemory += process.monit.memory || 0;
          totalCPU += process.monit.cpu || 0;
          processCount++;
        }
      }
      
      if (processCount > 0) {
        const avgMemory = totalMemory / processCount;
        const avgCPU = totalCPU / processCount;
        
        this.log('INFO', `System resources - Memory: ${avgMemory.toFixed(2)}MB, CPU: ${avgCPU.toFixed(2)}%, Processes: ${processCount}`);
        
        // Alert if resources are high
        if (avgMemory > 500 || avgCPU > 80) {
          this.log('WARN', 'High resource usage detected', { avgMemory, avgCPU, processCount });
        }
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to monitor system resources', error);
    }
  }

  async performHealthCheck() {
    this.log('INFO', 'Performing PM2 health check...');
    
    try {
      const healthStatus = {
        totalProcesses: this.processes.running.length + this.processes.stopped.length + this.processes.errored.length,
        running: this.processes.running.length,
        stopped: this.processes.stopped.length,
        errored: this.processes.errored.length,
        healthScore: 0,
        issues: []
      };
      
      // Calculate health score
      if (healthStatus.totalProcesses > 0) {
        healthStatus.healthScore = (healthStatus.running / healthStatus.totalProcesses) * 100;
      }
      
      // Identify issues
      if (healthStatus.errored > 0) {
        healthStatus.issues.push(`${healthStatus.errored} processes in error state`);
      }
      
      if (healthStatus.stopped > 0) {
        healthStatus.issues.push(`${healthStatus.stopped} processes stopped`);
      }
      
      if (healthStatus.healthScore < 75) {
        healthStatus.issues.push('Overall health score below 75%');
      }
      
      this.log('INFO', `Health check completed - Score: ${healthStatus.healthScore.toFixed(1)}%`, healthStatus);
      
      // Take action if health is poor
      if (healthStatus.healthScore < 75 && this.config.autoRecovery) {
        await this.performRecoveryActions();
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform health check', error);
    }
  }

  async recoverFailedProcesses() {
    this.log('INFO', 'Attempting to recover failed processes...');
    
    for (const process of this.processes.errored) {
      try {
        const attempts = this.restartAttempts.get(process.name) || 0;
        
        if (attempts < this.config.maxRestartAttempts) {
          this.log('INFO', `Restarting failed process: ${process.name} (attempt ${attempts + 1})`);
          
          execSync(`pm2 restart ${process.name}`, { stdio: 'pipe' });
          this.restartAttempts.set(process.name, attempts + 1);
          
          this.log('INFO', `Successfully restarted process: ${process.name}`);
        } else {
          this.log('ERROR', `Process ${process.name} exceeded maximum restart attempts (${this.config.maxRestartAttempts})`);
        }
      } catch (error) {
        this.log('ERROR', `Failed to restart process: ${process.name}`, error);
      }
    }
  }

  async performRecoveryActions() {
    this.log('INFO', 'Performing recovery actions...');
    
    try {
      // Save current PM2 state
      execSync('pm2 save', { stdio: 'pipe' });
      
      // Restart all processes if health is very poor
      if (this.processes.errored.length > this.processes.running.length) {
        this.log('WARN', 'Critical health state detected, restarting all processes...');
        execSync('pm2 restart all', { stdio: 'pipe' });
      }
      
      // Clear restart attempt counters for recovered processes
      for (const process of this.processes.running) {
        this.restartAttempts.delete(process.name);
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform recovery actions', error);
    }
  }

  async createPM2Backup() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.logDir, 'backups');
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const backupFile = path.join(backupDir, `pm2-backup-${timestamp}.json`);
      
      // Create PM2 backup
      execSync(`pm2 save --force`, { stdio: 'pipe' });
      
      // Copy PM2 dump file
      const dumpFile = path.join(process.cwd(), '.pm2', 'dump.pm2');
      if (fs.existsSync(dumpFile)) {
        fs.copyFileSync(dumpFile, backupFile);
        this.log('INFO', `PM2 backup created: ${backupFile}`);
      }
      
      // Clean old backups (keep last 10)
      this.cleanOldBackups(backupDir, 10);
      
    } catch (error) {
      this.log('ERROR', 'Failed to create PM2 backup', error);
    }
  }

  cleanOldBackups(backupDir, keepCount) {
    try {
      const files = fs.readdirSync(backupDir)
        .filter(file => file.startsWith('pm2-backup-'))
        .map(file => ({
          name: file,
          path: path.join(backupDir, file),
          time: fs.statSync(path.join(backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);
      
      // Remove old backups
      for (let i = keepCount; i < files.length; i++) {
        fs.unlinkSync(files[i].path);
        this.log('INFO', `Removed old backup: ${files[i].name}`);
      }
    } catch (error) {
      this.log('ERROR', 'Failed to clean old backups', error);
    }
  }

        parsePM2TextOutput(textOutput) {
        try {
          const lines = textOutput.split('\n');
          const processes = [];
          
          for (const line of lines) {
            // Skip header lines and empty lines
            if (line.includes('┌─') || line.includes('├─') || line.includes('└─') || line.includes('─') || !line.trim()) {
              continue;
            }
            
            // Skip column headers
            if (line.includes('id') && line.includes('name') && line.includes('status')) {
              continue;
            }
            
            // Process line - look for lines with pipe separators
            if (line.includes('│')) {
              const parts = line.split('│').map(part => part.trim()).filter(part => part.length > 0);
              
              if (parts.length >= 9) {
                // Strip ANSI color codes from the ID field
                const cleanId = parts[0].replace(/\u001b\[[0-9;]*m/g, '');
                const cleanStatus = parts[8].replace(/\u001b\[[0-9;]*m/g, '');
                
                const process = {
                  pm_id: parseInt(cleanId) || 0,
                  name: parts[1] || 'unknown',
                  pm2_env: {
                    status: cleanStatus || 'unknown', // status is at index 8
                    pm_uptime: 0,
                    restart_time: parseInt(parts[7]) || 0 // restart count is at index 7
                  },
                  monit: {
                    memory: 0,
                    cpu: 0
                  }
                };
                
                // Try to parse memory and CPU if available
                if (parts[9] && parts[9] !== 'N/A' && parts[9] !== '0%') {
                  const cpuStr = parts[9].replace('%', '');
                  process.monit.cpu = parseFloat(cpuStr) || 0;
                }
                
                if (parts[10] && parts[10] !== 'N/A') {
                  const memStr = parts[10].replace('mb', '').replace('MB', '');
                  process.monit.memory = parseFloat(memStr) || 0;
                }
                
                // Only add if we have a valid process ID (0 is valid in PM2)
                if (process.pm_id >= 0) {
                  processes.push(process);
                }
              }
            }
          }
          
          this.log('INFO', `Parsed ${processes.length} PM2 processes from text output`);
          return processes;
        } catch (error) {
          this.log('ERROR', 'Failed to parse PM2 text output', error);
          return [];
        }
      }

  getStatus() {
    return {
      processes: this.processes,
      config: this.config,
      restartAttempts: Object.fromEntries(this.restartAttempts),
      health: {
        total: this.processes.running.length + this.processes.stopped.length + this.processes.errored.length,
        running: this.processes.running.length,
        stopped: this.processes.stopped.length,
        errored: this.processes.errored.length,
        healthScore: this.processes.running.length > 0 ? 
          (this.processes.running.length / (this.processes.running.length + this.processes.stopped.length + this.processes.errored.length)) * 100 : 0
      }
    };
  }

  async stop() {
    this.log('INFO', 'Stopping Comprehensive PM2 Redundancy System V2...');
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensivePM2RedundancyV2();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await system.stop();
  });
  
  process.on('SIGTERM', async () => {
    await system.stop();
  });
  
  // Start the system
  system.start().catch(error => {
    console.error('Failed to start Comprehensive PM2 Redundancy System V2:', error);
    process.exit(1);
  });
}

module.exports = ComprehensivePM2RedundancyV2;