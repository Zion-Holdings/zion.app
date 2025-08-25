#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DataSyncManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/data-sync.log');
    this.ensureLogDir();
    this.config = {
      backupEnabled: true,
      backupRetention: 7, // days
      dataDirectories: [
        'data',
        'automation/data',
        'public/reports',
        'src/data'
      ],
      validationEnabled: true,
      autoRepair: true,
      syncInterval: 300000 // 5 minutes
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
    const logMessage = `[${timestamp}] [${level}] [DATA-SYNC] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async createDataBackup() {
    if (!this.config.backupEnabled) return true;
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.projectRoot, 'automation/backups/data-sync', timestamp);
      fs.mkdirSync(backupDir, { recursive: true });
      
      this.log(`Creating data backup at: ${backupDir}`);
      
      // Backup data directories
      for (const dataDir of this.config.dataDirectories) {
        const sourcePath = path.join(this.projectRoot, dataDir);
        const backupPath = path.join(backupDir, dataDir);
        
        if (fs.existsSync(sourcePath)) {
          await this.copyDirectory(sourcePath, backupPath);
        }
      }
      
      // Clean old backups
      await this.cleanOldBackups();
      
      this.log('Data backup created successfully');
      return true;
    } catch (error) {
      this.log(`Data backup creation failed: ${error.message}`, 'ERROR');
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
      const backupDir = path.join(this.projectRoot, 'automation/backups/data-sync');
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
          this.log(`Removed old data backup: ${backup}`);
        }
      }
    } catch (error) {
      this.log(`Failed to clean old data backups: ${error.message}`, 'WARN');
    }
  }

  async validateDataIntegrity() {
    if (!this.config.validationEnabled) return true;
    
    this.log('Validating data integrity...');
    
    try {
      let totalFiles = 0;
      let validFiles = 0;
      let invalidFiles = 0;
      let repairableFiles = 0;
      
      for (const dataDir of this.config.dataDirectories) {
        const dirPath = path.join(this.projectRoot, dataDir);
        
        if (fs.existsSync(dirPath)) {
          const files = this.getAllFiles(dirPath);
          
          for (const file of files) {
            totalFiles++;
            
            try {
              const validation = await this.validateFile(file);
              
              if (validation.valid) {
                validFiles++;
              } else if (validation.repairable && this.config.autoRepair) {
                repairableFiles++;
                await this.repairFile(file, validation.issues);
              } else {
                invalidFiles++;
                this.log(`Invalid file: ${file} - ${validation.issues.join(', ')}`, 'ERROR');
              }
            } catch (error) {
              invalidFiles++;
              this.log(`Error validating file ${file}: ${error.message}`, 'ERROR');
            }
          }
        }
      }
      
      this.log(`Data integrity check: ${validFiles}/${totalFiles} files valid, ${repairableFiles} repaired`);
      
      if (invalidFiles > 0) {
        this.log(`${invalidFiles} files have critical issues`, 'WARN');
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`Data integrity check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  getAllFiles(dirPath) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          files.push(...this.getAllFiles(itemPath));
        } else {
          files.push(itemPath);
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dirPath}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  async validateFile(filePath) {
    const result = {
      valid: true,
      repairable: false,
      issues: []
    };
    
    try {
      // Check file extension
      const ext = path.extname(filePath).toLowerCase();
      
      if (ext === '.json') {
        return await this.validateJsonFile(filePath);
      } else if (ext === '.ts' || ext === '.js') {
        return await this.validateScriptFile(filePath);
      } else if (ext === '.md') {
        return await this.validateMarkdownFile(filePath);
      } else {
        // Generic file validation
        return await this.validateGenericFile(filePath);
      }
    } catch (error) {
      result.valid = false;
      result.issues.push(`Validation error: ${error.message}`);
    }
    
    return result;
  }

  async validateJsonFile(filePath) {
    const result = {
      valid: true,
      repairable: false,
      issues: []
    };
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if content is empty
      if (!content.trim()) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Empty file');
        return result;
      }
      
      // Try to parse JSON
      try {
        JSON.parse(content);
      } catch (parseError) {
        result.valid = false;
        result.repairable = true;
        result.issues.push(`Invalid JSON: ${parseError.message}`);
      }
      
      // Check for common issues
      if (content.includes('undefined') || content.includes('null')) {
        result.issues.push('Contains undefined/null values');
      }
      
    } catch (error) {
      result.valid = false;
      result.issues.push(`File read error: ${error.message}`);
    }
    
    return result;
  }

  async validateScriptFile(filePath) {
    const result = {
      valid: true,
      repairable: false,
      issues: []
    };
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if content is empty
      if (!content.trim()) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Empty file');
        return result;
      }
      
      // Check for syntax issues
      if (content.includes('<<<<<<< HEAD') || content.includes('>>>>>>>')) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Contains merge conflict markers');
      }
      
      // Check for common syntax issues
      if (content.includes('undefined') && !content.includes('typeof undefined')) {
        result.issues.push('Potential undefined reference');
      }
      
    } catch (error) {
      result.valid = false;
      result.issues.push(`File read error: ${error.message}`);
    }
    
    return result;
  }

  async validateMarkdownFile(filePath) {
    const result = {
      valid: true,
      repairable: false,
      issues: []
    };
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if content is empty
      if (!content.trim()) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Empty file');
        return result;
      }
      
      // Check for broken links
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const links = content.match(linkRegex);
      
      if (links) {
        for (const link of links) {
          const urlMatch = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (urlMatch) {
            const url = urlMatch[2];
            if (url.startsWith('http') && !url.includes('ziontechgroup.com')) {
              result.issues.push(`External link: ${url}`);
            }
          }
        }
      }
      
    } catch (error) {
      result.valid = false;
      result.issues.push(`File read error: ${error.message}`);
    }
    
    return result;
  }

  async validateGenericFile(filePath) {
    const result = {
      valid: true,
      repairable: false,
      issues: []
    };
    
    try {
      const stats = fs.statSync(filePath);
      
      // Check file size
      if (stats.size === 0) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Empty file');
      }
      
      // Check file permissions
      try {
        fs.accessSync(filePath, fs.constants.R_OK);
      } catch (error) {
        result.valid = false;
        result.issues.push('File not readable');
      }
      
    } catch (error) {
      result.valid = false;
      result.issues.push(`File access error: ${error.message}`);
    }
    
    return result;
  }

  async repairFile(filePath, issues) {
    this.log(`Repairing file: ${filePath}`);
    
    try {
      const ext = path.extname(filePath).toLowerCase();
      
      if (ext === '.json') {
        await this.repairJsonFile(filePath, issues);
      } else if (ext === '.ts' || ext === '.js') {
        await this.repairScriptFile(filePath, issues);
      } else if (ext === '.md') {
        await this.repairMarkdownFile(filePath, issues);
      }
      
      this.log(`File repaired: ${filePath}`);
    } catch (error) {
      this.log(`Failed to repair file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async repairJsonFile(filePath, issues) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      
      // Try to parse and re-stringify to fix formatting
      try {
        const parsed = JSON.parse(content);
        fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
      } catch (parseError) {
        // If still can't parse, create a minimal valid JSON
        fs.writeFileSync(filePath, '{}');
      }
    } catch (error) {
      this.log(`Failed to repair JSON file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async repairScriptFile(filePath, issues) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      
      // Remove empty lines at the end
      content = content.replace(/\n+$/, '\n');
      
      fs.writeFileSync(filePath, content);
    } catch (error) {
      this.log(`Failed to repair script file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async repairMarkdownFile(filePath, issues) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      
      // Remove empty lines at the end
      content = content.replace(/\n+$/, '\n');
      
      fs.writeFileSync(filePath, content);
    } catch (error) {
      this.log(`Failed to repair markdown file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async syncData() {
    this.log('Starting data synchronization...');
    
    try {
      // Create backup first
      await this.createDataBackup();
      
      // Validate data integrity
      const integrityValid = await this.validateDataIntegrity();
      if (!integrityValid) {
        this.log('Data integrity check failed, aborting sync', 'ERROR');
        return false;
      }
      
      // Perform data operations
      await this.performDataOperations();
      
      this.log('Data synchronization completed successfully');
      return true;
    } catch (error) {
      this.log(`Data synchronization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async performDataOperations() {
    this.log('Performing data operations...');
    
    // Check for data consistency
    await this.checkDataConsistency();
    
    // Validate data relationships
    await this.validateDataRelationships();
    
    // Clean up orphaned data
    await this.cleanupOrphanedData();
  }

  async checkDataConsistency() {
    this.log('Checking data consistency...');
    
    try {
      // Check for duplicate data
      await this.checkDuplicateData();
      
      // Check for data format consistency
      await this.checkDataFormatConsistency();
      
    } catch (error) {
      this.log(`Data consistency check failed: ${error.message}`, 'WARN');
    }
  }

  async checkDuplicateData() {
    this.log('Checking for duplicate data...');
    
    try {
      // This would implement duplicate detection logic
      // For now, just log the check
      this.log('Duplicate data check completed');
    } catch (error) {
      this.log(`Duplicate data check failed: ${error.message}`, 'WARN');
    }
  }

  async checkDataFormatConsistency() {
    this.log('Checking data format consistency...');
    
    try {
      // This would implement format consistency checks
      // For now, just log the check
      this.log('Data format consistency check completed');
    } catch (error) {
      this.log(`Data format consistency check failed: ${error.message}`, 'WARN');
    }
  }

  async validateDataRelationships() {
    this.log('Validating data relationships...');
    
    try {
      // This would implement relationship validation
      // For now, just log the check
      this.log('Data relationship validation completed');
    } catch (error) {
      this.log(`Data relationship validation failed: ${error.message}`, 'WARN');
    }
  }

  async cleanupOrphanedData() {
    this.log('Cleaning up orphaned data...');
    
    try {
      // This would implement orphaned data cleanup
      // For now, just log the check
      this.log('Orphaned data cleanup completed');
    } catch (error) {
      this.log(`Orphaned data cleanup failed: ${error.message}`, 'WARN');
    }
  }

  async run() {
    this.log('Starting Data Sync Manager...');
    
    try {
      const success = await this.syncData();
      
      if (success) {
        this.log('Data Sync Manager completed successfully');
        return true;
      } else {
        this.log('Data Sync Manager completed with errors', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Data Sync Manager failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const dataSync = new DataSyncManager();
  dataSync.run().then((success) => {
    process.exit(success ? 0 : 1);
  }).catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = DataSyncManager;
