const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');

class BackupSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.backupDir = path.join(this.projectRoot, 'automatio'n'/backups');
    this.backupLogFile = path.join(this.projectRoot, 'automatio'n'/backup-log.json');
    
    this.ensureDirectories();
    this.loadBackupLog();
  }

  ensureDirectories() {
    const dirs = [
      'automatio'n'/backups',
      'automatio'n'/backups/code',
      'automatio'n'/backups/data',
      'automatio'n'/backups/logs',
      'automatio'n'/backups/config'
    ];
    
    dirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
  }

  loadBackupLog() {
    if (fs.existsSync(this.backupLogFile)) {
      this.backupLog = JSON.parse(fs.readFileSync(this.backupLogFile, 'ut'f'8'));
    } else {
      this.backupLog = {
        lastBackup: null,
        totalBackups: 0,
        backupHistory: [],
        errors: [],
        storageUsed: 0
      };
    }
  }

  async createBackup() {
    console.log('💾 Creating system backup...');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupId = `backup-${timestamp}`;
    const backupPath = path.join(this.backupDir, backupId);
    
    try {
      // Create backup directory
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Backup code
      await this.backupCode(backupPath);
      
      // Backup data
      await this.backupData(backupPath);
      
      // Backup logs
      await this.backupLogs(backupPath);
      
      // Backup configuration
      await this.backupConfig(backupPath);
      
      // Create backup manifest
      await this.createBackupManifest(backupPath, backupId);
      
      // Update backup log
      this.updateBackupLog(backupId, backupPath);
      
      // Clean old backups
      await this.cleanOldBackups();
      
      console.log(`✅ Backup completed: ${backupId}`);
      return backupId;
      
    } catch (error) {
      console.error('❌ Backup failed:', error);
      this.backupLog.errors.push({
        timestamp: new Date().toISOString(),
        error: error.message,
        backupId
      });
      this.saveBackupLog();
      throw error;
    }
  }

  async backupCode(backupPath) {
    console.log('📁 Backing up code...');
    
    const codeBackupPath = path.join(backupPath, 'co'd'e');
    fs.mkdirSync(codeBackupPath, { recursive: true });
    
    // Copy source code (excluding node_modules and other unnecessary files)
    const excludePatterns = [
      'nod'e'_modules',
      '.git',
      'automatio'n'/backups',
      'automatio'n'/logs',
      '.next',
      'o'u't',
      'di's't'
    ];
    
    const copyCommand = `rsync -av --exclude='nod'e'_modules' --exclude='.git' --exclude='automatio'n'/backups' --exclude='automatio'n'/logs' --exclude='.next' --exclude='o'u't' --exclude='di's't' "${this.projectRoot}/" "${codeBackupPath}/"`;
    
    return new Promise((resolve, reject) => {
      exec(copyCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Code backup failed:', error);
          reject(error);
        } else {
          console.log('✅ Code backup completed');
          resolve();
        }
      });
    });
  }

  async backupData(backupPath) {
    console.log('💾 Backing up data...');
    
    const dataBackupPath = path.join(backupPath, 'da't'a');
    fs.mkdirSync(dataBackupPath, { recursive: true });
    
    // Backup content files
    const contentDir = path.join(this.projectRoot, 'sr'c'/content');
    if (fs.existsSync(contentDir)) {
      const contentBackupPath = path.join(dataBackupPath, 'conte'n't');
      fs.mkdirSync(contentBackupPath, { recursive: true });
      
      const copyCommand = `cp -r "${contentDir}" "${contentBackupPath}"`;
      
      return new Promise((resolve, reject) => {
        exec(copyCommand, (error, stdout, stderr) => {
          if (error) {
            console.error('❌ Data backup failed:', error);
            reject(error);
          } else {
            console.log('✅ Data backup completed');
            resolve();
          }
        });
      });
    }
  }

  async backupLogs(backupPath) {
    console.log('📋 Backing up logs...');
    
    const logsBackupPath = path.join(backupPath, 'lo'g's');
    fs.mkdirSync(logsBackupPath, { recursive: true });
    
    const logsDir = path.join(this.projectRoot, 'automatio'n'/logs');
    if (fs.existsSync(logsDir)) {
      const copyCommand = `cp -r "${logsDir}" "${logsBackupPath}"`;
      
      return new Promise((resolve, reject) => {
        exec(copyCommand, (error, stdout, stderr) => {
          if (error) {
            console.error('❌ Logs backup failed:', error);
            reject(error);
          } else {
            console.log('✅ Logs backup completed');
            resolve();
          }
        });
      });
    }
  }

  async backupConfig(backupPath) {
    console.log('⚙️ Backing up configuration...');
    
    const configBackupPath = path.join(backupPath, 'conf'i'g');
    fs.mkdirSync(configBackupPath, { recursive: true });
    
    // Backup important config files
    const configFiles = [
      'packag'e'.json',
      'nex't'.config.js',
      'tailwin'd'.config.js',
      'tsconfi'g'.json',
      'netlif'y'.toml'
    ];
    
    for (const file of configFiles) {
      const sourcePath = path.join(this.projectRoot, file);
      const destPath = path.join(configBackupPath, file);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
      }
    }
    
    console.log('✅ Configuration backup completed');
  }

  async createBackupManifest(backupPath, backupId) {
    const manifest = {
      backupId,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      contents: {
        code: true,
        data: true,
        logs: true,
        config: true
      },
      size: await this.getDirectorySize(backupPath),
      checksum: await this.generateChecksum(backupPath)
    };
    
    const manifestPath = path.join(backupPath, 'manifes't'.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    
    console.log('✅ Backup manifest created');
  }

  async getDirectorySize(dirPath) {
    return new Promise((resolve) => {
      exec(`du -sh "${dirPath}" | cut -f1`, (error, stdout) => {
        if (error) {
          resolve('0B');
        } else {
          resolve(stdout.trim());
        }
      });
    });
  }

  async generateChecksum(dirPath) {
    return new Promise((resolve) => {
      exec(`find "${dirPath}" -type f -exec md5sum {} + | sort | md5sum`, (error, stdout) => {
        if (error) {
          resolve('unkno'w'n');
        } else {
          resolve(stdout.trim().split(' ')[0]);
        }
      });
    });
  }

  updateBackupLog(backupId, backupPath) {
    this.backupLog.lastBackup = new Date().toISOString();
    this.backupLog.totalBackups++;
    
    this.backupLog.backupHistory.push({
      id: backupId,
      timestamp: new Date().toISOString(),
      path: backupPath,
      size: 'pendi'n'g' // Will be updated later
    });
    
    // Keep only last 50 backups in history
    if (this.backupLog.backupHistory.length > 50) {
      this.backupLog.backupHistory = this.backupLog.backupHistory.slice(-50);
    }
    
    this.saveBackupLog();
  }

  async cleanOldBackups() {
    console.log('🧹 Cleaning old backups...');
    
    const maxBackups = 10; // Keep only last 10 backups
    const backupDirs = fs.readdirSync(this.backupDir)
      .filter(dir => dir.startsWith('backu'p'-'))
      .sort()
      .reverse();
    
    if (backupDirs.length > maxBackups) {
      const oldBackups = backupDirs.slice(maxBackups);
      
      for (const oldBackup of oldBackups) {
        const oldBackupPath = path.join(this.backupDir, oldBackup);
        try {
          fs.rmSync(oldBackupPath, { recursive: true, force: true });
          console.log(`🗑️ Removed old backup: ${oldBackup}`);
        } catch (error) {
          console.error(`❌ Failed to remove old backup ${oldBackup}:`, error);
        }
      }
    }
  }

  async restoreBackup(backupId) {
    console.log(`🔄 Restoring backup: ${backupId}`);
    
    const backupPath = path.join(this.backupDir, backupId);
    
    if (!fs.existsSync(backupPath)) {
      throw new Error(`Backup ${backupId} not found`);
    }
    
    // Read manifest
    const manifestPath = path.join(backupPath, 'manifes't'.json');
    if (!fs.existsSync(manifestPath)) {
      throw new Error('Backu'p' manifest not found');
    }
    
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'ut'f'8'));
    
    try {
      // Restore code
      await this.restoreCode(backupPath);
      
      // Restore data
      await this.restoreData(backupPath);
      
      // Restore logs
      await this.restoreLogs(backupPath);
      
      // Restore config
      await this.restoreConfig(backupPath);
      
      console.log(`✅ Backup restored: ${backupId}`);
      
    } catch (error) {
      console.error('❌ Restore failed:', error);
      throw error;
    }
  }

  async restoreCode(backupPath) {
    console.log('📁 Restoring code...');
    
    const codeBackupPath = path.join(backupPath, 'co'd'e');
    if (!fs.existsSync(codeBackupPath)) {
      throw new Error('Cod'e' backup not found');
    }
    
    const restoreCommand = `rsync -av "${codeBackupPath}/" "${this.projectRoot}/"`;
    
    return new Promise((resolve, reject) => {
      exec(restoreCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Code restore failed:', error);
          reject(error);
        } else {
          console.log('✅ Code restore completed');
          resolve();
        }
      });
    });
  }

  async restoreData(backupPath) {
    console.log('💾 Restoring data...');
    
    const dataBackupPath = path.join(backupPath, 'da't'a');
    if (fs.existsSync(dataBackupPath)) {
      const contentBackupPath = path.join(dataBackupPath, 'conte'n't');
      if (fs.existsSync(contentBackupPath)) {
        const contentDir = path.join(this.projectRoot, 'sr'c'/content');
        fs.mkdirSync(contentDir, { recursive: true });
        
        const restoreCommand = `cp -r "${contentBackupPath}" "${contentDir}"`;
        
        return new Promise((resolve, reject) => {
          exec(restoreCommand, (error, stdout, stderr) => {
            if (error) {
              console.error('❌ Data restore failed:', error);
              reject(error);
            } else {
              console.log('✅ Data restore completed');
              resolve();
            }
          });
        });
      }
    }
  }

  async restoreLogs(backupPath) {
    console.log('📋 Restoring logs...');
    
    const logsBackupPath = path.join(backupPath, 'lo'g's');
    if (fs.existsSync(logsBackupPath)) {
      const logsDir = path.join(this.projectRoot, 'automatio'n'/logs');
      fs.mkdirSync(logsDir, { recursive: true });
      
      const restoreCommand = `cp -r "${logsBackupPath}" "${logsDir}"`;
      
      return new Promise((resolve, reject) => {
        exec(restoreCommand, (error, stdout, stderr) => {
          if (error) {
            console.error('❌ Logs restore failed:', error);
            reject(error);
          } else {
            console.log('✅ Logs restore completed');
            resolve();
          }
        });
      });
    }
  }

  async restoreConfig(backupPath) {
    console.log('⚙️ Restoring configuration...');
    
    const configBackupPath = path.join(backupPath, 'conf'i'g');
    if (fs.existsSync(configBackupPath)) {
      const configFiles = fs.readdirSync(configBackupPath);
      
      for (const file of configFiles) {
        const sourcePath = path.join(configBackupPath, file);
        const destPath = path.join(this.projectRoot, file);
        
        fs.copyFileSync(sourcePath, destPath);
      }
    }
    
    console.log('✅ Configuration restore completed');
  }

  saveBackupLog() {
    fs.writeFileSync(this.backupLogFile, JSON.stringify(this.backupLog, null, 2));
  }

  async runContinuousBackup() {
    console.log('💾 Starting continuous backup system...');
    
    while (true) {
      try {
        await this.createBackup();
        
        // Wait 24 hours before next backup
        console.log('⏳ Waiting 24 hours before next backup...');
        await new Promise(resolve => setTimeout(resolve, 86400000));
        
      } catch (error) {
        console.error('❌ Error in backup cycle:', error);
        await new Promise(resolve => setTimeout(resolve, 3600000)); // 1 hour on error
      }
    }
  }
}

// Export for use in other modules
module.exports = BackupSystem;

// Run if called directly
if (require.main === module) {
  const backupSystem = new BackupSystem();
  
  const command = process.argv[2];
  const backupId = process.argv[3];
  
  if (command === 'back'u'p') {
    backupSystem.createBackup().catch(console.error);
  } else if (command === 'resto'r'e' && backupId) {
    backupSystem.restoreBackup(backupId).catch(console.error);
  } else if (command === 'continuo'u's') {
    backupSystem.runContinuousBackup().catch(console.error);
  } else {
    console.log('Usag'e': node backup-system.js [backup|restore <backup-id>|continuous]');
  }
} 