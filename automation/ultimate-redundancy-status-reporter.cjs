#!/usr/bin/env node

'use strict';

// Ultimate Redundancy Status Reporter
// Provides comprehensive status reporting for all redundancy systems

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UltimateRedundancyStatusReporter {
  constructor() {
    this.workspace = process.cwd();
    this.statusFile = path.join(this.workspace, 'automation', 'ultimate-redundancy-status.json');
    this.logDir = path.join(this.workspace, 'automation', 'logs');
    this.ensureLogDir();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  async generateComprehensiveReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        system: 'Ultimate Redundancy System',
        version: '2.0.0',
        status: 'operational',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        platform: process.platform,
        nodeVersion: process.version,
        checks: await this.runAllChecks(),
        summary: {},
        recommendations: []
      };

      report.summary = this.generateSummary(report.checks);
      report.recommendations = this.generateRecommendations(report.checks);

      // Save report
      this.saveReport(report);
      
      return report;
    } catch (error) {
      console.error('Error generating comprehensive report:', error);
      throw error;
    }
  }

  async runAllChecks() {
    const checks = {
      pm2: await this.checkPM2Status(),
      github: await this.checkGitHubActions(),
      netlify: await this.checkNetlifyFunctions(),
      build: await this.checkBuildSystem(),
      automation: await this.checkAutomationSystems(),
      redundancy: await this.checkRedundancySystems(),
      monitoring: await this.checkMonitoringSystems()
    };

    return checks;
  }

  async checkPM2Status() {
    try {
      const pm2List = execSync('pm2 list --format json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      return {
        status: 'healthy',
        totalProcesses: processes.length,
        running: processes.filter(p => p.pm2_env.status === 'online').length,
        stopped: processes.filter(p => p.pm2_env.status === 'stopped').length,
        errored: processes.filter(p => p.pm2_env.status === 'errored').length,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          uptime: p.pm2_env.pm_uptime,
          memory: p.monit.memory,
          cpu: p.monit.cpu
        }))
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message,
        totalProcesses: 0,
        running: 0,
        stopped: 0,
        errored: 0
      };
    }
  }

  async checkGitHubActions() {
    try {
      // Check if .github/workflows directory exists and has workflow files
      const workflowsDir = path.join(this.workspace, '.github', 'workflows');
      const hasWorkflows = fs.existsSync(workflowsDir);
      
      if (hasWorkflows) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
        return {
          status: 'configured',
          workflows: workflowFiles.length,
          directory: workflowsDir,
          files: workflowFiles
        };
      } else {
        return {
          status: 'not_configured',
          workflows: 0,
          directory: workflowsDir
        };
      }
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkNetlifyFunctions() {
    try {
      const netlifyDir = path.join(this.workspace, 'netlify', 'functions');
      const hasFunctions = fs.existsSync(netlifyDir);
      
      if (hasFunctions) {
        const functionFiles = fs.readdirSync(netlifyDir).filter(f => f.endsWith('.js'));
        return {
          status: 'configured',
          functions: functionFiles.length,
          directory: netlifyDir,
          files: functionFiles
        };
      } else {
        return {
          status: 'not_configured',
          functions: 0,
          directory: netlifyDir
        };
      }
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkBuildSystem() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workspace, 'package.json'), 'utf8'));
      const buildScripts = Object.keys(packageJson.scripts).filter(script => 
        script.includes('build') || script.includes('dev') || script.includes('start')
      );
      
      return {
        status: 'configured',
        totalScripts: Object.keys(packageJson.scripts).length,
        buildScripts: buildScripts.length,
        scripts: buildScripts,
        dependencies: Object.keys(packageJson.dependencies || {}).length,
        devDependencies: Object.keys(packageJson.devDependencies || {}).length
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkAutomationSystems() {
    try {
      const automationDir = path.join(this.workspace, 'automation');
      const automationFiles = fs.readdirSync(automationDir).filter(f => 
        f.endsWith('.cjs') || f.endsWith('.js') || f.endsWith('.sh')
      );
      
      return {
        status: 'configured',
        totalFiles: automationFiles.length,
        scripts: automationFiles.filter(f => f.endsWith('.cjs') || f.endsWith('.js')).length,
        shellScripts: automationFiles.filter(f => f.endsWith('.sh')).length,
        files: automationFiles
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkRedundancySystems() {
    try {
      const redundancyFiles = [
        'ultimate-redundancy-system.cjs',
        'comprehensive-redundancy-system.cjs',
        'enhanced-pm2-redundancy.cjs',
        'github-actions-redundancy.cjs',
        'netlify-functions-redundancy.cjs'
      ];
      
      const automationDir = path.join(this.workspace, 'automation');
      const existingFiles = redundancyFiles.filter(file => 
        fs.existsSync(path.join(automationDir, file))
      );
      
      return {
        status: 'configured',
        totalSystems: redundancyFiles.length,
        available: existingFiles.length,
        missing: redundancyFiles.filter(file => !existingFiles.includes(file)),
        systems: existingFiles
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkMonitoringSystems() {
    try {
      const monitoringFiles = [
        'redundancy-health-monitor.cjs',
        'continuous-build-monitor.cjs',
        'pre-build-health-check.cjs',
        'nextjs-page-validator.cjs'
      ];
      
      const automationDir = path.join(this.workspace, 'automation');
      const existingFiles = monitoringFiles.filter(file => 
        fs.existsSync(path.join(automationDir, file))
      );
      
      return {
        status: 'configured',
        totalMonitors: monitoringFiles.length,
        available: existingFiles.length,
        missing: monitoringFiles.filter(file => !existingFiles.includes(file)),
        monitors: existingFiles
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  generateSummary(checks) {
    const totalChecks = Object.keys(checks).length;
    const healthyChecks = Object.values(checks).filter(check => 
      check.status === 'healthy' || check.status === 'configured'
    ).length;
    const errorChecks = Object.values(checks).filter(check => 
      check.status === 'error'
    ).length;
    
    return {
      totalChecks,
      healthyChecks,
      errorChecks,
      healthPercentage: Math.round((healthyChecks / totalChecks) * 100),
      overallStatus: errorChecks === 0 ? 'healthy' : 'degraded'
    };
  }

  generateRecommendations(checks) {
    const recommendations = [];
    
    Object.entries(checks).forEach(([system, check]) => {
      if (check.status === 'error') {
        recommendations.push({
          system,
          priority: 'high',
          action: `Fix ${system} system errors: ${check.error}`,
          impact: 'System functionality may be compromised'
        });
      } else if (check.status === 'not_configured') {
        recommendations.push({
          system,
          priority: 'medium',
          action: `Configure ${system} system`,
          impact: 'Reduced redundancy and monitoring capabilities'
        });
      }
    });
    
    return recommendations;
  }

  saveReport(report) {
    try {
      fs.writeFileSync(this.statusFile, JSON.stringify(report, null, 2));
      console.log(`✅ Status report saved to ${this.statusFile}`);
    } catch (error) {
      console.error('Error saving status report:', error);
    }
  }

  async run() {
    try {
      console.log('🔍 Generating Ultimate Redundancy Status Report...');
      const report = await this.generateComprehensiveReport();
      
      console.log('\n📊 Ultimate Redundancy System Status:');
      console.log(`   Overall Status: ${report.summary.overallStatus.toUpperCase()}`);
      console.log(`   Health: ${report.summary.healthPercentage}%`);
      console.log(`   Total Checks: ${report.summary.totalChecks}`);
      console.log(`   Healthy: ${report.summary.healthyChecks}`);
      console.log(`   Errors: ${report.summary.errorChecks}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n⚠️  Recommendations:');
        report.recommendations.forEach(rec => {
          console.log(`   [${rec.priority.toUpperCase()}] ${rec.action}`);
        });
      }
      
      return report;
    } catch (error) {
      console.error('❌ Error running status reporter:', error);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const reporter = new UltimateRedundancyStatusReporter();
  reporter.run().catch(console.error);
}

module.exports = UltimateRedundancyStatusReporter;