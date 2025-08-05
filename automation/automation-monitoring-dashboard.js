#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AutomationMonitoringDashboard {
  constructor() {
    this.dashboardId = `monitoring-dashboard-${Date.now()}`;
    this.automationSystems = new Map();
    this.metrics = {
      totalSystems: 0,
      activeSystems: 0,
      overallHealth: 0.0,
      totalContentGenerated: 0,
      totalFeaturesCreated: 0,
      totalDiversificationScore: 0.0
    };
    
    this.initializeDashboard();
    this.startMonitoring();
  }

  initializeDashboard() {
    console.log('📊 Initializing Automation Monitoring Dashboard...');
    
    this.dashboardPath = path.join(__dirname, 'monitoring-dashboard');
    this.reportsPath = path.join(__dirname, 'monitoring-reports');
    this.alertsPath = path.join(__dirname, 'monitoring-alerts');
    
    [this.dashboardPath, this.reportsPath, this.alertsPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.loadAutomationSystems();
  }

  loadAutomationSystems() {
    console.log('🔍 Loading automation systems...');
    
    // Enhanced Intelligent Automation System
    this.automationSystems.set('enhanced-intelligent', {
      name: 'Enhanced Intelligent Automation System',
      type: 'AI-Powered',
      status: 'unknown',
      health: 0.0,
      metrics: {
        contentGenerated: 0,
        learningCycles: 0,
        evolutionSteps: 0,
        performanceScore: 0.0
      },
      lastUpdate: null
    });

    // AI-Powered Diversification Engine
    this.automationSystems.set('ai-diversification', {
      name: 'AI-Powered Diversification Engine',
      type: 'Diversification',
      status: 'unknown',
      health: 0.0,
      metrics: {
        contentDiversified: 0,
        featuresCreated: 0,
        marketAnalysis: 0,
        diversificationScore: 0.0
      },
      lastUpdate: null
    });

    // Original Intelligent Automation System
    this.automationSystems.set('intelligent-automation', {
      name: 'Intelligent Automation System',
      type: 'Core',
      status: 'unknown',
      health: 0.0,
      metrics: {
        contentGenerated: 0,
        repetitiveUpdatesBlocked: 0,
        evolutionCycles: 0,
        diversificationScore: 0.0
      },
      lastUpdate: null
    });

    this.metrics.totalSystems = this.automationSystems.size;
  }

  startMonitoring() {
    console.log('🚀 Starting automation monitoring...');
    
    // Monitor system health every 30 seconds
    setInterval(() => {
      this.monitorSystemHealth();
    }, 30000);
    
    // Generate comprehensive reports every 5 minutes
    setInterval(() => {
      this.generateComprehensiveReport();
    }, 300000);
    
    // Check for alerts every minute
    setInterval(() => {
      this.checkForAlerts();
    }, 60000);
    
    // Update dashboard metrics every 2 minutes
    setInterval(() => {
      this.updateDashboardMetrics();
    }, 120000);
    
    console.log('✅ Automation monitoring dashboard started successfully!');
  }

  monitorSystemHealth() {
    console.log('🔍 Monitoring system health...');
    
    this.automationSystems.forEach((system, key) => {
      this.checkSystemStatus(key, system);
    });
    
    this.calculateOverallHealth();
    this.saveHealthMetrics();
  }

  checkSystemStatus(systemKey, system) {
    try {
      // Check if system is running by looking for process
      const isRunning = this.checkSystemProcess(systemKey);
      
      if (isRunning) {
        system.status = 'running';
        system.health = this.calculateSystemHealth(systemKey);
        system.lastUpdate = new Date().toISOString();
        
        // Update metrics based on system type
        this.updateSystemMetrics(systemKey, system);
        
        console.log(`✅ ${system.name} is running (Health: ${(system.health * 100).toFixed(1)}%)`);
      } else {
        system.status = 'stopped';
        system.health = 0.0;
        console.log(`⚠️ ${system.name} is not running`);
      }
    } catch (error) {
      console.error(`❌ Error checking ${system.name}:`, error);
      system.status = 'error';
      system.health = 0.0;
    }
  }

  checkSystemProcess(systemKey) {
    // Check for system-specific indicators
    switch (systemKey) {
      case 'enhanced-intelligent':
        return this.checkEnhancedSystem();
      case 'ai-diversification':
        return this.checkAIDiversificationSystem();
      case 'intelligent-automation':
        return this.checkIntelligentAutomationSystem();
      default:
        return false;
    }
  }

  checkEnhancedSystem() {
    // Check for enhanced system indicators
    const enhancedPath = path.join(__dirname, 'enhanced-system');
    const contentPath = path.join(__dirname, 'content-generator');
    
    return fs.existsSync(enhancedPath) && fs.existsSync(contentPath);
  }

  checkAIDiversificationSystem() {
    // Check for AI diversification system indicators
    const aiPath = path.join(__dirname, 'ai-diversification-engine');
    const diversifiedPath = path.join(__dirname, 'diversified-content');
    
    return fs.existsSync(aiPath) && fs.existsSync(diversifiedPath);
  }

  checkIntelligentAutomationSystem() {
    // Check for intelligent automation system indicators
    const intelligentPath = path.join(__dirname, 'intelligent-launcher');
    const antiRepetitionPath = path.join(__dirname, 'anti-repetition-engine');
    
    return fs.existsSync(intelligentPath) && fs.existsSync(antiRepetitionPath);
  }

  calculateSystemHealth(systemKey) {
    // Calculate health based on system performance and metrics
    const system = this.automationSystems.get(systemKey);
    
    if (!system || system.status !== 'running') {
      return 0.0;
    }
    
    // Base health score
    let healthScore = 0.8;
    
    // Adjust based on metrics
    if (system.metrics.contentGenerated > 0) {
      healthScore += 0.1;
    }
    
    if (system.metrics.learningCycles > 0 || system.metrics.evolutionSteps > 0) {
      healthScore += 0.1;
    }
    
    return Math.min(healthScore, 1.0);
  }

  updateSystemMetrics(systemKey, system) {
    // Update metrics based on system type
    switch (systemKey) {
      case 'enhanced-intelligent':
        this.updateEnhancedSystemMetrics(system);
        break;
      case 'ai-diversification':
        this.updateAIDiversificationMetrics(system);
        break;
      case 'intelligent-automation':
        this.updateIntelligentAutomationMetrics(system);
        break;
    }
  }

  updateEnhancedSystemMetrics(system) {
    const enhancedPath = path.join(__dirname, 'enhanced-system');
    const contentPath = path.join(__dirname, 'content-generator');
    
    if (fs.existsSync(contentPath)) {
      const contentFiles = fs.readdirSync(contentPath).filter(file => file.endsWith('.json'));
      system.metrics.contentGenerated = contentFiles.length;
    }
    
    if (fs.existsSync(enhancedPath)) {
      const reportFiles = fs.readdirSync(enhancedPath).filter(file => file.endsWith('.json'));
      system.metrics.learningCycles = reportFiles.length;
    }
  }

  updateAIDiversificationMetrics(system) {
    const contentPath = path.join(__dirname, 'diversified-content');
    const featuresPath = path.join(__dirname, 'diversified-features');
    
    if (fs.existsSync(contentPath)) {
      const contentFiles = fs.readdirSync(contentPath).filter(file => file.endsWith('.json'));
      system.metrics.contentDiversified = contentFiles.length;
    }
    
    if (fs.existsSync(featuresPath)) {
      const featureFiles = fs.readdirSync(featuresPath).filter(file => file.endsWith('.json'));
      system.metrics.featuresCreated = featureFiles.length;
    }
  }

  updateIntelligentAutomationMetrics(system) {
    const intelligentPath = path.join(__dirname, 'intelligent-launcher');
    
    if (fs.existsSync(intelligentPath)) {
      const healthFiles = fs.readdirSync(intelligentPath).filter(file => file.includes('health'));
      system.metrics.evolutionCycles = healthFiles.length;
    }
  }

  calculateOverallHealth() {
    const activeSystems = Array.from(this.automationSystems.values())
      .filter(system => system.status === 'running');
    
    this.metrics.activeSystems = activeSystems.length;
    
    if (activeSystems.length > 0) {
      const totalHealth = activeSystems.reduce((sum, system) => sum + system.health, 0);
      this.metrics.overallHealth = totalHealth / activeSystems.length;
    } else {
      this.metrics.overallHealth = 0.0;
    }
    
    // Calculate total metrics
    this.metrics.totalContentGenerated = Array.from(this.automationSystems.values())
      .reduce((sum, system) => sum + (system.metrics.contentGenerated || 0), 0);
    
    this.metrics.totalFeaturesCreated = Array.from(this.automationSystems.values())
      .reduce((sum, system) => sum + (system.metrics.featuresCreated || 0), 0);
    
    this.metrics.totalDiversificationScore = Array.from(this.automationSystems.values())
      .reduce((sum, system) => sum + (system.metrics.diversificationScore || 0), 0);
  }

  saveHealthMetrics() {
    const healthMetrics = {
      timestamp: new Date().toISOString(),
      dashboardId: this.dashboardId,
      overallMetrics: this.metrics,
      systems: Array.from(this.automationSystems.values())
    };
    
    const healthPath = path.join(this.dashboardPath, `health-${Date.now()}.json`);
    fs.writeFileSync(healthPath, JSON.stringify(healthMetrics, null, 2));
    
    console.log('📊 Health metrics saved');
  }

  generateComprehensiveReport() {
    console.log('📋 Generating comprehensive automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      dashboardId: this.dashboardId,
      summary: {
        totalSystems: this.metrics.totalSystems,
        activeSystems: this.metrics.activeSystems,
        overallHealth: this.metrics.overallHealth,
        totalContentGenerated: this.metrics.totalContentGenerated,
        totalFeaturesCreated: this.metrics.totalFeaturesCreated,
        totalDiversificationScore: this.metrics.totalDiversificationScore
      },
      systems: Array.from(this.automationSystems.values()),
      recommendations: this.generateRecommendations(),
      alerts: this.getActiveAlerts()
    };
    
    const reportPath = path.join(this.reportsPath, `comprehensive-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📋 Comprehensive report generated');
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check system health
    if (this.metrics.overallHealth < 0.7) {
      recommendations.push('Improve overall system health by addressing performance issues');
    }
    
    // Check content generation
    if (this.metrics.totalContentGenerated < 10) {
      recommendations.push('Increase content generation to improve diversification');
    }
    
    // Check feature creation
    if (this.metrics.totalFeaturesCreated < 5) {
      recommendations.push('Enhance feature creation capabilities');
    }
    
    // Check system diversity
    if (this.metrics.activeSystems < this.metrics.totalSystems) {
      recommendations.push('Activate all automation systems for maximum effectiveness');
    }
    
    return recommendations;
  }

  checkForAlerts() {
    console.log('🚨 Checking for alerts...');
    
    const alerts = [];
    
    // Check for system failures
    this.automationSystems.forEach((system, key) => {
      if (system.status === 'stopped' || system.status === 'error') {
        alerts.push({
          type: 'system-failure',
          system: system.name,
          message: `${system.name} is not running properly`,
          severity: 'high',
          timestamp: new Date().toISOString()
        });
      }
      
      if (system.health < 0.5) {
        alerts.push({
          type: 'system-degradation',
          system: system.name,
          message: `${system.name} health is below 50%`,
          severity: 'medium',
          timestamp: new Date().toISOString()
        });
      }
    });
    
    // Check for low performance
    if (this.metrics.overallHealth < 0.6) {
      alerts.push({
        type: 'performance-alert',
        message: 'Overall automation performance is below optimal levels',
        severity: 'medium',
        timestamp: new Date().toISOString()
      });
    }
    
    // Save alerts
    if (alerts.length > 0) {
      const alertsPath = path.join(this.alertsPath, `alerts-${Date.now()}.json`);
      fs.writeFileSync(alertsPath, JSON.stringify(alerts, null, 2));
      
      console.log(`🚨 ${alerts.length} alerts detected`);
    }
  }

  getActiveAlerts() {
    const alerts = [];
    
    // Check for recent alert files
    if (fs.existsSync(this.alertsPath)) {
      const alertFiles = fs.readdirSync(this.alertsPath).filter(file => file.endsWith('.json'));
      
      alertFiles.forEach(file => {
        try {
          const alertData = JSON.parse(fs.readFileSync(path.join(this.alertsPath, file), 'utf8'));
          alerts.push(...alertData);
        } catch (error) {
          console.error(`Error reading alert file ${file}:`, error);
        }
      });
    }
    
    return alerts;
  }

  updateDashboardMetrics() {
    console.log('📊 Updating dashboard metrics...');
    
    // Update real-time metrics
    this.calculateOverallHealth();
    
    // Generate dashboard status
    const dashboardStatus = {
      timestamp: new Date().toISOString(),
      dashboardId: this.dashboardId,
      status: 'running',
      metrics: this.metrics,
      systems: Array.from(this.automationSystems.values()),
      alerts: this.getActiveAlerts().length
    };
    
    const statusPath = path.join(this.dashboardPath, 'dashboard-status.json');
    fs.writeFileSync(statusPath, JSON.stringify(dashboardStatus, null, 2));
    
    console.log('📊 Dashboard metrics updated');
  }

  getDashboardStatus() {
    return {
      dashboardId: this.dashboardId,
      status: 'running',
      metrics: this.metrics,
      systems: Array.from(this.automationSystems.values()),
      alerts: this.getActiveAlerts()
    };
  }

  displayDashboard() {
    console.log('\n📊 AUTOMATION MONITORING DASHBOARD');
    console.log('=====================================');
    console.log(`Overall Health: ${(this.metrics.overallHealth * 100).toFixed(1)}%`);
    console.log(`Active Systems: ${this.metrics.activeSystems}/${this.metrics.totalSystems}`);
    console.log(`Content Generated: ${this.metrics.totalContentGenerated}`);
    console.log(`Features Created: ${this.metrics.totalFeaturesCreated}`);
    console.log(`Diversification Score: ${this.metrics.totalDiversificationScore.toFixed(1)}`);
    console.log('');
    
    console.log('SYSTEM STATUS:');
    this.automationSystems.forEach((system, key) => {
      const status = system.status === 'running' ? '✅' : '❌';
      const health = `${(system.health * 100).toFixed(1)}%`;
      console.log(`${status} ${system.name} - ${system.status} (Health: ${health})`);
    });
    
    console.log('');
    console.log('RECENT ALERTS:');
    const alerts = this.getActiveAlerts();
    if (alerts.length > 0) {
      alerts.slice(0, 5).forEach(alert => {
        console.log(`🚨 ${alert.message}`);
      });
    } else {
      console.log('✅ No active alerts');
    }
    
    console.log('\n=====================================\n');
  }
}

// Start the monitoring dashboard
const dashboard = new AutomationMonitoringDashboard();

// Display dashboard every 2 minutes
setInterval(() => {
  dashboard.displayDashboard();
}, 120000);

// Keep the dashboard running
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Automation Monitoring Dashboard...');
  process.exit(0);
});

console.log('🚀 Automation Monitoring Dashboard initialized and running...');
console.log('📊 Dashboard will display every 2 minutes...\n');

// Display initial dashboard
setTimeout(() => {
  dashboard.displayDashboard();
}, 5000); 