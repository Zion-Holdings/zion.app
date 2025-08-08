#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const url = require('url');

class AutomationDashboard {
  constructor() {
    this.automationSystems = new Map();
    this.metrics = new Map();
    this.alerts = [];
    this.logFile = path.join(__dirname, 'logs', 'automation-dashboard.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.startMetricsCollection();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadAutomationSystems() {
    // Seed with known systems
    const seed = [
      { name: 'lint-monitor', path: 'lint-monitor.cjs', category: 'code-quality' },
      { name: 'lint-fixer', path: 'lint-error-fixer.cjs', category: 'code-quality' },
      { name: 'lint-manager', path: 'lint-automation-manager.cjs', category: 'code-quality' },
      { name: 'code-quality', path: 'code-quality-monitor.cjs', category: 'analysis' },
      { name: 'performance', path: 'performance-optimizer.cjs', category: 'optimization' },
      { name: 'content-generator', path: 'content-generator.cjs', category: 'generation' },
      { name: 'seo-optimizer', path: 'seo-optimizer.cjs', category: 'seo' },
      { name: 'security-scanner', path: 'security-scanner.cjs', category: 'security' },
      { name: 'test-generator', path: 'test-generator.cjs', category: 'testing' },
      { name: 'intelligent-orchestrator', path: 'intelligent-orchestrator.cjs', category: 'orchestration' },
      { name: 'automation-factory', path: 'automation-factory.cjs', category: 'factory' },
      { name: 'self-healing', path: 'self-healing-orchestrator.cjs', category: 'maintenance' },
    ];

    const addSystem = (system) => {
      const systemPath = path.join(__dirname, system.path);
      if (fs.existsSync(systemPath)) {
        this.automationSystems.set(system.name, {
          ...system,
          status: 'available',
          path: systemPath,
          lastRun: null,
          successCount: 0,
          failureCount: 0,
          totalExecutionTime: 0,
          averageExecutionTime: 0,
          uptime: 0,
          isRunning: false
        });
      }
    };

    for (const s of seed) addSystem(s);

    // Auto-discover additional automation scripts (future automations appear automatically)
    const cfgPath = path.join(__dirname, 'auto-discovery.config.json');
    const exclude = fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, 'utf8')).exclude || [] : [];
    const files = fs.readdirSync(__dirname).filter(f => !exclude.includes(f));
    for (const file of files) {
      if ((file.endsWith('.cjs') || file.endsWith('.js')) && !file.endsWith('.cjs.map') && file !== path.basename(__filename)) {
        const name = path.basename(file).replace(/\.(cjs|js)$/,'');
        if (!this.automationSystems.has(name)) {
          addSystem({ name, path: file, category: 'misc' });
        }
      }
    }
  }

  startMetricsCollection() {
    // Collect metrics every 30 seconds
    setInterval(() => {
      this.collectMetrics();
    }, 30000);

    // Generate alerts every minute
    setInterval(() => {
      this.generateAlerts();
    }, 60000);
  }

  collectMetrics() {
    for (const [name, system] of this.automationSystems) {
      const metrics = {
        timestamp: new Date().toISOString(),
        isRunning: system.isRunning,
        lastRun: system.lastRun,
        successRate: system.successCount / (system.successCount + system.failureCount) || 0,
        averageExecutionTime: system.averageExecutionTime,
        uptime: system.uptime
      };

      this.metrics.set(name, metrics);
    }
  }

  generateAlerts() {
    this.alerts = [];

    for (const [name, system] of this.automationSystems) {
      const successRate = system.successCount / (system.successCount + system.failureCount) || 0;
      
      if (successRate < 0.8) {
        this.alerts.push({
          type: 'warning',
          system: name,
          message: `Low success rate: ${(successRate * 100).toFixed(1)}%`,
          timestamp: new Date().toISOString()
        });
      }

      if (system.averageExecutionTime > 30000) {
        this.alerts.push({
          type: 'warning',
          system: name,
          message: `Slow execution time: ${system.averageExecutionTime}ms`,
          timestamp: new Date().toISOString()
        });
      }

      if (!system.lastRun || Date.now() - system.lastRun.getTime() > 30 * 60 * 1000) {
        this.alerts.push({
          type: 'error',
          system: name,
          message: 'System not running recently',
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async runSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      this.log(`❌ System not found: ${systemName}`);
      return false;
    }

    const startTime = Date.now();
    system.isRunning = true;

    try {
      this.log(`🚀 Running system: ${systemName}`);
      
      const result = execSync(`node "${system.path}"`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(systemName, true, executionTime);
      
      this.log(`✅ System completed: ${systemName} (${executionTime}ms)`);
      return { success: true, output: result, executionTime };
    } catch (error) {
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(systemName, false, executionTime);
      
      this.log(`❌ System failed: ${systemName} - ${error.message}`);
      return { success: false, error: error.message, executionTime };
    } finally {
      system.isRunning = false;
    }
  }

  updateSystemMetrics(systemName, success, executionTime) {
    const system = this.automationSystems.get(systemName);
    if (!system) return;

    if (success) {
      system.successCount++;
    } else {
      system.failureCount++;
    }

    system.totalExecutionTime += executionTime;
    system.averageExecutionTime = system.totalExecutionTime / (system.successCount + system.failureCount);
    system.lastRun = new Date();
  }

  async runAllSystems() {
    this.log('🚀 Running all automation systems...');
    
    const results = [];
    for (const [name, system] of this.automationSystems) {
      if (system.status === 'available') {
        const result = await this.runSystem(name);
        results.push({ name, ...result });
        
        // Add delay between systems
        await this.sleep(2000);
      }
    }
    
    this.log(`📊 Completed ${results.length} systems`);
    return results;
  }

  generateDashboardHTML() {
    const systems = Array.from(this.automationSystems.values());
    const metrics = Array.from(this.metrics.values());
    const alerts = this.alerts;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automation Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-8">Automation Dashboard</h1>
        
        <!-- System Status -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            ${systems.map(system => `
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-gray-800">${system.name}</h3>
                        <span class="px-2 py-1 rounded-full text-xs font-medium ${
                            system.isRunning ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }">
                            ${system.isRunning ? 'Running' : 'Idle'}
                        </span>
                    </div>
                    <div class="space-y-2 text-sm text-gray-600">
                        <p>Category: ${system.category}</p>
                        <p>Success Rate: ${((system.successCount / (system.successCount + system.failureCount)) * 100 || 0).toFixed(1)}%</p>
                        <p>Avg Time: ${system.averageExecutionTime.toFixed(0)}ms</p>
                        <p>Last Run: ${system.lastRun ? new Date(system.lastRun).toLocaleString() : 'Never'}</p>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Alerts -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Alerts</h2>
            ${alerts.length > 0 ? alerts.map(alert => `
                <div class="p-3 rounded-lg mb-2 ${
                    alert.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }">
                    <strong>${alert.system}:</strong> ${alert.message}
                    <span class="text-xs ml-2">${new Date(alert.timestamp).toLocaleString()}</span>
                </div>
            `).join('') : '<p class="text-gray-500">No alerts</p>'}
        </div>

        <!-- Performance Chart -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Performance Metrics</h2>
            <canvas id="performanceChart" width="400" height="200"></canvas>
        </div>

        <!-- Actions -->
        <div class="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Actions</h2>
            <div class="flex flex-wrap gap-4">
                <button onclick="runAllSystems()" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Run All Systems
                </button>
                <button onclick="refreshDashboard()" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                    Refresh Dashboard
                </button>
                <button onclick="generateReport()" class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
                    Generate Report
                </button>
            </div>
        </div>
    </div>

    <script>
        // Performance Chart
        const ctx = document.getElementById('performanceChart').getContext('2d');
        const performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ${JSON.stringify(metrics.map(m => new Date(m.timestamp).toLocaleTimeString()))},
                datasets: [{
                    label: 'Success Rate',
                    data: ${JSON.stringify(metrics.map(m => m.successRate * 100))},
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        function runAllSystems() {
            fetch('/api/run-all', { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    alert('All systems started');
                    setTimeout(refreshDashboard, 5000);
                });
        }

        function refreshDashboard() {
            location.reload();
        }

        function generateReport() {
            fetch('/api/report')
                .then(response => response.json())
                .then(data => {
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'automation-report.json';
                    a.click();
                });
        }

        // Auto-refresh every 30 seconds
        setInterval(refreshDashboard, 30000);
    </script>
</body>
</html>`;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSystems: this.automationSystems.size,
        runningSystems: Array.from(this.automationSystems.values()).filter(s => s.isRunning).length,
        totalAlerts: this.alerts.length,
        averageSuccessRate: this.calculateAverageSuccessRate()
      },
      systems: {},
      metrics: {},
      alerts: this.alerts,
      recommendations: this.generateRecommendations()
    };

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
}

// CLI handling
const dashboard = new AutomationDashboard();
const command = process.argv[2];
const port = process.argv[3] || 3001;

switch (command) {
  case 'start':
    dashboard.start(parseInt(port));
    break;
  case 'status':
    console.log(JSON.stringify(dashboard.generateReport(), null, 2));
    break;
  case 'run-all':
    dashboard.runAllSystems().then(results => {
      console.log(JSON.stringify(results, null, 2));
      process.exit(0);
    });
    break;
  default:
    console.log('Usage: node automation-dashboard.js [start|status|run-all] [port]');
    console.log('\nCommands:');
    console.log('  start    - Start the dashboard server');
    console.log('  status   - Show current status');
    console.log('  run-all  - Run all automation systems');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down automation dashboard...');
  process.exit(0);
});
