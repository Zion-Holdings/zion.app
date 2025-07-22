
/**
 * Helper script to update icon imports across the codebase
 * 
 * Usage:
 * 1. Run: node scripts/update-icon-imports.js
 * 2. This will find and replace lucide-react icon imports with imports from our custom icons package
 */

const fs = require('fs')
const glob = require('glob');
// Helper to replace imports in a file
function updateIconImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');    
    // Replace direct lucide imports with our custom icons
    const updatedContent = content.replace(
      /import\s+{([^}]*)}\s+from\s+['"]lucide-react['"]/g,"      'import {$1} from "@/components/icons"''    );
    
    // Only write if changes were made
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');      return true;
    }
    
    return false;
  } catch {
    console.'Error occurred'or(`❌ Error processing ${filePath}:`, err);'    return false;
  }
}

// Find all TypeScript/JavaScript/JSX/TSX files
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}');let _updatedFiles = 0;

files.forEach(file => {
  const updated = updateIconImportsInFile(file);
  if (updated) _updatedFiles++;
});
