#!/usr/bin/env node

const io = require('socket.io-client')
const { EventEmitter } = require('events')
const fs = require('fs').promises
const path = require('path');

console.log('🤖 Cursor Chat Automation System\n');
console.log('Maintaining constant contact with Cursor chats...\n')
const TODO_FILE = path.resolve(__dirname, '../logs/cursor-chat-todos.md')
const CHECK_TODO_INTERVAL = 10000; // 10 seconds

class CursorChatAutomation extends EventEmitter {
  constructor(config = {}) {
    super();

    this.config = {
      socketUrl: 'http://localhost:3006',
      reconnectInterval: 5000,
      heartbeatInterval: 30000,
      maxReconnectAttempts: 10,
      logFile: 'logs/cursor-chat-automation.log',
      statusFile: 'logs/cursor-chat-status.json',
      ...config,
    };

    this.isRunning = false;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.lastHeartbeat = Date.now();
    this.connectionStartTime = null;
    this.stats = {
      totalConnections: 0,
      successfulReconnections: 0,
      failedReconnections: 0,
      totalUptime: 0,
      lastDisconnect: null,
      messagesSent: 0,
      messagesReceived: 0,
    };

    this.reconnectTimer = null;
    this.heartbeatTimer = null;
    this.statusTimer = null;
    this.activeChat = null;
    this.todoQueue = [];
    this.completedChats = new Set();
  }

  async start() {
    console.log('🚀 Starting Cursor Chat Automation...');
    this.isRunning = true;
    this.connectionStartTime = Date.now();

    // Ensure log directory exists
    await this.ensureLogDirectory();

    // Load previous stats
    await this.loadStats();

    // Load TODO queue
    await this.loadTodoQueue();

    // Establish initial connection
    await this.connect();

    // Start monitoring timers
    this.startHeartbeat();
    this.startStatusMonitoring();

    // Start autonomous chat workflow
    this.startAutonomousChatLoop();

    console.log('✅ Cursor Chat Automation started successfully');
    this.log('Automation started');
  }

