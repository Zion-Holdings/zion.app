const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function fixAllSyntaxErrors() {
  console.log('🔧 Fixing all syntax errors in JavaScript files...');
  
  try {
    // Find all JavaScript files
    const files = glob.sync('**/*.{js,cjs}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'coverage/**'] 
    });
    
    let fixedCount = 0;
    let errorCount = 0;
    
    for (const file of files) {
      try {
        const content = await fs.readFile(file, 'utf8');
        let fixedContent = content;
        let hasChanges = false;
        
        // Fix missing quotes around string literals
        const stringPatterns = [
          // Fix level: info' -> level: 'info'
          { pattern: /(\w+):\s*([a-zA-Z_][a-zA-Z0-9_-]*')(?=\s*[,}])/g, replacement: "$1: '$2" },
          // Fix filename: logs/error.log' -> filename: 'logs/error.log'
          { pattern: /(\w+):\s*([a-zA-Z_][a-zA-Z0-9_\/.-]*')(?=\s*[,}])/g, replacement: "$1: '$2" },
          // Fix process.env.NODE_ENV !== production' -> process.env.NODE_ENV !== 'production'
          { pattern: /(!==\s*)([a-zA-Z_][a-zA-Z0-9_-]*')(?=\s*[)])/g, replacement: "$1'$2" },
          // Fix level === error' -> level === 'error'
          { pattern: /(===?\s*)([a-zA-Z_][a-zA-Z0-9_-]*')(?=\s*[)])/g, replacement: "$1'$2" },
          // Fix path.join(__dirname, logs' -> path.join(__dirname, 'logs'
          { pattern: /(path\.join\([^)]*,\s*)([a-zA-Z_][a-zA-Z0-9_\/.-]*')(?=\s*[)])/g, replacement: "$1'$2" },
          // Fix fs.readFileSync(configPath, utf8' -> fs.readFileSync(configPath, 'utf8'
          { pattern: /(fs\.readFileSync\([^,]*,\s*)([a-zA-Z_][a-zA-Z0-9_-]*')(?=\s*[)])/g, replacement: "$1'$2" },
          // Fix level = info' -> level = 'info'
          { pattern: /(=\s*)([a-zA-Z_][a-zA-Z0-9_-]*')(?=\s*[,)])/g, replacement: "$1'$2" }
        ];
        
        for (const { pattern, replacement } of stringPatterns) {
          const newContent = fixedContent.replace(pattern, replacement);
          if (newContent !== fixedContent) {
            fixedContent = newContent;
            hasChanges = true;
          }
        }
        
        // Remove shebang lines
        if (fixedContent.includes('#!/usr/bin/env node')) {
          fixedContent = fixedContent.replace(/^#!\/usr\/bin\/env node\n?/g, '');
          fixedContent = fixedContent.replace(/\n#!\/usr\/bin\/env node\n/g, '\n');
          hasChanges = true;
        }
        
        if (hasChanges) {
          await fs.writeFile(file, fixedContent);
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
    
    console.log(`\n🎉 Fixed ${fixedCount} files with syntax errors`);
    if (errorCount > 0) {
      console.log(`⚠️  ${errorCount} files had processing errors`);
    }
    
  } catch (error) {
    console.error('❌ Error during syntax fix:', error);
  }
}

// Run if called directly
if (require.main === module) {
  fixAllSyntaxErrors().catch(console.error);
}

module.exports = { fixAllSyntaxErrors }; 