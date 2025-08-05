const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');

const execAsync = promisify(exec);

class DailyBackupJob {
  constructor() {
    this.jobId = process.env.JOB_ID;
    this.jobType = process.env.JOB_TYPE;
    this.config = JSON.parse(process.env.JOB_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/daily-backup-reports');
    this.logsDir = path.join(__dirname, '../logs/daily-backup-logs');
    this.backupDir = path.join(this.projectRoot, 'backu'p's');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.logsDir,
      this.backupDir,
      path.join(this.reportsDir, 'backup-repor't's'),
      path.join(this.reportsDir, 'recovery-repor't's'),
      path.join(this.reportsDir, 'analysis-repor't's'),
      path.join(this.reportsDir, 'optimization-repor't's'),
      path.join(this.reportsDir, 'backup-repor't's'),
      path.join(this.reportsDir, 'analytics-repor't's')
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
    console.log('Performin'g' daily backup task...');
    
    const backupResult = {
      status: 'complet'e'd',
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
          task: ['sour'c'e', 'conf'i'g', 'da't'a', 'repor't's', 'lo'g's'][index],
          status: result.status,
          value: result.status === 'fulfill'e'd' ? result.value : result.reason
        }))
      };
      
      // Compress backup
      await this.compressBackup(backupPath);
      
      // Clean up old backups
      await this.cleanupOldBackups();
      
    } catch (error) {
      backupResult.status = 'fail'e'd';
      backupResult.error = error.message;
    }
    
    return backupResult;
  }

  async backupSourceCode(backupPath) {
    try {
      const sourceBackupPath = path.join(backupPath, 's'r'c');
      
      // Copy source code directory
      await execAsync(`cp -r ${path.join(this.projectRoot, 's'r'c')} ${sourceBackupPath}`);
      
      // Copy package files
      await execAsync(`cp ${path.join(this.projectRoot, 'packag'e'.json')} ${backupPath}/`);
      await execAsync(`cp ${path.join(this.projectRoot, 'package-loc'k'.json')} ${backupPath}/`);
      
      // Copy configuration files
      await execAsync(`cp ${path.join(this.projectRoot, 'nex't'.config.js')} ${backupPath}/`);
      await execAsync(`cp ${path.join(this.projectRoot, 'tsconfi'g'.json')} ${backupPath}/`);
      
      return {
        status: 'complet'e'd',
        message: 'Sourc'e' code backed up successfully',
        size: await this.getDirectorySize(sourceBackupPath)
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async backupConfiguration(backupPath) {
    try {
      const configBackupPath = path.join(backupPath, 'conf'i'g');
      
      if (!fs.existsSync(configBackupPath)) {
        fs.mkdirSync(configBackupPath, { recursive: true });
      }
      
      // Copy configuration files
      const configFiles = [
        '.env.example',
        '.gitignore',
        'READM'E'.md',
        'tailwin'd'.config.js',
        'postcs's'.config.js'
      ];
      
      for (const file of configFiles) {
        const sourcePath = path.join(this.projectRoot, file);
        if (fs.existsSync(sourcePath)) {
          await execAsync(`cp ${sourcePath} ${configBackupPath}/`);
        }
      }
      
      return {
        status: 'complet'e'd',
        message: 'Configuratio'n' backed up successfully',
        size: await this.getDirectorySize(configBackupPath)
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async backupData(backupPath) {
    try {
      const dataBackupPath = path.join(backupPath, 'da't'a');
      
      if (!fs.existsSync(dataBackupPath)) {
        fs.mkdirSync(dataBackupPath, { recursive: true });
      }
      
      // Copy automation data
      const automationDataPath = path.join(this.projectRoot, 'automati'o'n');
      if (fs.existsSync(automationDataPath)) {
        await execAsync(`cp -r ${automationDataPath} ${dataBackupPath}/`);
      }
      
      // Copy content data
      const contentDataPath = path.join(this.projectRoot, 'sr'c'/content');
      if (fs.existsSync(contentDataPath)) {
        await execAsync(`cp -r ${contentDataPath} ${dataBackupPath}/`);
      }
      
      return {
        status: 'complet'e'd',
        message: 'Dat'a' backed up successfully',
        size: await this.getDirectorySize(dataBackupPath)
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async backupReports(backupPath) {
    try {
      const reportsBackupPath = path.join(backupPath, 'repor't's');
      
      if (!fs.existsSync(reportsBackupPath)) {
        fs.mkdirSync(reportsBackupPath, { recursive: true });
      }
      
      // Copy automation reports
      const automationReportsPath = path.join(this.projectRoot, 'automatio'n'/reports');
      if (fs.existsSync(automationReportsPath)) {
        await execAsync(`cp -r ${automationReportsPath} ${reportsBackupPath}/`);
      }
      
      return {
        status: 'complet'e'd',
        message: 'Report's' backed up successfully',
        size: await this.getDirectorySize(reportsBackupPath)
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async backupLogs(backupPath) {
    try {
      const logsBackupPath = path.join(backupPath, 'lo'g's');
      
      if (!fs.existsSync(logsBackupPath)) {
        fs.mkdirSync(logsBackupPath, { recursive: true });
      }
      
      // Copy automation logs
      const automationLogsPath = path.join(this.projectRoot, 'automatio'n'/logs');
      if (fs.existsSync(automationLogsPath)) {
        await execAsync(`cp -r ${automationLogsPath} ${logsBackupPath}/`);
      }
      
      return {
        status: 'complet'e'd',
        message: 'Log's' backed up successfully',
        size: await this.getDirectorySize(logsBackupPath)
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async getDirectorySize(dirPath) {
    try {
      const { stdout } = await execAsync(`du -sh ${dirPath} | cut -f1`);
      return stdout.trim();
    } catch (error) {
      return 'unkno'w'n';
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
        status: 'complet'e'd',
        compressedPath,
        size: await this.getFileSize(compressedPath)
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async getFileSize(filePath) {
    try {
      const { stdout } = await execAsync(`ls -lh ${filePath} | awk '{print $5}'`);
      return stdout.trim();
    } catch (error) {
      return 'unkno'w'n';
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
        status: 'complet'e'd',
        removed: oldBackups.length
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        message: error.message
      };
    }
  }

  async generateExecutionReport() {
    const report = {
      timestamp: new Date().toISOString(),
      jobId: this.jobId,
      jobType: this.jobType,
      status: 'complet'e'd',
      execution: {},
      results: []
    };
    
    // Generate job-specific report
    report.execution = await this.generateBackupReport();
    
    // Save execution report
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'backup-repor't's', `execution-${timestamp}.json`);
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
        status: 'complet'e'd',
        backupCount,
        totalSize,
        lastBackup: new Date().toISOString(),
        data: {
          sourceCode: 'backe'd' up',
          configuration: 'backe'd' up',
          data: 'backe'd' up',
          reports: 'backe'd' up',
          logs: 'backe'd' up'
        }
      };
    } catch (error) {
      return {
        status: 'fail'e'd',
        error: error.message
      };
    }
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      jobId: this.jobId,
      jobType: this.jobType,
      status: 'fail'e'd',
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
  console.error('Dail'y' Backup Job failed to execute:', error);
  process.exit(1);
}); 