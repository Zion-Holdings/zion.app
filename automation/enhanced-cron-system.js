const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');
const EnhancedAutonomousSystem = require('./enhanced-autonomous-system');

class EnhancedCronSystem extends EventEmitter {
  constructor() {
    super();
    this.autonomousSystem = new EnhancedAutonomousSystem();
    this.cronJobs = new Map();
    this.scheduledTasks = new Map();
    this.systemStatus = {
      totalJobs: 0,
      activeJobs: 0,
      failedJobs: 0,
      lastExecution: null,
      nextExecution: null,
      systemUptime: Date.now()
    };
    
    this.config = {
      agentCreationInterval: 1800000, // 30 minutes
      orchestratorCreationInterval: 3600000, // 1 hour
      healthCheckInterval: 60000, // 1 minute
      researchInterval: 7200000, // 2 hours
      improvementInterval: 5400000, // 1.5 hours
      backupInterval: 86400000, // 24 hours
      maxConcurrentJobs: 20,
      retryAttempts: 3,
      retryDelay: 300000 // 5 minutes
    };
    
    this.initializeCronSystem();
  }

  async initializeCronSystem() {
    console.log('[EnhancedCronSystem] Initializing enhanced cron system...');
    
    try {
      // Set up event listeners
      this.setupEventListeners();
      
      // Initialize scheduled jobs
      await this.initializeScheduledJobs();
      
      // Start the cron system
      this.startCronSystem();
      
      console.log('[EnhancedCronSystem] Cron system initialization completed');
      this.emit('cronSystemReady');
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Initialization error:', error);
      this.emit('cronSystemError', error);
    }
  }

  setupEventListeners() {
    // Listen to autonomous system events
    this.autonomousSystem.on('systemReady', () => {
      console.log('[EnhancedCronSystem] Autonomous system ready');
    });

    this.autonomousSystem.on('agentStarted', (agent) => {
      console.log(`[EnhancedCronSystem] Agent started: ${agent.name}`);
      this.updateSystemStatus();
    });

    this.autonomousSystem.on('agentStopped', (agent) => {
      console.log(`[EnhancedCronSystem] Agent stopped: ${agent.name}`);
      this.updateSystemStatus();
    });

    this.autonomousSystem.on('researchCompleted', (status) => {
      console.log('[EnhancedCronSystem] Research completed, triggering improvements');
      this.triggerImprovements();
    });

    this.autonomousSystem.on('improvementsApplied', (improvements) => {
      console.log(`[EnhancedCronSystem] ${improvements.length} improvements applied`);
      this.updateSystemStatus();
    });
  }

  async initializeScheduledJobs() {
    const scheduledJobs = [
      {
        id: 'agent-creation',
        name: 'Autonomous Agent Creation',
        schedule: this.config.agentCreationInterval,
        task: () => this.createNewAgents(),
        enabled: true,
        lastRun: null,
        nextRun: Date.now() + this.config.agentCreationInterval
      },
      {
        id: 'orchestrator-creation',
        name: 'Orchestrator Creation',
        schedule: this.config.orchestratorCreationInterval,
        task: () => this.createNewOrchestrators(),
        enabled: true,
        lastRun: null,
        nextRun: Date.now() + this.config.orchestratorCreationInterval
      },
      {
        id: 'health-check',
        name: 'System Health Check',
        schedule: this.config.healthCheckInterval,
        task: () => this.performHealthCheck(),
        enabled: true,
        lastRun: null,
        nextRun: Date.now() + this.config.healthCheckInterval
      },
      {
        id: 'research-cycle',
        name: 'Research and Discovery',
        schedule: this.config.researchInterval,
        task: () => this.performResearchCycle(),
        enabled: true,
        lastRun: null,
        nextRun: Date.now() + this.config.researchInterval
      },
      {
        id: 'improvement-cycle',
        name: 'System Improvement',
        schedule: this.config.improvementInterval,
        task: () => this.performImprovementCycle(),
        enabled: true,
        lastRun: null,
        nextRun: Date.now() + this.config.improvementInterval
      },
      {
        id: 'backup-cycle',
        name: 'System Backup',
        schedule: this.config.backupInterval,
        task: () => this.performSystemBackup(),
        enabled: true,
        lastRun: null,
        nextRun: Date.now() + this.config.backupInterval
      }
    ];

    for (const job of scheduledJobs) {
      this.scheduledTasks.set(job.id, job);
    }

    this.systemStatus.totalJobs = scheduledJobs.length;
    this.systemStatus.activeJobs = scheduledJobs.filter(job => job.enabled).length;
  }

  startCronSystem() {
    console.log('[EnhancedCronSystem] Starting cron system...');
    
    // Start the main cron loop
    this.cronLoop();
    
    // Start monitoring
    this.startMonitoring();
  }

