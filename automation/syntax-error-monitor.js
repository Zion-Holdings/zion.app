#!/usr/bin/env node

/**
 * Syntax Error Monitor
 * 
 * This system continuously monitors for syntax errors in JavaScript/TypeScript files
 * and provides automatic fixing capabilities.
 */

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
      quoteIssues: /['"]\s*['"]/g,
    };

    this.fixStrategies = {
      missingSemicolon: (line) => line.replace(/([^;])\s*$/, "$1;"),
      doubleSemicolon: (line) => line.replace(/;;/g, ";"),
      unmatchedBrackets: (line) =>
        line
          .replace(/\(\s*\)/g, "()")
          .replace(/\[\s*\]/g, "[]")
          .replace(/\{\s*\}/g, "{}"),
      quoteIssues: (line) => line.replace(/['"]\s*['"]/g, '""'),
    };

    this.config = {
      watchDirectories: ['src', 'components', 'utils', 'pages', 'automation'],
      fileExtensions: ['.js', '.ts', '.jsx', '.tsx'],
      checkInterval: 30000, // 30 seconds
      maxFileSize: 1024 * 1024, // 1MB
      backupBeforeFix: true
    };

    this.stats = {
      filesChecked: 0,
      errorsFound: 0,
      errorsFixed: 0,
      startTime: null
    };

    this.logDir = path.join(__dirname, 'syntax-error-detection');
    this.backupDir = path.join(__dirname, 'syntax-fix-backups');
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logDir, this.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  start() {
    console.log('🚀 Starting Syntax Error Monitor...');
    this.isRunning = true;
    this.stats.startTime = new Date();

    // Start monitoring
    this.startMonitoring();

    console.log('✅ Syntax Error Monitor started successfully');
  }

  startMonitoring() {
    // Initial check
    this.performSyntaxCheck();

    // Set up interval for continuous monitoring
    setInterval(() => {
      if (this.isRunning) {
        this.performSyntaxCheck();
      }
    }, this.config.checkInterval);
  }

  performSyntaxCheck() {
    console.log('🔍 Performing syntax check...');

    const files = this.getFilesToCheck();
    let errorsFound = 0;
    let errorsFixed = 0;

    for (const file of files) {
      try {
        const fileStats = fs.statSync(file);
        
        // Skip large files
        if (fileStats.size > this.config.maxFileSize) {
          continue;
        }

        const content = fs.readFileSync(file, 'utf8');
        const issues = this.detectSyntaxIssues(content);

        if (issues.length > 0) {
          errorsFound += issues.length;
          console.log(`⚠️  Found ${issues.length} syntax issues in ${path.basename(file)}`);

          if (this.autoFixEnabled) {
            const fixedContent = this.applyFixes(content, issues);
            if (fixedContent !== content) {
              this.backupFile(file);
              fs.writeFileSync(file, fixedContent);
              errorsFixed += issues.length;
              console.log(`✅ Fixed ${issues.length} issues in ${path.basename(file)}`);
            }
          }
        }

        this.stats.filesChecked++;
      } catch (error) {
        console.error(`❌ Error checking file ${file}:`, error.message);
      }
    }

    this.stats.errorsFound += errorsFound;
    this.stats.errorsFixed += errorsFixed;

    if (errorsFound > 0) {
      console.log(`📊 Found ${errorsFound} issues, fixed ${errorsFixed}`);
    } else {
      console.log('✅ No syntax issues found');
    }

    this.updateStats();
  }

  getFilesToCheck() {
    const files = [];
    
    for (const dir of this.config.watchDirectories) {
      const fullPath = path.join(process.cwd(), dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, files);
      }
    }

    return files;
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else if (this.config.fileExtensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  detectSyntaxIssues(content) {
    const issues = [];
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;

      // Check for various syntax issues
      for (const [issueType, pattern] of Object.entries(this.errorPatterns)) {
        if (pattern.test(line)) {
          issues.push({
            line: lineNumber,
            type: issueType,
            content: line.trim(),
            fixable: this.fixStrategies[issueType] !== undefined
          });
        }
      }
    }

    return issues;
  }

  applyFixes(content, issues) {
    let fixedContent = content;
    const lines = fixedContent.split('\n');

    // Sort issues by line number in descending order to avoid offset issues
    issues.sort((a, b) => b.line - a.line);

    for (const issue of issues) {
      if (issue.fixable && this.fixStrategies[issue.type]) {
        const lineIndex = issue.line - 1;
        if (lineIndex >= 0 && lineIndex < lines.length) {
          const originalLine = lines[lineIndex];
          const fixedLine = this.fixStrategies[issue.type](originalLine);
          lines[lineIndex] = fixedLine;
        }
      }
    }

    return lines.join('\n');
  }

  backupFile(filePath) {
    if (!this.config.backupBeforeFix) return;

    const backupPath = path.join(
      this.backupDir,
      `${path.basename(filePath)}.${Date.now()}.backup`
    );

    try {
      fs.copyFileSync(filePath, backupPath);
    } catch (error) {
      console.error(`❌ Failed to backup ${filePath}:`, error.message);
    }
  }

  updateStats() {
    const statsPath = path.join(this.logDir, 'monitor-stats.json');
    const stats = {
      ...this.stats,
      lastUpdate: new Date().toISOString(),
      isRunning: this.isRunning
    };

    fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
  }

  stop() {
    console.log('🛑 Stopping Syntax Error Monitor...');
    this.isRunning = false;
    this.updateStats();
    console.log('✅ Syntax Error Monitor stopped');
  }

  getStats() {
    return {
      ...this.stats,
      isRunning: this.isRunning
    };
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new SyntaxErrorMonitor();
  monitor.start();

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    monitor.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    monitor.stop();
    process.exit(0);
  });
}

module.exports = SyntaxErrorMonitor;
