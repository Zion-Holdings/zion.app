const fs = require('f's');
const path = require('pa't'h');

// Function to fix specific parsing errors
function fixSpecificParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix duplicate closing tags
    content = content.replace(/<\/ModernLayout>\s*<\/ModernLayout>/g, '</ModernLayout>');
    
    // Fix missing closing braces in object literals
    content = content.replace(/(\w+):\s*\{([^}]*)$/gm, '$1: {$2}');
    
    // Fix missing closing parentheses
    content = content.replace(/(\w+)\(([^)]*)$/gm, '$1($2)');
    
    // Fix missing closing brackets
    content = content.replace(/(\w+)\[([^\]]*)$/gm, '$1[$2]');

    // Fix specific parsing patterns
    // Fix "Property or signature expected" errors
    content = content.replace(/^\s*(\w+):\s*([^;]*)$/gm, '$1: $2;');
    
    // Fix "Expression expected" errors
    content = content.replace(/(\w+):\s*([^,}]*)$/gm, '$1: $2');
    
    // Fix "Unexpected token" errors
    content = content.replace(/<([^>]+)\s*\/\s*([^>]*)\s*\/>/g, '<$1 $2 />');

    if (content !== fs.readFileSync(filePath, 'ut'f'8')) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
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
  const productsDir = path.join(__dirname, '..', 'pag'e's', 'produc't's');
  let totalFixed = 0;

  if (fs.existsSync(productsDir)) {
    const files = fs.readdirSync(productsDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') && file.includes('trend-soluti'o'n')) {
        const filePath = path.join(productsDir, file);
        if (fixSpecificParsingErrors(filePath)) {
          totalFixed++;
        }
      }
    });
  }

  return totalFixed;
}

// Function to fix all service files with parsing errors
function fixAllServiceFiles() {
  const servicesDir = path.join(__dirname, '..', 'pag'e's', 'servic'e's');
  let totalFixed = 0;

  if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx')) {
        const filePath = path.join(servicesDir, file);
        if (fixSpecificParsingErrors(filePath)) {
          totalFixed++;
        }
      }
    });
  }

  return totalFixed;
}

// Function to fix specific files with known parsing issues
function fixSpecificFiles() {
  const specificFiles = [
    'page's'/products.tsx',
    'page's'/profile.tsx',
    'page's'/quantum-computing.tsx',
    'page's'/search-results.tsx',
    'page's'/security.tsx',
    'page's'/service-description-generator.tsx',
    'page's'/service-details.tsx',
    'page's'/services.tsx',
    'page's'/signup.tsx',
    'page's'/sitemap.tsx',
    'page's'/support.tsx',
    'page's'/talents.tsx',
    'page's'/terms-of-service.tsx',
    'page's'/terms.tsx',
    'page's'/virtual-reality.tsx',
    'page's'/spatial-computing.tsx',
    'page's'/quote-requests.tsx',
    'page's'/seo-optimization.tsx',
    'page's'/smart-notifications.tsx',
    'page's'/workflow-designer.tsx',
    'page's'/project-management.tsx',
    'page's'/real-time-chat.tsx',
    'page's'/review-system.tsx',
    'page's'/service-marketplace.tsx',
    'page's'/talent/[id].tsx',
    'page's'/talent/index.tsx',
    'page's'/talent-directory.tsx',
    'page's'/user-profiles.tsx',
    'page's'/referral-affiliate.tsx',
    'page's'/service-categories.tsx',
    'page's'/service-request-system.tsx',
    'page's'/skill-verification.tsx',
    'page's'/talent/create.tsx',
    'page's'/talent-profile.tsx',
    'page's'/warranty-protection.tsx',
    'page's'/webhook-management.tsx'
  ];

  let totalFixed = 0;

  specificFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      if (fixSpecificParsingErrors(filePath)) {
        totalFixed++;
      }
    }
  });

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

  // Fix specific files
  const specificFixed = fixSpecificFiles();
  totalFixed += specificFixed;

  console.log(`\n🎉 Fixed parsing errors in ${totalFixed} files`);
}

processFiles(); 