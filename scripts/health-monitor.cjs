#!/usr/bin/env node

/**
 * Zion App Health Monitor
 * Monitors application health and triggers self-healing when needed
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');
const http = require('http');

class HealthMonitor {
  constructor() {
    this.metrics = {
      uptime: 0,
      responseTime: 0,
      errorRate: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      lastCheck: null,
    };

    this.thresholds = {
      maxResponseTime: 5000, // 5 seconds
      maxErrorRate: 0.1, // 10%
      maxMemoryUsage: 0.9, // 90%
      maxCpuUsage: 0.8, // 80%
    };

    this.endpoints = [
      'https://zion-app.netlify.app',
      'https://zion-app.netlify.app/api/health',
      'https://zion-app.netlify.app/api/auth/health',
    ];
  }

  async startMonitoring() {
    console.log('Starting health monitoring...');

    // Initial health check
    await this.performHealthCheck();

    // Start continuous monitoring
    setInterval(async () => {
      await this.performHealthCheck();
    }, 60000); // Check every minute
  }

  async performHealthCheck() {
    const startTime = Date.now();
    let totalResponseTime = 0;
    let successCount = 0;
    let errorCount = 0;

    for (const endpoint of this.endpoints) {
      try {
        const responseTime = await this.checkEndpoint(endpoint);
        totalResponseTime += responseTime;
        successCount++;
      } catch (error) {
        errorCount++;
        console.error(`Health check failed for ${endpoint}:`, error.message);
      }
    }

    // Update metrics
    this.metrics.responseTime = totalResponseTime / this.endpoints.length;
    this.metrics.errorRate = errorCount / this.endpoints.length;
    this.metrics.lastCheck = new Date();
    this.metrics.uptime = process.uptime();

    // Check system resources
    await this.checkSystemResources();

    // Log metrics
    this.logMetrics();

    // Trigger healing if needed
    if (this.shouldTriggerHealing()) {
      await this.triggerHealing();
    }
  }

  async checkEndpoint(url) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const protocol = url.startsWith('https:') ? https : http;

      const req = protocol.get(
        url,
        {
          timeout: 10000,
          headers: {
            'User-Agent': 'Zion-Health-Monitor/1.0',
          },
        },
        (res) => {
          const responseTime = Date.now() - startTime;

          if (res.statusCode >= 200 && res.statusCode < 500) {
            resolve(responseTime);
          } else {
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        },
      );

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  async checkSystemResources() {
    try {
      // Check memory usage
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = memUsage.heapUsed / memUsage.heapTotal;

      // Check CPU usage (simplified)
      const startUsage = process.cpuUsage();
      await new Promise((resolve) => setTimeout(resolve, 100));
      const endUsage = process.cpuUsage(startUsage);
      this.metrics.cpuUsage = (endUsage.user + endUsage.system) / 1000000; // Convert to seconds
    } catch (error) {
      console.error('Error checking system resources:', error.message);
    }
  }

  shouldTriggerHealing() {
    return (
      this.metrics.responseTime > this.thresholds.maxResponseTime ||
      this.metrics.errorRate > this.thresholds.maxErrorRate ||
      this.metrics.memoryUsage > this.thresholds.maxMemoryUsage ||
      this.metrics.cpuUsage > this.thresholds.maxCpuUsage
    );
  }

  async triggerHealing() {
    console.log('Health thresholds exceeded, triggering healing...');

    try {
      // Run self-healing script
      execSync('node scripts/self-healing.js', {
        stdio: 'inherit',
        cwd: process.cwd(),
      });

      console.log('Healing process completed');
    } catch (error) {
      console.error('Healing process failed:', error.message);
    }
  }

  logMetrics() {
    const logEntry = {
      timestamp: this.metrics.lastCheck,
      uptime: this.metrics.uptime,
      responseTime: this.metrics.responseTime,
      errorRate: this.metrics.errorRate,
      memoryUsage: this.metrics.memoryUsage,
      cpuUsage: this.metrics.cpuUsage,
    };

    console.log('Health Metrics:', JSON.stringify(logEntry, null, 2));

    // Save to metrics file
    const metricsPath = path.join(process.cwd(), 'logs', 'health-metrics.json');
    fs.writeFileSync(metricsPath, JSON.stringify(logEntry, null, 2));
  }

  getMetrics() {
    return this.metrics;
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new HealthMonitor();

  // Handle process signals
  process.on('SIGINT', () => {
    console.log('Stopping health monitor...');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('Stopping health monitor...');
    process.exit(0);
  });

  // Start monitoring
  monitor.startMonitoring().catch((error) => {
    console.error('Failed to start health monitor:', error);
    process.exit(1);
  });
}

module.exports = HealthMonitor;
