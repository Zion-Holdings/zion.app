#!/usr/bin/env node

const express = require('express');
const path = require('path');
const fs = require('fs');

class AutomationDashboard {
  constructor() {
    this.app = express();
    this.port = process.env.DASHBOARD_PORT || 3000;
    
    this.setupExpress();
    this.setupRoutes();
  }

  setupExpress() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, 'dashboard-assets')));
  }

  setupRoutes() {
    // Main dashboard
    this.app.get('/', (req, res) => {
      res.send(this.getDashboardHTML());
    });

    // API endpoints for status
    this.app.get('/api/status', async (req, res) => {
      try {
        const status = await this.getSystemStatus();
        res.json(status);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // API endpoints for control
    this.app.post('/api/start', async (req, res) => {
      try {
        const { system } = req.body;
        await this.startSystem(system);
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/api/stop', async (req, res) => {
      try {
        const { system } = req.body;
        await this.stopSystem(system);
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/api/trigger', async (req, res) => {
      try {
        const { system, action } = req.body;
        await this.triggerAction(system, action);
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  async getSystemStatus() {
    const systems = [
      { name: 'comprehensive', port: 3001, url: 'http://localhost:3001/health' },
      { name: 'ai', port: 3002, url: 'http://localhost:3002/health' },
      { name: 'cursor', port: 3005, url: 'http://localhost:3005/health' },
      { name: 'coordinator', port: 3003, url: 'http://localhost:3003/health' }
    ];

    const status = {};

    for (const system of systems) {
      try {
        const response = await fetch(system.url);
        const data = await response.json();
        status[system.name] = { ...data, port: system.port };
      } catch (error) {
        status[system.name] = { status: 'offline', error: error.message, port: system.port };
      }
    }

    return status;
  }

  async startSystem(system) {
    const { execSync } = require('child_process');
    
    switch (system) {
      case 'comprehensive':
        execSync('npm run automation:comprehensive:start', { stdio: 'pipe' });
        break;
      case 'ai':
        execSync('npm run automation:ai:start', { stdio: 'pipe' });
        break;
      case 'cursor':
        execSync('npm run automation:cursor:start', { stdio: 'pipe' });
        break;
      case 'coordinator':
        execSync('npm run automation:coordinator:start', { stdio: 'pipe' });
        break;
      case 'all':
        execSync('npm run automation:start:all', { stdio: 'pipe' });
        break;
    }
  }

  async stopSystem(system) {
    const { execSync } = require('child_process');
    
    switch (system) {
      case 'comprehensive':
        execSync('npm run automation:comprehensive:stop', { stdio: 'pipe' });
        break;
      case 'ai':
        execSync('npm run automation:ai:stop', { stdio: 'pipe' });
        break;
      case 'cursor':
        execSync('npm run automation:cursor:stop', { stdio: 'pipe' });
        break;
      case 'coordinator':
        execSync('npm run automation:coordinator:stop', { stdio: 'pipe' });
        break;
      case 'all':
        execSync('npm run automation:stop:all', { stdio: 'pipe' });
        break;
    }
  }

  async triggerAction(system, action) {
    const { execSync } = require('child_process');
    
    switch (action) {
      case 'improve':
        execSync('npm run automation:trigger:improvement', { stdio: 'pipe' });
        break;
      case 'ai-improve':
        execSync('npm run automation:trigger:ai', { stdio: 'pipe' });
        break;
      case 'distribute':
        execSync('npm run automation:distribute:workload', { stdio: 'pipe' });
        break;
    }
  }

  getDashboardHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion App Automation Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .card-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
        }
        
        .status {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .status.online {
            background: #d4edda;
            color: #155724;
        }
        
        .status.offline {
            background: #f8d7da;
            color: #721c24;
        }
        
        .status.processing {
            background: #fff3cd;
            color: #856404;
        }
        
        .card-content {
            margin-bottom: 20px;
        }
        
        .metric {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        
        .metric:last-child {
            border-bottom: none;
        }
        
        .metric-label {
            color: #666;
            font-size: 0.9rem;
        }
        
        .metric-value {
            font-weight: 600;
            color: #333;
        }
        
        .controls {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }
        
        .btn-primary {
            background: #007bff;
            color: white;
        }
        
        .btn-primary:hover {
            background: #0056b3;
        }
        
        .btn-success {
            background: #28a745;
            color: white;
        }
        
        .btn-success:hover {
            background: #1e7e34;
        }
        
        .btn-danger {
            background: #dc3545;
            color: white;
        }
        
        .btn-danger:hover {
            background: #c82333;
        }
        
        .btn-warning {
            background: #ffc107;
            color: #212529;
        }
        
        .btn-warning:hover {
            background: #e0a800;
        }
        
        .global-controls {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        
        .global-controls h2 {
            margin-bottom: 20px;
            color: #333;
        }
        
        .global-buttons {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .refresh-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            font-size: 1.2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .refresh-btn:hover {
            transform: rotate(180deg);
            background: white;
        }
        
        .loading {
            opacity: 0.6;
            pointer-events: none;
        }
        
        @media (max-width: 768px) {
            .grid {
                grid-template-columns: 1fr;
            }
            
            .global-buttons {
                flex-direction: column;
            }
            
            .controls {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 Zion App Automation Dashboard</h1>
            <p>Comprehensive automation system for continuous app improvement</p>
        </div>
        
        <button class="refresh-btn" onclick="refreshStatus()">🔄</button>
        
        <div class="global-controls">
            <h2>Global Controls</h2>
            <div class="global-buttons">
                <button class="btn btn-success" onclick="controlSystem('all', 'start')">🚀 Start All Systems</button>
                <button class="btn btn-danger" onclick="controlSystem('all', 'stop')">🛑 Stop All Systems</button>
                <button class="btn btn-primary" onclick="triggerAction('general', 'improve')">🔧 Trigger Improvement</button>
                <button class="btn btn-warning" onclick="triggerAction('general', 'ai-improve')">🤖 Trigger AI Improvement</button>
                <button class="btn btn-primary" onclick="triggerAction('general', 'distribute')">🌐 Distribute Workload</button>
            </div>
        </div>
        
        <div class="grid" id="systems-grid">
            <!-- Systems will be populated here -->
        </div>
    </div>
    
    <script>
        let statusData = {};
        
        async function refreshStatus() {
            const refreshBtn = document.querySelector('.refresh-btn');
            refreshBtn.classList.add('loading');
            
            try {
                const response = await fetch('/api/status');
                statusData = await response.json();
                updateDashboard();
            } catch (error) {
                console.error('Failed to fetch status:', error);
            } finally {
                refreshBtn.classList.remove('loading');
            }
        }
        
        function updateDashboard() {
            const grid = document.getElementById('systems-grid');
            grid.innerHTML = '';
            
            const systems = [
                {
                    name: 'comprehensive',
                    title: 'Comprehensive Automation',
                    description: 'Monitors and fixes build, lint, and TypeScript errors',
                    port: 3001
                },
                {
                    name: 'ai',
                    title: 'AI Continuous Improvement',
                    description: 'AI-powered code quality and performance improvements',
                    port: 3002
                },
                {
                    name: 'cursor',
                    title: 'Cursor AI Delegator',
                    description: 'Coordinates with Cursor for intelligent code fixes',
                    port: 3005
                },
                {
                    name: 'coordinator',
                    title: 'Multi-Computer Coordinator',
                    description: 'Distributes tasks across multiple machines',
                    port: 3003
                }
            ];
            
            systems.forEach(system => {
                const status = statusData[system.name] || { status: 'offline' };
                const card = createSystemCard(system, status);
                grid.appendChild(card);
            });
        }
        
        function createSystemCard(system, status) {
            const card = document.createElement('div');
            card.className = 'card';
            
            const isOnline = status.status === 'healthy' || status.status === 'online';
            const statusClass = isOnline ? 'online' : 'offline';
            
            card.innerHTML = \`
                <div class="card-header">
                    <div class="card-title">\${system.title}</div>
                    <div class="status \${statusClass}">\${isOnline ? 'Online' : 'Offline'}</div>
                </div>
                <div class="card-content">
                    <p style="color: #666; margin-bottom: 15px;">\${system.description}</p>
                    <div class="metric">
                        <span class="metric-label">Port:</span>
                        <span class="metric-value">\${system.port}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Uptime:</span>
                        <span class="metric-value">\${status.uptime ? Math.round(status.uptime / 60) + 'm' : 'N/A'}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Queue:</span>
                        <span class="metric-value">\${status.queueLength || status.taskQueueLength || 0}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Active Tasks:</span>
                        <span class="metric-value">\${status.activeTasks || 0}</span>
                    </div>
                </div>
                <div class="controls">
                    <button class="btn btn-success" onclick="controlSystem('\${system.name}', 'start')" \${isOnline ? 'disabled' : ''}>Start</button>
                    <button class="btn btn-danger" onclick="controlSystem('\${system.name}', 'stop')" \${!isOnline ? 'disabled' : ''}>Stop</button>
                    <button class="btn btn-primary" onclick="triggerAction('\${system.name}', 'improve')" \${!isOnline ? 'disabled' : ''}>Improve</button>
                </div>
            \`;
            
            return card;
        }
        
        async function controlSystem(system, action) {
            try {
                const response = await fetch(\`/api/\${action}\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ system })
                });
                
                if (response.ok) {
                    setTimeout(refreshStatus, 2000);
                } else {
                    console.error(\`Failed to \${action} \${system}\`);
                }
            } catch (error) {
                console.error(\`Error \${action}ing \${system}:\`, error);
            }
        }
        
        async function triggerAction(system, action) {
            try {
                const response = await fetch('/api/trigger', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ system, action })
                });
                
                if (response.ok) {
                    console.log(\`Triggered \${action} for \${system}\`);
                } else {
                    console.error(\`Failed to trigger \${action} for \${system}\`);
                }
            } catch (error) {
                console.error(\`Error triggering \${action} for \${system}:\`, error);
            }
        }
        
        // Initial load
        refreshStatus();
        
        // Auto-refresh every 30 seconds
        setInterval(refreshStatus, 30000);
    </script>
</body>
</html>
    `;
  }

  start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`🎛️ Automation Dashboard running on http://localhost:${this.port}`);
    });
  }

  stop() {
    if (this.server) {
      this.server.close();
    }
  }
}

// CLI interface
if (require.main === module) {
  const dashboard = new AutomationDashboard();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      dashboard.start();
      break;
    case 'stop':
      dashboard.stop();
      break;
    default:
      console.log('Usage: node automation-dashboard.cjs [start|stop]');
  }
}

module.exports = AutomationDashboard; 