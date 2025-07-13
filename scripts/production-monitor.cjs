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
      // Use dedicated auth health endpoint to avoid 500 errors when no session
      { name: 'Authentication', endpoint: '/api/auth/health' }
    ];
  }

  async checkEndpoint(endpoint) {
    return new Promise((resolve) => {
      const url = `${this.baseUrl}${endpoint}`;
      const startTime = Date.now();

      https.get(url, (res) => {
        const responseTime = Date.now() - startTime;
        let body = '';

        res.on('data', (chunk) => {
          if (body.length < 1000) {
            body += chunk.toString();
          }
        });

        res.on('end', () => {
          resolve({
            status: res.statusCode,
            responseTime,
            success: res.statusCode >= 200 && res.statusCode < 400,
            body: body.trim()
          });
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
    process.stdout.write('\ud83d\udd0d Running Production Health Checks...\n');
    
    const results = [];
    for (const check of this.healthChecks) {
      process.stdout.write(`Checking ${check.name}...\n`);
      const result = await this.checkEndpoint(check.endpoint);
      if (check.name === 'Authentication' && result.status === 401) {
        // 401 indicates no active session but endpoint reachable
        result.success = true;
      }
      results.push({ ...check, ...result });
      
      const emoji = result.success ? '✅' : '❌';
      process.stdout.write(`  ${emoji} ${check.name}: ${result.status} (${result.responseTime}ms)\n`);
    }
    
    const allHealthy = results.every(r => r.success);
    process.stdout.write(`\n\ud83c\udfe5 Overall Health: ${allHealthy ? '\u2705 HEALTHY' : '\u274c UNHEALTHY'}\n`);
    
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
