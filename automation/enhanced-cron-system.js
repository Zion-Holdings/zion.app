const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const EventEmitter = require('events');

class EnhancedCronSystem extends EventEmitter {
  constructor(orchestrator) {
    super();
    this.orchestrator = orchestrator;
    this.jobs = new Map();
    this.jobHistory = [];
    this.performanceMetrics = {
      totalJobs: 0,
      successfulJobs: 0,
      failedJobs: 0,
      averageExecutionTime: 0,
      systemUptime: 0
    };
    this.config = {
      maxConcurrentJobs: 10,
      jobTimeout: 300000, // 5 minutes
      retryAttempts: 3,
      retryDelay: 60000, // 1 minute
      logRetention: 30, // days
      monitoring: true,
      autoRestart: true,
      performanceTracking: true
    };
    this.startTime = new Date();
    this.loadJobRegistry();
    this.startMonitoring();
  }

  scheduleJob(jobConfig) {
    const jobId = uuidv4();
    const job = {
      id: jobId,
      name: jobConfig.name,
      schedule: jobConfig.schedule,
      task: jobConfig.task,
      enabled: jobConfig.enabled !== false,
      priority: jobConfig.priority || 'normal',
      retryAttempts: jobConfig.retryAttempts || this.config.retryAttempts,
      timeout: jobConfig.timeout || this.config.jobTimeout,
      createdAt: new Date(),
      lastRun: null,
      nextRun: null,
      status: 'scheduled',
      performance: {
        totalRuns: 0,
        successfulRuns: 0,
        failedRuns: 0,
        averageExecutionTime: 0,
        lastExecutionTime: 0
      },
      logs: []
    };

    this.jobs.set(jobId, job);
    this.scheduleCronJob(job);
    this.saveJobRegistry();
    
    console.log(`Scheduled job: ${job.name} (${jobId})`);
    return jobId;
  }

  scheduleCronJob(job) {
    if (!job.enabled) return;

    try {
      const cronJob = cron.schedule(job.schedule, async () => {
        await this.executeJob(job);
      }, {
        scheduled: false,
        timezone: "UTC"
      });

      job.cronJob = cronJob;
      job.status = 'scheduled';
      job.nextRun = this.calculateNextRun(job.schedule);
      
      cronJob.start();
      console.log(`Started cron job: ${job.name}`);
    } catch (error) {
      console.error(`Failed to schedule job ${job.name}:`, error);
      job.status = 'error';
      job.logs.push({
        timestamp: new Date(),
        level: 'error',
        message: `Failed to schedule: ${error.message}`
      });
    }
  }

  calculateNextRun(schedule) {
    try {
      const cronParser = require('cron-parser');
      const interval = cronParser.parseExpression(schedule);
      return interval.next().toDate();
    } catch (error) {
      console.error('Error calculating next run:', error);
      return null;
    }
  }

  async executeJob(job) {
    const startTime = Date.now();
    job.lastRun = new Date();
    job.status = 'running';
    job.performance.totalRuns++;
    
    console.log(`Executing job: ${job.name}`);
    
    try {
      // Check if we're at capacity
      const runningJobs = Array.from(this.jobs.values())
        .filter(j => j.status === 'running').length;
      
      if (runningJobs >= this.config.maxConcurrentJobs) {
        throw new Error('System at capacity, job queued for later execution');
      }

      // Execute the task through orchestrator
      const taskId = await this.orchestrator.submitTask(job.task);
      
      // Wait for task completion with timeout
      const result = await this.waitForTaskCompletion(taskId, job.timeout);
      
      const executionTime = Date.now() - startTime;
      
      job.status = 'completed';
      job.performance.successfulRuns++;
      job.performance.lastExecutionTime = executionTime;
      job.performance.averageExecutionTime = 
        (job.performance.averageExecutionTime * (job.performance.successfulRuns - 1) + executionTime) / 
        job.performance.successfulRuns;
      
      this.performanceMetrics.successfulJobs++;
      this.performanceMetrics.averageExecutionTime = 
        (this.performanceMetrics.averageExecutionTime * (this.performanceMetrics.successfulJobs - 1) + executionTime) / 
        this.performanceMetrics.successfulJobs;
      
      job.logs.push({
        timestamp: new Date(),
        level: 'info',
        message: `Job completed successfully in ${executionTime}ms`,
        result: result
      });
      
      console.log(`Job completed: ${job.name} (${executionTime}ms)`);
      this.emit('jobCompleted', { job, result, executionTime });
      
    } catch (error) {
      const executionTime = Date.now() - startTime;
      
      job.status = 'failed';
      job.performance.failedRuns++;
      job.performance.lastExecutionTime = executionTime;
      
      this.performanceMetrics.failedJobs++;
      
      job.logs.push({
        timestamp: new Date(),
        level: 'error',
        message: `Job failed: ${error.message}`,
        error: error.message
      });
      
      console.error(`Job failed: ${job.name}`, error);
      this.emit('jobFailed', { job, error, executionTime });
      
      // Handle retry logic
      await this.handleJobRetry(job, error);
    } finally {
      job.nextRun = this.calculateNextRun(job.schedule);
      this.saveJobRegistry();
    }
  }

