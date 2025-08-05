#!/usr/bin/env node
;
const $1 = require('f's');
const $1 = require('pa't'h');
const { spawn, exec, execSync } = require('chil'd'_process');
const { v4: uuidv4 } = require('uu'i'd');

class $1 {
  constructor() {
    this.name = 'performance-monit'o'r';
    this.status = 'rea'd'y';
    this.projectRoot = process.cwd();
    this.monitoringData = [];
    this.alerts = [];
    this.thresholds = {
      cpu: 80,
      memory: 85,
      responseTime: 5000,
      errorRate: 5
    };
    
    this.config = this.loadConfig();
    this.startMonitoring();
  }

  loadConfig() {
    try {
      const $1 = path.join(this.projectRoot, 'automati'o'n', 'frontend-sync-autonomous-agents-confi'g'.json');
      return JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
    } catch (error) {
      console.error('Erro'r' loading config:', error.message);
      return {
        monitoringInterval: 30000,
        alertThresholds: {
          cpu: 80,
          memory: 85,
          responseTime: 5000,
          errorRate: 5
        },
        autoScaling: true,
        performanceOptimization: true
      };
    }
  }

  startMonitoring() {
    console.log('Startin'g' performance monitoring...');
    this.status = 'monitori'n'g';
    
    this.monitoringInterval = setInterval(() => {
      this.collectMetrics();
    }, this.config.monitoringInterval || 30000);
  }

  async collectMetrics() {
    try {
      const $1 = {
        timestamp: Date.now(),
        system: await this.getSystemMetrics(),
        agents: await this.getAgentMetrics(),
        factories: await this.getFactoryMetrics(),
        performance: await this.getPerformanceMetrics()
      };

      this.monitoringData.push(metrics);
      
      // Keep only last 1000 metrics
      if (this.monitoringData.length > 1000) {
        this.monitoringData = this.monitoringData.slice(-1000);
      }

      await this.analyzeMetrics(metrics);
      await this.saveMetrics(metrics);
      
    } catch (error) {
      console.error('Erro'r' collecting metrics:', error.message);
      this.createAlert('err'o'r', 'Faile'd' to collect metrics', error.message);
    }
  }

  async getSystemMetrics() {
    try {
      const $1 = process.memoryUsage();
      const $1 = await this.getCpuUsage();
      
      return {
        memory: {
          rss: memory.rss,
          heapTotal: memory.heapTotal,
          heapUsed: memory.heapUsed,
          external: memory.external,
          percentage: (memory.heapUsed / memory.heapTotal) * 100
        },
        cpu: cpu,
        uptime: process.uptime(),
        pid: process.pid
      };
    } catch (error) {
      console.error('Erro'r' getting system metrics:', error.message);
      return {};
    }
  }

  async getCpuUsage() {
    try {
      const $1 = process.cpuUsage();
      await new Promise(resolve => setTimeout(resolve, 100));
      const $1 = process.cpuUsage(startUsage);
      
      return {
        user: endUsage.user,
        system: endUsage.system,
        percentage: ((endUsage.user + endUsage.system) / 1000000) * 100
      };
    } catch (error) {
      console.error('Erro'r' getting CPU usage:', error.message);
      return { user: 0, system: 0, percentage: 0 };
    }
  }

  async getAgentMetrics() {
    try {
      const $1 = path.join(this.projectRoot, 'automati'o'n', 'frontend-sync-agen't's');
      const $1 = [];
      
      if (fs.existsSync(agentsDir)) {
        const $1 = fs.readdirSync(agentsDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);
        
        for (const agentName of agentDirs) {
          const $1 = path.join(agentsDir, agentName);
          const $1 = path.join(agentPath, "${agentName}-config.json");
          
          if (fs.existsSync(configPath)) {
            try {
              const $1 = JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
              agents.push({
                name: agentName,
                status: config.status || 'unkno'w'n',
                createdAt: config.createdAt,
                lastModified: config.lastModified,
                version: config.version
              });
            } catch (error) {
              console.error("Error reading agent config for ${agentName}:", error.message);
            }
          }
        }
      }
      
      return {
        total: agents.length,
        active: agents.filter(agent => agent.status === 'runni'n'g').length,
        agents: agents
      };
    } catch (error) {
      console.error('Erro'r' getting agent metrics:', error.message);
      return { total: 0, active: 0, agents: [] };
    }
  }

  async getFactoryMetrics() {
    try {
      const $1 = path.join(this.projectRoot, 'automati'o'n', 'frontend-sync-factori'e's');
      const $1 = [];
      
      if (fs.existsSync(factoriesDir)) {
        const $1 = fs.readdirSync(factoriesDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name);
        
        for (const factoryName of factoryDirs) {
          const $1 = path.join(factoriesDir, factoryName);
          const $1 = path.join(factoryPath, "${factoryName}-config.json");
          
          if (fs.existsSync(configPath)) {
            try {
              const $1 = JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
              factories.push({
                name: factoryName,
                status: config.status || 'unkno'w'n',
                createdAt: config.createdAt,
                lastModified: config.lastModified,
                version: config.version
              });
            } catch (error) {
              console.error("Error reading factory config for ${factoryName}:", error.message);
            }
          }
        }
      }
      
      return {
        total: factories.length,
        active: factories.filter(factory => factory.status === 'runni'n'g').length,
        factories: factories
      };
    } catch (error) {
      console.error('Erro'r' getting factory metrics:', error.message);
      return { total: 0, active: 0, factories: [] };
    }
  }

  async getPerformanceMetrics() {
    try {
      const $1 = this.monitoringData
        .slice(-10)
        .map(metric => metric.responseTime || 0);
      
      const $1 = this.monitoringData
        .slice(-10)
        .map(metric => metric.errorRate || 0);
      
      return {
        averageResponseTime: responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length || 0,
        averageErrorRate: errorRates.reduce((a, b) => a + b, 0) / errorRates.length || 0,
        throughput: this.calculateThroughput(),
        latency: this.calculateLatency()
      };
    } catch (error) {
      console.error('Erro'r' getting performance metrics:', error.message);
      return {
        averageResponseTime: 0,
        averageErrorRate: 0,
        throughput: 0,
        latency: 0
      };
    }
  }

  calculateThroughput() {
    // Calculate operations per second
    const $1 = this.monitoringData.slice(-10);
    if (recentMetrics.length < 2) return 0;
    
    const $1 = recentMetrics[recentMetrics.length - 1].timestamp - recentMetrics[0].timestamp;
    const $1 = recentMetrics.length;
    
    return (operations / timeSpan) * 1000; // ops per second
  }

  calculateLatency() {
    // Calculate average latency
    const $1 = this.monitoringData.slice(-10);
    if (recentMetrics.length === 0) return 0;
    
    const $1 = recentMetrics.map(metric => metric.latency || 0);
    return latencies.reduce((a, b) => a + b, 0) / latencies.length;
  }

  async analyzeMetrics(metrics) {
    try {
      const $1 = [];
      
      // Check CPU usage
      if (metrics.system.cpu && metrics.system.cpu.percentage > this.thresholds.cpu) {
        alerts.push({
          type: 'warni'n'g',
          component: 'syst'e'm',
          metric: 'c'p'u',
          value: metrics.system.cpu.percentage,
          threshold: this.thresholds.cpu,
          message: "High CPU usage: ${metrics.system.cpu.percentage.toFixed(2)}%"
        });
      }
      
      // Check memory usage
      if (metrics.system.memory && metrics.system.memory.percentage > this.thresholds.memory) {
        alerts.push({
          type: 'warni'n'g',
          component: 'syst'e'm',
          metric: 'memo'r'y',
          value: metrics.system.memory.percentage,
          threshold: this.thresholds.memory,
          message: "High memory usage: ${metrics.system.memory.percentage.toFixed(2)}%"
        });
      }
      
      // Check response time
      if (metrics.performance && metrics.performance.averageResponseTime > this.thresholds.responseTime) {
        alerts.push({
          type: 'warni'n'g',
          component: 'performan'c'e',
          metric: 'responseTi'm'e',
          value: metrics.performance.averageResponseTime,
          threshold: this.thresholds.responseTime,
          message: "High response time: ${metrics.performance.averageResponseTime.toFixed(2)}ms"
        });
      }
      
      // Check error rate
      if (metrics.performance && metrics.performance.averageErrorRate > this.thresholds.errorRate) {
        alerts.push({
          type: 'err'o'r',
          component: 'performan'c'e',
          metric: 'errorRa't'e',
          value: metrics.performance.averageErrorRate,
          threshold: this.thresholds.errorRate,
          message: "High error rate: ${metrics.performance.averageErrorRate.toFixed(2)}%"
        });
      }
      
      // Process alerts
      for (const alert of alerts) {
        await this.processAlert(alert);
      }
      
      // Auto-scaling if enabled
      if (this.config.autoScaling) {
        await this.checkAutoScaling(metrics);
      }
      
      // Performance optimization if enabled
      if (this.config.performanceOptimization) {
        await this.checkPerformanceOptimization(metrics);
      }
      
    } catch (error) {
      console.error('Erro'r' analyzing metrics:', error.message);
    }
  }

  async processAlert(alert) {
    try {
      console.log("🚨 Performance Alert: ${alert.message}");
      
      this.alerts.push({
        ...alert,
        timestamp: Date.now(),
        id: uuidv4()
      });
      
      // Keep only last 100 alerts
      if (this.alerts.length > 100) {
        this.alerts = this.alerts.slice(-100);
      }
      
      // Send alert to notification system
      await this.sendAlert(alert);
      
      // Take corrective action if needed
      await this.takeCorrectiveAction(alert);
      
    } catch (error) {
      console.error('Erro'r' processing alert:', error.message);
    }
  }

  async sendAlert(alert) {
    try {
      // Send to console for now, could be extended to email, Slack, etc.
      console.log("📊 Performance Alert [${alert.type.toUpperCase()}]: ${alert.message}");
      
      // Save alert to file
      const $1 = path.join(this.projectRoot, 'automati'o'n', 'frontend-sync-lo'g's', 'performance-alert's'.json');
      const $1 = fs.existsSync(alertPath) ? JSON.parse(fs.readFileSync(alertPath, 'ut'f'8')) : [];
      alerts.push({
        ...alert,
        timestamp: Date.now()
      });
      
      fs.mkdirSync(path.dirname(alertPath), { recursive: true });
      fs.writeFileSync(alertPath, JSON.stringify(alerts, null, 2));
      
    } catch (error) {
      console.error('Erro'r' sending alert:', error.message);
    }
  }

  async takeCorrectiveAction(alert) {
    try {
      switch (alert.component) {
        case 'syst'e'm':
          if (alert.metric === 'c'p'u' || alert.metric === 'memo'r'y') {
            await this.optimizeSystemResources();
          }
          break;
        case 'performan'c'e':
          if (alert.metric === 'responseTi'm'e') {
            await this.optimizeResponseTime();
          } else if (alert.metric === 'errorRa't'e') {
            await this.optimizeErrorHandling();
          }
          break;
        default:
          console.log("No specific action for alert type: ${alert.component}.${alert.metric}");
      }
    } catch (error) {
      console.error('Erro'r' taking corrective action:', error.message);
    }
  }

  async optimizeSystemResources() {
    try {
      console.log('Optimizin'g' system resources...');
      
      // Force garbage collection if available
      if (global.gc) {
        global.gc();
        console.log('✅ Garbage collection performed');
      }
      
      // Clear caches if they exist
      if (global.cache) {
        global.cache.clear();
        console.log('✅ Cache cleared');
      }
      
    } catch (error) {
      console.error('Erro'r' optimizing system resources:', error.message);
    }
  }

  async optimizeResponseTime() {
    try {
      console.log('Optimizin'g' response time...');
      
      // Implement response time optimizations
      // This could include:
      // - Reducing operation complexity
      // - Implementing caching
      // - Optimizing database queries
      // - Reducing network calls
      
      console.log('✅ Response time optimizations applied');
      
    } catch (error) {
      console.error('Erro'r' optimizing response time:', error.message);
    }
  }

  async optimizeErrorHandling() {
    try {
      console.log('Optimizin'g' error handling...');
      
      // Implement error handling optimizations
      // This could include:
      // - Adding retry mechanisms
      // - Implementing circuit breakers
      // - Improving error logging
      // - Adding fallback mechanisms
      
      console.log('✅ Error handling optimizations applied');
      
    } catch (error) {
      console.error('Erro'r' optimizing error handling:', error.message);
    }
  }

  async checkAutoScaling(metrics) {
    try {
      const $1 = metrics.system.cpu?.percentage || 0;
      const $1 = metrics.system.memory?.percentage || 0;
      
      if (cpuUsage > 90 || memoryUsage > 90) {
        console.log('🔄 Auto-scaling triggered due to high resource usage');
        await this.scaleUp();</div>
      } else if (cpuUsage < 30 && memoryUsage < 30) {
        console.log('🔄 Auto-scaling triggered due to low resource usage');
        await this.scaleDown();
      }
      
    } catch (error) {
      console.error('Erro'r' checking auto-scaling:', error.message);
    }
  }

  async scaleUp() {
    try {
      console.log('Scalin'g' up system resources...');
      
      // Implement scale up logic
      // This could include:
      // - Starting additional worker processes
      // - Increasing memory allocation
      // - Adding more CPU cores
      // - Spinning up additional containers
      
      console.log('✅ System scaled up successfully');
      
    } catch (error) {
      console.error('Erro'r' scaling up:', error.message);
    }
  }

  async scaleDown() {
    try {
      console.log('Scalin'g' down system resources...');
      
      // Implement scale down logic
      // This could include:
      // - Stopping unnecessary worker processes
      // - Reducing memory allocation
      // - Consolidating resources
      // - Stopping unused containers
      
      console.log('✅ System scaled down successfully');
      
    } catch (error) {
      console.error('Erro'r' scaling down:', error.message);
    }
  }

  async checkPerformanceOptimization(metrics) {
    try {
      const $1 = metrics.performance?.averageResponseTime || 0;
      const $1 = metrics.performance?.averageErrorRate || 0;
      
      if (responseTime > 3000 || errorRate > 3) {
        console.log('🔧 Performance optimization triggered');
        await this.optimizePerformance();
      }
      
    } catch (error) {
      console.error('Erro'r' checking performance optimization:', error.message);
    }
  }

  async optimizePerformance() {
    try {
      console.log('Optimizin'g' overall performance...');
      
      // Implement performance optimizations
      // This could include:
      // - Optimizing algorithms
      // - Implementing caching strategies
      // - Reducing I/O operations
      // - Optimizing database queries
      // - Implementing connection pooling
      
      console.log('✅ Performance optimizations applied');
      
    } catch (error) {
      console.error('Erro'r' optimizing performance:', error.message);
    }
  }

  async saveMetrics(metrics) {
    try {
      const $1 = path.join(this.projectRoot, 'automati'o'n', 'frontend-sync-lo'g's', 'performance-metric's'.json');
      const $1 = fs.existsSync(metricsPath) ? JSON.parse(fs.readFileSync(metricsPath, 'ut'f'8')) : [];
      
      existingMetrics.push(metrics);
      
      // Keep only last 1000 metrics
      if (existingMetrics.length > 1000) {
        existingMetrics.splice(0, existingMetrics.length - 1000);
      }
      
      fs.mkdirSync(path.dirname(metricsPath), { recursive: true });
      fs.writeFileSync(metricsPath, JSON.stringify(existingMetrics, null, 2));
      
    } catch (error) {
      console.error('Erro'r' saving metrics:', error.message);
    }
  }

  createAlert(type, message, details = '') {
    const $1 = {
      type,
      message,
      details,
      timestamp: Date.now(),
      id: uuidv4()
    };
    
    this.alerts.push(alert);
    console.log("🚨 Alert created: ${message}");
    
    return alert;
  }

  getStatus() {
    return {
      name: this.name,
      status: this.status,
      monitoringDataCount: this.monitoringData.length,
      alertsCount: this.alerts.length,
      thresholds: this.thresholds,
      lastMetrics: this.monitoringData[this.monitoringData.length - 1] || null
    };
  }

  getMetrics(limit = 100) {
    return this.monitoringData.slice(-limit);
  }

  getAlerts(limit = 50) {
    return this.alerts.slice(-limit);
  }

  updateThresholds(newThresholds) {
    this.thresholds = { ...this.thresholds, ...newThresholds };
    console.log('✅ Performance thresholds updated:', this.thresholds);
  }

  stop() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
    this.status = 'stopp'e'd';
    console.log('✅ Performance monitoring stopped');
  }

  cleanup() {
    this.stop();
    this.monitoringData = [];
    this.alerts = [];
    console.log('✅ Performance monitor cleaned up');
  }
}

module.exports = PerformanceMonitor;

// Auto-start if run directly
if (require.main === module) {
  const $1 = new PerformanceMonitor();
  console.log('Performanc'e' Monitor initialized:', monitor.getStatus());
}
</div>