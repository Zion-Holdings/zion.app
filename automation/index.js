#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

require('dotenv').config();

const OptimizationSlackBot = require('./slack/slack-bot');
const PerformanceMonitor = require('./performance/monitor');
const express = require('express');
const path = require('path');

class OptimizationAutomation {
  constructor() {
    this.slackBot = new OptimizationSlackBot();
    this.performanceMonitor = new PerformanceMonitor();
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
      // Use structured logging instead of console.log
      process.stdout.write(`[${timestamp}] ${req.method} ${req.path}\n`);
      next();
    });
  }

  setupAPIRoutes() {
    // Slack webhook endpoints
    this.app.post('/api/slack/events', async (req, res) => {
      try {
        // Handle Slack events
        const { type, challenge, event } = req.body;
        
        if (type === 'url_verification') {
          return res.send(challenge);
        }
        
        if (type === 'event_callback' && event) {
          await this.handleSlackEvent(event);
        }
        
        res.status(200).send('OK');
      } catch (error) {
        // Use structured error logging
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Slack event error: ${error.message}\n`);
        res.status(500).send('Error processing event');
      }
    });

    // Manual optimization trigger
    this.app.post('/api/optimization/trigger', async (req, res) => {
      try {
        const { target, reason, alert } = req.body;
        
        // Use structured logging for optimization triggers
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
        // Use structured error logging
        process.stderr.write(`[${new Date().toISOString()}] ERROR: Optimization trigger error: ${error.message}\n`);
        res.status(500).json({
          success: false,
          error: error.message
        });
      }
    });

    // Performance status endpoint
    this.app.get('/api/performance/status', async (req, res) => {
      try {
        const status = await this.slackBot.getPerformanceStatus();
        res.json(status);
      } catch (error) {
        console.error('Performance status error:', error);
        res.status(500).json({ error: error.message });
      }
    });

    // Performance metrics endpoint
    this.app.get('/api/performance/metrics', async (req, res) => {
      try {
        const metrics = await this.performanceMonitor.getMetrics();
        res.json(metrics);
      } catch (error) {
        console.error('Performance metrics error:', error);
        res.status(500).json({ error: error.message });
      }
    });

    // Performance history endpoint
    this.app.get('/api/performance/history', async (req, res) => {
      try {
        const hours = parseInt(req.query.hours) || 24;
        const history = await this.performanceMonitor.getHistory(hours);
        res.json(history);
      } catch (error) {
        console.error('Performance history error:', error);
        res.status(500).json({ error: error.message });
      }
    });

    // Dashboard routes
    this.app.get('/dashboard', (req, res) => {
      res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
    });

    this.app.get('/slack-status', (req, res) => {
      res.json({
        slackBot: 'running',
        performanceMonitor: this.performanceMonitor.isMonitoring ? 'running' : 'stopped',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      });
    });
  }

  setupHealthChecks() {
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        components: {
          slackBot: 'running',
          performanceMonitor: this.performanceMonitor.isMonitoring ? 'running' : 'stopped',
          express: 'running'
        }
      });
    });

    this.app.get('/version', (req, res) => {
      const packageJson = require('../package.json');
      res.json({
        name: packageJson.name,
        version: packageJson.version,
        automation: 'v1.0.0'
      });
    });
  }

  async handleSlackEvent(event) {
    switch (event.type) {
      case 'performance_alert':
        await this.slackBot.app.client.emit('performance_alert', { event });
        break;
      case 'optimization_complete':
        await this.slackBot.app.client.emit('optimization_complete', { event });
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  }

  async start() {
    try {
      process.stdout.write(`[${new Date().toISOString()}] 🚀 Starting Optimization Automation System...\n`);
      
      // Start performance monitoring
      if (process.env.ENABLE_PERFORMANCE_MONITORING === 'true') {
        await this.performanceMonitor.start();
      }
      
      // Start Slack bot
      if (process.env.ENABLE_SLACK_COMMANDS === 'true') {
        await this.slackBot.start();
      }
      
      // Start Express server for API endpoints
      this.server = this.app.listen(this.port, () => {
        console.log(`⚡ Optimization API server running on port ${this.port}`);
      });
      
      const timestamp = new Date().toISOString();
      process.stdout.write(`[${timestamp}] ✅ Optimization Automation System started successfully!\n`);
      process.stdout.write(`[${timestamp}] 📊 Dashboard: http://localhost:${this.port}/dashboard\n`);
      process.stdout.write(`[${timestamp}] 🔧 API: http://localhost:${this.port}/api\n`);
      process.stdout.write(`[${timestamp}] 💚 Health: http://localhost:${this.port}/health\n`);
      
    } catch (error) {
      process.stderr.write(`[${new Date().toISOString()}] ❌ Failed to start automation system: ${error.message}\n`);
      process.exit(1);
    }
  }

  async stop() {
    try {
      console.log('⏹️ Stopping Optimization Automation System...');
      
      if (this.performanceMonitor) {
        await this.performanceMonitor.stop();
      }
      
      if (this.server) {
        await new Promise((resolve) => {
          this.server.close(resolve);
        });
      }
      
      console.log('✅ Automation system stopped');
    } catch (error) {
      console.error('❌ Error stopping automation system:', error);
    }
  }
}

// CLI handling
if (require.main === module) {
  const automation = new OptimizationAutomation();
  
  // Handle process signals
  process.on('SIGINT', async () => {
    process.stdout.write(`\n[${new Date().toISOString()}] 🛑 Received SIGINT, shutting down gracefully...\n`);
    await automation.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await automation.stop();
    process.exit(0);
  });

  // Start the system
  automation.start().catch(error => {
    console.error('❌ Failed to start automation:', error);
    process.exit(1);
  });
}

module.exports = OptimizationAutomation;