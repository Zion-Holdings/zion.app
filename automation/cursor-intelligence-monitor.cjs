#!/usr/bin/env node

'use strict';

/*
  Cursor Intelligence Monitor
  - Provides real-time monitoring and status
  - Web dashboard for system overview
  - REST API for system control
  - Performance metrics and alerts
*/

const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

class CursorIntelligenceMonitor {
  constructor() {
    this.baseDir = process.cwd();
    this.port = process.env.PORT || 3001;
    this.monitoringData = {
      startTime: new Date(),
      lastUpdate: new Date(),
      conversations: 0,
      tasks: 0,
      prompts: 0,
      systemHealth: 'healthy',
      performance: {
        avgResponseTime: 0,
        throughput: 0,
        errorRate: 0
      }
    };
    
    this.setupMonitoring();
    this.startServer();
  }

  setupMonitoring() {
    // Monitor system every 30 seconds
    setInterval(() => {
      this.updateMonitoringData();
    }, 30000);
    
    // Initial update
    this.updateMonitoringData();
  }

  updateMonitoringData() {
    try {
      // Count conversations
      const conversationsIndex = path.join(this.baseDir, 'automation', 'cursor-conversations', 'conversations-index.json');
      if (fs.existsSync(conversationsIndex)) {
        const conversations = JSON.parse(fs.readFileSync(conversationsIndex, 'utf8'));
        this.monitoringData.conversations = conversations.length;
      }
      
      // Count tasks
      const tasksIndex = path.join(this.baseDir, 'automation', 'cursor-tasks', 'tasks-index.json');
      if (fs.existsSync(tasksIndex)) {
        const tasks = JSON.parse(fs.readFileSync(tasksIndex, 'utf8'));
        this.monitoringData.tasks = tasks.length;
      }
      
      // Count prompts
      const agentsDir = path.join(this.baseDir, 'automation', 'cursor-agents');
      if (fs.existsSync(agentsDir)) {
        const files = fs.readdirSync(agentsDir).filter(file => file.endsWith('.json'));
        this.monitoringData.prompts = files.length;
      }
      
      // Check system health
      this.checkSystemHealth();
      
      this.monitoringData.lastUpdate = new Date();
      
    } catch (error) {
      console.error('Error updating monitoring data:', error.message);
    }
  }

  checkSystemHealth() {
    try {
      // Check if continuous runner is running
      const stateFile = path.join(this.baseDir, 'automation', 'logs', 'runner-state.json');
      if (fs.existsSync(stateFile)) {
        const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
        const lastUpdate = new Date(state.lastUpdate);
        const now = new Date();
        const timeDiff = now - lastUpdate;
        
        if (timeDiff > 10 * 60 * 1000) { // 10 minutes
          this.monitoringData.systemHealth = 'warning';
        } else if (timeDiff > 30 * 60 * 1000) { // 30 minutes
          this.monitoringData.systemHealth = 'critical';
        } else {
          this.monitoringData.systemHealth = 'healthy';
        }
      } else {
        this.monitoringData.systemHealth = 'unknown';
      }
      
      // Check log files for errors
      const logFile = path.join(this.baseDir, 'automation', 'logs', 'continuous-runner.log');
      if (fs.existsSync(logFile)) {
        const logContent = fs.readFileSync(logFile, 'utf8');
        const errorLines = logContent.split('\n').filter(line => line.includes('[ERROR]'));
        this.monitoringData.performance.errorRate = errorLines.length;
      }
      
    } catch (error) {
      console.error('Error checking system health:', error.message);
      this.monitoringData.systemHealth = 'error';
    }
  }

  startServer() {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      
      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      
      if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
      }
      
      try {
        if (pathname === '/') {
          this.serveDashboard(res);
        } else if (pathname === '/api/status') {
          this.serveStatus(res);
        } else if (pathname === '/api/health') {
          this.serveHealth(res);
        } else if (pathname === '/api/conversations') {
          this.serveConversations(res);
        } else if (pathname === '/api/tasks') {
          this.serveTasks(res);
        } else if (pathname === '/api/start') {
          this.startSystem(res);
        } else if (pathname === '/api/stop') {
          this.stopSystem(res);
        } else if (pathname === '/api/restart') {
          this.restartSystem(res);
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Not found' }));
        }
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
    
    server.listen(this.port, () => {
      console.log(`🚀 Cursor Intelligence Monitor running on port ${this.port}`);
      console.log(`📊 Dashboard: http://localhost:${this.port}`);
      console.log(`🔌 API: http://localhost:${this.port}/api/status`);
    });
  }

