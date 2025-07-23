#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing automation syntax errors...');

// Fix continuous-improvement/index.js
const continuousImprovementPath = automation/continuous-improvement/index.js';
if (fs.existsSync(continuousImprovementPath)) {
  let content = fs.readFileSync(continuousImprovementPath, utf8');
  
  // Fix the syntax error on line 38
  content = content.replace(
    "API_ENDPOINT: process.env.CURSOR_API_ENDPOINT || https://api.cursor.sh',",""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""API_ENDPOINT: process.env.CURSOR_API_ENDPOINT || https://api.cursor.sh'"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  );
  
  // Fix the syntax error on line 39
  content = content.replace(
    "API_KEY: process.env.CURSOR_API_KEY,",""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""API_KEY: process.env.CURSOR_API_KEY"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  );
  
  // Fix the syntax error on line 40
  content = content.replace(
    "WORKSPACE_ID: process.env.CURSOR_WORKSPACE_ID,",""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""WORKSPACE_ID: process.env.CURSOR_WORKSPACE_ID"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  );
  
  // Fix the object literal syntax errors
  content = content.replace(
    /await this\.queueImprovement\('codeQuality', \{'          type: codeQuality',          severity: medium',          data: \{/g,
    "await this.queueImprovement('codeQuality', {\n          type: codeQuality',\n          severity: medium',\n          data: {"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  );
  
  content = content.replace(
    /await this\.queueImprovement\('performance', \{'          type: performance',          severity: high',          data: \{/g,
    "await this.queueImprovement('performance', {\n          type: performance',\n          severity: high',\n          data: {"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  );
  
  content = content.replace(
    /await this\.queueImprovement\('security', \{'          type: security',          severity: critical',          data: \{/g,
    "await this.queueImprovement('security', {\n          type: security',\n          severity: critical',\n          data: {"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  );
  
  fs.writeFileSync(continuousImprovementPath, content);
  console.log('✅ Fixed continuous-improvement/index.js');
}

// Fix port conflicts by updating port assignments
const automationFiles = [
  automation/enhanced-infinite-improvement.js',
  automation/intelligent-automation-orchestrator.js',
  automation/infinite-improvement-loop.js
];

automationFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, utf8');
    
    // Update port assignments to avoid conflicts
    content = content.replace(/port.*=.*3002/g, port = 3005');
    content = content.replace(/port.*=.*3004/g, port = 3006');
    content = content.replace(/port.*=.*3003/g, port = 3007');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed port conflicts in ${filePath}`);
  }
});

console.log('🎉 Automation syntax errors fixed!'); 