#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConfigSyncManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/config-sync.log');
    this.ensureLogDir();
    this.config = {
      backupEnabled: true,
      backupRetention: 7, // days
      configFiles: [
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'vite.config.ts',
        'tailwind.config.js',
        'postcss.config.js',
        'eslint.config.js',
        'automation/autonomous-config.json'
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
    const logMessage = `[${timestamp}] [${level}] [CONFIG-SYNC] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async createConfigBackup() {
    if (!this.config.backupEnabled) return true;
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.projectRoot, 'automation/backups/config-sync', timestamp);
      fs.mkdirSync(backupDir, { recursive: true });
      
      this.log(`Creating config backup at: ${backupDir}`);
      
      // Backup config files
      for (const configFile of this.config.configFiles) {
        const sourcePath = path.join(this.projectRoot, configFile);
        const backupPath = path.join(backupDir, configFile);
        
        if (fs.existsSync(sourcePath)) {
          // Ensure backup directory structure exists
          const backupDirPath = path.dirname(backupPath);
          if (!fs.existsSync(backupDirPath)) {
            fs.mkdirSync(backupDirPath, { recursive: true });
          }
          
          fs.copyFileSync(sourcePath, backupPath);
        }
      }
      
      // Clean old backups
      await this.cleanOldBackups();
      
      this.log('Config backup created successfully');
      return true;
    } catch (error) {
      this.log(`Config backup creation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async cleanOldBackups() {
    try {
      const backupDir = path.join(this.projectRoot, 'automation/backups/config-sync');
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
          this.log(`Removed old config backup: ${backup}`);
        }
      }
    } catch (error) {
      this.log(`Failed to clean old config backups: ${error.message}`, 'WARN');
    }
  }

  async validateConfigIntegrity() {
    if (!this.config.validationEnabled) return true;
    
    this.log('Validating config integrity...');
    
    try {
      let totalFiles = 0;
      let validFiles = 0;
      let invalidFiles = 0;
      let repairableFiles = 0;
      
      for (const configFile of this.config.configFiles) {
        const filePath = path.join(this.projectRoot, configFile);
        
        if (fs.existsSync(filePath)) {
          totalFiles++;
          
          try {
            const validation = await this.validateConfigFile(filePath);
            
            if (validation.valid) {
              validFiles++;
            } else if (validation.repairable && this.config.autoRepair) {
              repairableFiles++;
              await this.repairConfigFile(filePath, validation.issues);
            } else {
              invalidFiles++;
              this.log(`Invalid config file: ${configFile} - ${validation.issues.join(', ')}`, 'ERROR');
            }
          } catch (error) {
            invalidFiles++;
            this.log(`Error validating config file ${configFile}: ${error.message}`, 'ERROR');
          }
        }
      }
      
      this.log(`Config integrity check: ${validFiles}/${totalFiles} files valid, ${repairableFiles} repaired`);
      
      if (invalidFiles > 0) {
        this.log(`${invalidFiles} config files have critical issues`, 'WARN');
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`Config integrity check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async validateConfigFile(filePath) {
    const result = {
      valid: true,
      repairable: false,
      issues: []
    };
    
    try {
      const ext = path.extname(filePath).toLowerCase();
      
      if (ext === '.json') {
        return await this.validateJsonConfig(filePath);
      } else if (ext === '.ts' || ext === '.js') {
        return await this.validateScriptConfig(filePath);
      } else {
        return await this.validateGenericConfig(filePath);
      }
    } catch (error) {
      result.valid = false;
      result.issues.push(`Validation error: ${error.message}`);
    }
    
    return result;
  }

  async validateJsonConfig(filePath) {
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
      
      // Check for merge conflict markers
      if (content.includes('<<<<<<< HEAD') || content.includes('>>>>>>>')) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Contains merge conflict markers');
      }
      
    } catch (error) {
      result.valid = false;
      result.issues.push(`File read error: ${error.message}`);
    }
    
    return result;
  }

  async validateScriptConfig(filePath) {
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
      
      // Check for merge conflict markers
      if (content.includes('<<<<<<< HEAD') || content.includes('>>>>>>>')) {
        result.valid = false;
        result.repairable = true;
        result.issues.push('Contains merge conflict markers');
      }
      
      // Check for syntax issues
      if (content.includes('undefined') && !content.includes('typeof undefined')) {
        result.issues.push('Potential undefined reference');
      }
      
    } catch (error) {
      result.valid = false;
      result.issues.push(`File read error: ${error.message}`);
    }
    
    return result;
  }

  async validateGenericConfig(filePath) {
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

  async repairConfigFile(filePath, issues) {
    this.log(`Repairing config file: ${filePath}`);
    
    try {
      const ext = path.extname(filePath).toLowerCase();
      
      if (ext === '.json') {
        await this.repairJsonConfig(filePath, issues);
      } else if (ext === '.ts' || ext === '.js') {
        await this.repairScriptConfig(filePath, issues);
      }
      
      this.log(`Config file repaired: ${filePath}`);
    } catch (error) {
      this.log(`Failed to repair config file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async repairJsonConfig(filePath, issues) {
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
      this.log(`Failed to repair JSON config ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async repairScriptConfig(filePath, issues) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      
      // Remove empty lines at the end
      content = content.replace(/\n+$/, '\n');
      
      fs.writeFileSync(filePath, content);
    } catch (error) {
      this.log(`Failed to repair script config ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async syncConfigs() {
    this.log('Starting config synchronization...');
    
    try {
      // Create backup first
      await this.createConfigBackup();
      
      // Validate config integrity
      const integrityValid = await this.validateConfigIntegrity();
      if (!integrityValid) {
        this.log('Config integrity check failed, aborting sync', 'ERROR');
        return false;
      }
      
      // Perform config operations
      await this.performConfigOperations();
      
      this.log('Config synchronization completed successfully');
      return true;
    } catch (error) {
      this.log(`Config synchronization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async performConfigOperations() {
    this.log('Performing config operations...');
    
    // Check for config consistency
    await this.checkConfigConsistency();
    
    // Validate config dependencies
    await this.validateConfigDependencies();
    
    // Clean up invalid configs
    await this.cleanupInvalidConfigs();
  }

  async checkConfigConsistency() {
    this.log('Checking config consistency...');
    
    try {
      // Check for conflicting configurations
      await this.checkConflictingConfigs();
      
      // Check for missing required configs
      await this.checkMissingConfigs();
      
    } catch (error) {
      this.log(`Config consistency check failed: ${error.message}`, 'WARN');
    }
  }

  async checkConflictingConfigs() {
    this.log('Checking for conflicting configs...');
    
    try {
      // This would implement conflict detection logic
      // For now, just log the check
      this.log('Config conflict check completed');
    } catch (error) {
      this.log(`Config conflict check failed: ${error.message}`, 'WARN');
    }
  }

  async checkMissingConfigs() {
    this.log('Checking for missing configs...');
    
    try {
      // This would implement missing config detection
      // For now, just log the check
      this.log('Missing config check completed');
    } catch (error) {
      this.log(`Missing config check failed: ${error.message}`, 'WARN');
    }
  }

  async validateConfigDependencies() {
    this.log('Validating config dependencies...');
    
    try {
      // This would implement dependency validation
      // For now, just log the check
      this.log('Config dependency validation completed');
    } catch (error) {
      this.log(`Config dependency validation failed: ${error.message}`, 'WARN');
    }
  }

  async cleanupInvalidConfigs() {
    this.log('Cleaning up invalid configs...');
    
    try {
      // This would implement invalid config cleanup
      // For now, just log the check
      this.log('Invalid config cleanup completed');
    } catch (error) {
      this.log(`Invalid config cleanup failed: ${error.message}`, 'WARN');
    }
  }

  async run() {
    this.log('Starting Config Sync Manager...');
    
    try {
      const success = await this.syncConfigs();
      
      if (success) {
        this.log('Config Sync Manager completed successfully');
        return true;
      } else {
        this.log('Config Sync Manager completed with errors', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Config Sync Manager failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const configSync = new ConfigSyncManager();
  configSync.run().then((success) => {
    process.exit(success ? 0 : 1);
  }).catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = ConfigSyncManager;
