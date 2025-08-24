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
    console.log('🚀 Starting Cursor Auto-Save Automation...');
    this.isRunning = true;
    
    // Watch for file changes in the project
    this.watchProjectFiles();
    
    // Set up periodic auto-save
    setInterval(() => {
      this.triggerAutoSave();
    }, 30000); // Every 30 seconds
    
    console.log('✅ Cursor Auto-Save Automation is running');
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
      console.log(`👀 Watching directory: ${dirPath}`);
    } catch (error) {
      console.log(`⚠️  Could not watch directory ${dirPath}: ${error.message}`);
    }
  }

  watchFile(filePath) {
    try {
      fs.watch(filePath, (eventType, filename) => {
        this.onFileChange(filePath, eventType);
      });
      console.log(`👀 Watching file: ${filePath}`);
    } catch (error) {
      console.log(`⚠️  Could not watch file ${filePath}: ${error.message}`);
    }
  }

  shouldWatchFile(filename) {
    const extensions = ['.js', .jsx', .ts', .tsx', .json', .css', .scss', .md'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  onFileChange(filePath, eventType) {
    if (eventType === change') {
      console.log(`📝 File changed: ${filePath}`);
      
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
    
    console.log('💾 Triggering auto-save...');
    
    // Check git status
    exec('git status --porcelain', (error, stdout, stderr) => {
      if (error) {
        console.log(`❌ Git status error: ${error.message}`);
        return;
      }
      
      if (stdout.trim()) {
        console.log('📦 Changes detected, auto-saving...');
        this.autoSaveChanges();
      } else {
        console.log('✅ No changes to save');
      }
    });
  }

  autoSaveChanges() {
    // Add all changes
    exec('git add .', (error, stdout, stderr) => {
      if (error) {
        console.log(`❌ Git add error: ${error.message}`);
        return;
      }
      
      console.log('📝 Changes staged');
      
      // Commit with auto-save message
      const timestamp = new Date().toISOString();
      const commitMessage = `Auto-save: ${timestamp}`;
      
      exec(`git commit --no-verify -m "${commitMessage}"`, (error, stdout, stderr) => {
        if (error) {
          console.log(`❌ Git commit error: ${error.message}`);
          return;
        }
        
        console.log('✅ Changes auto-saved');
        
        // Push changes
        exec('git push', (error, stdout, stderr) => {
          if (error) {
            console.log(`❌ Git push error: ${error.message}`);
            return;
          }
          
          console.log('🚀 Changes pushed to remote');
        });
      });
    });
  }

  stop() {
    console.log('🛑 Stopping Cursor Auto-Save Automation...');
    this.isRunning = false;
    
    // Clear all debounce timers
    this.debounceTimers.forEach(timer => clearTimeout(timer));
    this.debounceTimers.clear();
    
    console.log('✅ Cursor Auto-Save Automation stopped');
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