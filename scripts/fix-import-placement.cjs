#!/usr/bin/env node

/**
 * Fix misplaced import statements
 * The console replacement script sometimes places imports in wrong locations
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PROJECT_ROOT = process.cwd();

class ImportFixer {
  constructor() {
    this.fixedFiles = 0;
    this.errors = [];
  }

  /**
   * Get all TypeScript/JavaScript files
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

    return [...new Set(allFiles)];
  }

  /**
   * Fix imports in a single file
   */
  fixFile(filePath) {
    try {
      const fullPath = path.join(PROJECT_ROOT, filePath);
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for misplaced imports (imports after export statements)
      const lines = content.split('\n');
      const importLines = [];
      const otherLines = [];
      let inExportFunction = false;
      let hasExportFunction = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if we're entering an export function/component
        if (line.match(/^export\s+(default\s+)?function|^export\s+(default\s+)?(class|const)/)) {
          hasExportFunction = true;
          inExportFunction = true;
        }

        // Look for misplaced imports after export functions
        if (inExportFunction && line.match(/^import\s+.*from\s+['"]@\/utils\/productionLogger['"]/)) {
          // This is a misplaced import - collect it
          importLines.push(line);
          continue; // Skip adding to otherLines
        }

        otherLines.push(line);
      }

      if (importLines.length > 0) {
        // We found misplaced imports, need to fix the file
        const fixedContent = this.reconstructFile(otherLines, importLines);
        
        if (fixedContent !== content) {
          fs.writeFileSync(fullPath, fixedContent, 'utf8');
          this.fixedFiles++;
          return {
            fixed: true,
            importsFixed: importLines.length,
            imports: importLines
          };
        }
      }

      return { fixed: false };
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { fixed: false, error: error.message };
    }
  }

  /**
   * Reconstruct file with imports in correct location
   */
  reconstructFile(lines, misplacedImports) {
    const result = [];
    let insertIndex = -1;
    let foundFirstImport = false;

    // Find where to insert the imports (after existing imports)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.match(/^import\s+/)) {
        foundFirstImport = true;
        insertIndex = i + 1;
      } else if (foundFirstImport && !line.trim().startsWith('import') && line.trim() !== '') {
        // We've passed all the imports
        break;
      }
    }

    // If no imports found, insert at the top
    if (insertIndex === -1) {
      insertIndex = 0;
    }

    // Build the result
    for (let i = 0; i < lines.length; i++) {
      if (i === insertIndex && misplacedImports.length > 0) {
        // Insert the misplaced imports here
        misplacedImports.forEach(imp => result.push(imp));
      }
      result.push(lines[i]);
    }

    // If we didn't insert yet and we have imports to add
    if (insertIndex === 0 && misplacedImports.length > 0) {
      const finalResult = [...misplacedImports, ...result];
      return finalResult.join('\n');
    }

    return result.join('\n');
  }

  /**
   * Process all files
   */
  async processAllFiles() {
    console.log('🔧 Fixing misplaced import statements...');
    
    const files = this.getFilesToProcess();
    console.log(`📋 Found ${files.length} files to check`);

    const results = [];

    for (const filePath of files) {
      const result = this.fixFile(filePath);
      if (result.fixed) {
        console.log(`✅ Fixed ${filePath} (${result.importsFixed} imports moved)`);
        results.push({ file: filePath, ...result });
      }
    }

    this.printSummary(results);
  }

  /**
   * Print summary
   */
  printSummary(results) {
    console.log('\n' + '='.repeat(60));
    console.log('📊 IMPORT FIXING SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Files fixed: ${this.fixedFiles}`);
    console.log(`❌ Errors encountered: ${this.errors.length}`);

    if (results.length > 0) {
      console.log('\n📝 Fixed files:');
      results.forEach(({ file, importsFixed }) => {
        console.log(`   ${file}: ${importsFixed} imports moved`);
      });
    }

    if (this.errors.length > 0) {
      console.log('\n⚠️  Errors:');
      this.errors.forEach(({ file, error }) => {
        console.log(`   ${file}: ${error}`);
      });
    }

    if (this.fixedFiles > 0) {
      console.log('\n🎉 Import placement issues fixed!');
      console.log('📋 Next steps:');
      console.log('   1. Run: npm run build');
      console.log('   2. Test the application: npm run dev');
    } else {
      console.log('\n ℹ️ No misplaced imports found.');
    }
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new ImportFixer();
  fixer.processAllFiles().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = ImportFixer; 