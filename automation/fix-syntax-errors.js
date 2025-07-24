
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


/**
 * Comprehensive Syntax Error Fixer
 * 
 * This script fixes common syntax errors in the project:
 * - Extra semicolons
 * - Unterminated string literals
 * - Missing quotes
 * - Import/export syntax errors
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
<<<<<<< HEAD
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  async fixAllFiles() {
    logger.info('🔧 Fixing syntax errors in automation files...');
    
    const filesToFix = [
      test-all-automations.js',
      core/IntelligentAutomationOrchestrator.js',
      core/AutonomousAutomationManager.js',
      core/TaskScheduler.js',
      core/NotificationManager.js',
      core/AnomalyDetector.js',
      core/ReportGenerator.js',
      netlify-monitor.js',
      netlify-error-fixer.js',
      netlify-build-automation.js',
      performance/monitor.js',
      performance/frontend-fix.js',
      continuous-improvement/enhanced-automation.js',
      continuous-improvement/monitor.js',
      continuous-improvement/improve.js',
      tasks/DependencyUpdater.js
    ];

    for (const file of filesToFix) {
      try {
        await this.fixFile(file);
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }

    this.printReport();
  }

  async fixFile(filePath) {
    try {
      const content = await fs.readFile(filePath, utf8');
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = this.fixTrailingQuotes(fixedContent);
      fixedContent = this.fixUnclosedStrings(fixedContent);
      fixedContent = this.fixMissingQuotes(fixedContent);
      fixedContent = this.fixExtraSemicolons(fixedContent);

      if (fixedContent !== content) {
        await fs.writeFile(filePath, fixedContent, utf8');
        this.fixedFiles.push(filePath);
        logger.info(`✅ Fixed: ${filePath}`);
      } else {
        logger.info(`✅ No issues: ${filePath}`);
      }
    } catch (error) {
      throw new Error(`Failed to fix ${filePath}: ${error.message}`);
=======
    constructor() {
        this.projectRoot = process.cwd();
        this.fixedFiles = [];
        this.errors = [];
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const prefix = level === 'error' ? '❌' : level === 'success' ? '✅' : level === 'warn' ? '⚠️' : 'ℹ️';
        console.log(`${prefix} [${timestamp}] ${message}`);
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
    }

    async fixFile(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                return false;
            }

            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;
            let fixed = false;

            // Fix extra semicolons after imports
            content = content.replace(/import\s+([^;]+);/g, 'import $1;');
            content = content.replace(/from\s+([^;]+);/g, 'from $1;');

            // Fix unterminated string literals (remove extra quotes)
            content = content.replace(//g, '');
            content = content.replace(//g, '');

<<<<<<< HEAD
  printReport() {
    logger.info('\n📊 Syntax Fix Report');
    logger.info('='.repeat(50));
    logger.info(`Files fixed: ${this.fixedFiles.length}`);
    logger.info(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      logger.info('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => logger.info(`  - ${file}`));
    }
    
    if (this.errors.length > 0) {
      logger.info('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => logger.info(`  - ${file}: ${error}`));
=======
            // Fix extra semicolons in JSX
            content = content.replace(/<([^>]+);/g, '<$1')
            content = content.replace(/>;/g, '>;');
            content = content.replace(/;/g, ';');

            // Fix missing quotes in imports
            content = content.replace(/import\s+React\s+from\s+react';/g, "import React from 'react';");
            content = content.replace(/import\s+Head\s+from\s+next\/head';/g, "import Head from 'next/head';");

            // Fix export syntax
            content = content.replace(/default\s+function/g, 'export export default function');

            // Fix missing closing braces
            content = content.replace(/function\s+([^{]+)\s*{/g, 'function $1  {');

            // Fix module specifier issues
            content = content.replace(/import\s+([^;]+)\s+from\s+([^;]+);/g, (match, importName, modulePath) => {
                if (!modulePath.includes("'") && !modulePath.includes('"')) {
                    return `import ${importName} from '${modulePath}';`;
                }
                return match;
            });

            // Fix API route exports
            if (filePath.includes('/api/') && filePath.endsWith('.ts')) {
                if (!content.includes('export default') && !content.includes('export {')) {
                    content = content.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export export export default function $1   {');
                }
            }

            // Fix React component syntax
            content = content.replace(/default\s+function\s+([^{]+)\s*{/g, 'export export export default function $1   {');

            // Remove extra semicolons at the end of lines
            content = content.replace(/;+/g, ';');

            // Fix JSX syntax
            content = content.replace(/<([^>]+);/g, '<$1')
            content = content.replace(/>;/g, '>;');

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                this.fixedFiles.push(filePath);
                this.log(`Fixed: ${filePath}`, 'success');
                fixed = true;
            }

            return fixed;
        } catch (error) {
            this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
            this.errors.push({ file: filePath, error: error.message });
            return false;
        }
    }

    async fixDirectory(dirPath) {
        try {
            const files = fs.readdirSync(dirPath);
            
            for (const file of files) {
                const fullPath = path.join(dirPath, file);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Skip node_modules and other build directories
                    if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(file)) {
                        await this.fixDirectory(fullPath);
                    }
                } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
                    await this.fixFile(fullPath);
                }
            }
        } catch (error) {
            this.log(`Error processing directory ${dirPath}: ${error.message}`, 'error');
        }
    }

    async fixAll() {
        this.log('🔧 Starting comprehensive syntax error fix...');
        
        const directories = [
            'pages',
            'components',
            'src',
            'automation'
        ];

        for (const dir of directories) {
            const dirPath = path.join(this.projectRoot, dir);
            if (fs.existsSync(dirPath)) {
                this.log(`Processing directory: ${dir}`);
                await this.fixDirectory(dirPath);
            }
        }

        this.log(`✅ Syntax fix completed. Fixed ${this.fixedFiles.length} files.`);
        
        if (this.errors.length > 0) {
            this.log(`⚠️ ${this.errors.length} errors encountered:`, 'warn');
            this.errors.forEach(error => {
                this.log(`  ${error.file}: ${error.error}`, 'warn');
            });
        }

        return this.fixedFiles.length;
    }

    async runLint() {
        this.log('🔍 Running lint check after fixes...');
        
        try {
            const result = execSync('npm run lint', { 
                cwd: this.projectRoot, 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            this.log('✅ Lint check passed', 'success');
            return true;
        } catch (error) {
            this.log(`❌ Lint check failed: ${error.message}`, 'error');
            return false;
        }
    }

    async runTypeCheck() {
        this.log('🔍 Running TypeScript check...');
        
        try {
            const result = execSync('npm run type-check', { 
                cwd: this.projectRoot, 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            this.log('✅ TypeScript check passed', 'success');
            return true;
        } catch (error) {
            this.log(`❌ TypeScript check failed: ${error.message}`, 'error');
            return false;
        }
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
    }
}

<<<<<<< HEAD
// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles().catch(error => {
    logger.error('Fixer failed:', error);
    process.exit(1);
  });
=======
// Main execution
const fixer = new SyntaxErrorFixer();
const command = process.argv[2] || 'fix';

switch (command) {
    case 'fix':
        fixer.fixAll().then(() => {
            console.log('\n🎉 Syntax error fix completed!');
        }).catch(error => {
            console.error('❌ Fix failed:', error.message);
            process.exit(1);
        });
        break;
    case 'lint':
        fixer.runLint().then(success => {
            process.exit(success ? 0 : 1);
        });
        break;
    case 'type-check':
        fixer.runTypeCheck().then(success => {
            process.exit(success ? 0 : 1);
        });
        break;
    case 'all':
        fixer.fixAll().then(() => {
            return fixer.runLint();
        }).then(() => {
            return fixer.runTypeCheck();
        }).then(() => {
            console.log('\n🎉 All checks completed successfully!');
        }).catch(error => {
            console.error('❌ Check failed:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🔧 Syntax Error Fixer

Usage:
  node automation/fix-syntax-errors.js [command]

Commands:
  fix         - Fix all syntax errors
  lint        - Run lint check
  type-check  - Run TypeScript check
  all         - Fix errors and run all checks

Examples:
  node automation/fix-syntax-errors.js fix
  node automation/fix-syntax-errors.js all
        `);
        break;
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
}

module.exports = SyntaxErrorFixer; 

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

