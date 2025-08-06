#!/usr/bin/env node

const fs = require('fs').promises;

async function fixSpecificFile() {
  try {
    const filePath = 'automation/launch-enhanced-autonomous-system.js';
    let content = await fs.readFile(filePath, 'utf8');
    
    // Fix the specific syntax errors
    content = content.replace(/const result = require\('fs'/g, "const result = require('fs')");
    content = content.replace(/const result = require\('fs';''/g, "const result = require('fs')");
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ Fixed launch-enhanced-autonomous-system.js');
  } catch (error) {
    console.error('❌ Error fixing file:', error.message);
  }
}

fixSpecificFile();
