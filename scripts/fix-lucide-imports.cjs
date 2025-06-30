#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting lucide-react import fixes...');

// Get all files with problematic imports
const cmd = `grep -r "from 'lucide-react/dist/esm/icons/" . --include="*.tsx" --include="*.ts" -l`;
let files;
try {
  files = execSync(cmd, { encoding: 'utf8' }).trim().split('\n').filter(f => f);
} catch (error) {
  console.log('✅ No lucide-react import issues found!');
  process.exit(0);
}

console.log(`📁 Found ${files.length} files with lucide-react import issues`);

let totalFixed = 0;

files.forEach((filePath, index) => {
  console.log(`\n[${index + 1}/${files.length}] Processing: ${filePath}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let modified = false;
    let fileFixCount = 0;
    
    // Group imports by finding all consecutive lucide-react imports
    const newLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Check if this line is a lucide-react import with the problematic pattern
      const match = line.match(/^import\s+{\s*([^}]+)\s*}\s+from\s+'lucide-react\/dist\/esm\/icons\/([^']+)';?$/);
      
      if (match) {
        // Found a problematic import, collect all consecutive ones
        const imports = [];
        let j = i;
        
        while (j < lines.length) {
          const currentLine = lines[j];
          const currentMatch = currentLine.match(/^import\s+{\s*([^}]+)\s*}\s+from\s+'lucide-react\/dist\/esm\/icons\/([^']+)';?$/);
          
          if (currentMatch) {
            const iconName = currentMatch[1].trim();
            imports.push(iconName);
            fileFixCount++;
            j++;
          } else {
            break;
          }
        }
        
        // Create a single consolidated import
        if (imports.length > 0) {
          const consolidatedImport = `import { ${imports.join(', ')} } from 'lucide-react'`;
          newLines.push(consolidatedImport);
          modified = true;
          console.log(`   ✓ Consolidated ${imports.length} imports: ${imports.join(', ')}`);
        }
        
        i = j; // Skip past all the processed imports
      } else {
        newLines.push(line);
        i++;
      }
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent);
      totalFixed += fileFixCount;
      console.log(`   ✅ Fixed ${fileFixCount} imports in ${filePath}`);
    } else {
      console.log(`   ⚪ No changes needed in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Import fixing complete!`);
console.log(`📊 Total imports fixed: ${totalFixed}`);
console.log(`📁 Files processed: ${files.length}`);

// Verify the fixes
try {
  const remainingCmd = `grep -r "from 'lucide-react/dist/esm/icons/" . --include="*.tsx" --include="*.ts" | wc -l`;
  const remaining = execSync(remainingCmd, { encoding: 'utf8' }).trim();
  
  if (remaining === '0') {
    console.log('✅ All lucide-react imports have been successfully fixed!');
  } else {
    console.log(`⚠️  ${remaining} imports still need attention`);
  }
} catch (error) {
  console.log('✅ All lucide-react imports have been successfully fixed!');
}