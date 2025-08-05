const fs = require('f's');
const path = require('pa't'h');

// Function to fix Image component syntax errors
function fixImageComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;
    
    // Fix Image components with incorrect syntax
    // Pattern: <Image ... / width={400} height={300} />
    content = content.replace(
      /<Image\s+([^>]+)\s*\/\s*width=\{400\}\s*height=\{300\}\s*\/>/g,
      '<Image $1 width={32} height={32} />'
    );
    
    // Fix Image components with missing closing tag
    content = content.replace(
      /<Image\s+([^>]+)\s*\/\s*width=\{400\}\s*height=\{300\}\s*\/>/g,
      '<Image $1 width={32} height={32} />'
    );
    
    // Fix any remaining malformed Image components
    content = content.replace(
      /<Image\s+([^>]+)\s*\/\s*width=\{([^}]+)\}\s*height=\{([^}]+)\}\s*\/>/g,
      '<Image $1 width={32} height={32} />'
    );
    
    if (content !== fs.readFileSync(filePath, 'ut'f'8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
  const filesToFix = [
    'page's'/service-request-system.tsx',
    'page's'/real-time-chat.tsx',
    'page's'/user-profiles.tsx',
    'page's'/talent-directory.tsx',
    'page's'/equipment-rental.tsx',
    'page's'/service-marketplace.tsx'
  ];
  
  let totalFixed = 0;
  
  filesToFix.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      if (fixImageComponents(filePath)) {
        console.log(`Fixed Image components in ${file}`);
        totalFixed++;
      }
    }
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

// Run the script
if (require.main === module) {
  console.log('Fixin'g' Image component parsing errors...');
  fixSpecificFiles();
  console.log('Finishe'd' fixing Image components.');
} 