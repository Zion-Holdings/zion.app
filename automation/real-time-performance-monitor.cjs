#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const { exec } = require("child_process");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "real-time-performance-monitor.runtime.log");
const DATA_DIR = path.join(__dirname, "data");
const METRICS_FILE = path.join(DATA_DIR, "performance-metrics.json");
const ALERTS_FILE = path.join(DATA_DIR, "performance-alerts.json");

class RealTimePerformanceMonitor {
  constructor() {
    this.ensureDirectories();
    this.loadMetrics();
    this.loadAlerts();
    this.metrics = [];
    this.alerts = [];
    this.thresholds = this.getDefaultThresholds();
    this.monitoring = false;
    this.alertHandlers = new Map();
  }

  ensureDirectories() {
    try {
      fs.mkdirSync(LOG_DIR, { recursive: true });
      fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (error) {
      console.error('Failed to create directories:', error.message);
    }
  }

  loadMetrics() {
    try {
      if (fs.existsSync(METRICS_FILE)) {
        this.metrics = JSON.parse(fs.readFileSync(METRICS_FILE, 'utf8'));
      } else {
        this.metrics = [];
      }
    } catch (error) {
      this.metrics = [];
    }
  }

  loadAlerts() {
    try {
      if (fs.existsSync(ALERTS_FILE)) {
        this.alerts = JSON.parse(fs.readFileSync(ALERTS_FILE, 'utf8'));
      } else {
        this.alerts = [];
      }
    } catch (error) {
      this.alerts = [];
    }
  }

  getDefaultThresholds() {
    return {
      cpu: {
        warning: 70,
        critical: 90
      },
      memory: {
        warning: 80,
        critical: 95
      },
      disk: {
        warning: 85,
        critical: 95
      },
      network: {
        warning: 80,
        critical: 95
      }
    };
  }

  log(message) {
    const line = `[${new Date().toISOString()}] ${message}\n`;
    try {
      fs.appendFileSync(LOG_FILE, line, "utf8");
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
    process.stdout.write(line);
  }

  formatBytes(bytes) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }

  async getSystemMetrics() {
    const timestamp = new Date().toISOString();
    
    // CPU metrics
    const cpuUsage = process.cpuUsage();
    const cpuLoad = os.loadavg();
    
    // Memory metrics
    const memUsage = process.memoryUsage();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memoryUsagePercent = (usedMem / totalMem) * 100;
    
    // Disk metrics (simplified - in production you might want to use a library like 'diskusage')
    const diskUsage = await this.getDiskUsage();
    
    // Network metrics (simplified)
    const networkMetrics = await this.getNetworkMetrics();
    
    // Process metrics
    const processMetrics = {
      pid: process.pid,
      uptime: process.uptime(),
      memory: memUsage,
      cpu: cpuUsage
    };
    
    const metrics = {
      timestamp,
      system: {
        platform: os.platform(),
        arch: os.arch(),
        nodeVersion: process.version,
        uptime: os.uptime(),
        hostname: os.hostname()
      },
      cpu: {
        loadAverage: cpuLoad,
        usage: {
          user: cpuUsage.user,
          system: cpuUsage.system,
          total: cpuUsage.user + cpuUsage.system
        },
        cores: os.cpus().length
      },
      memory: {
        total: totalMem,
        free: freeMem,
        used: usedMem,
        usagePercent: memoryUsagePercent,
        process: memUsage
      },
      disk: diskUsage,
      network: networkMetrics,
      process: processMetrics
    };
    
    return metrics;
  }

  async getDiskUsage() {
    return new Promise((resolve) => {
      // This is a simplified disk check - in production you might want to use 'diskusage' library
      try {
        const cwd = process.cwd();
        const stats = fs.statSync(cwd);
        
        resolve({
          currentDirectory: cwd,
          available: 'unknown', // Would need diskusage library for accurate info
          used: 'unknown',
          total: 'unknown',
          usagePercent: 0
        });
      } catch (error) {
        resolve({
          currentDirectory: process.cwd(),
          available: 'unknown',
          used: 'unknown',
          total: 'unknown',
          usagePercent: 0,
          error: error.message
        });
      }
    });
  }

  async getNetworkMetrics() {
    return new Promise((resolve) => {
      // This is a simplified network check - in production you might want to use 'network-usage' library
      try {
        const interfaces = os.networkInterfaces();
        const activeInterfaces = {};
        
        Object.keys(interfaces).forEach(name => {
          interfaces[name].forEach(iface => {
            if (!iface.internal) {
              activeInterfaces[name] = {
                address: iface.address,
                family: iface.family,
                mac: iface.mac
              };
            }
          });
        });
        
        resolve({
          interfaces: activeInterfaces,
          activeConnections: 'unknown', // Would need additional libraries for accurate info
          bandwidth: 'unknown'
        });
      } catch (error) {
        resolve({
          interfaces: {},
          activeConnections: 'unknown',
          bandwidth: 'unknown',
          error: error.message
        });
      }
    });
  }

  checkThresholds(metrics) {
    const alerts = [];
    
    // CPU checks
    if (metrics.cpu.loadAverage[0] > this.thresholds.cpu.critical) {
      alerts.push({
        level: 'critical',
        category: 'cpu',
        message: `CPU load critical: ${metrics.cpu.loadAverage[0].toFixed(2)}`,
        value: metrics.cpu.loadAverage[0],
        threshold: this.thresholds.cpu.critical,
        timestamp: metrics.timestamp
      });
    } else if (metrics.cpu.loadAverage[0] > this.thresholds.cpu.warning) {
      alerts.push({
        level: 'warning',
        category: 'cpu',
        message: `CPU load warning: ${metrics.cpu.loadAverage[0].toFixed(2)}`,
        value: metrics.cpu.loadAverage[0],
        threshold: this.thresholds.cpu.warning,
        timestamp: metrics.timestamp
      });
    }
    
    // Memory checks
    if (metrics.memory.usagePercent > this.thresholds.memory.critical) {
      alerts.push({
        level: 'critical',
        category: 'memory',
        message: `Memory usage critical: ${metrics.memory.usagePercent.toFixed(2)}%`,
        value: metrics.memory.usagePercent,
        threshold: this.thresholds.memory.critical,
        timestamp: metrics.timestamp
      });
    } else if (metrics.memory.usagePercent > this.thresholds.memory.warning) {
      alerts.push({
        level: 'warning',
        category: 'memory',
        message: `Memory usage warning: ${metrics.memory.usagePercent.toFixed(2)}%`,
        value: metrics.memory.usagePercent,
        threshold: this.thresholds.memory.warning,
        timestamp: metrics.timestamp
      });
    }
    
    // Process memory checks
    const processMemoryPercent = (metrics.memory.process.rss / metrics.memory.total) * 100;
    if (processMemoryPercent > 50) {
      alerts.push({
        level: 'warning',
        category: 'process',
        message: `Process memory usage high: ${processMemoryPercent.toFixed(2)}%`,
        value: processMemoryPercent,
        threshold: 50,
        timestamp: metrics.timestamp
      });
    }
    
    return alerts;
  }

  addAlert(alert) {
    this.alerts.push(alert);
    
    // Keep only last 100 alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-100);
    }
    
    // Save alerts
    try {
      fs.writeFileSync(ALERTS_FILE, JSON.stringify(this.alerts, null, 2));
    } catch (error) {
      this.log(`Failed to save alerts: ${error.message}`);
    }
    
    // Trigger alert handlers
    this.triggerAlertHandlers(alert);
    
    this.log(`ALERT [${alert.level.toUpperCase()}] ${alert.message}`);
  }

