const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const cron = require('node-cron');

const execAsync = promisify(exec);

class CronAutomationFactory {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.jobsDir = path.join(__dirname, 'cron-jobs');
    this.reportsDir = path.join(__dirname, 'reports');
    this.logsDir = path.join(__dirname, 'logs');
    this.ensureDirectories();
    this.jobTypes = this.getJobTypes();
    this.activeJobs = new Map();
  }

  ensureDirectories() {
    const dirs = [
      this.jobsDir,
      this.reportsDir,
      this.logsDir,
      path.join(this.reportsDir, 'cron-reports'),
      path.join(this.logsDir, 'cron-logs')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  getJobTypes() {
    return {
      'daily-backup': {
        name: 'Daily Backup Job',
        description: 'Daily automated backup of project data',
        schedule: '0 2 * * *', // 2 AM daily
        capabilities: ['backup', 'data protection', 'recovery']
      },
      'weekly-cleanup': {
        name: 'Weekly Cleanup Job',
        description: 'Weekly cleanup of temporary files and logs',
        schedule: '0 3 * * 0', // 3 AM every Sunday
        capabilities: ['cleanup', 'maintenance', 'optimization']
      },
      'hourly-monitoring': {
        name: 'Hourly Monitoring Job',
        description: 'Hourly system monitoring and health checks',
        schedule: '0 * * * *', // Every hour
        capabilities: ['monitoring', 'health checks', 'alerts']
      },
      'daily-testing': {
        name: 'Daily Testing Job',
        description: 'Daily automated testing and quality checks',
        schedule: '0 4 * * *', // 4 AM daily
        capabilities: ['testing', 'quality checks', 'validation']
      },
      'weekly-security': {
        name: 'Weekly Security Job',
        description: 'Weekly security scanning and vulnerability checks',
        schedule: '0 5 * * 1', // 5 AM every Monday
        capabilities: ['security scanning', 'vulnerability detection', 'compliance']
      },
      'daily-deployment': {
        name: 'Daily Deployment Job',
        description: 'Daily automated deployment and CI/CD checks',
        schedule: '0 6 * * *', // 6 AM daily
        capabilities: ['deployment', 'ci/cd', 'environment management']
      },
      'hourly-analytics': {
        name: 'Hourly Analytics Job',
        description: 'Hourly analytics collection and reporting',
        schedule: '0 * * * *', // Every hour
        capabilities: ['analytics', 'data collection', 'reporting']
      },
      'daily-optimization': {
        name: 'Daily Optimization Job',
        description: 'Daily performance optimization and improvements',
        schedule: '0 7 * * *', // 7 AM daily
        capabilities: ['optimization', 'performance', 'improvements']
      },
      'weekly-documentation': {
        name: 'Weekly Documentation Job',
        description: 'Weekly documentation generation and updates',
        schedule: '0 8 * * 2', // 8 AM every Tuesday
        capabilities: ['documentation', 'generation', 'updates']
      },
      'daily-content': {
        name: 'Daily Content Job',
        description: 'Daily content generation and management',
        schedule: '0 9 * * *', // 9 AM daily
        capabilities: ['content generation', 'management', 'updates']
      }
    };
  }

  async createJob(jobType, config = {}) {
    try {
      console.log(`Creating ${jobType} job...`);
      
      const jobInfo = this.jobTypes[jobType];
      if (!jobInfo) {
        throw new Error(`Unknown job type: ${jobType}`);
      }

      const jobId = `${jobType}-${Date.now()}`;
      const jobConfig = {
        jobId,
        jobType,
        name: jobInfo.name,
        description: jobInfo.description,
        schedule: jobInfo.schedule,
        capabilities: jobInfo.capabilities,
        config: config,
        createdAt: new Date().toISOString(),
        status: 'created'
      };

      // Create job file
      const jobFile = path.join(this.jobsDir, `${jobType}-job.js`);
      await this.generateJobFile(jobType, jobConfig, jobFile);

      // Save job configuration
      const configFile = path.join(this.jobsDir, `${jobType}-config.json`);
      fs.writeFileSync(configFile, JSON.stringify(jobConfig, null, 2));

      console.log(`Job ${jobId} created successfully`);
      return jobConfig;

    } catch (error) {
      console.error(`Failed to create ${jobType} job:`, error);
      throw error;
    }
  }

  async generateJobFile(jobType, config, filePath) {
    const jobTemplate = this.getJobTemplate(jobType, config);
    fs.writeFileSync(filePath, jobTemplate);
  }

  getJobTemplate(jobType, config) {
    const baseTemplate = `const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ${this.getClassName(jobType)} {
  constructor() {
    this.jobId = process.env.JOB_ID || '${config.jobId}';
    this.jobType = process.env.JOB_TYPE || '${jobType}';
    this.config = JSON.parse(process.env.JOB_CONFIG || '${JSON.stringify(config.config)}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/${jobType}-reports');
    this.logsDir = path.join(__dirname, '../logs/${jobType}-logs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.logsDir
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async execute() {
    console.log(\`${config.name} \${this.jobId} executing\`);
    
    try {
      // Execute job-specific task
      await this.performJobTask();
      
      // Generate execution report
      await this.generateExecutionReport();
      
      console.log(\`${config.name} \${this.jobId} completed successfully\`);
      
    } catch (error) {
      console.error(\`${config.name} \${this.jobId} failed:\`, error);
      await this.generateErrorReport(error);
    }
  }

  async performJobTask() {
    // This will be overridden by specific job implementations
    console.log('Performing job task...');
    
    const result = {
      status: 'completed',
      data: {},
      timestamp: new Date().toISOString()
    };
    
    return result;
  }

  async generateExecutionReport() {
    const report = {
      timestamp: new Date().toISOString(),
      jobId: this.jobId,
      jobType: this.jobType,
      status: 'completed',
      execution: {},
      results: []
    };
    
    // Generate job-specific report
    report.execution = await this.generateJobReport();
    
    // Save execution report
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, \`execution-\${timestamp}.json\`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(\`Execution report saved: \${reportPath}\`);
  }

  async generateJobReport() {
    // This will be overridden by specific job implementations
    return {
      status: 'completed',
      data: {}
    };
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      jobId: this.jobId,
      jobType: this.jobType,
      status: 'failed',
      error: error.message,
      stack: error.stack
    };
    
    // Save error report
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.logsDir, \`error-\${timestamp}.json\`);
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    
    console.log(\`Error report saved: \${reportPath}\`);
  }
}

// Execute the job
const job = new ${this.getClassName(jobType)}();

job.execute().catch(error => {
  console.error('${config.name} failed to execute:', error);
  process.exit(1);
});`;

    return baseTemplate;
  }

  getClassName(jobType) {
    return jobType.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Job';
  }

  async scheduleJob(jobType, config = {}) {
    try {
      console.log(`Scheduling ${jobType} job...`);
      
      const jobFile = path.join(this.jobsDir, `${jobType}-job.js`);
      
      if (!fs.existsSync(jobFile)) {
        await this.createJob(jobType, config);
      }

      const jobInfo = this.jobTypes[jobType];
      const jobId = `${jobType}-${Date.now()}`;

      // Schedule the job using node-cron
      const task = cron.schedule(jobInfo.schedule, async () => {
        try {
          const env = {
            ...process.env,
            JOB_ID: jobId,
            JOB_TYPE: jobType,
            JOB_CONFIG: JSON.stringify(config)
          };

          const { spawn } = require('child_process');
          const jobProcess = spawn('node', [jobFile], {
            env,
            stdio: 'inherit'
          });

          console.log(`Job ${jobType} executed with PID: ${jobProcess.pid}`);
          
        } catch (error) {
          console.error(`Failed to execute ${jobType} job:`, error);
        }
      }, {
        scheduled: true,
        timezone: "UTC"
      });

      this.activeJobs.set(jobId, {
        type: jobType,
        task: task,
        schedule: jobInfo.schedule,
        status: 'scheduled'
      });

      console.log(`Job ${jobType} scheduled successfully`);
      return { jobId, task };

    } catch (error) {
      console.error(`Failed to schedule ${jobType} job:`, error);
      throw error;
    }
  }

  async scheduleAllJobs() {
    console.log('Scheduling all cron jobs...');
    
    const jobs = [];
    
    for (const jobType of Object.keys(this.jobTypes)) {
      try {
        const job = await this.scheduleJob(jobType);
        jobs.push(job);
      } catch (error) {
        console.error(`Failed to schedule ${jobType} job:`, error);
      }
    }
    
    console.log(`Scheduled ${jobs.length} cron jobs`);
    return jobs;
  }

  async stopAllJobs() {
    console.log('Stopping all cron jobs...');
    
    for (const [jobId, job] of this.activeJobs) {
      try {
        job.task.stop();
        console.log(`Stopped job ${jobId}`);
      } catch (error) {
        console.error(`Failed to stop job ${jobId}:`, error);
      }
    }
    
    this.activeJobs.clear();
    console.log('All cron jobs stopped');
  }

  async getJobStatus() {
    const status = [];
    
    for (const [jobId, job] of this.activeJobs) {
      status.push({
        jobId,
        type: job.type,
        schedule: job.schedule,
        status: job.status
      });
    }
    
    return status;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      factory: 'CronAutomationFactory',
      jobTypes: Object.keys(this.jobTypes).length,
      jobs: Object.keys(this.jobTypes),
      activeJobs: this.activeJobs.size,
      status: 'operational'
    };

    const reportPath = path.join(this.reportsDir, 'cron-reports', 'factory-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }
}

module.exports = CronAutomationFactory; 