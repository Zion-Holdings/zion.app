const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    if (this.projectRoot.endsWith('automation')) {
      this.projectRoot = path.join(this.projectRoot, '..');
    }
    this.automationPath = path.join(this.projectRoot, 'automation');
    this.logPath = path.join(this.automationPath, 'logs');
    this.cycleId = new Date().toISOString().replace(/:/g, '-');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.logPath];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, type = 'info', error = null) {
    const timestamp = new Date().toISOString();
    const cycleId = this.cycleId || 'setup';
    const logFile = path.join(this.logPath, `automation-cycle-${cycleId}.log`);
    const jsonLogFile = path.join(this.logPath, `automation-cycle-${cycleId}.json`);

    // Plain text log
    const logMessage = `[${timestamp}] ${type.toUpperCase()}: ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
    if (error && error.stack) {
      fs.appendFileSync(logFile, `${error.stack}\n`);
    }

    // JSON log
    const logEntry = {
      timestamp,
      type,
      message,
      automation: 'orchestrator',
      error: error ? { message: error.message, stack: error.stack } : null
    };

    let logs = [];
    if (fs.existsSync(jsonLogFile)) {
      try {
        logs = JSON.parse(fs.readFileSync(jsonLogFile, 'utf8'));
      } catch (e) {
        console.log('Could not parse existing JSON log file, starting fresh');
      }
    }
    logs.push(logEntry);
    fs.writeFileSync(jsonLogFile, JSON.stringify(logs, null, 2));

    console.log(logMessage.trim());
    if (error) {
      console.error(error);
    }
  }

  async runContentGeneration() {
    try {
      this.log('Starting content generation...', 'info');
      
      const ContentGenerator = require('./content-generator');
      const AutonomousContentGenerator = require('./autonomous-content-generator');
      
      const autonomousGenerator = new AutonomousContentGenerator();
      await autonomousGenerator.run();
      
      this.log('Content generation completed successfully', 'success');
      return true;
    } catch (error) {
      this.log('Content generation failed.', 'error', error);
      return false;
    }
  }

  async runCodeImprovement() {
    try {
      this.log('Starting code improvement...', 'info');
      
      const AutoImprover = require('./auto-improver');
      const autoImprover = new AutoImprover();
      
      // Run code quality analysis
      const issues = autoImprover.analyzeCodeQuality();
      this.log(`Found ${issues.length} code quality issues`, 'info');
      
      // Run improvements
      const improvements = autoImprover.runImprovements();
      this.log(`Applied ${improvements.length} improvements`, 'success');
      
      return true;
    } catch (error) {
      this.log('Code improvement failed.', 'error', error);
      return false;
    }
  }

  async runAnalytics() {
    try {
      this.log('Starting analytics collection...', 'info');
      
      const AutonomousAnalytics = require('./autonomous-analytics');
      const analytics = new AutonomousAnalytics();
      
      // Track automation events
      await analytics.trackAutonomousEvent('automation_cycle_started', {
        cycle_id: this.cycleId,
        features: ['content_generation', 'code_improvement', 'analytics']
      });
      
      this.log('Analytics collection completed', 'success');
      return true;
    } catch (error) {
      this.log('Analytics failed.', 'error', error);
      return false;
    }
  }

  runBuildAndDeploy() {
    return new Promise((resolve, reject) => {
      this.log('Starting build and deploy process...', 'info');
      
      const commands = [
        { cmd: 'npm run build', label: 'Build' },
        { cmd: 'npm run type-check', label: 'Type check' },
        { cmd: 'npm run lint', label: 'Linting' }
      ];

      const runCommand = (index) => {
        if (index >= commands.length) {
          this.log('Build and deploy process completed successfully', 'success');
          resolve(true);
          return;
        }

        const { cmd, label } = commands[index];
        this.log(`Running ${label}...`, 'info');

        exec(cmd, { cwd: this.projectRoot }, (error, stdout, stderr) => {
          if (error) {
            this.log(`${label} failed.`, 'error', error);
            this.log(`stdout: ${stdout}`, 'info');
            this.log(`stderr: ${stderr}`, 'info');
            reject(error);
            return;
          }
          this.log(`${label} completed successfully.`, 'success');
          this.log(`stdout: ${stdout}`, 'info');
          if(stderr) {
            this.log(`stderr: ${stderr}`, 'info');
          }
          runCommand(index + 1);
        });
      };

      runCommand(0);
    });
  }

  async runFullAutomationCycle() {
    this.cycleId = new Date().toISOString().replace(/:/g, '-');
    this.log('🚀 Starting full automation cycle...', 'info');
    
    const startTime = Date.now();
    const results = {
      contentGeneration: false,
      codeImprovement: false,
      analytics: false,
      buildDeploy: false
    };
    
    try {
      // Step 1: Content Generation
      this.log('Step 1: Content Generation', 'info');
      results.contentGeneration = await this.runContentGeneration();
      
      // Step 2: Code Improvement
      this.log('Step 2: Code Improvement', 'info');
      results.codeImprovement = await this.runCodeImprovement();
      
      // Step 3: Analytics
      this.log('Step 3: Analytics', 'info');
      results.analytics = await this.runAnalytics();
      
      // Step 4: Build and Deploy
      this.log('Step 4: Build and Deploy', 'info');
      results.buildDeploy = await this.runBuildAndDeploy();
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      this.log(`Automation cycle completed in ${duration}ms`, 'success');
      
      // Log results
      const successCount = Object.values(results).filter(Boolean).length;
      const totalSteps = Object.keys(results).length;
      
      this.log(`Success rate: ${successCount}/${totalSteps} steps completed successfully`, 'info');
      
      // Update improvements log
      this.updateImprovementsLog(results, duration);
      
      return results;
      
    } catch (error) {
      this.log('Automation cycle failed.', 'error', error);
      return results;
    }
  }

  updateImprovementsLog(results, duration) {
    const improvementsLog = {
      timestamp: new Date().toISOString(),
      type: 'automation-cycle',
      action: 'full-automation-cycle',
      status: Object.values(results).every(Boolean) ? 'success' : 'partial',
      duration: duration,
      results: results,
      details: {
        features: [
          'Automatic content generation based on ChatGPT insights',
          'AI-powered marketplace content',
          'Dynamic service listings and blog posts',
          'Code quality improvements',
          'Analytics tracking',
          'Build and deployment automation'
        ],
        source: 'ChatGPT conversation integration and autonomous systems'
      }
    };
    
    const logPath = path.join(this.automationPath, 'improvements-log.json');
    let existingLog = [];
    
    if (fs.existsSync(logPath)) {
      try {
        existingLog = JSON.parse(fs.readFileSync(logPath, 'utf8'));
      } catch (error) {
        console.log('Could not parse existing improvements log, starting fresh');
      }
    }
    
    existingLog.push(improvementsLog);
    fs.writeFileSync(logPath, JSON.stringify(existingLog, null, 2));
    
    this.log('Improvements log updated', 'info');
  }

  async runContinuousAutomation() {
    this.log('🔄 Starting continuous automation mode...', 'info');
    
    const interval = 30 * 60 * 1000; // 30 minutes
    
    const runCycle = async () => {
      this.log('Running automation cycle...', 'info');
      await this.runFullAutomationCycle();
    };
    
    // Run initial cycle
    await runCycle();
    
    // Set up continuous cycle
    setInterval(async () => {
      await runCycle();
    }, interval);
    
    this.log(`Continuous automation active - cycles every ${interval/1000/60} minutes`, 'info');
  }
}

module.exports = AutomationOrchestrator; 