  addAlertHandler(category, handler) {
    if (!this.alertHandlers.has(category)) {
      this.alertHandlers.set(category, []);
    }
    this.alertHandlers.get(category).push(handler);
  }

  triggerAlertHandlers(alert) {
    const handlers = this.alertHandlers.get(alert.category) || [];
    handlers.forEach(handler => {
      try {
        handler(alert);
      } catch (error) {
        this.log(`Error in alert handler: ${error.message}`);
      }
    });
  }

  storeMetrics(metrics) {
    this.metrics.push(metrics);
    
    // Keep only last 1000 metrics
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
    
    // Save metrics
    try {
      fs.writeFileSync(METRICS_FILE, JSON.stringify(this.metrics, null, 2));
    } catch (error) {
      this.log(`Failed to save metrics: ${error.message}`);
    }
  }

  getMetricsSummary() {
    if (this.metrics.length === 0) {
      return { message: 'No metrics available' };
    }
    
    const recentMetrics = this.metrics.slice(-10); // Last 10 metrics
    const latest = recentMetrics[recentMetrics.length - 1];
    
    const summary = {
      timestamp: latest.timestamp,
      system: {
        uptime: latest.system.uptime,
        hostname: latest.system.hostname
      },
      current: {
        cpu: {
          load: latest.cpu.loadAverage[0].toFixed(2),
          usage: {
            user: latest.cpu.usage.user,
            system: latest.cpu.usage.system
          }
        },
        memory: {
          usage: latest.memory.usagePercent.toFixed(2) + '%',
          free: this.formatBytes(latest.memory.free),
          total: this.formatBytes(latest.memory.total)
        },
        process: {
          memory: this.formatBytes(latest.memory.process.rss),
          uptime: Math.floor(latest.process.uptime / 60) + ' minutes'
        }
      },
      alerts: {
        total: this.alerts.length,
        critical: this.alerts.filter(a => a.level === 'critical').length,
        warning: this.alerts.filter(a => a.level === 'warning').length
      }
    };
    
    return summary;
  }

