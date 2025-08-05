const fs = require('fs');
const path = require('path');

// Function to fix className errors
function fixClassNameErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed className attributes with missing colons
    const malformedClassNamePattern = /className="([^"]*)\s+px-6\s+lg\s+px-8/g;
    if (malformedClassNamePattern.test(content)) {
      content = content.replace(malformedClassNamePattern, 'className="$1 px-6 lg:px-8"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in grid
    const malformedGridPattern = /className="([^"]*)\s+md\s+grid-cols-3/g;
    if (malformedGridPattern.test(content)) {
      content = content.replace(malformedGridPattern, 'className="$1 md:grid-cols-3"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern = /className="([^"]*)\s+sm\s+px-6/g;
    if (malformedResponsivePattern.test(content)) {
      content = content.replace(malformedResponsivePattern, 'className="$1 sm:px-6"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern2 = /className="([^"]*)\s+lg\s+px-8/g;
    if (malformedResponsivePattern2.test(content)) {
      content = content.replace(malformedResponsivePattern2, 'className="$1 lg:px-8"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern3 = /className="([^"]*)\s+md\s+grid-cols-1/g;
    if (malformedResponsivePattern3.test(content)) {
      content = content.replace(malformedResponsivePattern3, 'className="$1 md:grid-cols-1"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern4 = /className="([^"]*)\s+lg\s+px-8\s+py-32/g;
    if (malformedResponsivePattern4.test(content)) {
      content = content.replace(malformedResponsivePattern4, 'className="$1 lg:px-8 py-32"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern5 = /className="([^"]*)\s+sm\s+px-6\s+lg\s+px-8/g;
    if (malformedResponsivePattern5.test(content)) {
      content = content.replace(malformedResponsivePattern5, 'className="$1 sm:px-6 lg:px-8"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern6 = /className="([^"]*)\s+px-4\s+sm\s+px-6/g;
    if (malformedResponsivePattern6.test(content)) {
      content = content.replace(malformedResponsivePattern6, 'className="$1 px-4 sm:px-6"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern7 = /className="([^"]*)\s+px-4\s+sm\s+px-6\s+lg\s+px-8/g;
    if (malformedResponsivePattern7.test(content)) {
      content = content.replace(malformedResponsivePattern7, 'className="$1 px-4 sm:px-6 lg:px-8"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern8 = /className="([^"]*)\s+grid-cols-1\s+md\s+grid-cols-3/g;
    if (malformedResponsivePattern8.test(content)) {
      content = content.replace(malformedResponsivePattern8, 'className="$1 grid-cols-1 md:grid-cols-3"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern9 = /className="([^"]*)\s+max-w-7xl\s+mx-auto\s+px-4\s+sm\s+px-6\s+lg\s+px-8/g;
    if (malformedResponsivePattern9.test(content)) {
      content = content.replace(malformedResponsivePattern9, 'className="$1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"');
      modified = true;
    }

    // Fix malformed className attributes with missing colons in responsive classes
    const malformedResponsivePattern10 = /className="([^"]*)\s+max-w-7xl\s+mx-auto\s+px-4\s+sm\s+px-6\s+lg\s+px-8\s+py-32/g;
    if (malformedResponsivePattern10.test(content)) {
      content = content.replace(malformedResponsivePattern10, 'className="$1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"');
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
  if (fixClassNameErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 