  async waitForTaskCompletion(taskId, timeout) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      const checkInterval = setInterval(() => {
        const task = this.orchestrator.getTaskStatus(taskId);
        
        if (task && task.status === 'completed') {
          clearInterval(checkInterval);
          resolve(task.result);
        } else if (task && task.status === 'failed') {
          clearInterval(checkInterval);
          reject(new Error(task.error || 'Task failed'));
        } else if (Date.now() - startTime > timeout) {
          clearInterval(checkInterval);
          reject(new Error('Task timeout'));
        }
      }, 1000);
    });
  }

  async handleJobRetry(job, error) {
    const retryCount = job.logs.filter(log => 
      log.level === 'error' && log.message.includes('Job failed')
    ).length;
    
    if (retryCount < job.retryAttempts) {
      console.log(`Retrying job ${job.name} (attempt ${retryCount + 1}/${job.retryAttempts})`);
      
      setTimeout(async () => {
        try {
          await this.executeJob(job);
        } catch (retryError) {
          console.error(`Retry failed for job ${job.name}:`, retryError);
        }
      }, this.config.retryDelay);
    } else {
      console.error(`Job ${job.name} failed after ${job.retryAttempts} attempts`);
      
      if (this.config.autoRestart) {
        console.log(`Auto-restarting job ${job.name}`);
        this.restartJob(job.id);
      }
    }
  }

  restartJob(jobId) {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new Error(`Job not found: ${jobId}`);
    }

    if (job.cronJob) {
      job.cronJob.stop();
    }

    job.status = 'restarting';
    job.logs.push({
      timestamp: new Date(),
      level: 'info',
      message: 'Job restarted'
    });

    this.scheduleCronJob(job);
    this.saveJobRegistry();
    
    console.log(`Restarted job: ${job.name}`);
  }

  stopJob(jobId) {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new Error(`Job not found: ${jobId}`);
    }

    if (job.cronJob) {
      job.cronJob.stop();
    }

    job.status = 'stopped';
    job.logs.push({
      timestamp: new Date(),
      level: 'info',
      message: 'Job stopped'
    });

    this.saveJobRegistry();
    console.log(`Stopped job: ${job.name}`);
  }

  deleteJob(jobId) {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new Error(`Job not found: ${jobId}`);
    }

    if (job.cronJob) {
      job.cronJob.stop();
    }

    this.jobs.delete(jobId);
    this.saveJobRegistry();
    console.log(`Deleted job: ${job.name}`);
  }

  getJob(jobId) {
    return this.jobs.get(jobId);
  }

  getAllJobs() {
    return Array.from(this.jobs.values());
  }

  getRunningJobs() {
    return Array.from(this.jobs.values()).filter(job => job.status === 'running');
  }

  getFailedJobs() {
    return Array.from(this.jobs.values()).filter(job => job.status === 'failed');
  }

  updateJobConfig(jobId, newConfig) {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new Error(`Job not found: ${jobId}`);
    }

    // Stop current job
    if (job.cronJob) {
      job.cronJob.stop();
    }

    // Update configuration
    Object.assign(job, newConfig);
    
    // Restart with new config
    this.scheduleCronJob(job);
    this.saveJobRegistry();
    
    console.log(`Updated job: ${job.name}`);
  }

  getSystemMetrics() {
    const now = new Date();
    const uptime = now - this.startTime;
    
    return {
      ...this.performanceMetrics,
      totalJobs: this.jobs.size,
      runningJobs: this.getRunningJobs().length,
      failedJobs: this.getFailedJobs().length,
      systemUptime: uptime,
      averageJobTime: this.performanceMetrics.averageExecutionTime,
      successRate: this.performanceMetrics.totalJobs > 0 
        ? (this.performanceMetrics.successfulJobs / this.performanceMetrics.totalJobs) * 100 
        : 0
    };
  }

  async createScheduledTasks() {
    const defaultJobs = [
      {
        name: 'Deep Search - Market Research',
        schedule: '0 */6 * * *', // Every 6 hours
        task: {
          type: 'deep-search',
          service: 'market-research',
          data: {
            query: 'latest market trends technology 2024',
            depth: 3,
            sources: ['news', 'blogs', 'social-media']
          }
        },
        priority: 'high'
      },
      {
        name: 'Content Generation - Blog Posts',
        schedule: '0 9 * * *', // Daily at 9 AM
        task: {
          type: 'content-generation',
          service: 'blog-posts',
          data: {
            topic: 'technology trends',
            wordCount: 1000,
            seoOptimization: true
          }
        }
      },
      {
        name: 'Data Analysis - Performance Review',
        schedule: '0 2 * * *', // Daily at 2 AM
        task: {
          type: 'data-analysis',
          service: 'performance-review',
          data: {
            dataset: 'system_metrics',
            analysisType: 'trend',
            timeRange: '7d'
          }
        }
      },
      {
        name: 'Web Research - Competitive Analysis',
        schedule: '0 */12 * * *', // Every 12 hours
        task: {
          type: 'web-scraping',
          service: 'competitive-analysis',
          data: {
            urls: ['competitor1.com', 'competitor2.com', 'competitor3.com'],
            extractData: ['pricing', 'features', 'content']
          }
        }
      },
      {
        name: 'SEO Optimization - Keyword Research',
        schedule: '0 6 * * 1', // Weekly on Monday at 6 AM
        task: {
          type: 'seo-optimizer',
          service: 'keyword-research',
          data: {
            keywords: ['technology', 'innovation', 'digital transformation'],
            analysisDepth: 'comprehensive'
          }
        }
      },
      {
        name: 'Social Media - Content Scheduling',
        schedule: '0 */4 * * *', // Every 4 hours
        task: {
          type: 'social-media-manager',
          service: 'post-scheduling',
          data: {
            platforms: ['twitter', 'linkedin', 'facebook'],
            contentType: 'automated',
            engagementOptimization: true
          }
        }
      },
      {
        name: 'System Health Check',
        schedule: '*/15 * * * *', // Every 15 minutes
        task: {
          type: 'monitor',
          service: 'health-check',
          data: {
            checkTypes: ['performance', 'errors', 'resources'],
            alertThreshold: 0.8
          }
        }
      },
      {
        name: 'Data Backup',
        schedule: '0 1 * * *', // Daily at 1 AM
        task: {
          type: 'data-processor',
          service: 'backup',
          data: {
            backupType: 'full',
            retention: '30d',
            compression: true
          }
        }
      },
      {
        name: 'Quality Assurance - Content Review',
        schedule: '0 10 * * *', // Daily at 10 AM
        task: {
          type: 'quality-assurance',
          service: 'content-review',
          data: {
            reviewType: 'automated',
            qualityThreshold: 0.9,
            autoCorrection: true
          }
        }
      },
      {
        name: 'Performance Optimization',
        schedule: '0 3 * * *', // Daily at 3 AM
        task: {
          type: 'orchestrator',
          service: 'system-optimization',
          data: {
            optimizationType: 'comprehensive',
            includeAgents: true,
            includeTasks: true
          }
        }
      }
    ];

    const results = [];
    for (const jobConfig of defaultJobs) {
      try {
        const jobId = this.scheduleJob(jobConfig);
        results.push({ success: true, jobId, name: jobConfig.name });
      } catch (error) {
        results.push({ success: false, error: error.message, name: jobConfig.name });
      }
    }

    return results;
  }

  loadJobRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data', 'job-registry.json');
      if (fs.existsSync(registryPath)) {
        const data = fs.readFileSync(registryPath, 'utf8');
        const registry = JSON.parse(data);
        
        // Recreate cron jobs for loaded jobs
        for (const jobData of registry) {
          this.jobs.set(jobData.id, jobData);
          if (jobData.enabled) {
            this.scheduleCronJob(jobData);
          }
        }
      }
    } catch (error) {
      console.error('Error loading job registry:', error);
    }
  }

  saveJobRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data');
      if (!fs.existsSync(registryPath)) {
        fs.mkdirSync(registryPath, { recursive: true });
      }

      const registry = Array.from(this.jobs.values()).map(job => {
        // Remove cronJob reference before saving
        const { cronJob, ...jobData } = job;
        return jobData;
      });

      fs.writeFileSync(
        path.join(registryPath, 'job-registry.json'),
        JSON.stringify(registry, null, 2)
      );
    } catch (error) {
      console.error('Error saving job registry:', error);
    }
  }

  startMonitoring() {
    // Monitor system every minute
    setInterval(() => {
      this.updatePerformanceMetrics();
    }, 60000);

    // Clean up old job history every hour
    setInterval(() => {
      const retentionDate = new Date();
      retentionDate.setDate(retentionDate.getDate() - this.config.logRetention);
      
      this.jobHistory = this.jobHistory.filter(job => 
        job.timestamp > retentionDate
      );
    }, 60 * 60 * 1000);

    // Log system status every 5 minutes
    setInterval(() => {
      const metrics = this.getSystemMetrics();
      console.log('Cron System Status:', {
        totalJobs: metrics.totalJobs,
        runningJobs: metrics.runningJobs,
        successRate: `${metrics.successRate.toFixed(2)}%`,
        uptime: `${Math.floor(metrics.systemUptime / 1000 / 60)} minutes`
      });
    }, 5 * 60 * 1000);
  }

  updatePerformanceMetrics() {
    const now = new Date();
    this.performanceMetrics.systemUptime = now - this.startTime;
  }

  async shutdown() {
    console.log('Shutting down cron system...');
    
    // Stop all cron jobs
    for (const [jobId, job] of this.jobs) {
      if (job.cronJob) {
        job.cronJob.stop();
      }
    }
    
    // Wait for running jobs to complete
    const runningJobs = this.getRunningJobs();
    if (runningJobs.length > 0) {
      console.log(`Waiting for ${runningJobs.length} jobs to complete...`);
      await new Promise(resolve => {
        const checkInterval = setInterval(() => {
          if (this.getRunningJobs().length === 0) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 1000);
      });
    }
    
    this.saveJobRegistry();
    console.log('Cron system shutdown complete');
  }
}

module.exports = EnhancedCronSystem; 