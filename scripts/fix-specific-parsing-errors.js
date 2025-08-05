const fs = require('fs');
const path = require('path');

// Function to fix specific parsing errors
function fixSpecificParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
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

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
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
  const servicesDir = path.join(__dirname, '..', 'pages', 'services');
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
    'pages/products.tsx',
    'pages/profile.tsx',
    'pages/quantum-computing.tsx',
    'pages/search-results.tsx',
    'pages/security.tsx',
    'pages/service-description-generator.tsx',
    'pages/service-details.tsx',
    'pages/services.tsx',
    'pages/signup.tsx',
    'pages/sitemap.tsx',
    'pages/support.tsx',
    'pages/talents.tsx',
    'pages/terms-of-service.tsx',
    'pages/terms.tsx',
    'pages/virtual-reality.tsx',
    'pages/spatial-computing.tsx',
    'pages/quote-requests.tsx',
    'pages/seo-optimization.tsx',
    'pages/smart-notifications.tsx',
    'pages/workflow-designer.tsx',
    'pages/project-management.tsx',
    'pages/real-time-chat.tsx',
    'pages/review-system.tsx',
    'pages/service-marketplace.tsx',
    'pages/talent/[id].tsx',
    'pages/talent/index.tsx',
    'pages/talent-directory.tsx',
    'pages/user-profiles.tsx',
    'pages/referral-affiliate.tsx',
    'pages/service-categories.tsx',
    'pages/service-request-system.tsx',
    'pages/skill-verification.tsx',
    'pages/talent/create.tsx',
    'pages/talent-profile.tsx',
    'pages/warranty-protection.tsx',
    'pages/webhook-management.tsx'
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