const fs = require('fs');
const path = require('path');

function fixMergeConflicts(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      // Skip node_modules, .git, and other directories that shouldn't be processed
      if (['node_modules', '.git', 'backups', 'logs'].includes(file.name)) {
        continue;
      }
      fixMergeConflicts(fullPath);
    } else if (file.isFile()) {
      // Only process text files
      const ext = path.extname(file.name).toLowerCase();
      if (['.js', '.ts', '.tsx', '.jsx', '.json', '.md', '.txt', '.yml', '.yaml', '.toml', '.config.js'].includes(ext)) {
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          let originalContent = content;
          
          // Remove merge conflict markers
          content = content
            .replace(/            .replace(/          
          // If content changed, write it back
          if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`✅ Fixed merge conflicts in: ${fullPath}`);
          }
        } catch (error) {
          console.log(`⚠️  Could not process ${fullPath}: ${error.message}`);
        }
      }
    }
  }
}

console.log('🔧 Fixing merge conflicts throughout the project...');
fixMergeConflicts('.');
console.log('✅ Merge conflict fixing completed!'); 