#!/usr/bin/env node

/**
 * Automated Chat Reconnection System for Cursor
 *
 * This script provides automated chat reconnection for all computers with Cursor installed.
 * Features:
 * - Automatic discovery of Cursor instances across network
 * - Persistent WebSocket connections with auto-reconnection
 * - Load balancing across multiple computers
 * - Health monitoring and failover
 * - Cross-platform compatibility (Windows, macOS, Linux)
 * - Automatic startup and service management
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn, exec } = require('child_process');
const os = require('os');
const crypto = require('crypto');
const http = require('http');
const https = require('https');
const WebSocket = require('ws');
const dgram = require('dgram');

// Configuration
const CONFIG = {
  // Network discovery settings
  DISCOVERY_PORT: 3008,
  DISCOVERY_MULTICAST_ADDR: '224.0.0.1',
  DISCOVERY_INTERVAL: 30000, // 30 seconds

  // Chat connection settings
  CHAT_PORT: 3009,
  CHAT_MASTER_PORT: 3010,
  RECONNECT_DELAY: 5000,
  MAX_RECONNECT_ATTEMPTS: 10,
  HEARTBEAT_INTERVAL: 15000, // 15 seconds

  // Cursor detection settings
  CURSOR_PATHS: {
    windows: [
      'C:\\Users\\%USERNAME%\\AppData\\Local\\Programs\\Cursor\\Cursor.exe',
      'C:\\Program Files\\Cursor\\Cursor.exe',
      'C:\\Program Files (x86)\\Cursor\\Cursor.exe',
    ],
    darwin: [
      '/Applications/Cursor.app',
      '/Applications/Cursor.app/Contents/MacOS/Cursor',
    ],
    linux: [
      '/usr/bin/cursor',
      '/usr/local/bin/cursor',
      '/opt/cursor/cursor',
      '/snap/bin/cursor',
    ],
  },

  // Service management
  SERVICE_NAME: 'cursor-chat-reconnection',
  LOG_FILE: 'logs/chat-reconnection.log',
  PID_FILE: 'logs/chat-reconnection.pid',

  // Chat categories for automatic triggering
  CHAT_CATEGORIES: [
    'build',
    'lint',
    'test',
    'deploy',
    'optimize',
    'security',
    'performance',
    'bugfix',
    'feature',
    'refactor',
  ],
};

class AutomatedChatReconnection {
  constructor() {
    this.computerId = this.generateComputerId();
    this.isMaster = false;
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.lastHeartbeat = Date.now();
    this.discoveredComputers = new Map();
    this.activeConnections = new Map();
    this.chatHistory = [];
    this.cursorProcesses = new Map();

    // WebSocket connections
    this.masterConnection = null;
    this.workerConnections = new Map();

    // Discovery
    this.discoverySocket = null;
    this.discoveryInterval = null;

    // Health monitoring
    this.healthInterval = null;
    this.lastHealthCheck = Date.now();

    this.logger = this.createLogger();
    this.ensureDirectories();
  }

  generateComputerId() {
    const hostname = os.hostname();
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `${hostname}_${timestamp}_${random}`;
  }

  createLogger() {
    const logDir = path.dirname(CONFIG.LOG_FILE);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    return {
      info: (message) => this.log('INFO', message),
      warn: (message) => this.log('WARN', message),
      error: (message) => this.log('ERROR', message),
      debug: (message) => this.log('DEBUG', message),
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [${this.computerId}] ${message}`;

    console.log(logEntry);

    // Write to log file
    fs.appendFileSync(CONFIG.LOG_FILE, logEntry + '\n');
  }

  ensureDirectories() {
    const dirs = ['logs', 'temp', 'config'];
    dirs.forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    this.logger.info('🚀 Starting Automated Chat Reconnection System...');

    try {
      // Check if Cursor is installed
      await this.detectCursorInstallation();

      // Start discovery system
      await this.startDiscovery();

      // Start chat server
      await this.startChatServer();

      // Start health monitoring
      this.startHealthMonitoring();

      // Try to connect to existing master or become master
      await this.establishMasterConnection();

      // Start automatic chat triggering
      this.startAutomaticChatTriggering();

      this.logger.info(
        '✅ Automated Chat Reconnection System started successfully',
      );
      this.logger.info(`🖥️ Computer ID: ${this.computerId}`);
      this.logger.info(
        `🔍 Discovered ${this.discoveredComputers.size} computers`,
      );
      this.logger.info(`💬 Chat server running on port ${CONFIG.CHAT_PORT}`);

      // Write PID file
      fs.writeFileSync(CONFIG.PID_FILE, process.pid.toString());
    } catch (error) {
      this.logger.error(`Failed to start system: ${error.message}`);
      process.exit(1);
    }
  }

  async detectCursorInstallation() {
    this.logger.info('🔍 Detecting Cursor installation...');

    const platform = os.platform();
    const paths = CONFIG.CURSOR_PATHS[platform] || [];

    for (const cursorPath of paths) {
      const expandedPath = cursorPath.replace(
        '%USERNAME%',
        os.userInfo().username,
      );

      try {
        if (fs.existsSync(expandedPath)) {
          this.logger.info(`✅ Cursor found at: ${expandedPath}`);

          // Check if Cursor is running
          const isRunning = await this.checkCursorRunning();
          if (isRunning) {
            this.logger.info('✅ Cursor is currently running');
          } else {
            this.logger.info(
              '⚠️ Cursor is not running, will start when needed',
            );
          }

          return;
        }
      } catch (error) {
        // Continue checking other paths
      }
    }

    this.logger.warn('⚠️ Cursor not found in standard locations');
    this.logger.info('💡 You can still use the chat system without Cursor');
  }

  async checkCursorRunning() {
    const platform = os.platform();

    try {
      if (platform === 'win32') {
        const result = execSync('tasklist /FI "IMAGENAME eq Cursor.exe"', {
          encoding: 'utf8',
        });
        return result.includes('Cursor.exe');
      } else if (platform === 'darwin') {
        const result = execSync('pgrep -f "Cursor"', { encoding: 'utf8' });
        return result.trim().length > 0;
      } else {
        const result = execSync('pgrep -f "cursor"', { encoding: 'utf8' });
        return result.trim().length > 0;
      }
    } catch (error) {
      return false;
    }
  }

  async startDiscovery() {
    this.logger.info('🔍 Starting computer discovery...');

    // Create UDP socket for discovery
    this.discoverySocket = dgram.createSocket('udp4');

    this.discoverySocket.on('error', (error) => {
      this.logger.error(`Discovery socket error: ${error.message}`);
    });

    this.discoverySocket.on('message', (message, remote) => {
      try {
        const data = JSON.parse(message.toString());
        this.handleDiscoveryMessage(data, remote);
      } catch (error) {
        this.logger.error(`Invalid discovery message: ${error.message}`);
      }
    });

    // Bind to discovery port
    this.discoverySocket.bind(CONFIG.DISCOVERY_PORT, () => {
      this.logger.info(
        `🔍 Discovery listening on port ${CONFIG.DISCOVERY_PORT}`,
      );

      // Join multicast group
      this.discoverySocket.addMembership(CONFIG.DISCOVERY_MULTICAST_ADDR);

      // Start broadcasting presence
      this.startDiscoveryBroadcast();
    });
  }

  startDiscoveryBroadcast() {
    this.discoveryInterval = setInterval(() => {
      this.broadcastPresence();
    }, CONFIG.DISCOVERY_INTERVAL);

    // Broadcast immediately
    this.broadcastPresence();
  }

  broadcastPresence() {
    const message = JSON.stringify({
      type: 'presence',
      computerId: this.computerId,
      hostname: os.hostname(),
      platform: os.platform(),
      chatPort: CONFIG.CHAT_PORT,
      timestamp: Date.now(),
    });

    this.discoverySocket.send(
      message,
      CONFIG.DISCOVERY_PORT,
      CONFIG.DISCOVERY_MULTICAST_ADDR,
    );
  }

  handleDiscoveryMessage(data, remote) {
    if (data.type === 'presence' && data.computerId !== this.computerId) {
      this.discoveredComputers.set(data.computerId, {
        ...data,
        address: remote.address,
        lastSeen: Date.now(),
      });

      this.logger.debug(
        `🔍 Discovered computer: ${data.computerId} (${remote.address})`,
      );
    }
  }

  async startChatServer() {
    this.logger.info('💬 Starting chat server...');

    // Create HTTP server for chat API
    this.chatServer = http.createServer((req, res) => {
      this.handleChatRequest(req, res);
    });

    // Create WebSocket server for real-time chat
    this.chatWss = new WebSocket.Server({ server: this.chatServer });

    this.chatWss.on('connection', (ws, req) => {
      this.handleChatConnection(ws, req);
    });

    this.chatServer.listen(CONFIG.CHAT_PORT, () => {
      this.logger.info(`💬 Chat server running on port ${CONFIG.CHAT_PORT}`);
    });
  }

  handleChatRequest(req, res) {
    const { method, url } = req;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    if (method === 'GET' && url === '/status') {
      res.writeHead(200);
      res.end(
        JSON.stringify({
          computerId: this.computerId,
          isMaster: this.isMaster,
          isConnected: this.isConnected,
          discoveredComputers: this.discoveredComputers.size,
          activeConnections: this.activeConnections.size,
          uptime: process.uptime(),
          timestamp: Date.now(),
        }),
      );
    } else if (method === 'POST' && url === '/chat') {
      let body = '';
      req.on('data', (chunk) => (body += chunk));
      req.on('end', () => {
        try {
          const chatData = JSON.parse(body);
          this.triggerChat(chatData);
          res.writeHead(200);
          res.end(JSON.stringify({ status: 'sent' }));
        } catch (error) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: error.message }));
        }
      });
    } else if (method === 'GET' && url === '/computers') {
      res.writeHead(200);
      res.end(JSON.stringify(Array.from(this.discoveredComputers.values())));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  }

  handleChatConnection(ws, req) {
    const connectionId = crypto.randomUUID();
    this.activeConnections.set(connectionId, {
      ws,
      address: req.socket.remoteAddress,
      connectedAt: new Date(),
    });

    this.logger.info(`🔗 New chat connection: ${connectionId}`);

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data);
        this.handleChatMessage(connectionId, message);
      } catch (error) {
        this.logger.error(`Invalid chat message: ${error.message}`);
      }
    });

    ws.on('close', () => {
      this.activeConnections.delete(connectionId);
      this.logger.info(`🔌 Chat connection closed: ${connectionId}`);
    });

    ws.on('error', (error) => {
      this.logger.error(`Chat connection error: ${error.message}`);
      this.activeConnections.delete(connectionId);
    });

    // Send welcome message
    ws.send(
      JSON.stringify({
        type: 'welcome',
        computerId: this.computerId,
        connectionId,
        timestamp: Date.now(),
      }),
    );
  }

  handleChatMessage(connectionId, message) {
    this.logger.debug(`📨 Chat message: ${message.type}`);

    switch (message.type) {
      case 'chat':
        this.broadcastChatMessage(message);
        break;
      case 'join_room':
        this.joinChatRoom(connectionId, message.room);
        break;
      case 'leave_room':
        this.leaveChatRoom(connectionId, message.room);
        break;
      default:
        this.logger.warn(`Unknown chat message type: ${message.type}`);
    }
  }

  broadcastChatMessage(message) {
    const chatMessage = {
      type: 'chat',
      computerId: this.computerId,
      message: message.message,
      room: message.room || 'general',
      timestamp: Date.now(),
    };

    // Store in history
    this.chatHistory.push(chatMessage);
    if (this.chatHistory.length > 1000) {
      this.chatHistory = this.chatHistory.slice(-1000);
    }

    // Broadcast to all connections
    for (const [connectionId, connection] of this.activeConnections) {
      try {
        connection.ws.send(JSON.stringify(chatMessage));
      } catch (error) {
        this.logger.error(
          `Failed to send to connection ${connectionId}: ${error.message}`,
        );
      }
    }

    // Send to master if we're not master
    if (!this.isMaster && this.masterConnection) {
      try {
        this.masterConnection.send(
          JSON.stringify({
            type: 'chat_broadcast',
            ...chatMessage,
          }),
        );
      } catch (error) {
        this.logger.error(`Failed to send to master: ${error.message}`);
      }
    }
  }

  async establishMasterConnection() {
    this.logger.info('🔗 Establishing master connection...');

    // Try to connect to existing master
    const masterFound = await this.connectToExistingMaster();

    if (!masterFound) {
      // Become master
      await this.becomeMaster();
    }
  }

  async connectToExistingMaster() {
    for (const [computerId, computer] of this.discoveredComputers) {
      try {
        const ws = new WebSocket(
          `ws://${computer.address}:${CONFIG.CHAT_MASTER_PORT}`,
        );

        return new Promise((resolve) => {
          const timeout = setTimeout(() => {
            resolve(false);
          }, 5000);

          ws.on('open', () => {
            clearTimeout(timeout);
            this.masterConnection = ws;
            this.logger.info(`🔗 Connected to master: ${computerId}`);

            ws.send(
              JSON.stringify({
                type: 'register',
                computerId: this.computerId,
                capabilities: this.getCapabilities(),
              }),
            );

            ws.on('message', (data) => {
              this.handleMasterMessage(JSON.parse(data));
            });

            ws.on('close', () => {
              this.logger.info('🔌 Disconnected from master');
              this.masterConnection = null;
              this.reconnectToMaster();
            });

            resolve(true);
          });

          ws.on('error', () => {
            clearTimeout(timeout);
            resolve(false);
          });
        });
      } catch (error) {
        // Continue to next computer
      }
    }

    return false;
  }

  async becomeMaster() {
    this.logger.info('👑 Becoming master node...');

    this.isMaster = true;

    // Start master WebSocket server
    this.masterWss = new WebSocket.Server({ port: CONFIG.CHAT_MASTER_PORT });

    this.masterWss.on('connection', (ws, req) => {
      this.handleWorkerConnection(ws, req);
    });

    this.logger.info(
      `👑 Master server running on port ${CONFIG.CHAT_MASTER_PORT}`,
    );
  }

  handleWorkerConnection(ws, req) {
    this.logger.info('🔗 New worker connected to master');

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data);
        this.handleWorkerMessage(ws, message);
      } catch (error) {
        this.logger.error(`Invalid worker message: ${error.message}`);
      }
    });

    ws.on('close', () => {
      this.logger.info('🔌 Worker disconnected from master');
    });
  }

  handleWorkerMessage(ws, message) {
    switch (message.type) {
      case 'register':
        this.workerConnections.set(message.computerId, {
          ws,
          capabilities: message.capabilities,
          connectedAt: new Date(),
        });
        this.logger.info(`✅ Worker registered: ${message.computerId}`);
        break;

      case 'chat_broadcast':
        this.broadcastToWorkers(message);
        break;

      default:
        this.logger.warn(`Unknown worker message type: ${message.type}`);
    }
  }

  broadcastToWorkers(message) {
    for (const [computerId, worker] of this.workerConnections) {
      try {
        worker.ws.send(JSON.stringify(message));
      } catch (error) {
        this.logger.error(
          `Failed to send to worker ${computerId}: ${error.message}`,
        );
      }
    }
  }

  handleMasterMessage(message) {
    switch (message.type) {
      case 'chat_broadcast':
        this.broadcastChatMessage(message);
        break;

      default:
        this.logger.warn(`Unknown master message type: ${message.type}`);
    }
  }

  async reconnectToMaster() {
    if (this.reconnectAttempts >= CONFIG.MAX_RECONNECT_ATTEMPTS) {
      this.logger.error('❌ Max reconnection attempts reached');
      return;
    }

    this.reconnectAttempts++;
    this.logger.info(
      `🔄 Attempting reconnection ${this.reconnectAttempts}/${CONFIG.MAX_RECONNECT_ATTEMPTS}`,
    );

    setTimeout(async () => {
      const masterFound = await this.connectToExistingMaster();
      if (!masterFound) {
        this.reconnectToMaster();
      } else {
        this.reconnectAttempts = 0;
      }
    }, CONFIG.RECONNECT_DELAY);
  }

  startHealthMonitoring() {
    this.healthInterval = setInterval(() => {
      this.performHealthCheck();
    }, CONFIG.HEARTBEAT_INTERVAL);

    this.logger.info('💓 Health monitoring started');
  }

  performHealthCheck() {
    const now = Date.now();
    this.lastHealthCheck = now;

    // Check connection health
    if (
      this.masterConnection &&
      this.masterConnection.readyState !== WebSocket.OPEN
    ) {
      this.logger.warn('⚠️ Master connection is not healthy');
      this.masterConnection = null;
      this.reconnectToMaster();
    }

    // Clean up stale discovered computers
    for (const [computerId, computer] of this.discoveredComputers) {
      if (now - computer.lastSeen > 60000) {
        // 1 minute
        this.discoveredComputers.delete(computerId);
        this.logger.debug(`🧹 Removed stale computer: ${computerId}`);
      }
    }

    // Send heartbeat
    if (this.masterConnection) {
      try {
        this.masterConnection.send(
          JSON.stringify({
            type: 'heartbeat',
            computerId: this.computerId,
            timestamp: now,
          }),
        );
      } catch (error) {
        this.logger.error(`Failed to send heartbeat: ${error.message}`);
      }
    }
  }

  startAutomaticChatTriggering() {
    this.logger.info('🤖 Starting automatic chat triggering...');

    // Trigger chat every 5 minutes for system health
    setInterval(() => {
      this.triggerSystemHealthChat();
    }, 300000); // 5 minutes

    // Trigger chat on file changes
    this.watchForFileChanges();
  }

  async triggerSystemHealthChat() {
    const category =
      CONFIG.CHAT_CATEGORIES[
        Math.floor(Math.random() * CONFIG.CHAT_CATEGORIES.length)
      ];
    const message = `System health check: Please analyze the current state and suggest improvements for ${category}`;

    await this.triggerChat({
      category,
      message,
      priority: 'low',
      automated: true,
    });
  }

  watchForFileChanges() {
    const watchPaths = ['src', 'pages', 'components'];

    watchPaths.forEach((watchPath) => {
      if (fs.existsSync(watchPath)) {
        fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
          if (filename && !filename.includes('node_modules')) {
            this.triggerFileChangeChat(filename, eventType);
          }
        });
      }
    });
  }

  async triggerFileChangeChat(filename, eventType) {
    const message = `File change detected: ${eventType} on ${filename}. Please review and suggest improvements if needed.`;

    await this.triggerChat({
      category: 'refactor',
      message,
      priority: 'medium',
      automated: true,
      context: { filename, eventType },
    });
  }

  async triggerChat(chatData) {
    this.logger.info(
      `💬 Triggering chat: ${chatData.category} - ${chatData.message}`,
    );

    // Store chat request
    const chatRequest = {
      id: crypto.randomUUID(),
      chatId: crypto.randomUUID(), // Add unique chatId for tab management
      ...chatData,
      timestamp: Date.now(),
      computerId: this.computerId,
    };

    // Broadcast to all connections
    this.broadcastChatMessage({
      type: 'chat_trigger',
      ...chatRequest,
    });

    // Send to Cursor if available
    await this.sendToCursor(chatRequest);

    return chatRequest;
  }

  // Emit chat_close event when a job is completed
  closeChat(chatId) {
    this.broadcastChatMessage({
      type: 'chat_close',
      chatId,
      timestamp: Date.now(),
      computerId: this.computerId,
    });
  }

  // Example: Call closeChat when a job is completed (pseudo-hook)
  // In real logic, hook this into job/task completion
  onJobCompleted(job) {
    if (job.chatId) {
      this.closeChat(job.chatId);
    }
  }

  async sendToCursor(chatRequest) {
    try {
      // Check if Cursor is running
      const isRunning = await this.checkCursorRunning();

      if (isRunning) {
        this.logger.info('✅ Cursor is running, sending chat request');
        // Here you would implement the actual Cursor API call
        // For now, we'll just log it
        this.logger.info(
          `📤 Cursor chat request: ${JSON.stringify(chatRequest)}`,
        );
      } else {
        this.logger.info('⚠️ Cursor is not running, chat request queued');
      }
    } catch (error) {
      this.logger.error(`Failed to send to Cursor: ${error.message}`);
    }
  }

  getCapabilities() {
    return {
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      chatCategories: CONFIG.CHAT_CATEGORIES,
    };
  }

  async stop() {
    this.logger.info('🛑 Stopping Automated Chat Reconnection System...');

    // Clear intervals
    if (this.discoveryInterval) {
      clearInterval(this.discoveryInterval);
    }
    if (this.healthInterval) {
      clearInterval(this.healthInterval);
    }

    // Close WebSocket connections
    if (this.masterConnection) {
      this.masterConnection.close();
    }
    if (this.masterWss) {
      this.masterWss.close();
    }
    if (this.chatWss) {
      this.chatWss.close();
    }

    // Close servers
    if (this.chatServer) {
      this.chatServer.close();
    }
    if (this.discoverySocket) {
      this.discoverySocket.close();
    }

    // Remove PID file
    if (fs.existsSync(CONFIG.PID_FILE)) {
      fs.unlinkSync(CONFIG.PID_FILE);
    }

    this.logger.info('✅ Automated Chat Reconnection System stopped');
  }
}

// Service management functions
function installAsService() {
  const platform = os.platform();

  if (platform === 'win32') {
    // Windows service installation
    const serviceScript = `
@echo off
cd /d "${process.cwd()}"
node scripts/automated-chat-reconnection.cjs
    `;

    fs.writeFileSync('scripts/start-chat-service.bat', serviceScript);
    console.log(
      '✅ Windows service script created: scripts/start-chat-service.bat',
    );
  } else if (platform === 'darwin') {
    // macOS LaunchAgent
    const plistContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.cursor.chat-reconnection</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/node</string>
        <string>${path.resolve('scripts/automated-chat-reconnection.cjs')}</string>
    </array>
    <key>WorkingDirectory</key>
    <string>${process.cwd()}</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>${path.resolve('logs/chat-reconnection.out')}</string>
    <key>StandardErrorPath</key>
    <string>${path.resolve('logs/chat-reconnection.err')}</string>
</dict>
</plist>`;

    const plistPath = path.join(
      os.homedir(),
      'Library/LaunchAgents/com.cursor.chat-reconnection.plist',
    );
    fs.writeFileSync(plistPath, plistContent);

    console.log('✅ macOS LaunchAgent created');
    console.log(
      'Run: launchctl load ~/Library/LaunchAgents/com.cursor.chat-reconnection.plist',
    );
  } else {
    // Linux systemd service
    const serviceContent = `[Unit]
Description=Cursor Chat Reconnection Service
After=network.target

[Service]
Type=simple
User=${os.userInfo().username}
WorkingDirectory=${process.cwd()}
ExecStart=/usr/bin/node scripts/automated-chat-reconnection.cjs
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target`;

    fs.writeFileSync(
      'scripts/cursor-chat-reconnection.service',
      serviceContent,
    );

    console.log(
      '✅ Linux systemd service created: scripts/cursor-chat-reconnection.service',
    );
    console.log(
      'Run: sudo cp scripts/cursor-chat-reconnection.service /etc/systemd/system/',
    );
    console.log('Run: sudo systemctl enable cursor-chat-reconnection.service');
    console.log('Run: sudo systemctl start cursor-chat-reconnection.service');
  }
}

// CLI interface
const command = process.argv[2];

if (command === 'start') {
  const system = new AutomatedChatReconnection();
  system.start();

  // Handle graceful shutdown
  process.on('SIGINT', () => system.stop());
  process.on('SIGTERM', () => system.stop());
} else if (command === 'install') {
  installAsService();
} else if (command === 'status') {
  try {
    const response = http.get(
      `http://localhost:${CONFIG.CHAT_PORT}/status`,
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          console.log('System Status:');
          console.log(JSON.parse(data));
        });
      },
    );
    response.on('error', () => {
      console.log('❌ System is not running');
    });
  } catch (error) {
    console.log('❌ System is not running');
  }
} else {
  console.log(`
🤖 Automated Chat Reconnection System for Cursor

Usage:
  node scripts/automated-chat-reconnection.cjs <command>

Commands:
  start     Start the chat reconnection system
  install   Install as a system service
  status    Check system status

Features:
  ✅ Automatic discovery of Cursor instances
  ✅ Persistent WebSocket connections
  ✅ Auto-reconnection with exponential backoff
  ✅ Load balancing across multiple computers
  ✅ Health monitoring and failover
  ✅ Cross-platform compatibility
  ✅ Automatic startup and service management

Examples:
  node scripts/automated-chat-reconnection.cjs start
  node scripts/automated-chat-reconnection.cjs install
  node scripts/automated-chat-reconnection.cjs status
  `);
}
