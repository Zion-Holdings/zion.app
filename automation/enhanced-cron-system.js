const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class EnhancedCronSystem {
  constructor() {
    this.jobs = new Map();
    this.schedules = new Map();
    this.metrics = {
      totalJobs: 0,
      activeJobs: 0,
      failedJobs: 0,
      lastRun: null,
      uptime: Date.now()
    };
    this.config = this.loadConfig();
    this.logs = [];
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'cron-config.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading cron config:', error);
    }
    return {
      maxConcurrentJobs: 10,
      jobTimeout: 300000,
      retryAttempts: 3,
      logRetention: 30,
      monitoring: true,
      autoRestart: true,
      performanceTracking: true
    };
  }

  async initialize() {
    console.log('⏰ Initializing Enhanced Cron System...');
    
    // Create necessary directories
    this.ensureDirectories();
    
    // Load existing schedules
    await this.loadSchedules();
    
    // Start monitoring
    this.startMonitoring();
    
    // Initialize default schedules
    this.initializeDefaultSchedules();
    
    console.log('✅ Enhanced Cron System initialized successfully');
  }

  ensureDirectories() {
    const directories = [
      'cron-jobs',
      'schedules',
      'logs',
      'backups',
      'reports'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async loadSchedules() {
    const schedulesPath = path.join(__dirname, 'schedules');
    if (fs.existsSync(schedulesPath)) {
      const files = fs.readdirSync(schedulesPath);
      files.forEach(file => {
        if (file.endsWith('.json')) {
          try {
            const schedule = JSON.parse(fs.readFileSync(path.join(schedulesPath, file), 'utf8'));
            this.schedules.set(schedule.id, schedule);
          } catch (error) {
            console.error(`Error loading schedule ${file}:`, error);
          }
        }
      });
    }
  }

  initializeDefaultSchedules() {
    // System maintenance schedules
    this.createSchedule({
      id: 'system-backup',
      name: 'System Backup',
      description: 'Daily system backup',
      cron: '0 2 * * *',
      command: 'node automation/backup-system.js',
      enabled: true,
      priority: 'high'
    });

    this.createSchedule({
      id: 'health-check',
      name: 'System Health Check',
      description: 'Check system health every 5 minutes',
      cron: '*/5 * * * *',
      command: 'node automation/health-check.js',
      enabled: true,
      priority: 'high'
    });

    this.createSchedule({
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Optimize system performance every 30 minutes',
      cron: '*/30 * * * *',
      command: 'node automation/optimize-performance.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'analytics-collection',
      name: 'Analytics Collection',
      description: 'Collect analytics data every hour',
      cron: '0 * * * *',
      command: 'node automation/collect-analytics.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'market-research',
      name: 'Market Research',
      description: 'Perform market research every 6 hours',
      cron: '0 */6 * * *',
      command: 'node automation/market-research.js',
      enabled: true,
      priority: 'low'
    });

    this.createSchedule({
      id: 'content-generation',
      name: 'Content Generation',
      description: 'Generate content every 2 hours',
      cron: '0 */2 * * *',
      command: 'node automation/content-generation.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'social-media',
      name: 'Social Media Management',
      description: 'Manage social media every hour',
      cron: '0 * * * *',
      command: 'node automation/social-media-management.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'seo-optimization',
      name: 'SEO Optimization',
      description: 'Optimize SEO every 4 hours',
      cron: '0 */4 * * *',
      command: 'node automation/seo-optimization.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'lead-generation',
      name: 'Lead Generation',
      description: 'Generate leads every 3 hours',
      cron: '0 */3 * * *',
      command: 'node automation/lead-generation.js',
      enabled: true,
      priority: 'high'
    });

    this.createSchedule({
      id: 'email-campaigns',
      name: 'Email Campaigns',
      description: 'Send email campaigns every 6 hours',
      cron: '0 */6 * * *',
      command: 'node automation/email-campaigns.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'data-cleanup',
      name: 'Data Cleanup',
      description: 'Clean up old data daily',
      cron: '0 3 * * *',
      command: 'node automation/data-cleanup.js',
      enabled: true,
      priority: 'low'
    });

    this.createSchedule({
      id: 'report-generation',
      name: 'Report Generation',
      description: 'Generate reports daily',
      cron: '0 6 * * *',
      command: 'node automation/generate-reports.js',
      enabled: true,
      priority: 'medium'
    });

    this.createSchedule({
      id: 'agent-monitoring',
      name: 'Agent Monitoring',
      description: 'Monitor agent performance every 10 minutes',
      cron: '*/10 * * * *',
      command: 'node automation/monitor-agents.js',
      enabled: true,
      priority: 'high'
    });

    this.createSchedule({
      id: 'workload-balancing',
      name: 'Workload Balancing',
      description: 'Balance workload every 5 minutes',
      cron: '*/5 * * * *',
      command: 'node automation/balance-workload.js',
      enabled: true,
      priority: 'high'
    });

    this.createSchedule({
      id: 'error-recovery',
      name: 'Error Recovery',
      description: 'Recover from errors every 2 minutes',
      cron: '*/2 * * * *',
      command: 'node automation/error-recovery.js',
      enabled: true,
      priority: 'high'
    });

    this.createSchedule({
      id: 'performance-analysis',
      name: 'Performance Analysis',
      description: 'Analyze performance every 15 minutes',
      cron: '*/15 * * * *',
      command: 'node automation/analyze-performance.js',
      enabled: true,
      priority: 'medium'
    });
  }

  createSchedule(scheduleConfig) {
    const schedule = {
      id: scheduleConfig.id,
      name: scheduleConfig.name,
      description: scheduleConfig.description,
      cron: scheduleConfig.cron,
      command: scheduleConfig.command,
      enabled: scheduleConfig.enabled,
      priority: scheduleConfig.priority,
      lastRun: null,
      nextRun: null,
      runCount: 0,
      successCount: 0,
      failureCount: 0,
      avgDuration: 0,
      lastError: null,
      createdAt: new Date().toISOString()
    };

    this.schedules.set(schedule.id, schedule);
    this.saveSchedule(schedule);

    if (schedule.enabled) {
      this.startSchedule(schedule);
    }

    console.log(`✅ Created schedule: ${schedule.name}`);
    return schedule.id;
  }

  startSchedule(schedule) {
    if (this.jobs.has(schedule.id)) {
      this.jobs.get(schedule.id).stop();
    }

    const job = cron.schedule(schedule.cron, async () => {
      await this.executeJob(schedule);
    }, {
      scheduled: false
    });

    job.start();
    this.jobs.set(schedule.id, job);

    // Calculate next run time
    schedule.nextRun = this.calculateNextRun(schedule.cron);
    this.saveSchedule(schedule);

    console.log(`🚀 Started schedule: ${schedule.name} (${schedule.cron})`);
  }

  async executeJob(schedule) {
    const startTime = Date.now();
    schedule.lastRun = new Date().toISOString();
    schedule.runCount++;

    try {
      console.log(`🔄 Executing job: ${schedule.name}`);
      
      // Execute the command
      await this.executeCommand(schedule.command);
      
      // Update success metrics
      schedule.successCount++;
      const duration = Date.now() - startTime;
      schedule.avgDuration = (schedule.avgDuration * (schedule.runCount - 1) + duration) / schedule.runCount;
      schedule.lastError = null;

      this.log(`✅ Job completed: ${schedule.name} (${duration}ms)`, 'success');
    } catch (error) {
      console.error(`❌ Job failed: ${schedule.name}`, error);
      
      // Update failure metrics
      schedule.failureCount++;
      schedule.lastError = error.message;

      this.log(`❌ Job failed: ${schedule.name} - ${error.message}`, 'error');

      // Retry logic
      if (this.config.retryAttempts > 0) {
        await this.retryJob(schedule);
      }
    }

    // Update next run time
    schedule.nextRun = this.calculateNextRun(schedule.cron);
    this.saveSchedule(schedule);
    this.updateMetrics();
  }

  async executeCommand(command) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Job timeout'));
      }, this.config.jobTimeout);

      exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
        clearTimeout(timeout);
        
        if (error) {
          reject(error);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  }

  async retryJob(schedule) {
    console.log(`🔄 Retrying job: ${schedule.name}`);
    
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      try {
        await new Promise(resolve => setTimeout(resolve, 5000 * attempt)); // Exponential backoff
        await this.executeCommand(schedule.command);
        console.log(`✅ Job retry successful: ${schedule.name} (attempt ${attempt})`);
        return;
      } catch (error) {
        console.error(`❌ Job retry failed: ${schedule.name} (attempt ${attempt})`, error);
        if (attempt === this.config.retryAttempts) {
          this.log(`❌ Job retry failed after ${attempt} attempts: ${schedule.name}`, 'error');
        }
      }
    }
  }

  calculateNextRun(cronExpression) {
    // This is a simplified calculation
    // In a real implementation, you'd use a proper cron parser
    const now = new Date();
    const nextRun = new Date(now.getTime() + 60000); // Add 1 minute as approximation
    return nextRun.toISOString();
  }

  saveSchedule(schedule) {
    const schedulePath = path.join(__dirname, 'schedules', `${schedule.id}.json`);
    fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2));
  }

  startMonitoring() {
    if (!this.config.monitoring) return;

    setInterval(() => {
      this.monitorJobs();
    }, 60000); // Check every minute

    setInterval(() => {
      this.generateMonitoringReport();
    }, 300000); // Generate report every 5 minutes
  }

  monitorJobs() {
    const activeJobs = Array.from(this.jobs.values()).filter(job => job.running);
    const failedJobs = Array.from(this.schedules.values()).filter(s => s.failureCount > 0);

    this.metrics.activeJobs = activeJobs.length;
    this.metrics.failedJobs = failedJobs.length;

    // Alert on failures
    if (failedJobs.length > 0) {
      console.log(`⚠️ Found ${failedJobs.length} failed jobs`);
      failedJobs.forEach(job => {
        if (job.lastError) {
          console.log(`❌ ${job.name}: ${job.lastError}`);
        }
      });
    }
  }

  generateMonitoringReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      schedules: Array.from(this.schedules.values()).map(s => ({
        id: s.id,
        name: s.name,
        enabled: s.enabled,
        lastRun: s.lastRun,
        nextRun: s.nextRun,
        runCount: s.runCount,
        successCount: s.successCount,
        failureCount: s.failureCount,
        avgDuration: s.avgDuration,
        lastError: s.lastError
      })),
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(__dirname, 'reports', `cron_report_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('📊 Generated cron monitoring report');
  }

  generateRecommendations() {
    const recommendations = [];
    const schedules = Array.from(this.schedules.values());

    // Check for high failure rates
    const highFailureJobs = schedules.filter(s => s.failureCount > 0 && s.runCount > 0 && (s.failureCount / s.runCount) > 0.3);
    if (highFailureJobs.length > 0) {
      recommendations.push('Review and fix jobs with high failure rates');
    }

    // Check for long-running jobs
    const longRunningJobs = schedules.filter(s => s.avgDuration > 300000); // 5 minutes
    if (longRunningJobs.length > 0) {
      recommendations.push('Optimize long-running jobs for better performance');
    }

    // Check for disabled jobs
    const disabledJobs = schedules.filter(s => !s.enabled);
    if (disabledJobs.length > 0) {
      recommendations.push('Review disabled jobs and consider re-enabling if needed');
    }

    return recommendations;
  }

  enableSchedule(scheduleId) {
    const schedule = this.schedules.get(scheduleId);
    if (!schedule) return;

    schedule.enabled = true;
    this.startSchedule(schedule);
    this.saveSchedule(schedule);

    console.log(`✅ Enabled schedule: ${schedule.name}`);
  }

  disableSchedule(scheduleId) {
    const schedule = this.schedules.get(scheduleId);
    if (!schedule) return;

    schedule.enabled = false;
    
    if (this.jobs.has(scheduleId)) {
      this.jobs.get(scheduleId).stop();
      this.jobs.delete(scheduleId);
    }

    this.saveSchedule(schedule);

    console.log(`⏸️ Disabled schedule: ${schedule.name}`);
  }

  updateSchedule(scheduleId, updates) {
    const schedule = this.schedules.get(scheduleId);
    if (!schedule) return;

    Object.assign(schedule, updates);
    this.saveSchedule(schedule);

    if (schedule.enabled) {
      this.startSchedule(schedule);
    }

    console.log(`🔄 Updated schedule: ${schedule.name}`);
  }

  deleteSchedule(scheduleId) {
    const schedule = this.schedules.get(scheduleId);
    if (!schedule) return;

    if (this.jobs.has(scheduleId)) {
      this.jobs.get(scheduleId).stop();
      this.jobs.delete(scheduleId);
    }

    this.schedules.delete(scheduleId);
    
    const schedulePath = path.join(__dirname, 'schedules', `${scheduleId}.json`);
    if (fs.existsSync(schedulePath)) {
      fs.unlinkSync(schedulePath);
    }

    console.log(`🗑️ Deleted schedule: ${schedule.name}`);
  }

  getSchedule(scheduleId) {
    return this.schedules.get(scheduleId);
  }

  getAllSchedules() {
    return Array.from(this.schedules.values());
  }

  getActiveSchedules() {
    return Array.from(this.schedules.values()).filter(s => s.enabled);
  }

  getFailedSchedules() {
    return Array.from(this.schedules.values()).filter(s => s.failureCount > 0);
  }

  updateMetrics() {
    this.metrics.totalJobs = Array.from(this.schedules.values()).reduce((sum, s) => sum + s.runCount, 0);
    this.metrics.lastRun = new Date().toISOString();
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      metrics: this.metrics
    };

    this.logs.push(logEntry);
    
    // Keep only recent logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }

    // Save to file
    const logPath = path.join(__dirname, 'logs', `cron_${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

    console.log(`[CRON] [${level.toUpperCase()}] ${message}`);
  }

  getStatus() {
    return {
      schedules: Array.from(this.schedules.values()),
      metrics: this.metrics,
      config: this.config,
      uptime: Date.now() - this.metrics.uptime
    };
  }

  async stop() {
    console.log('🛑 Stopping Enhanced Cron System...');
    
    // Stop all jobs
    Array.from(this.jobs.values()).forEach(job => {
      job.stop();
    });
    
    this.jobs.clear();
    
    console.log('✅ Enhanced Cron System stopped');
  }
}

module.exports = EnhancedCronSystem;

// If run directly, start the system
if (require.main === module) {
  const cronSystem = new EnhancedCronSystem();
  cronSystem.initialize().catch(console.error);
} 