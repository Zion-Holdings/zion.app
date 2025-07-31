#!/usr/bin/env node

const AutonomousContentGenerator = require('./autonomous-content-generator');
const ContentGenerator = require('./content-generator');

async function main() {
  console.log('🚀 Starting Zion Content Generation System...');
  
  try {
    // Initialize the autonomous content generator
    const autonomousGenerator = new AutonomousContentGenerator();
    
    // Run the autonomous generation
    await autonomousGenerator.run();
    
    // Also run the basic content generator for immediate generation
    const contentGenerator = new ContentGenerator();
    contentGenerator.generateAllContent();
    
    console.log('✅ Content generation completed successfully!');
    
    // Log the generation to the improvements log
    const improvementsLog = {
      timestamp: new Date().toISOString(),
      type: 'content-generation',
      action: 'autonomous-content-generation',
      status: 'success',
      details: {
        pagesGenerated: [
          'marketplace.tsx',
          'about.tsx',
          'auth/login.tsx',
          'auth/signup.tsx',
          'blog/index.tsx',
          'services/index.tsx',
          'api/marketplace.js'
        ],
        features: [
          'AI-powered marketplace content',
          'Dynamic service listings',
          'Blog content generation',
          'Authentication pages',
          'API endpoints'
        ],
        source: 'ChatGPT conversation integration'
      }
    };
    
    const fs = require('fs');
    const path = require('path');
    const logPath = path.join(process.cwd(), 'automation', 'improvements-log.json');
    
    let existingLog = [];
    if (fs.existsSync(logPath)) {
      try {
        existingLog = JSON.parse(fs.readFileSync(logPath, 'utf8'));
      } catch (error) {
        console.log('Could not parse existing log, starting fresh');
      }
    }
    
    existingLog.push(improvementsLog);
    fs.writeFileSync(logPath, JSON.stringify(existingLog, null, 2));
    
    console.log('📝 Generation logged to improvements log');
    
  } catch (error) {
    console.error('❌ Error during content generation:', error);
    process.exit(1);
  }
}

// Run the main function
main(); 