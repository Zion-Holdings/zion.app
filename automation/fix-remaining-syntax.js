
const winston = require('winston');

const logger = winston.createLogger({
  level: info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: automation-script' },
  transports: [
    new winston.transports.File({ filename: logs/error.log', level: error' }),
    new winston.transports.File({ filename: logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

async function fixRemainingSyntax() {
  logger.info('🔧 Fixing remaining syntax errors...');
  
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
  logger.info('✅ Fixed remaining syntax errors');
}

fixRemainingSyntax().catch(console.error); 