#!/usr/bin/env node
 

/**
 * Fix TypeScript errors in production logger calls
 * The logger expects specific parameter types that need to be corrected
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PROJECT_ROOT = process.cwd();

class LoggerTypeFixer {
  constructor() {
    this.fixedFiles = 0;
    this.errors = [];
    this.patterns = [
      // Pattern 1: log function with direct variable/string as second parameter
      {
        regex: /(log(?:Info|Warn|Error|Debug))\(['"`]([^'"`]+)['"`],\s*([^{][^,)]+)\)/g,
        replacement: '$1(\'$2\', { data: $3 })'
      },
      // Pattern 2: logError with error as second parameter (not in object)
      {
        regex: /(logError)\(['"`]([^'"`]+)['"`],\s*(error|err|e)\s*\)/g,
        replacement: '$1(\'$2\', { error: $3 })'
      },
      // Pattern 3: log functions with other variables as second parameter
      {
        regex: /(log(?:Info|Warn|Error|Debug))\(['"`]([^'"`]+)['"`],\s*([a-zA-Z_][a-zA-Z0-9_.]*)\s*\)/g,
        replacement: '$1(\'$2\', { data: $3 })'
      }
    ];
  }

  /**
   * Get all TypeScript/JavaScript files that import productionLogger
   */
  getFilesToProcess() {
    const patterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
    ];

    let allFiles = [];
    patterns.forEach(pattern => {
      const files = glob.sync(pattern, { 
        cwd: PROJECT_ROOT,
        ignore: ['node_modules/**', 'dist/**', 'build/**', '.next/**']
      });
      allFiles = allFiles.concat(files);
    });

    // Filter to only files that import productionLogger
    return [...new Set(allFiles)].filter(file => {
      try {
        const content = fs.readFileSync(path.join(PROJECT_ROOT, file), 'utf8');
        return content.includes('productionLogger');
      } catch (_error) {
        return false;
      }
    });
  }

  /**
   * Fix logger calls in a single file
   */
  fixFile(filePath) {
    try {
      const fullPath = path.join(PROJECT_ROOT, filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      let hasChanges = false;
      let changesCount = 0;

      // Apply each pattern
      for (const pattern of this.patterns) {
        const originalContent = content;
        content = content.replace(pattern.regex, pattern.replacement);
        
        if (content !== originalContent) {
          hasChanges = true;
          const matches = originalContent.match(pattern.regex);
          if (matches) {
            changesCount += matches.length;
          }
        }
      }

      // Additional specific fixes
      content = this.applySpecificFixes(content);

      if (hasChanges || content !== fs.readFileSync(fullPath, 'utf8')) {
        fs.writeFileSync(fullPath, content, 'utf8');
        this.fixedFiles++;
        return {
          fixed: true,
          changesCount
        };
      }

      return { fixed: false };
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { fixed: false, error: error.message };
    }
  }

  /**
   * Apply specific manual fixes for common patterns
   */
  applySpecificFixes(content) {
    // Fix logInfo with email addresses
    content = content.replace(
      /logInfo\(['"`]([^'"`]+)['"`],\s*credentials\.email\)/g,
      'logInfo(\'$1\', { email: credentials.email })'
    );

    // Fix logInfo with eventId
    content = content.replace(
      /logInfo\(['"`]([^'"`]+)['"`],\s*eventId\)/g,
      'logInfo(\'$1\', { eventId })'
    );

    // Fix logWarn and logError with common variable names
    const commonVars = ['error', 'err', 'e', 'result', 'data', 'response', 'user', 'id'];
    commonVars.forEach(varName => {
      const regex = new RegExp(`(log(?:Info|Warn|Error|Debug))\\(['"\`]([^'"\`]+)['"\`],\\s*${varName}\\s*\\)`, 'g');
      content = content.replace(regex, `$1('$2', { ${varName} })`);
    });

    return content;
  }

  /**
   * Process all files
   */
  async processAllFiles() {
    console.warn('🔧 Fixing TypeScript errors in logger calls...');
    
    const files = this.getFilesToProcess();
    console.warn(`📋 Found ${files.length} files with productionLogger imports`);

    const results = [];

    for (const filePath of files) {
      const result = this.fixFile(filePath);
      if (result.fixed) {
        console.warn(`✅ Fixed ${filePath} (${result.changesCount || 1} changes)`);
        results.push({ file: filePath, ...result });
      }
    }

    this.printSummary(results);
  }

  /**
   * Print summary
   */
  printSummary(results) {
    console.warn('\n' + '='.repeat(60));
    console.warn('📊 LOGGER TYPE FIXING SUMMARY');
    console.warn('='.repeat(60));
    console.warn(`✅ Files fixed: ${this.fixedFiles}`);
    console.warn(`❌ Errors encountered: ${this.errors.length}`);

    if (results.length > 0) {
      console.warn('\n📝 Fixed files:');
      results.forEach(({ file, changesCount }) => {
        console.warn(`   ${file}: ${changesCount || 1} logger calls fixed`);
      });
    }

    if (this.errors.length > 0) {
      console.warn('\n⚠️  Errors:');
      this.errors.forEach(({ file, error }) => {
        console.warn(`   ${file}: ${error}`);
      });
    }

    if (this.fixedFiles > 0) {
      console.warn('\n🎉 Logger TypeScript issues fixed!');
      console.warn('📋 Next steps:');
      console.warn('   1. Run: npm run build');
      console.warn('   2. Test the application: npm run dev');
    } else {
      console.warn('\n ℹ️ No logger type issues found.');
    }
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new LoggerTypeFixer();
  fixer.processAllFiles().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = LoggerTypeFixer; 
