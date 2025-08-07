const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorMonitor {
  constructor() {
    this.isRunning = false;
    this.errorPatterns = {
      // TypeScript/JavaScript syntax errors
      syntaxError: /SyntaxError:|Unexpected token|Expected ';'|Expected '}'|Expected '\)'/g,
      // Missing semicolons
      missingSemicolon: /([^;])\s*$/g,
      // Double semicolons
      doubleSemicolon: /;;/g,
      // Unmatched brackets
      unmatchedBrackets: /\(\s*\)|\[\s*\]|\{\s*\}/g,
      // Quote issues
      quoteIssues: /['"]\s*['"]/g
    };
    
    this.fixStrategies = {
      missingSemicolon: (line) => line.replace(/([^;])\s*$/, '$1;'),
      doubleSemicolon: (line) => line.replace(/;;/g, ';'),
      unmatchedBrackets: (line) => line.replace(/\(\s*\)/g, '()').replace(/\[\s*\]/g, '[]').replace(/\{\s*\}/g, '{}'),
      quoteIssues: (line) => line.replace(/['"]\s*['"]/g, '""')
    };
  }

  start() {
    console.log('📊 Starting syntax error monitor...');
    this.isRunning = true;
    
    // Initial scan
    this.scanAndFix();
    
    // Set up interval checking
    this.startIntervalCheck();
    
    // Set up file watching
    this.startFileWatcher();
    
    console.log('✅ Syntax error monitor started');
  }

  scanAndFix() {
    try {
      console.log('🔍 Scanning for syntax errors...');
      
      // Run TypeScript check
      const tscErrors = this.runTypeScriptCheck();
      if (tscErrors.length > 0) {
        console.log(`❌ Found ${tscErrors.length} TypeScript errors`);
        this.processErrors(tscErrors, 'typescript');
      }

      // Run ESLint check
      const eslintErrors = this.runESLintCheck();
      if (eslintErrors.length > 0) {
        console.log(`⚠️ Found ${eslintErrors.length} ESLint errors`);
        this.processErrors(eslintErrors, 'eslint');
      }

      // Run build check
      const buildErrors = this.runBuildCheck();
      if (buildErrors.length > 0) {
        console.log(`🔨 Found ${buildErrors.length} build errors`);
        this.processErrors(buildErrors, 'build');
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

  runBuildCheck() {
    try {
      const result = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseBuildErrors(output);
    }
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('Error')) {
        const match = line.match(/(.+):(\d+):(\d+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line,
            type: 'build'
          });
        }
      }
    }
    
    return errors;
  }

  processErrors(errors, errorType) {
    for (const error of errors) {
      this.attemptFix(error, errorType);
    }
  }

  attemptFix(error, errorType) {
    try {
      if (!fs.existsSync(error.file)) return;
      
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      if (error.line <= lines.length) {
        const originalLine = lines[error.line - 1];
        const fixedLine = this.fixLine(originalLine, error.message, errorType);
        
        if (fixedLine !== originalLine) {
          lines[error.line - 1] = fixedLine;
          fs.writeFileSync(error.file, lines.join('\n'));
          console.log(`✅ Fixed ${errorType} error in ${error.file}:${error.line}`);
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
      case 'build':
        return this.fixBuildError(line, errorMessage);
      default:
        return line;
    }
  }

  fixTypeScriptError(line, errorMessage) {
    if (errorMessage.includes('missing semicolon')) {
      return this.fixStrategies.missingSemicolon(line);
    }
    if (errorMessage.includes('unexpected token')) {
      return this.fixStrategies.doubleSemicolon(line);
    }
    if (errorMessage.includes('expected')) {
      return this.fixStrategies.unmatchedBrackets(line);
    }
    return line;
  }

  fixESLintError(line, errorMessage) {
    if (errorMessage.includes('missing semicolon')) {
      return this.fixStrategies.missingSemicolon(line);
    }
    if (errorMessage.includes('unexpected token')) {
      return this.fixStrategies.doubleSemicolon(line);
    }
    if (errorMessage.includes('quotes')) {
      return this.fixStrategies.quoteIssues(line);
    }
    return line;
  }

  fixBuildError(line, errorMessage) {
    // Apply all fix strategies for build errors
    let fixedLine = line;
    Object.values(this.fixStrategies).forEach(strategy => {
      fixedLine = strategy(fixedLine);
    });
    return fixedLine;
  }

  startFileWatcher() {
    console.log('👀 Setting up file watcher...');
    // File watching would be implemented here
    // For now, we'll use interval-based checking
  }

  startIntervalCheck() {
    const interval = 10000; // 10 seconds
    setInterval(() => {
      if (this.isRunning) {
        this.scanAndFix();
      }
    }, interval);
  }

  stop() {
    console.log('🛑 Stopping syntax error monitor...');
    this.isRunning = false;
    console.log('✅ Syntax error monitor stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      lastScan: new Date().toISOString()
    };
  }
}

// Main execution
if (require.main === module) {
  const monitor = new SyntaxErrorMonitor();
  
  // Handle command line arguments
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      monitor.start();
      break;
    case 'stop':
      monitor.stop();
      break;
    case 'scan':
      monitor.scanAndFix();
      break;
    case 'status':
      console.log('Status:', monitor.getStatus());
      break;
    default:
      console.log('Usage: node syntax-error-monitor.js [start|stop|scan|status]');
  }
}

module.exports = SyntaxErrorMonitor;
