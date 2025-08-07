#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorDetector {
  constructor() {
    this.logDir = path.join(__dirname, 'logs');
    this.reportsDir = path.join(__dirname, 'reports');
    this.pidFile = path.join(__dirname, 'syntax-detector.pid');
    this.statusFile = path.join(__dirname, 'status.json');
        
    this.ensureDirectories();
    this.writePid();
  }

  ensureDirectories() {
    [this.logDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  writePid() {
    fs.writeFileSync(this.pidFile, process.pid.toString());
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
        
    const logFile = path.join(this.logDir, `syntax-detector-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  updateStatus(status) {
    const statusData = {
      lastRun: new Date().toISOString(),
      status: status,
      pid: process.pid
    };
    fs.writeFileSync(this.statusFile, JSON.stringify(statusData, null, 2));
  }

  isCodeFile(filePath) {
    const codeExtensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.css', '.scss', '.html', '.md'];
    return codeExtensions.includes(path.extname(filePath).toLowerCase());
  }

  shouldSkipDirectory(dirName) {
    const skipDirs = ['node_modules', '.git', '.next', 'dist', 'build', 'coverage', 'automation_temp', 'logs', 'reports', 'cache', 'temp'];
    return skipDirs.includes(dirName);
  }

  scanDirectory(dirPath, errors = []) {
    try {
      const items = fs.readdirSync(dirPath);
            
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
                
        if (stat.isDirectory()) {
          if (!this.shouldSkipDirectory(item)) {
            this.scanDirectory(fullPath, errors);
          }
        } else if (this.isCodeFile(fullPath)) {
          const fileErrors = this.checkFileSyntax(fullPath);
          if (fileErrors.length > 0) {
            errors.push({
              file: fullPath,
              errors: fileErrors
            });
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dirPath}: ${error.message}`, 'ERROR');
    }
        
    return errors;
  }

  checkFileSyntax(filePath) {
    const errors = [];
    const ext = path.extname(filePath).toLowerCase();
        
    try {
      const content = fs.readFileSync(filePath, 'utf8');
            
      switch (ext) {
      case '.js':
      case '.jsx':
        errors.push(...this.checkJavaScriptSyntax(content, filePath));
        break;
      case '.ts':
      case '.tsx':
        errors.push(...this.checkTypeScriptSyntax(content, filePath));
        break;
      case '.json':
        errors.push(...this.checkJsonSyntax(content, filePath));
        break;
      case '.css':
      case '.scss':
        errors.push(...this.checkCssSyntax(content, filePath));
        break;
      case '.html':
        errors.push(...this.checkHtmlSyntax(content, filePath));
        break;
      case '.md':
        errors.push(...this.checkMarkdownSyntax(content, filePath));
        break;
      }
    } catch (error) {
      errors.push({
        line: 0,
        column: 0,
        message: `File read error: ${error.message}`,
        severity: 'ERROR'
      });
    }
        
    return errors;
  }

  checkJavaScriptSyntax(content, filePath) {
    const errors = [];
        
    try {
      new Function(content);
    } catch (error) {
      const match = error.message.match(/at position (\d+)/);
      if (match) {
        const position = parseInt(match[1]);
        const lines = content.substring(0, position).split('\n');
        const line = lines.length;
        const column = lines[lines.length - 1].length + 1;
                
        errors.push({
          line,
          column,
          message: error.message,
          severity: 'ERROR'
        });
      }
    }
        
    return errors;
  }

  checkTypeScriptSyntax(content, filePath) {
    const errors = [];
        
    try {
      execSync('npx tsc --noEmit --skipLibCheck', {
        cwd: path.dirname(filePath),
        stdio: 'pipe'
      });
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      const lines = output.split('\n');
            
      for (const line of lines) {
        const match = line.match(/(\d+):(\d+)\s*-\s*error\s*(.+)/);
        if (match) {
          errors.push({
            line: parseInt(match[1]),
            column: parseInt(match[2]),
            message: match[3].trim(),
            severity: 'ERROR'
          });
        }
      }
    }
        
    return errors;
  }

  checkJsonSyntax(content, filePath) {
    const errors = [];
        
    try {
      JSON.parse(content);
    } catch (error) {
      const match = error.message.match(/position (\d+)/);
      if (match) {
        const position = parseInt(match[1]);
        const lines = content.substring(0, position).split('\n');
        const line = lines.length;
        const column = lines[lines.length - 1].length + 1;
                
        errors.push({
          line,
          column,
          message: error.message,
          severity: 'ERROR'
        });
      }
    }
        
    return errors;
  }

  checkCssSyntax(content, filePath) {
    const errors = [];
    const lines = content.split('\n');
        
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
            
      if (openBraces !== closeBraces) {
        errors.push({
          line: i + 1,
          column: 1,
          message: 'Unmatched braces in CSS',
          severity: 'WARNING'
        });
      }
    }
        
    return errors;
  }

  checkHtmlSyntax(content, filePath) {
    const errors = [];
    const lines = content.split('\n');
        
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const openTags = (line.match(/<[^/][^>]*>/g) || []).length;
      const closeTags = (line.match(/<\/[^>]*>/g) || []).length;
            
      if (openTags !== closeTags) {
        errors.push({
          line: i + 1,
          column: 1,
          message: 'Unmatched HTML tags',
          severity: 'WARNING'
        });
      }
    }
        
    return errors;
  }

  checkMarkdownSyntax(content, filePath) {
    const errors = [];
    const lines = content.split('\n');
        
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const linkMatches = line.match(/\[([^\]]*)\]\(([^)]*)\)/g);
      if (linkMatches) {
        for (const match of linkMatches) {
          const linkMatch = match.match(/\[([^\]]*)\]\(([^)]*)\)/);
          if (linkMatch && (!linkMatch[1] || !linkMatch[2])) {
            errors.push({
              line: i + 1,
              column: line.indexOf(match) + 1,
              message: 'Broken markdown link',
              severity: 'WARNING'
            });
          }
        }
      }
    }
        
    return errors;
  }

  generateReport(errors) {
    const timestamp = new Date().toISOString();
    const reportId = Math.random().toString(36).substring(2, 15);
        
    const report = {
      id: reportId,
      timestamp,
      totalErrors: errors.reduce((sum, file) => sum + file.errors.length, 0),
      filesWithErrors: errors.length,
      errors: errors,
      summary: {
        bySeverity: {},
        byFileType: {}
      }
    };
        
    errors.forEach(file => {
      file.errors.forEach(error => {
        report.summary.bySeverity[error.severity] = 
                    (report.summary.bySeverity[error.severity] || 0) + 1;
      });
            
      const ext = path.extname(file.file);
      report.summary.byFileType[ext] = 
                (report.summary.byFileType[ext] || 0) + file.errors.length;
    });
        
    const reportFile = path.join(this.reportsDir, `syntax-report-${timestamp.split('T')[0]}-${reportId}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
    return report;
  }

  async run() {
    this.log('Starting syntax error detection scan...');
    this.updateStatus('RUNNING');
        
    try {
      const projectRoot = path.resolve(__dirname, '../../');
      const errors = this.scanDirectory(projectRoot);
            
      if (errors.length > 0) {
        this.log(`Found ${errors.length} files with syntax errors`);
        const report = this.generateReport(errors);
        this.log(`Generated report: ${report.id}`);
        this.updateStatus('ERRORS_FOUND');
      } else {
        this.log('No syntax errors found');
        this.updateStatus('CLEAN');
      }
            
      return errors;
    } catch (error) {
      this.log(`Error during syntax detection: ${error.message}`, 'ERROR');
      this.updateStatus('ERROR');
      throw error;
    }
  }

  cleanup() {
    try {
      if (fs.existsSync(this.pidFile)) {
        fs.unlinkSync(this.pidFile);
      }
    } catch (error) {
      this.log(`Error during cleanup: ${error.message}`, 'ERROR');
    }
  }
}

process.on('SIGINT', () => {
  const detector = new SyntaxErrorDetector();
  detector.log('Received SIGINT, cleaning up...');
  detector.cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  const detector = new SyntaxErrorDetector();
  detector.log('Received SIGTERM, cleaning up...');
  detector.cleanup();
  process.exit(0);
});

module.exports = SyntaxErrorDetector;

if (require.main === module) {
  const detector = new SyntaxErrorDetector();
  detector.run()
    .then(() => {
      detector.log('Syntax detection completed');
      detector.cleanup();
    })
    .catch(error => {
      detector.log(`Syntax detection failed: ${error.message}`, 'ERROR');
      detector.cleanup();
      process.exit(1);
    });
}
