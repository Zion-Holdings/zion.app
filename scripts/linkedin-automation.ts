#!/usr/bin/env ts-node

import { LinkedInAutomation, LinkedInBot, LinkedInScheduler, LinkedInCronManager } from '../src/utils/linkedin-automation';

async function main() {
  console.log('Starting LinkedIn Automation...');

  try {
    // Initialize LinkedIn automation
    const automation = new LinkedInAutomation();
    
    // Initialize components
    const bot = new LinkedInBot();
    const scheduler = new LinkedInScheduler();
    const cronManager = new LinkedInCronManager();

    console.log('LinkedIn Automation components initialized successfully');

    // Start automation
    await bot.runAutomation();
    
    console.log('LinkedIn Automation completed successfully');
  } catch (error) {
    console.error('LinkedIn Automation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
} 