#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

async function fixRemainingSyntax() {
  console.log('🔧 Fixing remaining syntax errors...');
  
  const filePath = path.join(__dirname, core/IntelligentAutomationOrchestrator.js');
  const content = await fs.readFile(filePath, utf8');
  
  let fixedContent = content
    // Fix missing commas in function calls
    .replace(/'taskDuration'\n        data\.duration/g, "'taskDuration',\n        data.duration")
    .replace(/'scheduler'\n        data/g, "'scheduler',\n        data")
    .replace(/'anomalyDetector'\n        anomaly/g, "'anomalyDetector',\n        anomaly")
    // Fix other syntax issues
    .replace(/,\s*\n\s*\)/g, \n      ))
    .replace(/,\s*\n\s*}/g, \n    });
  
  await fs.writeFile(filePath, fixedContent, utf8');
  console.log('✅ Fixed remaining syntax errors');
}

fixRemainingSyntax().catch(console.error); 