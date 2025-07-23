#!/usr/bin/env node

/**
 * Cursor Chat Automation System
 * 
 * Manages todos and queues for all future Cursor chats:
 * - Automatic todo creation from chat interactions
 * - Queue management for pending tasks
 * - Priority-based task scheduling
 * - Integration with project management
 * - Automated follow-up and reminders
 */

const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');

class CursorChatAutomation extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      dataDir: config.dataDir || ./data/cursor-chats',
      todoFile: config.todoFile || ./data/todos.json',
      queueFile: config.queueFile || ./data/queue.json',
      autoCreateTodos: config.autoCreateTodos !== false,
      autoQueueTasks: config.autoQueueTasks !== false,
      priorityLevels: config.priorityLevels || ['low', medium', high', critical'],
      maxQueueSize: config.maxQueueSize || 100,
      ...config
    };
    
    this.isRunning = false;
    this.todos = new Map();
    this.queue = [];
    this.chatHistory = [];
    this.patterns = this.initializePatterns();
  }

  async initialize() {
    console.log('🤖 Initializing Cursor Chat Automation...');
    
    try {
      // Ensure data directory exists
      await this.ensureDataDirectory();
      
      // Load existing data
      await this.loadData();
      
      // Start monitoring
      this.startMonitoring();
      
      this.isRunning = true;
      console.log('✅ Cursor Chat Automation initialized');
      
    } catch (error) {
      console.error('❌ Failed to initialize Cursor Chat Automation:', error);
      throw error;
    }
  }

  async ensureDataDirectory() {
    try {
      await fs.mkdir(this.config.dataDir, { recursive: true });
      await fs.mkdir(path.dirname(this.config.todoFile), { recursive: true });
      await fs.mkdir(path.dirname(this.config.queueFile), { recursive: true });
    } catch (error) {
      console.error('Error creating data directories:', error);
    }
  }

  async loadData() {
    try {
      // Load todos
      try {
        const todoData = await fs.readFile(this.config.todoFile, utf8');
        const todos = JSON.parse(todoData);
        this.todos = new Map(Object.entries(todos));
      } catch (error) {
        console.log('No existing todos found, starting fresh');
      }

      // Load queue
      try {
        const queueData = await fs.readFile(this.config.queueFile, utf8');
        this.queue = JSON.parse(queueData);
      } catch (error) {
        console.log('No existing queue found, starting fresh');
      }

      // Load chat history
      try {
        const chatFiles = await fs.readdir(this.config.dataDir);
        for (const file of chatFiles) {
          if (file.endsWith('.json')) {
            const chatData = await fs.readFile(path.join(this.config.dataDir, file), utf8');
            const chat = JSON.parse(chatData);
            this.chatHistory.push(chat);
          }
        }
      } catch (error) {
        console.log('No existing chat history found');
      }

    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  initializePatterns() {
    return {
      todoPatterns: [
        {
          pattern: /(?:TODO|FIXME|BUG|HACK|NOTE|XXX|FIX|REVIEW|OPTIMIZE|REFACTOR)/gi,
          priority: medium',
          type: code_todo
        },
        {
          pattern: /(?:need to|should|must|have to|got to|gotta)\s+(?:implement|add|create|fix|update|improve|optimize|refactor)/gi,
          priority: high',
          type: action_item
        },
        {
          pattern: /(?:error|bug|issue|problem|broken|not working|failing)/gi,
          priority: critical',
          type: bug_fix
        },
        {
          pattern: /(?:feature|enhancement|improvement|upgrade|update)/gi,
          priority: medium',
          type: feature_request
        },
        {
          pattern: /(?:test|testing|unit test|integration test|e2e test)/gi,
          priority: low',
          type: testing
        },
        {
          pattern: /(?:documentation|docs|readme|comment|explain)/gi,
          priority: low',
          type: documentation
        },
        {
          pattern: /(?:performance|speed|optimization|efficiency)/gi,
          priority: medium',
          type: performance
        },
        {
          pattern: /(?:security|vulnerability|secure|protect)/gi,
          priority: high',
          type: security
        }
      ],
      queuePatterns: [
        {
          pattern: /(?:queue|schedule|plan|roadmap|milestone|sprint)/gi,
          type: planning
        },
        {
          pattern: /(?:next|later|future|upcoming|pending|waiting)/gi,
          type: deferred
        },
        {
          pattern: /(?:blocked|dependency|waiting for|requires)/gi,
          type: blocked
        }
      ]
    };
  }

  startMonitoring() {
    console.log('👀 Starting Cursor chat monitoring...');
    
    // Monitor for new chat interactions
    setInterval(async () => {
      if (this.isRunning) {
        await this.processNewChats();
      }
    }, 30000); // Every 30 seconds

    // Process queue
    setInterval(async () => {
      if (this.isRunning) {
        await this.processQueue();
      }
    }, 60000); // Every minute

    // Generate reports
    setInterval(async () => {
      if (this.isRunning) {
        await this.generateReport();
      }
    }, 3600000); // Every hour
  }

  async processNewChats() {
    try {
      // This would integrate with Cursor's API or file system
      // For now, we'll simulate processing
      const newChats = await this.detectNewChats();
      
      for (const chat of newChats) {
        await this.processChat(chat);
      }
    } catch (error) {
      console.error('Error processing new chats:', error);
    }
  }

  async detectNewChats() {
    // This would detect new chat files or API responses
    // For now, return empty array
    return [];
  }

  async processChat(chat) {
    console.log(`📝 Processing chat: ${chat.id}`);
    
    // Extract todos from chat content
    const todos = this.extractTodos(chat.content);
    
    // Extract queue items
    const queueItems = this.extractQueueItems(chat.content);
    
    // Create todos
    for (const todo of todos) {
      await this.createTodo(todo, chat);
    }
    
    // Add to queue
    for (const item of queueItems) {
      await this.addToQueue(item, chat);
    }
    
    // Save chat to history
    this.chatHistory.push(chat);
    await this.saveChatHistory();
  }

  extractTodos(content) {
    const todos = [];
    
    for (const pattern of this.patterns.todoPatterns) {
      const matches = content.match(pattern.pattern);
      if (matches) {
        for (const match of matches) {
          const context = this.extractContext(content, match);
          todos.push({
            id: this.generateId(),
            text: match,
            priority: pattern.priority,
            type: pattern.type,
            context: context,
            timestamp: new Date().toISOString(),
            status: pending
          });
        }
      }
    }
    
    return todos;
  }

  extractQueueItems(content) {
    const items = [];
    
    for (const pattern of this.patterns.queuePatterns) {
      const matches = content.match(pattern.pattern);
      if (matches) {
        for (const match of matches) {
          const context = this.extractContext(content, match);
          items.push({
            id: this.generateId(),
            text: match,
            type: pattern.type,
            context: context,
            timestamp: new Date().toISOString(),
            status: queued
          });
        }
      }
    }
    
    return items;
  }

  extractContext(content, match, contextSize = 100) {
    const index = content.indexOf(match);
    const start = Math.max(0, index - contextSize);
    const end = Math.min(content.length, index + match.length + contextSize);
    return content.substring(start, end).trim();
  }

  async createTodo(todo, chat) {
    if (!this.config.autoCreateTodos) return;
    
    this.todos.set(todo.id, {
      ...todo,
      chatId: chat.id,
      chatTimestamp: chat.timestamp,
      source: cursor_chat
    });
    
    await this.saveTodos();
    
    console.log(`✅ Created todo: ${todo.text} (${todo.priority})`);
    this.emit('todoCreated', todo);
  }

  async addToQueue(item, chat) {
    if (!this.config.autoQueueTasks) return;
    
    if (this.queue.length >= this.config.maxQueueSize) {
      console.warn('⚠️ Queue is full, removing oldest item');
      this.queue.shift();
    }
    
    this.queue.push({
      ...item,
      chatId: chat.id,
      chatTimestamp: chat.timestamp,
      source: cursor_chat
    });
    
    await this.saveQueue();
    
    console.log(`📋 Added to queue: ${item.text} (${item.type})`);
    this.emit('itemQueued', item);
  }

  async processQueue() {
    if (this.queue.length === 0) return;
    
    console.log(`🔄 Processing ${this.queue.length} items in queue...`);
    
    // Sort by priority and timestamp
    this.queue.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const aPriority = priorityOrder[a.priority] || 2;
      const bPriority = priorityOrder[b.priority] || 2;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    
    // Process top items
    const itemsToProcess = this.queue.splice(0, 5); // Process 5 items at a time
    
    for (const item of itemsToProcess) {
      await this.processQueueItem(item);
    }
    
    await this.saveQueue();
  }

  async processQueueItem(item) {
    console.log(`⚡ Processing queue item: ${item.text}`);
    
    try {
      // This would integrate with project management tools
      // For now, we'll just mark as processed
      item.status = processed';
      item.processedAt = new Date().toISOString();
      
      // Create a todo from queue item if it's actionable
      if (this.isActionable(item)) {
        const todo = {
          id: this.generateId(),
          text: item.text,
          priority: this.determinePriority(item),
          type: item.type,
          context: item.context,
          timestamp: new Date().toISOString(),
          status: pending',
          source: queue_processing
        };
        
        await this.createTodo(todo, { id: queue', timestamp: new Date().toISOString() });
      }
      
      this.emit('itemProcessed', item);
      
    } catch (error) {
      console.error(`Error processing queue item: ${error.message}`);
      item.status = failed';
      item.error = error.message;
    }
  }

  isActionable(item) {
    const actionableTypes = ['action_item', bug_fix', feature_request', performance'];
    return actionableTypes.includes(item.type);
  }

  determinePriority(item) {
    // Determine priority based on type and content
    if (item.type === bug_fix') return critical';
    if (item.type === security') return high';
    if (item.type === performance') return medium';
    return low';
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      todos: {
        total: this.todos.size,
        byPriority: this.getTodosByPriority(),
        byType: this.getTodosByType(),
        byStatus: this.getTodosByStatus()
      },
      queue: {
        total: this.queue.length,
        byType: this.getQueueByType(),
        byStatus: this.getQueueByStatus()
      },
      chats: {
        total: this.chatHistory.length,
        recent: this.chatHistory.slice(-10)
      }
    };
    
    const reportFile = path.join(this.config.dataDir, `report-${Date.now()}.json`);
    await fs.writeFile(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Generated report: ${reportFile}`);
    this.emit('reportGenerated', report);
  }

  getTodosByPriority() {
    const byPriority = {};
    for (const [id, todo] of this.todos) {
      byPriority[todo.priority] = (byPriority[todo.priority] || 0) + 1;
    }
    return byPriority;
  }

  getTodosByType() {
    const byType = {};
    for (const [id, todo] of this.todos) {
      byType[todo.type] = (byType[todo.type] || 0) + 1;
    }
    return byType;
  }

  getTodosByStatus() {
    const byStatus = {};
    for (const [id, todo] of this.todos) {
      byStatus[todo.status] = (byStatus[todo.status] || 0) + 1;
    }
    return byStatus;
  }

  getQueueByType() {
    const byType = {};
    for (const item of this.queue) {
      byType[item.type] = (byType[item.type] || 0) + 1;
    }
    return byType;
  }

  getQueueByStatus() {
    const byStatus = {};
    for (const item of this.queue) {
      byStatus[item.status] = (byStatus[item.status] || 0) + 1;
    }
    return byStatus;
  }

  async saveTodos() {
    const todosObj = Object.fromEntries(this.todos);
    await fs.writeFile(this.config.todoFile, JSON.stringify(todosObj, null, 2));
  }

  async saveQueue() {
    await fs.writeFile(this.config.queueFile, JSON.stringify(this.queue, null, 2));
  }

  async saveChatHistory() {
    const historyFile = path.join(this.config.dataDir, chat-history.json');
    await fs.writeFile(historyFile, JSON.stringify(this.chatHistory, null, 2));
  }

  generateId() {
    return `cursor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      todosCount: this.todos.size,
      queueLength: this.queue.length,
      chatHistoryLength: this.chatHistory.length,
      lastActivity: this.chatHistory.length > 0 
        ? this.chatHistory[this.chatHistory.length - 1].timestamp 
        : null
    };
  }

  stop() {
    console.log('🛑 Stopping Cursor Chat Automation...');
    this.isRunning = false;
  }
}

// Export the class
module.exports = CursorChatAutomation;

// Run if called directly
if (require.main === module) {
  const automation = new CursorChatAutomation();
  
  automation.initialize().catch(error => {
    console.error('Failed to initialize Cursor Chat Automation:', error);
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Cursor Chat Automation...');
    automation.stop();
    process.exit(0);
  });
} 