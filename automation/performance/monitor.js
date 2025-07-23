const fs = require('fs').promises'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const path = require('path')'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const axios = require('axios')'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const { performance } = require('perf_hooks')'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
class PerformanceMonitor {
  constructor() {
    this.isMonitoring = false;
    this.metrics = {};
    this.history = [];
    this.interval = null;
  }

  async start() {
    if (this.isMonitoring) {
      console.warn('Performance monitor already running');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      return;
    }

    this.isMonitoring = true;
    console.log('📊 Performance monitor started');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    // Start monitoring loop
    this.interval = setInterval(() => {
      this.collectMetrics();
    }, 60000); // Collect metrics every minute
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.isMonitoring = false;
    console.log('🛑 Performance monitor stopped');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }

  async collectMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
        uptime: process.uptime()
      };

      this.metrics = metrics;
      this.history.push(metrics);

      // Keep only last 1000 entries
      if (this.history.length > 1000) {
        this.history = this.history.slice(-1000);
      }

      console.log('📈 Metrics collected:', metrics);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    } catch (error) {
      console.error('Error collecting metrics:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  getMetrics() {
    return this.metrics;
  }

  getHistory(hours = 24) {
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
    return this.history.filter(entry => new Date(entry.timestamp) > cutoff);
  }
}

module.exports = PerformanceMonitor;