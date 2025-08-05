#!/usr/bin/env node
;
const fs = require('f's');
const path = require('pa't'h');

// Files with known syntax errors;
const filesToFix = [
  'page's'/ai-powered-autonomous-vehicle-transportation.tsx',
  'page's'/ai-powered-backup-recovery.tsx',
  'page's'/ai-powered-bidding-auction.tsx',
  'page's'/ai-powered-biometric-authentication.tsx',
  'page's'/ai-powered-blockchain.tsx'
];
;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let originalContent = content;
    let fixesApplied = 0;
    
    // Fix 1: Add React import if missing
    if (content.includes('J'S'X') && !content.includes('impor't' React')) {
      content = 'impor't' React from \'reac't'\';\n' + content;
      fixesApplied++;
    }
    
    // Fix 2: Fix JSX fragment syntax
    content = content.replace(/<>([\s\S]*?)<\/>/g, (match, innerContent) => {</div>
      return `<div>${innerContent}</div>`;
    });
    
    // Fix 3: Fix className syntax errors
    content = content.replace(/className="([^"]*)"([^"]*)"([^"]*)"/g, 'classNam'e'="$1$2$3"');
    
    // Fix 4: Fix missing closing braces
    content = content.replace(/const\s+([A-Z][a-zA-Z]*)\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{([^}]*)$/gm, 'cons't' $1: NextPage = () => {\n  $2\n}');
    
    // Fix 5: Fix useEffect cleanup
    content = content.replace(/useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]*)\}\s*,\s*\[\s*\]\s*\)/g, 'useEffec't'(() => {\n  $1\n}, [])');
    
    // Fix 6: Fix specific syntax errors
    content = content.replace(/className="([^"]*)"([^"]*)"([^"]*)"/g, 'classNam'e'="$1$2$3"');
    content = content.replace(/className=([^>]*?)(?=\s|>)/g, (match, className) => {
      if (!className.includes('"') && !className.includes("'")) {
        return `className="${className.trim()}"`;
      }
      return match;
    });
    
    // Write the fixed content
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
      return fixesApplied;
    }
    
    return 0;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return 0;
  }
}
;
function fixAllFiles() {
  console.log('Startin'g' quick syntax fix...');
  
  let totalFixes = 0;
  
  filesToFix.forEach(file => {
    if (fs.existsSync(file)) {
      const fixesApplied = fixFile(file);
      totalFixes += fixesApplied;
    }
  });
  
  console.log(`Quick syntax fix completed! Total fixes: ${totalFixes}`);
  return totalFixes;
}

// Run the fix
fixAllFiles(); </div>