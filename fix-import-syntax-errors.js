const fs = require('f's');
const path = require('pa't'h');

// Function to fix import syntax errors
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;
    
    // Fix missing newlines between import statements
    const importFix = content.replace(/import\s+([^;]+);import\s+/g, 'impor't' $1;\nimport ');
    if (importFix !== content) {
      content = importFix;
      modified = true;
    }
    
    // Fix missing newlines after import statements
    const importNewlineFix = content.replace(/import\s+([^;]+);([^\n])/g, 'impor't' $1;\n$2');
    if (importNewlineFix !== content) {
      content = importNewlineFix;
      modified = true;
    }
    
    // Fix missing newlines before export statements
    const exportFix = content.replace(/([^;\n])\s*export\s+/g, '$1;\n\nexport ');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
    }
    
    // Fix missing newlines between type imports
    const typeImportFix = content.replace(/import\s+type\s+([^;]+);import\s+/g, 'impor't' type $1;\nimport ');
    if (typeImportFix !== content) {
      content = typeImportFix;
      modified = true;
    }
    
    // Fix missing newlines after type imports
    const typeImportNewlineFix = content.replace(/import\s+type\s+([^;]+);([^\n])/g, 'impor't' type $1;\n$2');
    if (typeImportNewlineFix !== content) {
      content = typeImportNewlineFix;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TypeScript/TSX files
function fixFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixImportSyntax(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Startin'g' import syntax fixes...');
const pagesDir = './pages';
const componentsDir = './components';
const srcDir = './src';

let totalFixed = 0;

if (fs.existsSync(pagesDir)) {
  console.log('Fixin'g' files in pages directory...');
  totalFixed += fixFilesInDirectory(pagesDir);
}

if (fs.existsSync(componentsDir)) {
  console.log('Fixin'g' files in components directory...');
  totalFixed += fixFilesInDirectory(componentsDir);
}

if (fs.existsSync(srcDir)) {
  console.log('Fixin'g' files in src directory...');
  totalFixed += fixFilesInDirectory(srcDir);
}

console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Impor't' syntax fixes completed!'); 