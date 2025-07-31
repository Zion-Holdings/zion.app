const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    if (this.projectRoot.endsWith('automation')) {
      this.projectRoot = path.join(this.projectRoot, '..');
    }
    this.automationPath = path.join(this.projectRoot, 'automation');
    this.logPath = path.join(this.automationPath, 'logs');
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

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      type,
      message,
      automation: 'orchestrator'
    };
    
    const logFile = path.join(this.logPath, `automation-${new Date().toISOString().split('T')[0]}.json`);
    let logs = [];
    
    if (fs.existsSync(logFile)) {
      try {
        logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
      } catch (error) {
        console.log('Could not parse existing log file, starting fresh');
      }
    }
    
    logs.push(logEntry);
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
    
    console.log(`[${timestamp}] ${type.toUpperCase()}: ${message}`);
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
      this.log(`Content generation failed: ${error.message}`, 'error');
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
      this.log(`Code improvement failed: ${error.message}`, 'error');
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
        cycle_id: new Date().toISOString(),
        features: ['content_generation', 'code_improvement', 'analytics']
      });
      
      this.log('Analytics collection completed', 'success');
      return true;
    } catch (error) {
      this.log(`Analytics failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runBuildAndDeploy() {
    try {
      this.log('Starting build and deploy process...', 'info');
      
      // Run build
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Build completed successfully', 'success');
      
      // Run type check
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Type check completed successfully', 'success');
      
      // Run linting
      execSync('npm run lint', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Linting completed successfully', 'success');
      
      return true;
    } catch (error) {
      this.log(`Build/deploy failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runFullAutomationCycle() {
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
      this.log(`Automation cycle failed: ${error.message}`, 'error');
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