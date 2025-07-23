const express = require('express');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const path = require('path');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const EventEmitter = require('events');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const fs = require('fs'); // Added missing import for fs'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

class DashboardServer extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      port: process.env.DASHBOARD_PORT || 3001,
      host: process.env.DASHBOARD_HOST || 'localhost','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      enableCORS: true,
      enableWebSocket: true,
      staticPath: path.join(__dirname, 'public'),'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      apiPrefix: '/api','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      auth: {
        enabled: false,
        username: process.env.DASHBOARD_USERNAME,
        password: process.env.DASHBOARD_PASSWORD
      },
      ...config
    };
    
    this.app = express();
    this.server = null;
    this.clients = new Set();
    this.automationManager = null;
    this.taskScheduler = null;
    this.notificationManager = null;
    this.anomalyDetector = null;
    this.reportGenerator = null;
    
    this.setupMiddleware();
    this.setupRoutes();
    this.setupWebSocket();
  }

  setupMiddleware() {
    // CORS
    if (this.config.enableCORS) {
      this.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        if (req.method === 'OPTIONS') {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          res.sendStatus(200);
        } else {
          next();
        }
      });
    }

    // Body parsing
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Static files
    if (fs.existsSync(this.config.staticPath)) {
      this.app.use(express.static(this.config.staticPath));
    }

    // Basic auth
    if (this.config.auth.enabled && this.config.auth.username && this.config.auth.password) {
      this.app.use(this.basicAuth);
    }

    // Logging
    this.app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
      next();
    });
  }

  setupRoutes() {
    const api = this.config.apiPrefix;

    // Health check
    this.app.get(`${api}/health`, (req, res) => {
      res.json({
        status: 'healthy','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      });
    });

    // System status
    this.app.get(`${api}/status`, (req, res) => {
      res.json(this.getSystemStatus());
    });

    // Task management
    this.app.get(`${api}/tasks`, (req, res) => {
      res.json(this.getTasksStatus());
    });

    this.app.post(`${api}/tasks/:taskName/run`, async (req, res) => {
      try {
        const { taskName } = req.params;
        const result = await this.runTask(taskName);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post(`${api}/tasks/:taskName/pause`, (req, res) => {
      try {
        const { taskName } = req.params;
        const result = this.pauseTask(taskName);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post(`${api}/tasks/:taskName/resume`, (req, res) => {
      try {
        const { taskName } = req.params;
        const result = this.resumeTask(taskName);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Scheduling
    this.app.get(`${api}/scheduling`, (req, res) => {
      res.json(this.getSchedulingStatus());
    });

    this.app.post(`${api}/scheduling/recalculate`, (req, res) => {
      try {
        const result = this.recalculateScheduling();
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Anomalies
    this.app.get(`${api}/anomalies`, (req, res) => {
      res.json(this.getAnomaliesStatus());
    });

    // Notifications
    this.app.get(`${api}/notifications`, (req, res) => {
      res.json(this.getNotificationsStatus());
    });

    this.app.post(`${api}/notifications/test`, async (req, res) => {
      try {
        const result = await this.sendTestNotification();
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Reports
    this.app.get(`${api}/reports`, (req, res) => {
      res.json(this.getReportsStatus());
    });

    this.app.post(`${api}/reports/generate`, async (req, res) => {
      try {
        const { type = 'daily' } = req.body;'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        const result = await this.generateReport(type);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // System controls
    this.app.post(`${api}/system/restart`, (req, res) => {
      try {
        this.restartSystem();
        res.json({ message: 'System restart initiated' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post(`${api}/system/shutdown`, (req, res) => {
      try {
        this.shutdownSystem();
        res.json({ message: 'System shutdown initiated' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Configuration
    this.app.get(`${api}/config`, (req, res) => {
      res.json(this.getConfiguration());
    });

    this.app.put(`${api}/config`, (req, res) => {
      try {
        const result = this.updateConfiguration(req.body);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Logs
    this.app.get(`${api}/logs`, (req, res) => {
      const { limit = 100, level } = req.query;
      res.json(this.getLogs(limit, level));
    });

    // Metrics
    this.app.get(`${api}/metrics`, (req, res) => {
      res.json(this.getMetrics());
    });

    // WebSocket endpoint
    if (this.config.enableWebSocket) {
      this.app.get(`${api}/ws`, (req, res) => {
        res.json({ message: 'WebSocket endpoint available at /ws' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      });
    }

    // Catch-all for SPA
    this.app.get('*', (req, res) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      res.sendFile(path.join(this.config.staticPath, 'index.html'));'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    });
  }

  setupWebSocket() {
    if (!this.config.enableWebSocket) return;

    const WebSocket = require('ws');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    this.wss = new WebSocket.Server({ noServer: true });

    this.wss.on('connection', (ws) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      console.log('🔌 WebSocket client connected');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      this.clients.add(ws);

      // Send initial status
      ws.send(JSON.stringify({
        type: 'status','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        data: this.getSystemStatus()
      }));

      ws.on('message', (message) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        try {
          const data = JSON.parse(message);
          this.handleWebSocketMessage(ws, data);
        } catch (error) {
          console.error('WebSocket message error:', error);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        }
      });

      ws.on('close', () => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        console.log('🔌 WebSocket client disconnected');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        this.clients.delete(ws);
      });
    });
  }

  handleWebSocketMessage(ws, data) {
    switch (data.type) {
      case 'subscribe':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        // Handle subscription to specific events
        break;
      case 'command':'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        // Handle commands
        this.handleCommand(data.command, data.params);
        break;
      default:
        console.log('Unknown WebSocket message type:', data.type);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  broadcastUpdate(type, data) {
    if (!this.config.enableWebSocket) return;

    const message = JSON.stringify({ type, data });
    this.clients.forEach(client => {
      if (client.readyState === 1) { // OPEN
        client.send(message);
      }
    });
  }

  // API Methods
  getSystemStatus() {
    return {
      status: 'running','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      environment: process.env.NODE_ENV || 'development','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      components: {
        automationManager: !!this.automationManager,
        taskScheduler: !!this.taskScheduler,
        notificationManager: !!this.notificationManager,
        anomalyDetector: !!this.anomalyDetector,
        reportGenerator: !!this.reportGenerator
      }
    };
  }

  getTasksStatus() {
    if (!this.automationManager) {
      return { error: 'Automation manager not available' };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return {
      tasks: this.automationManager.getTasksStatus(),
      scheduler: this.taskScheduler ? this.taskScheduler.getSchedulingStats() : null
    };
  }

  async runTask(taskName) {
    if (!this.automationManager) {
      throw new Error('Automation manager not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return await this.automationManager.runTask(taskName);
  }

  pauseTask(taskName) {
    if (!this.automationManager) {
      throw new Error('Automation manager not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return this.automationManager.pauseTask(taskName);
  }

  resumeTask(taskName) {
    if (!this.automationManager) {
      throw new Error('Automation manager not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return this.automationManager.resumeTask(taskName);
  }

  getSchedulingStatus() {
    if (!this.taskScheduler) {
      return { error: 'Task scheduler not available' };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return this.taskScheduler.getSchedulingStats();
  }

  recalculateScheduling() {
    if (!this.taskScheduler) {
      throw new Error('Task scheduler not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return this.taskScheduler.recalculateAllIntervals();
  }

  getAnomaliesStatus() {
    if (!this.anomalyDetector) {
      return { error: 'Anomaly detector not available' };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return {
      stats: this.anomalyDetector.getAnomalyStats(),
      recent: this.anomalyDetector.getRecentAnomalies(20),
      healthScore: this.anomalyDetector.getHealthScore()
    };
  }

  getNotificationsStatus() {
    if (!this.notificationManager) {
      return { error: 'Notification manager not available' };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return {
      stats: this.notificationManager.getNotificationStats(),
      recent: this.notificationManager.getRecentNotifications(20)
    };
  }

  async sendTestNotification() {
    if (!this.notificationManager) {
      throw new Error('Notification manager not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return await this.notificationManager.sendNotification(
      'Test notification from dashboard','''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      { priority: 'medium', category: 'info', taskName: 'dashboard' }'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    );
  }

  getReportsStatus() {
    if (!this.reportGenerator) {
      return { error: 'Report generator not available' };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return {
      history: this.reportGenerator.getReportHistory(10),
      lastReport: this.reportGenerator.lastReportTime
    };
  }

  async generateReport(type) {
    if (!this.reportGenerator) {
      throw new Error('Report generator not available');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    return await this.reportGenerator.generateReport(type);
  }

  restartSystem() {
    this.emit('restart');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    console.log('🔄 System restart initiated');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }

  shutdownSystem() {
    this.emit('shutdown');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    console.log('🛑 System shutdown initiated');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }

  getConfiguration() {
    return {
      dashboard: this.config,
      automation: this.automationManager?.config || {},
      scheduler: this.taskScheduler?.config || {},
      notifications: this.notificationManager?.config || {},
      anomalies: this.anomalyDetector?.config || {},
      reports: this.reportGenerator?.config || {}
    };
  }

  updateConfiguration(newConfig) {
    // This would update the configuration and restart affected components
    console.log('⚙️ Configuration update requested:', newConfig);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    return { message: 'Configuration update initiated' };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }

  getLogs(limit = 100, level) {
    // This would return recent logs from the system
    return {
      logs: [],
      total: 0,
      level: level || 'all''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    };
  }

  getMetrics() {
    return {
      system: {
        cpu: process.cpuUsage(),
        memory: process.memoryUsage(),
        uptime: process.uptime()
      },
      automation: this.automationManager?.getMetrics() || {},
      scheduler: this.taskScheduler?.getSchedulingStats() || {},
      anomalies: this.anomalyDetector?.getAnomalyStats() || {},
      notifications: this.notificationManager?.getNotificationStats() || {}
    };
  }

  // Middleware
  basicAuth(req, res, next) {
    const auth = req.headers.authorization;
    
    if (!auth) {
      res.setHeader('WWW-Authenticate', 'Basic');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      return res.status(401).send('Authentication required');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }

    const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString();'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    const [username, password] = credentials.split(':');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    if (username === this.config.auth.username && password === this.config.auth.password) {
      next();
    } else {
      res.setHeader('WWW-Authenticate', 'Basic');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      res.status(401).send('Invalid credentials');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    }
  }

  // Lifecycle methods
  setComponents(automationManager, taskScheduler, notificationManager, anomalyDetector, reportGenerator) {
    this.automationManager = automationManager;
    this.taskScheduler = taskScheduler;
    this.notificationManager = notificationManager;
    this.anomalyDetector = anomalyDetector;
    this.reportGenerator = reportGenerator;
  }

  async start() {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(this.config.port, this.config.host, () => {
          console.log(`🌐 Dashboard server running at http://${this.config.host}:${this.config.port}`);
          resolve();
        });

        // Setup WebSocket server
        if (this.config.enableWebSocket && this.server) {
          this.server.on('upgrade', (request, socket, head) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
            this.wss.handleUpgrade(request, socket, head, (ws) => {
              this.wss.emit('connection', ws, request);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
            });
          });
        }

      } catch (error) {
        reject(error);
      }
    });
  }

  async stop() {
    return new Promise((resolve) => {
      if (this.server) {
        this.server.close(() => {
          console.log('🛑 Dashboard server stopped');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
}

module.exports = DashboardServer; 