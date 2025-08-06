#!/usr/bin/env node

const fs = require('fs').promises;

async function fixAllRemainingSyntax() {
  try {
    const filePath = 'automation/launch-enhanced-autonomous-system.js';
    let content = await fs.readFile(filePath, 'utf8');
    
    // Fix all console.log and console.error statements
    content = content.replace(/console\.log\([^)]*\)/g, (match) => {
      return match.replace(/\\'|\\"/g, "'").replace(/\)$/, "');");
    });
    
    content = content.replace(/console\.error\([^)]*\)/g, (match) => {
      return match.replace(/\\'|\\"/g, "'").replace(/\)$/, "');");
    });
    
    // Fix array syntax
    content = content.replace(/\[\'[^\']*\',\'\'/g, (match) => {
      return match.replace(/,\'\'$/, "',");
    });
    
    // Fix string literals
    content = content.replace(/\\'[^\\']*\\'/g, (match) => {
      return match.replace(/\\'/g, "'");
    });
    
    // Fix object property syntax
    content = content.replace(/:\s*"[^"]*",""/g, (match) => {
      return match.replace(/,""$/, '",');
    });
    
    // Fix require statements
    content = content.replace(/require\([^)]*\)/g, (match) => {
      return match.replace(/\\'|\\"/g, "'");
    });
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ Fixed all remaining syntax errors');
  } catch (error) {
    console.error('❌ Error fixing syntax:', error.message);
  }
}

fixAllRemainingSyntax();
