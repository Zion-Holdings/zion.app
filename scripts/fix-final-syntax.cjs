#!/usr/bin/env node

/**
 * Final syntax fix for import placement issues
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PROJECT_ROOT = process.cwd();

// Files that need specific fixes based on build output
const filesToFix = [
  'src/components/profile/TalentOnboardingForm.tsx',
  'src/components/talent/TalentGrid.tsx', 
  'src/components/ui/quick-actions.tsx',
  'src/context/AnalyticsContext.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(PROJECT_ROOT, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    // Pattern 1: import { ... import { logXXX } from '@/utils/productionLogger';
    const pattern1 = /import\s*{\s*\n\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]@\/utils\/productionLogger['"];\s*\n\s*/g;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, (match, logImports) => {
        return `import { ${logImports.trim()} } from '@/utils/productionLogger';\nimport {\n  `;
      });
      changed = true;
    }

    // Pattern 2: export type/interface ... import { logXXX } from '@/utils/productionLogger';
    const pattern2 = /(export\s+(?:type|interface)\s+\w+\s*=?\s*)\n\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]@\/utils\/productionLogger['"];\s*\n\s*/g;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, (match, exportDecl, logImports) => {
        return `import { ${logImports.trim()} } from '@/utils/productionLogger';\n\n${exportDecl}\n  `;
      });
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Fixing final syntax issues...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log('🎉 Final syntax fixes complete!'); 