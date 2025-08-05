const fs = require('fs');
const path = require('path');

// Function to fix final parsing errors
function fixFinalParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix "Unexpected token" errors by adding missing closing braces
    content = content.replace(/(\w+):\s*\{([^}]*)$/gm, '$1: {$2}');
    
    // Fix missing closing parentheses
    content = content.replace(/(\w+)\(([^)]*)$/gm, '$1($2)');
    
    // Fix missing closing brackets
    content = content.replace(/(\w+)\[([^\]]*)$/gm, '$1[$2]');
    
    // Fix missing semicolons
    content = content.replace(/(\w+):\s*([^;]*)$/gm, '$1: $2;');
    
    // Fix missing commas
    content = content.replace(/(\w+):\s*([^,}]*)$/gm, '$1: $2,');
    
    // Fix missing colons
    content = content.replace(/(\w+)\s+([^:]*)$/gm, '$1: $2');
    
    // Fix "Property or signature expected" errors
    content = content.replace(/^\s*(\w+):\s*([^;]*)$/gm, '$1: $2;');
    
    // Fix "Expression expected" errors
    content = content.replace(/(\w+):\s*([^,}]*)$/gm, '$1: $2');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed final parsing errors in ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix all remaining product files
function fixRemainingProductFiles() {
  const productsDir = path.join(__dirname, '..', 'pages', 'products');
  let totalFixed = 0;

  if (fs.existsSync(productsDir)) {
    const files = fs.readdirSync(productsDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') && file.includes('trend-solution')) {
        const filePath = path.join(productsDir, file);
        if (fixFinalParsingErrors(filePath)) {
          totalFixed++;
        }
      }
    });
  }

  return totalFixed;
}

// Function to fix all remaining service files
function fixRemainingServiceFiles() {
  const servicesDir = path.join(__dirname, '..', 'pages', 'services');
  let totalFixed = 0;

  if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx')) {
        const filePath = path.join(servicesDir, file);
        if (fixFinalParsingErrors(filePath)) {
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
    'pages/project-management.tsx',
    'pages/quantum-computing.tsx',
    'pages/quote-requests.tsx',
    'pages/real-time-chat.tsx',
    'pages/referral-affiliate.tsx',
    'pages/review-system.tsx',
    'pages/search-results.tsx',
    'pages/security.tsx',
    'pages/seo-optimization.tsx',
    'pages/service-categories.tsx',
    'pages/service-description-generator.tsx',
    'pages/service-details.tsx',
    'pages/service-marketplace.tsx',
    'pages/service-request-system.tsx',
    'pages/services.tsx',
    'pages/signup.tsx',
    'pages/sitemap.tsx',
    'pages/skill-verification.tsx',
    'pages/smart-notifications.tsx',
    'pages/spatial-computing.tsx',
    'pages/status.tsx',
    'pages/support.tsx',
    'pages/talent/[id].tsx',
    'pages/talent/create.tsx',
    'pages/talent/index.tsx',
    'pages/talent-directory.tsx',
    'pages/talent-profile.tsx',
    'pages/talents.tsx',
    'pages/terms-of-service.tsx',
    'pages/terms.tsx',
    'pages/user-profiles.tsx',
    'pages/virtual-reality.tsx',
    'pages/warranty-protection.tsx',
    'pages/webhook-management.tsx',
    'pages/workflow-designer.tsx'
  ];

  let totalFixed = 0;

  specificFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      if (fixFinalParsingErrors(filePath)) {
        totalFixed++;
      }
    }
  });

  return totalFixed;
}

// Process all files
function processFiles() {
  let totalFixed = 0;

  // Fix remaining product files
  const productFixed = fixRemainingProductFiles();
  totalFixed += productFixed;

  // Fix remaining service files
  const serviceFixed = fixRemainingServiceFiles();
  totalFixed += serviceFixed;

  // Fix specific files
  const specificFixed = fixSpecificFiles();
  totalFixed += specificFixed;

  console.log(`\n🎉 Fixed final parsing errors in ${totalFixed} files`);
}

processFiles(); 