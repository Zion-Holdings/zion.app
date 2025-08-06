#!/usr/bin/env node

const fs = require('fs').promises;

async function fixMcpDuplicates() {
  try {
    const filePath = 'mcp-automation-system.js';
    let content = await fs.readFile(filePath, 'utf8');

    // Remove duplicate variable declarations
    content = content.replace(/const variable1 = require\('path'\);/g, "const path = require('path');");
    content = content.replace(/const variable1 = require\('child_process'\);/g, "const { exec } = require('child_process');");
    content = content.replace(/const variable1 = require\('util'\);/g, "const { promisify } = require('util');");
    content = content.replace(/const variable1 = promisify\(exec\);/g, "const execAsync = promisify(exec);");
    
    // Fix class name
    content = content.replace(/class variable1 {/g, "class McpAutomationSystem {");

    await fs.writeFile(filePath, content, 'utf8');
    console.log('✅ Fixed duplicate variable declarations in mcp-automation-system.js');
  } catch (error) {
    console.error('❌ Error fixing duplicates:', error.message);
  }
}

fixMcpDuplicates();
