#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class FileSyncManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/file-sync.log');
    this.ensureLogDir();
    this.config = {
      backupEnabled: true,
      backupRetention: 7, // days
      syncPatterns: [
        'src/**/*',
        'components/**/*',
        'pages/**/*',
        'styles/**/*',
        'public/**/*'
      ],
      excludePatterns: [
        'node_modules/**/*',
        '.git/**/*',
        'automation/logs/**/*',
        'automation/backups/**/*',
        '*.log',
        '*.tmp'
      ]
    };
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [FILE-SYNC] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async createBackup() {
    if (!this.config.backupEnabled) return true;
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.projectRoot, 'automation/backups/file-sync', timestamp);
      fs.mkdirSync(backupDir, { recursive: true });
      
      this.log(`Creating backup at: ${backupDir}`);
      
      // Create backup of important directories
      const backupDirs = ['src', 'components', 'pages', 'styles', 'public'];
      
      for (const dir of backupDirs) {
        const sourcePath = path.join(this.projectRoot, dir);
        const backupPath = path.join(backupDir, dir);
        
        if (fs.existsSync(sourcePath)) {
          await this.copyDirectory(sourcePath, backupPath);
        }
      }
      
      // Clean old backups
      await this.cleanOldBackups();
      
      this.log('Backup created successfully');
      return true;
    } catch (error) {
      this.log(`Backup creation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async copyDirectory(source, destination) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }
    
    const items = fs.readdirSync(source);
    
    for (const item of items) {
      const sourcePath = path.join(source, item);
      const destPath = path.join(destination, item);
      
      const stat = fs.statSync(sourcePath);
      
      if (stat.isDirectory()) {
        await this.copyDirectory(sourcePath, destPath);
      } else {
        fs.copyFileSync(sourcePath, destPath);
      }
    }
  }

  async cleanOldBackups() {
    try {
      const backupDir = path.join(this.projectRoot, 'automation/backups/file-sync');
      if (!fs.existsSync(backupDir)) return;
      
      const backups = fs.readdirSync(backupDir)
        .filter(item => {
          const itemPath = path.join(backupDir, item);
          return fs.statSync(itemPath).isDirectory();
        })
        .sort()
        .reverse();
      
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - this.config.backupRetention);
      
      for (const backup of backups) {
        const backupPath = path.join(backupDir, backup);
        const backupDate = new Date(backup.replace(/-/g, ':'));
        
        if (backupDate < cutoffDate) {
          fs.rmSync(backupPath, { recursive: true, force: true });
          this.log(`Removed old backup: ${backup}`);
        }
      }
    } catch (error) {
      this.log(`Failed to clean old backups: ${error.message}`, 'WARN');
    }
  }

  async validateFileIntegrity() {
    this.log('Validating file integrity...');
    
    try {
      let totalFiles = 0;
      let validFiles = 0;
      let invalidFiles = 0;
      
      for (const pattern of this.config.syncPatterns) {
        const files = this.globFiles(pattern);
        
        for (const file of files) {
          totalFiles++;
          
          try {
            // Check if file is readable
            fs.accessSync(file, fs.constants.R_OK);
            
            // Check if file has content
            const stats = fs.statSync(file);
            if (stats.size > 0) {
              validFiles++;
            } else {
              invalidFiles++;
              this.log(`Empty file detected: ${file}`, 'WARN');
            }
          } catch (error) {
            invalidFiles++;
            this.log(`Invalid file detected: ${file} - ${error.message}`, 'ERROR');
          }
        }
      }
      
      this.log(`File integrity check: ${validFiles}/${totalFiles} files valid`);
      
      if (invalidFiles > 0) {
        this.log(`${invalidFiles} files have issues`, 'WARN');
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`File integrity check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  globFiles(pattern) {
    const files = [];
    
    try {
      // Simple glob implementation
      if (pattern.includes('**')) {
        const [base, rest] = pattern.split('**');
        const basePath = path.resolve(this.projectRoot, base);
        
        if (fs.existsSync(basePath)) {
          this.walkDirectory(basePath, rest, files);
        }
      } else {
        const fullPath = path.resolve(this.projectRoot, pattern);
        if (fs.existsSync(fullPath)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error globbing pattern ${pattern}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  walkDirectory(dir, pattern, files) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.walkDirectory(itemPath, pattern, files);
        } else if (this.matchesPattern(itemPath, pattern)) {
          files.push(itemPath);
        }
      }
    } catch (error) {
      this.log(`Error walking directory ${dir}: ${error.message}`, 'WARN');
    }
  }

  matchesPattern(filePath, pattern) {
    if (!pattern) return true;
    
    const fileName = path.basename(filePath);
    const fileExt = path.extname(filePath);
    
    // Simple pattern matching
    if (pattern.includes('*')) {
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(fileName);
    }
    
    return fileName === pattern;
  }

  async syncFiles() {
    this.log('Starting file synchronization...');
    
    try {
      // Create backup first
      await this.createBackup();
      
      // Validate file integrity
      const integrityValid = await this.validateFileIntegrity();
      if (!integrityValid) {
        this.log('File integrity check failed, aborting sync', 'ERROR');
        return false;
      }
      
      // Perform file operations
      await this.performFileOperations();
      
      this.log('File synchronization completed successfully');
      return true;
    } catch (error) {
      this.log(`File synchronization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async performFileOperations() {
    this.log('Performing file operations...');
    
    // Check for temporary files and clean them
    await this.cleanTemporaryFiles();
    
    // Check for orphaned files
    await this.checkOrphanedFiles();
    
    // Validate file permissions
    await this.validateFilePermissions();
  }

  async cleanTemporaryFiles() {
    this.log('Cleaning temporary files...');
    
    try {
      const tempPatterns = ['*.tmp', '*.temp', '*.bak', '*.backup'];
      let cleanedCount = 0;
      
      for (const pattern of tempPatterns) {
        const files = this.globFiles(pattern);
        
        for (const file of files) {
          try {
            fs.unlinkSync(file);
            cleanedCount++;
          } catch (error) {
            this.log(`Failed to remove temp file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
      
      if (cleanedCount > 0) {
        this.log(`Cleaned ${cleanedCount} temporary files`);
      }
    } catch (error) {
      this.log(`Failed to clean temporary files: ${error.message}`, 'WARN');
    }
  }

  async checkOrphanedFiles() {
    this.log('Checking for orphaned files...');
    
    try {
      // Check for files that might be orphaned
      const orphanedPatterns = [
        'src/**/*.disabled',
        'components/**/*.disabled',
        'pages/**/*.disabled'
      ];
      
      let orphanedCount = 0;
      
      for (const pattern of orphanedPatterns) {
        const files = this.globFiles(pattern);
        orphanedCount += files.length;
      }
      
      if (orphanedCount > 0) {
        this.log(`Found ${orphanedCount} potentially orphaned files`, 'WARN');
      }
    } catch (error) {
      this.log(`Failed to check orphaned files: ${error.message}`, 'WARN');
    }
  }

  async validateFilePermissions() {
    this.log('Validating file permissions...');
    
    try {
      const criticalFiles = [
        'package.json',
        'package-lock.json',
        'README.md',
        'src/App.tsx',
        'src/main.tsx'
      ];
      
      for (const file of criticalFiles) {
        const filePath = path.join(this.projectRoot, file);
        
        if (fs.existsSync(filePath)) {
          try {
            fs.accessSync(filePath, fs.constants.R_OK);
            this.log(`File permissions OK: ${file}`);
          } catch (error) {
            this.log(`File permission issue: ${file}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Failed to validate file permissions: ${error.message}`, 'WARN');
    }
  }

  async run() {
    this.log('Starting File Sync Manager...');
    
    try {
      const success = await this.syncFiles();
      
      if (success) {
        this.log('File Sync Manager completed successfully');
        return true;
      } else {
        this.log('File Sync Manager completed with errors', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`File Sync Manager failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fileSync = new FileSyncManager();
  fileSync.run().then((success) => {
    process.exit(success ? 0 : 1);
  }).catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = FileSyncManager;
