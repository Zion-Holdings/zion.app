const fs = require('fs');
const path = require('path');

function convertToValidVariableName(filename) {
  return filename
    .replace(/\.tsx$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const filename = path.basename(filePath);
    const validName = convertToValidVariableName(filename);
    
    // Replace the invalid variable name with the valid one
    const fixedContent = content.replace(
      new RegExp(`const ${filename.replace('.tsx', '')}: NextPage`, 'g'),
      `const ${validName}: NextPage`
    ).replace(
      new RegExp(`export default ${filename.replace('.tsx', '')};`, 'g'),
      `export default ${validName};`
    );
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix blog pages
const blogDir = 'pages/blog';
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx'));
  blogFiles.forEach(file => {
    fixFile(path.join(blogDir, file));
  });
}

// Fix category pages
const categoryDir = 'pages/category';
if (fs.existsSync(categoryDir)) {
  const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx'));
  categoryFiles.forEach(file => {
    fixFile(path.join(categoryDir, file));
  });
}

// Fix service pages
const servicesDir = 'pages/services';
if (fs.existsSync(servicesDir)) {
  const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx'));
  serviceFiles.forEach(file => {
    fixFile(path.join(servicesDir, file));
  });
}

console.log('Variable name fixing completed!');
