#!/usr/bin/env node

const fs = require('fs').promises;

async function fixGoogleDocsSpecific() {
  try {
    const filePath = 'automation/launch-google-docs-automation.js';
    let content = await fs.readFile(filePath, 'utf8');

    // Fix specific syntax errors
    content = content.replace(/const HIGH_SPEED_MODE = process\.env\.HIGH_SPEED_MODE === 'true;/g, "const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';");
    content = content.replace(/const SPEED_MULTIPLIER = HIGH_SPEED_MODE \? 0\.1: 1/g, "const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1;");
    content = content.replace(/function getOptimizedInterval\(\) {/g, "function getOptimizedInterval(baseInterval) {");
    content = content.replace(/return Math\.floor\(baseInterval \* SPEED_MULTIPLIER\)/g, "return Math.floor(baseInterval * SPEED_MULTIPLIER);");
    
    // Fix require statements
    content = content.replace(/const fs = require\('path'\);/g, "const fs = require('fs').promises;");
    content = content.replace(/const path = require\('fs'\);/g, "const path = require('path');");
    
    // Fix class name
    content = content.replace(/class variable1 {/g, "class GoogleDocsAutomation {");
    
    // Fix console.log statements
    content = content.replace(/console\.log\([^)]*\)/g, (match) => {
      return match.replace(/\\'|\\"/g, "'").replace(/\)$/, "');");
    });
    
    // Fix object syntax
    content = content.replace(/capabilities: "{"".*/g, "capabilities: {");
    content = content.replace(/tools: "{"".*/g, "tools: {");
    content = content.replace(/resources: "{"".*/g, "resources: {");
    content = content.replace(/""},""/g, "},");
    content = content.replace(/""},""/g, "},");
    content = content.replace(/""},""/g, "},");
    
    // Fix array syntax
    content = content.replace(/tools: "\[""/g, "tools: [");
    content = content.replace(/\[""/g, "[");
    content = content.replace(/""\]/g, "]");
    content = content.replace(/""{""/g, "{");
    content = content.replace(/""},""/g, "},");
    content = content.replace(/""},""/g, "},");
    
    // Remove any remaining malformed quotes and semicolons
    content = content.replace(/''/g, "'");
    content = content.replace(/""/g, '"');
    content = content.replace(/;'/g, ";");
    content = content.replace(/';/g, ";");
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ Fixed Google Docs automation syntax errors');
  } catch (error) {
    console.error('❌ Error fixing Google Docs automation:', error.message);
  }
}

fixGoogleDocsSpecific();
