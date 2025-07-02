#!/usr/bin/env node

/**
 * Production Monitoring System
 * Comprehensive health monitoring for production deployment
 */

const https = require('https');
const fs = require('fs');

class ProductionMonitor {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ziontechgroup.netlify.app';
    this.healthChecks = [
      { name: 'API Health', endpoint: '/api/health' },
      { name: 'App Load', endpoint: '/' },
      { name: 'Authentication', endpoint: '/api/auth/session' }
    ];
  }

  async checkEndpoint(endpoint) {
    return new Promise((resolve) => {
      const url = `${this.baseUrl}${endpoint}`;
      const startTime = Date.now();
      
      https.get(url, (res) => {
        const responseTime = Date.now() - startTime;
        resolve({
          status: res.statusCode,
          responseTime,
          success: res.statusCode >= 200 && res.statusCode < 400
        });
      }).on('error', (err) => {
        resolve({
          status: 0,
          responseTime: Date.now() - startTime,
          success: false,
          error: err.message
        });
      });
    });
  }

  async runHealthChecks() {
    console.log('🔍 Running Production Health Checks...\n');
    
    const results = [];
    for (const check of this.healthChecks) {
      console.log(`Checking ${check.name}...`);
      const result = await this.checkEndpoint(check.endpoint);
      results.push({ ...check, ...result });
      
      const emoji = result.success ? '✅' : '❌';
      console.log(`  ${emoji} ${check.name}: ${result.status} (${result.responseTime}ms)`);
    }
    
    const allHealthy = results.every(r => r.success);
    console.log(`\n🏥 Overall Health: ${allHealthy ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
    
    // Save results for monitoring
    const report = {
      timestamp: new Date().toISOString(),
      overall: allHealthy ? 'healthy' : 'unhealthy',
      checks: results
    };
    
    fs.writeFileSync('production-health-report.json', JSON.stringify(report, null, 2));
    return report;
  }
}

if (require.main === module) {
  const monitor = new ProductionMonitor();
  monitor.runHealthChecks().catch(console.error);
}

module.exports = ProductionMonitor;
