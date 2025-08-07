#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class SyntaxErrorMonitor {
  constructor() {
    this.isRunning = false;
    this.watchMode = false;
    this.fixedErrors = new Set();
    this.errorPatterns = {
      // TypeScript/JavaScript syntax errors
      syntaxError: /SyntaxError:|Unexpected token|Expected ';'|Expected '}'|Expected '\)'/g,
      importError: /Cannot find module|Module not found|Import error/g,
      typeError: /TypeError:|Type error/g,
      parsingError: /Parsing error|Parse error/g,
      // Common syntax patterns that cause issues
      missingSemicolon: /[^;]\s*$/g,
      doubleSemicolon: /;;/g,
      unclosedBrackets: /[\(\[\{][^\(\)\[\]\{\}]*$/g,
      unclosedQuotes: /["'][^"']*$/g,
      // React/JSX specific
      jsxError: /JSX|React error/g,
      // Next.js specific
      nextjsError: /Next\.js error|Page error/g
    };
    
    this.fixStrategies = {
      missingSemicolon: this.fixMissingSemicolon.bind(this),
      doubleSemicolon: this.fixDoubleSemicolon.bind(this),
      unclosedBrackets: this.fixUnclosedBrackets.bind(this),
      unclosedQuotes: this.fixUnclosedQuotes.bind(this),
      importErrors: this.fixImportErrors.bind(this),
      syntaxErrors: this.fixSyntaxErrors.bind(this)
    };
  }

  async start(options = {}) {
    const { watch = false, interval = 30000, autoFix = true } = options;
    
    console.log('🚀 Starting Syntax Error Monitor...');
    this.isRunning = true;
    this.watchMode = watch;
    this.autoFix = autoFix;

    if (watch) {
      this.startFileWatcher();
    } else {
      this.startIntervalCheck(interval);
    }

    // Initial scan
    await this.scanAndFix();
  }

  async scanAndFix() {
    if (!this.isRunning) return;

    console.log('🔍 Scanning for syntax errors...');
    
    try {
      // Run TypeScript check
      const tsErrors = await this.runTypeScriptCheck();
      
      // Run ESLint
      const lintErrors = await this.runESLintCheck();
      
      // Run build check
      const buildErrors = await this.runBuildCheck();
      
      // Combine all errors
      const allErrors = [...tsErrors, ...lintErrors, ...buildErrors];
      
      if (allErrors.length > 0) {
        console.log(`❌ Found ${allErrors.length} errors`);
        await this.processErrors(allErrors);
      } else {
        console.log('✅ No syntax errors found');
      }
      
    } catch (error) {
      console.error('Error during scan:', error.message);
    }
  }

  async runTypeScriptCheck() {
    try {
      const result = execSync('npx tsc --noEmit', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      return this.parseTypeScriptErrors(error.stdout || error.stderr || '');
    }
  }

  async runESLintCheck() {
    try {
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      return this.parseESLintErrors(error.stdout || error.stderr || '');
    }
  }

  async runBuildCheck() {
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      return this.parseBuildErrors(error.stdout || error.stderr || '');
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
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

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error')) {
        const match = line.match(/([^:]+):(\d+):(\d+): (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
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

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('Error:') || line.includes('SyntaxError:')) {
        const match = line.match(/([^:]+):(\d+):(\d+): (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: 'build'
          });
        }
      }
    }
    
    return errors;
  }

  async processErrors(errors) {
    for (const error of errors) {
      if (this.autoFix) {
        await this.attemptFix(error);
      } else {
        console.log(`Error in ${error.file}:${error.line}:${error.column} - ${error.message}`);
      }
    }
  }

  async attemptFix(error) {
    try {
      const filePath = path.resolve(error.file);
      
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️ File not found: ${filePath}`);
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (error.line > lines.length) {
        console.log(`⚠️ Line ${error.line} doesn't exist in ${filePath}`);
        return;
      }

      const lineContent = lines[error.line - 1];
      const fixedLine = await this.fixLine(lineContent, error);
      
      if (fixedLine !== lineContent) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log(`✅ Fixed error in ${error.file}:${error.line}`);
        this.fixedErrors.add(`${error.file}:${error.line}`);
      }
      
    } catch (fixError) {
      console.error(`❌ Failed to fix error in ${error.file}:`, fixError.message);
    }
  }

  async fixLine(lineContent, error) {
    let fixedLine = lineContent;
    
    // Apply various fix strategies based on error type
    if (error.type === 'typescript') {
      fixedLine = await this.fixTypeScriptError(fixedLine, error);
    } else if (error.type === 'eslint') {
      fixedLine = await this.fixESLintError(fixedLine, error);
    } else if (error.type === 'build') {
      fixedLine = await this.fixBuildError(fixedLine, error);
    }
    
    return fixedLine;
  }

  async fixTypeScriptError(line, error) {
    let fixedLine = line;
    
    // Fix common TypeScript errors
    if (error.message.includes('Expected')) {
      if (error.message.includes(';')) {
        fixedLine = fixedLine.replace(/([^;])\s*$/, '$1;');
      } else if (error.message.includes('}')) {
        fixedLine = fixedLine.replace(/([^}])\s*$/, '$1}');
      } else if (error.message.includes(')')) {
        fixedLine = fixedLine.replace(/([^)])\s*$/, '$1)');
      }
    }
    
    // Fix import errors
    if (error.message.includes('Cannot find module')) {
      const moduleMatch = error.message.match(/Cannot find module '([^']+)'/);
      if (moduleMatch) {
        const moduleName = moduleMatch[1];
        // Try to fix common import issues
        if (moduleName.startsWith('./') || moduleName.startsWith('../')) {
          // Check if file exists with different extension
          const possibleExtensions = ['.js', '.jsx', '.ts', '.tsx'];
          for (const ext of possibleExtensions) {
            const fullPath = path.resolve(path.dirname(error.file), moduleName + ext);
            if (fs.existsSync(fullPath)) {
              fixedLine = fixedLine.replace(moduleName, moduleName + ext);
              break;
            }
          }
        }
      }
    }
    
    return fixedLine;
  }

  async fixESLintError(line, error) {
    let fixedLine = line;
    
    // Fix common ESLint errors
    if (error.message.includes('semi')) {
      fixedLine = fixedLine.replace(/([^;])\s*$/, '$1;');
    } else if (error.message.includes('quotes')) {
      fixedLine = fixedLine.replace(/"/g, "'");
    } else if (error.message.includes('indent')) {
      // Fix indentation
      const match = line.match(/^(\s*)/);
      if (match) {
        const currentIndent = match[1];
        const expectedIndent = '  '.repeat(Math.floor(currentIndent.length / 2));
        fixedLine = expectedIndent + line.trim();
      }
    }
    
    return fixedLine;
  }

  async fixBuildError(line, error) {
    let fixedLine = line;
    
    // Fix common build errors
    if (error.message.includes('SyntaxError')) {
      // Fix common syntax issues
      fixedLine = fixedLine.replace(/;;/g, ';');
      fixedLine = fixedLine.replace(/([^;])\s*$/, '$1;');
    }
    
    return fixedLine;
  }

  startFileWatcher() {
    console.log('👀 Starting file watcher...');
    
    const watcher = chokidar.watch([
      '**/*.js',
      '**/*.jsx', 
      '**/*.ts',
      '**/*.tsx'
    ], {
      ignored: [
        'node_modules/**',
        '.next/**',
        'dist/**',
        'build/**'
      ],
      persistent: true
    });

    watcher
      .on('change', async (filePath) => {
        console.log(`📝 File changed: ${filePath}`);
        await this.scanAndFix();
      })
      .on('add', async (filePath) => {
        console.log(`➕ File added: ${filePath}`);
        await this.scanAndFix();
      })
      .on('unlink', async (filePath) => {
        console.log(`🗑️ File removed: ${filePath}`);
        await this.scanAndFix();
      });
  }

  startIntervalCheck(interval) {
    console.log(`⏰ Starting interval check every ${interval}ms...`);
    
    setInterval(async () => {
      if (this.isRunning) {
        await this.scanAndFix();
      }
    }, interval);
  }

  stop() {
    console.log('🛑 Stopping Syntax Error Monitor...');
    this.isRunning = false;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      watchMode: this.watchMode,
      fixedErrorsCount: this.fixedErrors.size,
      fixedErrors: Array.from(this.fixedErrors)
    };
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new SyntaxErrorMonitor();
  
  const args = process.argv.slice(2);
  const options = {
    watch: args.includes('--watch') || args.includes('-w'),
    interval: parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 30000,
    autoFix: !args.includes('--no-fix')
  };

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    monitor.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    monitor.stop();
    process.exit(0);
  });

  monitor.start(options);
}

module.exports = SyntaxErrorMonitor;
