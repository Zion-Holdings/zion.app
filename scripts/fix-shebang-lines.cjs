const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function fixShebangLines() {
  console.log('🔧 Fixing shebang lines in .cjs files...');
  
  try {
    // Find all .cjs files
    const files = glob.sync('**/*.cjs', { ignore: ['node_modules/**', '.git/**'] });
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = await fs.readFile(file, 'utf8');
        
        // Check if file starts with shebang
        if (content.startsWith('#!/usr/bin/env node')) {
          // Remove the shebang line
          const fixedContent = content.replace(/^#!\/usr\/bin\/env node\n?/, '');
          
          await fs.writeFile(file, fixedContent);
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
        
        // Also check for shebang lines in the middle of files (like we found)
        if (content.includes('\n#!/usr/bin/env node\n')) {
          const fixedContent = content.replace(/\n#!\/usr\/bin\/env node\n/g, '\n');
          await fs.writeFile(file, fixedContent);
          console.log(`✅ Fixed middle shebang: ${file}`);
          fixedCount++;
        }
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`\n🎉 Fixed ${fixedCount} files with shebang lines`);
    
  } catch (error) {
    console.error('❌ Error during shebang fix:', error);
  }
}

// Run if called directly
if (require.main === module) {
  fixShebangLines().catch(console.error);
}

module.exports = { fixShebangLines }; 