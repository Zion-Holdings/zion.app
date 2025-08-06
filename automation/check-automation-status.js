#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class AutomationStatusChecker {
  constructor() {
    this.automationSystems = [
      'ultimate-automation-factory-system',
      'intelligent-automation-orchestrator',
      'continuous-automation-improvement-system',
      'master-automation-coordinator',
      'enhanced-diversification-orchestrator',
      'intelligent-agent-orchestrator'
    ];
    
    this.statusData = {
      timestamp: new Date().toISOString(),
      systems: {},
      overallHealth: 'unknown',
      totalSystems: 0,
      activeSystems: 0,
      failedSystems: 0
    };
  }

  async checkAllSystems() {
    console.log('🔍 Checking automation system status...\n');
    
    this.statusData.totalSystems = this.automationSystems.length;
    this.statusData.activeSystems = 0;
    this.statusData.failedSystems = 0;
    
    for (const system of this.automationSystems) {
      await this.checkSystem(system);
    }
    
    this.calculateOverallHealth();
    await this.displayStatus();
    await this.saveStatus();
  }

  async checkSystem(systemName) {
    try {
      console.log(`🔍 Checking ${systemName}...`);
      
      const systemStatus = {
        name: systemName,
        isRunning: false,
        health: 'unknown',
        lastActivity: null,
        performance: 0,
        intelligence: 0,
        evolutionCount: 0,
        errors: []
      };
      
      // Check if system file exists
      const systemPath = path.join(__dirname, `${systemName}.js`);
      const systemExists = await this.fileExists(systemPath);
      
      if (!systemExists) {
        systemStatus.errors.push('System file not found');
        this.statusData.systems[systemName] = systemStatus;
        return;
      }
      
      // Check system state file
      const statePath = path.join(__dirname, `${systemName}-state.json`);
      const stateExists = await this.fileExists(statePath);
      
      if (stateExists) {
        try {
          const stateData = await fs.readFile(statePath, 'utf8');
          const state = JSON.parse(stateData);
          
          systemStatus.isRunning = state.isRunning || false;
          systemStatus.lastActivity = state.lastActivity || null;
          systemStatus.intelligence = state.intelligence || 0;
          systemStatus.evolutionCount = state.evolutionCount || 0;
          
          if (systemStatus.isRunning) {
            systemStatus.health = 'healthy';
            this.statusData.activeSystems++;
          } else {
            systemStatus.health = 'inactive';
            this.statusData.failedSystems++;
          }
        } catch (error) {
          systemStatus.errors.push(`Failed to read state: ${error.message}`);
          systemStatus.health = 'error';
          this.statusData.failedSystems++;
        }
      } else {
        systemStatus.errors.push('No state file found');
        systemStatus.health = 'unknown';
        this.statusData.failedSystems++;
      }
      
      // Check for specific system files
      await this.checkSystemSpecificFiles(systemName, systemStatus);
      
      // Calculate performance score
      systemStatus.performance = this.calculatePerformanceScore(systemStatus);
      
      this.statusData.systems[systemName] = systemStatus;
      
      console.log(`  ✅ ${systemName}: ${systemStatus.health} (${systemStatus.performance.toFixed(2)})`);
      
    } catch (error) {
      console.error(`  ❌ Error checking ${systemName}:`, error.message);
      
      this.statusData.systems[systemName] = {
        name: systemName,
        isRunning: false,
        health: 'error',
        lastActivity: null,
        performance: 0,
        intelligence: 0,
        evolutionCount: 0,
        errors: [error.message]
      };
      
      this.statusData.failedSystems++;
    }
  }

  async checkSystemSpecificFiles(systemName, systemStatus) {
    const specificChecks = {
      'ultimate-automation-factory-system': [
        'factories',
        'generated-scripts',
        'performance-data'
      ],
      'intelligent-automation-orchestrator': [
        'automation-systems',
        'intelligence-data',
        'performance-data'
      ],
      'continuous-automation-improvement-system': [
        'improved-scripts',
        'performance-data',
        'improvement-logs'
      ],
      'master-automation-coordinator': [
        'coordination-data',
        'performance-data',
        'intelligence-data'
      ],
      'enhanced-diversification-orchestrator': [
        'diversification-data',
        'performance-data',
        'evolution-data'
      ],
      'intelligent-agent-orchestrator': [
        'agents',
        'intelligence-data',
        'performance-data'
      ]
    };
    
    const checks = specificChecks[systemName] || [];
    
    for (const check of checks) {
      const checkPath = path.join(__dirname, check);
      const exists = await this.fileExists(checkPath);
      
      if (!exists) {
        systemStatus.errors.push(`Missing directory: ${check}`);
      }
    }
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  calculatePerformanceScore(systemStatus) {
    let score = 0;
    
    // Base score for running system
    if (systemStatus.isRunning) {
      score += 0.4;
    }
    
    // Score for health
    switch (systemStatus.health) {
      case 'healthy':
        score += 0.3;
        break;
      case 'inactive':
        score += 0.1;
        break;
      case 'error':
        score += 0.0;
        break;
      default:
        score += 0.05;
    }
    
    // Score for intelligence
    score += systemStatus.intelligence * 0.2;
    
    // Score for evolution
    score += Math.min(systemStatus.evolutionCount * 0.01, 0.1);
    
    // Deduct for errors
    score -= systemStatus.errors.length * 0.05;
    
    return Math.max(0, Math.min(1, score));
  }

  calculateOverallHealth() {
    const activePercentage = this.statusData.activeSystems / this.statusData.totalSystems;
    
    if (activePercentage >= 0.8) {
      this.statusData.overallHealth = 'excellent';
    } else if (activePercentage >= 0.6) {
      this.statusData.overallHealth = 'good';
    } else if (activePercentage >= 0.4) {
      this.statusData.overallHealth = 'fair';
    } else if (activePercentage >= 0.2) {
      this.statusData.overallHealth = 'poor';
    } else {
      this.statusData.overallHealth = 'critical';
    }
  }

  async displayStatus() {
    console.log('\n📊 AUTOMATION SYSTEM STATUS REPORT');
    console.log('=====================================\n');
    
    console.log(`Overall Health: ${this.statusData.overallHealth.toUpperCase()}`);
    console.log(`Total Systems: ${this.statusData.totalSystems}`);
    console.log(`Active Systems: ${this.statusData.activeSystems}`);
    console.log(`Failed Systems: ${this.statusData.failedSystems}`);
    console.log(`Success Rate: ${((this.statusData.activeSystems / this.statusData.totalSystems) * 100).toFixed(1)}%`);
    console.log(`Timestamp: ${this.statusData.timestamp}\n`);
    
    console.log('📋 SYSTEM DETAILS:');
    console.log('==================');
    
    for (const [systemName, status] of Object.entries(this.statusData.systems)) {
      const statusIcon = status.isRunning ? '✅' : '❌';
      const healthIcon = this.getHealthIcon(status.health);
      
      console.log(`${statusIcon} ${systemName}`);
      console.log(`   Health: ${healthIcon} ${status.health}`);
      console.log(`   Performance: ${(status.performance * 100).toFixed(1)}%`);
      console.log(`   Intelligence: ${(status.intelligence * 100).toFixed(1)}%`);
      console.log(`   Evolution Count: ${status.evolutionCount}`);
      
      if (status.lastActivity) {
        console.log(`   Last Activity: ${status.lastActivity}`);
      }
      
      if (status.errors.length > 0) {
        console.log(`   Errors: ${status.errors.length}`);
        for (const error of status.errors) {
          console.log(`     - ${error}`);
        }
      }
      
      console.log('');
    }
    
    // Display recommendations
    await this.displayRecommendations();
  }

  getHealthIcon(health) {
    switch (health) {
      case 'healthy':
        return '🟢';
      case 'inactive':
        return '🟡';
      case 'error':
        return '🔴';
      default:
        return '⚪';
    }
  }

  async displayRecommendations() {
    console.log('💡 RECOMMENDATIONS:');
    console.log('===================');
    
    const recommendations = [];
    
    // Check for failed systems
    if (this.statusData.failedSystems > 0) {
      recommendations.push('🔧 Restart failed automation systems');
    }
    
    // Check for systems with low performance
    const lowPerformanceSystems = Object.entries(this.statusData.systems)
      .filter(([name, status]) => status.performance < 0.5)
      .map(([name]) => name);
    
    if (lowPerformanceSystems.length > 0) {
      recommendations.push(`⚡ Optimize performance for: ${lowPerformanceSystems.join(', ')}`);
    }
    
    // Check for systems with errors
    const systemsWithErrors = Object.entries(this.statusData.systems)
      .filter(([name, status]) => status.errors.length > 0)
      .map(([name]) => name);
    
    if (systemsWithErrors.length > 0) {
      recommendations.push(`🚨 Fix errors in: ${systemsWithErrors.join(', ')}`);
    }
    
    // Check for systems with low intelligence
    const lowIntelligenceSystems = Object.entries(this.statusData.systems)
      .filter(([name, status]) => status.intelligence < 0.5)
      .map(([name]) => name);
    
    if (lowIntelligenceSystems.length > 0) {
      recommendations.push(`🧠 Enhance intelligence for: ${lowIntelligenceSystems.join(', ')}`);
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All systems are running optimally');
    }
    
    for (const recommendation of recommendations) {
      console.log(`   ${recommendation}`);
    }
    
    console.log('');
  }

  async saveStatus() {
    try {
      const statusPath = path.join(__dirname, 'automation-status.json');
      await fs.writeFile(statusPath, JSON.stringify(this.statusData, null, 2));
      console.log('💾 Status saved to automation-status.json');
    } catch (error) {
      console.error('❌ Failed to save status:', error.message);
    }
  }

  async generateReport() {
    const report = {
      summary: {
        overallHealth: this.statusData.overallHealth,
        totalSystems: this.statusData.totalSystems,
        activeSystems: this.statusData.activeSystems,
        failedSystems: this.statusData.failedSystems,
        successRate: (this.statusData.activeSystems / this.statusData.totalSystems) * 100
      },
      systems: this.statusData.systems,
      recommendations: this.generateRecommendations(),
      timestamp: this.statusData.timestamp
    };
    
    const reportPath = path.join(__dirname, 'automation-status-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.statusData.failedSystems > 0) {
      recommendations.push({
        type: 'restart',
        priority: 'high',
        description: 'Restart failed automation systems',
        systems: Object.entries(this.statusData.systems)
          .filter(([name, status]) => !status.isRunning)
          .map(([name]) => name)
      });
    }
    
    const lowPerformanceSystems = Object.entries(this.statusData.systems)
      .filter(([name, status]) => status.performance < 0.5)
      .map(([name]) => name);
    
    if (lowPerformanceSystems.length > 0) {
      recommendations.push({
        type: 'optimization',
        priority: 'medium',
        description: 'Optimize system performance',
        systems: lowPerformanceSystems
      });
    }
    
    const systemsWithErrors = Object.entries(this.statusData.systems)
      .filter(([name, status]) => status.errors.length > 0)
      .map(([name]) => name);
    
    if (systemsWithErrors.length > 0) {
      recommendations.push({
        type: 'error-fixing',
        priority: 'high',
        description: 'Fix system errors',
        systems: systemsWithErrors
      });
    }
    
    return recommendations;
  }
}

// Main execution
async function main() {
  const checker = new AutomationStatusChecker();
  await checker.checkAllSystems();
  
  // Generate detailed report
  await checker.generateReport();
  
  console.log('\n🎯 Automation status check completed!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutomationStatusChecker;



