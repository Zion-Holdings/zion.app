#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

require('dotenv').config();
const OptimizationSlackBot = require('./slack/slack-bot');
const PerformanceMonitor = require('./performance/monitor');
const EnhancedAutomation = require('./continuous-improvement/enhanced-automation');
const express = require('express');
const path = require('path');
class OptimizationAutomation {
  constructor() {
    this.slackBot = new OptimizationSlackBot();
    this.performanceMonitor = new PerformanceMonitor();
    this.enhancedAutomation = new EnhancedAutomation();
    this.app = express();
    this.port = process.env.PORT || 3001;
    
    this.setupExpress();
    this.setupAPIRoutes();
    this.setupHealthChecks();
  }

  setupExpress() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS and basic middleware
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    // Request logging
    this.app.use((req, res, next) => {
      const timestamp = new Date().toISOString();
      process.stdout.write(`[${timestamp}] ${req.method} ${req.path}\n`);
      next();
    });
  }

  setupAPIRoutes() {
    // Enhanced automation endpoints
    this.app.get('/api/automation/status', async (req, res) => {
      try {
        const status = this.enhancedAutomation.getStatus();
        res.json(status);
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Automation status error: ${error.message}\n`);
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/api/automation/trigger', async (req, res) => {
      try {
        const { taskType, data } = req.body;
        
        process.stdout.write(`[${new Date().toISOString()}] 🚀 Manual automation trigger: ${taskType}\n`);
        
        this.enhancedAutomation.queueTask(taskType, data);
        
        res.json({
          success: true,
          taskType,
          data,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Automation trigger error: ${error.message}\n`);
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    });

    this.app.get('/api/automation/report', async (req, res) => {
      try {
        const report = this.enhancedAutomation.generateReport();
        res.json(report);
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Report generation error: ${error.message}\n`);
        res.status(500).json({ error: error.message });
      }
    });

    // Slack webhook endpoints
    this.app.post('/api/slack/events', async (req, res) => {
      try {
        const { type, challenge, event } = req.body;
        
        if (type === 'url_verification') {
          return res.send(challenge);
        }
        
        if (type === 'event_callback' && event) {
          await this.handleSlackEvent(event);
        }
        
        res.status(200).send('OK');
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Slack event error: ${error.message}\n`);
        res.status(500).send('Error processing event');
      }
    });

    // Manual optimization trigger
    this.app.post('/api/optimization/trigger', async (req, res) => {
      try {
        const { target, reason, alert: _alert } = req.body;
        
        process.stdout.write(`[${new Date().toISOString()}] 🚀 Manual optimization triggered: ${target} (reason: ${reason})\n`);
        
        const result = await this.slackBot.triggerOptimization(target);
        
        res.json({
          success: true,
          target,
          reason,
          result,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Optimization trigger error: ${error.message}\n`);
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    });

    // Performance status endpoint
    this.app.get('/api/performance/status', async (req, res) => {'      try {
        const status = await this.slackBot.getPerformanceStatus();
        res.json(status);
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Performance status error: ${error.message}\n`);
        res.status(500).json({ error: error.message });
      }
    });

    // Performance metrics endpoint
    this.app.get('/api/performance/metrics', async (req, res) => {'      try {
        const metrics = await this.performanceMonitor.getMetrics();
        res.json(metrics);
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Performance metrics error: ${error.message}\n`);
        res.status(500).json({ error: error.message });
      }
    });

    // Performance history endpoint
    this.app.get('/api/performance/history', async (req, res) => {'      try {
        const hours = parseInt(req.query.hours) || 24;
        const history = await this.performanceMonitor.getHistory(hours);
        res.json(history);
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Performance history error: ${error.message}\n`);
        res.status(500).json({ error: error.message });
      }
    });

    // Dashboard routes
    this.app.get('/dashboard', (req, res) => {'      res.sendFile(path.join(__dirname, 'continuous-improvement', 'dashboard', 'index.html'));'    });

    this.app.get('/slack-status', (req, res) => {'      res.json({
        slackBot: 'running','        performanceMonitor: this.performanceMonitor.isMonitoring ? 'running' : 'stopped','        enhancedAutomation: this.enhancedAutomation.isRunning ? 'running' : 'stopped','        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      });
    });
  }

  setupHealthChecks() {
    this.app.get('/health', (req, res) => {'      res.json({
        status: 'healthy','        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        components: {
          slackBot: 'running','          performanceMonitor: this.performanceMonitor.isMonitoring ? 'running' : 'stopped','          enhancedAutomation: this.enhancedAutomation.isRunning ? 'running' : 'stopped','          express: 'running''        }
      });
    });

    this.app.get('/version', (req, res) => {'      const packageJson = require('../package.json');'      res.json({
        name: packageJson.name,
        version: packageJson.version,
        automation: 'v2.0.0','        enhanced: true
      });
    });
  }

  async handleSlackEvent(event) {
    switch (event.type) {
      case 'performance_alert':'        await this.slackBot.app.client.emit('performance_alert', { event });'        break;
      case 'optimization_complete':'        await this.slackBot.app.client.emit('optimization_complete', { event });'        break;
      case 'automation_trigger':'        // Handle automation triggers from Slack
        if (event.text && event.text.includes('/automation')) {'          const taskType = this.parseSlackAutomationCommand(event.text);
          if (taskType) {
            this.enhancedAutomation.queueTask(taskType);
          }
        }
        break;
      default:
        process.stdout.write(`[${new Date().toISOString()}] ⚠️ Unhandled event type: ${event.type}\n`);
    }
  }

  parseSlackAutomationCommand(text) {
    const commands = {
      '/automation quick': 'quickScan','      '/automation deep': 'deepAnalysis','      '/automation full': 'fullAudit','      '/automation performance': 'performanceCheck','      '/automation security': 'securityScan','      '/automation dependencies': 'dependencyCheck''    };

    for (const [command, taskType] of Object.entries(commands)) {
      if (text.includes(command)) {
        return taskType;
      }
    }

    return null;
  }

  async start() {
    try {
      process.stdout.write(`[${new Date().toISOString()}] 🚀 Starting Enhanced Optimization Automation System...\n`);
      
      // Start enhanced automation
      await this.enhancedAutomation.start();
      
      // Start performance monitoring
      if (process.env.ENABLE_PERFORMANCE_MONITORING === 'true') {'        await this.performanceMonitor.start();
      }
      
      // Start Slack bot
      if (process.env.ENABLE_SLACK_COMMANDS === 'true') {'        await this.slackBot.start();
      }
      
      // Start Express server for API endpoints
      this.server = this.app.listen(this.port, () => {
        process.stdout.write(`[${new Date().toISOString()}] ⚡ Enhanced Optimization API server running on port ${this.port}\n`);
      });
      
      const timestamp = new Date().toISOString();
      process.stdout.write(`[${timestamp}] ✅ Enhanced Optimization Automation System started successfully!\n`);
      process.stdout.write(`[${timestamp}] 📊 Dashboard: http://localhost:${this.port}/dashboard\n`);
      process.stdout.write(`[${timestamp}] 🔗 Health Check: http://localhost:${this.port}/health\n`);
      process.stdout.write(`[${timestamp}] 📈 API Status: http://localhost:${this.port}/api/automation/status\n`);
      
      // Set up graceful shutdown
      this.setupGracefulShutdown();
      
    } catch (error) {
      process.stderr.write(`[${new Date().toISOString()}] ❌ Failed to start Enhanced Optimization Automation System: ${error.message}\n`);
      throw error;
    }
  }

  setupGracefulShutdown() {
    const shutdown = async (signal) => {
      process.stdout.write(`\n[${new Date().toISOString()}] 🛑 Received ${signal}. Shutting down gracefully...\n`);
      
      try {
        // Stop enhanced automation
        if (this.enhancedAutomation) {
          await this.enhancedAutomation.stop();
        }
        
        // Stop performance monitor
        if (this.performanceMonitor) {
          this.performanceMonitor.stop();
        }
        
        // Stop Slack bot
        if (this.slackBot) {
          await this.slackBot.stop();
        }
        
        // Close server
        if (this.server) {
          this.server.close();
        }
        
        process.stdout.write(`[${new Date().toISOString()}] ✅ Shutdown completed successfully\n`);
        process.exit(0);
      } catch (error) {
        process.stderr.write(`[${new Date().toISOString()}] ❌ Error during shutdown: ${error.message}\n`);
        process.exit(1);
      }
    };
    
    process.on('SIGINT', () => shutdown('SIGINT'));'    process.on('SIGTERM', () => shutdown('SIGTERM'));'    process.on('SIGQUIT', () => shutdown('SIGQUIT'));'  }

  async stop() {
    process.stdout.write(`[${new Date().toISOString()}] 🛑 Stopping Enhanced Optimization Automation System...\n`);
    
    try {
      // Stop enhanced automation
      if (this.enhancedAutomation) {
        await this.enhancedAutomation.stop();
      }
      
      // Stop performance monitor
      if (this.performanceMonitor) {
        this.performanceMonitor.stop();
      }
      
      // Stop Slack bot
      if (this.slackBot) {
        await this.slackBot.stop();
      }
      
      // Close server
      if (this.server) {
        this.server.close();
      }
      
      process.stdout.write(`[${new Date().toISOString()}] ✅ Enhanced Optimization Automation System stopped successfully\n`);
    } catch (error) {
      process.stderr.write(`[${new Date().toISOString()}] ❌ Error stopping system: ${error.message}\n`);
      throw error;
    }
  }

  getStatus() {
    return {
      enhancedAutomation: this.enhancedAutomation.getStatus(),
      performanceMonitor: {
        isMonitoring: this.performanceMonitor.isMonitoring,
        metrics: this.performanceMonitor.getMetrics()
      },
      slackBot: {
        isRunning: this.slackBot.isRunning,
        status: 'running''      },
      server: {
        port: this.port,
        status: 'running''      },
      timestamp: new Date().toISOString()
    };
  }
}

// Export the automation system
module.exports = OptimizationAutomation;

// Start the system if this file is executed directly
if (require.main === module) {
  const automation = new OptimizationAutomation();
  
  automation.start().catch(error => {
    process.stderr.write(`[${new Date().toISOString()}] ❌ Failed to start automation: ${error.message}\n`);
    process.exit(1);
  });
}