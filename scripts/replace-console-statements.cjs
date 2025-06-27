#!/usr/bin/env node

/**
 * Replace console statements with production logger
 * This script systematically replaces console.log, console.warn, console.error statements
 * with the appropriate production logger calls
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PROJECT_ROOT = process.cwd();

// Files to process (exclude node_modules, build directories, etc.)
const INCLUDE_PATTERNS = [
  'src/**/*.{ts,tsx,js,jsx}',
  'pages/**/*.{ts,tsx,js,jsx}',
  'components/**/*.{ts,tsx,js,jsx}',
];

const EXCLUDE_PATTERNS = [
  'node_modules/**',
  'dist/**',
  'build/**',
  '.next/**',
  'coverage/**',
  '**/*.test.{ts,tsx,js,jsx}',
  '**/*.spec.{ts,tsx,js,jsx}',
  '__tests__/**',
  'tests/**',
];

// Console statement patterns to replace
const REPLACEMENTS = [
  {
    pattern: /console\.log\s*\(/g,
    replacement: 'logInfo(',
    importName: 'logInfo',
    description: 'console.log -> logInfo'
  },
  {
    pattern: /console\.info\s*\(/g,
    replacement: 'logInfo(',
    importName: 'logInfo',
    description: 'console.info -> logInfo'
  },
  {
    pattern: /console\.warn\s*\(/g,
    replacement: 'logWarn(',
    importName: 'logWarn',
    description: 'console.warn -> logWarn'
  },
  {
    pattern: /console\.error\s*\(/g,
    replacement: 'logError(',
    importName: 'logError',
    description: 'console.error -> logError'
  },
  {
    pattern: /console\.debug\s*\(/g,
    replacement: 'logDebug(',
    importName: 'logDebug',
    description: 'console.debug -> logDebug'
  },
];

// Files that should keep console statements (development only files)
const KEEP_CONSOLE_FILES = [
  'scripts/**',
  '**/*.config.{js,ts}',
  '**/middleware.ts',
  '**/next.config.js',
  'api/**/*.js',
  'server/**',
  'backend/**',
];

class ConsoleReplacer {
  constructor() {
    this.processedFiles = 0;
    this.replacementsMade = 0;
    this.errors = [];
  }

  /**
   * Get all files to process
   */
  getFilesToProcess() {
    let allFiles = [];
    
    INCLUDE_PATTERNS.forEach(pattern => {
      const files = glob.sync(pattern, { 
        cwd: PROJECT_ROOT,
        ignore: [...EXCLUDE_PATTERNS, ...KEEP_CONSOLE_FILES]
      });
      allFiles = allFiles.concat(files);
    });

    // Remove duplicates
    return [...new Set(allFiles)];
  }

  /**
   * Check if file already has logger imports
   */
  hasLoggerImports(content) {
    return content.includes("from '@/utils/productionLogger'") ||
           content.includes("from '../utils/productionLogger'") ||
           content.includes("from '../../utils/productionLogger'") ||
           content.includes("from '../../../utils/productionLogger'");
  }

  /**
   * Add logger imports to file
   */
  addLoggerImports(content, neededImports) {
    if (neededImports.length === 0) return content;

    const importStatement = `import { ${neededImports.join(', ')} } from '@/utils/productionLogger';\n`;
    
    // Find the last import statement or add at the top
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find last import or 'use client' directive
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('import ') || 
          line.startsWith('export ') ||
          line.startsWith("'use client'") ||
          line.startsWith('"use client"')) {
        insertIndex = i + 1;
      } else if (line && !line.startsWith('//') && !line.startsWith('/*')) {
        break;
      }
    }

    lines.splice(insertIndex, 0, importStatement);
    return lines.join('\n');
  }

  /**
   * Process a single file
   */
  processFile(filePath) {
    try {
      const fullPath = path.join(PROJECT_ROOT, filePath);
      const content = fs.readFileSync(fullPath, 'utf8');
      
      let modifiedContent = content;
      const neededImports = new Set();
      let hasReplacements = false;

      // Skip if already has logger imports (likely already processed)
      if (this.hasLoggerImports(content)) {
        return { processed: false, reason: 'Already has logger imports' };
      }

      // Apply replacements
      REPLACEMENTS.forEach(({ pattern, replacement, importName, description }) => {
        const matches = content.match(pattern);
        if (matches) {
          modifiedContent = modifiedContent.replace(pattern, replacement);
          neededImports.add(importName);
          hasReplacements = true;
          this.replacementsMade += matches.length;
          console.log(`  ✓ ${description}: ${matches.length} occurrences`);
        }
      });

      if (!hasReplacements) {
        return { processed: false, reason: 'No console statements found' };
      }

      // Add import statements
      modifiedContent = this.addLoggerImports(modifiedContent, Array.from(neededImports));

      // Write the modified content back
      fs.writeFileSync(fullPath, modifiedContent, 'utf8');

      this.processedFiles++;
      return { processed: true, replacements: neededImports.size };

    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { processed: false, reason: `Error: ${error.message}` };
    }
  }

  /**
   * Process all files
   */
  async processAllFiles() {
    console.log('🔄 Starting console statement replacement...');
    console.log(`📁 Project root: ${PROJECT_ROOT}`);

    const filesToProcess = this.getFilesToProcess();
    console.log(`📋 Found ${filesToProcess.length} files to process`);

    if (filesToProcess.length === 0) {
      console.log('ℹ️  No files found to process');
      return;
    }

    // Show first few files as preview
    console.log('\n📄 Files to process (first 10):');
    filesToProcess.slice(0, 10).forEach(file => {
      console.log(`   ${file}`);
    });
    if (filesToProcess.length > 10) {
      console.log(`   ... and ${filesToProcess.length - 10} more files`);
    }

    console.log('\n🔧 Processing files...\n');

    for (const filePath of filesToProcess) {
      console.log(`📝 Processing: ${filePath}`);
      const result = this.processFile(filePath);
      
      if (result.processed) {
        console.log(`  ✅ Processed successfully (${result.replacements} import types added)`);
      } else {
        console.log(`  ⏭️  Skipped: ${result.reason}`);
      }
    }

    this.printSummary();
  }

  /**
   * Print processing summary
   */
  printSummary() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 CONSOLE REPLACEMENT SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Files processed: ${this.processedFiles}`);
    console.log(`🔄 Total replacements made: ${this.replacementsMade}`);
    console.log(`❌ Errors encountered: ${this.errors.length}`);

    if (this.errors.length > 0) {
      console.log('\n⚠️  Errors:');
      this.errors.forEach(({ file, error }) => {
        console.log(`   ${file}: ${error}`);
      });
    }

    if (this.processedFiles > 0) {
      console.log('\n🎉 Console statement replacement completed!');
      console.log('\n📋 Next steps:');
      console.log('   1. Run: npm run lint -- --fix');
      console.log('   2. Test the application: npm run dev');
      console.log('   3. Check for any remaining console statements');
      console.log('   4. Commit changes: git add . && git commit -m "Replace console statements with production logger"');
    } else {
      console.log('\n ℹ️ No files were processed. This might mean:');
      console.log('   • Console statements were already replaced');
      console.log('   • No console statements found in the codebase');
      console.log('   • Files are excluded by the filter patterns');
    }
  }
}

// CLI interface
if (require.main === module) {
  const replacer = new ConsoleReplacer();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Console Statement Replacer
========================

This script replaces console.log, console.warn, console.error statements
with production-ready logger calls from @/utils/productionLogger.

Usage:
  node scripts/replace-console-statements.cjs

Options:
  --help, -h    Show this help message

Examples:
  node scripts/replace-console-statements.cjs

The script will:
1. Scan all TypeScript/JavaScript files in src/, pages/, components/
2. Replace console statements with logInfo, logWarn, logError calls
3. Add appropriate import statements
4. Skip test files and configuration files
5. Provide a summary of changes made
`);
    process.exit(0);
  }

  replacer.processAllFiles().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = ConsoleReplacer; 