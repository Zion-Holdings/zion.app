const fs = require('fs');
const path = require('path');

// Function to convert product name to valid JavaScript identifier
function createValidComponentName(productName) {
  return productName
    .replace(/[-_\s]+/g, '_') // Replace hyphens, underscores, and spaces with underscores
    .replace(/^_+|_+$/g, '') // Remove leading/trailing underscores
    .replace(/^[0-9]/, '_$&') // Add underscore prefix if starts with number
    + 'Page';
}

// Function to fix a single file
function fixComponentName(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the product name from the filename
    const fileName = path.basename(filePath, '.tsx');
    const validComponentName = createValidComponentName(fileName);
    
    // Replace all possible invalid component name patterns
    let fixedContent = content;
    
    // Fix const declarations
    fixedContent = fixedContent.replace(
      /const\s+[A-Za-z0-9_-]+Page:\s*NextPage\s*=/g,
      `const ${validComponentName}: NextPage =`
    );
    
    // Fix export statements
    fixedContent = fixedContent.replace(
      /export\s+default\s+[A-Za-z0-9_-]+Page/g,
      `export default ${validComponentName}`
    );
    
    // Also fix any remaining invalid patterns
    fixedContent = fixedContent.replace(
      /const\s+[A-Za-z0-9_-]+:\s*NextPage\s*=/g,
      `const ${validComponentName}: NextPage =`
    );
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to fix all product pages
function fixAllProductPages() {
  const productsDir = path.join(__dirname, 'pages', 'products');
  
  if (!fs.existsSync(productsDir)) {
    console.log('❌ Products directory not found');
    return;
  }
  
  const files = fs.readdirSync(productsDir)
    .filter(file => file.endsWith('.tsx'));
  
  console.log(`🔧 Found ${files.length} files to check...`);
  
  let fixedCount = 0;
  for (const file of files) {
    const filePath = path.join(productsDir, file);
    if (fixComponentName(filePath)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed ${fixedCount} out of ${files.length} files`);
}

// Run the fix
fixAllProductPages(); 