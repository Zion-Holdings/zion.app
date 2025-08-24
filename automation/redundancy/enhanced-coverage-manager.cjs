#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { spawnSync } = require('child_process');

class EnhancedCoverageManager {
  constructor() {
    this.rootDir = process.cwd();
    this.logDir = path.join(this.rootDir, 'automation', 'logs');
    this.ensureLogDir();
    
    this.coverageStatus = {
      pm2: { covered: false, backupProcesses: [] },
      githubActions: { covered: false, backupWorkflows: [] },
      netlifyFunctions: { covered: false, backupFunctions: [] },
      cronJobs: { covered: false, backupJobs: [] },
      packageScripts: { covered: false, backupScripts: [] },
      automationScripts: { covered: false, backupScripts: [] }
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-COVERAGE] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-coverage.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: options.cwd || this.rootDir,
      env: process.env,
      shell: false,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10
    });
    
    return {
      status: result.status,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
      success: result.status === 0
    };
  }

  async scanPM2Coverage() {
    this.log('Scanning PM2 automation coverage...');
    
    try {
      // Check ecosystem.pm2.cjs
      const ecosystemPath = path.join(this.rootDir, 'ecosystem.pm2.cjs');
      if (fs.existsSync(ecosystemPath)) {
        const ecosystem = require(ecosystemPath);
        const apps = ecosystem.apps || [];
        
        this.coverageStatus.pm2.backupProcesses = apps.map(app => ({
          name: `${app.name}-backup`,
          original: app.name,
          script: app.script,
          type: 'pm2-backup'
        }));
        
        this.coverageStatus.pm2.covered = true;
        this.log(`Found ${apps.length} PM2 apps for backup coverage`);
      }
    } catch (error) {
      this.log(`PM2 coverage scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanGitHubActionsCoverage() {
    this.log('Scanning GitHub Actions coverage...');
    
    try {
      const workflowsDir = path.join(this.rootDir, '.github', 'workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir)
          .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
        
        this.coverageStatus.githubActions.backupWorkflows = workflowFiles.map(file => ({
          name: file.replace(/\.(yml|yaml)$/, '-backup.$1'),
          original: file,
          type: 'github-backup'
        }));
        
        this.coverageStatus.githubActions.covered = true;
        this.log(`Found ${workflowFiles.length} GitHub Actions workflows for backup coverage`);
      }
    } catch (error) {
      this.log(`GitHub Actions coverage scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanNetlifyFunctionsCoverage() {
    this.log('Scanning Netlify Functions coverage...');
    
    try {
      const functionsDir = path.join(this.rootDir, 'netlify', 'functions');
      if (fs.existsSync(functionsDir)) {
        const manifestPath = path.join(functionsDir, 'functions-manifest.json');
        
        if (fs.existsSync(manifestPath)) {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          const functions = manifest.functions || [];
          
          this.coverageStatus.netlifyFunctions.backupFunctions = functions.map(func => ({
            name: `${func}-backup`,
            original: func,
            type: 'netlify-backup'
          }));
          
          this.coverageStatus.netlifyFunctions.covered = true;
          this.log(`Found ${functions.length} Netlify functions for backup coverage`);
        }
      }
    } catch (error) {
      this.log(`Netlify Functions coverage scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanCronJobsCoverage() {
    this.log('Scanning cron jobs coverage...');
    
    try {
      // Check for cron-related shell scripts
      const automationDir = path.join(this.rootDir, 'automation');
      if (fs.existsSync(automationDir)) {
        const files = fs.readdirSync(automationDir);
        const cronFiles = files.filter(file => 
          file.includes('cron') && file.endsWith('.sh')
        );
        
        this.coverageStatus.cronJobs.backupJobs = cronFiles.map(file => ({
          name: `${file.replace('.sh', '')}-backup.sh`,
          original: file,
          type: 'cron-backup'
        }));
        
        this.coverageStatus.cronJobs.covered = true;
        this.log(`Found ${cronFiles.length} cron scripts for backup coverage`);
      }
    } catch (error) {
      this.log(`Cron jobs coverage scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanPackageScriptsCoverage() {
    this.log('Scanning package.json scripts coverage...');
    
    try {
      const packagePath = path.join(this.rootDir, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const scripts = packageJson.scripts || {};
        
        // Focus on automation-related scripts
        const automationScripts = Object.keys(scripts).filter(name => 
          name.includes('automation') || 
          name.includes('pm2') || 
          name.includes('build') ||
          name.includes('sync') ||
          name.includes('cron') ||
          name.includes('ai') ||
          name.includes('mcp') ||
          name.includes('google-docs') ||
          name.includes('cursor') ||
          name.includes('linkedin')
        );
        
        this.coverageStatus.packageScripts.backupScripts = automationScripts.map(script => ({
          name: `${script}-backup`,
          original: script,
          type: 'package-backup'
        }));
        
        this.coverageStatus.packageScripts.covered = true;
        this.log(`Found ${automationScripts.length} automation package scripts for backup coverage`);
      }
    } catch (error) {
      this.log(`Package scripts coverage scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanAutomationScriptsCoverage() {
    this.log('Scanning automation scripts coverage...');
    
    try {
      const automationDir = path.join(this.rootDir, 'automation');
      if (fs.existsSync(automationDir)) {
        const files = fs.readdirSync(automationDir);
        const automationFiles = files.filter(file => 
          file.endsWith('.js') || file.endsWith('.cjs')
        ).filter(file => 
          !file.includes('redundancy') && 
          !file.includes('backup')
        );
        
        this.coverageStatus.automationScripts.backupScripts = automationFiles.map(file => ({
          name: `${file.replace(/\.(js|cjs)$/, '')}-backup.$1`,
          original: file,
          type: 'automation-backup'
        }));
        
        this.coverageStatus.automationScripts.covered = true;
        this.log(`Found ${automationFiles.length} automation scripts for backup coverage`);
      }
    } catch (error) {
      this.log(`Automation scripts coverage scan failed: ${error.message}`, 'ERROR');
    }
  }

  async createBackupPM2Processes() {
    this.log('Creating backup PM2 processes...');
    
    for (const backup of this.coverageStatus.pm2.backupProcesses) {
      try {
        const backupScript = path.join(this.rootDir, 'automation', 'redundancy', 'backup-pm2-processes.cjs');
        
        // Create backup process script if it doesn't exist
        if (!fs.existsSync(backupScript)) {
          const backupScriptContent = this.generateBackupPM2Script(backup);
          fs.writeFileSync(backupScript, backupScriptContent);
        }
        
        this.log(`Created backup PM2 process for ${backup.original}`);
      } catch (error) {
        this.log(`Failed to create backup PM2 process for ${backup.original}: ${error.message}`, 'ERROR');
      }
    }
  }

  generateBackupPM2Script(backup) {
    return `#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const path = require('path');

class BackupPM2Process {
  constructor() {
    this.processName = '${backup.name}';
    this.originalProcess = '${backup.original}';
    this.scriptPath = '${backup.script}';
  }

  start() {
    const result = spawnSync('pm2', [
      'start', this.scriptPath,
      '--name', this.processName,
      '--interpreter', 'node',
      '--cwd', process.cwd(),
      '--watch', 'false',
      '--autorestart', 'true',
      '--max-restarts', '15',
      '--exp-backoff-restart-delay', '1000'
    ], {
      cwd: process.cwd(),
      env: process.env,
      encoding: 'utf8'
    });

    if (result.status === 0) {
      console.log(\`Started backup PM2 process: \${this.processName}\`);
    } else {
      console.error(\`Failed to start backup PM2 process: \${result.stderr}\`);
    }
  }
}

if (require.main === module) {
  const backup = new BackupPM2Process();
  backup.start();
}

module.exports = BackupPM2Process;
`;
  }

  async createBackupGitHubWorkflows() {
    this.log('Creating backup GitHub Actions workflows...');
    
    for (const backup of this.coverageStatus.githubActions.backupWorkflows) {
      try {
        const originalPath = path.join(this.rootDir, '.github', 'workflows', backup.original);
        const backupPath = path.join(this.rootDir, '.github', 'workflows', backup.name);
        
        if (fs.existsSync(originalPath)) {
          let content = fs.readFileSync(originalPath, 'utf8');
          
          // Modify schedule to run less frequently as backup
          content = content.replace(
            /cron: '.*'/g,
            "cron: '0 0 * * *'  # Daily backup"
          );
          
          // Add backup indicator to name
          content = content.replace(
            /^name: /m,
            'name: Backup '
          );
          
          fs.writeFileSync(backupPath, content);
          this.log(`Created backup workflow: ${backup.name}`);
        }
      } catch (error) {
        this.log(`Failed to create backup workflow for ${backup.original}: ${error.message}`, 'ERROR');
      }
    }
  }

  async createBackupNetlifyFunctions() {
    this.log('Creating backup Netlify functions...');
    
    for (const backup of this.coverageStatus.netlifyFunctions.backupFunctions) {
      try {
        const backupDir = path.join(this.rootDir, 'netlify', 'functions', 'backup');
        if (!fs.existsSync(backupDir)) {
          fs.mkdirSync(backupDir, { recursive: true });
        }
        
        const backupFunctionPath = path.join(backupDir, `${backup.name}.js`);
        const backupFunctionContent = this.generateBackupNetlifyFunction(backup);
        
        fs.writeFileSync(backupFunctionPath, backupFunctionContent);
        this.log(`Created backup Netlify function: ${backup.name}`);
      } catch (error) {
        this.log(`Failed to create backup Netlify function for ${backup.original}: ${error.message}`, 'ERROR');
      }
    }
  }

  generateBackupNetlifyFunction(backup) {
    return `// Backup function for ${backup.original}
exports.handler = async function(event, context) {
  try {
    console.log('Backup function ${backup.name} called');
    
    // Call original function if available
    try {
      const originalFunction = require('../${backup.original}.js');
      if (originalFunction && originalFunction.handler) {
        return await originalFunction.handler(event, context);
      }
    } catch (err) {
      console.log('Original function not available, using backup logic');
    }
    
    // Backup implementation
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Backup function ${backup.name} executed successfully',
        original: '${backup.original}',
        timestamp: new Date().toISOString(),
        backup: true
      })
    };
  } catch (error) {
    console.error('Backup function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Backup function failed',
        message: error.message,
        backup: true
      })
    };
  }
};
`;
  }

  async createBackupCronJobs() {
    this.log('Creating backup cron jobs...');
    
    for (const backup of this.coverageStatus.cronJobs.backupJobs) {
      try {
        const originalPath = path.join(this.rootDir, 'automation', backup.original);
        const backupPath = path.join(this.rootDir, 'automation', 'redundancy', backup.name);
        
        if (fs.existsSync(originalPath)) {
          let content = fs.readFileSync(originalPath, 'utf8');
          
          // Modify interval to be less frequent as backup
          content = content.replace(
            /INTERVAL_SECONDS=\d+/,
            'INTERVAL_SECONDS=3600'  # 1 hour backup
          );
          
          // Add backup indicator
          content = content.replace(
            /^# /m,
            '# BACKUP '
          );
          
          fs.writeFileSync(backupPath, content);
          fs.chmodSync(backupPath, '755');
          this.log(`Created backup cron job: ${backup.name}`);
        }
      } catch (error) {
        this.log(`Failed to create backup cron job for ${backup.original}: ${error.message}`, 'ERROR');
      }
    }
  }

  async createBackupPackageScripts() {
    this.log('Creating backup package.json scripts...');
    
    try {
      const packagePath = path.join(this.rootDir, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      const scripts = packageJson.scripts || {};
      
      // Create backup scripts
      for (const backup of this.coverageStatus.packageScripts.backupScripts) {
        const originalScript = scripts[backup.original];
        if (originalScript) {
          scripts[backup.name] = `echo "Backup script for ${backup.original}" && ${originalScript}`;
        }
      }
      
      // Write updated package.json
      packageJson.scripts = scripts;
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
      
      this.log(`Created ${this.coverageStatus.packageScripts.backupScripts.length} backup package scripts`);
    } catch (error) {
      this.log(`Failed to create backup package scripts: ${error.message}`, 'ERROR');
    }
  }

  async createBackupAutomationScripts() {
    this.log('Creating backup automation scripts...');
    
    for (const backup of this.coverageStatus.automationScripts.backupScripts) {
      try {
        const originalPath = path.join(this.rootDir, 'automation', backup.original);
        const backupPath = path.join(this.rootDir, 'automation', 'redundancy', backup.name);
        
        if (fs.existsSync(originalPath)) {
          let content = fs.readFileSync(originalPath, 'utf8');
          
          // Add backup wrapper
          const backupWrapper = `// BACKUP SCRIPT FOR ${backup.original}
// Generated by Enhanced Coverage Manager
// This is a backup version that runs less frequently

`;
          
          content = backupWrapper + content;
          
          // Modify any cron schedules to be less frequent
          content = content.replace(
            /cron\.schedule\('\*\/\d+/g,
            "cron.schedule('0 */6"  // Every 6 hours instead of every few minutes
          );
          
          fs.writeFileSync(backupPath, content);
          this.log(`Created backup automation script: ${backup.name}`);
        }
      } catch (error) {
        this.log(`Failed to create backup automation script for ${backup.original}: ${error.message}`, 'ERROR');
      }
    }
  }

  async generateCoverageReport() {
    this.log('Generating comprehensive coverage report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      coverage: this.coverageStatus,
      summary: {
        totalCovered: Object.values(this.coverageStatus).filter(status => status.covered).length,
        totalCategories: Object.keys(this.coverageStatus).length,
        coveragePercentage: Math.round(
          (Object.values(this.coverageStatus).filter(status => status.covered).length / 
           Object.keys(this.coverageStatus).length) * 100
        )
      }
    };
    
    const reportPath = path.join(this.logDir, 'enhanced-coverage-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Coverage report generated: ${reportPath}`);
    this.log(`Coverage: ${report.summary.coveragePercentage}% (${report.summary.totalCovered}/${report.summary.totalCategories})`);
    
    return report;
  }

  async startFullCoverage() {
    this.log('Starting full automation coverage analysis and backup creation...');
    
    try {
      // Scan all automation types
      await this.scanPM2Coverage();
      await this.scanGitHubActionsCoverage();
      await this.scanNetlifyFunctionsCoverage();
      await this.scanCronJobsCoverage();
      await this.scanPackageScriptsCoverage();
      await this.scanAutomationScriptsCoverage();
      
      // Create backup systems
      await this.createBackupPM2Processes();
      await this.createBackupGitHubWorkflows();
      await this.createBackupNetlifyFunctions();
      await this.createBackupCronJobs();
      await this.createBackupPackageScripts();
      await this.createBackupAutomationScripts();
      
      // Generate report
      const report = await this.generateCoverageReport();
      
      this.log('Full automation coverage completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Full coverage failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async startHealthMonitoring() {
    this.log('Starting health monitoring for enhanced coverage...');
    
    // Monitor coverage health every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      await this.checkCoverageHealth();
    });
    
    // Full coverage check every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      await this.startFullCoverage();
    });
  }

  async checkCoverageHealth() {
    this.log('Checking coverage health...');
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      issues: []
    };
    
    for (const [category, status] of Object.entries(this.coverageStatus)) {
      if (!status.covered) {
        healthStatus.status = 'degraded';
        healthStatus.issues.push(`${category} not covered`);
      }
    }
    
    if (healthStatus.issues.length === 0) {
      this.log('All automation categories are covered');
    } else {
      this.log(`Coverage issues found: ${healthStatus.issues.join(', ')}`, 'WARN');
    }
    
    return healthStatus;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedCoverageManager();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.startFullCoverage()
        .then(() => {
          console.log('Enhanced coverage manager completed successfully');
          process.exit(0);
        })
        .catch(error => {
          console.error('Enhanced coverage manager failed:', error);
          process.exit(1);
        });
      break;
      
    case 'health':
      manager.checkCoverageHealth()
        .then(status => {
          console.log('Coverage health:', JSON.stringify(status, null, 2));
          process.exit(0);
        })
        .catch(error => {
          console.error('Health check failed:', error);
          process.exit(1);
        });
      break;
      
    case 'monitor':
      manager.startHealthMonitoring();
      console.log('Enhanced coverage monitoring started');
      break;
      
    default:
      console.log('Usage: node enhanced-coverage-manager.cjs [start|health|monitor]');
      process.exit(1);
  }
}

module.exports = EnhancedCoverageManager;