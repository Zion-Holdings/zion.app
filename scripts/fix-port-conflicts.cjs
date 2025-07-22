#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Port mapping to avoid conflicts
const PORT_MAPPING = {
  3002: 3003, // Main app uses 3002, automation uses 3003
  3001: 3004, // Reserve 3001 for health checks, use 3004 for other services
  3003: 3005, // Move automation from 3003 to 3005
  3004: 3006, // Move other services to 3006
  3005: 3007  // Move remaining services to 3007
};

function updatePortsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    for (const [oldPort, newPort] of Object.entries(PORT_MAPPING)) {
      const oldRegex = new RegExp(`:${oldPort}`, 'g');
      if (oldRegex.test(content)) {
        content = content.replace(oldRegex, `:${newPort}`);
        updated = true;
        console.log(`  Updated port ${oldPort} -> ${newPort}`);
      }
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function fixPortConflicts() {
  console.log('🔧 Fixing port conflicts in automation scripts...');
  
  const scriptsDir = path.join(__dirname);
  const files = fs.readdirSync(scriptsDir).filter(file => 
    file.endsWith('.cjs') || file.endsWith('.js')
  );
  
  let updatedFiles = 0;
  
  for (const file of files) {
    const filePath = path.join(scriptsDir, file);
    console.log(`\n📁 Processing: ${file}`);
    
    if (updatePortsInFile(filePath)) {
      updatedFiles++;
    }
  }
  
  console.log(`\n✅ Updated ${updatedFiles} files to fix port conflicts`);
  console.log('\n📋 New port mapping:');
  console.log('  Main App: 3002');
  console.log('  Automation: 3003');
  console.log('  Health Checks: 3001');
  console.log('  Other Services: 3004-3007');
}

if (require.main === module) {
  fixPortConflicts();
}

module.exports = { fixPortConflicts, PORT_MAPPING }; 