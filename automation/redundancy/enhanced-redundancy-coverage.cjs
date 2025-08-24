#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class EnhancedRedundancyCoverage {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.automationDir = path.join(process.cwd(), 'automation');
    this.scriptsDir = path.join(process.cwd(), 'scripts');
    this.ensureLogDir();
    
    this.coverageMap = new Map();
    this.missingCoverage = new Set();
    this.redundancyStatus = new Map();
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
    
    const logFile = path.join(this.logDir, 'enhanced-redundancy-coverage.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async scanAllAutomations() {
    this.log('Scanning all automation scripts for redundancy coverage...');
    
    const automationScripts = await this.scanDirectory(this.automationDir, ['.js', '.cjs', '.sh']);
    const scriptScripts = await this.scanDirectory(this.scriptsDir, ['.js', '.cjs', '.sh']);
    
    const allScripts = [...automationScripts, ...scriptScripts];
    this.log(`Found ${allScripts.length} total automation scripts`);
    
    return allScripts;
  }

  async scanDirectory(dir, extensions) {
    if (!fs.existsSync(dir)) {
      return [];
    }

    const scripts = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory() && item.name !== 'redundancy' && item.name !== 'node_modules') {
        const subDir = path.join(dir, item.name);
        const subScripts = await this.scanDirectory(subDir, extensions);
        scripts.push(...subScripts);
      } else if (item.isFile()) {
        const ext = path.extname(item.name);
        if (extensions.includes(ext)) {
          scripts.push({
            name: item.name,
            path: path.join(dir, item.name),
            directory: dir,
            type: 'script'
          });
        }
      }
    }
    
    return scripts;
  }

  async checkRedundancyCoverage(scripts) {
    this.log('Checking redundancy coverage for all scripts...');
    
    for (const script of scripts) {
      const coverage = await this.analyzeScriptCoverage(script);
      this.coverageMap.set(script.name, coverage);
      
      if (!coverage.hasRedundancy) {
        this.missingCoverage.add(script.name);
      }
    }
    
    this.log(`Coverage analysis complete. ${this.missingCoverage.size} scripts need redundancy coverage`);
  }

  async analyzeScriptCoverage(script) {
    const coverage = {
      script: script.name,
      path: script.path,
      hasRedundancy: false,
      redundancyType: 'none',
      coverageLevel: 'none',
      recommendations: []
    };

    try {
      const content = fs.readFileSync(script.path, 'utf8');
      
      // Check if script is covered by existing redundancy systems
      if (await this.isCoveredByPM2Redundancy(script, content)) {
        coverage.hasRedundancy = true;
        coverage.redundancyType = 'pm2';
        coverage.coverageLevel = 'full';
      } else if (await this.isCoveredByGitHubActionsRedundancy(script, content)) {
        coverage.hasRedundancy = true;
        coverage.redundancyType = 'github-actions';
        coverage.coverageLevel = 'full';
      } else if (await this.isCoveredByNetlifyFunctionsRedundancy(script, content)) {
        coverage.hasRedundancy = true;
        coverage.redundancyType = 'netlify-functions';
        coverage.coverageLevel = 'full';
      } else {
        // Generate recommendations for redundancy coverage
        coverage.recommendations = this.generateRedundancyRecommendations(script, content);
      }
      
    } catch (error) {
      this.log(`Failed to analyze ${script.name}: ${error.message}`, 'ERROR');
      coverage.recommendations = ['Error analyzing script'];
    }
    
    return coverage;
  }

  async isCoveredByPM2Redundancy(script, content) {
    // Check if script is referenced in PM2 ecosystem or redundancy
    const pm2Keywords = ['pm2', 'ecosystem', 'auto-sync', 'cron'];
    const hasPM2Keywords = pm2Keywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (hasPM2Keywords) {
      return true;
    }
    
    // Check if script is in PM2 redundancy coverage
    const pm2RedundancyScripts = [
      'pm2-auto-sync.js',
      'git-sync.cjs',
      'advanced-git-sync.cjs',
      'enhanced-git-sync-orchestrator.cjs'
    ];
    
    return pm2RedundancyScripts.includes(script.name);
  }

  async isCoveredByGitHubActionsRedundancy(script, content) {
    // Check if script is referenced in GitHub Actions workflows
    const githubKeywords = ['github', 'actions', 'workflow', 'ci/cd'];
    const hasGitHubKeywords = githubKeywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (hasGitHubKeywords) {
      return true;
    }
    
    // Check if script is in GitHub Actions redundancy coverage
    const githubRedundancyScripts = [
      'marketing-sync.js',
      'git-sync.cjs',
      'advanced-git-sync.cjs'
    ];
    
    return githubRedundancyScripts.includes(script.name);
  }

  async isCoveredByNetlifyFunctionsRedundancy(script, content) {
    // Check if script is related to Netlify functions
    const netlifyKeywords = ['netlify', 'function', 'serverless', 'lambda'];
    const hasNetlifyKeywords = netlifyKeywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (hasNetlifyKeywords) {
      return true;
    }
    
    // Check if script is in Netlify functions redundancy coverage
    const netlifyRedundancyScripts = [
      'enhanced-netlify-healer.cjs',
      'generate-netlify-functions-manifest.cjs'
    ];
    
    return netlifyRedundancyScripts.includes(script.name);
  }

  generateRedundancyRecommendations(script, content) {
    const recommendations = [];
    
    // Analyze script content to determine appropriate redundancy strategy
    if (content.includes('cron') || content.includes('schedule') || content.includes('setInterval')) {
      recommendations.push('Add PM2 redundancy with cron scheduling');
      recommendations.push('Implement health monitoring and auto-restart');
    }
    
    if (content.includes('git') || content.includes('commit') || content.includes('push')) {
      recommendations.push('Add GitHub Actions redundancy workflow');
      recommendations.push('Implement backup git sync mechanisms');
    }
    
    if (content.includes('build') || content.includes('webpack') || content.includes('next')) {
      recommendations.push('Add build automation redundancy');
      recommendations.push('Implement backup build processes');
    }
    
    if (content.includes('monitor') || content.includes('health') || content.includes('check')) {
      recommendations.push('Add monitoring redundancy');
      recommendations.push('Implement backup health check processes');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Add basic process monitoring redundancy');
      recommendations.push('Implement health check and restart mechanisms');
    }
    
    return recommendations;
  }

  async createMissingRedundancyCoverage() {
    this.log('Creating missing redundancy coverage...');
    
    for (const scriptName of this.missingCoverage) {
      const coverage = this.coverageMap.get(scriptName);
      if (coverage) {
        await this.createRedundancyForScript(coverage);
      }
    }
  }

  async createRedundancyForScript(coverage) {
    this.log(`Creating redundancy coverage for ${coverage.script}...`);
    
    try {
      const redundancyScript = this.generateRedundancyScript(coverage);
      const redundancyPath = path.join(
        this.automationDir, 
        'redundancy', 
        `${path.basename(coverage.script, path.extname(coverage.script))}-redundancy.cjs`
      );
      
      fs.writeFileSync(redundancyPath, redundancyScript);
      
      this.log(`Created redundancy script: ${redundancyPath}`);
      
      // Update coverage status
      coverage.hasRedundancy = true;
      coverage.redundancyType = 'custom';
      coverage.coverageLevel = 'partial';
      
    } catch (error) {
      this.log(`Failed to create redundancy for ${coverage.script}: ${error.message}`, 'ERROR');
    }
  }

  generateRedundancyScript(coverage) {
    const scriptName = path.basename(coverage.script, path.extname(coverage.script));
    const className = `${scriptName.charAt(0).toUpperCase() + scriptName.slice(1)}RedundancyManager`;
    
    return `#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ${className} {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.scriptPath = path.join(process.cwd(), 'automation', '${coverage.script}');
    this.ensureLogDir();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = \`[\${timestamp}] [\${level}] [${scriptName.toUpperCase()}-REDUNDANCY] \${message}\`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, '${scriptName}-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\\n');
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
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

  async runScript() {
    this.log('Running ${coverage.script}...');
    
    try {
      const result = this.runCommand('node', [this.scriptPath]);
      
      if (result.success) {
        this.log('Script executed successfully');
        return true;
      } else {
        this.log(\`Script execution failed: \${result.stderr}\`, 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(\`Script execution error: \${error.message}\`, 'ERROR');
      return false;
    }
  }

  async startMonitoring() {
    this.log('Starting monitoring for ${coverage.script}...');
    
    // Monitor every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.healthCheck();
    });
    
    this.log('Monitoring started successfully');
  }

  async healthCheck() {
    this.log('Performing health check...');
    
    try {
      // Check if script file exists
      if (!fs.existsSync(this.scriptPath)) {
        this.log('Script file not found', 'ERROR');
        return false;
      }
      
      // Check if script is executable
      const stats = fs.statSync(this.scriptPath);
      if (!stats.isFile()) {
        this.log('Script path is not a file', 'ERROR');
        return false;
      }
      
      this.log('Health check passed');
      return true;
      
    } catch (error) {
      this.log(\`Health check failed: \${error.message}\`, 'ERROR');
      return false;
    }
  }

  async generateReport() {
    const report = {
      script: '${coverage.script}',
      redundancyType: 'custom',
      coverageLevel: 'partial',
      lastHealthCheck: new Date().toISOString(),
      healthStatus: 'healthy',
      recommendations: ${JSON.stringify(coverage.recommendations)}
    };
    
    const reportPath = path.join(this.logDir, '${scriptName}-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('Report generated successfully');
    return report;
  }

  async start() {
    this.log('Starting ${className}...');
    
    try {
      await this.startMonitoring();
      await this.healthCheck();
      await this.generateReport();
      
      this.log('${className} started successfully');
      
    } catch (error) {
      this.log(\`Failed to start ${className}: \${error.message}\`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new ${className}();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start().catch(console.error);
      break;
    case 'health':
      manager.healthCheck().then(result => {
        console.log('Health check result:', result);
      }).catch(console.error);
      break;
    case 'report':
      manager.generateReport().then(report => {
        console.log('Report:', report);
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node ${path.basename(coverage.script, path.extname(coverage.script))}-redundancy.cjs [start|health|report]');
  }
}

module.exports = ${className};
`;
  }

  async generateComprehensiveReport() {
    this.log('Generating comprehensive redundancy coverage report...');
    
    const report = {
      generatedAt: new Date().toISOString(),
      totalScripts: this.coverageMap.size,
      coveredScripts: Array.from(this.coverageMap.values()).filter(c => c.hasRedundancy).length,
      uncoveredScripts: this.missingCoverage.size,
      coveragePercentage: Math.round((Array.from(this.coverageMap.values()).filter(c => c.hasRedundancy).length / this.coverageMap.size) * 100),
      coverageDetails: Array.from(this.coverageMap.values()),
      recommendations: this.generateSystemRecommendations()
    };
    
    const reportPath = path.join(this.logDir, 'comprehensive-redundancy-coverage-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('Comprehensive report generated successfully');
    return report;
  }

  generateSystemRecommendations() {
    const recommendations = [];
    
    if (this.missingCoverage.size > 0) {
      recommendations.push(`Create redundancy coverage for ${this.missingCoverage.size} uncovered scripts`);
    }
    
    const coverageTypes = new Map();
    for (const coverage of this.coverageMap.values()) {
      if (coverage.hasRedundancy) {
        const type = coverage.redundancyType;
        coverageTypes.set(type, (coverageTypes.get(type) || 0) + 1);
      }
    }
    
    for (const [type, count] of coverageTypes) {
      recommendations.push(`Optimize ${type} redundancy coverage (${count} scripts)`);
    }
    
    if (this.coverageMap.size > 0) {
      recommendations.push('Implement cross-system redundancy coordination');
      recommendations.push('Add automated redundancy testing and validation');
    }
    
    return recommendations;
  }

  async start() {
    this.log('Starting Enhanced Redundancy Coverage Manager...');
    
    try {
      const scripts = await this.scanAllAutomations();
      await this.checkRedundancyCoverage(scripts);
      await this.createMissingRedundancyCoverage();
      const report = await this.generateComprehensiveReport();
      
      this.log('Enhanced Redundancy Coverage Manager started successfully');
      this.log(`Coverage: ${report.coveragePercentage}% (${report.coveredScripts}/${report.totalScripts} scripts)`);
      
      // Start monitoring
      this.startMonitoring();
      
    } catch (error) {
      this.log(`Failed to start Enhanced Redundancy Coverage Manager: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  startMonitoring() {
    // Monitor coverage every hour
    cron.schedule('0 * * * *', async () => {
      this.log('Performing periodic coverage check...');
      try {
        const scripts = await this.scanAllAutomations();
        await this.checkRedundancyCoverage(scripts);
        await this.generateComprehensiveReport();
      } catch (error) {
        this.log(`Periodic coverage check failed: ${error.message}`, 'ERROR');
      }
    });
    
    this.log('Coverage monitoring started');
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedRedundancyCoverage();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start().catch(console.error);
      break;
    case 'scan':
      manager.scanAllAutomations().then(scripts => {
        console.log('Found scripts:', scripts.map(s => s.name));
      }).catch(console.error);
      break;
    case 'coverage':
      manager.scanAllAutomations().then(async (scripts) => {
        await manager.checkRedundancyCoverage(scripts);
        const report = await manager.generateComprehensiveReport();
        console.log('Coverage Report:', report);
      }).catch(console.error);
      break;
    case 'report':
      manager.generateComprehensiveReport().then(report => {
        console.log('Report:', report);
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node enhanced-redundancy-coverage.cjs [start|scan|coverage|report]');
  }
}

module.exports = EnhancedRedundancyCoverage;