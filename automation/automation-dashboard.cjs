#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'automation-dashboard.log');
const statusFile = path.join(logsDir, 'dashboard-status.json');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

function start() {
  ensureDir(logsDir);
  log('Starting automation dashboard...');
  setInterval(() => {
    const status = {
      timestamp: new Date().toISOString(),
      pid: process.pid,
      uptimeMs: Math.round(process.uptime() * 1000)
    };
<<<<<<< HEAD
    fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
  }, 5000);
=======

    // System details
    for (const [name, system] of this.automationSystems) {
      report.systems[name] = {
        category: system.category,
        status: system.status,
        isRunning: system.isRunning,
        successCount: system.successCount,
        failureCount: system.failureCount,
        successRate: system.successCount / (system.successCount + system.failureCount) || 0,
        averageExecutionTime: system.averageExecutionTime,
        lastRun: system.lastRun?.toISOString(),
        uptime: system.uptime
      };
    }

    // Metrics
    for (const [name, metric] of this.metrics) {
      report.metrics[name] = metric;
    }

    return report;
  }

  calculateAverageSuccessRate() {
    const systems = Array.from(this.automationSystems.values());
    const totalSuccessRate = systems.reduce((sum, system) => {
      const rate = system.successCount / (system.successCount + system.failureCount) || 0;
      return sum + rate;
    }, 0);
    
    return systems.length > 0 ? totalSuccessRate / systems.length : 0;
  }

  generateRecommendations() {
    const recommendations = [];

    for (const [name, system] of this.automationSystems) {
      const successRate = system.successCount / (system.successCount + system.failureCount) || 0;
      
      if (successRate < 0.8) {
        recommendations.push({
          type: 'performance',
          system: name,
          message: `Improve ${name} reliability - current success rate: ${(successRate * 100).toFixed(1)}%`,
          priority: 'high'
        });
      }

      if (system.averageExecutionTime > 30000) {
        recommendations.push({
          type: 'optimization',
          system: name,
          message: `Optimize ${name} performance - average execution time: ${system.averageExecutionTime}ms`,
          priority: 'medium'
        });
      }

      if (!system.lastRun || Date.now() - system.lastRun.getTime() > 30 * 60 * 1000) {
        recommendations.push({
          type: 'maintenance',
          system: name,
          message: `Schedule regular runs for ${name} - last run: ${system.lastRun ? new Date(system.lastRun).toLocaleString() : 'Never'}`,
          priority: 'low'
        });
      }
    }

    return recommendations;
  }

  createServer() {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;

      res.setHeader('Content-Type', 'application/json');
      // Restrict CORS to local Next.js dev by default; adjust as needed
      const origin = req.headers.origin || '*';
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
      }

      switch (pathname) {
        case '/':
          res.setHeader('Content-Type', 'text/html');
          res.writeHead(200);
          res.end(this.generateDashboardHTML());
          break;

        case '/api/status':
          res.writeHead(200);
          res.end(JSON.stringify({
            systems: Array.from(this.automationSystems.entries()),
            metrics: Array.from(this.metrics.entries()),
            alerts: this.alerts
          }));
          break;

        case '/api/run-all':
          if (req.method === 'POST') {
            this.runAllSystems().then(results => {
              res.writeHead(200);
              res.end(JSON.stringify({ success: true, results }));
            });
          } else {
            res.writeHead(405);
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          }
          break;

        case '/api/run':
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
              const { system } = JSON.parse(body);
              this.runSystem(system).then(result => {
                res.writeHead(200);
                res.end(JSON.stringify(result));
              });
            });
          } else {
            res.writeHead(405);
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          }
          break;

        case '/api/report':
          res.writeHead(200);
          res.end(JSON.stringify(this.generateReport()));
          break;

        default:
          res.writeHead(404);
          res.end(JSON.stringify({ error: 'Not found' }));
      }
    });

    return server;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  start(port = 3001) {
    const server = this.createServer();
    server.listen(port, () => {
      this.log(`🚀 Automation Dashboard started on port ${port}`);
      this.log(`📊 Dashboard available at: http://localhost:${port}`);
      this.log(`📊 API available at: http://localhost:${port}/api/status`);
    });
  }
>>>>>>> origin/main
}

if (require.main === module) start();
