const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
  return str
    .replace(/^[0-9]/, (match) => {
      const numberWords = {
        '5': 'Five',
        '4': 'Four',
        '3': 'Three',
        '2': 'Two',
        '1': 'One',
        '0': 'Zero'
      };
      return numberWords[match] || match;
    })
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
    .replace(/^(.)/, (match) => match.toUpperCase());
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract filename without extension
    const filename = path.basename(filePath, path.extname(filePath));
    const camelCaseName = toCamelCase(filename);
    
    // Replace the variable declaration
    let newContent = content.replace(
      new RegExp(`const\\s+${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`, 'g'),
      `const ${camelCaseName}: NextPage = () => {`
    );
    
    // Replace the export statement
    newContent = newContent.replace(
      new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')};`, 'g'),
      `export default ${camelCaseName};`
    );
    
    // Update title and meta description
    const title = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    newContent = newContent.replace(
      /<title>.*?<\/title>/g,
      `<title>${title} - Zion Tech Solutions</title>`
    );
    
    newContent = newContent.replace(
      /<meta name="description" content=".*?" \/>/g,
      `<meta name="description" content="${title} blog post" />`
    );
    
    // Update h1 content
    newContent = newContent.replace(
      /<h1>.*?<\/h1>/g,
      `<h1>${title}</h1>`
    );
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') && file.includes('-')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing files
console.log('Fixing invalid variable names in TypeScript files...');
const fixedCount = findAndFixFiles('./pages');
console.log(`Fixed ${fixedCount} files.`);
