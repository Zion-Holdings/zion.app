const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

/**
 * Automation API Server
 *
 * REST API server for the automation scripts manager dashboard
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
const AutomationScriptsManager = require('./automation-scripts-manager.cjs');

class AutomationAPIServer {
  constructor() {
    this.app = express();
    this.manager = new AutomationScriptsManager();
    this.port = 3004;
    this.logs = [];
    this.logId = 0;

    this.setupMiddleware();
    this.setupRoutes();
    this.setupEventHandlers();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '../automation')));
  }

  setupRoutes() {
    // Health check
    this.app.get('/api/health', (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    // Manager status
    this.app.get('/api/automation/status', (req, res) => {
      try {
        const status = this.manager.getStatus();
        res.json(status);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Start manager
    this.app.post('/api/automation/start', async (req, res) => {
      try {
        await this.manager.start();
        res.json({ success: true, message: 'Manager started successfully' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Stop manager
    this.app.post('/api/automation/stop', async (req, res) => {
      try {
        await this.manager.stop();
        res.json({ success: true, message: 'Manager stopped successfully' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Discover scripts
    this.app.post('/api/automation/discover', async (req, res) => {
      try {
        const scripts = await this.manager.discoverScripts();
        res.json({
          success: true,
          scripts: Array.from(scripts.values()),
          message: `Discovered ${scripts.size} scripts`,
        });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Get all scripts
    this.app.get('/api/automation/scripts', (req, res) => {
      try {
        const scripts = Array.from(this.manager.scripts.values());
        res.json(scripts);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Start specific script
    this.app.post('/api/automation/script/start', async (req, res) => {
      try {
        const { scriptPath } = req.body;
        if (!scriptPath) {
          return res
            .status(400)
            .json({ success: false, error: 'Script path is required' });
        }

        await this.manager.startScript(scriptPath);
        res.json({ success: true, message: 'Script started successfully' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Stop specific script
    this.app.post('/api/automation/script/stop', async (req, res) => {
      try {
        const { scriptPath } = req.body;
        if (!scriptPath) {
          return res
            .status(400)
            .json({ success: false, error: 'Script path is required' });
        }

        await this.manager.stopScript(scriptPath);
        res.json({ success: true, message: 'Script stopped successfully' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Improve specific script
    this.app.post('/api/automation/script/improve', async (req, res) => {
      try {
        const { scriptPath } = req.body;
        if (!scriptPath) {
          return res
            .status(400)
            .json({ success: false, error: 'Script path is required' });
        }

        const result = await this.manager.improveScript(scriptPath);
        res.json({
          success: result.success,
          improvements: result.improvements,
          message: result.success
            ? 'Script improved successfully'
            : result.error,
        });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Improve all scripts
    this.app.post('/api/automation/improve', async (req, res) => {
      try {
        const results = await this.manager.improveAllScripts();
        const successful = results.filter((r) => r.result.success).length;

        res.json({
          success: true,
          improvements: results,
          message: `Improved ${successful}/${results.length} scripts`,
        });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    });

    // Get improvements
    this.app.get('/api/automation/improvements', (req, res) => {
      try {
        res.json(this.manager.improvements);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get logs
    this.app.get('/api/automation/logs', (req, res) => {
      try {
        res.json(this.logs);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Generate report
    this.app.get('/api/automation/report', (req, res) => {
      try {
        const report = this.manager.generateReport();
        res.json(report);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Serve dashboard
    this.app.get('/', (req, res) => {
      res.sendFile(
        path.join(__dirname, '../automation/automation-dashboard.html'),
      );
    });

    // Error handler
    this.app.use((error, req, res, next) => {
      logger.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
  }

  setupEventHandlers() {
    // Capture manager logs
    this.manager.on('log', (logData) => {
      this.addLog(logData.message, logData.level);
    });

    // Capture script events
    this.manager.on('scriptStarted', ({ script, processInfo }) => {
      this.addLog(`Script started: ${script.name}`, 'info');
    });

    this.manager.on('scriptCompleted', ({ script, processInfo, code }) => {
      const status = code === 0 ? 'completed successfully' : 'failed';
      this.addLog(
        `Script ${status}: ${script.name}`,
        code === 0 ? 'info' : 'error',
      );
    });

    this.manager.on('scriptImproved', ({ script, improvements }) => {
      this.addLog(
        `Script improved: ${script.name} (${improvements.join(', ')})`,
        'info',
      );
    });

    this.manager.on('improvementCycleCompleted', (results) => {
      const successful = results.filter((r) => r.result.success).length;
      this.addLog(
        `Improvement cycle completed: ${successful}/${results.length} scripts improved`,
        'info',
      );
    });
  }

  addLog(message, level = 'info') {
    const logEntry = {
      id: ++this.logId,
      message,
      level,
      timestamp: new Date().toISOString(),
    };

    this.logs.push(logEntry);

    // Keep only last 1000 logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }
  }

  async start() {
    try {
      // Start the manager
      await this.manager.start();

      // Start the API server
      this.server = this.app.listen(this.port, () => {
        logger.info(
          `🚀 Automation API Server running on http://localhost:${this.port}`,
        );
        logger.info(`📊 Dashboard available at http://localhost:${this.port}`);
        this.addLog(`API Server started on port ${this.port}`, 'info');
      });
    } catch (error) {
      logger.error('Failed to start API server:', error);
      throw error;
    }
  }

  async stop() {
    try {
      // Stop the manager
      await this.manager.stop();

      // Stop the server
      if (this.server) {
        this.server.close();
      }

      this.addLog('API Server stopped', 'info');
      logger.info('🛑 Automation API Server stopped');
    } catch (error) {
      logger.error('Error stopping API server:', error);
      throw error;
    }
  }
}

// Start the server if run directly
if (require.main === module) {
  const server = new AutomationAPIServer();

  server.start().catch((error) => {
    logger.error('Failed to start server:', error);
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    logger.info('\n🛑 Shutting down API server...');
    await server.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    logger.info('\n🛑 Received SIGTERM, shutting down...');
    await server.stop();
    process.exit(0);
  });
}

module.exports = AutomationAPIServer;