  async cronLoop() {
    while (true) {
      const now = Date.now();
      
      // Check for jobs that need to run
      for (const [jobId, job] of this.scheduledTasks) {
        if (job.enabled && job.nextRun <= now) {
          await this.executeJob(job);
        }
      }
      
      // Wait before next check
      await this.sleep(1000); // Check every second
    }
  }

  async executeJob(job) {
    try {
      console.log(`[EnhancedCronSystem] Executing job: ${job.name}`);
      
      job.lastRun = Date.now();
      job.nextRun = Date.now() + job.schedule;
      
      this.systemStatus.lastExecution = new Date().toISOString();
      this.systemStatus.activeJobs++;
      
      // Execute the job
      await job.task();
      
      console.log(`[EnhancedCronSystem] Job completed: ${job.name}`);
      
    } catch (error) {
      console.error(`[EnhancedCronSystem] Job failed: ${job.name}`, error);
      this.systemStatus.failedJobs++;
      
      // Retry logic
      await this.handleJobFailure(job, error);
    } finally {
      this.systemStatus.activeJobs--;
      this.updateSystemStatus();
    }
  }

  async handleJobFailure(job, error) {
    const retryCount = job.retryCount || 0;
    
    if (retryCount < this.config.retryAttempts) {
      job.retryCount = retryCount + 1;
      console.log(`[EnhancedCronSystem] Retrying job ${job.name} (attempt ${retryCount + 1})`);
      
      setTimeout(async () => {
        await this.executeJob(job);
      }, this.config.retryDelay);
    } else {
      console.error(`[EnhancedCronSystem] Job ${job.name} failed permanently after ${this.config.retryAttempts} attempts`);
      job.enabled = false;
      this.emit('jobFailed', { job, error });
    }
  }

  async createNewAgents() {
    console.log('[EnhancedCronSystem] Creating new autonomous agents...');
    
    try {
      const agentTemplates = [
        {
          type: 'content',
          capabilities: ['content_generation', 'seo_optimization', 'multimodal_creation']
        },
        {
          type: 'research',
          capabilities: ['web_research', 'trend_analysis', 'data_collection']
        },
        {
          type: 'optimization',
          capabilities: ['performance_optimization', 'resource_management', 'efficiency_improvement']
        },
        {
          type: 'monitoring',
          capabilities: ['health_monitoring', 'alert_management', 'performance_tracking']
        }
      ];

      const selectedTemplate = agentTemplates[Math.floor(Math.random() * agentTemplates.length)];
      const newAgent = await this.autonomousSystem.createNewAgent(selectedTemplate);
      
      console.log(`[EnhancedCronSystem] Created new agent: ${newAgent.name}`);
      this.emit('agentCreated', newAgent);
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Error creating new agents:', error);
      throw error;
    }
  }

  async createNewOrchestrators() {
    console.log('[EnhancedCronSystem] Creating new orchestrators...');
    
    try {
      const orchestratorTemplates = [
        {
          type: 'workflow',
          managedAgents: ['content-generator', 'research-agent'],
          capabilities: ['workflow_management', 'task_distribution', 'quality_assurance']
        },
        {
          type: 'monitoring',
          managedAgents: ['monitor-agent'],
          capabilities: ['system_monitoring', 'alert_management', 'performance_tracking']
        },
        {
          type: 'optimization',
          managedAgents: ['optimization-agent'],
          capabilities: ['resource_optimization', 'performance_improvement', 'efficiency_management']
        }
      ];

      const selectedTemplate = orchestratorTemplates[Math.floor(Math.random() * orchestratorTemplates.length)];
      const newOrchestrator = await this.autonomousSystem.createOrchestrator(selectedTemplate);
      
      console.log(`[EnhancedCronSystem] Created new orchestrator: ${newOrchestrator.name}`);
      this.emit('orchestratorCreated', newOrchestrator);
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Error creating new orchestrators:', error);
      throw error;
    }
  }

  async performHealthCheck() {
    console.log('[EnhancedCronSystem] Performing system health check...');
    
    try {
      const systemStatus = this.autonomousSystem.getSystemStatus();
      
      // Check overall system health
      if (systemStatus.overallHealth < 80) {
        console.warn(`[EnhancedCronSystem] System health is low: ${systemStatus.overallHealth}%`);
        this.emit('healthWarning', systemStatus);
      }
      
      // Check individual agent health
      for (const agent of systemStatus.agents) {
        if (agent.health < 70) {
          console.warn(`[EnhancedCronSystem] Agent ${agent.name} health is low: ${agent.health}%`);
          await this.autonomousSystem.restartAgent(agent.id);
        }
      }
      
      // Check orchestrator health
      for (const orchestrator of systemStatus.orchestrators) {
        if (orchestrator.health < 75) {
          console.warn(`[EnhancedCronSystem] Orchestrator ${orchestrator.name} health is low: ${orchestrator.health}%`);
        }
      }
      
      console.log('[EnhancedCronSystem] Health check completed');
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Health check error:', error);
      throw error;
    }
  }

