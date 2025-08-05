const fs = require('fs');
const path = require('path');

// Function to fix parsing errors in product files
function fixProductParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix "')' expected" errors by adding missing closing braces
    // Look for lines that end with incomplete object literals
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      // Fix lines that end with incomplete object literals
      if (line.match(/(\w+):\s*\{([^}]*)$/)) {
        return line.replace(/(\w+):\s*\{([^}]*)$/, '$1: {$2}');
      }
      return line;
    });

    const newContent = fixedLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed parsing errors in ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix all product files with parsing errors
function fixAllProductFiles() {
  const productsDir = path.join(__dirname, '..', 'pages', 'products');
  let totalFixed = 0;

  if (fs.existsSync(productsDir)) {
    const files = fs.readdirSync(productsDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') && file.includes('trend-solution')) {
        const filePath = path.join(productsDir, file);
        if (fixProductParsingErrors(filePath)) {
          totalFixed++;
        }
      }
    });
  }

  return totalFixed;
}

// Function to fix all service files with parsing errors
function fixAllServiceFiles() {
  const servicesDir = path.join(__dirname, '..', 'pages', 'services');
  let totalFixed = 0;

  if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx')) {
        const filePath = path.join(servicesDir, file);
        if (fixProductParsingErrors(filePath)) {
          totalFixed++;
        }
      }
    });
  }

  return totalFixed;
}

// Process all files
function processFiles() {
  let totalFixed = 0;

  // Fix product files
  const productFixed = fixAllProductFiles();
  totalFixed += productFixed;

  // Fix service files
  const serviceFixed = fixAllServiceFiles();
  totalFixed += serviceFixed;

  console.log(`\n🎉 Fixed parsing errors in ${totalFixed} files`);
}

processFiles(); 