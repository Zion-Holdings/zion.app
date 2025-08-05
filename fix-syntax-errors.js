const fs = require('fs');
const path = require('path');

// Function to fix CSS class syntax errors
function fixCssClasses(content) {
  // Fix common CSS class syntax errors
  let fixed = content;
  
  // Fix class names with colons instead of spaces
  fixed = fixed.replace(/text-lg:font-semibold/g, 'text-lg font-semibold');
  fixed = fixed.replace(/text-xl:font-semibold/g, 'text-xl font-semibold');
  fixed = fixed.replace(/text-2xl:font-bold/g, 'text-2xl font-bold');
  fixed = fixed.replace(/text-3xl:font-bold/g, 'text-3xl font-bold');
  fixed = fixed.replace(/text-4xl:md:text-6xl:/g, 'text-4xl md:text-6xl');
  fixed = fixed.replace(/text-lg:font-medium/g, 'text-lg font-medium');
  fixed = fixed.replace(/text-sm:font-medium/g, 'text-sm font-medium');
  fixed = fixed.replace(/rounded-lg:shadow-md/g, 'rounded-lg shadow-md');
  fixed = fixed.replace(/rounded-md:hover:bg-blue-700/g, 'rounded-md hover:bg-blue-700');
  fixed = fixed.replace(/rounded-md:text-sm:font-medium/g, 'rounded-md text-sm font-medium');
  fixed = fixed.replace(/rounded-lg:text-lg:font-semibold/g, 'rounded-lg text-lg font-semibold');
  fixed = fixed.replace(/max-w-7xl:mx-auto/g, 'max-w-7xl mx-auto');
  fixed = fixed.replace(/max-w-3xl:mx-auto/g, 'max-w-3xl mx-auto');
  fixed = fixed.replace(/text-xl:text-gray-300/g, 'text-xl text-gray-300');
  fixed = fixed.replace(/backdrop-blur-md:border-b/g, 'backdrop-blur-md border-b');
  fixed = fixed.replace(/px-4 sm:px-6" lg:px-8""/g, 'px-4 sm:px-6 lg:px-8');
  fixed = fixed.replace(/div: className=/g, 'div className=');
  fixed = fixed.replace(/div: className=/g, 'div className=');
  fixed = fixed.replace(/Join: Zion/g, 'Join Zion');
  fixed = fixed.replace(/Explore: Marketplace/g, 'Explore Marketplace');
  fixed = fixed.replace(/Learn about our company, mission, and values/g, 'Learn about our company, mission, and values');
  
  // Fix missing quotes and syntax errors
  fixed = fixed.replace(/px-4 sm:px-6" lg:px-8"/g, 'px-4 sm:px-6 lg:px-8');
  fixed = fixed.replace(/sm: flex-row/g, 'sm:flex-row');
  fixed = fixed.replace(/text-gray-300 hover:text-white  px-3 py-4/g, 'text-gray-300 hover:text-white px-3 py-4');
  fixed = fixed.replace(/text-gray-300 hover:text-white  px-8 py-4/g, 'text-gray-300 hover:text-white px-8 py-4');
  fixed = fixed.replace(/border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white  px-8 py-4/g, 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4');
  fixed = fixed.replace(/text-gray-400 hover:text-white  transition-colors/g, 'text-gray-400 hover:text-white transition-colors');
  fixed = fixed.replace(/max-w-7xl:mx-auto px-4 sm:px-6" lg:px-8"  py-32/g, 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32');
  fixed = fixed.replace(/grid grid-cols-1 md:grid-cols-4  gap-8/g, 'grid grid-cols-1 md:grid-cols-4 gap-8');
  fixed = fixed.replace(/grid grid-cols-1 md:grid-cols-3 gap-8/g, 'grid grid-cols-1 md:grid-cols-3 gap-8');
  
  // Fix missing commas and syntax
  fixed = fixed.replace(/},/g, '}');
  fixed = fixed.replace(/},/g, '}');
  fixed = fixed.replace(/},/g, '}');
  
  return fixed;
}

// Function to fix JSX syntax errors
function fixJsxSyntax(content) {
  let fixed = content;
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div: className=/g, '<div className=');
  fixed = fixed.replace(/<div: className=/g, '<div className=');
  
  // Fix missing quotes in attributes
  fixed = fixed.replace(/content="([^"]*):([^"]*)"/g, 'content="$1 $2"');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/\)\s*$/gm, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = fixCssClasses(content);
    fixed = fixJsxSyntax(fixed);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process TypeScript files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

// Start processing from the pages directory
const pagesDir = path.join(__dirname, 'pages');
if (fs.existsSync(pagesDir)) {
  console.log('Starting syntax fixes...');
  processDirectory(pagesDir);
  console.log('Syntax fixes completed!');
} else {
  console.error('Pages directory not found');
} 