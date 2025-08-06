#!/usr/bin/env node

const fs = require('fs').promises;

async function fixGoogleDocsConsole() {
  try {
    const filePath = 'automation/launch-google-docs-automation.js';
    let content = await fs.readFile(filePath, 'utf8');

    // Fix all console.log and console.error statements
    content = content.replace(/console\.log\([^)]*\)';;/g, (match) => {
      return match.replace(/\)';;$/, "');");
    });
    
    content = content.replace(/console\.error\([^)]*\)';;/g, (match) => {
      return match.replace(/\)';;$/, "');");
    });
    
    content = content.replace(/console\.log\([^)]*\)';/g, (match) => {
      return match.replace(/\)';$/, "');");
    });
    
    content = content.replace(/console\.error\([^)]*\)';/g, (match) => {
      return match.replace(/\)';$/, "');");
    });

    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ Fixed all console statements in Google Docs automation');
  } catch (error) {
    console.error('❌ Error fixing console statements:', error.message);
  }
}

fixGoogleDocsConsole();
