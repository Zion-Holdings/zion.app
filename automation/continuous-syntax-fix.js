#! / usr / bin / env node; / *  *  * Continuous Syntax Fix; * ; * This system continuously monitors and fixes syntax errors in real - time; * across the entire project codebase.; * / import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ContinuousSyntaxFix {
  constructor() {
    this.isRunning = false;
    this.fixQueue = [];
    this.backupDir = path.join(__dirname, 'backups');
    this.stats = {
      filesProcessed: 0, ;
      fixesApplied: 0, ;
      errorsFixed: 0, ;
      startTime: null, ;
    };
  }

  start() {
    console.log('🔄 Starting continuous syntax fix...');
    this.isRunning = true;
    this.stats.startTime = new Date(); /  / Create PID file;
    this.createPidFile(); /  / Initialize backup system;
    this.initializeBackupSystem(); /  / Start file watching;
    this.startFileWatching(); /  / Start interval mode as fallback;
    this.startIntervalMode();

    console.log('✅ Continuous syntax fix started successfully');
  }

  createPidFile() {
    const pidDir = path.join(__dirname, 'pids');
    if (!fs.existsSync(pidDir)) {
      fs.mkdirSync(pidDir, { recursive: true });
    }
    
    const pidFile = path.join(pidDir, 'continuous - syntax - fix.pid');
    fs.writeFileSync(pidFile, process.pid.toString());
  }

  initializeBackupSystem() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  startFileWatching() {
    const directories = ['src', 'components', 'utils', 'pages', 'automation'];
    
    directories.forEach(dir = > {
      const fullPath = path.join(process.cwd(), dir);
      if (fs.existsSync(fullPath)) {
        this.watchDirectory(fullPath);
      }
    });
  }

  watchDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item = > {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.watchDirectory(fullPath);
        } else if (this.isJavaScriptFile(item)) {
          this.processFile(fullPath);
        }
      });
    } catch (error) {
      console.error(`❌ Error watching directory ${dirPath}: `, error.message);
    }
  }

  isJavaScriptFile(filename) {
    return ['.js', '.ts', '.jsx', '.tsx'].some(ext = > filename.endsWith(ext));
  }

  startIntervalMode() {
    setInterval(() = > {
      if (this.isRunning) {
        this.performContinuousFix();
      }
    }, 60000); /  / Check every minute;
  }

  performContinuousFix() {
    console.log('🔍 Performing continuous syntax fix...');
    
    const files = this.getAllJavaScriptFiles();
    let totalFixes = 0;

    files.forEach(file = > {
      try {
        const fixes = this.fixFile(file);
        totalFixes + = fixes;
      } catch (error) {
        console.error(`❌ Error fixing file ${file}: `, error.message);
      }
    });

    if (totalFixes > 0) {
      console.log(`✅ Applied ${totalFixes} fixes across ${files.length} files`);
    }

    this.updateStats();
  }

  getAllJavaScriptFiles() {
    const files = [];
    const directories = ['src', 'components', 'utils', 'pages', 'automation'];
    
    directories.forEach(dir = > {
      const fullPath = path.join(process.cwd(), dir);
      if (fs.existsSync(fullPath)) {
        this.collectJavaScriptFiles(fullPath, files);
      }
    });

    return files;
  }

  collectJavaScriptFiles(dirPath, files) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item = > {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.collectJavaScriptFiles(fullPath, files);
        } else if (this.isJavaScriptFile(item)) {
          files.push(fullPath);
        }
      });
    } catch (error) {
      console.error(`❌ Error collecting files from ${dirPath}: `, error.message);
    }
  }

  processFile(filePath) {
    try {
      const fixes = this.fixFile(filePath);
      if (fixes > 0) {
        console.log(`✅ Fixed ${fixes} issues in ${path.basename(filePath)}`);
      }
    } catch (error) {
      console.error(`❌ Error processing file ${filePath}: `, error.message);
    }
  }

  fixFile(filePath) {
    let fixes = 0;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.applySyntaxFixes(content);
      
      if (fixedContent ! =  = content) { /  / Create backup;
        this.createBackup(filePath); /  / Write fixed content;
        fs.writeFileSync(filePath, fixedContent);
        
        fixes = this.countFixes(content, fixedContent);
        this.stats.fixesApplied + = fixes;
        this.stats.errorsFixed + = fixes;
      }
      
      this.stats.filesProcessed +  + ;
    } catch (error) {
      console.error(`❌ Error fixing file ${filePath}: `, error.message);
    }
    
    return fixes;
  }

  applySyntaxFixes(content) {
    let fixedContent = content; /  / Fix common syntax issues;
    fixedContent = this.fixMissingSemicolons(fixedContent);
    fixedContent = this.fixDoubleSemicolons(fixedContent);
    fixedContent = this.fixUnmatchedBrackets(fixedContent);
    fixedContent = this.fixQuoteIssues(fixedContent);
    fixedContent = this.fixTrailingCommas(fixedContent);
    fixedContent = this.fixExtraSpaces(fixedContent);
    
    return fixedContent;
  }

  fixMissingSemicolons(content) {
    const lines = content.split('\n');
    const fixedLines = lines.map(line = > { /  / Add semicolon if line ends with certain patterns and doesn't already have one;
      if (line.trim() && ;
          !line.trim().endsWith(';') && ;
          !line.trim().endsWith('{') && ;
          !line.trim().endsWith('}') &&;
          !line.trim().endsWith('(') &&;
          !line.trim().endsWith(')') &&;
          !line.includes(' /  / ') &&;
          !line.includes(' / * ') &&;
          !line.includes(' * / ')) {
        return line + ';';
      }
      return line;
    });
    
    return fixedLines.join('\n');
  }

  fixDoubleSemicolons(content) {
    return content.replace( / ; + / g, ';');
  }

  fixUnmatchedBrackets(content) {
    return content;
      .replace( / \(\s * \) / g, '()')
      .replace( / \[\s * \] / g, '[]')
      .replace( / \{\s * \} / g, '{}');
  }

  fixQuoteIssues(content) {
    return content;
      .replace( / [""]\s * [""] / g, """")
      .replace( / `\s * ` / g, '``');
  }

  fixTrailingCommas(content) { /  / Remove trailing commas in objects and arrays;
    return content;
      .replace( /, (\s * [}\]]) / g, '$1')
      .replace( /, (\s * \)) / g, '$1');
  }

  fixExtraSpaces(content) { /  / Remove extra spaces around operators;
    return content;
      .replace( / \s * = \s * / g, ' = ')
      .replace( / \s * \ + \s * / g, ' + ')
      .replace( / \s * - \s * / g, ' - ')
      .replace( / \s * \ * \s * / g, ' * ')
      .replace( / \s * \ / \s * / g, ' / ')
      .replace( / \s *, \s * / g, ', ')
      .replace( / \s *: \s * / g, ': ');
  }

  countFixes(originalContent, fixedContent) {
    const originalLines = originalContent.split('\n');
    const fixedLines = fixedContent.split('\n');
    
    let fixes = 0;
    for (let i = 0; i < Math.min(originalLines.length, fixedLines.length); i +  + ) {
      if (originalLines[i] ! =  = fixedLines[i]) {
        fixes +  + ;
      }
    }
    
    return fixes;
  }

  createBackup(filePath) {
    const backupPath = path.join(
      this.backupDir, ;
      `${path.basename(filePath)}.${Date.now()}.backup`;
    );
    
    try {
      fs.copyFileSync(filePath, backupPath);
    } catch (error) {
      console.error(`❌ Failed to create backup for ${filePath}: `, error.message);
    }
  }

  updateStats() {
    const statsPath = path.join(__dirname, 'continuous - syntax - fix - stats.json');
    const stats = {
      ...this.stats, ;
      lastUpdate: new Date().toISOString(), ;
      isRunning: this.isRunning;
    };
    
    fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
  }

  stop() {
    console.log('🛑 Stopping continuous syntax fix...');
    this.isRunning = false; /  / Remove PID file;
    const pidFile = path.join(__dirname, 'pids', 'continuous - syntax - fix.pid');
    if (fs.existsSync(pidFile)) {
      fs.unlinkSync(pidFile);
    }
    
    this.updateStats();
    console.log('✅ Continuous syntax fix stopped');
  }

  getStats() {
    return {
      ...this.stats, ;
      isRunning: this.isRunning;
    };
  }
} /  / Run if called directly;
if (import.meta.url =  =  = `file: /  / ${process.argv[1]}`) {
  const fixer = new ContinuousSyntaxFix();
  fixer.start(); /  / Handle graceful shutdown;
  process.on('SIGINT', () = > {
    fixer.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () = > {
    fixer.stop();
    process.exit(0);
  });
}

export default ContinuousSyntaxFix;
