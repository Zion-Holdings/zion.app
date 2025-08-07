const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousSyntaxFix {
  constructor() {
    this.isRunning = false;
    this.fixQueue = [];
    this.backupDir = path.join(__dirname, 'backups');
    this.stats = {
      filesProcessed: 0,
      fixesApplied: 0,
      errorsFixed: 0,
      startTime: null
    };
  }

  start() {
    console.log('🔄 Starting continuous syntax fix...');
    this.isRunning = true;
    this.stats.startTime = new Date();
    
    // Initialize backup system
    this.initializeBackupSystem();
    
    // Start file watching
    this.startFileWatching();
    
    // Start interval mode as fallback
    this.startIntervalMode();
    
    // Start fix loop
    this.startFixLoop();
    
    // Start stats tracking
    this.startStatsTracking();
    
    console.log('✅ Continuous syntax fix started');
  }

  initializeBackupSystem() {
    try {
      if (!fs.existsSync(this.backupDir)) {
        fs.mkdirSync(this.backupDir, { recursive: true });
      }
      console.log('📁 Backup system initialized');
    } catch (error) {
      console.error('❌ Failed to initialize backup system:', error.message);
    }
  }

  startFileWatching() {
    console.log('👀 Setting up file watcher...');
    // File watching would be implemented here
    // For now, we'll use interval-based checking
  }

  startIntervalMode() {
    const interval = 15000; // 15 seconds
    setInterval(() => {
      if (this.isRunning) {
        this.scanForErrors();
      }
    }, interval);
  }

  scanForErrors() {
    try {
      // Run TypeScript check
      const tscErrors = this.runTypeScriptCheck();
      if (tscErrors.length > 0) {
        console.log(`❌ Found ${tscErrors.length} TypeScript errors`);
        this.queueFixes(tscErrors);
      }

      // Run ESLint check
      const eslintErrors = this.runESLintCheck();
      if (eslintErrors.length > 0) {
        console.log(`⚠️ Found ${eslintErrors.length} ESLint errors`);
        this.queueFixes(eslintErrors);
      }

    } catch (error) {
      console.error('❌ Error during scan:', error.message);
    }
  }

  runTypeScriptCheck() {
    try {
      const result = execSync('npx tsc --noEmit', { encoding: 'utf8', stdio: 'pipe' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseTypeScriptErrors(output);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: 'typescript'
          });
        }
      }
    }
    
    return errors;
  }

  runESLintCheck() {
    try {
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx', { encoding: 'utf8', stdio: 'pipe' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseESLintErrors(output);
    }
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error')) {
        const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: 'eslint'
          });
        }
      }
    }
    
    return errors;
  }

  queueFixes(errors) {
    for (const error of errors) {
      this.fixQueue.push(error);
    }
    console.log(`📋 Queued ${errors.length} fixes`);
  }

  processFixQueue() {
    if (this.fixQueue.length === 0) return;
    
    console.log(`🔧 Processing ${this.fixQueue.length} queued fixes...`);
    
    while (this.fixQueue.length > 0) {
      const error = this.fixQueue.shift();
      this.performFix(error);
    }
  }

  performFix(error) {
    try {
      if (!fs.existsSync(error.file)) return;
      
      // Create backup before fixing
      this.createBackup(error.file);
      
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      if (error.line <= lines.length) {
        const originalLine = lines[error.line - 1];
        const fixedLine = this.fixLine(originalLine, error.message, error.type);
        
        if (fixedLine !== originalLine) {
          lines[error.line - 1] = fixedLine;
          fs.writeFileSync(error.file, lines.join('\n'));
          
          this.stats.fixesApplied++;
          this.stats.errorsFixed++;
          
          console.log(`✅ Fixed ${error.type} error in ${error.file}:${error.line}`);
        }
      }
      
    } catch (error) {
      console.error('Failed to fix error:', error.message);
    }
  }

  fixLine(line, errorMessage, errorType) {
    switch (errorType) {
      case 'typescript':
        return this.fixTypeScriptError(line, errorMessage);
      case 'eslint':
        return this.fixESLintError(line, errorMessage);
      default:
        return line;
    }
  }

  fixTypeScriptError(line, errorMessage) {
    if (errorMessage.includes('missing semicolon')) {
      return line.replace(/([^;])\s*$/, '$1;');
    }
    if (errorMessage.includes('unexpected token')) {
      return line.replace(/;;/g, ';');
    }
    if (errorMessage.includes('expected')) {
      return line.replace(/\(\s*\)/g, '()');
    }
    return line;
  }

  fixESLintError(line, errorMessage) {
    if (errorMessage.includes('missing semicolon')) {
      return line.replace(/([^;])\s*$/, '$1;');
    }
    if (errorMessage.includes('unexpected token')) {
      return line.replace(/;;/g, ';');
    }
    if (errorMessage.includes('quotes')) {
      return line.replace(/['"]\s*['"]/g, '""');
    }
    return line;
  }

  fixSpecificFile(filePath) {
    console.log(`🔧 Fixing specific file: ${filePath}`);
    
    try {
      if (!fs.existsSync(filePath)) {
        console.log('❌ File not found');
        return;
      }
      
      this.createBackup(filePath);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let fixesApplied = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Apply common fixes
        fixedLine = this.fixSemicolons(fixedLine);
        fixedLine = this.fixBrackets(fixedLine);
        fixedLine = this.fixQuotes(fixedLine);
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
          fixesApplied++;
        }
      }
      
      if (fixesApplied > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log(`✅ Applied ${fixesApplied} fixes to ${filePath}`);
        this.stats.fixesApplied += fixesApplied;
      } else {
        console.log('✅ No fixes needed for this file');
      }
      
      this.stats.filesProcessed++;
      
    } catch (error) {
      console.error('❌ Error fixing file:', error.message);
    }
  }

  fixSemicolons(line) {
    // Fix double semicolons
    line = line.replace(/;;/g, ';');
    
    // Fix missing semicolons (basic cases)
    if (!line.trim().endsWith(';') && 
        !line.trim().endsWith('{') && 
        !line.trim().endsWith('}') &&
        !line.trim().endsWith('(') &&
        !line.trim().endsWith(')') &&
        line.trim().length > 0) {
      line = line.replace(/([^;])\s*$/, '$1;');
    }
    
    return line;
  }

  fixBrackets(line) {
    // Fix empty parentheses
    line = line.replace(/\(\s*\)/g, '()');
    
    // Fix empty brackets
    line = line.replace(/\[\s*\]/g, '[]');
    
    // Fix empty braces
    line = line.replace(/\{\s*\}/g, '{}');
    
    return line;
  }

  fixQuotes(line) {
    // Fix empty quotes
    line = line.replace(/['"]\s*['"]/g, '""');
    
    return line;
  }

  createBackup(filePath) {
    try {
      const fileName = path.basename(filePath);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(this.backupDir, `${fileName}.${timestamp}.backup`);
      
      fs.copyFileSync(filePath, backupPath);
    } catch (error) {
      console.error('Failed to create backup:', error.message);
    }
  }

  autoCommit() {
    try {
      const result = execSync('git add .', { encoding: 'utf8', stdio: 'pipe' });
      const commitResult = execSync('git commit -m "Auto-fix syntax errors"', { encoding: 'utf8', stdio: 'pipe' });
      console.log('✅ Auto-commit successful');
      return true;
    } catch (error) {
      console.log('⚠️ Auto-commit failed:', error.message);
      return false;
    }
  }

  startFixLoop() {
    setInterval(() => {
      if (this.isRunning && this.fixQueue.length > 0) {
        this.processFixQueue();
      }
    }, 5000); // Process queue every 5 seconds
  }

  startStatsTracking() {
    setInterval(() => {
      if (this.isRunning) {
        console.log(`📊 Stats: ${this.stats.filesProcessed} files, ${this.stats.fixesApplied} fixes, ${this.stats.errorsFixed} errors`);
      }
    }, 60000); // Log stats every minute
  }

  stop() {
    console.log('🛑 Stopping continuous syntax fix...');
    this.isRunning = false;
    console.log('✅ Continuous syntax fix stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      queueLength: this.fixQueue.length,
      stats: this.stats
    };
  }

  getStats() {
    return this.stats;
  }
}

// Main execution
if (require.main === module) {
  const continuousFix = new ContinuousSyntaxFix();
  
  // Handle command line arguments
  const command = process.argv[2];
  const target = process.argv[3];
  
  switch (command) {
    case 'start':
      continuousFix.start();
      break;
    case 'stop':
      continuousFix.stop();
      break;
    case 'scan':
      continuousFix.scanForErrors();
      break;
    case 'fix':
      if (target) {
        continuousFix.fixSpecificFile(target);
      } else {
        console.log('Please specify a file path');
      }
      break;
    case 'commit':
      continuousFix.autoCommit();
      break;
    case 'status':
      console.log('Status:', continuousFix.getStatus());
      break;
    case 'stats':
      console.log('Stats:', continuousFix.getStats());
      break;
    default:
      console.log('Usage: node continuous-syntax-fix.js [start|stop|scan|fix <path>|commit|status|stats]');
  }
}

module.exports = ContinuousSyntaxFix;
