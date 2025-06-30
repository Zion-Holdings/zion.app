#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing malformed import statements...');

// Function to fix malformed imports in a file
function fixImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match malformed imports where lucide-react import is inside another import block
    const malformedImportPattern = /import\s*\{\s*\n\s*import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];\s*\n\s*([^}]*)\s*\}\s*from\s*['"]([^'"]+)['"];?/g;
    
    let fixed = content;
    let hasChanges = false;
    
    // Fix the malformed patterns
    fixed = fixed.replace(malformedImportPattern, (match, lucideIcons, otherImports, modulePath) => {
      hasChanges = true;
      
      // Clean up the lucide icons and other imports
      const cleanLucideIcons = lucideIcons.trim().replace(/,\s*$/, '');
      const cleanOtherImports = otherImports.trim().replace(/,\s*$/, '');
      
      // Create proper separate imports
      return `import { ${cleanLucideIcons} } from 'lucide-react';\nimport {\n  ${cleanOtherImports}\n} from "${modulePath}";`;
    });
    
    // Handle simpler cases where import appears at start of import block
    const simplePattern = /import\s*\{\s*import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];\s*([^}]*)\s*\}/g;
    fixed = fixed.replace(simplePattern, (match, lucideIcons, otherImports) => {
      hasChanges = true;
      const cleanLucideIcons = lucideIcons.trim().replace(/,\s*$/, '');
      const cleanOtherImports = otherImports.trim().replace(/,\s*$/, '');
      
      return `import { ${cleanLucideIcons} } from 'lucide-react';\nimport {\n  ${cleanOtherImports}`;
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JSX files with malformed imports
const cmd = `find ./src ./pages -name "*.tsx" -o -name "*.ts" | xargs grep -l "import.*import.*lucide-react" 2>/dev/null || true`;

let files;
try {
  const result = execSync(cmd, { encoding: 'utf8' }).trim();
  files = result ? result.split('\n').filter(f => f) : [];
} catch (error) {
  console.log('No files with malformed imports found or search failed');
  files = [];
}

if (files.length === 0) {
  // If grep didn't find files, check the specific files we know have issues
  const knownFiles = [
    'src/components/DynamicListingPage.tsx',
    'src/components/FaqSection.tsx', 
    'src/components/creator/CreatorSidebar.tsx',
    'src/components/disputes/RaiseDisputeButton.tsx',
    'src/components/enterprise/admin/RoleManagement.tsx'
  ];
  
  files = knownFiles.filter(file => fs.existsSync(file));
}

console.log(`📁 Found ${files.length} files with potential malformed imports`);

let totalFixed = 0;

files.forEach((filePath, index) => {
  console.log(`\n[${index + 1}/${files.length}] Processing: ${filePath}`);
  
  if (fixImportsInFile(filePath)) {
    totalFixed++;
  }
});

console.log(`\n🎉 Fixed malformed imports in ${totalFixed} files!`);

if (totalFixed > 0) {
  console.log('\n📝 Summary of fixes:');
  console.log('- Moved lucide-react imports outside of other import blocks');
  console.log('- Corrected import statement syntax');
  console.log('- Maintained proper import formatting');
}