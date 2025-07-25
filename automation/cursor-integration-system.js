
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


/**
 * Cursor Integration System
 * 
 * Integrated system that combines:
 * - Cursor Chat Automation
 * - Cursor Chat Monitor
 * - Todo and Queue Manager
 * 
 * Provides a unified interface for managing all Cursor-related automations.
 */

const CursorChatAutomation = require('./cursor-chat-automation.js');
const CursorChatMonitor = require('./cursor-chat-monitor.js');
const TodoQueueManager = require('./todo-queue-manager.js');
const EventEmitter = require('events');
const fs = require('fs/promises');
const path = require('path');

class CursorIntegrationSystem extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      dataDir: config.dataDir || './data',
      enableChatAutomation: config.enableChatAutomation !== false,
      enableChatMonitor: config.enableChatMonitor !== false,
      enableTodoQueue: config.enableTodoQueue !== false,
      autoProcessChats: config.autoProcessChats !== false,
      ...config
    };
    
    this.isRunning = false;
    this.chatAutomation = null;
    this.chatMonitor = null;
    this.todoQueueManager = null;
    this.integrationStats = {
      chatsProcessed: 0,
      todosCreated: 0,
      queueItemsAdded: 0,
      lastActivity: null
    };
  }

  async initialize() {
    logger.info('🤖 Initializing Cursor Integration System...');
    
    try {
      // Initialize components
      if (this.config.enableChatAutomation) {
        await this.initializeChatAutomation();
      }
      
      if (this.config.enableChatMonitor) {
        await this.initializeChatMonitor();
      }
      
      if (this.config.enableTodoQueue) {
        await this.initializeTodoQueueManager();
      }
      
      // Setup integration
      this.setupIntegration();
      
      this.isRunning = true;
      logger.info('✅ Cursor Integration System initialized');
      
    } catch (error) {
      logger.error('❌ Failed to initialize Cursor Integration System:', error);
      throw error;
    }
  }

  async initializeChatAutomation() {
    logger.info('🔧 Initializing Cursor Chat Automation...');
    
    this.chatAutomation = new CursorChatAutomation({
      dataDir: path.join(this.config.dataDir, 'cursor-chats'),
      todoFile: path.join(this.config.dataDir, 'todos.json'),
      queueFile: path.join(this.config.dataDir, 'queue.json'),
      autoCreateTodos: true,
      autoQueueTasks: true
    });
    
    await this.chatAutomation.initialize();
    
    // Listen for events
    this.chatAutomation.on('todoCreated', (todo) => {
      this.integrationStats.todosCreated++;
      this.integrationStats.lastActivity = new Date().toISOString();
      logger.info(`📝 Todo created via chat automation: ${todo.text}`);
    });
    
    this.chatAutomation.on('itemQueued', (item) => {
      this.integrationStats.queueItemsAdded++;
      this.integrationStats.lastActivity = new Date().toISOString();
      logger.info(`📋 Item queued via chat automation: ${item.text}`);
    });
  }

  async initializeChatMonitor() {
    logger.info('👀 Initializing Cursor Chat Monitor...');
    
    this.chatMonitor = new CursorChatMonitor({
      outputDir: path.join(this.config.dataDir, 'cursor-chats'),
      maxHistorySize: 1000
    });
    
    await this.chatMonitor.initialize();
    
    // Listen for events
    this.chatMonitor.on('chatProcessed', (chatData) => {
      this.integrationStats.chatsProcessed++;
      this.integrationStats.lastActivity = new Date().toISOString();
      logger.info(`💬 Chat processed: ${chatData.id}`);
      
      // Auto-process chat if enabled
      if (this.config.autoProcessChats && this.chatAutomation) {
        this.processChatWithAutomation(chatData);
      }
    });
  }

  async initializeTodoQueueManager() {
    logger.info('📋 Initializing Todo and Queue Manager...');
    
    this.todoQueueManager = new TodoQueueManager({
      dataDir: this.config.dataDir,
      autoAssign: true,
      autoPrioritize: true,
      maxQueueSize: 200
    });
    
    await this.todoQueueManager.initialize();
    
    // Listen for events
    this.todoQueueManager.on('todoCreated', (todo) => {
      logger.info(`✅ Todo created via manager: ${todo.title}`);
    });
    
    this.todoQueueManager.on('itemQueued', (item) => {
      logger.info(`📋 Item queued via manager: ${item.title}`);
    });
  }

  setupIntegration() {
    logger.info('🔗 Setting up integration between components...');
    
    // Connect chat automation to todo/queue manager
    if (this.chatAutomation && this.todoQueueManager) {
      this.chatAutomation.on('todoCreated', async (todo) => {
        try {
          await this.todoQueueManager.addTodo({
            title: todo.text,
            description: todo.context,
            priority: todo.priority,
            category: todo.type,
            source: 'cursor_chat_automation',
            chatId: todo.chatId
          });
        } catch (error) {
          logger.error('Error adding todo to manager:', error);
        }
      });
      
      this.chatAutomation.on('itemQueued', async (item) => {
        try {
          await this.todoQueueManager.addToQueue({
            title: item.text,
            description: item.context,
            type: item.type,
            priority: 'medium',
            source: 'cursor_chat_automation',
            chatId: item.chatId
          });
        } catch (error) {
          logger.error('Error adding item to queue:', error);
        }
      });
    }
    
    // Connect chat monitor to chat automation
    if (this.chatMonitor && this.chatAutomation) {
      this.chatMonitor.on('chatProcessed', (chatData) => {
        // Process chat with automation
        this.processChatWithAutomation(chatData);
      });
    }
  }

  async processChatWithAutomation(chatData) {
    if (!this.chatAutomation) return;
    
    try {
      // Create a chat object that the automation can process
      const chat = {
        id: chatData.id,
        content: chatData.content,
        timestamp: chatData.timestamp,
        source: chatData.source
      };
      
      // Process the chat
      await this.chatAutomation.processChat(chat);
      
    } catch (error) {
      logger.error('Error processing chat with automation:', error);
    }
  }

  async processManualChat(content, metadata = {}) {
    logger.info('📝 Processing manual chat input...');
    
    const chat = {
      id: `manual_${Date.now()}`,
      content: content,
      timestamp: new Date().toISOString(),
      source: 'manual',
      ...metadata
    };
    
    if (this.chatAutomation) {
      await this.chatAutomation.processChat(chat);
    }
    
    return chat;
  }

  async addManualTodo(todoData) {
    if (!this.todoQueueManager) {
      throw new Error('Todo/Queue Manager not initialized');
    }
    
    return await this.todoQueueManager.addTodo({
      ...todoData,
      source: 'manual'
    });
  }

  async addManualQueueItem(itemData) {
    if (!this.todoQueueManager) {
      throw new Error('Todo/Queue Manager not initialized');
    }
    
    return await this.todoQueueManager.addToQueue({
      ...itemData,
      source: 'manual'
    });
  }

  getTodos(filter = {}) {
    if (!this.todoQueueManager) return [];
    
    let todos = Array.from(this.todoQueueManager.todos.values());
    
    // Apply filters
    if (filter.priority) {
      todos = todos.filter(todo => todo.priority === filter.priority);
    }
    if (filter.status) {
      todos = todos.filter(todo => todo.status === filter.status);
    }
    if (filter.category) {
      todos = todos.filter(todo => todo.category === filter.category);
    }
    if (filter.source) {
      todos = todos.filter(todo => todo.source === filter.source);
    }
    
    return todos;
  }

  getQueueItems(filter = {}) {
    if (!this.todoQueueManager) return [];
    
    let items = this.todoQueueManager.queue;
    
    // Apply filters
    if (filter.type) {
      items = items.filter(item => item.type === filter.type);
    }
    if (filter.status) {
      items = items.filter(item => item.status === filter.status);
    }
    if (filter.priority) {
      items = items.filter(item => item.priority === filter.priority);
    }
    
    return items;
  }

  getChatHistory(limit = 50) {
    if (!this.chatMonitor) return [];
    
    return this.chatMonitor.getRecentChats(limit);
  }

  searchChats(query) {
    if (!this.chatMonitor) return [];
    
    return this.chatMonitor.searchChats(query);
  }

  async generateIntegrationReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemStatus: {
        isRunning: this.isRunning,
        chatAutomationActive: this.chatAutomation?.isRunning || false,
        chatMonitorActive: this.chatMonitor?.isRunning || false,
        todoQueueActive: this.todoQueueManager?.isRunning || false
      },
      integrationStats: this.integrationStats,
      components: {
        chatAutomation: this.chatAutomation?.getStatus() || null,
        chatMonitor: this.chatMonitor?.getStatus() || null,
        todoQueueManager: this.todoQueueManager?.getStatus() || null
      },
      summary: {
        totalTodos: this.todoQueueManager?.todos.size || 0,
        totalQueueItems: this.todoQueueManager?.queue.length || 0,
        totalChats: this.chatMonitor?.chatHistory.length || 0,
        todosFromChats: this.getTodos({ source: 'cursor_chat' }).length,
        queueItemsFromChats: this.getQueueItems({ source: 'cursor_chat' }).length
      }
    };
    
    const reportFile = path.join(this.config.dataDir, `integration-report-${Date.now()}.json`);
    await fs.writeFile(reportFile, JSON.stringify(report, null, 2));
    
    logger.info(`📊 Generated integration report: ${reportFile}`);
    this.emit('reportGenerated', report);
    
    return report;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      components: {
        chatAutomation: this.chatAutomation?.getStatus() || null,
        chatMonitor: this.chatMonitor?.getStatus() || null,
        todoQueueManager: this.todoQueueManager?.getStatus() || null
      },
      integrationStats: this.integrationStats
    };
  }

  async stop() {
    logger.info('🛑 Stopping Cursor Integration System...');
    this.isRunning = false;
    
    if (this.chatAutomation) {
      this.chatAutomation.stop();
    }
    
    if (this.chatMonitor) {
      this.chatMonitor.stop();
    }
    
    if (this.todoQueueManager) {
      this.todoQueueManager.stop();
    }
    
    logger.info('✅ Cursor Integration System stopped');
  }
}

// Export the class
module.exports = CursorIntegrationSystem;

// Run if called directly
if (require.main === module) {
  const integration = new CursorIntegrationSystem({
    enableChatAutomation: true,
    enableChatMonitor: true,
    enableTodoQueue: true,
    autoProcessChats: true
  });
  
  integration.initialize().catch(error => {
    logger.error('Failed to initialize Cursor Integration System:', error);
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    logger.info('\n🛑 Shutting down Cursor Integration System...');
    await integration.stop();
    process.exit(0);
  });
} 