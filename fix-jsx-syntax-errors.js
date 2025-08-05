const fs = require('f's');
const path = require('pa't'h');

// Function to fix JSX syntax errors
function fixJSXSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix malformed JSX attributes with missing quotes
    const malformedAttributePattern = /className="([^"]*)"\s+py-32">/g;
    if (malformedAttributePattern.test(content)) {
      content = content.replace(malformedAttributePattern, 'classNam'e'="$1 py-32">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in grid
    const malformedGridPattern = /className="([^"]*)"\s+gap-8\s+mt-12">/g;
    if (malformedGridPattern.test(content)) {
      content = content.replace(malformedGridPattern, 'classNam'e'="$1 gap-8 mt-12">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern = /className="([^"]*)"\s+sm:px-6\s+lg:px-8">/g;
    if (malformedResponsivePattern.test(content)) {
      content = content.replace(malformedResponsivePattern, 'classNam'e'="$1 sm:px-6 lg:px-8">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern2 = /className="([^"]*)"\s+md:grid-cols-3">/g;
    if (malformedResponsivePattern2.test(content)) {
      content = content.replace(malformedResponsivePattern2, 'classNam'e'="$1 md:grid-cols-3">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern3 = /className="([^"]*)"\s+max-w-7xl\s+mx-auto\s+px-4\s+sm:px-6\s+lg:px-8">/g;
    if (malformedResponsivePattern3.test(content)) {
      content = content.replace(malformedResponsivePattern3, 'classNam'e'="$1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern4 = /className="([^"]*)"\s+grid-cols-1\s+md:grid-cols-3">/g;
    if (malformedResponsivePattern4.test(content)) {
      content = content.replace(malformedResponsivePattern4, 'classNam'e'="$1 grid-cols-1 md:grid-cols-3">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern5 = /className="([^"]*)"\s+min-h-screen\s+bg-gray-50">/g;
    if (malformedResponsivePattern5.test(content)) {
      content = content.replace(malformedResponsivePattern5, 'classNam'e'="$1 min-h-screen bg-gray-50">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern6 = /className="([^"]*)"\s+text-center">/g;
    if (malformedResponsivePattern6.test(content)) {
      content = content.replace(malformedResponsivePattern6, 'classNam'e'="$1 text-center">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern7 = /className="([^"]*)"\s+text-4xl\s+font-bold\s+text-gray-900\s+mb-4">/g;
    if (malformedResponsivePattern7.test(content)) {
      content = content.replace(malformedResponsivePattern7, 'classNam'e'="$1 text-4xl font-bold text-gray-900 mb-4">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern8 = /className="([^"]*)"\s+text-xl\s+text-gray-600\s+mb-8">/g;
    if (malformedResponsivePattern8.test(content)) {
      content = content.replace(malformedResponsivePattern8, 'classNam'e'="$1 text-xl text-gray-600 mb-8">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern9 = /className="([^"]*)"\s+bg-white\s+p-6\s+rounded-lg\s+shadow-md">/g;
    if (malformedResponsivePattern9.test(content)) {
      content = content.replace(malformedResponsivePattern9, 'classNam'e'="$1 bg-white p-6 rounded-lg shadow-md">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern10 = /className="([^"]*)"\s+text-lg\s+font-semibold\s+text-gray-900\s+mb-2">/g;
    if (malformedResponsivePattern10.test(content)) {
      content = content.replace(malformedResponsivePattern10, 'classNam'e'="$1 text-lg font-semibold text-gray-900 mb-2">');
      modified = true;
    }

    // Fix malformed JSX attributes with missing quotes in responsive classes
    const malformedResponsivePattern11 = /className="([^"]*)"\s+text-gray-600">/g;
    if (malformedResponsivePattern11.test(content)) {
      content = content.replace(malformedResponsivePattern11, 'classNam'e'="$1 text-gray-600">');
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

// Function to recursively find TypeScript files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = path.join(__dirname, 'pag'e's');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixJSXSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 