  async performResearchCycle() {
    console.log('[EnhancedCronSystem] Performing research cycle...');
    
    try {
      // Trigger research in the autonomous system
      await this.autonomousSystem.performWebResearch();
      
      // Analyze research results and plan improvements
      const systemStatus = this.autonomousSystem.getSystemStatus();
      
      if (systemStatus.aiTrends.length > 0) {
        console.log(`[EnhancedCronSystem] Discovered ${systemStatus.aiTrends.length} new AI trends`);
      }
      
      if (systemStatus.newCapabilities.length > 0) {
        console.log(`[EnhancedCronSystem] Discovered ${systemStatus.newCapabilities.length} new capabilities`);
      }
      
      console.log('[EnhancedCronSystem] Research cycle completed');
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Research cycle error:', error);
      throw error;
    }
  }

  async performImprovementCycle() {
    console.log('[EnhancedCronSystem] Performing improvement cycle...');
    
    try {
      // Trigger auto-improvement in the autonomous system
      await this.autonomousSystem.performAutoImprovement();
      
      // Apply discovered improvements
      const systemStatus = this.autonomousSystem.getSystemStatus();
      
      // Create new agents based on discovered capabilities
      if (systemStatus.newCapabilities.length > 0) {
        const highPriorityCapabilities = systemStatus.newCapabilities.filter(
          cap => cap.priority === 'high'
        );
        
        for (const capability of highPriorityCapabilities.slice(0, 2)) {
          await this.createNewAgents();
        }
      }
      
      console.log('[EnhancedCronSystem] Improvement cycle completed');
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Improvement cycle error:', error);
      throw error;
    }
  }

  async performSystemBackup() {
    console.log('[EnhancedCronSystem] Performing system backup...');
    
    try {
      const backupData = {
        timestamp: new Date().toISOString(),
        systemStatus: this.autonomousSystem.getSystemStatus(),
        cronStatus: this.getCronStatus(),
        config: this.config
      };
      
      const backupPath = path.join(__dirname, 'backups', `backup-${Date.now()}.json`);
      
      // Ensure backup directory exists
      const backupDir = path.dirname(backupPath);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
      
      console.log(`[EnhancedCronSystem] Backup completed: ${backupPath}`);
      
      // Clean up old backups (keep last 10)
      this.cleanupOldBackups();
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Backup error:', error);
      throw error;
    }
  }

  cleanupOldBackups() {
    try {
      const backupDir = path.join(__dirname, 'backups');
      if (!fs.existsSync(backupDir)) return;
      
      const backupFiles = fs.readdirSync(backupDir)
        .filter(file => file.startsWith('backup-') && file.endsWith('.json'))
        .map(file => ({
          name: file,
          path: path.join(backupDir, file),
          time: fs.statSync(path.join(backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);
      
      // Keep only the last 10 backups
      if (backupFiles.length > 10) {
        const filesToDelete = backupFiles.slice(10);
        for (const file of filesToDelete) {
          fs.unlinkSync(file.path);
          console.log(`[EnhancedCronSystem] Deleted old backup: ${file.name}`);
        }
      }
    } catch (error) {
      console.error('[EnhancedCronSystem] Backup cleanup error:', error);
    }
  }

  startMonitoring() {
    setInterval(() => {
      this.updateSystemStatus();
    }, 30000); // Update every 30 seconds
  }

  updateSystemStatus() {
    const systemStatus = this.autonomousSystem.getSystemStatus();
    
    this.systemStatus.totalJobs = this.scheduledTasks.size;
    this.systemStatus.activeJobs = Array.from(this.scheduledTasks.values())
      .filter(job => job.enabled).length;
    
    // Find next execution time
    const enabledJobs = Array.from(this.scheduledTasks.values()).filter(job => job.enabled);
    if (enabledJobs.length > 0) {
      const nextJob = enabledJobs.reduce((earliest, job) => 
        job.nextRun < earliest.nextRun ? job : earliest
      );
      this.systemStatus.nextExecution = new Date(nextJob.nextRun).toISOString();
    }
  }

  getCronStatus() {
    return {
      ...this.systemStatus,
      scheduledTasks: Array.from(this.scheduledTasks.values()),
      autonomousSystemStatus: this.autonomousSystem.getSystemStatus()
    };
  }

  async triggerImprovements() {
    console.log('[EnhancedCronSystem] Triggering improvements based on research...');
    
    try {
      // Create new specialized agents based on research findings
      await this.createNewAgents();
      
      // Trigger improvement cycle
      await this.performImprovementCycle();
      
    } catch (error) {
      console.error('[EnhancedCronSystem] Error triggering improvements:', error);
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async shutdown() {
    console.log('[EnhancedCronSystem] Shutting down enhanced cron system...');
    
    // Stop all scheduled tasks
    for (const [jobId, job] of this.scheduledTasks) {
      job.enabled = false;
    }
    
    // Shutdown autonomous system
    await this.autonomousSystem.shutdown();
    
    this.emit('cronSystemShutdown');
  }
}

module.exports = EnhancedCronSystem; 