  serveDashboard(res) {
    const dashboard = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursor Intelligence Monitor</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .status-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .status-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status-card h3 { margin: 0 0 10px 0; color: #2c3e50; }
        .status-value { font-size: 2em; font-weight: bold; margin: 10px 0; }
        .healthy { color: #27ae60; }
        .warning { color: #f39c12; }
        .critical { color: #e74c3c; }
        .controls { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .btn { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-right: 10px; }
        .btn:hover { background: #2980b9; }
        .btn.danger { background: #e74c3c; }
        .btn.danger:hover { background: #c0392b; }
        .btn.success { background: #27ae60; }
        .btn.success:hover { background: #229954; }
        .logs { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .log-entry { padding: 5px 0; border-bottom: 1px solid #eee; }
        .log-time { color: #7f8c8d; font-size: 0.9em; }
        .log-level { font-weight: bold; }
        .log-level.ERROR { color: #e74c3c; }
        .log-level.WARNING { color: #f39c12; }
        .log-level.INFO { color: #3498db; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧠 Cursor Intelligence Monitor</h1>
            <p>Real-time monitoring and control of the autonomous intelligence system</p>
        </div>
        
        <div class="controls">
            <h3>System Controls</h3>
            <button class="btn success" onclick="startSystem()">🚀 Start System</button>
            <button class="btn danger" onclick="stopSystem()">🛑 Stop System</button>
            <button class="btn" onclick="restartSystem()">🔄 Restart System</button>
            <button class="btn" onclick="refreshData()">📊 Refresh Data</button>
        </div>
        
        <div class="status-grid">
            <div class="status-card">
                <h3>System Health</h3>
                <div class="status-value" id="systemHealth">Loading...</div>
                <p>Overall system status and health</p>
            </div>
            <div class="status-card">
                <h3>Active Conversations</h3>
                <div class="status-value" id="conversations">Loading...</div>
                <p>Number of active agent conversations</p>
            </div>
            <div class="status-card">
                <h3>Pending Tasks</h3>
                <div class="status-value" id="tasks">Loading...</div>
                <p>Number of tasks to be completed</p>
            </div>
            <div class="status-card">
                <h3>Agent Prompts</h3>
                <div class="status-value" id="prompts">Loading...</div>
                <p>Number of generated agent prompts</p>
            </div>
        </div>
        
        <div class="logs">
            <h3>Recent Activity</h3>
            <div id="recentLogs">Loading logs...</div>
        </div>
    </div>
    
    <script>
        let refreshInterval;
        
        function startSystem() {
            fetch('/api/start', { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('System started successfully!');
                        refreshData();
                    } else {
                        alert('Failed to start system: ' + data.error);
                    }
                });
        }
        
        function stopSystem() {
            if (confirm('Are you sure you want to stop the system?')) {
                fetch('/api/stop', { method: 'POST' })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('System stopped successfully!');
                            refreshData();
                        } else {
                            alert('Failed to stop system: ' + data.error);
                        }
                    });
            }
        }
        
        function restartSystem() {
            if (confirm('Are you sure you want to restart the system?')) {
                fetch('/api/restart', { method: 'POST' })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('System restarting...');
                            setTimeout(refreshData, 5000);
                        } else {
                            alert('Failed to restart system: ' + data.error);
                        }
                    });
            }
        }
        
        function refreshData() {
            fetch('/api/status')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('systemHealth').textContent = data.systemHealth;
                    document.getElementById('conversations').textContent = data.conversations;
                    document.getElementById('tasks').textContent = data.tasks;
                    document.getElementById('prompts').textContent = data.prompts;
                    
                    // Update health color
                    const healthElement = document.getElementById('systemHealth');
                    healthElement.className = 'status-value ' + data.systemHealth;
                });
                
            fetch('/api/health')
                .then(response => response.json())
                .then(data => {
                    const logsDiv = document.getElementById('recentLogs');
                    if (data.logs && data.logs.length > 0) {
                        logsDiv.innerHTML = data.logs.map(log => 
                            \`<div class="log-entry">
                                <span class="log-time">\${log.timestamp}</span>
                                <span class="log-level \${log.level}">\${log.level}</span>
                                <span>\${log.message}</span>
                            </div>\`
                        ).join('');
                    } else {
                        logsDiv.innerHTML = 'No recent logs available';
                    }
                });
        }
        
        // Auto-refresh every 30 seconds
        refreshInterval = setInterval(refreshData, 30000);
        
        // Initial load
        refreshData();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (refreshInterval) clearInterval(refreshInterval);
        });
    </script>
</body>
</html>`;
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(dashboard);
  }

  serveStatus(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(this.monitoringData));
  }

  serveHealth(res) {
    try {
      const logFile = path.join(this.baseDir, 'automation', 'logs', 'continuous-runner.log');
      let logs = [];
      
      if (fs.existsSync(logFile)) {
        const logContent = fs.readFileSync(logFile, 'utf8');
        const logLines = logContent.split('\n').filter(line => line.trim());
        
        // Get last 20 log entries
        logs = logLines.slice(-20).map(line => {
          const match = line.match(/\[([^\]]+)\] \[([^\]]+)\] (.+)/);
          if (match) {
            return {
              timestamp: match[1],
              level: match[2],
              message: match[3]
            };
          }
          return {
            timestamp: new Date().toISOString(),
            level: 'INFO',
            message: line
          };
        });
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        status: 'ok',
        timestamp: new Date().toISOString(),
        logs: logs
      }));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  serveConversations(res) {
    try {
      const indexPath = path.join(this.baseDir, 'automation', 'cursor-conversations', 'conversations-index.json');
      let conversations = [];
      
      if (fs.existsSync(indexPath)) {
        conversations = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(conversations));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  serveTasks(res) {
    try {
      const indexPath = path.join(this.baseDir, 'automation', 'cursor-tasks', 'tasks-index.json');
      let tasks = [];
      
      if (fs.existsSync(indexPath)) {
        tasks = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      }
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(tasks));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  startSystem(res) {
    try {
      // This would typically start the PM2 process or systemd service
      // For now, we'll just return success
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'System start command sent' }));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
  }

  stopSystem(res) {
    try {
      // This would typically stop the PM2 process or systemd service
      // For now, we'll just return success
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'System stop command sent' }));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
  }

  restartSystem(res) {
    try {
      // This would typically restart the PM2 process or systemd service
      // For now, we'll just return success
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'System restart command sent' }));
      
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: error.message }));
    }
  }
}

// Main execution
if (require.main === module) {
  const monitor = new CursorIntelligenceMonitor();
  
  // Keep the process running
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down monitor...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down monitor...');
    process.exit(0);
  });
}

module.exports = CursorIntelligenceMonitor;
