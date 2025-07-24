#!/usr/bin/env node

const { spawn } = require('child_process');
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');
const fs = require('fs');

class ImprovedAutomationOrchestrator {
  constructor() {
    this.port = 3008;
    this.automationSystems = new Map();
    this.portManager = new PortManager();
    this.app = express();
    this.server = null;
    this.io = null;
    this.isRunning = false;
    
    this.systemConfigs = {
      continuous-improvement': {
        script: continuous-improvement/index.js',
        name: Continuous Improvement System',
        description: Monitors and improves code quality, performance, and security',
        autoRestart: true,
        maxRestarts: 5
      },
      enhanced-infinite-improvement': {
        script: enhanced-infinite-improvement.js',
        name: Enhanced Infinite Improvement Loop',
        description: AI-powered continuous improvement with learning capabilities',
        autoRestart: true,
        maxRestarts: 3
      },
      autonomous-system': {
        script: autonomous-system.js',
        name: Autonomous Automation System',
        description: Multi-module autonomous system for various tasks',
        autoRestart: true,
        maxRestarts: 5
      },
      intelligent-orchestrator': {
        script: intelligent-automation-orchestrator.js',
        name: Intelligent Automation Orchestrator',
        description: Coordinates and manages all automation systems',
        autoRestart: false,
        maxRestarts: 1
      }
    };
  }

  async initialize() {
    console.log('🚀 Initializing Improved Automation Orchestrator...');
    
    // Setup Express server
    this.setupExpressServer();
    
    // Setup WebSocket
    this.setupWebSocket();
    
    // Setup health endpoints
    this.setupHealthEndpoints();
    
    // Initialize automation systems
    await this.initializeAutomationSystems();
    
    console.log('✅ Improved Automation Orchestrator initialized successfully');
  }

  setupExpressServer() {
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, ..')));
    
    this.server = this.app.listen(this.port, () => {
      console.log(`🌐 Improved Automation Orchestrator running on port ${this.port}`);
    });
  }

  setupWebSocket() {
    this.io = socketIo(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });

    this.io.on('connection', (socket) => {
      console.log('🔌 Client connected to orchestrator');
      
      socket.on('get-status', () => {
        socket.emit('status-update', this.getSystemStatus());
      });
      
      socket.on('start-system', (systemName) => {
        this.startSystem(systemName);
      });
      
      socket.on('stop-system', (systemName) => {
        this.stopSystem(systemName);
      });
      
      socket.on('restart-system', (systemName) => {
        this.restartSystem(systemName);
      });
    });
  }

  setupHealthEndpoints() {
    this.app.get('/health', (req, res) => {
      res.json({
        status: healthy',
        timestamp: new Date().toISOString(),
        systems: this.getSystemStatus(),
        orchestrator: {
          port: this.port,
          uptime: process.uptime(),
          memory: process.memoryUsage()
        }
      });
    });

    this.app.get('/api/systems', (req, res) => {
      res.json(this.getSystemStatus());
    });

    this.app.post('/api/systems/:name/start', (req, res) => {
      const systemName = req.params.name;
      this.startSystem(systemName);
      res.json({ success: true, message: `Starting ${systemName}` });
    });

    this.app.post('/api/systems/:name/stop', (req, res) => {
      const systemName = req.params.name;
      this.stopSystem(systemName);
      res.json({ success: true, message: `Stopping ${systemName}` });
    });

    this.app.post('/api/systems/:name/restart', (req, res) => {
      const systemName = req.params.name;
      this.restartSystem(systemName);
      res.json({ success: true, message: `Restarting ${systemName}` });
    });
  }

  async initializeAutomationSystems() {
    console.log('🤖 Initializing automation systems...');
    
    for (const [systemName, config] of Object.entries(this.systemConfigs)) {
      if (systemName === intelligent-orchestrator') continue; // Skip self
      
      const system = {
        name: systemName,
        config: config,
        process: null,
        status: stopped',
        restarts: 0,
        lastStart: null,
        lastError: null,
        logs: []
      };
      
      this.automationSystems.set(systemName, system);
    }
    
    console.log(`✅ Initialized ${this.automationSystems.size} automation systems`);
  }

  async startSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      console.error(`❌ System ${systemName} not found`);
      return false;
    }

    if (system.status === running') {
      console.log(`⚠️  System ${systemName} is already running`);
      return true;
    }

    try {
      console.log(`🚀 Starting ${systemName}...`);
      
      const scriptPath = path.join(__dirname, system.config.script);
      if (!fs.existsSync(scriptPath)) {
        throw new Error(`Script not found: ${scriptPath}`);
      }

      const child = spawn('node', [scriptPath], {
        cwd: __dirname,
        stdio: ['pipe', pipe', pipe'],
        env: { ...process.env, NODE_ENV: production' }
      });

      system.process = child;
      system.status = starting';
      system.lastStart = new Date();
      system.lastError = null;

      child.stdout.on('data', (data) => {
        const log = data.toString().trim();
        system.logs.push({ timestamp: new Date(), type: stdout', message: log });
        if (system.logs.length > 100) system.logs.shift();
        console.log(`[${systemName}] ${log}`);
      });

      child.stderr.on('data', (data) => {
        const log = data.toString().trim();
        system.logs.push({ timestamp: new Date(), type: stderr', message: log });
        if (system.logs.length > 100) system.logs.shift();
        console.error(`[${systemName}] ERROR: ${log}`);
      });

      child.on('close', (code) => {
        system.status = stopped';
        system.process = null;
        
        if (code !== 0) {
          system.lastError = `Process exited with code ${code}`;
          console.error(`❌ System ${systemName} exited with code ${code}`);
          
          if (system.config.autoRestart && system.restarts < system.config.maxRestarts) {
            system.restarts++;
            console.log(`🔄 Auto-restarting ${systemName} (attempt ${system.restarts}/${system.config.maxRestarts})`)
            setTimeout(() => this.startSystem(systemName), 5000);
          }
        }
        
        this.broadcastStatus();
      });

      child.on('error', (error) => {
        system.status = error';
        system.lastError = error.message;
        console.error(`❌ Failed to start ${systemName}:`, error.message);
        this.broadcastStatus();
      });

      // Wait for system to start
      await this.waitForSystemStart(systemName);
      
      if (system.status === running') {
        console.log(`✅ ${systemName} started successfully`);
        this.broadcastStatus();
        return true;
      } else {
        throw new Error(`System failed to start properly`);
      }
      
    } catch (error) {
      system.status = error';
      system.lastError = error.message;
      console.error(`❌ Failed to start ${systemName}:`, error.message);
      this.broadcastStatus();
      return false;
    }
  }

  async waitForSystemStart(systemName, timeout = 30000) {
    const system = this.automationSystems.get(systemName);
    const startTime = Date.now();
    
    return new Promise((resolve) => {
      const checkStatus = () => {
        if (system.status === running') {
          resolve(true);
        } else if (Date.now() - startTime > timeout) {
          resolve(false);
        } else {
          setTimeout(checkStatus, 1000);
        }
      };
      
      checkStatus();
    });
  }

  stopSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system || !system.process) {
      console.log(`⚠️  System ${systemName} is not running`);
      return false;
    }

    console.log(`🛑 Stopping ${systemName}...`);
    system.process.kill('SIGTERM');
    system.status = stopping';
    this.broadcastStatus();
    return true;
  }

  restartSystem(systemName) {
    console.log(`🔄 Restarting ${systemName}...`);
    this.stopSystem(systemName);
    setTimeout(() => this.startSystem(systemName), 2000);
  }

  getSystemStatus() {
    const status = {};
    for (const [name, system] of this.automationSystems) {
      status[name] = {
        name: system.config.name,
        description: system.config.description,
        status: system.status,
        restarts: system.restarts,
        lastStart: system.lastStart,
        lastError: system.lastError,
        uptime: system.lastStart ? Date.now() - system.lastStart.getTime() : 0
      };
    }
    return status;
  }

  broadcastStatus() {
    if (this.io) {
      this.io.emit('status-update', this.getSystemStatus());
    }
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️  Orchestrator is already running');
      return;
    }

    await this.initialize();
    this.isRunning = true;

    // Start all automation systems
    console.log('🚀 Starting all automation systems...');
    for (const systemName of this.automationSystems.keys()) {
      await this.startSystem(systemName);
      await this.sleep(2000); // Wait between starts
    }

    console.log('✅ All automation systems started');
    console.log(`📊 Dashboard: http://localhost:${this.port}`);
    console.log(`🔗 API: http://localhost:${this.port}/health`);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

class PortManager {
  constructor() {
    this.usedPorts = new Set();
  }

  async findAvailablePort(startPort = 3000) {
    const net = require('net');
    
    for (let port = startPort; port < startPort + 100; port++) {
      if (this.usedPorts.has(port)) continue;
      
      try {
        await this.isPortAvailable(port);
        this.usedPorts.add(port);
        return port;
      } catch (error) {
        continue;
      }
    }
    
    throw new Error('No available ports found')
  }

  isPortAvailable(port) {
    return new Promise((resolve, reject) => {
      const server = require('net').createServer();
      
      server.listen(port, () => {
        server.close();
        resolve(port);
      });
      
      server.on('error', () => {
        reject(new Error(`Port ${port} is not available`));
      });
    });
  }

  releasePort(port) {
    this.usedPorts.delete(port);
  }
}

// Start the orchestrator
if (require.main === module) {
  const orchestrator = new ImprovedAutomationOrchestrator();
  
  orchestrator.start().catch(error => {
    console.error('❌ Failed to start Improved Automation Orchestrator:', error);
    process.exit(1);
  });
}

module.exports = ImprovedAutomationOrchestrator; 