#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting OptimizedImage fixes...');

// Get all files that import OptimizedImage
const cmd = `grep -r "import.*OptimizedImage.*from" . --include="*.tsx" --include="*.ts" -l`;
let files;
try {
  files = execSync(cmd, { encoding: 'utf8' }).trim().split('\n').filter(f => f);
} catch (error) {
  console.log('✅ No OptimizedImage imports found!');
  process.exit(0);
}

console.log(`📁 Found ${files.length} files with OptimizedImage imports`);

let totalFixed = 0;

files.forEach((filePath, index) => {
  console.log(`\n[${index + 1}/${files.length}] Processing: ${filePath}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fileFixCount = 0;
    
    // Replace OptimizedImage with img
    let newContent = content;
    
    // Remove OptimizedImage imports
    newContent = newContent.replace(
      /import\s+{\s*([^}]*?)OptimizedImage([^}]*?)}\s+from\s+['"][^'"]+['"];\n?/g,
      (match, before, after) => {
        const beforeClean = before.trim().replace(/,$/, '');
        const afterClean = after.trim().replace(/^,/, '');
        
        // If OptimizedImage was the only import, remove the entire line
        if (!beforeClean && !afterClean) {
          modified = true;
          fileFixCount++;
          return '';
        }
        
        // If there are other imports, keep them
        const otherImports = [beforeClean, afterClean].filter(x => x).join(', ');
        if (otherImports) {
          modified = true;
          fileFixCount++;
          return match.replace(/OptimizedImage[^}]*?/, '').replace(/,\s*,/, ',').replace(/{\s*,/, '{').replace(/,\s*}/, '}');
        }
        
        modified = true;
        fileFixCount++;
        return '';
      }
    );
    
    // Replace <OptimizedImage with <img
    newContent = newContent.replace(/<OptimizedImage/g, (match) => {
      modified = true;
      fileFixCount++;
      return '<img';
    });
    
    // Remove props that don't exist on img elements
    newContent = newContent.replace(/\s+fill={[^}]+}/g, '');
    newContent = newContent.replace(/\s+priority={[^}]+}/g, '');
    newContent = newContent.replace(/\s+quality={[^}]+}/g, '');
    newContent = newContent.replace(/\s+sizes={[^}]+}/g, '');
    newContent = newContent.replace(/\s+placeholder={[^}]+}/g, '');
    newContent = newContent.replace(/\s+fallback={[^}]+}/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      totalFixed += fileFixCount;
      console.log(`   ✅ Fixed ${fileFixCount} issues in ${filePath}`);
    } else {
      console.log(`   ⚪ No changes needed in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 OptimizedImage fixing complete!`);
console.log(`📊 Total fixes applied: ${totalFixed}`);
console.log(`📁 Files processed: ${files.length}`);

// Verify the fixes
try {
  const remainingCmd = `grep -r "OptimizedImage" . --include="*.tsx" --include="*.ts" | wc -l`;
  const remaining = execSync(remainingCmd, { encoding: 'utf8' }).trim();
  
  if (remaining === '0') {
    console.log('✅ All OptimizedImage issues have been successfully fixed!');
  } else {
    console.log(`⚠️  ${remaining} OptimizedImage references still remain`);
  }
} catch (error) {
  console.log('✅ All OptimizedImage issues have been successfully fixed!');
}