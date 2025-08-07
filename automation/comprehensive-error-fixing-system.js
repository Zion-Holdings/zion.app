#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ComprehensiveErrorFixingSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'error-fixing-logs');
    this.statusDir = path.join(this.projectRoot, 'automation', 'error-fixing-status');
    this.ensureDirectories();
    this.errorPatterns = this.initializeErrorPatterns();
  }

  ensureDirectories() {
    [this.logsDir, this.statusDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  initializeErrorPatterns() {
    return {
      missingSemicolon: /import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g,
      parsingError: /Parsing error:/,
      jsxError: /JSX element '[^']+' has no corresponding closing tag/,
      unusedVariable: /'[^']+' is defined but never used/,
      noUndef: /'[^']+' is not defined/,
      consoleWarning: /Unexpected console statement/,
      indentError: /Expected indentation of \d+ spaces but found \d+/
    };
  }

  async runComprehensiveErrorFix() {
    console.log('🚀 Starting Comprehensive Error Fixing System...');
    
    try {
      // Step 1: Run initial error scan
      const initialErrors = await this.scanForErrors();
      console.log(`📊 Found ${initialErrors.length} initial errors`);

      // Step 2: Run syntax error fixing
      await this.runSyntaxErrorFixing();

      // Step 3: Run linting error fixing
      await this.runLintingErrorFixing();

      // Step 4: Run specific error pattern fixes
      await this.runSpecificErrorFixes();

      // Step 5: Run final validation
      const finalErrors = await this.scanForErrors();
      console.log(`📊 Final error count: ${finalErrors.length}`);

      // Step 6: Generate report
      await this.generateErrorReport(initialErrors, finalErrors);

      console.log('✅ Comprehensive error fixing completed');
    } catch (error) {
      console.error('❌ Error in comprehensive fixing system:', error);
    }
  }

  async scanForErrors() {
    try {
      const lintResult = execSync('npm run lint', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });

      return lintResult.split('\n').filter(line => 
        line.includes('Error') || line.includes('Warning')
      );
    } catch (error) {
      return ['Unable to determine errors'];
    }
  }

  async runSyntaxErrorFixing() {
    console.log('🔧 Running syntax error fixing...');
    
    try {
      execSync('node automation/syntax-error-fixing-agent.js', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
    } catch (error) {
      console.error('❌ Syntax error fixing failed:', error.message);
    }
  }

  async runLintingErrorFixing() {
    console.log('🔧 Running linting error fixing...');
    
    try {
      execSync('node automation/linting-error-fixing-agent.js', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
    } catch (error) {
      console.error('❌ Linting error fixing failed:', error.message);
    }
  }

  async runSpecificErrorFixes() {
    console.log('🔧 Running specific error pattern fixes...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix missing semicolons in import statements
        content = content.replace(/import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g, (match, imports, source) => {
          if (!match.endsWith(';')) {
            modified = true;
            return `import ${imports} from '${source}';`;
          }
          return match;
        });

        // Fix missing semicolons in export statements
        content = content.replace(/export\s+([^;]+?)(?=\n|$)/g, (match) => {
          if (!match.endsWith(';')) {
            modified = true;
            return match + ';';
          }
          return match;
        });

        // Fix unused imports
        const lines = content.split('\n');
        const filteredLines = lines.filter(line => {
          if (line.includes('import') && line.includes('from')) {
            const importMatch = line.match(/import\s+\{([^}]+)\}\s+from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(i => i.trim());
              // Check if any of these imports are actually used
              const isUsed = imports.some(imp => {
                const importName = imp.split(' as ')[0].trim();
                return content.includes(importName) && !line.includes(importName);
              });
              return isUsed;
            }
          }
          return true;
        });

        if (filteredLines.length !== lines.length) {
          modified = true;
          content = filteredLines.join('\n');
        }

        if (modified) {
          fs.writeFileSync(file, content);
          console.log(`✅ Fixed specific errors in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing specific errors in ${file}:`, error);
      }
    }
  }

  async generateErrorReport(initialErrors, finalErrors) {
    const report = {
      timestamp: new Date().toISOString(),
      initialErrorCount: initialErrors.length,
      finalErrorCount: finalErrors.length,
      errorsFixed: initialErrors.length - finalErrors.length,
      initialErrors: initialErrors.slice(0, 20), // Show first 20 errors
      finalErrors: finalErrors.slice(0, 20), // Show first 20 errors
      success: finalErrors.length < initialErrors.length
    };

    const reportPath = path.join(this.statusDir, 'comprehensive-error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Error report generated:', reportPath);
    return report;
  }

  findTypeScriptFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }

  async startContinuousMonitoring() {
    console.log('🔍 Starting continuous error monitoring...');
    
    const monitoringInterval = 5 * 60 * 1000; // 5 minutes
    let isRunning = true;

    while (isRunning) {
      try {
        const errors = await this.scanForErrors();
        
        if (errors.length > 0) {
          console.log(`🚨 Found ${errors.length} errors, triggering comprehensive fix...`);
          await this.runComprehensiveErrorFix();
        } else {
          console.log('✅ No errors detected');
        }
        
        await this.sleep(monitoringInterval);
      } catch (error) {
        console.error('❌ Error in continuous monitoring:', error);
        await this.sleep(60000); // Wait 1 minute on error
      }
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
const system = new ComprehensiveErrorFixingSystem();

if (args.includes('--monitor')) {
  system.startContinuousMonitoring();
} else {
  system.runComprehensiveErrorFix();
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  process.exit(0);
});