  async connect() {
    console.log('DEBUG: Entered connect() method');
    return new Promise((resolve, reject) => {
      console.log(`DEBUG: Attempting to connect to ${this.config.socketUrl}`);
      this.socket = io(this.config.socketUrl, {
        transports: ['websocket', 'polling'],
        timeout: 10000,
        reconnection: true,
        reconnectionAttempts: this.config.maxReconnectAttempts,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 10000,
        maxReconnectionAttempts: this.config.maxReconnectAttempts,
      });

      this.socket.on('connect', () => {
        console.log('DEBUG: Socket.IO connect event fired');
        this.reconnectAttempts = 0;
        this.stats.totalConnections++;
        this.lastHeartbeat = Date.now();

        console.log('✅ Connected to Cursor chat server');
        this.log('Connected to chat server');

        // Join Cursor chat room
        this.socket.emit('join-room', 'cursor-chat', (response) => {
          if (response && response.success) {
            console.log('🎯 Joined Cursor chat room');
            this.log('Joined Cursor chat room');
          }
        });

        // Send initial presence message
        this.sendPresenceMessage();

        this.emit('connected');
        resolve();
      });

      this.socket.on('disconnect', (reason) => {
        this.stats.lastDisconnect = Date.now();
        console.log(`🔌 Disconnected from Cursor chat: ${reason}`);
        this.log(`Disconnected: ${reason}`);

        this.emit('disconnected', reason);

        // Schedule reconnection
        this.scheduleReconnection();
      });

      this.socket.on('reconnect', (attemptNumber) => {
        this.stats.successfulReconnections++;
        console.log(
          `🔄 Reconnected to Cursor chat after ${attemptNumber} attempts`,
        );
        this.log(`Reconnected after ${attemptNumber} attempts`);

        // Rejoin room
        this.socket.emit('join-room', 'cursor-chat', (response) => {
          if (response && response.success) {
            console.log('🎯 Rejoined Cursor chat room');
            this.log('Rejoined Cursor chat room');
          }
        });

        // Send reconnection message
        this.sendReconnectionMessage(attemptNumber);

        this.emit('reconnected', attemptNumber);
      });

      this.socket.on('reconnect_attempt', (attemptNumber) => {
        this.reconnectAttempts = attemptNumber;
        console.log(
          `🔄 Reconnection attempt ${attemptNumber}/${this.config.maxReconnectAttempts}`,
        );
        this.log(`Reconnection attempt ${attemptNumber}`);

        this.emit('reconnect_attempt', attemptNumber);
      });

      this.socket.on('reconnect_error', (error) => {
        console.log(`❌ Reconnection error: ${error.message}`);
        this.log(`Reconnection error: ${error.message}`);

        this.emit('reconnect_error', error);
      });

      this.socket.on('reconnect_failed', () => {
        this.stats.failedReconnections++;
        console.log('❌ Reconnection failed - max attempts reached');
        this.log('Reconnection failed - max attempts reached');

        this.emit('reconnect_failed');

        // Restart connection after delay
        setTimeout(() => {
          if (this.isRunning) {
            console.log('🔄 Restarting connection...');
            this.connect();
          }
        }, 30000);
      });

      this.socket.on('new-message', (message) => {
        this.stats.messagesReceived++;
        console.log(
          `💬 Received message: ${message.message.substring(0, 50)}...`,
        );
        this.log(`Received message from ${message.sender}`);

        // Auto-respond to keep conversation active
        this.sendAutoResponse(message);

        this.emit('message_received', message);
      });

      this.socket.on('connect_error', (error) => {
        console.error('DEBUG: Socket.IO connect_error event:', error);
        this.emit('connect_error', error);
        reject(error);
      });

      this.socket.on('error', (error) => {
        console.error('DEBUG: Socket.IO error event:', error);
      });

      // Set connection timeout
      setTimeout(() => {
        if (!this.socket.connected) {
          reject(new Error('Connection timeout'));
        }
      }, 15000);
    });
  }

