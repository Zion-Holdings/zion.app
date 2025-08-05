const fs = require('fs');
const path = require('path');

// Function to fix final JSX syntax errors
function fixFinalJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX attributes with missing quotes
    const malformedAttributePattern = /className="([^"]*)"\s+gap-8">/g;
    if (malformedAttributePattern.test(content)) {
      content = content.replace(malformedAttributePattern, 'className="$1 gap-8">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in hover
    const malformedHoverPattern = /hover\s+bg-blue-700">/g;
    if (malformedHoverPattern.test(content)) {
      content = content.replace(malformedHoverPattern, 'hover:bg-blue-700">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in button text
    const malformedButtonPattern = /Get:\s+Started/g;
    if (malformedButtonPattern.test(content)) {
      content = content.replace(malformedButtonPattern, 'Get Started');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in grid
    const malformedGridPattern = /className="([^"]*)"\s+grid-cols-1\s+md:grid-cols-3">/g;
    if (malformedGridPattern.test(content)) {
      content = content.replace(malformedGridPattern, 'className="$1 grid-cols-1 md:grid-cols-3">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern = /className="([^"]*)"\s+text-3xl\s+font-bold\s+text-gray-900\s+mb-4">/g;
    if (malformedResponsivePattern.test(content)) {
      content = content.replace(malformedResponsivePattern, 'className="$1 text-3xl font-bold text-gray-900 mb-4">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern2 = /className="([^"]*)"\s+text-xl\s+font-semibold\s+text-gray-900\s+mb-2">/g;
    if (malformedResponsivePattern2.test(content)) {
      content = content.replace(malformedResponsivePattern2, 'className="$1 text-xl font-semibold text-gray-900 mb-2">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern3 = /className="([^"]*)"\s+text-3xl\s+font-bold\s+text-blue-600\s+mb-4">/g;
    if (malformedResponsivePattern3.test(content)) {
      content = content.replace(malformedResponsivePattern3, 'className="$1 text-3xl font-bold text-blue-600 mb-4">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern4 = /className="([^"]*)"\s+w-full\s+bg-blue-600\s+text-white\s+py-4\s+px-4\s+rounded-md\s+hover:bg-blue-700">/g;
    if (malformedResponsivePattern4.test(content)) {
      content = content.replace(malformedResponsivePattern4, 'className="$1 w-full bg-blue-600 text-white py-4 px-4 rounded-md hover:bg-blue-700">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern5 = /className="([^"]*)"\s+mt-12\s+text-center">/g;
    if (malformedResponsivePattern5.test(content)) {
      content = content.replace(malformedResponsivePattern5, 'className="$1 mt-12 text-center">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern6 = /className="([^"]*)"\s+grid\s+grid-cols-1\s+md:grid-cols-3">/g;
    if (malformedResponsivePattern6.test(content)) {
      content = content.replace(malformedResponsivePattern6, 'className="$1 grid grid-cols-1 md:grid-cols-3">');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = path.join(__dirname, 'pages');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFinalJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 