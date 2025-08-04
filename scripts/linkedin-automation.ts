#!/usr/bin/env ts-node

import LinkedInBot from '../src/utils/linkedin-automation/linkedin-bot';
import LinkedInCronManager from '../src/utils/linkedin-automation/cron-manager';

async function main() {
  console.log('Starting LinkedIn Automation...');

  try {
    // Initialize LinkedIn bot
    const bot = new LinkedInBot();
    await bot.initialize();
    
    // Initialize cron manager
    const cronManager = new LinkedInCronManager();
    await cronManager.start();

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