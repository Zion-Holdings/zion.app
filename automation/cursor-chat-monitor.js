
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
 * Cursor Chat Monitor
 * 
 * Monitors and captures Cursor chat interactions:
 * - File system monitoring for chat logs
 * - Real-time chat capture
 * - Integration with todo and queue systems
 * - Chat history management
 */

const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');
const EventEmitter = require('events');

class CursorChatMonitor extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      cursorDataDir: config.cursorDataDir || path.join(process.env.HOME, '.cursor'),
      chatLogDir: config.chatLogDir || path.join(process.env.HOME, '.cursor', 'chat-logs'),
      outputDir: config.outputDir || './data/cursor-chats',
      watchInterval: config.watchInterval || 5000,
      maxHistorySize: config.maxHistorySize || 1000,
      ...config
    };
    
    this.isRunning = false;
    this.watcher = null;
    this.chatHistory = [];
    this.processedFiles = new Set();
  }

  async initialize() {
    logger.info('👀 Initializing Cursor Chat Monitor...');
    
    try {
      // Ensure output directory exists
      await this.ensureOutputDirectory();
      
      // Load existing chat history
      await this.loadChatHistory();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.isRunning = true;
      logger.info('✅ Cursor Chat Monitor initialized');
      
    } catch (error) {
      logger.error('❌ Failed to initialize Cursor Chat Monitor:', error);
      throw error;
    }
  }

  async ensureOutputDirectory() {
    try {
      await fs.mkdir(this.config.outputDir, { recursive: true });
    } catch (error) {
      logger.error('Error creating output directory:', error);
    }
  }

  async loadChatHistory() {
    try {
      const historyFile = path.join(this.config.outputDir, 'chat-history.json');
      const historyData = await fs.readFile(historyFile, 'utf8');
      this.chatHistory = JSON.parse(historyData);
      logger.info(`📚 Loaded ${this.chatHistory.length} chat history entries`);
    } catch (error) {
      logger.info('No existing chat history found, starting fresh');
      this.chatHistory = [];
    }
  }

  async startMonitoring() {
    logger.info('🔍 Starting Cursor chat monitoring...');
    
    // Monitor Cursor data directory for new chat files
    this.watcher = chokidar.watch(this.config.cursorDataDir, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      depth: 3
    });

    this.watcher
      .on('add', (filePath) => this.handleNewFile(filePath))
      .on('change', (filePath) => this.handleFileChange(filePath))
      .on('unlink', (filePath) => this.handleFileRemoved(filePath))
      .on('error', (error) => logger.error('Watcher error:', error));

    // Also monitor for existing files
    await this.scanExistingFiles();
  }

  async scanExistingFiles() {
    try {
      const files = await this.findChatFiles(this.config.cursorDataDir);
      logger.info(`🔍 Found ${files.length} existing chat files`);
      
      for (const file of files) {
        await this.processChatFile(file);
      }
    } catch (error) {
      logger.error('Error scanning existing files:', error);
    }
  }

  async findChatFiles(dir) {
    const chatFiles = [];
    
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          const subFiles = await this.findChatFiles(fullPath);
          chatFiles.push(...subFiles);
        } else if (this.isChatFile(entry.name)) {
          chatFiles.push(fullPath);
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
    }
    
    return chatFiles;
  }

  isChatFile(filename) {
    const chatPatterns = [
      /chat/i,
      /conversation/i,
      /session/i,
      /log/i,
      /history/i,
      /\.json$/i,
      /\.txt$/i
    ];
    
    return chatPatterns.some(pattern => pattern.test(filename));
  }

  async handleNewFile(filePath) {
    if (this.isChatFile(path.basename(filePath))) {
      logger.info(`📄 New chat file detected: ${filePath}`);
      await this.processChatFile(filePath);
    }
  }

  async handleFileChange(filePath) {
    if (this.isChatFile(path.basename(filePath))) {
      logger.info(`📝 Chat file changed: ${filePath}`);
      await this.processChatFile(filePath);
    }
  }

  async handleFileRemoved(filePath) {
    if (this.isChatFile(path.basename(filePath))) {
      logger.info(`🗑️ Chat file removed: ${filePath}`);
      // Could implement cleanup logic here
    }
  }

  async processChatFile(filePath) {
    if (this.processedFiles.has(filePath)) {
      return; // Already processed
    }

    try {
      const content = await fs.readFile(filePath, 'utf8');
      const chatData = this.parseChatContent(content, filePath);
      
      if (chatData) {
        await this.saveChatData(chatData);
        this.processedFiles.add(filePath);
        
        logger.info(`✅ Processed chat file: ${path.basename(filePath)}`);
        this.emit('chatProcessed', chatData);
      }
    } catch (error) {
      logger.error(`Error processing chat file ${filePath}:`, error);
    }
  }

  parseChatContent(content, filePath) {
    try {
      // Try to parse as JSON first
      const jsonData = JSON.parse(content);
      return this.extractChatFromJson(jsonData, filePath);
    } catch (error) {
      // If not JSON, try to parse as text
      return this.extractChatFromText(content, filePath);
    }
  }

  extractChatFromJson(data, filePath) {
    const chat = {
      id: this.generateChatId(filePath),
      source: 'cursor_json',
      filePath: filePath,
      timestamp: new Date().toISOString(),
      content: '',
      messages: [],
      metadata: {}
    };

    // Extract chat content from various JSON structures
    if (data.messages) {
      chat.messages = data.messages;
      chat.content = this.extractTextFromMessages(data.messages);
    } else if (data.conversation) {
      chat.messages = data.conversation;
      chat.content = this.extractTextFromMessages(data.conversation);
    } else if (data.chat) {
      chat.messages = data.chat;
      chat.content = this.extractTextFromMessages(data.chat);
    } else if (typeof data === 'string') {
      chat.content = data;
    } else {
      chat.content = JSON.stringify(data);
    }

    // Extract metadata
    if (data.metadata) {
      chat.metadata = data.metadata;
    }
    if (data.timestamp) {
      chat.timestamp = data.timestamp;
    }
    if (data.sessionId) {
      chat.metadata.sessionId = data.sessionId;
    }

    return chat;
  }

  extractChatFromText(content, filePath) {
    return {
      id: this.generateChatId(filePath),
      source: 'cursor_text',
      filePath: filePath,
      timestamp: new Date().toISOString(),
      content: content,
      messages: [],
      metadata: {
        contentType: 'text',
        fileSize: content.length
      }
    };
  }

  extractTextFromMessages(messages) {
    if (!Array.isArray(messages)) {
      return JSON.stringify(messages);
    }

    return messages
      .map(msg => {
        if (typeof msg === 'string') {
          return msg;
        } else if (msg.content) {
          return msg.content;
        } else if (msg.text) {
          return msg.text;
        } else if (msg.message) {
          return msg.message;
        } else {
          return JSON.stringify(msg);
        }
      })
      .join('\n');
  }

  async saveChatData(chatData) {
    // Add to history
    this.chatHistory.push(chatData);
    
    // Limit history size
    if (this.chatHistory.length > this.config.maxHistorySize) {
      this.chatHistory = this.chatHistory.slice(-this.config.maxHistorySize);
    }
    
    // Save individual chat file
    const chatFile = path.join(this.config.outputDir, `${chatData.id}.json`);
    await fs.writeFile(chatFile, JSON.stringify(chatData, null, 2));
    
    // Update history file
    await this.saveChatHistory();
  }

  async saveChatHistory() {
    const historyFile = path.join(this.config.outputDir, 'chat-history.json');
    await fs.writeFile(historyFile, JSON.stringify(this.chatHistory, null, 2));
  }

  generateChatId(filePath) {
    const basename = path.basename(filePath, path.extname(filePath));
    const timestamp = Date.now();
    return `cursor_chat_${basename}_${timestamp}`;
  }

  getRecentChats(limit = 10) {
    return this.chatHistory.slice(-limit);
  }

  getChatsByDate(startDate, endDate) {
    return this.chatHistory.filter(chat => {
      const chatDate = new Date(chat.timestamp);
      return chatDate >= startDate && chatDate <= endDate;
    });
  }

  getChatsBySource(source) {
    return this.chatHistory.filter(chat => chat.source === source);
  }

  searchChats(query) {
    const lowerQuery = query.toLowerCase();
    return this.chatHistory.filter(chat => 
      chat.content.toLowerCase().includes(lowerQuery) ||
      chat.filePath.toLowerCase().includes(lowerQuery)
    );
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      chatHistoryLength: this.chatHistory.length,
      processedFilesCount: this.processedFiles.size,
      lastActivity: this.chatHistory.length > 0 
        ? this.chatHistory[this.chatHistory.length - 1].timestamp 
        : null,
      watcherActive: this.watcher !== null
    };
  }

  stop() {
    logger.info('🛑 Stopping Cursor Chat Monitor...');
    this.isRunning = false;
    
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
    }
  }
}

// Export the class
module.exports = CursorChatMonitor;

// Run if called directly
if (require.main === module) {
  const monitor = new CursorChatMonitor();
  
  monitor.initialize().catch(error => {
    logger.error('Failed to initialize Cursor Chat Monitor:', error);
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    logger.info('\n🛑 Shutting down Cursor Chat Monitor...');
    monitor.stop();
    process.exit(0);
  });
} 