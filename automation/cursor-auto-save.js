
const winston = require('winston');

const logger = winston.createLogger({
  level: info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: automation-script' },
  transports: [
    new winston.transports.File({ filename: logs/error.log', level: error' }),
    new winston.transports.File({ filename: logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

/**
 * Cursor Auto-Save Automation
 * 
 * Ensures changes are automatically saved and committed in Cursor
 * Monitors file changes and triggers auto-save functionality
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class CursorAutoSave {
  constructor() {
    this.watchedFiles = new Set();
    this.debounceTimers = new Map();
    this.isRunning = false;
  }

  start() {
    logger.info('🚀 Starting Cursor Auto-Save Automation...');
    this.isRunning = true;
    
    // Watch for file changes in the project
    this.watchProjectFiles();
    
    // Set up periodic auto-save
    setInterval(() => {
      this.triggerAutoSave();
    }, 30000); // Every 30 seconds
    
    logger.info('✅ Cursor Auto-Save Automation is running');
  }

  watchProjectFiles() {
    const projectRoot = process.cwd();
    
    // Watch common directories for changes
    const watchDirs = [
      src',
      pages',
      components',
      automation',
      public
    ];

    watchDirs.forEach(dir => {
      const dirPath = path.join(projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.watchDirectory(dirPath);
      }
    });

    // Watch root files
    const rootFiles = [
      package.json',
      next.config.js',
      tailwind.config.js',
      tsconfig.json
    ];

    rootFiles.forEach(file => {
      const filePath = path.join(projectRoot, file);
      if (fs.existsSync(filePath)) {
        this.watchFile(filePath);
      }
    });
  }

  watchDirectory(dirPath) {
    try {
      fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
        if (filename && this.shouldWatchFile(filename)) {
          const fullPath = path.join(dirPath, filename);
          this.onFileChange(fullPath, eventType);
        }
      });
      logger.info(`👀 Watching directory: ${dirPath}`);
    } catch (error) {
      logger.info(`⚠️  Could not watch directory ${dirPath}: ${error.message}`);
    }
  }

  watchFile(filePath) {
    try {
      fs.watch(filePath, (eventType, filename) => {
        this.onFileChange(filePath, eventType);
      });
      logger.info(`👀 Watching file: ${filePath}`);
    } catch (error) {
      logger.info(`⚠️  Could not watch file ${filePath}: ${error.message}`);
    }
  }

  shouldWatchFile(filename) {
    const extensions = ['.js', .jsx', .ts', .tsx', .json', .css', .scss', .md'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  onFileChange(filePath, eventType) {
    if (eventType === change') {
      logger.info(`📝 File changed: ${filePath}`);
      
      // Debounce the auto-save
      if (this.debounceTimers.has(filePath)) {
        clearTimeout(this.debounceTimers.get(filePath));
      }
      
      this.debounceTimers.set(filePath, setTimeout(() => {
        this.triggerAutoSave();
      }, 2000)); // 2 second debounce
    }
  }

  triggerAutoSave() {
    if (!this.isRunning) return;
    
    logger.info('💾 Triggering auto-save...');
    
    // Check git status
    exec('git status --porcelain', (error, stdout, stderr) => {
      if (error) {
        logger.info(`❌ Git status error: ${error.message}`);
        return;
      }
      
      if (stdout.trim()) {
        logger.info('📦 Changes detected, auto-saving...');
        this.autoSaveChanges();
      } else {
        logger.info('✅ No changes to save');
      }
    });
  }

  autoSaveChanges() {
    // Add all changes
    exec('git add .', (error, stdout, stderr) => {
      if (error) {
        logger.info(`❌ Git add error: ${error.message}`);
        return;
      }
      
      logger.info('📝 Changes staged');
      
      // Commit with auto-save message
      const timestamp = new Date().toISOString();
      const commitMessage = `Auto-save: ${timestamp}`;
      
      exec(`git commit --no-verify -m "${commitMessage}"`, (error, stdout, stderr) => {
        if (error) {
          logger.info(`❌ Git commit error: ${error.message}`);
          return;
        }
        
        logger.info('✅ Changes auto-saved');
        
        // Push changes
        exec('git push', (error, stdout, stderr) => {
          if (error) {
            logger.info(`❌ Git push error: ${error.message}`);
            return;
          }
          
          logger.info('🚀 Changes pushed to remote');
        });
      });
    });
  }

  stop() {
    logger.info('🛑 Stopping Cursor Auto-Save Automation...');
    this.isRunning = false;
    
    // Clear all debounce timers
    this.debounceTimers.forEach(timer => clearTimeout(timer));
    this.debounceTimers.clear();
    
    logger.info('✅ Cursor Auto-Save Automation stopped');
  }
}

// Run the auto-save system
if (require.main === module) {
  const autoSave = new CursorAutoSave();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    autoSave.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    autoSave.stop();
    process.exit(0);
  });
  
  autoSave.start();
}

module.exports = CursorAutoSave; 