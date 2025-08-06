#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(content) {
  // Fix missing quotes in require statements
  content = content.replace(/require\('([^']+)'\)/g, "require(\'variable1\')");
  content = content.replace(/require\("([^"]+)"\)/g, \'require("variable1")\');
  
  // Fix template literals
  content = content.replace(/\$\{([^}]+)\}/g, \'${variable1}\');
  
  // Fix missing quotes in object properties
  content = content.replace(/(\w+):\s*"([^"]*)"\s*,/g, \'variable1: "variable2",\');
  content = content.replace(/(\w+):\s*\'([^\']*)\'\s*,/g, "variable1: 'variable2',");
  
  // Fix malformed strings
  content = content.replace(/"[^"]*\'[^"]*"/g, (match) => {
    return match.replace(/\'/g, "\\'");
  });
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*=\s*([^;]+)\s*$/gm, 'variable1 = variable2;');
  
  // Fix class names
  content = content.replace(/class\s+variable1/g, 'class AutomationSystem');
  
  return content;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function fixAllAutomationFiles() {
  const automationDir = __dirname;
  const jsFiles = fs.readdirSync(automationDir)
    .filter(file => file.endsWith('.js'));
    .map(file => path.join(automationDir, file));
  
  let fixedCount = 0;
  
  for (const file of jsFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
}

if (require.main === module) {
  fixAllAutomationFiles();
} 