  printMetricsSummary() {
    const summary = this.getMetricsSummary();
    
    if (summary.message) {
      console.log(summary.message);
      return;
    }
    
    console.log('\n=== Performance Monitor Summary ===');
    console.log(`Timestamp: ${summary.timestamp}`);
    console.log(`System Uptime: ${Math.floor(summary.system.uptime / 3600)} hours`);
    console.log(`Hostname: ${summary.system.hostname}`);
    
    console.log('\nCurrent Status:');
    console.log(`  CPU Load: ${summary.current.cpu.load}`);
    console.log(`  Memory Usage: ${summary.current.memory.usage}`);
    console.log(`  Memory Free: ${summary.current.memory.free}`);
    console.log(`  Process Memory: ${summary.current.process.memory}`);
    console.log(`  Process Uptime: ${summary.current.process.uptime}`);
    
    console.log('\nAlerts:');
    console.log(`  Total: ${summary.alerts.total}`);
    console.log(`  Critical: ${summary.alerts.critical} 🔴`);
    console.log(`  Warning: ${summary.alerts.warning} 🟡`);
    
    console.log('\n===================================\n');
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log('Monitoring is already active');
      return;
    }
    
    this.monitoring = true;
    this.log('Starting real-time performance monitoring');
    
    // Set up alert handlers
    this.setupAlertHandlers();
    
    // Start monitoring loop
    this.monitoringInterval = setInterval(async () => {
      try {
        const metrics = await this.getSystemMetrics();
        this.storeMetrics(metrics);
        
        // Check thresholds and generate alerts
        const alerts = this.checkThresholds(metrics);
        alerts.forEach(alert => this.addAlert(alert));
        
        // Log current status
        const mem = metrics.memory;
        const cpu = metrics.cpu;
        this.log(
          `metrics rss=${this.formatBytes(mem.process.rss)} heapUsed=${this.formatBytes(mem.process.heapUsed)} cpuLoad=${cpu.loadAverage[0].toFixed(2)} memUsage=${mem.usagePercent.toFixed(2)}%`
        );
        
      } catch (error) {
        this.log(`Error collecting metrics: ${error.message}`);
      }
    }, 30000); // Every 30 seconds
  }

  stopMonitoring() {
    if (!this.monitoring) {
      this.log('Monitoring is not active');
      return;
    }
    
    this.monitoring = false;
    this.log('Stopping performance monitoring');
    
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
  }

  setupAlertHandlers() {
    // CPU alert handler
    this.addAlertHandler('cpu', (alert) => {
      if (alert.level === 'critical') {
        this.log(`CRITICAL CPU ALERT: ${alert.message} - Consider restarting or scaling`);
      }
    });
    
    // Memory alert handler
    this.addAlertHandler('memory', (alert) => {
      if (alert.level === 'critical') {
        this.log(`CRITICAL MEMORY ALERT: ${alert.message} - Memory pressure detected`);
      }
    });
    
    // Process alert handler
    this.addAlertHandler('process', (alert) => {
      this.log(`PROCESS ALERT: ${alert.message} - Monitor process memory usage`);
    });
  }

  async run() {
    this.log("Starting Real-Time Performance Monitor");
    
    await this.startMonitoring();
    
    let running = true;
    const stop = () => { 
      running = false; 
      this.log("Stopping Real-Time Performance Monitor..."); 
      this.stopMonitoring();
    };
    
    process.on("SIGINT", stop);
    process.on("SIGTERM", stop);

    // Main loop
    while (running) {
      try {
        // Periodic summary every 5 minutes
        if (Date.now() % 300000 < 60000) { // Every 5 minutes
          this.printMetricsSummary();
        }
        
        await new Promise(resolve => setTimeout(resolve, 60000)); // Check every minute
        
      } catch (error) {
        this.log(`Error in main loop: ${error.message}`);
        await new Promise(resolve => setTimeout(resolve, 30000));
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new RealTimePerformanceMonitor();
  monitor.run().catch((err) => { 
    try { 
      monitor.log(`Fatal: ${err && err.stack ? err.stack : String(err)}`); 
    } catch (_) {} 
    process.exit(1); 
  });
}

module.exports = RealTimePerformanceMonitor;