  scheduleReconnection() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    this.reconnectTimer = setTimeout(() => {
      if (this.isRunning && !this.socket.connected) {
        console.log('🔄 Attempting manual reconnection...');
        this.connect();
      }
    }, this.config.reconnectInterval);
  }

  startHeartbeat() {
    this.heartbeatTimer = setInterval(() => {
      if (this.socket && this.socket.connected) {
        this.sendHeartbeat();
      }
    }, this.config.heartbeatInterval);
  }

  startStatusMonitoring() {
    this.statusTimer = setInterval(async () => {
      await this.updateStatus();
    }, 60000); // Update status every minute
  }

  sendPresenceMessage() {
    const message = {
      roomId: 'cursor-chat',
      message: `🤖 Cursor Chat Automation active - ${new Date().toISOString()}`,
      sender: 'cursor-automation',
      type: 'text',
      metadata: {
        type: 'presence',
        uptime: this.getUptime(),
        version: '1.0.0',
      },
    };

    this.sendMessage(message);
  }

  sendReconnectionMessage(attemptNumber) {
    const message = {
      roomId: 'cursor-chat',
      message: `🔄 Cursor Chat Automation reconnected after ${attemptNumber} attempts`,
      sender: 'cursor-automation',
      type: 'text',
      metadata: {
        type: 'reconnection',
        attempts: attemptNumber,
        timestamp: Date.now(),
      },
    };

    this.sendMessage(message);
  }

  sendHeartbeat() {
    const message = {
      roomId: 'cursor-chat',
      message: `💓 Cursor Chat Automation heartbeat - Uptime: ${this.getUptime()}`,
      sender: 'cursor-automation',
      type: 'text',
      metadata: {
        type: 'heartbeat',
        uptime: this.getUptime(),
        timestamp: Date.now(),
      },
    };

    this.sendMessage(message);
  }

  sendAutoResponse(receivedMessage) {
    // Don't respond to our own messages
    if (receivedMessage.sender === 'cursor-automation') {
      return;
    }

    const responses = [
      "I'm here and maintaining constant contact with Cursor chats! 🤖",
      'Cursor Chat Automation is active and monitoring the conversation.',
      'Keeping the connection alive and ready for any Cursor-related tasks.',
      'Automation system is running smoothly - all systems operational.',
      'Maintaining persistent connectivity with Cursor chat infrastructure.',
    ]
const randomResponse =
      responses[Math.floor(Math.random() * responses.length)]
const message = {
      roomId: 'cursor-chat',
      message: randomResponse,
      sender: 'cursor-automation',
      type: 'text',
      metadata: {
        type: 'auto_response',
        inReplyTo: receivedMessage.id,
        timestamp: Date.now(),
      },
    };

    this.sendMessage(message);
  }

  sendMessage(messageData) {
    if (!this.socket || !this.socket.connected) {
      console.log('⚠️ Cannot send message - not connected');
      return;
    }

    this.socket.emit('send-message', messageData, (response) => {
      if (response && response.success) {
        this.stats.messagesSent++;
        console.log(
          `✅ Message sent: ${messageData.message.substring(0, 30)}...`,
        );
      } else {
        console.log('❌ Failed to send message');
      }
    });
  }

  async updateStatus() {
    const status = {
      isRunning: this.isRunning,
      isConnected: this.socket ? this.socket.connected : false,
      uptime: this.getUptime(),
      reconnectAttempts: this.reconnectAttempts,
      lastHeartbeat: this.lastHeartbeat,
      stats: this.stats,
      timestamp: Date.now(),
    };

    try {
      await fs.writeFile(
        this.config.statusFile,
        JSON.stringify(status, null, 2),
      );
      this.log('Status updated');
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  }

  async loadStats() {
    try {
      const statusData = await fs.readFile(this.config.statusFile, 'utf8')
const status = JSON.parse(statusData);
      this.stats = { ...this.stats, ...status.stats };
      console.log('📊 Loaded previous statistics');
    } catch (error) {
      console.log('📊 Starting with fresh statistics');
    }
  }

  async ensureLogDirectory() {
    const logDir = path.dirname(this.config.logFile);
    try {
      await fs.mkdir(logDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
  }

  async log(message) {
    const timestamp = new Date().toISOString()
const logEntry = `[${timestamp}] ${message}\n`;

    try {
      await fs.appendFile(this.config.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  getUptime() {
    if (!this.connectionStartTime) return '0s'
const uptime = Math.floor((Date.now() - this.connectionStartTime) / 1000)
const hours = Math.floor(uptime / 3600)
const minutes = Math.floor((uptime % 3600) / 60)
const seconds = uptime % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }

  getStats() {
    return {
      ...this.stats,
      uptime: this.getUptime(),
      isConnected: this.socket ? this.socket.connected : false,
      reconnectAttempts: this.reconnectAttempts,
    };
  }

  async stop() {
    console.log('🛑 Stopping Cursor Chat Automation...');
    this.isRunning = false;

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
    }

    if (this.statusTimer) {
      clearInterval(this.statusTimer);
    }

    if (this.socket) {
      this.socket.disconnect();
    }

    await this.updateStatus();
    this.log('Automation stopped');

    console.log('✅ Cursor Chat Automation stopped');
  }

  async loadTodoQueue() {
    try {
      if (await fs.stat(TODO_FILE)) {
        const lines = (await fs.readFile(TODO_FILE, 'utf8'))
          .split('\n')
          .filter(Boolean)
          .map((line) => ({
            raw: line,
            done: line.startsWith('- [x]'),
            content: line.replace(/^- \[[ x]\] /, ''),
          }));
        this.todoQueue = lines;
      }
    } catch (e) {
      this.todoQueue = [];
    }
  }

  async saveTodoQueue() {
    try {
      await fs.writeFile(
        TODO_FILE,
        this.todoQueue.map((t) => t.raw).join('\n') + '\n',
      );
    } catch (e) {
      // Ignore
    }
  }

  getNextTodo() {
    return this.todoQueue.find((t) => !t.done);
  }

  async markTodoDone(todo, result) {
    const idx = this.todoQueue.findIndex((t) => t.raw === todo.raw);
    if (idx !== -1) {
      const doneLine =
        todo.raw.replace('- [ ]', '- [x]') +
        ` (done: ${new Date().toISOString()})\nResult: ${result}`;
      this.todoQueue[idx].raw = doneLine;
      this.todoQueue[idx].done = true;
      await this.saveTodoQueue();
    }
  }

  startAutonomousChatLoop() {
    setInterval(async () => {
      if (!this.isRunning || !this.socket || !this.socket.connected) return;
      await this.loadTodoQueue()
const nextTodo = this.getNextTodo();
      if (!nextTodo) {
        this.log('No pending TODOs in queue. Waiting...');
        return;
      }
      // If no active chat, open a new one
      if (!this.activeChat || this.completedChats.has(this.activeChat.id)) {
        // Open new chat
        const chatId = `chat-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
        this.activeChat = { id: chatId, todo: nextTodo };
        this.log(`🟢 Opening new chat for TODO: ${nextTodo.content}`);
        this.sendMessage({
          roomId: 'cursor-chat',
          message: `🔔 New improvement step: ${nextTodo.content}\n(Chat ID: ${chatId})`,
          sender: 'cursor-automation',
          type: 'text',
          metadata: {
            type: 'improvement_step',
            todo: nextTodo.content,
            chatId,
            timestamp: Date.now(),
          },
        });
      } else {
        // Check if chat is completed (simulate by checking if TODO is marked done)
        if (nextTodo.done) {
          this.log(`✅ Chat completed for TODO: ${nextTodo.content}`);
          this.completedChats.add(this.activeChat.id);
          // Close chat (send closing message)
          this.sendMessage({
            roomId: 'cursor-chat',
            message: `✅ Improvement step completed: ${nextTodo.content}\n(Chat ID: ${this.activeChat.id})`,
            sender: 'cursor-automation',
            type: 'text',
            metadata: {
              type: 'improvement_step_completed',
              todo: nextTodo.content,
              chatId: this.activeChat.id,
              timestamp: Date.now(),
            },
          });
          await this.markTodoDone(nextTodo, 'Completed by automation');
          this.activeChat = null;
        }
      }
    }, CHECK_TODO_INTERVAL);
  }
}

// CLI interface
async function main() {
  const command = process.argv[2]
const automation = new CursorChatAutomation();

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await automation.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await automation.stop();
    process.exit(0);
  });

  switch (command) {
    case 'start':
      await automation.start();
      break;

    case 'stop':
      await automation.stop();
      break;

    case 'status':
      try {
        const statusData = await fs.readFile(
          automation.config.statusFile,
          'utf8',
        )
const status = JSON.parse(statusData);
        console.log('📊 Cursor Chat Automation Status:');
        console.log(JSON.stringify(status, null, 2));
      } catch (error) {
        console.log('📊 Cursor Chat Automation Status:');
        console.log(
          JSON.stringify(
            {
              totalConnections: 0,
              successfulReconnections: 0,
              failedReconnections: 0,
              totalUptime: 0,
              lastDisconnect: null,
              messagesSent: 0,
              messagesReceived: 0,
              uptime: '0s',
              isConnected: false,
              reconnectAttempts: 0,
            },
            null,
            2,
          ),
        );
      }
      break;

    case 'logs':
      try {
        const logs = await fs.readFile(automation.config.logFile, 'utf8');
        console.log('📋 Recent logs:');
        console.log(logs);
      } catch (error) {
        console.log('No logs found');
      }
      break;

    default:
      console.log(
        'Usage: node scripts/cursor-chat-automation.js [start|stop|status|logs]',
      );
      console.log('');
      console.log('Commands:');
      console.log('  start   - Start the automation');
      console.log('  stop    - Stop the automation');
      console.log('  status  - Show current status');
      console.log('  logs    - Show recent logs');
      break;
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = CursorChatAutomation;
