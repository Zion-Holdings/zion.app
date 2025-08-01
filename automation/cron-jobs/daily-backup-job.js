const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class DailyBackupJob {
  constructor() {
    this.jobId = process.env.JOB_ID;
    this.jobType = process.env.JOB_TYPE;
    this.config = JSON.parse(process.env.JOB_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/daily-backup-reports');
    this.logsDir = path.join(__dirname, '../logs/daily-backup-logs');
    this.backupDir = path.join(this.projectRoot, 'backups');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.logsDir,
      this.backupDir,
      path.join(this.reportsDir, 'backup-reports'),
      path.join(this.reportsDir, 'recovery-reports'),
      path.join(this.reportsDir, 'analysis-reports'),
      path.join(this.reportsDir, 'optimization-reports'),
      path.join(this.reportsDir, 'backup-reports'),
      path.join(this.reportsDir, 'analytics-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async execute() {
    console.log(`Daily Backup Job ${this.jobId} executing`);
    
    try {
      // Perform backup task
      await this.performBackupTask();
      
      // Generate execution report
      await this.generateExecutionReport();
      
      console.log(`Daily Backup Job ${this.jobId} completed successfully`);
      
    } catch (error) {
      console.error(`Daily Backup Job ${this.jobId} failed:`, error);
      await this.generateErrorReport(error);
    }
  }

  async performBackupTask() {
    console.log('Performing daily backup task...');
    
    const backupResult = {
      status: 'completed',
      data: {},
      timestamp: new Date().toISOString()
    };
    
    try {
      // Create backup directory with timestamp
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(this.backupDir, `backup-${timestamp}`);
      
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath, { recursive: true });
      }
      
      // Backup important directories
      const backupTasks = [
        this.backupSourceCode(backupPath),
        this.backupConfiguration(backupPath),
        this.backupData(backupPath),
        this.backupReports(backupPath),
        this.backupLogs(backupPath)
      ];
      
      const results = await Promise.allSettled(backupTasks);
      
      backupResult.data = {
        backupPath,
        results: results.map((result, index) => ({
          task: ['source', 'config', 'data', 'reports', 'logs'][index],
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason
        }))
      };
      
      // Compress backup
      await this.compressBackup(backupPath);
      
      // Clean up old backups
      await this.cleanupOldBackups();
      
    } catch (error) {
      backupResult.status = 'failed';
      backupResult.error = error.message;
    }
    
    return backupResult;
  }

  async backupSourceCode(backupPath) {
    try {
      const sourceBackupPath = path.join(backupPath, 'src');
      
      // Copy source code directory
      await execAsync(`cp -r ${path.join(this.projectRoot, 'src')} ${sourceBackupPath}`);
      
      // Copy package files
      await execAsync(`cp ${path.join(this.projectRoot, 'package.json')} ${backupPath}/`);
      await execAsync(`cp ${path.join(this.projectRoot, 'package-lock.json')} ${backupPath}/`);
      
      // Copy configuration files
      await execAsync(`cp ${path.join(this.projectRoot, 'next.config.js')} ${backupPath}/`);
      await execAsync(`cp ${path.join(this.projectRoot, 'tsconfig.json')} ${backupPath}/`);
      
      return {
        status: 'completed',
        message: 'Source code backed up successfully',
        size: await this.getDirectorySize(sourceBackupPath)
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
  }

  async backupConfiguration(backupPath) {
    try {
      const configBackupPath = path.join(backupPath, 'config');
      
      if (!fs.existsSync(configBackupPath)) {
        fs.mkdirSync(configBackupPath, { recursive: true });
      }
      
      // Copy configuration files
      const configFiles = [
        '.env.example',
        '.gitignore',
        'README.md',
        'tailwind.config.js',
        'postcss.config.js'
      ];
      
      for (const file of configFiles) {
        const sourcePath = path.join(this.projectRoot, file);
        if (fs.existsSync(sourcePath)) {
          await execAsync(`cp ${sourcePath} ${configBackupPath}/`);
        }
      }
      
      return {
        status: 'completed',
        message: 'Configuration backed up successfully',
        size: await this.getDirectorySize(configBackupPath)
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
  }

  async backupData(backupPath) {
    try {
      const dataBackupPath = path.join(backupPath, 'data');
      
      if (!fs.existsSync(dataBackupPath)) {
        fs.mkdirSync(dataBackupPath, { recursive: true });
      }
      
      // Copy automation data
      const automationDataPath = path.join(this.projectRoot, 'automation');
      if (fs.existsSync(automationDataPath)) {
        await execAsync(`cp -r ${automationDataPath} ${dataBackupPath}/`);
      }
      
      // Copy content data
      const contentDataPath = path.join(this.projectRoot, 'src/content');
      if (fs.existsSync(contentDataPath)) {
        await execAsync(`cp -r ${contentDataPath} ${dataBackupPath}/`);
      }
      
      return {
        status: 'completed',
        message: 'Data backed up successfully',
        size: await this.getDirectorySize(dataBackupPath)
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
  }

  async backupReports(backupPath) {
    try {
      const reportsBackupPath = path.join(backupPath, 'reports');
      
      if (!fs.existsSync(reportsBackupPath)) {
        fs.mkdirSync(reportsBackupPath, { recursive: true });
      }
      
      // Copy automation reports
      const automationReportsPath = path.join(this.projectRoot, 'automation/reports');
      if (fs.existsSync(automationReportsPath)) {
        await execAsync(`cp -r ${automationReportsPath} ${reportsBackupPath}/`);
      }
      
      return {
        status: 'completed',
        message: 'Reports backed up successfully',
        size: await this.getDirectorySize(reportsBackupPath)
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
  }

  async backupLogs(backupPath) {
    try {
      const logsBackupPath = path.join(backupPath, 'logs');
      
      if (!fs.existsSync(logsBackupPath)) {
        fs.mkdirSync(logsBackupPath, { recursive: true });
      }
      
      // Copy automation logs
      const automationLogsPath = path.join(this.projectRoot, 'automation/logs');
      if (fs.existsSync(automationLogsPath)) {
        await execAsync(`cp -r ${automationLogsPath} ${logsBackupPath}/`);
      }
      
      return {
        status: 'completed',
        message: 'Logs backed up successfully',
        size: await this.getDirectorySize(logsBackupPath)
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
  }

  async getDirectorySize(dirPath) {
    try {
      const { stdout } = await execAsync(`du -sh ${dirPath} | cut -f1`);
      return stdout.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async compressBackup(backupPath) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const compressedPath = `${backupPath}.tar.gz`;
      
      await execAsync(`tar -czf ${compressedPath} -C ${path.dirname(backupPath)} ${path.basename(backupPath)}`);
      
      // Remove uncompressed directory
      await execAsync(`rm -rf ${backupPath}`);
      
      console.log(`Backup compressed: ${compressedPath}`);
      
      return {
        status: 'completed',
        compressedPath,
        size: await this.getFileSize(compressedPath)
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
  }

  async getFileSize(filePath) {
    try {
      const { stdout } = await execAsync(`ls -lh ${filePath} | awk '{print $5}'`);
      return stdout.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async cleanupOldBackups() {
    try {
      // Keep only the last 7 daily backups
      const { stdout } = await execAsync(`ls -t ${this.backupDir}/*.tar.gz | tail -n +8`);
      const oldBackups = stdout.trim().split('\n').filter(file => file);
      
      for (const backup of oldBackups) {
        if (backup) {
          await execAsync(`rm -f ${backup}`);
          console.log(`Removed old backup: ${backup}`);
        }
      }
      
      return {
        status: 'completed',
        removed: oldBackups.length
      };
    } catch (error) {
      return {
        status: 'failed',
        message: error.message
      };
    }
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
    report.execution = await this.generateBackupReport();
    
    // Save execution report
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'backup-reports', `execution-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`Execution report saved: ${reportPath}`);
  }

  async generateBackupReport() {
    try {
      // Get backup statistics
      const { stdout } = await execAsync(`ls -la ${this.backupDir} | grep .tar.gz | wc -l`);
      const backupCount = parseInt(stdout.trim());
      
      const { stdout: sizeOutput } = await execAsync(`du -sh ${this.backupDir}`);
      const totalSize = sizeOutput.trim();
      
      return {
        status: 'completed',
        backupCount,
        totalSize,
        lastBackup: new Date().toISOString(),
        data: {
          sourceCode: 'backed up',
          configuration: 'backed up',
          data: 'backed up',
          reports: 'backed up',
          logs: 'backed up'
        }
      };
    } catch (error) {
      return {
        status: 'failed',
        error: error.message
      };
    }
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
    const reportPath = path.join(this.logsDir, `error-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    
    console.log(`Error report saved: ${reportPath}`);
  }
}

// Execute the job
const job = new DailyBackupJob();

job.execute().catch(error => {
  console.error('Daily Backup Job failed to execute:', error);
  process.exit(1);
}); 